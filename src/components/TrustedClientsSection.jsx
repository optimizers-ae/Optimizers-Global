import React, { useRef, useState, useEffect, useCallback } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const CLIENTS = [
  {
    id: 1,
    name: 'Al Rayan Developments',
    logo: '/clients/01-al-rayan.png',
  },
  {
    id: 2,
    name: 'Nova Gateway',
    logo: '/clients/02-nova-gateway.png',
  },
  {
    id: 3,
    name: 'Ember Hospitality',
    logo: '/clients/03-ember-hospitality.png',
  },
  {
    id: 4,
    name: 'Vitaliq Technologies',
    logo: '/clients/04-vitaliq-technologies.png',
  },
  {
    id: 5,
    name: 'Sahara Trading Co.',
    logo: '/clients/05-sahara-trading.png',
  },
  {
    id: 6,
    name: 'Rōd Tourism Experiences',
    logo: '/clients/06-rod-tourism.png',
  },
  {
    id: 7,
    name: 'Al Rayan Developments',
    logo: '/clients/01-al-rayan.png',
  },
  {
    id: 8,
    name: 'Nova Gateway',
    logo: '/clients/02-nova-gateway.png',
  },
  {
    id: 9,
    name: 'Ember Hospitality',
    logo: '/clients/03-ember-hospitality.png',
  },
  {
    id: 10,
    name: 'Vitaliq Technologies',
    logo: '/clients/04-vitaliq-technologies.png',
  },
  {
    id: 11,
    name: 'Sahara Trading Co.',
    logo: '/clients/05-sahara-trading.png',
  },
  {
    id: 12,
    name: 'Rōd Tourism Experiences',
    logo: '/clients/06-rod-tourism.png',
  },
];

export default function TrustedClientsSection() {
  const scrollContainerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [indicatorWidth, setIndicatorWidth] = useState(25);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  // Synchronize progress bar with actual scroll position
  const updateScrollStatus = useCallback(() => {
    const el = scrollContainerRef.current;
    if (!el) return;

    const { scrollLeft, scrollWidth, clientWidth } = el;
    const maxScroll = scrollWidth - clientWidth;

    if (maxScroll <= 2) {
      setScrollProgress(0);
      setIndicatorWidth(100);
      setCanScrollPrev(false);
      setCanScrollNext(false);
      return;
    }

    // Ratio of visible width to total width determines active bar width
    const visibleRatio = clientWidth / scrollWidth;
    const barWidthPercent = Math.max(16, Math.min(35, visibleRatio * 100));
    setIndicatorWidth(barWidthPercent);

    // Current scroll percentage mapped to remaining travel space
    const progressRatio = Math.max(0, Math.min(1, scrollLeft / maxScroll));
    setScrollProgress(progressRatio);

    setCanScrollPrev(scrollLeft > 8);
    setCanScrollNext(scrollLeft < maxScroll - 8);
  }, []);

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;

    updateScrollStatus();

    el.addEventListener('scroll', updateScrollStatus, { passive: true });
    window.addEventListener('resize', updateScrollStatus);

    return () => {
      el.removeEventListener('scroll', updateScrollStatus);
      window.removeEventListener('resize', updateScrollStatus);
    };
  }, [updateScrollStatus]);

  const handlePrev = () => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const cardEl = el.querySelector('[data-client-card]');
    const cardWidth = cardEl ? cardEl.clientWidth + 16 : 240;
    el.scrollBy({ left: -cardWidth * 2, behavior: 'smooth' });
  };

  const handleNext = () => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const cardEl = el.querySelector('[data-client-card]');
    const cardWidth = cardEl ? cardEl.clientWidth + 16 : 240;
    el.scrollBy({ left: cardWidth * 2, behavior: 'smooth' });
  };

  return (
    <section
      id="trusted-clients"
      className="relative w-full overflow-hidden py-14 sm:py-18 lg:py-24 px-4 sm:px-6 md:px-10 lg:px-12"
      style={{ backgroundColor: '#020C10', fontFamily: 'Poppins, sans-serif' }}
    >
      {/* ── Background Subtle Technical Grid ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #25404B 1px, transparent 1px), linear-gradient(to bottom, #25404B 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* ── Subtle Atmospheric Ambient Glows ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-10 left-[-5%] w-[550px] h-[550px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(255, 121, 0, 0.05) 0%, transparent 65%)',
          filter: 'blur(100px)',
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-[-5%] w-[600px] h-[600px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(0, 200, 232, 0.05) 0%, transparent 65%)',
          filter: 'blur(105px)',
        }}
      />

      {/* ── Main Container (1580px Max Desktop matching reference) ── */}
      <div className="relative z-10 max-w-[1580px] mx-auto">
        {/* ══════════════════════════════════════════════════════════════
            TOP HEADER AREA — THREE-COLUMN BALANCED COMPOSITION
           ══════════════════════════════════════════════════════════════ */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 sm:gap-10 mb-10 sm:mb-14">
          {/* A. Top-Left Heading */}
          <div className="max-w-[620px]">
            {/* Small Cyan Uppercase Label */}
            <p className="text-[#00C8E8] text-[11px] sm:text-[12px] font-bold tracking-[0.22em] uppercase font-neue mb-3 sm:mb-4">
              THE CLIENTS WHO TRUST US
            </p>

            {/* Main Editorial Heading — Exact Line Composition & Neue Haas Heavy Weight */}
            <h2 className="font-neue text-[46px] sm:text-[62px] md:text-[76px] lg:text-[88px] xl:text-[96px] font-black leading-[0.93] tracking-[-0.04em]">
              <span className="block text-white">Trusted by</span>
              <span className="block text-white">350+</span>
              <span className="block text-[#8E9CA6]">businesses</span>
              <span className="block text-[#8E9CA6]">in UAE.</span>
            </h2>
          </div>

          {/* B. Right-Side Description & C. Carousel Arrow Controls */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between lg:justify-end gap-6 sm:gap-10 pb-1">
            {/* Supporting Description */}
            <p className="text-[#91A5B1] text-[14.5px] sm:text-[15.5px] lg:text-[16px] leading-[1.65] font-normal font-poppins max-w-[460px]">
              We work with brands from diverse sectors, helping them strengthen their digital presence and grow online with confidence.
            </p>

            {/* Circular Carousel Controls */}
            <div className="flex items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={handlePrev}
                disabled={!canScrollPrev}
                aria-label="Previous clients"
                className="w-12 h-12 rounded-full border border-[#00C8E8]/40 hover:border-[#00C8E8] bg-[#06151D]/90 hover:bg-[#00C8E8]/10 text-white flex items-center justify-center transition-all duration-300 disabled:opacity-30 disabled:border-[#25404B]/50 disabled:cursor-not-allowed group shadow-sm cursor-pointer select-none"
              >
                <ArrowLeft className="w-5 h-5 text-white group-hover:-translate-x-0.5 transition-transform" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                disabled={!canScrollNext}
                aria-label="Next clients"
                className="w-12 h-12 rounded-full border border-[#00C8E8]/40 hover:border-[#00C8E8] bg-[#06151D]/90 hover:bg-[#00C8E8]/10 text-white flex items-center justify-center transition-all duration-300 disabled:opacity-30 disabled:border-[#25404B]/50 disabled:cursor-not-allowed group shadow-sm cursor-pointer select-none"
              >
                <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════════
            HORIZONTAL CLIENT LOGO CAROUSEL (DOUBLE-BORDERED CARDS)
           ══════════════════════════════════════════════════════════════ */}
        <div
          ref={scrollContainerRef}
          tabIndex={0}
          role="region"
          aria-label="Trusted client logos carousel"
          onKeyDown={(e) => {
            if (e.key === 'ArrowLeft') handlePrev();
            if (e.key === 'ArrowRight') handleNext();
          }}
          className="flex items-center gap-4 overflow-x-auto scroll-smooth pb-5 pt-1 select-none focus:outline-none scrollbar-none"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          {CLIENTS.map((client, index) => (
            <div
              key={`${client.id}-${index}`}
              data-client-card
              className="w-[210px] sm:w-[225px] lg:w-[calc((100%-80px)/6)] h-[155px] sm:h-[165px] lg:h-[174px] shrink-0 rounded-[18px] border border-[#25404B]/75 hover:border-[#00C8E8]/50 bg-[#071219] p-2.5 transition-all duration-300 shadow-[0_8px_24px_rgba(2,12,16,0.6)] group cursor-pointer"
            >
              {/* Inner Logo Container with Thin Cyan Border */}
              <div className="w-full h-full rounded-[14px] border border-[#00C8E8]/60 group-hover:border-[#00C8E8] bg-[#040D14]/90 group-hover:bg-[#040D14] transition-all duration-300 flex items-center justify-center p-5 relative overflow-hidden group-hover:shadow-[0_0_18px_rgba(0,200,232,0.16)]">
                {/* Logo Image */}
                <img
                  src={client.logo}
                  alt={client.name}
                  loading="eager"
                  decoding="async"
                  className="max-w-[80%] max-h-[66px] object-contain transition-transform duration-300 group-hover:scale-[1.04] brightness-100 select-none pointer-events-none"
                />
              </div>
            </div>
          ))}
        </div>

        {/* ══════════════════════════════════════════════════════════════
            BOTTOM PROGRESS INDICATOR (VIBRANT ORANGE ACTIVE TRACK)
           ══════════════════════════════════════════════════════════════ */}
        <div className="relative w-full h-[2px] bg-[#25404B]/50 rounded-full mt-6 overflow-hidden">
          {/* Active Orange Segment that moves accurately with scroll */}
          <div
            className="absolute top-0 bottom-0 rounded-full transition-all duration-150 ease-out"
            style={{
              width: `${indicatorWidth}%`,
              left: `${scrollProgress * (100 - indicatorWidth)}%`,
              backgroundColor: '#FF7900',
              boxShadow: '0 0 10px rgba(255, 121, 0, 0.75)',
            }}
          />
        </div>
      </div>
    </section>
  );
}
