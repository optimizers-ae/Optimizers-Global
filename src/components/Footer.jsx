import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import logo from '../assets/logo.svg';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const containerRef = useRef(null);
  const footerContentRef = useRef(null);
  const [footerHeight, setFooterHeight] = useState(840);

  // Measure dynamic footer height for perfect responsiveness across all viewports
  useEffect(() => {
    if (!footerContentRef.current) return;
    const updateHeight = () => {
      if (footerContentRef.current) {
        setFooterHeight(footerContentRef.current.offsetHeight);
      }
    };
    updateHeight();
    const ro = new ResizeObserver(() => updateHeight());
    ro.observe(footerContentRef.current);
    window.addEventListener('resize', updateHeight);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', updateHeight);
    };
  }, []);

  // Track the scroll progress of the footer reveal container relative to the viewport
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end end'],
  });

  // Map scroll progress to scale, opacity, and parallax translateY
  // As the user scrolls to uncover the footer, it gracefully scales up and fades in
  const opacity = useTransform(scrollYProgress, [0, 0.45, 1], [0.35, 0.75, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.93, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [-50, 0]);

  return (
    <div
      ref={containerRef}
      id="site-footer-reveal-container"
      className="relative z-0 w-full"
      style={{
        height: `${footerHeight}px`,
        clipPath: 'polygon(0% 0, 100% 0%, 100% 100%, 0 100%)',
      }}
    >
      <div className="fixed bottom-0 left-0 right-0 w-full">
        <motion.div
          style={{ opacity, scale, y }}
          className="w-full origin-bottom"
        >
          <footer
            ref={footerContentRef}
            id="site-footer"
            className="relative w-full overflow-hidden bg-[#020C10] text-white pt-16 sm:pt-20 lg:pt-24 pb-8 px-4 sm:px-6 md:px-10 lg:px-14 border-t border-[#00C8E8]/20"
            style={{ fontFamily: 'Poppins, sans-serif' }}
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

            {/* ── Atmospheric Ambient Lighting ── */}
            {/* Top Center Soft Cyan Illumination */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[750px] h-[380px] rounded-full"
              style={{
                background: 'radial-gradient(ellipse at 50% 0%, rgba(0, 200, 232, 0.16) 0%, transparent 70%)',
                filter: 'blur(75px)',
              }}
            />

            {/* Right Edge Subtle Cyan Ambient Glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute bottom-1/4 -right-20 w-[450px] h-[450px] rounded-full z-0"
              style={{
                background: 'radial-gradient(circle, rgba(0, 200, 232, 0.08) 0%, transparent 70%)',
                filter: 'blur(80px)',
              }}
            />

            {/* ── Bottom-Left Radiant Amber/Orange Horizon Flare & Horizon Curve ── */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-28 -left-24 w-[600px] h-[480px] rounded-full z-0"
              style={{
                background: 'radial-gradient(circle at 20% 80%, rgba(255, 121, 0, 0.55) 0%, rgba(255, 121, 0, 0.22) 35%, transparent 70%)',
                filter: 'blur(55px)',
              }}
            />

            {/* High-intensity orange horizon arc line */}
            <svg
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-10 -left-12 w-[700px] h-[380px] z-0 overflow-visible"
              viewBox="0 0 700 380"
              fill="none"
            >
              <defs>
                <linearGradient id="orangeArcGrad" x1="0" y1="1" x2="1" y2="0">
                  <stop offset="0%" stopColor="#FF7900" stopOpacity="0.95" />
                  <stop offset="45%" stopColor="#FFA439" stopOpacity="0.85" />
                  <stop offset="85%" stopColor="#FF7900" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#FF7900" stopOpacity="0" />
                </linearGradient>
                <filter id="orangeGlow" x="-30%" y="-30%" width="160%" height="160%">
                  <feGaussianBlur stdDeviation="9" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              <path
                d="M -30 380 C 80 290, 220 250, 420 290 C 540 315, 620 350, 720 380"
                stroke="url(#orangeArcGrad)"
                strokeWidth="3.5"
                filter="url(#orangeGlow)"
              />
              <path
                d="M -30 380 C 80 290, 220 250, 420 290 C 540 315, 620 350, 720 380"
                stroke="#FFF2DC"
                strokeWidth="1.2"
                strokeOpacity="0.75"
              />
            </svg>

            {/* ── Multi-Layered Dotted Particle Waves Across Lower Canvas (SVG) ── */}
            <svg
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-8 -left-10 w-[1300px] h-[420px] z-0 opacity-40 overflow-visible"
              viewBox="0 0 1300 420"
              fill="none"
            >
              <path
                d="M -40 390 C 120 300, 260 345, 480 295 C 680 245, 880 340, 1080 290 C 1200 260, 1260 300, 1340 280"
                stroke="#00C8E8"
                strokeWidth="1.6"
                strokeDasharray="2 7"
              />
              <path
                d="M -40 370 C 130 280, 270 325, 500 275 C 700 225, 900 320, 1100 270 C 1210 240, 1270 280, 1340 260"
                stroke="#00C8E8"
                strokeWidth="1.6"
                strokeDasharray="2 7"
              />
              <path
                d="M -40 350 C 140 260, 280 305, 520 255 C 720 205, 920 300, 1120 250 C 1220 220, 1280 260, 1340 240"
                stroke="#00C8E8"
                strokeWidth="1.6"
                strokeDasharray="2 7"
              />
              <path
                d="M -40 330 C 150 240, 290 285, 540 235 C 740 185, 940 280, 1140 230 C 1230 200, 1290 240, 1340 220"
                stroke="#00C8E8"
                strokeWidth="1.6"
                strokeDasharray="2 7"
              />
              <path
                d="M -40 310 C 160 220, 300 265, 560 215 C 760 165, 960 260, 1160 210 C 1240 180, 1300 220, 1340 200"
                stroke="#00C8E8"
                strokeWidth="1.6"
                strokeDasharray="2 7"
              />
              <path
                d="M -40 290 C 170 200, 310 245, 580 195 C 780 145, 980 240, 1180 190 C 1250 165, 1310 205, 1340 185"
                stroke="#00C8E8"
                strokeWidth="1.6"
                strokeDasharray="2 7"
              />
              <path
                d="M -40 270 C 180 180, 320 225, 600 175 C 800 125, 1000 220, 1200 170 C 1260 150, 1315 190, 1340 170"
                stroke="#00C8E8"
                strokeWidth="1.6"
                strokeDasharray="2 7"
              />
            </svg>

            {/* ── Main Footer Canvas Container (1480px Max) ── */}
            <div className="relative z-10 max-w-[1480px] mx-auto">
              {/* ══════════════════════════════════════════════════════════════
                  1. TOP BRANDING AREA (CENTERED LOGO + TAGLINE)
                 ══════════════════════════════════════════════════════════════ */}
              <div className="flex flex-col items-center text-center mb-8 sm:mb-10">
                <Link to="/" className="inline-block group focus:outline-none">
                  <img
                    src={logo}
                    alt="Optimizers United Arab Emirates"
                    className="h-16 sm:h-20 md:h-[86px] w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                </Link>

                <p className="text-[#91A5B1] text-[13.5px] sm:text-[14.5px] md:text-[15px] leading-[1.65] font-normal font-poppins max-w-[650px] mx-auto mt-4 sm:mt-5">
                  Digital strategy, creative ideas, and measurable results for forward-thinking businesses across the UAE.
                </p>
              </div>

              {/* ══════════════════════════════════════════════════════════════
                  2. SOCIAL MEDIA ROW WITH FUTURISTIC HORIZONTAL DIVIDERS
                 ══════════════════════════════════════════════════════════════ */}
              <div className="w-full flex items-center justify-center gap-4 sm:gap-6 my-8 sm:my-10">
                {/* Left Futuristic Divider with Angled Orange Accent */}
                <div className="flex-1 hidden md:flex items-center justify-end">
                  <svg
                    className="w-full max-w-[460px] h-8 overflow-visible"
                    viewBox="0 0 460 32"
                    fill="none"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M 0 16 L 250 16 L 275 28 L 365 28 L 390 16 L 460 16"
                      stroke="#00C8E8"
                      strokeWidth="1.5"
                      strokeOpacity="0.85"
                      vectorEffect="non-scaling-stroke"
                    />
                    <path
                      d="M 250 16 L 275 28"
                      stroke="#FF7900"
                      strokeWidth="3.2"
                      strokeLinecap="round"
                      vectorEffect="non-scaling-stroke"
                      filter="drop-shadow(0 0 7px #FF7900)"
                    />
                  </svg>
                </div>

                {/* Centered Social Media Buttons Row */}
                <div className="flex items-center gap-3.5 sm:gap-4 shrink-0">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-[#00C8E8]/70 bg-[#03131B] flex items-center justify-center text-white hover:text-[#00C8E8] hover:border-[#00C8E8] shadow-[0_0_12px_rgba(0,200,232,0.25)] hover:shadow-[0_0_18px_rgba(0,200,232,0.5)] hover:-translate-y-1 transition-all duration-300 group"
                  >
                    <span className="font-bold text-[14px] sm:text-[15px] font-poppins">in</span>
                  </a>

                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-[#00C8E8]/70 bg-[#03131B] flex items-center justify-center text-white hover:text-[#00C8E8] hover:border-[#00C8E8] shadow-[0_0_12px_rgba(0,200,232,0.25)] hover:shadow-[0_0_18px_rgba(0,200,232,0.5)] hover:-translate-y-1 transition-all duration-300 group"
                  >
                    <svg className="w-5 h-5 fill-none stroke-current stroke-[1.8]" viewBox="0 0 24 24">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <circle cx="12" cy="12" r="4" />
                      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                    </svg>
                  </a>

                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-[#00C8E8]/70 bg-[#03131B] flex items-center justify-center text-white hover:text-[#00C8E8] hover:border-[#00C8E8] shadow-[0_0_12px_rgba(0,200,232,0.25)] hover:shadow-[0_0_18px_rgba(0,200,232,0.5)] hover:-translate-y-1 transition-all duration-300 group"
                  >
                    <span className="font-bold text-[16px] sm:text-[17px] font-serif">f</span>
                  </a>

                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube"
                    className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-[#00C8E8]/70 bg-[#03131B] flex items-center justify-center text-white hover:text-[#00C8E8] hover:border-[#00C8E8] shadow-[0_0_12px_rgba(0,200,232,0.25)] hover:shadow-[0_0_18px_rgba(0,200,232,0.5)] hover:-translate-y-1 transition-all duration-300 group"
                  >
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </a>
                </div>

                {/* Right Futuristic Divider */}
                <div className="flex-1 hidden md:flex items-center justify-start">
                  <svg
                    className="w-full max-w-[460px] h-8 overflow-visible"
                    viewBox="0 0 460 32"
                    fill="none"
                    preserveAspectRatio="none"
                    style={{ transform: 'scaleX(-1)' }}
                  >
                    <path
                      d="M 0 16 L 250 16 L 275 28 L 365 28 L 390 16 L 460 16"
                      stroke="#00C8E8"
                      strokeWidth="1.5"
                      strokeOpacity="0.85"
                      vectorEffect="non-scaling-stroke"
                    />
                    <path
                      d="M 250 16 L 275 28"
                      stroke="#FF7900"
                      strokeWidth="3.2"
                      strokeLinecap="round"
                      vectorEffect="non-scaling-stroke"
                      filter="drop-shadow(0 0 7px #FF7900)"
                    />
                  </svg>
                </div>
              </div>

              {/* ══════════════════════════════════════════════════════════════
                  3. MAIN FOOTER CONTENT — FOUR COLUMNS
                 ══════════════════════════════════════════════════════════════ */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-12 sm:mt-16 mb-16 sm:mb-20">
                {/* ── Column 1: COMPANY ── */}
                <div className="relative flex flex-col pr-0 sm:pr-8 lg:pr-10 pb-8 lg:pb-0">
                  <div className="flex items-center gap-2.5 mb-6">
                    <span className="w-4 h-[2px] bg-[#00C8E8]" />
                    <h3 className="text-[#00C8E8] text-[12px] font-bold tracking-[0.18em] uppercase font-neue">
                      COMPANY
                    </h3>
                  </div>
                  <ul className="space-y-3.5 font-poppins text-[13.5px] sm:text-[14px]">
                    <li>
                      <Link to="/" className="text-[#E2E8F0] hover:text-[#00C8E8] transition-all duration-200 inline-block hover:translate-x-1">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link to="/about" className="text-[#E2E8F0] hover:text-[#00C8E8] transition-all duration-200 inline-block hover:translate-x-1">
                        About Us
                      </Link>
                    </li>
                    <li>
                      <a href="/#case-studies" className="text-[#E2E8F0] hover:text-[#00C8E8] transition-all duration-200 inline-block hover:translate-x-1">
                        Case Studies
                      </a>
                    </li>
                    <li>
                      <a href="/#strategic-insights" className="text-[#E2E8F0] hover:text-[#00C8E8] transition-all duration-200 inline-block hover:translate-x-1">
                        Blog & Insights
                      </a>
                    </li>
                    <li>
                      <a href="/#trusted-clients" className="text-[#E2E8F0] hover:text-[#00C8E8] transition-all duration-200 inline-block hover:translate-x-1">
                        Testimonials
                      </a>
                    </li>
                    <li>
                      <Link to="/contact" className="text-[#E2E8F0] hover:text-[#00C8E8] transition-all duration-200 inline-block hover:translate-x-1">
                        Contact Us
                      </Link>
                    </li>
                  </ul>

                  <div
                    aria-hidden="true"
                    className="hidden lg:block absolute right-0 top-1 bottom-1 w-[1px]"
                    style={{
                      background: 'linear-gradient(to bottom, transparent, rgba(0, 200, 232, 0.22) 20%, rgba(0, 200, 232, 0.22) 80%, transparent)',
                    }}
                  />
                </div>

                {/* ── Column 2: SERVICES ── */}
                <div className="relative flex flex-col px-0 sm:px-8 lg:px-10 pb-8 lg:pb-0">
                  <div className="flex items-center gap-2.5 mb-6">
                    <span className="w-4 h-[2px] bg-[#00C8E8]" />
                    <h3 className="text-[#00C8E8] text-[12px] font-bold tracking-[0.18em] uppercase font-neue">
                      SERVICES
                    </h3>
                  </div>
                  <ul className="space-y-3.5 font-poppins text-[13.5px] sm:text-[14px]">
                    <li>
                      <a href="/#services" className="text-[#E2E8F0] hover:text-[#00C8E8] transition-all duration-200 inline-block hover:translate-x-1">
                        Search Engine Optimization
                      </a>
                    </li>
                    <li>
                      <a href="/#services" className="text-[#E2E8F0] hover:text-[#00C8E8] transition-all duration-200 inline-block hover:translate-x-1">
                        Google Ads Marketing
                      </a>
                    </li>
                    <li>
                      <a href="/#services" className="text-[#E2E8F0] hover:text-[#00C8E8] transition-all duration-200 inline-block hover:translate-x-1">
                        Social Media Marketing
                      </a>
                    </li>
                    <li>
                      <a href="/#services" className="text-[#E2E8F0] hover:text-[#00C8E8] transition-all duration-200 inline-block hover:translate-x-1">
                        Content Marketing
                      </a>
                    </li>
                    <li>
                      <a href="/#services" className="text-[#E2E8F0] hover:text-[#00C8E8] transition-all duration-200 inline-block hover:translate-x-1">
                        Video Marketing
                      </a>
                    </li>
                    <li>
                      <a href="/#services" className="text-[#E2E8F0] hover:text-[#00C8E8] transition-all duration-200 inline-block hover:translate-x-1">
                        Web Development
                      </a>
                    </li>
                  </ul>

                  <div
                    aria-hidden="true"
                    className="hidden lg:block absolute right-0 top-1 bottom-1 w-[1px]"
                    style={{
                      background: 'linear-gradient(to bottom, transparent, rgba(0, 200, 232, 0.22) 20%, rgba(0, 200, 232, 0.22) 80%, transparent)',
                    }}
                  />
                </div>

                {/* ── Column 3: INDUSTRIES ── */}
                <div className="relative flex flex-col px-0 sm:px-8 lg:px-10 pb-8 lg:pb-0">
                  <div className="flex items-center gap-2.5 mb-6">
                    <span className="w-4 h-[2px] bg-[#00C8E8]" />
                    <h3 className="text-[#00C8E8] text-[12px] font-bold tracking-[0.18em] uppercase font-neue">
                      INDUSTRIES
                    </h3>
                  </div>
                  <ul className="space-y-3.5 font-poppins text-[13.5px] sm:text-[14px]">
                    <li>
                      <a href="/#industries" className="text-[#E2E8F0] hover:text-[#00C8E8] transition-all duration-200 inline-block hover:translate-x-1 leading-[1.4]">
                        Professional Services &<br />Real Estate
                      </a>
                    </li>
                    <li>
                      <a href="/#industries" className="text-[#E2E8F0] hover:text-[#00C8E8] transition-all duration-200 inline-block hover:translate-x-1">
                        Retail & E-commerce
                      </a>
                    </li>
                    <li>
                      <a href="/#industries" className="text-[#E2E8F0] hover:text-[#00C8E8] transition-all duration-200 inline-block hover:translate-x-1">
                        Construction & Manufacturing
                      </a>
                    </li>
                    <li>
                      <a href="/#industries" className="text-[#E2E8F0] hover:text-[#00C8E8] transition-all duration-200 inline-block hover:translate-x-1">
                        Healthcare & Clinics
                      </a>
                    </li>
                    <li>
                      <a href="/#industries" className="text-[#E2E8F0] hover:text-[#00C8E8] transition-all duration-200 inline-block hover:translate-x-1">
                        Education & Training
                      </a>
                    </li>
                  </ul>

                  <div
                    aria-hidden="true"
                    className="hidden lg:block absolute right-0 top-1 bottom-1 w-[1px]"
                    style={{
                      background: 'linear-gradient(to bottom, transparent, rgba(0, 200, 232, 0.22) 20%, rgba(0, 200, 232, 0.22) 80%, transparent)',
                    }}
                  />
                </div>

                {/* ── Column 4: CONTACT US ── */}
                <div className="flex flex-col pl-0 sm:pl-8 lg:pl-10">
                  <div className="flex items-center gap-2.5 mb-6">
                    <span className="w-4 h-[2px] bg-[#00C8E8]" />
                    <h3 className="text-[#00C8E8] text-[12px] font-bold tracking-[0.18em] uppercase font-neue">
                      CONTACT US
                    </h3>
                  </div>

                  <div className="flex flex-col space-y-3.5">
                    {/* Card 1: PHONE */}
                    <a
                      href="tel:+97141234567"
                      className="group relative rounded-[14px] border border-[#00C8E8]/50 hover:border-[#00C8E8] bg-[#03131B]/90 hover:bg-[#041822] px-4 py-3.5 flex items-center gap-3.5 shadow-[inset_-2px_0_12px_rgba(0,200,232,0.18)] hover:shadow-[0_4px_22px_rgba(0,200,232,0.25)] transition-all duration-300"
                    >
                      <div className="w-10 h-10 rounded-full border border-[#00C8E8] bg-[#020E15] flex items-center justify-center text-[#00C8E8] shrink-0 group-hover:scale-105 transition-transform">
                        <Phone className="w-4 h-4 stroke-[2.2]" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[#849BA8] text-[10.5px] font-semibold tracking-[0.18em] uppercase font-neue">
                          PHONE
                        </span>
                        <span className="text-white text-[14.5px] sm:text-[15px] font-bold font-neue tracking-wide group-hover:text-[#00C8E8] transition-colors">
                          +971 4 123 4567
                        </span>
                      </div>
                    </a>

                    {/* Card 2: EMAIL */}
                    <a
                      href="mailto:info@optimizersuae.ae"
                      className="group relative rounded-[14px] border border-[#00C8E8]/50 hover:border-[#00C8E8] bg-[#03131B]/90 hover:bg-[#041822] px-4 py-3.5 flex items-center gap-3.5 shadow-[inset_-2px_0_12px_rgba(0,200,232,0.18)] hover:shadow-[0_4px_22px_rgba(0,200,232,0.25)] transition-all duration-300"
                    >
                      <div className="w-10 h-10 rounded-full border border-[#00C8E8] bg-[#020E15] flex items-center justify-center text-[#00C8E8] shrink-0 group-hover:scale-105 transition-transform">
                        <Mail className="w-4 h-4 stroke-[2.2]" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[#849BA8] text-[10.5px] font-semibold tracking-[0.18em] uppercase font-neue">
                          EMAIL
                        </span>
                        <span className="text-white text-[13.5px] sm:text-[14px] font-bold font-neue tracking-tight group-hover:text-[#00C8E8] transition-colors">
                          info@optimizersuae.ae
                        </span>
                      </div>
                    </a>

                    {/* Card 3: ADDRESS */}
                    <a
                      href="https://maps.google.com/?q=Dubai,+United+Arab+Emirates"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative rounded-[14px] bg-[#03131B]/90 hover:bg-[#041822] px-4 py-3.5 flex items-center gap-3.5 transition-all duration-300 overflow-hidden shadow-[0_0_24px_rgba(255,121,0,0.32),inset_0_-2px_14px_rgba(255,121,0,0.25)] hover:shadow-[0_0_32px_rgba(255,121,0,0.5)]"
                    >
                      <svg
                        className="pointer-events-none absolute inset-0 w-full h-full rounded-[14px]"
                        viewBox="0 0 100 100"
                        preserveAspectRatio="none"
                      >
                        <defs>
                          <linearGradient id="card3BorderGrad" x1="0" y1="0" x2="1" y2="1">
                            <stop offset="30%" stopColor="#00C8E8" stopOpacity="0.45" />
                            <stop offset="65%" stopColor="#FF7900" stopOpacity="0.75" />
                            <stop offset="100%" stopColor="#FF7900" stopOpacity="1" />
                          </linearGradient>
                        </defs>
                        <rect
                          x="0.75"
                          y="0.75"
                          width="98.5"
                          height="98.5"
                          rx="5"
                          ry="5"
                          fill="none"
                          stroke="url(#card3BorderGrad)"
                          strokeWidth="1.5"
                          vectorEffect="non-scaling-stroke"
                        />
                      </svg>

                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute -bottom-5 -right-5 w-24 h-24 rounded-full"
                        style={{
                          background: 'radial-gradient(circle, rgba(255, 121, 0, 0.65) 0%, rgba(255, 121, 0, 0.25) 50%, transparent 75%)',
                          filter: 'blur(12px)',
                        }}
                      />

                      <div className="w-10 h-10 rounded-full border border-[#00C8E8] bg-[#020E15] flex items-center justify-center text-[#00C8E8] shrink-0 group-hover:scale-105 transition-transform z-10">
                        <MapPin className="w-4 h-4 stroke-[2.2]" />
                      </div>
                      <div className="flex flex-col z-10">
                        <span className="text-[#849BA8] text-[10.5px] font-semibold tracking-[0.18em] uppercase font-neue">
                          ADDRESS
                        </span>
                        <span className="text-white text-[13.5px] sm:text-[14px] font-bold font-neue tracking-tight group-hover:text-[#FF7900] transition-colors">
                          Dubai, United Arab Emirates
                        </span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              {/* ══════════════════════════════════════════════════════════════
                  4. BOTTOM LEGAL AND COPYRIGHT BAR
                 ══════════════════════════════════════════════════════════════ */}
              <div className="relative w-full pt-6">
                <div
                  aria-hidden="true"
                  className="absolute top-0 left-0 right-0 h-[1px]"
                  style={{
                    background: 'linear-gradient(to right, transparent, rgba(0, 200, 232, 0.4) 15%, rgba(0, 200, 232, 0.4) 85%, transparent)',
                  }}
                />

                <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4 text-[12px] sm:text-[13px] text-[#91A5B1] font-poppins">
                  <div className="flex items-center gap-3">
                    <Link to="/privacy-policy" className="hover:text-[#00C8E8] transition-colors">
                      Privacy Policy
                    </Link>
                    <span className="text-[#25404B]">|</span>
                    <Link to="/terms-conditions" className="hover:text-[#00C8E8] transition-colors">
                      Terms & Conditions
                    </Link>
                  </div>

                  <div>
                    © {currentYear} <strong className="text-white font-bold">Optimizers</strong>. All rights reserved.
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </motion.div>
      </div>
    </div>
  );
}