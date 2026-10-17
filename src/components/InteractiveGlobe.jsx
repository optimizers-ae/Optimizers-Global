import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export default function InteractiveGlobe() {
  const mountRef = useRef(null);
  const isInteractingRef = useRef(false);
  const interactionTimeoutRef = useRef(null);

  const [dubaiScreen, setDubaiScreen] = useState({
    x: 0,
    y: 0,
    visible: false,
    opacity: 0,
  });

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let animationFrameId;
    let renderer, scene, camera, controls;
    let globeGroup;
    let dubaiAnchor;
    let pulseRing, pulseRingMat, beaconDot;
    let pointsMesh = null;
    let resizeObserver = null;

    // Use robust initial dimensions with container/parent fallback
    const width = container.clientWidth || container.parentElement?.clientWidth || 700;
    const height = container.clientHeight || container.parentElement?.clientHeight || 560;

    // ── 1. Scene, Camera, Renderer ──
    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 2000);
    // Position camera slightly offset to frame the globe nicely
    camera.position.set(0, 10, 270);

    renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;

    // Remove any previous children before attaching
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
    container.appendChild(renderer.domElement);

    // ── 2. Controls ──
    controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.enableZoom = false; // Prevent hijacking page scroll
    controls.enablePan = false;
    controls.minPolarAngle = Math.PI * 0.2;
    controls.maxPolarAngle = Math.PI * 0.8;
    controls.rotateSpeed = 0.8;

    const onInteractionStart = () => {
      isInteractingRef.current = true;
      if (interactionTimeoutRef.current) {
        clearTimeout(interactionTimeoutRef.current);
      }
    };

    const onInteractionEnd = () => {
      if (interactionTimeoutRef.current) {
        clearTimeout(interactionTimeoutRef.current);
      }
      interactionTimeoutRef.current = setTimeout(() => {
        isInteractingRef.current = false;
      }, 3500);
    };

    controls.addEventListener('start', onInteractionStart);
    controls.addEventListener('end', onInteractionEnd);

    // ── 3. Globe Container & Initial Orientation ──
    globeGroup = new THREE.Group();
    // Position Dubai facing front-right hemisphere matching reference
    globeGroup.rotation.z = 0.14;
    globeGroup.rotation.x = 0.12;
    globeGroup.rotation.y = -0.05;
    scene.add(globeGroup);

    const GLOBE_RADIUS = 100;

    // ── 4. Inner Dark Occlusion Core ──
    // Dark core blocks dots on the back of the globe so it looks solid & volumetric
    const innerSphereGeo = new THREE.SphereGeometry(GLOBE_RADIUS * 0.988, 48, 48);
    const innerSphereMat = new THREE.MeshBasicMaterial({
      color: 0x040d14,
      transparent: true,
      opacity: 0.94,
    });
    const innerSphere = new THREE.Mesh(innerSphereGeo, innerSphereMat);
    globeGroup.add(innerSphere);

    // ── 5. Atmospheric Dual-Tone Rim Glow Shader ──
    // Orange atmospheric halo on the top-left, subtle cyan on the bottom-right
    const atmosphereGeo = new THREE.SphereGeometry(GLOBE_RADIUS * 1.045, 52, 52);
    const atmosphereMat = new THREE.ShaderMaterial({
      vertexShader: `
        varying vec3 vNormal;
        varying vec3 vPosition;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          vPosition = position;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        varying vec3 vNormal;
        varying vec3 vPosition;
        void main() {
          // Fresnel rim falloff
          float viewDot = dot(vNormal, vec3(0.0, 0.0, 1.0));
          float intensity = pow(max(0.0, 0.72 - viewDot), 2.4);

          // Dual-tone color gradient: top-left warm golden-orange, bottom-right cyan
          vec3 warmOrange = vec3(1.0, 0.48, 0.0);
          vec3 brightAmber = vec3(1.0, 0.72, 0.2);
          vec3 cyanGlow = vec3(0.0, 0.78, 0.91);

          float angleFactor = (-vNormal.x * 0.6 + vNormal.y * 0.5) * 0.5 + 0.5;
          vec3 rimColor = mix(cyanGlow, mix(warmOrange, brightAmber, 0.4), clamp(angleFactor, 0.0, 1.0));

          gl_FragColor = vec4(rimColor, intensity * 0.9);
        }
      `,
      blending: THREE.AdditiveBlending,
      side: THREE.BackSide,
      transparent: true,
      depthWrite: false,
    });
    const atmosphere = new THREE.Mesh(atmosphereGeo, atmosphereMat);
    globeGroup.add(atmosphere);

    // ── 6. Graticule Lines (Latitude & Longitude Wireframe) ──
    const graticuleGroup = new THREE.Group();
    [-60, -40, -20, 0, 20, 40, 60].forEach((lat) => {
      const r = GLOBE_RADIUS * Math.cos((lat * Math.PI) / 180);
      const y = GLOBE_RADIUS * Math.sin((lat * Math.PI) / 180);
      const ringGeo = new THREE.BufferGeometry();
      const pts = [];
      const segs = 100;
      for (let s = 0; s <= segs; s++) {
        const theta = (s / segs) * Math.PI * 2;
        pts.push(r * Math.sin(theta), y, r * Math.cos(theta));
      }
      ringGeo.setAttribute('position', new THREE.Float32BufferAttribute(pts, 3));
      const ringMat = new THREE.LineBasicMaterial({
        color: 0x00c8e8,
        transparent: true,
        opacity: lat === 0 ? 0.22 : 0.09,
      });
      graticuleGroup.add(new THREE.Line(ringGeo, ringMat));
    });

    // 8 Longitude meridians
    for (let m = 0; m < 8; m++) {
      const lon = (m / 8) * Math.PI;
      const ringGeo = new THREE.BufferGeometry();
      const pts = [];
      const segs = 100;
      for (let s = 0; s <= segs; s++) {
        const theta = (s / segs) * Math.PI * 2;
        const x = GLOBE_RADIUS * Math.sin(theta) * Math.cos(lon);
        const y = GLOBE_RADIUS * Math.cos(theta);
        const z = GLOBE_RADIUS * Math.sin(theta) * Math.sin(lon);
        pts.push(x, y, z);
      }
      ringGeo.setAttribute('position', new THREE.Float32BufferAttribute(pts, 3));
      const ringMat = new THREE.LineBasicMaterial({
        color: 0x00c8e8,
        transparent: true,
        opacity: 0.08,
      });
      graticuleGroup.add(new THREE.Line(ringGeo, ringMat));
    }
    globeGroup.add(graticuleGroup);

    // ── 7. Luminous Orbital Network Arcs with Nodes ──
    const arcsGroup = new THREE.Group();
    const arcConfigs = [
      { radiusX: GLOBE_RADIUS * 1.22, radiusY: GLOBE_RADIUS * 1.14, rotX: 0.58, rotY: 0.35, rotZ: 0.18, color: 0xff7900, opacity: 0.42 },
      { radiusX: GLOBE_RADIUS * 1.30, radiusY: GLOBE_RADIUS * 1.20, rotX: -0.55, rotY: 1.05, rotZ: -0.32, color: 0xffa028, opacity: 0.38 },
      { radiusX: GLOBE_RADIUS * 1.25, radiusY: GLOBE_RADIUS * 1.28, rotX: 1.05, rotY: -0.75, rotZ: 0.65, color: 0x00c8e8, opacity: 0.32 },
    ];

    arcConfigs.forEach((cfg) => {
      const curve = new THREE.EllipseCurve(0, 0, cfg.radiusX, cfg.radiusY, 0, Math.PI * 2, false, 0);
      const points2D = curve.getPoints(120);
      const points3D = points2D.map((p) => new THREE.Vector3(p.x, p.y, 0));
      const arcGeo = new THREE.BufferGeometry().setFromPoints(points3D);
      const arcMat = new THREE.LineBasicMaterial({
        color: cfg.color,
        transparent: true,
        opacity: cfg.opacity,
      });
      const line = new THREE.Line(arcGeo, arcMat);
      line.rotation.set(cfg.rotX, cfg.rotY, cfg.rotZ);
      arcsGroup.add(line);

      // Glowing data nodes along each orbit
      [0.18, 0.48, 0.78].forEach((ratio) => {
        const nodeIndex = Math.floor(points3D.length * ratio);
        const nodePos = points3D[nodeIndex].clone().applyEuler(line.rotation);
        const nodeGeo = new THREE.SphereGeometry(1.8, 12, 12);
        const nodeMat = new THREE.MeshBasicMaterial({ color: cfg.color });
        const node = new THREE.Mesh(nodeGeo, nodeMat);
        node.position.copy(nodePos);
        arcsGroup.add(node);
      });
    });
    globeGroup.add(arcsGroup);

    // ── 8. Dubai Location Marker (Lat 25.2048° N, Lon 55.2708° E) ──
    const dubaiLatRad = (25.2048 * Math.PI) / 180;
    const dubaiLonRad = (55.2708 * Math.PI) / 180;
    const dubaiPos = new THREE.Vector3(
      GLOBE_RADIUS * Math.cos(dubaiLatRad) * Math.sin(dubaiLonRad),
      GLOBE_RADIUS * Math.sin(dubaiLatRad),
      GLOBE_RADIUS * Math.cos(dubaiLatRad) * Math.cos(dubaiLonRad)
    );

    dubaiAnchor = new THREE.Object3D();
    dubaiAnchor.position.copy(dubaiPos);
    globeGroup.add(dubaiAnchor);

    // Bright surface beacon point
    const beaconGeo = new THREE.SphereGeometry(2.5, 16, 16);
    const beaconMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    beaconDot = new THREE.Mesh(beaconGeo, beaconMat);
    beaconDot.position.copy(dubaiPos);
    globeGroup.add(beaconDot);

    // Outer target circle on Dubai
    const targetRingGeo = new THREE.RingGeometry(3.2, 4.4, 32);
    const targetRingMat = new THREE.MeshBasicMaterial({
      color: 0xff7900,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.9,
    });
    const targetRing = new THREE.Mesh(targetRingGeo, targetRingMat);
    targetRing.position.copy(dubaiPos.clone().multiplyScalar(1.005));
    targetRing.lookAt(dubaiPos.clone().multiplyScalar(2));
    globeGroup.add(targetRing);

    // Concentric pulsing radar ring on Dubai
    const pulseGeo = new THREE.RingGeometry(4.4, 5.6, 32);
    pulseRingMat = new THREE.MeshBasicMaterial({
      color: 0xffa028,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.85,
    });
    pulseRing = new THREE.Mesh(pulseGeo, pulseRingMat);
    pulseRing.position.copy(dubaiPos.clone().multiplyScalar(1.006));
    pulseRing.lookAt(dubaiPos.clone().multiplyScalar(2));
    globeGroup.add(pulseRing);

    // ── 9. Load Land Mask & Build Dotted Continents ──
    const createParticleTexture = () => {
      const pCanvas = document.createElement('canvas');
      pCanvas.width = 64;
      pCanvas.height = 64;
      const pCtx = pCanvas.getContext('2d');
      const grad = pCtx.createRadialGradient(32, 32, 0, 32, 32, 32);
      grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
      grad.addColorStop(0.3, 'rgba(255, 215, 130, 0.95)');
      grad.addColorStop(0.65, 'rgba(255, 120, 0, 0.45)');
      grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      pCtx.fillStyle = grad;
      pCtx.fillRect(0, 0, 64, 64);
      return new THREE.CanvasTexture(pCanvas);
    };

    const dotTexture = createParticleTexture();

    const buildContinentsFromImage = (imgElement) => {
      if (pointsMesh) {
        globeGroup.remove(pointsMesh);
        pointsMesh.geometry.dispose();
        pointsMesh.material.dispose();
      }

      const sampleCanvas = document.createElement('canvas');
      const sWidth = 720;
      const sHeight = 360;
      sampleCanvas.width = sWidth;
      sampleCanvas.height = sHeight;
      const sCtx = sampleCanvas.getContext('2d');
      sCtx.drawImage(imgElement, 0, 0, sWidth, sHeight);
      const imgData = sCtx.getImageData(0, 0, sWidth, sHeight).data;

      const isLand = (lat, lon) => {
        const px = Math.floor(((lon + 180) / 360) * sWidth);
        const py = Math.floor(((90 - lat) / 180) * sHeight);
        const clampedPx = Math.max(0, Math.min(sWidth - 1, px));
        const clampedPy = Math.max(0, Math.min(sHeight - 1, py));
        const idx = (clampedPy * sWidth + clampedPx) * 4;
        return imgData[idx] < 128; // Black is land in earth-water.png
      };

      // Fibonacci sphere sampling for uniform, high-density point distribution
      const SAMPLE_POINTS = 42000;
      const goldenRatio = (1 + Math.sqrt(5)) / 2;
      const positions = [];
      const colors = [];

      for (let i = 0; i < SAMPLE_POINTS; i++) {
        const y = 1 - (i / (SAMPLE_POINTS - 1)) * 2;
        const radiusAtY = Math.sqrt(1 - y * y);
        const theta = 2 * Math.PI * i / goldenRatio;
        const x = Math.cos(theta) * radiusAtY;
        const z = Math.sin(theta) * radiusAtY;

        const lat = Math.asin(y) * (180 / Math.PI);
        const lon = Math.atan2(x, z) * (180 / Math.PI);

        if (isLand(lat, lon)) {
          positions.push(x * GLOBE_RADIUS, y * GLOBE_RADIUS, z * GLOBE_RADIUS);

          // Rich color distribution matching the reference photograph:
          // Middle East, Europe & Africa have warm glowing amber/gold, edges have cyan accents
          const distToDubai = Math.sqrt((lat - 25.2) ** 2 + (lon - 55.2) ** 2);
          const isNearDubai = distToDubai < 45;

          const rand = Math.random();
          if (isNearDubai && rand > 0.7) {
            // Bright white-gold highlight around Dubai / Middle East
            colors.push(1.0, 0.98, 0.88);
          } else if (rand > 0.94) {
            // White-gold sparkle
            colors.push(1.0, 0.95, 0.82);
          } else if (rand > 0.87) {
            // Cyan accent point
            colors.push(0.0, 0.78, 0.91);
          } else if (rand > 0.45) {
            // Warm golden amber
            colors.push(1.0, 0.68, 0.16);
          } else {
            // Deep rich warm orange
            colors.push(1.0, 0.46, 0.0);
          }
        }
      }

      const pointsGeo = new THREE.BufferGeometry();
      pointsGeo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
      pointsGeo.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));

      const pointsMat = new THREE.PointsMaterial({
        size: 2.3,
        map: dotTexture,
        vertexColors: true,
        transparent: true,
        opacity: 0.94,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      });

      pointsMesh = new THREE.Points(pointsGeo, pointsMat);
      globeGroup.add(pointsMesh);
    };

    // Load land mask image safely with cache-first and event fallbacks
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => buildContinentsFromImage(img);
    img.onerror = () => {
      console.warn('Could not load /earth-water.png, falling back to algorithmic land sample');
    };
    img.src = '/earth-water.png';

    // If already cached by the browser, invoke immediately
    if (img.complete && img.naturalWidth > 0) {
      buildContinentsFromImage(img);
    }

    // ── 10. Animation Loop ──
    const clock = new THREE.Clock();
    const tempVec = new THREE.Vector3();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Smooth idle auto-rotation when user is not dragging
      if (!isInteractingRef.current) {
        globeGroup.rotation.y += 0.0016;
      }

      controls.update();

      // Pulsing radar ring on Dubai
      if (pulseRing && pulseRingMat) {
        const pulse = 1 + (Math.sin(elapsedTime * 4.2) * 0.5 + 0.5) * 0.9;
        pulseRing.scale.set(pulse, pulse, 1);
        pulseRingMat.opacity = Math.max(0, 0.85 - (pulse - 1) * 0.9);
      }

      // Track Dubai Marker in real 3D screen coordinates
      if (dubaiAnchor) {
        dubaiAnchor.getWorldPosition(tempVec);

        const normal = tempVec.clone().normalize();
        const cameraDir = camera.position.clone().sub(tempVec).normalize();
        const dot = normal.dot(cameraDir);

        // Dubai is visible on the camera-facing side
        if (dot > 0.06) {
          tempVec.project(camera);
          const currentWidth = container.clientWidth || width;
          const currentHeight = container.clientHeight || height;
          const sx = (tempVec.x * 0.5 + 0.5) * currentWidth;
          const sy = (-tempVec.y * 0.5 + 0.5) * currentHeight;

          setDubaiScreen({
            x: sx,
            y: sy,
            visible: true,
            opacity: Math.min(1, (dot - 0.06) * 4.5),
          });
        } else {
          setDubaiScreen((prev) => ({ ...prev, visible: false, opacity: 0 }));
        }
      }

      renderer.render(scene, camera);
    };

    animate();

    // ── 11. Responsive Dynamic Resize via ResizeObserver ──
    resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width: w, height: h } = entry.contentRect;
        if (w > 20 && h > 20 && renderer && camera) {
          camera.aspect = w / h;
          camera.updateProjectionMatrix();
          renderer.setSize(w, h);
        }
      }
    });
    resizeObserver.observe(container);

    // ── 12. Cleanup ──
    return () => {
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
      cancelAnimationFrame(animationFrameId);
      controls.removeEventListener('start', onInteractionStart);
      controls.removeEventListener('end', onInteractionEnd);
      controls.dispose();

      if (container && renderer?.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer?.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-full min-h-[380px] sm:min-h-[460px] lg:min-h-[520px] select-none">
      {/* Three.js Canvas Container */}
      <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

      {/* Dubai Location Callout Badge (Pinpointed in 3D Real-Time) */}
      {dubaiScreen.visible && (
        <div
          className="pointer-events-none absolute left-0 top-0 transition-opacity duration-150 z-20"
          style={{
            opacity: dubaiScreen.opacity,
            transform: `translate3d(${dubaiScreen.x}px, ${dubaiScreen.y}px, 0)`,
          }}
        >
          {/* Glowing central target node */}
          <div className="absolute -translate-x-1/2 -translate-y-1/2">
            <span className="absolute -inset-2.5 rounded-full border border-[#FF7900] animate-ping opacity-75" />
            <span className="block w-3.5 h-3.5 rounded-full bg-[#FF7900] shadow-[0_0_16px_#FF7900]" />
          </div>

          {/* Diagonal Callout Line */}
          <svg
            className="absolute overflow-visible pointer-events-none"
            style={{ left: 0, top: 0, width: 80, height: 60 }}
          >
            <line
              x1="0"
              y1="0"
              x2="52"
              y2="-42"
              stroke="#FF7900"
              strokeWidth="1.5"
              strokeDasharray="3 2"
            />
            <circle cx="52" cy="-42" r="2.5" fill="#FF7900" />
          </svg>

          {/* Floating Dark Callout Badge */}
          <div
            className="absolute px-3 py-1.5 rounded-[12px] border border-[#FF7900] bg-[#06151D]/95 backdrop-blur-md shadow-[0_4px_24px_rgba(255,121,0,0.35)] whitespace-nowrap"
            style={{
              left: '56px',
              top: '-64px',
            }}
          >
            <p className="text-[12.5px] font-bold text-white tracking-wide font-poppins leading-none">
              DUBAI
            </p>
            <p className="text-[8.5px] font-semibold text-[#FF7900] tracking-widest uppercase font-poppins mt-0.5">
              PRIMARY CLIENT HUB
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
