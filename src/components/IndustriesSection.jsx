import React from 'react';
import {
  Building2,
  Sparkles,
  Car,
  GraduationCap,
  Stethoscope,
  Briefcase,
  Utensils,
  Scale,
  ShoppingBag,
  Laptop,
} from 'lucide-react';

import realEstateImg from '../assets/industries/cards/01-real-estate.jpg';
import beautyWellnessImg from '../assets/industries/cards/02-beauty-wellness.jpg';
import automotiveImg from '../assets/industries/cards/03-automotive.jpg';
import educationImg from '../assets/industries/cards/04-education.jpg';
import healthcareImg from '../assets/industries/cards/05-healthcare.jpg';
import businessSetupImg from '../assets/industries/cards/06-business-setup.jpg';
import hospitalityImg from '../assets/industries/cards/07-hospitality.jpg';
import legalAccountingImg from '../assets/industries/cards/08-legal-accounting.jpg';
import ecommerceImg from '../assets/industries/cards/09-ecommerce.jpg';
import itSaasImg from '../assets/industries/cards/10-it-saas.jpg';

const INDUSTRIES_DATA = [
  {
    id: '01',
    title: 'Real estate',
    icon: Building2,
    image: realEstateImg,
    alt: 'Luxury Dubai villa at twilight with Burj Khalifa skyline',
    description:
      'We cover every channel that generates real business growth in the UAE, managed by dedicated specialists and tracked against your actual business KPIs.',
    link: '#',
  },
  {
    id: '02',
    title: 'Beauty and wellness',
    icon: Sparkles,
    image: beautyWellnessImg,
    alt: 'Premium spa towels, candles, cosmetic bottles',
    description:
      'Salon and spa branding campaigns built around how UAE beauty consumers discover, research, and book their next appointment.',
    link: '#',
  },
  {
    id: '03',
    title: 'Automotive',
    icon: Car,
    image: automotiveImg,
    alt: 'Luxury black SUV in cinematic showroom lighting',
    description:
      'Digital campaigns for UAE car dealerships and automotive brands, built around how buyers research vehicles from search to showroom contact.',
    link: '#',
  },
  {
    id: '04',
    title: 'Education',
    icon: GraduationCap,
    image: educationImg,
    alt: 'Graduation cap on books with Dubai skyline',
    description:
      'Enrollment campaigns and school branding for universities and training institutes, targeting the channels UAE parents actually use.',
    link: '#',
  },
  {
    id: '05',
    title: 'Healthcare',
    icon: Stethoscope,
    image: healthcareImg,
    alt: 'Realistic stethoscope on a clean clinic surface',
    description:
      'Patient acquisition and clinic branding for hospitals and wellness centres, attracting the right patients through digital and paid media.',
    link: '#',
  },
  {
    id: '06',
    title: 'Business setup services',
    icon: Briefcase,
    image: businessSetupImg,
    alt: 'Dubai business district skyline and modern laptop',
    description:
      'Lead generation for company formation consultants and free zone advisors helping entrepreneurs launch businesses in the UAE.',
    link: '#',
  },
  {
    id: '07',
    title: 'Hospitality',
    icon: Utensils,
    image: hospitalityImg,
    alt: 'Luxury restaurant terrace with Dubai skyline at night',
    description:
      'Restaurant and hotel digital strategy built around UAE dining culture, tourism peak seasons, and social discovery patterns.',
    link: '#',
  },
  {
    id: '08',
    title: 'Legal and accounting',
    icon: Scale,
    image: legalAccountingImg,
    alt: 'Elegant brass justice scales with law books',
    description:
      'Client acquisition for law firms and financial consultants, navigating the compliance standards that govern this market.',
    link: '#',
  },
  {
    id: '09',
    title: 'E-commerce',
    icon: ShoppingBag,
    image: ecommerceImg,
    alt: 'Premium shopping bags beside an online store laptop',
    description:
      'We have scaled 60+ UAE e-commerce stores through performance marketing, Shopify SEO, and social commerce on TikTok and Instagram.',
    link: '#',
  },
  {
    id: '10',
    title: 'IT and SaaS',
    icon: Laptop,
    image: itSaasImg,
    alt: 'Laptop showing code in a modern blue-lit technology office',
    description:
      'B2B demand generation and LinkedIn strategies for tech and SaaS businesses targeting enterprise and government clients.',
    link: '#',
  },
];

export default function IndustriesSection() {
  return (
    <section
      id="industries"
      className="relative w-full overflow-hidden py-10 sm:py-14 lg:py-16 px-4 sm:px-6 md:px-10 lg:px-12"
      style={{ backgroundColor: '#020C10', fontFamily: 'Poppins, sans-serif' }}
    >
      {/* ── Background Subtle Ambient Glows ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-0 w-[420px] h-[420px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(255, 121, 0, 0.07) 0%, rgba(255, 121, 0, 0.01) 45%, transparent 70%)',
          filter: 'blur(70px)',
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -left-12 w-[400px] h-[400px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(255, 121, 0, 0.06) 0%, rgba(255, 121, 0, 0.01) 45%, transparent 70%)',
          filter: 'blur(70px)',
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full"
        style={{
          background: 'radial-gradient(ellipse, rgba(0, 200, 232, 0.03) 0%, transparent 65%)',
          filter: 'blur(90px)',
        }}
      />

      {/* ── Section Canvas Container (1400px max) ── */}
      <div className="relative z-10 max-w-[1400px] mx-auto">
        {/* ── Section Header ── */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5 sm:gap-6 mb-8 sm:mb-12">
          {/* Top-Left: Eyebrow + Heading */}
          <div className="max-w-[680px]">
            <p className="text-[#00C8E8] text-[12px] font-semibold tracking-[0.18em] uppercase mb-2 font-poppins">
              INDUSTRIES
            </p>
            <h2 className="font-poppins text-[30px] sm:text-[38px] md:text-[44px] lg:text-[48px] font-bold leading-[1.1] tracking-[-0.02em]">
              <span className="block text-[#F8FAFC]">We know your industry</span>
              <span className="text-[#9DAAB2]">
                and the UAE market it operates in
                <span className="text-[#FF7900]">.</span>
              </span>
            </h2>
          </div>

          {/* Right Side: Thin orange horizontal rule + paragraph */}
          <div className="lg:max-w-[400px] flex flex-col justify-end pb-1">
            <div className="w-full h-[1.5px] bg-[#FF7900] mb-3 max-w-[380px]" />
            <p className="text-[#9DAAB2] text-[14px] sm:text-[15px] leading-[1.6] font-normal font-poppins">
              We have worked inside 10+ industries across all seven UAE emirates, with a different strategy built around each sector's specific buyer psychology and search behaviour.
            </p>
          </div>
        </div>

        {/* ── 10 Horizontal Industry Cards (2 columns x 5 rows) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-[16px] gap-y-[12px]">
          {INDUSTRIES_DATA.map((item, index) => {
            const Icon = item.icon;
            const isLeftCard = index % 2 === 0;

            return (
              <article
                key={item.id}
                className="group relative h-[126px] sm:h-[122px] rounded-[10px] overflow-hidden border border-[#142832] bg-[#06161B] hover:border-[#00C8E8]/70 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:shadow-[0_8px_30px_rgba(0,200,232,0.12)] cursor-pointer select-none"
              >
                {/* ── 1. Initial Resting Face (Visible before hover) ── */}
                <div className="absolute inset-0 z-0 p-4 sm:p-5 flex items-center justify-between transition-opacity duration-300 group-hover:opacity-0 pointer-events-none">
                  {/* Left: Icon + Title */}
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className="w-[32px] h-[32px] rounded-lg border border-[#00C8E8]/50 bg-[#00C8E8]/10 flex items-center justify-center shrink-0 text-[#00C8E8]">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-[17px] sm:text-[18px] leading-tight font-poppins">
                        {item.title}
                      </h3>
                      <p className="text-[#9DAAB2] text-[11px] sm:text-[12px] font-normal font-poppins mt-0.5">
                        UAE Strategic Playbook
                      </p>
                    </div>
                  </div>

                  {/* Right: Badge Pill + Translucent Number */}
                  <div className="flex items-center gap-4">
                    <span className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-medium text-[#00C8E8] border border-[#00C8E8]/50 bg-[#00C8E8]/5">
                      Explore <span className="text-[12px]">→</span>
                    </span>
                    <span className="text-[34px] sm:text-[38px] font-bold text-[#00C8E8]/20 font-poppins leading-none">
                      {item.id}
                    </span>
                  </div>
                </div>

                {/* ── 2. Revealed Full Content Face (Slides in smoothly on hover, reverses on leave) ── */}
                <div
                  className={`absolute inset-0 z-10 w-full h-full flex items-stretch bg-[#06161B] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    isLeftCard
                      ? '-translate-x-full group-hover:translate-x-0 opacity-0 group-hover:opacity-100'
                      : 'translate-x-full group-hover:translate-x-0 opacity-0 group-hover:opacity-100'
                  }`}
                >
                  {/* Left 30%: Realistic cinematic photo fading into dark background */}
                  <div className="relative w-[30%] min-w-[30%] h-full overflow-hidden bg-[#030E13] shrink-0">
                    <img
                      src={item.image}
                      alt={item.alt}
                      className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#FF7900]/10 via-transparent to-transparent pointer-events-none" />
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background: 'linear-gradient(to right, transparent 0%, rgba(6, 22, 27, 0.4) 60%, #06161B 100%)',
                      }}
                    />
                  </div>

                  {/* Right 70%: Content */}
                  <div className="relative flex-1 py-2.5 px-3.5 sm:px-4 flex flex-col justify-between overflow-hidden">
                    {/* Top row: Icon + Title + Pill */}
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2 min-w-0">
                        <div className="w-[24px] h-[24px] rounded-md border border-[#00C8E8]/50 bg-[#00C8E8]/10 flex items-center justify-center shrink-0 text-[#00C8E8]">
                          <Icon className="w-3 h-3" />
                        </div>
                        <h3 className="text-white font-bold text-[15px] sm:text-[17px] leading-tight font-poppins truncate">
                          {item.title}
                        </h3>
                      </div>

                      <a
                        href={item.link}
                        className="shrink-0 inline-flex items-center gap-1 px-2 py-[2px] rounded-full text-[10.5px] font-medium text-[#00C8E8] border border-[#00C8E8]/70 bg-[#00C8E8]/10 hover:bg-[#00C8E8] hover:text-[#020C10] transition-all duration-200"
                      >
                        <span>Our Projects</span>
                        <span className="text-[11px] leading-none">→</span>
                      </a>
                    </div>

                    {/* Description */}
                    <p className="text-[#9DAAB2] text-[11.5px] sm:text-[12.5px] leading-[1.4] font-normal font-poppins line-clamp-2 pr-12 my-auto">
                      {item.description}
                    </p>

                    {/* Translucent Index Number */}
                    <span
                      aria-hidden="true"
                      className="absolute -bottom-1.5 right-3 text-[30px] sm:text-[36px] font-bold text-[#00C8E8]/25 font-poppins select-none pointer-events-none leading-none tracking-tight"
                    >
                      {item.id}
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}