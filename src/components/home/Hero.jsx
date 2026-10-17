import React, { useEffect, useState } from 'react';
import { ArrowUpRight, Play, TrendingUp, Zap } from 'lucide-react';
import heroBackdrop from '../../assets/hero-backdrop.png';

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Check if opening curtain transition is running
    let curtainsActive = false;
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const forceReplay = urlParams.has('replay') || urlParams.get('curtains') === 'true';
      const skipCurtains = urlParams.has('skip') || urlParams.get('curtains') === 'false';
      const hasPlayed = sessionStorage.getItem('optimizers_curtains_played') === 'true';
      const prefersReduced =
        typeof window !== 'undefined' &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      curtainsActive = !skipCurtains && !prefersReduced && (forceReplay || !hasPlayed);
    } catch (e) {
      curtainsActive = false;
    }

    if (curtainsActive) {
      // Coordinate with curtains Phase 4 reveal event
      const onReveal = () => setMounted(true);
      window.addEventListener('optimizers:curtains-reveal', onReveal, { once: true });
      const fallback = setTimeout(() => setMounted(true), 1100);
      return () => {
        window.removeEventListener('optimizers:curtains-reveal', onReveal);
        clearTimeout(fallback);
      };
    } else {
      const t = setTimeout(() => setMounted(true), 60);
      return () => clearTimeout(t);
    }
  }, []);

  const rise = (delay = 0) => ({
    opacity: mounted ? 1 : 0,
    transform: mounted ? 'translateY(0)' : 'translateY(24px)',
    transition: `opacity 850ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms, transform 850ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`,
  });

  return (
    <section
      id="hero-section"
      className="relative w-full overflow-hidden bg-[#080609] select-none flex flex-col md:min-h-[820px] lg:min-h-screen md:justify-between"
      style={{ fontFamily: 'Poppins, sans-serif' }}
    >
      {/* =========================================================================
          DESKTOP & TABLET PRESENTATION (>= 768px / md:)
          Preserved 100% exactly as approved
         ========================================================================= */}
      <div className="hidden md:contents">
        {/* ── Background Cinematic Imagery (Model + Dubai Skyline) ── */}
        <img
          src={heroBackdrop}
          alt="Optimizers Global - The New Standard in Growth Marketing"
          className="absolute inset-0 h-full w-full object-cover object-[75%_center] sm:object-[center_right] pointer-events-none z-0 transition-transform duration-[2200ms] ease-out"
          style={{ transform: mounted ? 'scale(1)' : 'scale(1.05)' }}
        />

        {/* ── Left-side dark studio vignette for optimal typography contrast ── */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none z-10"
          style={{
            background:
              'linear-gradient(to right, rgba(8,6,9,0.96) 0%, rgba(8,6,9,0.88) 32%, rgba(8,6,9,0.4) 52%, transparent 72%)',
          }}
        />

        {/* ── Top edge soft gradient for seamless navbar integration ── */}
        <div
          aria-hidden="true"
          className="absolute top-0 inset-x-0 h-28 pointer-events-none z-10"
          style={{
            background:
              'linear-gradient(to bottom, rgba(8,6,9,0.7) 0%, transparent 100%)',
          }}
        />

        {/* ── Bottom edge seamless blend into page background ── */}
        <div
          aria-hidden="true"
          className="absolute bottom-0 inset-x-0 h-24 pointer-events-none z-10"
          style={{
            background:
              'linear-gradient(to bottom, transparent 0%, #030D12 100%)',
          }}
        />

        {/* ── Main Desktop Hero Content Container ── */}
        <div className="relative z-20 mx-auto w-full max-w-[1640px] px-8 lg:px-16 pt-32 lg:pt-40 pb-12 flex flex-col justify-between flex-1">
          {/* Upper Hero Grid: Left Content + Right Floating Strategy Panel */}
          <div className="w-full flex items-start justify-between">
            {/* ── Left 45% Content Column ── */}
            <div className="w-full max-w-[620px] flex flex-col items-start text-left">
              {/* Eyebrow Label */}
              <div
                className="flex items-center gap-3.5 mb-6"
                style={rise(100)}
              >
                <span className="w-8 h-[2px] bg-[#FF7900]" />
                <span className="text-[#D0C7C7] text-[12px] font-bold tracking-[0.22em] uppercase font-poppins">
                  GROWTH MARKETING PARTNER
                </span>
              </div>

              {/* Main Headline */}
              <h1
                className="font-montserrat font-extrabold uppercase tracking-[-0.035em] leading-[0.98] mb-8 text-[54px] md:text-[68px] lg:text-[80px] xl:text-[88px]"
                style={rise(220)}
              >
                <span className="block text-white">WELCOME TO</span>
                <span className="block text-[#FF9500]">THE NEW</span>
                <span className="block bg-gradient-to-r from-[#FF7900] via-[#FF6010] to-[#FF4B20] bg-clip-text text-transparent">
                  STANDARD.
                </span>
              </h1>

              {/* Supporting Paragraph */}
              <p
                className="font-poppins text-[#D0C7C7] text-[16px] md:text-[18px] leading-[1.6] max-w-[490px] mb-10 font-normal"
                style={rise(340)}
              >
                Your dedicated growth &amp; marketing team.
                <br />
                While you focus on{' '}
                <strong className="text-white font-semibold">leading</strong>, we focus
                on <strong className="text-white font-semibold">growing it.</strong>
              </p>

              {/* CTA Actions */}
              <div
                className="flex flex-wrap items-center gap-7"
                style={rise(460)}
              >
                {/* Primary Orange Pill CTA */}
                <a
                  href="#services"
                  className="group inline-flex items-center justify-between gap-4 bg-[#FF7900] hover:bg-[#FF8B1A] text-black font-poppins font-bold text-[15.5px] rounded-full pl-7 pr-3 py-3.5 transition-all duration-300 shadow-[0_0_24px_rgba(255,121,0,0.4)] hover:shadow-[0_0_36px_rgba(255,121,0,0.65)] hover:-translate-y-0.5"
                >
                  <span>See our services</span>
                  <span className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    <ArrowUpRight className="w-5 h-5 stroke-[2.4]" />
                  </span>
                </a>

                {/* Secondary Video Action */}
                <a
                  href="#case-studies"
                  className="group inline-flex items-center gap-3.5 cursor-pointer focus:outline-none"
                >
                  <div className="w-12 h-12 rounded-full border border-white/35 bg-black/50 backdrop-blur-sm flex items-center justify-center text-white group-hover:border-[#FF7900] group-hover:text-[#FF7900] group-hover:scale-105 transition-all duration-300 shadow-[0_2px_12px_rgba(0,0,0,0.4)]">
                    <Play className="w-4 h-4 fill-current ml-0.5" />
                  </div>
                  <div className="flex flex-col text-left font-poppins text-[13px] text-[#D0C7C7] group-hover:text-white transition-colors leading-[1.25]">
                    <span>Watch</span>
                    <span>our story</span>
                  </div>
                </a>
              </div>
            </div>

            {/* ── Right Floating Glassmorphism Strategy Panel ── */}
            <div
              className="hidden lg:flex flex-col w-[210px] xl:w-[225px] rounded-[18px] border border-[#FF7900]/30 bg-[#260804]/30 backdrop-blur-md p-6 xl:p-7 shadow-[0_8px_32px_rgba(255,121,0,0.12),inset_0_1px_1px_rgba(255,255,255,0.1)] mt-12 mr-6"
              style={rise(500)}
            >
              <div className="mb-5 flex items-end gap-1.5 text-white">
                <span className="w-1.5 h-3 bg-white rounded-xs" />
                <span className="w-1.5 h-5 bg-white rounded-xs" />
                <span className="w-1.5 h-4 bg-white rounded-xs" />
              </div>

              <div className="flex flex-col space-y-2.5 font-poppins text-white text-[13px] font-medium tracking-[0.16em] uppercase">
                <span>STRATEGY</span>
                <span>CREATIVE</span>
                <span>PERFORMANCE</span>
                <span>REAL GROWTH</span>
              </div>

              <div className="w-7 h-[2px] bg-[#FF7900] mt-5" />
            </div>
          </div>

          {/* ── Bottom Four-Column Glassmorphism Statistics Bar ── */}
          <div
            className="w-full mt-20 rounded-[20px] border border-white/10 bg-[#140806]/55 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,121,0,0.12)] px-8 py-6"
            style={rise(600)}
          >
            <div className="grid grid-cols-4">
              {/* Stat 1 */}
              <div className="flex items-center gap-5 pr-8 border-r border-white/10">
                <div className="w-12 h-12 rounded-full border border-white/15 bg-black/60 flex items-center justify-center text-[#FF9500] shrink-0 shadow-[inset_0_0_8px_rgba(255,121,0,0.15)]">
                  <svg className="w-5 h-5 stroke-current fill-none stroke-[1.8]" viewBox="0 0 24 24">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="font-montserrat text-white text-[32px] font-extrabold leading-none tracking-tight">
                    180+
                  </span>
                  <span className="font-poppins text-[#D0C7C7] text-[10.5px] font-semibold tracking-[0.2em] uppercase mt-1">
                    BRANDS TRUST US
                  </span>
                </div>
              </div>

              {/* Stat 2 */}
              <div className="flex items-center gap-5 px-8 border-r border-white/10">
                <div className="w-12 h-12 rounded-full border border-white/15 bg-black/60 flex items-center justify-center text-[#FF9500] shrink-0 shadow-[inset_0_0_8px_rgba(255,121,0,0.15)]">
                  <TrendingUp className="w-5 h-5 stroke-[2]" />
                </div>
                <div className="flex flex-col">
                  <span className="font-montserrat text-white text-[32px] font-extrabold leading-none tracking-tight">
                    12
                  </span>
                  <span className="font-poppins text-[#D0C7C7] text-[10.5px] font-semibold tracking-[0.2em] uppercase mt-1">
                    MARKETS
                  </span>
                </div>
              </div>

              {/* Stat 3 */}
              <div className="flex items-center gap-5 px-8 border-r border-white/10">
                <div className="w-12 h-12 rounded-full border border-white/15 bg-black/60 flex items-center justify-center text-[#FF9500] shrink-0 shadow-[inset_0_0_8px_rgba(255,121,0,0.15)]">
                  <svg className="w-5 h-5 stroke-current fill-none stroke-[2]" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="9" />
                    <circle cx="12" cy="12" r="3" fill="currentColor" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="font-montserrat text-white text-[32px] font-extrabold leading-none tracking-tight">
                    98%
                  </span>
                  <span className="font-poppins text-[#D0C7C7] text-[10.5px] font-semibold tracking-[0.2em] uppercase mt-1">
                    CLIENT RETENTION
                  </span>
                </div>
              </div>

              {/* Stat 4 */}
              <div className="flex items-center gap-5 pl-8">
                <div className="w-12 h-12 rounded-full border border-white/15 bg-black/60 flex items-center justify-center text-[#FF9500] shrink-0 shadow-[inset_0_0_8px_rgba(255,121,0,0.15)]">
                  <Zap className="w-5 h-5 stroke-[2] fill-current" />
                </div>
                <div className="flex flex-col">
                  <span className="font-montserrat text-white text-[32px] font-extrabold leading-none tracking-tight">
                    3X
                  </span>
                  <span className="font-poppins text-[#D0C7C7] text-[10.5px] font-semibold tracking-[0.2em] uppercase mt-1">
                    AVG. GROWTH UPLIFT
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          MOBILE PRESENTATION (< 768px / md:hidden)
          Pixel-Perfect Recreation of Attached Approved Mobile Design Reference
         ========================================================================= */}
      <div className="md:hidden w-full flex flex-col justify-start relative z-10">
        {/* ── 1. Dedicated Mobile Visual Section: Centered Model + Orange Circle + Dubai Skyline ── */}
        <div className="relative w-full h-[340px] xs:h-[375px] sm:h-[430px] overflow-hidden select-none">
          {/* Orange Circular Lighting Halo behind the model */}
          <div
            className="absolute top-14 left-1/2 -translate-x-1/2 w-[260px] xs:w-[295px] h-[260px] xs:h-[295px] rounded-full pointer-events-none z-0"
            style={{
              background:
                'radial-gradient(circle, rgba(255,121,0,0.52) 0%, rgba(255,75,32,0.24) 48%, transparent 72%)',
            }}
          />

          {/* Thin Orange Circular Outline */}
          <div
            className="absolute top-11 left-1/2 -translate-x-1/2 w-[280px] xs:w-[315px] h-[280px] xs:h-[315px] rounded-full border border-[#FF7900]/35 pointer-events-none z-0 shadow-[0_0_45px_rgba(255,121,0,0.28)]"
          />

          {/* Centered Model Portrait with Dubai Skyline */}
          <img
            src={heroBackdrop}
            alt="Optimizers Global - The New Standard in Growth Marketing"
            className="absolute top-0 h-full w-auto max-w-none object-cover pointer-events-none z-10 transition-transform duration-[2200ms] ease-out"
            style={{
              left: '50%',
              transform: mounted ? 'translateX(-54.4%) scale(1)' : 'translateX(-54.4%) scale(1.04)',
              height: '100%',
            }}
          />

          {/* Top soft vignette for seamless navbar integration */}
          <div
            aria-hidden="true"
            className="absolute top-0 inset-x-0 h-24 pointer-events-none z-20"
            style={{
              background:
                'linear-gradient(to bottom, rgba(8,6,9,0.85) 0%, rgba(8,6,9,0.2) 60%, transparent 100%)',
            }}
          />

          {/* Bottom edge smooth gradient blend into page background */}
          <div
            aria-hidden="true"
            className="absolute bottom-0 inset-x-0 h-28 pointer-events-none z-20"
            style={{
              background:
                'linear-gradient(to bottom, transparent 0%, rgba(8,6,9,0.55) 45%, #080609 95%)',
            }}
          />
        </div>

        {/* ── 2. Mobile Content Container ── */}
        <div className="w-full px-5 xs:px-6 sm:px-8 pt-1 pb-4 flex flex-col items-start text-left relative z-20">
          {/* Eyebrow Label */}
          <div
            className="flex items-center gap-2.5 mb-3"
            style={rise(100)}
          >
            <span className="w-6 h-[2px] bg-[#FF7900]" />
            <span className="text-[#D0C7C7] text-[11px] font-bold tracking-[0.22em] uppercase font-poppins">
              GROWTH MARKETING PARTNER
            </span>
          </div>

          {/* Main Headline */}
          <h1
            className="font-montserrat font-extrabold uppercase tracking-[-0.035em] leading-[0.98] mb-4 text-[40px] xs:text-[46px] sm:text-[52px]"
            style={rise(220)}
          >
            <span className="block text-white">WELCOME TO</span>
            <span className="block text-[#FF9500]">THE NEW</span>
            <span className="block bg-gradient-to-r from-[#FF7900] via-[#FF6010] to-[#FF4B20] bg-clip-text text-transparent">
              STANDARD.
            </span>
          </h1>

          {/* Supporting Paragraph */}
          <p
            className="font-poppins text-[#D0C7C7] text-[14px] xs:text-[15px] sm:text-[16px] leading-[1.58] mb-6 font-normal max-w-full"
            style={rise(340)}
          >
            Your dedicated growth &amp; marketing team.
            <br />
            While you focus on{' '}
            <strong className="text-white font-semibold">leading</strong>, we focus on{' '}
            <strong className="text-white font-semibold">growing it.</strong>
          </p>

          {/* CTA Actions */}
          <div
            className="w-full flex items-center justify-start gap-3.5 xs:gap-6 flex-wrap"
            style={rise(460)}
          >
            {/* Primary Orange Pill CTA */}
            <a
              href="#services"
              className="group inline-flex items-center justify-between gap-3 bg-[#FF7900] hover:bg-[#FF8B1A] text-black font-poppins font-bold text-[14px] xs:text-[14.5px] rounded-full pl-5 pr-2 py-2.5 xs:py-3 transition-all duration-300 shadow-[0_0_24px_rgba(255,121,0,0.45)] hover:shadow-[0_0_32px_rgba(255,121,0,0.65)] hover:-translate-y-0.5"
            >
              <span>See our services</span>
              <span className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-white shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <ArrowUpRight className="w-4 h-4 stroke-[2.4]" />
              </span>
            </a>

            {/* Secondary Video Action */}
            <a
              href="#case-studies"
              className="group inline-flex items-center gap-3 cursor-pointer focus:outline-none"
            >
              <div className="w-10 h-10 rounded-full border border-white/35 bg-black/50 backdrop-blur-sm flex items-center justify-center text-white group-hover:border-[#FF7900] group-hover:text-[#FF7900] group-hover:scale-105 transition-all duration-300 shadow-[0_2px_12px_rgba(0,0,0,0.4)]">
                <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
              </div>
              <div className="flex flex-col text-left font-poppins text-[12px] text-[#D0C7C7] group-hover:text-white transition-colors leading-[1.25]">
                <span>Watch</span>
                <span>our story</span>
              </div>
            </a>
          </div>

          {/* ── 3. Premium 2×2 Statistics Glass Card ── */}
          <div
            className="w-full mt-6 mb-4 rounded-[18px] xs:rounded-[20px] border border-[#FF7900]/30 bg-[#160604]/55 backdrop-blur-xl shadow-[0_0_28px_rgba(255,121,0,0.18),inset_0_1px_1px_rgba(255,255,255,0.08)] overflow-hidden"
            style={rise(540)}
          >
            <div className="grid grid-cols-2 divide-x divide-white/10">
              {/* Left Column: Stat 1 (top) and Stat 3 (bottom) */}
              <div className="flex flex-col divide-y divide-white/10">
                {/* Stat 1: 180+ BRANDS TRUST US */}
                <div className="p-3.5 xs:p-4 sm:p-5 flex items-center gap-2.5 xs:gap-3.5">
                  <div className="w-9 h-9 xs:w-10 xs:h-10 rounded-full border border-[#FF7900]/40 bg-black/60 flex items-center justify-center text-[#FF9500] shrink-0 shadow-[inset_0_0_8px_rgba(255,121,0,0.2)]">
                    <svg className="w-4 h-4 stroke-current fill-none stroke-[1.8]" viewBox="0 0 24 24">
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="font-montserrat text-white text-xl xs:text-2xl font-extrabold leading-none tracking-tight">
                      180+
                    </span>
                    <span className="font-poppins text-[#D0C7C7] text-[8px] xs:text-[9px] font-semibold tracking-[0.14em] uppercase mt-1 leading-[1.2]">
                      BRANDS TRUST US
                    </span>
                  </div>
                </div>

                {/* Stat 3: 98% CLIENT RETENTION */}
                <div className="p-3.5 xs:p-4 sm:p-5 flex items-center gap-2.5 xs:gap-3.5">
                  <div className="w-9 h-9 xs:w-10 xs:h-10 rounded-full border border-[#FF7900]/40 bg-black/60 flex items-center justify-center text-[#FF9500] shrink-0 shadow-[inset_0_0_8px_rgba(255,121,0,0.2)]">
                    <svg className="w-4 h-4 stroke-current fill-none stroke-[2]" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="9" />
                      <circle cx="12" cy="12" r="3" fill="currentColor" />
                    </svg>
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="font-montserrat text-white text-xl xs:text-2xl font-extrabold leading-none tracking-tight">
                      98%
                    </span>
                    <span className="font-poppins text-[#D0C7C7] text-[8px] xs:text-[9px] font-semibold tracking-[0.14em] uppercase mt-1 leading-[1.2]">
                      CLIENT RETENTION
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column: Stat 2 (top) and Stat 4 (bottom) */}
              <div className="flex flex-col divide-y divide-white/10">
                {/* Stat 2: 12 MARKETS */}
                <div className="p-3.5 xs:p-4 sm:p-5 flex items-center gap-2.5 xs:gap-3.5">
                  <div className="w-9 h-9 xs:w-10 xs:h-10 rounded-full border border-[#FF7900]/40 bg-black/60 flex items-center justify-center text-[#FF9500] shrink-0 shadow-[inset_0_0_8px_rgba(255,121,0,0.2)]">
                    <TrendingUp className="w-4 h-4 stroke-[2]" />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="font-montserrat text-white text-xl xs:text-2xl font-extrabold leading-none tracking-tight">
                      12
                    </span>
                    <span className="font-poppins text-[#D0C7C7] text-[8px] xs:text-[9px] font-semibold tracking-[0.14em] uppercase mt-1 leading-[1.2]">
                      MARKETS
                    </span>
                  </div>
                </div>

                {/* Stat 4: 3X AVG. GROWTH UPLIFT */}
                <div className="p-3.5 xs:p-4 sm:p-5 flex items-center gap-2.5 xs:gap-3.5">
                  <div className="w-9 h-9 xs:w-10 xs:h-10 rounded-full border border-[#FF7900]/40 bg-black/60 flex items-center justify-center text-[#FF9500] shrink-0 shadow-[inset_0_0_8px_rgba(255,121,0,0.2)]">
                    <Zap className="w-4 h-4 stroke-[2] fill-current" />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="font-montserrat text-white text-xl xs:text-2xl font-extrabold leading-none tracking-tight">
                      3X
                    </span>
                    <span className="font-poppins text-[#D0C7C7] text-[8px] xs:text-[9px] font-semibold tracking-[0.14em] uppercase mt-1 leading-[1.2]">
                      AVG. GROWTH UPLIFT
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── 4. Minimal Centered Scroll Down Indicator ── */}
          <div
            className="w-full flex flex-col items-center justify-center pt-2 pb-6 text-white/50"
            style={rise(600)}
          >
            <div className="w-4 h-7 rounded-full border border-white/35 flex justify-center pt-1.5 shadow-[0_0_10px_rgba(255,121,0,0.18)]">
              <span className="w-1 h-1.5 rounded-full bg-white animate-bounce" />
            </div>
            <svg
              className="w-3.5 h-3.5 stroke-current mt-1 -translate-y-0.5"
              viewBox="0 0 24 24"
              fill="none"
              strokeWidth="2.5"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}