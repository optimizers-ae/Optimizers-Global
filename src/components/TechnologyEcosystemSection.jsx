import React from 'react';
import { ArrowUpRight } from 'lucide-react';

/* ── Verified Platform SVG Logos with Exact Brand Geometries ── */

function MetaLogo() {
  return (
    <div className="flex items-center justify-center gap-3 select-none">
      <svg className="w-11 h-8 shrink-0" viewBox="0 0 38 24" fill="none">
        <defs>
          <linearGradient id="metaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0064E0" />
            <stop offset="45%" stopColor="#0081FB" />
            <stop offset="100%" stopColor="#00C4FF" />
          </linearGradient>
        </defs>
        <path
          d="M26.4 1.2c-3.5 0-6.4 1.8-8.4 4.5-2-2.7-4.9-4.5-8.4-4.5C4.3 1.2 0 5.6 0 11.8s4.3 10.6 9.6 10.6c3.5 0 6.4-1.8 8.4-4.5 2 2.7 4.9 4.5 8.4 4.5 5.3 0 9.6-4.4 9.6-10.6S31.7 1.2 26.4 1.2zm-16.8 17c-3.3 0-5.9-2.7-5.9-6.9 0-4.2 2.6-6.9 5.9-6.9 2.5 0 4.6 1.4 5.7 3.5-1.1 2.1-3.2 3.5-5.7 3.5zm7.3-6.9c.7-1.3 1.8-2.3 3.1-2.9-1.3-.6-2.4-1.6-3.1-2.9-.7 1.3-1.8 2.3-3.1 2.9 1.3.6 2.4 1.6 3.1 2.9zm9.5 6.9c-2.5 0-4.6-1.4-5.7-3.5 1.1-2.1 3.2-3.5 5.7-3.5 3.3 0 5.9 2.7 5.9 6.9 0 4.2-2.6 6.9-5.9 6.9z"
          fill="url(#metaGrad)"
        />
      </svg>
      <span className="text-white text-[25px] font-bold tracking-tight font-sans">
        Meta
      </span>
    </div>
  );
}

function ShopifyLogo() {
  return (
    <div className="flex items-center justify-center gap-3 select-none">
      <svg className="w-[30px] h-[34px] shrink-0" viewBox="0 0 109 124" fill="none">
        <path
          d="M74.8 19.4c-.2-.7-.9-1.2-1.6-1.2h-11.8c-.3-4.9-2.4-9.5-6.1-12.8C51.6 2 46.2.2 40.7.5 31.8 1 24.3 6.6 21 14.8c-2.3 5.8-2 12.3.9 17.8L3.6 36.3c-.7.2-1.2.8-1.3 1.6L0 119.5c0 .5.2.9.5 1.3.3.3.8.5 1.3.5h78.3c.5 0 .9-.2 1.3-.5.3-.3.5-.8.5-1.3l-7.1-100.1zm-32.9-12c3.7-.2 7.4 1 10.3 3.4 2.8 2.4 4.5 5.8 4.9 9.5H35.8c2.1-7.1 6.1-12.9 6.1-12.9zm-8.8 12.9h12.5v13.6H31.1c-1.6-4.1-1.2-9 2-13.6zm19.6 47.9c-1.3-.8-3.1-1.3-5-1.5-6.8-.7-10.4 2.6-10.4 6.7 0 7.8 17.5 7.6 17.5 19.3 0 7.8-6.1 12.5-14.7 12.5-6.1 0-10.5-2.2-12.7-4.1l2.4-6.3c1.8 1.5 5.4 3.4 9.4 3.4 4.5 0 7.2-2.3 7.2-5.7 0-8.6-17.5-8.4-17.5-19.5 0-7.8 5.9-13.4 16-13.4 4.7 0 8.7 1.3 10.2 2.3l-2.4 6.3z"
          fill="#95BF47"
        />
        <path
          d="M73.2 18.2l-11.8 3.5v98.3l18.9-4.2-7.1-97.6z"
          fill="#7AB55C"
        />
        <path
          d="M52.7 77.2c0-11.7-17.5-11.5-17.5-19.3 0-4.1 3.6-7.4 10.4-6.7 1.9.2 3.7.7 5 1.5l2.4-6.3c-1.5-1-5.5-2.3-10.2-2.3-10.1 0-16 5.6-16 13.4 0 11.1 17.5 10.9 17.5 19.5 0 3.4-2.7 5.7-7.2 5.7-4 0-7.6-1.9-9.4-3.4l-2.4 6.3c2.2 1.9 6.6 4.1 12.7 4.1 8.6 0 14.7-4.7 14.7-12.5z"
          fill="#FFFFFF"
        />
      </svg>
      <span className="text-white text-[25px] font-bold tracking-tight font-sans">
        shopify
      </span>
    </div>
  );
}

function WordPressLogo() {
  return (
    <div className="flex items-center justify-center gap-3 select-none">
      <svg className="w-8 h-8 shrink-0 text-white" viewBox="0 0 100 100" fill="currentColor">
        <path d="M50 0C22.4 0 0 22.4 0 50s22.4 50 50 50 50-22.4 50-50S77.6 0 50 0zm0 95.8C24.7 95.8 4.2 75.3 4.2 50S24.7 4.2 50 4.2 95.8 24.7 95.8 50 75.3 95.8 50 95.8zm-29.3-51c0-2.8 1-4.8 1.9-6.3 1.4-2.3 2.8-4.3 2.8-6.6 0-2.6-2-5-4.8-5-.3 0-.7 0-1 .1 5.4-7.5 14.3-12.4 24.3-12.4 8.2 0 15.6 3.3 21 8.7l-4.5 13.1c-1.3-1.1-2.9-1.9-4.7-1.9-2.8 0-4.8 1.9-4.8 4.6 0 2.2 1.3 4.4 2.8 6.9 1.4 2.4 3 5.4 3 9.4 0 4.2-1.6 8.3-4.8 14.8L44 86.4C32.1 82.2 23.3 71.4 21.1 58.3c-.3-1.6-.4-3.2-.4-4.8v-8.7zm29.3 46.4c-2.3 0-4.6-.2-6.8-.7l13.6-39.6 13.9 38.2c-6.1 1.4-13.4 2.1-20.7 2.1zm31.7-27.1L70.1 32.8c1.6-.1 3-.3 3-.3 1.5-.1 1.3-2.3-.2-2.3 0 0-4.6.4-7.6.4-2.8 0-7.5-.4-7.5-.4-1.5 0-1.7 2.2-.2 2.3 0 0 1.4.2 2.8.3l12 32.8c-1.8 1.9-3.7 3.5-5.9 4.9L53.7 36.3c1.4-.1 2.7-.3 2.7-.3 1.5-.1 1.3-2.3-.2-2.3 0 0-4.6.4-7.5.4-3 0-7.6-.4-7.6-.4-1.5 0-1.7 2.2-.2 2.3 0 0 1.4.2 2.8.3L56 71.3 46.2 97.4C63.2 92.4 76.5 78.4 81.7 64.1z" />
      </svg>
      <span className="text-white text-[19px] font-black tracking-[0.07em] uppercase font-sans">
        WORDPRESS
      </span>
    </div>
  );
}

function HighLevelLogo() {
  return (
    <div className="flex items-center justify-center gap-3 select-none">
      <div className="flex items-end gap-1.5 shrink-0 h-7">
        {/* Yellow Left Arrow */}
        <div className="flex flex-col items-center">
          <div className="w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-b-[9px] border-b-[#FFBA08]" />
          <div className="w-[5.5px] h-[17px] bg-[#FFBA08] rounded-b-[1px]" />
        </div>
        {/* Blue Middle Arrow */}
        <div className="flex flex-col items-center">
          <div className="w-0 h-0 border-l-[4.5px] border-l-transparent border-r-[4.5px] border-r-transparent border-b-[8px] border-b-[#0081FB]" />
          <div className="w-[5px] h-[11px] bg-[#0081FB] rounded-b-[1px]" />
        </div>
        {/* Green Right Arrow */}
        <div className="flex flex-col items-center">
          <div className="w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-b-[9px] border-b-[#00E676]" />
          <div className="w-[5.5px] h-[21px] bg-[#00E676] rounded-b-[1px]" />
        </div>
      </div>
      <span className="text-white text-[24px] font-bold tracking-tight font-sans">
        HighLevel
      </span>
    </div>
  );
}

function GoogleLogo() {
  return (
    <div className="flex items-center justify-center select-none">
      <span className="text-[31px] font-bold tracking-[-0.02em] font-sans inline-flex">
        <span style={{ color: '#4285F4' }}>G</span>
        <span style={{ color: '#EA4335' }}>o</span>
        <span style={{ color: '#FBBC05' }}>o</span>
        <span style={{ color: '#4285F4' }}>g</span>
        <span style={{ color: '#34A853' }}>l</span>
        <span style={{ color: '#EA4335' }}>e</span>
      </span>
    </div>
  );
}

function LinkedInLogo() {
  return (
    <div className="flex items-center justify-center gap-1.5 select-none">
      <span className="text-white text-[25px] font-bold tracking-tight font-sans">
        Linked
      </span>
      <div className="w-[29px] h-[29px] bg-[#0A66C2] rounded-[5px] flex items-center justify-center">
        <span className="text-white text-[18px] font-bold font-sans lowercase leading-none -mt-0.5">
          in
        </span>
      </div>
    </div>
  );
}

function SEMrushLogo() {
  return (
    <div className="flex items-center justify-center gap-3 select-none">
      {/* SEMrush Fireball Icon */}
      <svg className="w-8 h-8 shrink-0" viewBox="0 0 32 32" fill="none">
        <path
          d="M17.5 4C9.5 4 3 10.5 3 18.5S9.5 33 17.5 33c7.2 0 13.2-5.2 14.3-12.1-4.8 3.5-11.5 2.5-15.1-2.3-3.6-4.8-2.6-11.5 2.2-15.1-1.3-.3-2.6-.5-3.9-.5z"
          fill="#FF642D"
          transform="matrix(0.85 0 0 0.85 2 2)"
        />
        <circle cx="16" cy="16" r="6" fill="#06151D" />
        <path
          d="M6 14l-4-3 4-1M7 19l-5 0 5-2M7 23l-4 3 4-1"
          stroke="#FF642D"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
      <span className="text-white text-[22px] font-black tracking-wider uppercase font-sans">
        SEMRUSH
      </span>
    </div>
  );
}

function TikTokAdsLogo() {
  return (
    <div className="flex items-center justify-center gap-3 select-none">
      {/* TikTok Musical Note */}
      <div className="relative w-7 h-8 shrink-0">
        <svg className="w-full h-full" viewBox="0 0 24 24" fill="none">
          {/* Cyan layer */}
          <path
            d="M16.5 4.5c1.2 1.2 2.8 1.8 4.4 1.9v3.5c-1.6-.1-3.2-.6-4.4-1.5v8c0 3.3-2.7 6-6 6s-6-2.7-6-6 2.7-6 6-6c.5 0 1 .1 1.5.2v3.6c-.5-.2-1-.3-1.5-.3-1.3 0-2.4 1.1-2.4 2.4s1.1 2.4 2.4 2.4 2.4-1.1 2.4-2.4V1h3.6c0 1.3.5 2.5 1.5 3.5z"
            fill="#00F2FE"
            className="translate-x-[-1px] translate-y-[-1px]"
          />
          {/* Magenta layer */}
          <path
            d="M16.5 4.5c1.2 1.2 2.8 1.8 4.4 1.9v3.5c-1.6-.1-3.2-.6-4.4-1.5v8c0 3.3-2.7 6-6 6s-6-2.7-6-6 2.7-6 6-6c.5 0 1 .1 1.5.2v3.6c-.5-.2-1-.3-1.5-.3-1.3 0-2.4 1.1-2.4 2.4s1.1 2.4 2.4 2.4 2.4-1.1 2.4-2.4V1h3.6c0 1.3.5 2.5 1.5 3.5z"
            fill="#FE2C55"
            className="translate-x-[1px] translate-y-[1px]"
          />
          {/* Pure White top layer */}
          <path
            d="M16.5 4.5c1.2 1.2 2.8 1.8 4.4 1.9v3.5c-1.6-.1-3.2-.6-4.4-1.5v8c0 3.3-2.7 6-6 6s-6-2.7-6-6 2.7-6 6-6c.5 0 1 .1 1.5.2v3.6c-.5-.2-1-.3-1.5-.3-1.3 0-2.4 1.1-2.4 2.4s1.1 2.4 2.4 2.4 2.4-1.1 2.4-2.4V1h3.6c0 1.3.5 2.5 1.5 3.5z"
            fill="#FFFFFF"
          />
        </svg>
      </div>
      <div className="flex items-baseline gap-1.5">
        <span className="text-white text-[23px] font-bold font-sans">
          TikTok
        </span>
        <span className="text-white text-[21px] font-medium font-sans">
          Ads
        </span>
      </div>
    </div>
  );
}

function AmazonAdsLogo() {
  return (
    <div className="flex flex-col items-center justify-center select-none pt-1">
      <div className="flex items-baseline gap-1.5">
        <span className="text-white text-[25px] font-bold tracking-tight font-sans">
          amazon
        </span>
        <span className="text-white text-[22px] font-normal tracking-tight font-sans opacity-95">
          ads
        </span>
      </div>
      {/* Curved Orange Smile Arrow */}
      <svg className="w-[115px] h-[15px] -mt-1" viewBox="0 0 100 14" fill="none">
        <path
          d="M4 3c26 8 62 8 86-1"
          stroke="#FF9900"
          strokeWidth="3.2"
          strokeLinecap="round"
        />
        <path
          d="M87 1l6 2.5-4 5.5"
          fill="#FF9900"
        />
      </svg>
    </div>
  );
}

function UbersuggestLogo() {
  return (
    <div className="flex items-center justify-center select-none">
      <span className="text-[#FF5A22] text-[26px] font-black tracking-tight font-sans drop-shadow-[0_0_12px_rgba(255,90,34,0.18)]">
        Ubersuggest
      </span>
    </div>
  );
}

/* ── Platform Card Configuration ── */
const PLATFORMS = [
  { id: 1, name: 'Meta', component: <MetaLogo /> },
  { id: 2, name: 'Shopify', component: <ShopifyLogo /> },
  { id: 3, name: 'WordPress', component: <WordPressLogo /> },
  { id: 4, name: 'HighLevel', component: <HighLevelLogo /> },
  { id: 5, name: 'Google', component: <GoogleLogo /> },
  { id: 6, name: 'LinkedIn', component: <LinkedInLogo /> },
  { id: 7, name: 'SEMrush', component: <SEMrushLogo /> },
  { id: 8, name: 'TikTok Ads', component: <TikTokAdsLogo /> },
  { id: 9, name: 'Amazon Ads', component: <AmazonAdsLogo /> },
  { id: 10, name: 'Ubersuggest', component: <UbersuggestLogo /> },
];

export default function TechnologyEcosystemSection() {
  return (
    <section
      id="technology-ecosystem"
      className="relative w-full overflow-hidden py-16 sm:py-20 lg:py-24 px-4 sm:px-6 md:px-10 lg:px-12"
      style={{ backgroundColor: '#020C10', fontFamily: 'Poppins, sans-serif' }}
    >
      {/* ── Background Fine Technical Grid ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #25404B 1px, transparent 1px), linear-gradient(to bottom, #25404B 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* ── Top-Right Futuristic Planetary Arc & Orbital Lines ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-[-60px] right-[-60px] sm:right-[-20px] w-[700px] h-[700px] lg:w-[900px] lg:h-[850px] select-none"
      >
        <svg className="w-full h-full" viewBox="0 0 900 850" fill="none">
          <defs>
            <radialGradient id="planetGrad" cx="70%" cy="30%" r="65%">
              <stop offset="0%" stopColor="#0B2636" stopOpacity="0.5" />
              <stop offset="55%" stopColor="#051620" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#020C10" stopOpacity="0" />
            </radialGradient>
          </defs>
          {/* Subtle Planetary sphere body */}
          <circle cx="680" cy="200" r="340" fill="url(#planetGrad)" />
          {/* Concentric Orbital Ellipses */}
          <ellipse
            cx="680"
            cy="200"
            rx="460"
            ry="290"
            stroke="#00C8E8"
            strokeWidth="0.85"
            strokeOpacity="0.2"
            transform="rotate(-20 680 200)"
          />
          <ellipse
            cx="680"
            cy="200"
            rx="580"
            ry="380"
            stroke="#00C8E8"
            strokeWidth="0.75"
            strokeOpacity="0.14"
            transform="rotate(-20 680 200)"
          />
          {/* Glowing Cyan Node along outer orbit */}
          <g transform="translate(390, 130)">
            <circle cx="0" cy="0" r="12" fill="#00C8E8" fillOpacity="0.18" />
            <circle cx="0" cy="0" r="5" fill="#00C8E8" />
            <circle cx="0" cy="0" r="2.2" fill="#FFFFFF" />
          </g>
        </svg>
      </div>

      {/* ── Bottom-Left Warm Orange Atmospheric Wave / Mesh ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-40px] left-[-60px] w-[550px] h-[450px] select-none"
      >
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at bottom left, rgba(255, 121, 0, 0.09) 0%, transparent 65%)',
            filter: 'blur(75px)',
          }}
        />
        <svg className="w-full h-full opacity-30" viewBox="0 0 550 450" fill="none">
          <path
            d="M-20 420 Q 140 350 280 370 T 540 300"
            stroke="#FF7900"
            strokeWidth="1.2"
            strokeDasharray="2 6"
            strokeOpacity="0.6"
          />
          <path
            d="M-40 380 Q 120 310 260 330 T 510 260"
            stroke="#FF7900"
            strokeWidth="1"
            strokeDasharray="2 6"
            strokeOpacity="0.4"
          />
          <path
            d="M-60 340 Q 100 270 240 290 T 480 220"
            stroke="#FF7900"
            strokeWidth="0.8"
            strokeDasharray="2 6"
            strokeOpacity="0.25"
          />
        </svg>
      </div>

      {/* ── Main Content Container (Max 1480px matching reference) ── */}
      <div className="relative z-10 max-w-[1480px] mx-auto">
        {/* ══════════════════════════════════════════════════════════════
            1. EDITORIAL HEADING & RIGHT-SIDE DESCRIPTION
           ══════════════════════════════════════════════════════════════ */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 sm:gap-10 mb-12 sm:mb-16">
          {/* Top-Left Heading */}
          <div className="max-w-[720px]">
            {/* Small Cyan Label with Horizontal Line */}
            <div className="flex items-center gap-3 mb-4 sm:mb-5">
              <span className="w-7 h-[2px] bg-[#00C8E8] inline-block shrink-0" />
              <p className="text-[#00C8E8] text-[11px] sm:text-[12px] font-bold tracking-[0.22em] uppercase font-neue">
                TECHNOLOGY ECOSYSTEM
              </p>
            </div>

            {/* Main Heading — Exact Line Composition & Weight */}
            <h2 className="font-neue text-[46px] sm:text-[62px] md:text-[76px] lg:text-[84px] font-black leading-[0.98] tracking-[-0.035em]">
              <span className="block text-white">Platforms we trust.</span>
              <span className="block text-[#8E9CA6]">Technology built</span>
              <span className="block text-[#8E9CA6]">for performance.</span>
            </h2>
          </div>

          {/* Right-Side Description with Vertical Cyan Accent Divider */}
          <div className="flex items-start gap-4 sm:gap-5 max-w-[480px] pb-1 lg:mb-1">
            <span
              aria-hidden="true"
              className="w-[2px] h-[52px] sm:h-[58px] bg-[#00C8E8] shrink-0 mt-1"
            />
            <p className="text-[#91A5B1] text-[15px] sm:text-[16px] lg:text-[17px] leading-[1.65] font-normal font-poppins">
              We build and optimize using widely recognized platforms and tools trusted across the digital industry.
            </p>
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════════
            2. TECHNOLOGY LOGO GRID (5 COLUMNS × 2 ROWS)
           ══════════════════════════════════════════════════════════════ */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4 lg:gap-5 mb-14 sm:mb-18 lg:mb-20">
          {PLATFORMS.map((platform) => (
            <div
              key={platform.id}
              className="group relative flex items-center justify-center h-[134px] sm:h-[140px] lg:h-[144px] rounded-[14px] sm:rounded-[16px] border border-[#1E3B48]/85 hover:border-[#00C8E8]/70 bg-gradient-to-br from-[#06151D] via-[#071722] to-[#0A1F2C] overflow-hidden transition-all duration-300 hover:-translate-y-1 shadow-[0_8px_24px_rgba(2,12,16,0.6)] hover:shadow-[0_12px_28px_rgba(0,200,232,0.16)] cursor-pointer select-none px-4"
            >
              {/* Lower-Left Decorative Dark Concentric Circles */}
              <svg
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-5 -left-5 w-24 h-24 opacity-35"
                viewBox="0 0 100 100"
                fill="none"
              >
                <circle cx="20" cy="80" r="28" stroke="#163544" strokeWidth="1" />
                <circle cx="20" cy="80" r="48" stroke="#163544" strokeWidth="1" />
                <circle cx="20" cy="80" r="68" stroke="#163544" strokeWidth="1" />
              </svg>

              {/* Lower-Right Soft Radiant Cyan Illumination */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-6 -right-6 w-28 h-28 rounded-full bg-[#00C8E8]/14 blur-xl transition-all duration-300 group-hover:bg-[#00C8E8]/28 group-hover:scale-115"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute bottom-0 right-0 w-20 h-20 bg-radial from-[#00C8E8]/22 via-transparent to-transparent opacity-75 group-hover:opacity-100 transition-opacity"
              />

              {/* Lower-Right Corner Cyan Accent Lines */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute bottom-0 right-0 w-16 h-[2px] bg-gradient-to-l from-[#00C8E8] to-transparent opacity-75 group-hover:opacity-100 group-hover:w-24 transition-all duration-300"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute bottom-0 right-0 w-[2px] h-12 bg-gradient-to-t from-[#00C8E8] to-transparent opacity-75 group-hover:opacity-100 group-hover:h-16 transition-all duration-300"
              />

              {/* Top-Right Circular Diagonal Arrow Symbol */}
              <div
                aria-hidden="true"
                className="absolute top-3 right-3 sm:top-3.5 sm:right-3.5 w-[28px] h-[28px] rounded-full bg-[#071923]/90 border border-[#25404B]/80 group-hover:border-[#00C8E8]/60 flex items-center justify-center text-[#91A5B1] group-hover:text-white transition-all duration-300 shadow-sm"
              >
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>

              {/* Centered Platform Brand Logo */}
              <div className="relative z-10 w-full flex items-center justify-center transition-transform duration-300 group-hover:scale-[1.03]">
                {platform.component}
              </div>
            </div>
          ))}
        </div>

        {/* ══════════════════════════════════════════════════════════════
            3. CENTERED BOTTOM CAPTION
           ══════════════════════════════════════════════════════════════ */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 select-none">
          {/* Left Thin Cyan Line */}
          <span className="w-12 sm:w-20 md:w-28 h-[1px] bg-[#00C8E8]/40 inline-block" />

          {/* Small Cyan Glowing Circular Point */}
          <span className="w-2 h-2 rounded-full border border-[#00C8E8] bg-[#020C10] shadow-[0_0_8px_#00C8E8] shrink-0" />

          {/* Uppercase Muted Caption */}
          <p className="text-[#91A5B1] text-[10.5px] sm:text-[11.5px] md:text-[12px] font-semibold tracking-[0.24em] uppercase text-center font-sans">
            A CONNECTED TECHNOLOGY ECOSYSTEM BUILT FOR MEASURABLE GROWTH
          </p>

          {/* Right Thin Cyan Line */}
          <span className="w-12 sm:w-20 md:w-28 h-[1px] bg-[#00C8E8]/40 inline-block" />
        </div>
      </div>
    </section>
  );
}
