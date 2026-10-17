import React from 'react';
import { ArrowRight, Check, Star } from 'lucide-react';

export default function FinalCTASection() {
  return (
    <section
      id="final-cta-section"
      className="relative w-full overflow-hidden py-20 sm:py-24 lg:py-32 px-4 sm:px-6 md:px-10 lg:px-12 flex justify-center items-center"
      style={{ backgroundColor: '#020C10', fontFamily: 'Poppins, sans-serif' }}
    >
      {/* ── Background Subtle Technical Grid ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #00C8E8 1px, transparent 1px), linear-gradient(to bottom, #00C8E8 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* ── Background Grid Intersection Glowing Dots ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-16 left-20 w-1.5 h-1.5 rounded-full bg-[#00C8E8]/50 shadow-[0_0_8px_#00C8E8]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-28 right-28 w-1.5 h-1.5 rounded-full bg-[#00C8E8]/50 shadow-[0_0_8px_#00C8E8]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-20 left-32 w-1.5 h-1.5 rounded-full bg-[#00C8E8]/50 shadow-[0_0_8px_#00C8E8]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-24 right-20 w-1.5 h-1.5 rounded-full bg-[#00C8E8]/50 shadow-[0_0_8px_#00C8E8]"
      />

      {/* ── Background Ambient Glows ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[650px] rounded-full"
        style={{
          background: 'radial-gradient(ellipse, rgba(0, 200, 232, 0.07) 0%, rgba(6, 21, 29, 0) 70%)',
          filter: 'blur(80px)',
        }}
      />

      {/* ══════════════════════════════════════════════════════════════
          LARGE CENTERED FUTURISTIC BORDER FRAME CONTAINER
         ══════════════════════════════════════════════════════════════ */}
      <div className="relative z-10 w-full max-w-[1280px] min-h-[640px] sm:min-h-[700px] lg:min-h-[720px] rounded-[32px] sm:rounded-[36px] bg-[#06151D]/90 backdrop-blur-md overflow-hidden flex flex-col justify-between p-8 sm:p-12 md:p-16 lg:p-20 shadow-[0_20px_60px_rgba(2,12,16,0.85)]">
        {/* ── Atmospheric Edge Glows along the frame ── */}
        {/* Left edge cyan illumination */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-12 top-1/2 -translate-y-1/2 w-32 h-[380px] rounded-full"
          style={{
            background: 'radial-gradient(ellipse at 100% 50%, rgba(0, 200, 232, 0.35) 0%, transparent 70%)',
            filter: 'blur(22px)',
          }}
        />
        {/* Right edge cyan illumination */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-12 top-1/2 -translate-y-1/2 w-32 h-[380px] rounded-full"
          style={{
            background: 'radial-gradient(ellipse at 0% 50%, rgba(0, 200, 232, 0.35) 0%, transparent 70%)',
            filter: 'blur(22px)',
          }}
        />
        {/* Top-right corner warm orange glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-8 -right-8 w-44 h-44 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(255, 121, 0, 0.40) 0%, rgba(255, 121, 0, 0.08) 50%, transparent 70%)',
            filter: 'blur(20px)',
          }}
        />

        {/* ── Futuristic SVG Vector Frame Detailing ── */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none z-10 overflow-visible"
          viewBox="0 0 1200 680"
          preserveAspectRatio="none"
          fill="none"
        >
          {/* Main Futuristic Outline Path */}
          <path
            d="M 180 20 L 960 20 L 1020 38 L 1090 38 C 1125 50, 1145 70, 1150 100 L 1150 560 C 1145 595, 1120 625, 1080 635 L 200 635 L 140 610 C 105 598, 75 575, 60 535 L 60 120 C 65 75, 100 35, 140 22 Z"
            stroke="#00C8E8"
            strokeWidth="1.8"
            strokeOpacity="0.75"
            vectorEffect="non-scaling-stroke"
          />

          {/* Top-Right Orange Accent Bar */}
          <path
            d="M 1030 18 L 1095 35 L 1135 68"
            stroke="#FF7900"
            strokeWidth="2.8"
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
          />

          {/* Bottom-Left Cyan Floating Bracket */}
          <path
            d="M 60 575 L 105 635 L 165 640"
            stroke="#00C8E8"
            strokeWidth="2.2"
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
          />

          {/* Left Inner Visor Curve */}
          <path
            d="M 140 70 C 70 220, 70 450, 140 590"
            stroke="#00C8E8"
            strokeWidth="1.2"
            strokeOpacity="0.28"
            strokeDasharray="4 2"
            vectorEffect="non-scaling-stroke"
          />

          {/* Right Inner Visor Curve */}
          <path
            d="M 1060 70 C 1130 220, 1130 450, 1060 590"
            stroke="#00C8E8"
            strokeWidth="1.2"
            strokeOpacity="0.28"
            strokeDasharray="4 2"
            vectorEffect="non-scaling-stroke"
          />

          {/* Left Edge Small Vertical Dots */}
          <circle cx="42" cy="240" r="3.2" fill="#FF7900" />
          <circle cx="42" cy="265" r="2.5" fill="#00C8E8" fillOpacity="0.85" />
          <circle cx="42" cy="290" r="2.5" fill="#00C8E8" fillOpacity="0.85" />
          <circle cx="42" cy="315" r="2.2" fill="#00C8E8" fillOpacity="0.5" />

          {/* Right Edge Small Vertical Dots */}
          <circle cx="1168" cy="410" r="2.2" fill="#00C8E8" fillOpacity="0.5" />
          <circle cx="1168" cy="435" r="2.5" fill="#00C8E8" fillOpacity="0.85" />
          <circle cx="1168" cy="460" r="3.2" fill="#FF7900" />
          <circle cx="1168" cy="485" r="2.5" fill="#00C8E8" fillOpacity="0.85" />
        </svg>

        {/* ── Content Container (z-20) ── */}
        <div className="relative z-20 flex flex-col items-center justify-between text-center h-full">
          {/* Top Label */}
          <div className="flex items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8">
            <span className="w-8 sm:w-10 h-[1.5px] bg-[#00C8E8] shrink-0" />
            <p className="text-[#00C8E8] text-[11px] sm:text-[12px] font-bold tracking-[0.24em] uppercase font-neue">
              LET'S GROW TOGETHER
            </p>
            <span className="w-8 sm:w-10 h-[1.5px] bg-[#00C8E8] shrink-0" />
          </div>

          {/* Main Heading — Exact Line Composition */}
          <h2 className="font-neue font-black text-[42px] sm:text-[56px] md:text-[68px] lg:text-[76px] xl:text-[82px] leading-[1.06] tracking-[-0.02em] text-center max-w-[1050px] mx-auto">
            <span className="block text-white">Ready to dominate</span>
            <span className="block text-[#91A5B1] mt-1 sm:mt-2">your market in the UAE?</span>
          </h2>

          {/* Supporting Paragraph */}
          <p className="text-[#91A5B1] text-[15px] sm:text-[17px] md:text-[18px] leading-[1.65] font-normal font-poppins text-center max-w-[840px] mx-auto mt-6 sm:mt-7 mb-8 sm:mb-10">
            Get a free <strong className="text-white font-bold">45-minute digital marketing consultancy session</strong> with our UAE specialists. A clear growth plan for your business—no fluff, no generic advice.
          </p>

          {/* WhatsApp CTA Button */}
          <div className="w-full flex justify-center mb-10 sm:mb-14">
            <a
              href="https://wa.me/97141234567?text=Hello%20Optimizers%20Team%2C%20I%20would%20like%20to%20book%20my%20free%2045-minute%20digital%20marketing%20consultancy%20session."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3.5 w-full max-w-[360px] sm:max-w-[420px] h-[58px] sm:h-[66px] rounded-full bg-gradient-to-r from-[#00D95A] to-[#00C450] hover:brightness-110 text-white font-bold text-[16px] sm:text-[17.5px] font-poppins shadow-[0_10px_32px_rgba(0,217,90,0.42)] hover:shadow-[0_14px_42px_rgba(0,217,90,0.6)] transition-all duration-300 group cursor-pointer"
            >
              {/* WhatsApp Logo SVG */}
              <svg className="w-6 h-6 fill-current shrink-0" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.174.086.275.072.376-.044.101-.116.433-.506.549-.68.116-.173.231-.145.39-.086s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824zm-3.423-10.416c-4.409 0-8 3.59-8 8 0 1.41.367 2.732 1.006 3.88l-1.069 3.91 4.026-1.055c1.107.604 2.375.946 3.725.946 4.409 0 8-3.591 8-8s-3.591-7.681-7.688-7.681z" />
              </svg>
              <span>Chat on WhatsApp</span>
              <ArrowRight className="w-5 h-5 text-white transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>

          {/* ── Bottom Credibility Information Row ── */}
          <div className="w-full pt-8 sm:pt-10 border-t border-[#25404B]/50 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 lg:gap-14">
            {/* Google Premier Partner */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full border border-[#00C8E8] bg-[#020C10]/80 flex items-center justify-center text-[#00C8E8] shadow-[0_0_12px_rgba(0,200,232,0.3)]">
                <Check className="w-4 h-4 stroke-[3]" />
              </div>
              <span className="text-white text-[13.5px] sm:text-[14.5px] font-semibold font-poppins tracking-tight">
                Google Premier Partner
              </span>
            </div>

            {/* Divider 1 */}
            <div className="h-6 w-[1.5px] bg-[#25404B]/70 hidden sm:block" />

            {/* Meta Business Partner */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full border border-[#00C8E8] bg-[#020C10]/80 flex items-center justify-center text-[#00C8E8] shadow-[0_0_12px_rgba(0,200,232,0.3)]">
                <Check className="w-4 h-4 stroke-[3]" />
              </div>
              <span className="text-white text-[13.5px] sm:text-[14.5px] font-semibold font-poppins tracking-tight">
                Meta Business Partner
              </span>
            </div>

            {/* Divider 2 */}
            <div className="h-6 w-[1.5px] bg-[#25404B]/70 hidden sm:block" />

            {/* 5.0 Google Reviews (80+) */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full border border-[#FF7900]/60 bg-[#FF7900]/15 flex items-center justify-center text-[#FF7900] shadow-[0_0_12px_rgba(255,121,0,0.3)]">
                <Star className="w-4 h-4 fill-[#FF7900] text-[#FF7900]" />
              </div>
              <span className="text-white text-[13.5px] sm:text-[14.5px] font-semibold font-poppins tracking-tight">
                5.0 Google Reviews (80+)
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
