import { Sparkles, ArrowDown } from 'lucide-react';
import heroBannerVideo from '../assets/hero_banner.mp4';

/**
 * Hero Component - Clean, Center-aligned Hero Section
 * Strict Layering: BG (Video + Gradients z-0) -> Globe (Canvas z-10) -> Text (Hero Content z-20)
 * Note: Banner video is strictly contained in this Hero section and not visible on the rest of the website.
 */
const Hero = () => {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen overflow-hidden flex flex-col justify-center items-center text-center pointer-events-none"
    >
      {/* 1. HERO BACKGROUND LAYER (BG - z-0) - Strictly contained in Hero section */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden select-none">
        <video
          src={heroBannerVideo}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
        {/* Sleek dark gradient overlays to blend seamlessly into #121212 and ensure contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#121212]/10  to-[#121212]/10 pointer-events-none" />
      </div>

      {/* Atmospheric Ambient Glow within Hero */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(61,173,236,0.12),transparent_70%)] pointer-events-none z-0" />

      {/* 2. HERO CONTENT / TEXT LAYER (TEXT - z-20) - Sits in front of Globe (z-10) and BG (z-0) */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center text-center pt-28 pb-16 lg:py-0">
        
        {/* Main Center-Aligned Hero Content */}
        <div className="flex flex-col items-center justify-center max-w-4xl mx-auto my-auto gap-6 pointer-events-auto">
          
          {/* Eyebrow Badge (Center Aligned) */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1c1c1c]/20 border border-[#3DADEC]/30 backdrop-blur-md text-[#3DADEC] text-xs sm:text-sm font-semibold tracking-wider uppercase shadow-[0_0_25px_rgba(61,173,236,0.15)]">
            <Sparkles className="w-4 h-4 text-[#3dadec] animate-pulse" />
            <span className='text-[#3dadec]'>Award Winning Digital Solutions</span>
          </div>

          {/* Center-Aligned Main Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[1.08] text-white drop-shadow-sm">
            OPTIMIZERS{' '}
            {/* <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#3DADEC] via-sky-200 to-[#e26d22]"> */}
            <span className="text-[#e26d22]">
              GLOBAL
            </span>
          </h1>

          {/* Center-Aligned Subtitle Description */}
          <p className="text-sm sm:text-base md:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed text-center mx-auto">
            We architect scalable cloud infrastructure, high-performance web applications, and next-generation 3D interactive platforms for enterprises worldwide.
          </p>

          {/* Center Space for 3D Globe Visual Integration */}
          <div className="h-16 sm:h-28 w-full pointer-events-none" />
        </div>

        {/* Hero Scroll Down Indicator */}
        <a
          href="#services"
          aria-label="Scroll to services"
          className="flex flex-col items-center gap-1 text-slate-500 hover:text-[#3DADEC] text-xs tracking-widest uppercase mt-4 mb-2 animate-bounce pointer-events-auto transition-colors"
        >
          <span>Scroll down</span>
          <ArrowDown className="w-3.5 h-3.5 text-[#3DADEC]" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
