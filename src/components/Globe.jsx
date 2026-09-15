import { useEffect, useRef } from 'react';
import * as THREE from 'three';

/**
 * 3D Stylized Clean Globe Component
 * - Clean, sleek digital sphere with atmosphere glow
 * - Autonomous smooth rotation (no cursor tracking/dragging)
 * - Fixed Full-Viewport Scroll Transition
 * - 100% Mathematically Flawless Sphere & Zero Border Artifacts
 */
const Globe = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let animationFrameId;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobile = window.innerWidth < 768;

    // --- Theme Palette ---
    const COLOR_CYAN = 0x3dadec;     // #3DADEC
    const COLOR_ORANGE = 0xe26d22;   // #e26d22

    // --- Scene & Camera ---
    const scene = new THREE.Scene();
    scene.background = null;

    const camera = new THREE.PerspectiveCamera(38, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 0, isMobile ? 6.2 : 5.0);

    // --- WebGL Renderer ---
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight, false);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.4;

    // --- Lighting ---
    const ambientLight = new THREE.AmbientLight(0x1a222d, 3.2);
    scene.add(ambientLight);

    const mainLight = new THREE.DirectionalLight(0xffffff, 2.8);
    mainLight.position.set(5, 4, 6);
    scene.add(mainLight);

    const cyanLight = new THREE.PointLight(COLOR_CYAN, 4.8, 40);
    cyanLight.position.set(-5, -2, 4);
    scene.add(cyanLight);

    const orangeLight = new THREE.PointLight(COLOR_ORANGE, 5.2, 40);
    orangeLight.position.set(5, 3, -4);
    scene.add(orangeLight);

    // --- Master Pivot Group ---
    const globeGroup = new THREE.Group();
    scene.add(globeGroup);

    const earthRadius = 1.5;

    // --- Textures: Stylized Dark Digital Landmask ---
    const textureLoader = new THREE.TextureLoader();
    textureLoader.setCrossOrigin('anonymous');

    const earthDarkMap = textureLoader.load(
      'https://unpkg.com/three-globe/example/img/earth-dark.jpg'
    );
    const earthBumpMap = textureLoader.load(
      'https://unpkg.com/three-globe/example/img/earth-topology.png'
    );

    // 1. Stylized Core Earth (Clean dark land with subtle emissive matrix)
    const earthGeometry = new THREE.SphereGeometry(earthRadius, 96, 96);
    const earthMaterial = new THREE.MeshStandardMaterial({
      map: earthDarkMap,
      bumpMap: earthBumpMap,
      bumpScale: 0.08,
      roughness: 0.35,
      metalness: 0.25,
      color: new THREE.Color(0x3a4856),
      emissive: new THREE.Color(0x0e2233),
      emissiveIntensity: 0.85,
    });
    const earth = new THREE.Mesh(earthGeometry, earthMaterial);
    globeGroup.add(earth);

    // 2. Smooth Borderless Atmosphere Halo Shader
    const atmosphereVertexShader = `
      varying vec3 vNormal;
      varying vec3 vPosition;
      void main() {
        vNormal = normalize(normalMatrix * normal);
        vPosition = (modelViewMatrix * vec4(position, 1.0)).xyz;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `;

    const atmosphereFragmentShader = `
      varying vec3 vNormal;
      varying vec3 vPosition;
      uniform vec3 colorCyan;
      uniform vec3 colorOrange;
      uniform float intensity;
      void main() {
        vec3 viewDir = normalize(-vPosition);
        float dotNV = max(0.0, dot(vNormal, viewDir));
        float rim = 1.0 - dotNV;
        float glow = pow(rim, 3.4) * intensity;
        float edgeFade = smoothstep(0.0, 0.35, dotNV);
        vec3 glowColor = mix(colorCyan, colorOrange, pow(rim, 2.2) * 0.7);
        gl_FragColor = vec4(glowColor, glow * edgeFade * 0.85);
      }
    `;

    const atmosphereMaterial = new THREE.ShaderMaterial({
      vertexShader: atmosphereVertexShader,
      fragmentShader: atmosphereFragmentShader,
      uniforms: {
        colorCyan: { value: new THREE.Color(COLOR_CYAN) },
        colorOrange: { value: new THREE.Color(COLOR_ORANGE) },
        intensity: { value: 0.95 },
      },
      transparent: true,
      blending: THREE.AdditiveBlending,
      side: THREE.FrontSide,
      depthWrite: false,
    });

    const atmosphere = new THREE.Mesh(
      new THREE.SphereGeometry(earthRadius + 0.12, 96, 96),
      atmosphereMaterial
    );
    globeGroup.add(atmosphere);

    // --- Scroll-Driven Physical Shift (No Cursor Movement) ---
    let targetScrollProgress = 0;
    let currentScrollProgress = 0;

    const onScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset || 0;
      const vh = window.innerHeight || 800;
      // Scroll progress from 0 (Hero) to 1.0 (Services) to 2.0+ (About)
      targetScrollProgress = Math.max(0, scrollY / (vh * 0.85));
    };

    window.addEventListener('scroll', onScroll, { passive: true });

    // --- Full-Window Resize Handler ---
    const handleResize = () => {
      if (!canvas || !renderer || !camera) return;
      const width = window.innerWidth;
      const height = window.innerHeight;

      camera.aspect = width / height;
      camera.position.set(0, 0, window.innerWidth < 768 ? 6.2 : 5.0);
      camera.updateProjectionMatrix();

      renderer.setSize(width, height, false);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    // --- Main 60FPS Animation Loop ---
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const time = performance.now() * 0.001;

      if (!prefersReducedMotion) {
        // Smooth Scroll Interpolation
        currentScrollProgress += (targetScrollProgress - currentScrollProgress) * 0.07;
        const p = currentScrollProgress;

        // Physical scroll motion:
        if (window.innerWidth >= 1024) {
          // Desktop: glide from center (0) to right column (+1.55) and down (-0.3)
          const targetX = Math.min(p, 1.3) * 1.55;
          const targetY = -Math.min(p, 1.3) * 0.35 + Math.sin(time * 0.8) * 0.04;
          const targetScale = Math.max(1 - p * 0.12, 0.78);

          globeGroup.position.x = targetX;
          globeGroup.position.y = targetY;
          globeGroup.scale.set(targetScale, targetScale, targetScale);
        } else {
          // Mobile: move down slightly
          const targetY = -Math.min(p, 1.2) * 0.5 + Math.sin(time * 0.8) * 0.04;
          globeGroup.position.x = 0;
          globeGroup.position.y = targetY;
          const targetScale = Math.max(1 - p * 0.15, 0.7);
          globeGroup.scale.set(targetScale, targetScale, targetScale);
        }

        // Autonomous smooth spin + subtle natural axis tilt
        globeGroup.rotation.y = time * 0.18 + p * 1.8;
        globeGroup.rotation.x = 0.2 + p * 0.15;
      }

      // Atmosphere Pulsing
      if (atmosphereMaterial.uniforms) {
        atmosphereMaterial.uniforms.intensity.value = 0.85 + Math.sin(time * 1.8) * 0.15;
      }

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', handleResize);

      earthGeometry.dispose();
      earthMaterial.dispose();
      atmosphereMaterial.dispose();
      earthDarkMap.dispose();
      earthBumpMap.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden select-none">
      <canvas
        ref={canvasRef}
        className="w-full h-full block pointer-events-none touch-none outline-none border-0"
      />
    </div>
  );
};

export default Globe;
