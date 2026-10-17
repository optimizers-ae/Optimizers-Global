import React, { useState } from 'react';
import step1Img from '../assets/process/step-01.jpg';
import step2Img from '../assets/process/step-02.jpg';
import step3Img from '../assets/process/step-03.jpg';
import step4Img from '../assets/process/step-04.jpg';

const PROCESS_STEPS = [
  { stepNumber: '01', stepLabel: 'STEP ONE', title: 'Discovery & audit', description: 'We immerse ourselves in your brand, market, and audience — auditing your digital presence and mapping untapped opportunities with surgical clarity.', buttonText: 'UNDERSTAND', image: step1Img, alt: 'Discovery' },
  { stepNumber: '02', stepLabel: 'STEP TWO', title: 'Strategy & planning', description: 'Positioning, channels, creative direction, and KPIs — mapped with timelines and measurable targets so nothing is left to chance.', buttonText: 'PLAN', image: step2Img, alt: 'Strategy' },
  { stepNumber: '03', stepLabel: 'STEP THREE', title: 'Execute & launch', description: 'Campaigns go live, content ships, tracking is set. Every touchpoint managed with precision. Your brand starts generating real momentum.', buttonText: 'LAUNCH', image: step3Img, alt: 'Launch' },
  { stepNumber: '04', stepLabel: 'STEP FOUR', title: 'Optimise & scale', description: 'We monitor relentlessly, improve with data, and scale what works. The result: higher visibility, stronger pipelines, compounding growth.', buttonText: 'SCALE', image: step4Img, alt: 'Scale' },
];

export default function ProcessSection() {
  const [active, setActive] = useState(0);
  const current = PROCESS_STEPS[active];

  return (
    <section id="process" className="relative w-full overflow-hidden py-20 sm:py-24 lg:py-28" style={{ backgroundColor: '#020C10', fontFamily: 'Poppins, sans-serif' }}>
      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12">
        {/* Header */}
        <div className="max-w-[820px] mb-14 lg:mb-16">
          <div className="flex items-center gap-3 mb-5">
            <span className="w-8 h-[1px] bg-[#00C8E8]" />
            <span className="text-[#00C8E8] text-[11px] font-semibold tracking-[0.28em] uppercase">Our Process</span>
          </div>
          <h2 className="text-[34px] sm:text-[46px] md:text-[56px] lg:text-[64px] font-extrabold leading-[1.02] tracking-[-0.03em]">
            <span className="text-white">A process engineered</span>
            <br />
            <span className="text-[#91A5B1]">for <span className="text-[#00C8E8]">global scale</span>.</span>
          </h2>
        </div>

        {/* Split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 rounded-[32px] overflow-hidden" style={{ border: '1px solid rgba(0,200,232,0.15)', background: '#06151D', boxShadow: '0 40px 100px -40px rgba(0,200,232,0.25)' }}>
          {/* Left: Image */}
          <div className="relative min-h-[380px] lg:min-h-[640px] overflow-hidden">
            {PROCESS_STEPS.map((step, idx) => (
              <img key={step.stepNumber} src={step.image} alt={step.alt} loading="lazy"
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-[1000ms] ease-out ${idx === active ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`} />
            ))}
            <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(2,12,16,0.15) 0%, rgba(2,12,16,0.6) 100%)' }} />
            <div className="absolute inset-0 hidden lg:block" style={{ background: 'linear-gradient(90deg, transparent 55%, rgba(6,21,29,0.9) 100%)' }} />

            {/* Big number */}
            <div className="absolute top-8 left-8 lg:top-12 lg:left-12 z-10">
              <div className="flex items-center gap-4">
                <span className="text-[80px] lg:text-[120px] font-extrabold leading-none text-white/95 tracking-[-0.05em]" style={{ textShadow: '0 8px 40px rgba(0,0,0,0.6)' }}>
                  {current.stepNumber}
                </span>
                <div className="pt-4 lg:pt-6">
                  <div className="w-8 h-[2px] bg-[#00C8E8] mb-2" />
                  <span className="text-[10px] tracking-[0.24em] uppercase text-[#00C8E8] font-semibold">{current.stepLabel}</span>
                </div>
              </div>
            </div>

            {/* Phase badge */}
            <div className="absolute bottom-8 left-8 lg:bottom-12 lg:left-12 z-10 flex items-center gap-3 px-4 py-2 rounded-full backdrop-blur-md" style={{ background: 'rgba(2,12,16,0.5)', border: '1px solid rgba(0,200,232,0.3)' }}>
              <span className="w-2 h-2 rounded-full bg-[#00C8E8] animate-pulse" />
              <span className="text-[10px] tracking-[0.2em] uppercase text-white font-semibold">Live Framework</span>
            </div>
          </div>

          {/* Right: Content */}
          <div className="relative flex flex-col p-8 sm:p-10 lg:p-14 xl:p-16" style={{ background: 'linear-gradient(145deg, #06151D 0%, #020C10 100%)' }}>
            {/* Step selectors */}
            <div className="flex items-center gap-3 mb-10">
              {PROCESS_STEPS.map((s, idx) => (
                <button key={s.stepNumber} type="button" onClick={() => setActive(idx)}
                  className="group relative flex-1 flex flex-col items-start gap-2 outline-none">
                  <span className="text-[10px] font-semibold tracking-wider transition-colors duration-300"
                    style={{ color: idx === active ? '#00C8E8' : '#5F7280' }}>
                    {s.stepNumber}
                  </span>
                  <div className="h-[2px] w-full rounded-full transition-all duration-500"
                    style={{ background: idx === active ? '#00C8E8' : 'rgba(0,200,232,0.15)' }} />
                </button>
              ))}
            </div>

            {/* Content */}
            <div className="flex-1 flex flex-col justify-center">
              <span className="text-[11px] font-semibold tracking-[0.24em] uppercase text-[#00C8E8] mb-4">
                {current.stepLabel}
              </span>
              <h3 className="text-white text-[30px] sm:text-[38px] lg:text-[44px] font-extrabold leading-[1.08] tracking-[-0.02em] mb-6">
                {current.title}
              </h3>
              <p className="text-[#91A5B1] text-[14px] sm:text-[15.5px] leading-relaxed mb-10 max-w-[520px]">
                {current.description}
              </p>

              <div className="flex items-center gap-5">
                <button type="button" className="group/btn inline-flex items-center gap-3 pl-6 pr-5 py-3.5 rounded-full font-semibold text-[12px] tracking-[0.18em] uppercase transition-all duration-300"
                  style={{ background: '#00C8E8', color: '#020C10', boxShadow: '0 15px 45px -15px rgba(0,200,232,0.8)' }}>
                  {current.buttonText}
                  <span className="w-7 h-7 rounded-full flex items-center justify-center transition-transform duration-300 group-hover/btn:translate-x-1" style={{ background: 'rgba(2,12,16,0.15)' }}>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#020C10" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
                  </span>
                </button>

                {/* Arrows */}
                <div className="flex items-center gap-2">
                  <button type="button" onClick={() => setActive((active - 1 + 4) % 4)}
                    className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                    style={{ border: '1px solid rgba(0,200,232,0.3)', color: '#00C8E8' }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
                  </button>
                  <button type="button" onClick={() => setActive((active + 1) % 4)}
                    className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                    style={{ background: '#00C8E8', color: '#020C10' }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Corner glow */}
            <div className="pointer-events-none absolute top-0 right-0 w-[200px] h-[200px] rounded-full" style={{ background: 'radial-gradient(circle at top right, rgba(0,200,232,0.15) 0%, transparent 70%)' }} />
          </div>
        </div>
      </div>
    </section>
  );
}