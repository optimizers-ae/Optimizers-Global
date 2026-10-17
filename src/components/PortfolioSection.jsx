import React from 'react';
import { ArrowRight } from 'lucide-react';
import maxCareImg from '../assets/portfolio/max-care-medical.jpg';
import boothCounterImg from '../assets/portfolio/booth-counter.jpg';
import travacationsImg from '../assets/portfolio/travacations-travel.jpg';

const PORTFOLIO_PROJECTS = [
  {
    id: '01',
    number: '01',
    category: 'WORDPRESS',
    badge: 'WORDPRESS',
    image: maxCareImg,
    imageAlt: 'Max Care Plus Medical Platform Mockup',
    title: 'Max Care Plus Medical',
    description:
      'A comprehensive healthcare and medical services platform designed to showcase and manage various patient care specialties and clinic bookings.',
    tags: ['WordPress', 'Healthcare', 'Medical Portal'],
    year: '2026',
    link: '#',
  },
  {
    id: '02',
    number: '02',
    category: 'CUSTOM WEB APP',
    badge: 'WEBSITE',
    image: boothCounterImg,
    imageAlt: 'Booth & Counter Exhibition Platform Mockup',
    title: 'Booth & Counter Platform',
    description:
      'An interactive exhibition booth and counter management platform where brands can design, view, and manage custom trade show stands.',
    tags: ['React', 'JavaScript', 'HTML', 'PHP'],
    year: '2026',
    link: '#',
  },
  {
    id: '03',
    number: '03',
    category: 'E-COMMERCE & TRAVEL',
    badge: 'TRAVEL PORTAL',
    image: travacationsImg,
    imageAlt: 'Travacations UAE Tourism & Travel Platform Mockup',
    title: 'Travacations UAE Tourism',
    description:
      'A premium Dubai travel and tourism experience platform offering curated tour packages, flight bookings, and luxury desert safari itineraries.',
    tags: ['Next.js', 'E-Commerce', 'Booking Engine'],
    year: '2026',
    link: '#',
  },
];

export default function PortfolioSection() {
  return (
    <section
      id="portfolio-section"
      className="relative w-full overflow-hidden py-14 sm:py-18 lg:py-24 px-4 sm:px-6 md:px-10 lg:px-12"
      style={{ backgroundColor: '#020C10', fontFamily: 'Poppins, sans-serif' }}
    >
      {/* ── Background Gradients & Ambient Glows ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-0 w-[500px] h-[500px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(0, 200, 232, 0.07) 0%, rgba(0, 200, 232, 0.01) 45%, transparent 70%)',
          filter: 'blur(90px)',
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-[-5%] w-[550px] h-[550px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(255, 121, 0, 0.06) 0%, rgba(255, 121, 0, 0.01) 45%, transparent 70%)',
          filter: 'blur(95px)',
        }}
      />

      {/* ── Background Subtle Technical Grid ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #25404B 1px, transparent 1px), linear-gradient(to bottom, #25404B 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* ── Main Container (1260px matching StrategicInsights & CaseStudies) ── */}
      <div className="relative z-10 max-w-[1260px] mx-auto">
        {/* ══════════════════════════════════════════════════════════════
            SECTION HEADER
           ══════════════════════════════════════════════════════════════ */}
        <div className="max-w-[760px] mb-10 sm:mb-14">
          {/* Small Cyan Label */}
          <p className="text-[#00C8E8] text-[11.5px] sm:text-[12px] font-bold tracking-[0.22em] uppercase font-neue mb-3">
            OUR PORTFOLIO
          </p>

          {/* Main Editorial Heading — Exact Line Composition */}
          <h2 className="font-neue text-[42px] sm:text-[54px] md:text-[64px] lg:text-[72px] font-black leading-[1.0] tracking-[-0.035em]">
            <span className="block text-white">Featured Digital</span>
            <span className="block text-white">Solutions</span>
            <span className="block text-[#8E9CA6]">We Build.</span>
          </h2>

          {/* Descriptive Subtitle */}
          <p className="text-[#91A5B1] text-[14.5px] sm:text-[15.5px] lg:text-[16px] leading-[1.65] font-normal font-poppins mt-4 max-w-[580px]">
            Explore some of our recent work across web development, e-commerce, custom web apps, and performance marketing in UAE.
          </p>

          {/* Small Cyan Horizontal Line */}
          <div className="w-12 h-[2px] bg-[#00C8E8] mt-4" />
        </div>

        {/* ══════════════════════════════════════════════════════════════
            THREE PREMIUM TRAVEL-STYLE PORTFOLIO CARDS
            (Identical UI Architecture to StrategicInsightsSection)
           ══════════════════════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 items-stretch">
          {PORTFOLIO_PROJECTS.map((project) => (
            <article
              key={project.id}
              className="group relative flex flex-col justify-between overflow-hidden rounded-[26px] border border-[#25404B]/60 bg-[#06151D] transition-all duration-500 ease-out hover:border-[#00C8E8]/40 hover:shadow-[0_20px_45px_rgba(0,0,0,0.55)] aspect-[3/4] min-h-[500px] sm:min-h-[520px] lg:min-h-[530px]"
            >
              {/* ── Full-Bleed Background Mockup Photograph ── */}
              <img
                src={project.image}
                alt={project.imageAlt}
                className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                loading="eager"
                decoding="async"
              />

              {/* ── Subtle Top Vignette for Category Label Legibility ── */}
              <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#020C10]/65 via-[#020C10]/25 to-transparent pointer-events-none" />

              {/* ── Smooth Dark Navy Gradient Overlay ── */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    'linear-gradient(180deg, transparent 0%, transparent 32%, rgba(6, 21, 29, 0.48) 52%, rgba(6, 21, 29, 0.90) 72%, #06151D 100%)',
                }}
              />

              {/* ── Top Area: Small Cyan Category Label at Top-Left ── */}
              <div className="relative z-10 p-5 sm:p-6 pb-0 flex items-start justify-between">
                <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10.5px] sm:text-[11px] font-semibold tracking-[0.16em] uppercase text-[#00C8E8] border border-[#00C8E8]/35 bg-[#020C10]/65 backdrop-blur-md shadow-sm">
                  {project.badge}
                </span>
              </div>

              {/* ── Middle Area: Dominant Mockup Visual ── */}
              <div className="flex-1 pointer-events-none" />

              {/* ── Bottom Area: All Content Positioned Inside the Image ── */}
              <div className="relative z-10 p-5 sm:p-6 pt-0 flex flex-col">
                {/* Project Title in Bold White */}
                <div className="min-h-[46px] sm:min-h-[50px] flex items-end">
                  <h3 className="text-white text-[18px] sm:text-[19.5px] font-bold leading-snug tracking-tight font-poppins line-clamp-2">
                    {project.title}
                  </h3>
                </div>

                {/* Short Description in Muted Gray */}
                <p className="text-[#91A5B1] text-[12.5px] sm:text-[13px] leading-relaxed font-normal font-poppins mt-2 line-clamp-2">
                  {project.description}
                </p>

                {/* Compact Tech Tags Row */}
                <div className="min-h-[38px] sm:min-h-[42px] flex flex-wrap items-center gap-1.5 my-3 sm:my-3.5">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10.5px] sm:text-[11px] font-medium text-[#91A5B1] border border-[#25404B]/60 bg-[#0B1E28]/80 backdrop-blur-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Full-Width Rounded CTA Button matching StrategicInsights */}
                <a
                  href={project.link}
                  className="w-full h-[44px] sm:h-[46px] rounded-full bg-[#0B1E28]/90 hover:bg-[#00C8E8] text-white hover:text-[#020C10] border border-[#25404B] hover:border-[#00C8E8] text-[13px] sm:text-[13.5px] font-semibold tracking-wide flex items-center justify-center gap-2 transition-all duration-300 shadow-sm group/btn"
                >
                  <span>View Project</span>
                  <ArrowRight className="w-4 h-4 text-[#00C8E8] group-hover/btn:text-[#020C10] transition-all duration-300 group-hover/btn:translate-x-1" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* ══════════════════════════════════════════════════════════════
            BOTTOM CTA: VIEW COMPLETE PORTFOLIO BUTTON
           ══════════════════════════════════════════════════════════════ */}
        <div className="mt-12 sm:mt-16 flex justify-center">
          <a
            href="/portfolio"
            className="inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-3.5 rounded-full border border-white/30 hover:border-[#00C8E8] bg-[#06151D]/80 hover:bg-[#00C8E8]/10 text-white hover:text-[#00C8E8] text-[13.5px] sm:text-[14.5px] font-semibold tracking-wide transition-all duration-300 shadow-md group cursor-pointer"
          >
            <span>View Complete Portfolio</span>
            <ArrowRight className="w-4 h-4 text-white group-hover:text-[#00C8E8] transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
