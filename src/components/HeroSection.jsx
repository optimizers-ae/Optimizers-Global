import React, { useEffect, useState } from 'react';
import { ArrowUpRight, Play } from 'lucide-react';
import heroImage from '../../assets/hero.png';

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 60);
    return () => clearTimeout(t);
  }, []);

  const rise = (delay = 0) => ({
    opacity: mounted ? 1 : 0,
    transform: mounted ? 'translateY(0)' : 'translateY(24px)',
    transition: `opacity 1000ms cubic-bezier(0.22,1,0.36,1) ${delay}ms, transform 1000ms cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
  });

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black select-none">
      {/* Letterbox top */}
      <div className="absolute top-0 left-0 right-0 h-[6vh] bg-black z-40" />
      {/* Letterbox bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-[6vh] bg-black z-40" />

      {/* Image */}
      <img
        src={heroImage}
        alt="Optimizers Global LLC"
        className="absolute inset-0 h-full w-full object-cover object-[70%_center] transition-transform duration-[3000ms] ease-out"
        style={{ transform: mounted ? 'scale(1)' : 'scale(1.1)' }}
      />

      {/* Deep vignette */}
      <div
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          background:
            'radial-gradient(ellipse at 65% 45%, transparent 0%, rgba(0,0,0,0.55) 55%, rgba(0,0,0,0.98) 100%)',
        }}
      />
      {/* Warm side glow */}
      <div
        className="absolute inset-0 pointer-events-none z-10 mix-blend-screen"
        style={{
          background:
            'radial-gradient(circle at 25% 60%, rgba(255,90,20,0.35) 0%, transparent 55%)',
        }}
      />

      {/* Content */}
      <div className="relative z-30 mx-auto flex min-h-screen w-full max-w-[1500px] flex-col justify-between px-6 pb-20 pt-24 sm:px-10 lg:px-16 lg:pb-24 lg:pt-32">
        {/* Top small credit */}
        <div
          className="flex items-center gap-4 font-poppins text-white/50 text-[10px] tracking-[0.4em] uppercase"
          style={rise(100)}
        >
          <span>A Film By</span>
          <span className="w-8 h-[1px] bg-white/30" />
          <span className="text-white/80">Optimizers Global LLC</span>
        </div>

        {/* Center title */}
        <div className="flex-1 flex flex-col justify-center py-16 lg:py-0">
          <h1
            className="font-editorial text-white text-center leading-[0.95] tracking-[-0.02em]"
            style={rise(300)}
          >
            <span className="block text-[40px] sm:text-[64px] md:text-[84px] lg:text-[96px] italic font-light text-white/70">
              a story of
            </span>
            <span className="block text-[64px] sm:text-[104px] md:text-[140px] lg:text-[168px] font-extrabold uppercase">
              GROWTH
            </span>
            <span className="block text-[40px] sm:text-[64px] md:text-[84px] lg:text-[96px] italic font-light text-white/70">
              in every market
            </span>
          </h1>

          {/* Divider */}
          <div
            className="mx-auto mt-10 flex items-center gap-4"
            style={rise(500)}
          >
            <span className="w-16 h-[1px] bg-white/30" />
            <span className="font-poppins text-orange-400 text-[11px] tracking-[0.4em] uppercase">
              Est. Dubai · Worldwide
            </span>
            <span className="w-16 h-[1px] bg-white/30" />
          </div>
        </div>

        {/* Bottom row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-end">
          {/* Left — tagline */}
          <div style={rise(700)}>
            <p className="font-poppins text-white/75 text-sm leading-relaxed max-w-xs">
              Your dedicated growth & marketing team. While you focus on leading, we focus on
              growing it.
            </p>
          </div>

          {/* Center — CTA stack */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 lg:justify-center" style={rise(800)}>
            <a
              href="#services"
              className="group inline-flex items-center gap-3 bg-white hover:bg-orange-100 text-black font-poppins font-semibold text-sm rounded-full pl-6 pr-3 py-3 transition-all duration-300"
            >
              See our services
              <span className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight size={16} />
              </span>
            </a>
            <button className="group inline-flex items-center gap-3 text-white/80 hover:text-white transition-colors">
              <span className="w-10 h-10 rounded-full border border-white/40 group-hover:border-white flex items-center justify-center transition-colors">
                <Play size={12} className="ml-0.5" fill="currentColor" />
              </span>
              <span className="font-poppins text-xs tracking-[0.2em] uppercase">Watch reel</span>
            </button>
          </div>

          {/* Right — credits */}
          <div className="flex gap-8 lg:justify-end" style={rise(900)}>
            {[
              { n: '180+', l: 'Brands' },
              { n: '12', l: 'Markets' },
            ].map((s) => (
              <div key={s.l} className="text-left lg:text-right">
                <div className="font-editorial text-white text-2xl font-extrabold leading-none">
                  {s.n}
                </div>
                <div className="font-poppins text-white/50 text-[10px] tracking-[0.24em] uppercase mt-1">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}