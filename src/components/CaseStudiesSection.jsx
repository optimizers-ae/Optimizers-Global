import React from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

import metaAdsImg from '../assets/case-studies/meta-ads.jpg';
import seoImg from '../assets/case-studies/seo.jpg';
import automotiveImg from '../assets/case-studies/automotive.jpg';

const CASE_STUDIES = [
  {
    id: '01',
    cardLabel: 'CARD 01',
    categoryTitle: 'META ADS',
    image: metaAdsImg,
    alt: 'Meta Ads Dubai case study showing advertising dashboards and Dubai skyline',
    badge: 'REAL NUMBERS',
    stats: [
      { value: '2.5M+', label: 'Reach' },
      { value: '320K+', label: 'Link Clicks' },
      { value: '4.8X', label: 'ROAS' },
    ],
    statsLayout: 'horizontal',
    description:
      'CASE STUDY 1 Meta Ads Dubai Lower Cost Per Reservation for a Multi-Outlet Restaurant Brand A 4-month Meta Ads restructure that turned ...',
    tags: ['Meta Ads', 'Facebook Ads', 'Instagram Ads'],
    link: '#',
  },
  {
    id: '02',
    cardLabel: 'CARD 02',
    categoryTitle: 'SEO',
    image: seoImg,
    alt: 'SEO case study with Google ranking analytics and Dubai skyline at blue hour',
    badge: 'REAL NUMBERS',
    stats: [
      { value: '120K+', label: 'Organic Keywords' },
      { value: '3.6X', label: 'Organic Growth' },
      { value: '#1', label: 'Ranking' },
    ],
    statsLayout: 'horizontal',
    description:
      'CASE STUDY 2 Business Setup Services Dubai From Page 3 to Page 1 for High-Intent Company Formation Keywords A 6-month SEO strategy ...',
    tags: ['Performance Marketing', 'Google Ads'],
    link: '#',
  },
  {
    id: '03',
    cardLabel: 'CARD 03',
    categoryTitle: 'PERFORMANCE MARKETING (GOOGLE ADS)',
    image: automotiveImg,
    alt: 'Automotive case study with luxury sports sedan and performance marketing growth screen',
    badge: 'REAL NUMBERS',
    stats: [
      { value: '+210%', label: 'Qualified Leads' },
      { value: '-42%', label: 'Cost Per Lead' },
      { value: '3.9X', label: 'Return On Ad Spend' },
    ],
    statsLayout: 'vertical',
    description:
      'CASE STUDY 3 Automotive Dubai Cutting Cost Per Lead Nearly in Half for a Car Service Center A 4-month SEO strategy that ...',
    tags: ['Real Estate', 'Performance Marketing', 'Automotive'],
    link: '#',
  },
];

export default function CaseStudiesSection() {
  return (
    <section
      id="case-studies"
      className="relative w-full overflow-hidden py-12 sm:py-16 lg:py-20 px-4 sm:px-6 md:px-10 lg:px-12"
      style={{ backgroundColor: '#020C10', fontFamily: 'Poppins, sans-serif' }}
    >
      {/* ── Background Gradients & Ambient Glows ── */}
      {/* Right side vibrant cyan glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 right-[-10%] -translate-y-1/2 w-[700px] h-[700px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(0, 180, 216, 0.14) 0%, rgba(3, 152, 185, 0.04) 45%, transparent 70%)',
          filter: 'blur(110px)',
        }}
      />

      {/* Left side subtle warm orange glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(255, 121, 0, 0.07) 0%, rgba(255, 121, 0, 0.01) 50%, transparent 75%)',
          filter: 'blur(90px)',
        }}
      />

      {/* Center deep ambient lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/3 w-[600px] h-[400px] rounded-full"
        style={{
          background: 'radial-gradient(ellipse, rgba(0, 119, 182, 0.06) 0%, transparent 70%)',
          filter: 'blur(100px)',
        }}
      />

      {/* ── Section Canvas Container (1200–1300px max) ── */}
      <div className="relative z-10 max-w-[1260px] mx-auto">
        {/* ── Section Header ── */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5 sm:gap-6 mb-10 sm:mb-14">
          {/* Top-Left: Small cyan uppercase label + Heading */}
          <div className="max-w-[680px]">
            <p className="text-[#00C8E8] text-[12px] font-semibold tracking-[0.2em] uppercase mb-2 font-poppins">
              VERIFIED OUTCOMES
            </p>
            <h2 className="font-poppins text-[30px] sm:text-[38px] md:text-[44px] lg:text-[48px] font-extrabold leading-[1.1] tracking-[-0.02em]">
              <span className="block text-white">Proof Over Promises.</span>
              <span className="block text-[#91A5B1]">Results You Can Measure<span className="text-[#FF7900]">.</span></span>
            </h2>
          </div>

          {/* Right-side descriptive paragraph */}
          <div className="lg:max-w-[400px] flex flex-col justify-end pb-1">
            <div className="w-full h-[1.5px] bg-[#FF7900] mb-3 max-w-[380px]" />
            <p className="text-[#91A5B1] text-[14px] sm:text-[15px] leading-[1.6] font-normal font-poppins">
              Our case studies speak louder than any promise. Here's what we've achieved for UAE businesses like yours.
            </p>
          </div>
        </div>

        {/* ── Exactly Three Premium Travel-Style Case Study Cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 items-stretch">
          {CASE_STUDIES.map((study) => (
            <article
              key={study.id}
              className="group relative flex flex-col justify-between overflow-hidden rounded-[26px] border border-[#25404B]/60 bg-[#06151D] transition-all duration-500 ease-out hover:border-[#00C8E8]/40 hover:shadow-[0_20px_45px_rgba(0,0,0,0.55)] aspect-[3/4] min-h-[500px] sm:min-h-[520px] lg:min-h-[530px]"
            >
              {/* ── Full-Bleed Background Photograph ── */}
              <img
                src={study.image}
                alt={study.alt}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                loading="lazy"
              />

              {/* ── Subtle Top Vignette for Category Label Legibility ── */}
              <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#020C10]/60 via-[#020C10]/20 to-transparent pointer-events-none" />

              {/* ── Smooth Dark Navy Gradient Overlay ── */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    'linear-gradient(180deg, transparent 0%, transparent 34%, rgba(6, 21, 29, 0.45) 54%, rgba(6, 21, 29, 0.88) 72%, #06151D 100%)',
                }}
              />

              {/* ── Top Area: Small Cyan Category Label at Top-Left ── */}
              <div className="relative z-10 p-5 sm:p-6 pb-0 flex items-start justify-between">
                <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10.5px] sm:text-[11px] font-semibold tracking-[0.16em] uppercase text-[#00C8E8] border border-[#00C8E8]/35 bg-[#020C10]/65 backdrop-blur-md shadow-sm">
                  {study.cardLabel}
                </span>
              </div>

              {/* ── Middle Area: Visually Dominant Photography ── */}
              <div className="flex-1 pointer-events-none" />

              {/* ── Bottom Area: All Content Positioned Inside the Image ── */}
              <div className="relative z-10 p-5 sm:p-6 pt-0 flex flex-col">
                {/* Category Title in White */}
                <div className="min-h-[48px] sm:min-h-[52px] flex items-end">
                  <h3 className="text-white text-[19px] sm:text-[21px] font-bold leading-snug tracking-tight uppercase font-poppins">
                    {study.categoryTitle}
                  </h3>
                </div>

                {/* Short Description in Muted White */}
                <p className="text-[#91A5B1] text-[12.5px] sm:text-[13px] leading-relaxed font-normal font-poppins mt-2 line-clamp-2">
                  {study.description}
                </p>

                {/* Compact Statistics: 3 Stats in a Clean Row */}
                <div className="grid grid-cols-3 gap-2 py-2.5 px-3 rounded-xl bg-[#0B1E28]/80 backdrop-blur-md border border-[#25404B]/50 my-3.5 sm:my-4">
                  {study.stats.map((stat, idx) => (
                    <div
                      key={idx}
                      className={`flex flex-col justify-center ${
                        idx !== 0 ? 'border-l border-[#25404B]/60 pl-2 sm:pl-2.5' : ''
                      }`}
                    >
                      <span className="text-[14.5px] sm:text-[15.5px] font-bold text-white tracking-tight leading-tight font-poppins">
                        {stat.value}
                      </span>
                      <span className="text-[9.5px] sm:text-[10px] text-[#91A5B1] font-medium leading-tight truncate mt-0.5 font-poppins">
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Full-Width Rounded CTA Button */}
                <a
                  href={study.link}
                  className="w-full h-[44px] sm:h-[46px] rounded-full bg-[#0B1E28]/90 hover:bg-[#00C8E8] text-white hover:text-[#020C10] border border-[#25404B] hover:border-[#00C8E8] text-[13px] sm:text-[13.5px] font-semibold tracking-wide flex items-center justify-center gap-2 transition-all duration-300 shadow-sm group/btn"
                >
                  <span>View Case Study</span>
                  <ArrowRight className="w-4 h-4 text-[#00C8E8] group-hover/btn:text-[#020C10] transition-all duration-300 group-hover/btn:translate-x-1" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* ── Bottom Section CTA ── */}
        <div className="mt-10 sm:mt-12 flex justify-center">
          <div className="p-[1px] rounded-full bg-gradient-to-r from-[#00C8E8]/50 via-transparent to-[#FF7900]/60 hover:from-[#00C8E8] hover:to-[#FF7900] transition-all duration-300">
            <button
              type="button"
              className="w-[180px] h-[48px] sm:h-[52px] rounded-full bg-[#020C10] hover:bg-[#06151D] flex items-center justify-center gap-2 text-white text-[14px] font-medium transition-colors cursor-pointer"
            >
              <span>View More</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#FF7900]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}