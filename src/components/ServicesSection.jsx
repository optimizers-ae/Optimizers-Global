import React from 'react';

const SERVICES = [
  {
    id: '01',
    category: 'SEO',
    title: 'Search Engine\nOptimization',
    description:
      'Rank on Page 1 of Google for high-intent UAE keywords that attract real buyers. Technical audits, on-page optimization, local SEO, and e-commerce SEO — plus visibility on Google AI Overviews, ChatGPT, and Perplexity.',
    tags: ['Technical SEO', 'On-Page SEO', 'Local SEO', 'E-Commerce SEO', 'AI / AEO / GEO'],
    accent: '#01A3C5',
    accentRgb: '1,163,197',
  },
  {
    id: '02',
    category: 'Marketing',
    title: 'Performance\nMarketing & Ads',
    description:
      'High-performing Google Ads and Meta campaigns designed for the UAE market. Every dirham of your ad budget is optimized for maximum leads and ROI — with transparent reporting and continuous improvement.',
    tags: ['Google Ads', 'Meta Ads', 'Lead Campaigns'],
    accent: '#01A3C5',
    accentRgb: '1,163,197',
  },
  {
    id: '03',
    category: 'Social Media',
    title: 'Social Media\nMarketing',
    description:
      'Build a loyal, engaged audience across Instagram, TikTok, Facebook, LinkedIn, Snapchat, and YouTube. Strategies tailored to UAE audience behaviour and local market trends — including Ramadan and key UAE events.',
    tags: ['Instagram', 'TikTok', 'Facebook', 'LinkedIn', 'YouTube', 'Snapchat'],
    accent: '#F97316',
    accentRgb: '249,115,22',
  },
  {
    id: '04',
    category: 'WhatsApp',
    title: 'WhatsApp\nMarketing',
    description:
      'Reach customers directly with powerful WhatsApp marketing built for the UAE market. Broadcast campaigns, automated follow-ups, and lead nurturing workflows that turn conversations into long-term business growth.',
    tags: ['Broadcast Campaigns', 'Chatbots', 'Lead Nurturing', 'Automation'],
    accent: '#F97316',
    accentRgb: '249,115,22',
  },
  {
    id: '05',
    category: 'Web Dev',
    title: 'Web\nDevelopment',
    description:
      'Fast, SEO-optimized WordPress, Shopify, and custom websites that convert UAE visitors into paying customers. Loads in under 3 seconds, scores on Core Web Vitals, built with SEO architecture for long-term ranking.',
    tags: ['WordPress', 'Shopify', 'Custom Development'],
    accent: '#01A3C5',
    accentRgb: '1,163,197',
  },
  {
    id: '06',
    category: 'Branding',
    title: 'Branding\n& Design',
    description:
      'Create a memorable brand with professional design, reels, and video editing. Scroll-stopping visuals for Instagram and TikTok that build brand recognition and strengthen your market presence across the UAE.',
    tags: ['Logo and Brand', 'Reels and Video', 'Graphic Design', 'Business Branding'],
    accent: '#F97316',
    accentRgb: '249,115,22',
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="w-full relative overflow-hidden py-20 sm:py-28 lg:py-32 px-6 sm:px-10 md:px-14 lg:px-20 xl:px-24"
      style={{ background: '#030D12' }}
    >
      {/* Ambient glows */}
      <div aria-hidden="true" style={{ position:'absolute', top:'-8%', left:'-6%', width:'500px', height:'500px', borderRadius:'50%', background:'radial-gradient(circle, rgba(1,163,197,0.13) 0%, transparent 68%)', filter:'blur(52px)', pointerEvents:'none' }} />
      <div aria-hidden="true" style={{ position:'absolute', bottom:'0%', right:'-4%', width:'420px', height:'420px', borderRadius:'50%', background:'radial-gradient(circle, rgba(249,115,22,0.11) 0%, transparent 68%)', filter:'blur(48px)', pointerEvents:'none' }} />

      <div className="relative z-10 max-w-375 mx-auto">

        {/* ── Section Header ── */}
        <div className="mb-14 lg:mb-18 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <div className="max-w-170">
            <p className="font-sans-clean font-bold text-[#01A3C5] text-[13px] tracking-[0.30em] uppercase mb-5">
              Our Services
            </p>
            <h2 className="font-neue text-white text-[34px] sm:text-[44px] lg:text-[54px] font-bold leading-[1.05] tracking-[-0.02em]">
              Digital marketing built
              <span
                style={{
                  display: 'block',
                  fontFamily: '"Playfair Display", serif',
                  fontStyle: 'italic',
                  fontWeight: 400,
                  color: 'rgba(255,255,255,0.55)',
                }}
              >
                for UAE market results.
              </span>
            </h2>
          </div>
          <p className="font-sans-clean text-[15px] leading-[1.75] max-w-95" style={{ color:'rgba(255,255,255,0.42)' }}>
            Every service managed by dedicated in-house specialists, tracked against KPIs that reflect your actual business goals.
          </p>
        </div>

        {/* ── Services Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {SERVICES.map((svc) => (
            <ServiceCard key={svc.id} svc={svc} />
          ))}
        </div>

      </div>
    </section>
  );
}

function ServiceCard({ svc }) {
  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered
          ? `rgba(${svc.accentRgb},0.06)`
          : 'rgba(7,18,24,1)',
        border: `1px solid ${hovered ? `rgba(${svc.accentRgb},0.18)` : 'rgba(255,255,255,0.07)'}`,
        borderRadius: '14px',
        transition: 'background 0.35s ease, border-color 0.35s ease',
        padding: '36px 32px 32px',
        display: 'flex',
        flexDirection: 'column',
        gap: '0px',
        cursor: 'default',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Large faint number watermark */}
      <span
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '-10px',
          right: '20px',
          fontFamily: '"NeueHaas", sans-serif',
          fontSize: '120px',
          fontWeight: 800,
          lineHeight: 1,
          color: `rgba(${svc.accentRgb},${hovered ? '0.10' : '0.05'})`,
          transition: 'color 0.35s ease',
          userSelect: 'none',
          pointerEvents: 'none',
          letterSpacing: '-0.04em',
        }}
      >
        {svc.id}
      </span>

      {/* Top row: number + category */}
      <div className="flex items-center justify-between mb-6">
        <span
          className="font-sans-clean text-[12px] font-semibold tracking-[0.18em] tabular-nums"
          style={{ color: svc.accent }}
        >
          {svc.id} / 06
        </span>
        <span
          className="font-sans-clean text-[10px] font-bold tracking-[0.16em] uppercase px-3 py-1 rounded-full"
          style={{
            background: `rgba(${svc.accentRgb},0.10)`,
            border: `1px solid rgba(${svc.accentRgb},0.22)`,
            color: svc.accent,
          }}
        >
          {svc.category}
        </span>
      </div>

      {/* Title */}
      <h3
        className="font-neue font-bold leading-[1.08] tracking-[-0.02em] mb-4"
        style={{
          fontSize: 'clamp(22px, 2.2vw, 28px)',
          color: '#ffffff',
          whiteSpace: 'pre-line',
        }}
      >
        {svc.title}
      </h3>

      {/* Accent divider */}
      <div
        style={{
          width: hovered ? '48px' : '28px',
          height: '2px',
          background: svc.accent,
          borderRadius: '2px',
          marginBottom: '18px',
          transition: 'width 0.35s ease',
        }}
      />

      {/* Description */}
      <p
        className="font-sans-clean text-[14px] leading-[1.72] mb-7 flex-1"
        style={{ color: 'rgba(255,255,255,0.50)' }}
      >
        {svc.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mb-7">
        {svc.tags.map((tag) => (
          <span
            key={tag}
            className="font-sans-clean text-[11px] font-semibold px-2.5 py-1 rounded-full"
            style={{
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.10)',
              color: 'rgba(255,255,255,0.55)',
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* CTA */}
      <a
        href="#consultation"
        className="inline-flex items-center gap-2 font-sans-clean font-semibold text-[13px] group"
        style={{ color: svc.accent, width: 'fit-content' }}
      >
        Book a free consultation
        <svg
          width="14" height="14" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round"
          style={{ transition: 'transform 0.2s ease' }}
          className="group-hover:translate-x-1"
        >
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      </a>
    </div>
  );
}
