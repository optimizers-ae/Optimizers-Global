import React, { useState } from 'react';
import { Plus, Minus, ArrowRight, Check } from 'lucide-react';

const FAQ_DATA = [
  {
    id: '01',
    number: '01',
    question: 'How much does digital marketing cost in Dubai and the UAE?',
    answer:
      'Digital marketing costs in the UAE typically range from AED 3,000 to AED 30,000+ per month, depending on services, channels, competition and business size. SEO retainers generally start from AED 3,000 per month, while Google Ads management starts from AED 2,500 per month. Request a free and spend. Optimizers creates custom proposals after understanding your goals and budget.',
  },
  {
    id: '02',
    number: '02',
    question: 'How long does SEO take to show results in the UAE?',
    answer:
      'Most UAE businesses start seeing measurable organic improvements in 3 to 6 months. Low-competition niches and local map pack rankings can show progress within 60 to 90 days, while highly competitive sectors like Real Estate, Healthcare, and Finance typically take 6 to 9 months of consistent technical, on-page, and authority optimization.',
  },
  {
    id: '03',
    number: '03',
    question: 'Which digital marketing channel works best for UAE businesses?',
    answer:
      'The best channel depends on your target audience and buying cycle. For high-intent local services, Google Search Ads and SEO deliver the highest conversion rates. For B2B corporate decision-makers, LinkedIn and SEO dominate. For e-commerce, F&B, fashion, and lifestyle brands, Meta Ads (Instagram/Facebook) and TikTok Ads generate rapid customer acquisition.',
  },
  {
    id: '04',
    number: '04',
    question: 'Do Optimizers work with businesses outside of Dubai?',
    answer:
      'Yes, absolutely. Optimizers provides complete digital marketing coverage across all 7 UAE Emirates: Dubai, Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Fujairah, and Umm Al Quwain. We also manage international campaigns for UAE brands expanding into Saudi Arabia, Qatar, and the wider GCC region.',
  },
  {
    id: '05',
    number: '05',
    question: 'What makes Optimizers different from other digital marketing agencies in the UAE?',
    answer:
      'We focus strictly on measurable commercial ROI rather than vanity impressions. Every campaign is built on UAE-specific search intent, bilingual English and Arabic capabilities, transparent real-time reporting dashboards, and dedicated senior digital specialists who know the local market landscape.',
  },
  {
    id: '06',
    number: '06',
    question: 'Can Optimizers manage both SEO and Google Ads at the same time?',
    answer:
      'Yes, integrating SEO and Google Ads provides the ultimate digital advantage in the UAE. Google Ads drives immediate high-intent leads from day one, while SEO compounds long-term organic authority, reducing your customer acquisition cost over time. We share search term data across both channels for maximum efficiency.',
  },
  {
    id: '07',
    number: '07',
    question: 'Do you offer digital marketing services in Arabic?',
    answer:
      "Yes. All our services — including SEO, Google Ads copy, social media creative, website localization, and landing pages — are available in native Arabic and English. Bilingual campaigns are essential for capturing both the local Emirati and GCC demographic and the UAE's vast expatriate community.",
  },
  {
    id: '08',
    number: '08',
    question: 'How do I get started with Optimizers?',
    answer:
      'Getting started is seamless. Reach out via WhatsApp or book a free 45-minute consultation. Our team will audit your current digital footprint, analyze your UAE competitors, and present a customized 90-day growth strategy with clear milestones, deliverables, and transparent pricing.',
  },
];

export default function FAQSection() {
  // First item open by default
  const [activeId, setActiveId] = useState('01');

  const toggleFAQ = (id) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="faq-section"
      className="relative w-full overflow-hidden py-16 sm:py-20 lg:py-24 px-4 sm:px-6 md:px-10 lg:px-12"
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

      {/* ── Background Ambient Glows ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-12 left-[-10%] w-[550px] h-[550px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(255, 121, 0, 0.05) 0%, rgba(255, 121, 0, 0.01) 45%, transparent 70%)',
          filter: 'blur(100px)',
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-10 right-[-8%] w-[650px] h-[650px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(0, 200, 232, 0.08) 0%, rgba(0, 200, 232, 0.01) 50%, transparent 70%)',
          filter: 'blur(105px)',
        }}
      />

      {/* ── Main Section Container (1380px max) ── */}
      <div className="relative z-10 max-w-[1380px] mx-auto">
        <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-14 xl:gap-16">
          {/* ══════════════════════════════════════════════════════════════
              LEFT COLUMN — EDITORIAL HEADING & CONSULTATION CARD (~33%)
             ══════════════════════════════════════════════════════════════ */}
          <div className="w-full lg:w-[35%] xl:w-[33%] shrink-0 flex flex-col">
            {/* Small FAQ Label with Horizontal Cyan Line */}
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[2px] bg-[#00C8E8] shrink-0" />
              <p className="text-[#00C8E8] text-[11.5px] sm:text-[12px] font-bold tracking-[0.24em] uppercase font-neue">
                FAQ
              </p>
            </div>

            {/* Main Stacked Editorial Heading — Exact Contrast Composition */}
            <h2 className="font-neue font-black text-[46px] sm:text-[56px] md:text-[62px] lg:text-[66px] leading-[1.04] tracking-[-0.035em] mb-8 sm:mb-10">
              <span className="block text-white">Common</span>
              <span className="block text-white">questions</span>
              <span className="block text-white">about</span>
              <span className="block text-[#91A5B1]">digital</span>
              <span className="block text-[#91A5B1]">marketing</span>
              <span className="block text-[#91A5B1]">in UAE</span>
            </h2>

            {/* ── Consultation Card (Dual Orange Corner Accents) ── */}
            <div className="group relative rounded-[20px] border border-[#00C8E8]/50 bg-[#06151D] p-6 sm:p-7 overflow-hidden shadow-[0_12px_36px_rgba(2,12,16,0.65),0_0_18px_rgba(0,200,232,0.06)] hover:border-[#00C8E8] transition-all duration-300">
              {/* Top-Left Orange Corner Glow & Accent */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-8 -left-8 w-24 h-24 rounded-full"
                style={{
                  background: 'radial-gradient(circle, rgba(255, 121, 0, 0.45) 0%, rgba(255, 121, 0, 0.12) 45%, transparent 70%)',
                  filter: 'blur(16px)',
                }}
              />
              <svg className="absolute top-0 left-0 w-14 h-14 pointer-events-none z-20" viewBox="0 0 56 56" fill="none">
                <path d="M 0 28 L 0 20 C 0 8.954 8.954 0 20 0 L 28 0" stroke="#FF7900" strokeWidth="2.5" strokeLinecap="round" />
              </svg>

              {/* Bottom-Right Orange Corner Glow & Accent */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-8 -right-8 w-24 h-24 rounded-full"
                style={{
                  background: 'radial-gradient(circle, rgba(255, 121, 0, 0.40) 0%, rgba(255, 121, 0, 0.10) 45%, transparent 70%)',
                  filter: 'blur(16px)',
                }}
              />
              <svg className="absolute bottom-0 right-0 w-14 h-14 pointer-events-none z-20" viewBox="0 0 56 56" fill="none">
                <path d="M 56 28 L 56 36 C 56 47.046 47.046 56 36 56 L 28 56" stroke="#FF7900" strokeWidth="2.5" strokeLinecap="round" />
              </svg>

              {/* Inner Cyan Ambient Lighting */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute top-1/2 right-0 -translate-y-1/2 w-40 h-40 rounded-full"
                style={{
                  background: 'radial-gradient(circle, rgba(0, 200, 232, 0.12) 0%, transparent 70%)',
                  filter: 'blur(25px)',
                }}
              />

              {/* Card Content */}
              <div className="relative z-10 flex flex-col">
                <h3 className="text-white font-neue text-[19px] sm:text-[20.5px] font-bold leading-snug tracking-tight mb-2.5">
                  Have a specific question about your business?
                </h3>
                <p className="text-[#91A5B1] text-[13px] sm:text-[13.5px] leading-[1.65] font-normal font-poppins mb-6">
                  Talk to our UAE digital marketing specialists. Free strategy consultation, no commitment and no sales pressure.
                </p>

                {/* WhatsApp CTA Button */}
                <a
                  href="https://wa.me/97141234567?text=Hello%20Optimizers%20Team%2C%20I%20have%20a%20question%20about%20digital%20marketing%20in%20UAE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full h-[52px] sm:h-[56px] rounded-full bg-gradient-to-r from-[#00D95A] to-[#00C450] hover:brightness-110 text-white font-bold text-[15px] sm:text-[15.5px] font-poppins flex items-center justify-center gap-3 shadow-[0_8px_24px_rgba(0,217,90,0.32)] transition-all duration-300 group cursor-pointer"
                >
                  {/* WhatsApp Logo SVG */}
                  <svg className="w-5 h-5 fill-current shrink-0" viewBox="0 0 24 24">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.174.086.275.072.376-.044.101-.116.433-.506.549-.68.116-.173.231-.145.39-.086s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824zm-3.423-10.416c-4.409 0-8 3.59-8 8 0 1.41.367 2.732 1.006 3.88l-1.069 3.91 4.026-1.055c1.107.604 2.375.946 3.725.946 4.409 0 8-3.591 8-8s-3.591-7.681-7.688-7.681z" />
                  </svg>
                  <span>Chat on WhatsApp</span>
                  <ArrowRight className="w-4 h-4 text-white transition-transform duration-300 group-hover:translate-x-1" />
                </a>

                {/* Bottom Information Row */}
                <div className="flex items-center justify-between gap-2 mt-6 pt-5 border-t border-[#25404B]/60">
                  <div className="flex items-center gap-2">
                    <span className="w-4 h-4 rounded-full border border-[#00C8E8] flex items-center justify-center text-[#00C8E8]">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </span>
                    <span className="text-[#FFFFFF] text-[12px] font-medium font-poppins">
                      Free consultation
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="w-4 h-4 rounded-full border border-[#00C8E8] flex items-center justify-center text-[#00C8E8]">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </span>
                    <span className="text-[#FFFFFF] text-[12px] font-medium font-poppins">
                      No commitment required
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ══════════════════════════════════════════════════════════════
              RIGHT COLUMN — EIGHT FAQ ACCORDION ROWS (~67%)
             ══════════════════════════════════════════════════════════════ */}
          <div className="w-full lg:w-[65%] xl:w-[67%] flex flex-col space-y-3.5">
            {FAQ_DATA.map((item) => {
              const isOpen = activeId === item.id;

              return (
                <div
                  key={item.id}
                  className={`group relative rounded-[16px] border bg-[#06151D] transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? 'border-[#00C8E8] shadow-[0_8px_30px_rgba(0,200,232,0.12)]'
                      : 'border-[#00C8E8]/40 hover:border-[#00C8E8]/80 shadow-[0_4px_16px_rgba(2,12,16,0.5)]'
                  }`}
                >
                  {/* Subtle Orange Accent at Upper-Left Corner when open */}
                  {isOpen && (
                    <>
                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute -top-8 -left-8 w-20 h-20 rounded-full"
                        style={{
                          background: 'radial-gradient(circle, rgba(255, 121, 0, 0.40) 0%, rgba(255, 121, 0, 0.1) 45%, transparent 70%)',
                          filter: 'blur(14px)',
                        }}
                      />
                      <svg className="absolute top-0 left-0 w-12 h-12 pointer-events-none z-20" viewBox="0 0 48 48" fill="none">
                        <path d="M 0 24 L 0 16 C 0 7.163 7.163 0 16 0 L 24 0" stroke="#FF7900" strokeWidth="2.5" strokeLinecap="round" />
                      </svg>
                    </>
                  )}

                  {/* Slight Cyan Lighting near lower-right when open */}
                  {isOpen && (
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute -bottom-10 -right-10 w-44 h-44 rounded-full"
                      style={{
                        background: 'radial-gradient(circle, rgba(0, 200, 232, 0.18) 0%, transparent 65%)',
                        filter: 'blur(20px)',
                      }}
                    />
                  )}

                  {/* Accordion Header Button */}
                  <button
                    type="button"
                    onClick={() => toggleFAQ(item.id)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${item.id}`}
                    className="w-full text-left p-5 sm:px-6 sm:py-5 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  >
                    <div className="flex items-center gap-3 sm:gap-4 flex-1">
                      {/* Number */}
                      <span className="font-neue text-[16px] sm:text-[18px] font-bold text-[#00C8E8] shrink-0 tracking-tight w-6 sm:w-7 text-center">
                        {item.number}
                      </span>

                      {/* Thin Cyan Vertical Divider */}
                      <span className="h-5 w-[1.5px] bg-[#00C8E8]/40 shrink-0" />

                      {/* Question Text */}
                      <span className="font-poppins text-[15px] sm:text-[16px] font-semibold text-white tracking-normal leading-snug">
                        {item.question}
                      </span>
                    </div>

                    {/* Circular Expand / Collapse Indicator */}
                    <div
                      className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full shrink-0 flex items-center justify-center transition-all duration-300 ${
                        isOpen
                          ? 'border border-[#FF7900] bg-[#FF7900]/10 text-[#FF7900] shadow-[0_0_12px_rgba(255,121,0,0.3)]'
                          : 'border border-[#00C8E8]/70 bg-[#020C10]/60 text-[#00C8E8] group-hover:border-[#00C8E8] group-hover:scale-105'
                      }`}
                    >
                      {isOpen ? (
                        <Minus className="w-4 h-4 stroke-[2.5]" />
                      ) : (
                        <Plus className="w-4 h-4 stroke-[2.5]" />
                      )}
                    </div>
                  </button>

                  {/* Expanded Answer Content */}
                  {isOpen && (
                    <div
                      id={`faq-answer-${item.id}`}
                      className="relative z-10 px-5 sm:px-6 pb-6 pt-0 animate-fadeIn"
                    >
                      <div className="pl-[42px] sm:pl-[52px] pr-6 sm:pr-16">
                        <p className="text-[#91A5B1] text-[13px] sm:text-[13.5px] leading-[1.72] font-normal font-poppins">
                          {item.id === '01' ? (
                            <>
                              Digital marketing costs in the UAE typically range from{' '}
                              <strong className="text-white font-semibold">AED 3,000 to AED 30,000+ per month</strong>,
                              depending on services, channels, competition and business size. SEO retainers generally
                              start from <strong className="text-white font-semibold">AED 3,000 per month</strong>,
                              while Google Ads management starts from{' '}
                              <strong className="text-white font-semibold">AED 2,500 per month</strong>. Request a free
                              and spend. Optimizers creates custom proposals after understanding your goals and budget.
                            </>
                          ) : (
                            item.answer
                          )}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
