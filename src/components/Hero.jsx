import { Sparkles, ArrowDown } from 'lucide-react';

/**
 * Hero Component - Clean, Center-aligned Hero Section
 * Theme: #3DADEC (Cyan), #e26d22 (Orange), #363636 (Charcoal)
 */
const Hero = () => {
  return (
    <section
      id="home"
      className="relative z-10 w-full min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center text-center pt-28 pb-16 lg:py-0 pointer-events-none"
    >
      {/* Main Center-Aligned Hero Content */}
      <div className="flex flex-col items-center justify-center max-w-4xl mx-auto my-auto gap-6 pointer-events-auto">
        
        {/* Eyebrow Badge (Center Aligned) */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1c1c1c]/90 border border-[#3DADEC]/30 backdrop-blur-md text-[#3DADEC] text-xs sm:text-sm font-semibold tracking-wider uppercase shadow-[0_0_25px_rgba(61,173,236,0.15)]">
          <Sparkles className="w-4 h-4 text-[#e26d22] animate-pulse" />
          <span>Award Winning Digital Solutions</span>
        </div>

        {/* Center-Aligned Main Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[1.08] text-white drop-shadow-sm">
          OPTIMIZERS{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#3DADEC] via-sky-200 to-[#e26d22]">
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
    </section>
  );
};

export default Hero;
