import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { UAE_PLANAR_DOTS } from './uaePlanarDots';

/**
 * 3D Stylized Clean Globe Component with High-Definition UAE Dotted Map
 * - Clean, sleek digital sphere with atmosphere glow
 * - Undistorted, faithful UAE dotted matrix map with #363636 charcoal core & subtle cyan glow rim
 * - Autonomous smooth rotation with scroll-driven physical glide
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
    const COLOR_SKY = 0x7fe3ff;      // #7FE3FF

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
    renderer.toneMappingExposure = 1.75;

    // --- Lighting ---
    const ambientLight = new THREE.AmbientLight(0x263d56, 3.2);
    scene.add(ambientLight);

    const mainLight = new THREE.DirectionalLight(0xffffff, 3.4);
    mainLight.position.set(3, 6, 4);
    scene.add(mainLight);

    const cyanLight = new THREE.PointLight(COLOR_CYAN, 5.5, 40);
    cyanLight.position.set(-4, -1, 4);
    scene.add(cyanLight);

    const orangeLight = new THREE.PointLight(COLOR_ORANGE, 4.5, 40);
    orangeLight.position.set(4, 3, -2);
    scene.add(orangeLight);

    // --- Master Pivot Group ---
    const globeGroup = new THREE.Group();
    scene.add(globeGroup);

    const earthRadius = 1.5;

    // Helper: Create Luminous Glowing Matrix Dot Texture (Radiant White/Cyan Core + Smooth Bloom Aura)
    const createDotTexture = () => {
      const dotCanvas = document.createElement('canvas');
      dotCanvas.width = 128;
      dotCanvas.height = 128;
      const ctx = dotCanvas.getContext('2d');

      ctx.clearRect(0, 0, 128, 128);

      // 1. Soft Outer Luminous Cyan Bloom Aura
      const outerBloom = ctx.createRadialGradient(64, 64, 18, 64, 64, 52);
      outerBloom.addColorStop(0, 'rgba(61, 173, 236, 0.75)');
      outerBloom.addColorStop(0.45, 'rgba(61, 173, 236, 0.35)');
      outerBloom.addColorStop(1, 'rgba(61, 173, 236, 0.0)');
      ctx.fillStyle = outerBloom;
      ctx.beginPath();
      ctx.arc(64, 64, 52, 0, Math.PI * 2);
      ctx.fill();

      // 2. High-Tech Cyber Cyan Ring Accent
      const midGrad = ctx.createRadialGradient(64, 64, 8, 64, 64, 28);
      midGrad.addColorStop(0, 'rgba(127, 227, 255, 1.0)');
      midGrad.addColorStop(0.7, 'rgba(61, 173, 236, 0.95)');
      midGrad.addColorStop(1, 'rgba(40, 130, 200, 0.8)');
      ctx.fillStyle = midGrad;
      ctx.beginPath();
      ctx.arc(64, 64, 26, 0, Math.PI * 2);
      ctx.fill();

      // 3. Crisp Brilliant White-Cyan Core (Gives intense sharpness and luxury high-tech fidelity)
      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.arc(64, 64, 14, 0, Math.PI * 2);
      ctx.fill();

      const texture = new THREE.CanvasTexture(dotCanvas);
      return texture;
    };

    const dotTexture = createDotTexture();

    // --- Textures: Stylized Dark Digital Landmask ---
    const textureLoader = new THREE.TextureLoader();
    textureLoader.setCrossOrigin('anonymous');

    const earthDarkMap = textureLoader.load(
      'https://unpkg.com/three-globe/example/img/earth-dark.jpg'
    );
    const earthBumpMap = textureLoader.load(
      'https://unpkg.com/three-globe/example/img/earth-topology.png'
    );

    // 1. Clean Luminous Slate-Blue Core Earth (100% Borderless Sphere)
    const earthGeometry = new THREE.SphereGeometry(earthRadius, 96, 96);
    const earthMaterial = new THREE.MeshStandardMaterial({
      map: earthDarkMap,
      bumpMap: earthBumpMap,
      bumpScale: 0.04,
      roughness: 0.42,
      metalness: 0.45,
      color: new THREE.Color(0x354c68),
      emissive: new THREE.Color(0x182c42),
      emissiveIntensity: 0.85,
    });
    const earth = new THREE.Mesh(earthGeometry, earthMaterial);
    globeGroup.add(earth);

    // =========================================================================
    // 2. UNDISTORTED HIGH-CONTRAST UAE DOTTED MAP (Optimized for Visible Upper Arc)
    // =========================================================================
    // Normal positioned directly on the visible upper-left crest facing camera in Hero view
    const heroVisibleNormal = new THREE.Vector3(-0.48, 0.52, 0.70).normalize();
    const centerPos = heroVisibleNormal.clone().multiplyScalar(earthRadius);

    const worldUp = new THREE.Vector3(0, 1, 0);
    const tangentRight = new THREE.Vector3().crossVectors(worldUp, heroVisibleNormal).normalize();
    const tangentUp = new THREE.Vector3().crossVectors(heroVisibleNormal, tangentRight).normalize();

    // Map physical scale - calibrated to fit 100% on the visible dome without cutoff
    const mapScale = 0.95;
    const uaeRadius = earthRadius + 0.015;
    const dotPositions = [];

    UAE_PLANAR_DOTS.forEach(([u, v]) => {
      // Tangent plane position
      const p = centerPos.clone()
        .addScaledVector(tangentRight, u * mapScale)
        .addScaledVector(tangentUp, v * mapScale);

      // Project smoothly onto the sphere surface
      const pSphere = p.normalize().multiplyScalar(uaeRadius);
      dotPositions.push(pSphere.x, pSphere.y, pSphere.z);
    });

    const uaeDotsGeometry = new THREE.BufferGeometry();
    uaeDotsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(dotPositions, 3));

    const baseDotSize = isMobile ? 0.048 : 0.062;
    const uaeDotsMaterial = new THREE.PointsMaterial({
      size: baseDotSize,
      map: dotTexture,
      transparent: true,
      opacity: 0.98,
      blending: THREE.NormalBlending,
      depthWrite: false,
    });

    const uaePoints = new THREE.Points(uaeDotsGeometry, uaeDotsMaterial);
    globeGroup.add(uaePoints);

    // --- Initial Dynamic Bottom-Right Corner Hero Placement ---
    const initialScale = isMobile ? 1.10 : 1.32;
    const initialX = isMobile ? 0.85 : 1.68;
    const initialY = isMobile ? -1.25 : -1.10;
    const CLOCKWISE_TILT = -0.26; // Elegant, natural clockwise tilt (~ -15 deg)

    globeGroup.position.set(initialX, initialY, 0);
    globeGroup.scale.set(initialScale, initialScale, initialScale);
    globeGroup.rotation.y = 0;
    globeGroup.rotation.x = 0.25;
    globeGroup.rotation.z = CLOCKWISE_TILT;


    // --- Scroll-Driven Physical Shift ---
    let targetScrollProgress = 0;
    let currentScrollProgress = 0;

    const onScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset || 0;
      const vh = window.innerHeight || 800;
      // Scroll progress from 0 (Hero) to 1.0 (Services) to 2.0+ (Content)
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

        // Dynamic motion transition from Hero (p=0) into Services (p>=1):
        if (window.innerWidth >= 1024) {
          // Hero (p=0): dynamic bottom-right corner arc
          // Services (p=1): smoothly transitions and docks alongside services cards
          const targetX = initialX + Math.min(p, 1.2) * 0.10;
          const targetY = initialY + Math.min(p, 1.2) * 0.70 + Math.sin(time * 0.8) * 0.03;
          const targetScale = initialScale + Math.min(p, 1.0) * 0.10;

          globeGroup.position.x = targetX;
          globeGroup.position.y = targetY;
          globeGroup.scale.set(targetScale, targetScale, targetScale);
        } else {
          // Mobile: glide upward into background on scroll
          const targetY = initialY + Math.min(p, 1.2) * 0.65 + Math.sin(time * 0.8) * 0.03;
          globeGroup.position.x = initialX;
          globeGroup.position.y = targetY;
          const targetScale = initialScale + Math.min(p, 1.0) * 0.10;
          globeGroup.scale.set(targetScale, targetScale, targetScale);
        }

        // Autonomous smooth spin starting from Hero view + active scroll spin + clockwise tilt
        globeGroup.rotation.y = time * 0.10 + p * 1.5;
        globeGroup.rotation.x = 0.25 + p * 0.10 + Math.sin(time * 0.5) * 0.02;
        globeGroup.rotation.z = CLOCKWISE_TILT + Math.sin(time * 0.4) * 0.015;
      }

      // Dynamic Gentle Shimmer on UAE Dotted Matrix
      if (uaeDotsMaterial) {
        uaeDotsMaterial.size = baseDotSize * (1 + Math.sin(time * 2.5) * 0.06);
        uaeDotsMaterial.opacity = 0.92 + Math.sin(time * 2.0) * 0.08;
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
      earthDarkMap.dispose();
      earthBumpMap.dispose();
      dotTexture.dispose();
      uaeDotsGeometry.dispose();
      uaeDotsMaterial.dispose();

      renderer.dispose();
    };
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-10 overflow-hidden select-none">
      <canvas
        ref={canvasRef}
        className="w-full h-full block pointer-events-none touch-none outline-none border-0"
      />
    </div>
  );
};

export default Globe;

