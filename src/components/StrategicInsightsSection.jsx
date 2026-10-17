import React from 'react';
import { ArrowRight } from 'lucide-react';
import whatsappThumb from '../assets/insights/whatsapp-marketing.jpg';
import tiktokThumb from '../assets/insights/tiktok-marketing.jpg';
import localSeoThumb from '../assets/insights/local-seo.jpg';

const ARTICLES = [
  {
    id: 'whatsapp-playbook',
    badge: 'DIGITAL MARKETING TIPS',
    image: whatsappThumb,
    imageAlt: 'WhatsApp Marketing for UAE Businesses: Industry Playbook',
    title: 'WhatsApp Marketing for UAE Businesses: Industry Playbook',
    description:
      'WhatsApp Marketing for UAE Businesses! If you are still treating WhatsApp as a support inbox instead of a sales channel, you are ...',
    tags: ['WhatsApp Marketing', 'UAE Marketing', 'Lead Generation'],
    link: '#',
  },
  {
    id: 'tiktok-customers',
    badge: 'DIGITAL MARKETING TIPS',
    image: tiktokThumb,
    imageAlt: 'TikTok Marketing for UAE Businesses: How to Get Real Customers Not Just Views',
    title: 'TikTok Marketing for UAE Businesses: How to Get Real Customers Not Just Views',
    description:
      'TikTok Marketing for UAE Businesses: How to Get Real Customers Not Just Views! If you’ve posted on TikTok and watched the view ...',
    tags: ['TikTok Marketing', 'Social Media Marketing', 'UAE Marketing'],
    link: '#',
  },
  {
    id: 'local-seo-emirates',
    badge: 'DIGITAL MARKETING TIPS',
    image: localSeoThumb,
    imageAlt: 'Local SEO for All 7 UAE Emirates: The Complete Ranking Guide',
    title: 'Local SEO for All 7 UAE Emirates: The Complete Ranking Guide',
    description:
      'Local SEO for All 7 UAE Emirates: The Complete Ranking Guide If your business shows up on page one in Dubai but ...',
    tags: ['Real Estate', 'Performance Marketing', 'Lead Generation'],
    link: '#',
  },
];

export default function StrategicInsightsSection() {
  return (
    <section
      id="strategic-insights"
      className="relative w-full overflow-hidden py-12 sm:py-16 lg:py-20 px-4 sm:px-6 md:px-10 lg:px-12"
      style={{ backgroundColor: '#020C10', fontFamily: 'Poppins, sans-serif' }}
    >
      {/* ── Background Gradients & Ambient Glows ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-0 w-[450px] h-[450px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(255, 122, 0, 0.06) 0%, rgba(255, 122, 0, 0.01) 40%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-10 w-[500px] h-[500px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(0, 200, 232, 0.08) 0%, rgba(0, 200, 232, 0.02) 45%, transparent 70%)',
          filter: 'blur(90px)',
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-[-10%] -translate-y-1/2 w-[500px] h-[500px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(0, 180, 216, 0.08) 0%, transparent 70%)',
          filter: 'blur(100px)',
        }}
      />

      {/* ── Section Canvas Container (1200–1300px max) ── */}
      <div className="relative z-10 max-w-[1260px] mx-auto">
        {/* ── Section Header ── */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5 sm:gap-6 mb-10 sm:mb-14">
          {/* Top-Left: Eyebrow + Headline */}
          <div className="max-w-[680px]">
            <p className="text-[#00C8E8] text-[12px] font-semibold tracking-[0.2em] uppercase mb-2 font-poppins">
              STRATEGIC INSIGHTS
            </p>
            <h2 className="font-poppins text-[30px] sm:text-[38px] md:text-[44px] lg:text-[48px] font-extrabold leading-[1.1] tracking-[-0.02em]">
              <span className="block text-white">Digital Marketing Tips</span>
              <span className="block text-[#91A5B1]">
                For UAE Business Owners<span className="text-[#FF7900]">.</span>
              </span>
            </h2>
          </div>

          {/* Right: Thin orange horizontal line + descriptive paragraph */}
          <div className="lg:max-w-[400px] flex flex-col justify-end pb-1">
            <div className="w-full h-[1.5px] bg-[#FF7900] mb-3 max-w-[380px]" />
            <p className="text-[#91A5B1] text-[14px] sm:text-[15px] leading-[1.6] font-normal font-poppins">
              Practical digital marketing insights, strategies and proven approaches designed to help UAE businesses attract more customers and grow online.
            </p>
          </div>
        </div>

        {/* ── Three Premium Travel-Style Article Cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 items-stretch">
          {ARTICLES.map((article) => (
            <article
              key={article.id}
              className="group relative flex flex-col justify-between overflow-hidden rounded-[26px] border border-[#25404B]/60 bg-[#06151D] transition-all duration-500 ease-out hover:border-[#00C8E8]/40 hover:shadow-[0_20px_45px_rgba(0,0,0,0.55)] aspect-[3/4] min-h-[500px] sm:min-h-[520px] lg:min-h-[530px]"
            >
              {/* ── Full-Bleed Background Photograph ── */}
              <img
                src={article.image}
                alt={article.imageAlt}
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
                  {article.badge}
                </span>
              </div>

              {/* ── Middle Area: Visually Dominant Photography ── */}
              <div className="flex-1 pointer-events-none" />

              {/* ── Bottom Area: All Content Positioned Inside the Image ── */}
              <div className="relative z-10 p-5 sm:p-6 pt-0 flex flex-col">
                {/* Article Title in White */}
                <div className="min-h-[48px] sm:min-h-[52px] flex items-end">
                  <h3 className="text-white text-[17px] sm:text-[18.5px] font-bold leading-snug tracking-tight font-poppins line-clamp-2">
                    {article.title}
                  </h3>
                </div>

                {/* Short Description in Muted White */}
                <p className="text-[#91A5B1] text-[12.5px] sm:text-[13px] leading-relaxed font-normal font-poppins mt-2 line-clamp-2">
                  {article.description}
                </p>

                {/* Compact Tags Row */}
                <div className="min-h-[38px] sm:min-h-[42px] flex flex-wrap items-center gap-1.5 my-3 sm:my-3.5">
                  {article.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10.5px] sm:text-[11px] font-medium text-[#91A5B1] border border-[#25404B]/60 bg-[#0B1E28]/80 backdrop-blur-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Full-Width Rounded CTA Button */}
                <a
                  href={article.link}
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