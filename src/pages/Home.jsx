import React, { useState } from 'react';
import Loader from '../components/ui/Loader';
import Navbar from '../components/Navbar';
import Globe from '../components/Globe';
import Hero from '../components/Hero';
import {
  Star,
  Mail,
  Calendar,
  ArrowUpRight,
  Sparkles,
  Check,
} from 'lucide-react';

const Home = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('contact@optimizersglobal.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const services = [
    {
      number: '01',
      title: 'Web & Cloud Architecture',
      tagline: 'Top performing enterprise scale',
      description:
        'We engineer ultra-fast, responsive, and SEO-optimized digital web applications. Every platform is architected for maximum usability, security, and global scalability.',
      tools: ['React / Next.js', 'Three.js & WebGL', 'Tailwind CSS', 'Node / Python', 'Cloudflare & AWS', 'Vercel / Docker'],
      rotation: '-rotate-1',
      offset: 'top-24',
      borderGlow: 'hover:border-[#3DADEC]',
      accentColor: '#3DADEC',
    },
    {
      number: '02',
      title: 'Product Design & Systems',
      tagline: 'MVP to global market launch',
      description:
        'We turn concepts into high-impact digital products. From design systems and rapid interactive prototypes to full user experience optimization.',
      tools: ['Figma & FigJam', 'Design Systems', 'Interactive Prototypes', 'Brand Identity', 'Investor Decks', 'User Research'],
      rotation: 'rotate-1',
      offset: 'top-28',
      borderGlow: 'hover:border-[#e26d22]',
      accentColor: '#e26d22',
    },
    {
      number: '03',
      title: 'AI & Next-Gen Systems',
      tagline: 'Intelligent workflow automation',
      description:
        'Cutting-edge generative AI integrations, intelligent chatbots, automated data processing, and custom vector search infrastructure.',
      tools: ['OpenAI & Claude APIs', 'Gemini Models', 'Vector Databases', 'AI Pipelines', 'Automation Agents', 'Computer Vision'],
      rotation: '-rotate-1',
      offset: 'top-32',
      borderGlow: 'hover:border-[#3DADEC]',
      accentColor: '#3DADEC',
    },
    {
      number: '04',
      title: 'Performance & Global SEO',
      tagline: '100% Core Web Vitals guaranteed',
      description:
        'Full-scale technical search engine optimization, semantic structured metadata, edge CDN caching, and high-conversion landing page funnels.',
      tools: ['Google Search Console', 'Lighthouse 100/100', 'Schema.org JSON-LD', 'Edge CDN Routing', 'Analytics & Heatmaps', 'Conversion CRO'],
      rotation: 'rotate-1',
      offset: 'top-36',
      borderGlow: 'hover:border-[#e26d22]',
      accentColor: '#e26d22',
    },
  ];

  return (
    <div className="min-h-screen bg-[#121212] text-slate-100 font-sans selection:bg-[#3DADEC]/30 selection:text-[#3DADEC] relative overflow-x-clip">
      
      {/* 1. Rocket Launch Upward Preloader */}
      <Loader />

      {/* 2. Top Navigation Bar & Off-Canvas Menu Drawer with Official Logo */}
      <Navbar />

      {/* 3. Fixed Full-Viewport 3D Stylized Globe with Scroll Shift */}
      <Globe />

      {/* 3D Embossed Hexagonal Backdrop Texture Overlay */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 opacity-[0.035]"
        style={{
          backgroundImage: `radial-gradient(#3DADEC 1px, transparent 1px), radial-gradient(#e26d22 1px, #121212 1px)`,
          backgroundSize: '40px 40px',
          backgroundPosition: '0 0, 20px 20px',
        }}
      />

      {/* Atmospheric Ambient Theme Glows */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(61,173,236,0.12),transparent_70%)] pointer-events-none z-0" />
      <div className="fixed bottom-0 right-10 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(226,109,34,0.08),transparent_70%)] pointer-events-none z-0" />

      {/* ========================================================================= */}
      {/* HERO SECTION (Center-Aligned)                                             */}
      {/* ========================================================================= */}
      <Hero />

      {/* ========================================================================= */}
      {/* INFINITE MARQUEE BANNER                                                   */}
      {/* ========================================================================= */}
      <div className="relative z-10 w-full bg-[#181818]/90 border-y border-[#262626] py-3.5 overflow-hidden select-none backdrop-blur-md">
        <div className="flex w-max animate-marquee space-x-8 text-xs sm:text-sm font-semibold tracking-wider uppercase text-slate-400">
          <span>13+ Years of Experience</span>
          <span className="text-[#3DADEC]">/</span>
          <span>600+ Successful Projects</span>
          <span className="text-[#e26d22]">/</span>
          <span>130+ Enterprise Reviews</span>
          <span className="text-[#3DADEC]">/</span>
          <span>100% Customer Satisfaction Rate</span>
          <span className="text-[#e26d22]">/</span>
          <span>50+ Global Platform Experiences</span>
          <span className="text-[#3DADEC]">/</span>
          <span>100/100 Core Web Vitals SEO</span>
          <span className="text-[#e26d22]">/</span>
          <span>13+ Years of Experience</span>
          <span className="text-[#3DADEC]">/</span>
          <span>600+ Successful Projects</span>
          <span className="text-[#e26d22]">/</span>
          <span>130+ Enterprise Reviews</span>
          <span className="text-[#3DADEC]">/</span>
          <span>100% Customer Satisfaction Rate</span>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* SERVICES & STICKY CAPABILITIES SECTION                                    */}
      {/* ========================================================================= */}
      <section id="services" className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Sticky Information Panel */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 flex flex-col gap-6 bg-[#121212]/90 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-slate-800/60">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#3DADEC]/10 border border-[#3DADEC]/30 text-[#3DADEC] text-xs font-semibold tracking-wider uppercase w-fit">
              <Sparkles className="w-3.5 h-3.5 text-[#e26d22]" />
              <span>/ Services, Skills, Abilities</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              What we do <span className="text-[#e26d22]">best?</span>
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              We lead brands, engineering teams, and enterprise systems — delivering high-speed web apps, 3D interactive graphics, cloud architectures, and digital solutions that accelerate real business growth.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#e26d22] to-[#f08535] hover:from-[#d15e17] hover:to-[#e26d22] text-white font-medium text-sm shadow-lg shadow-[#e26d22]/20 hover:-translate-y-0.5 transition-all"
              >
                <Calendar className="w-4 h-4" />
                <span>Schedule a Call</span>
              </a>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#242424] hover:bg-[#2d2d2d] border border-slate-700 hover:border-[#3DADEC]/60 text-slate-200 font-medium text-sm transition-all cursor-pointer"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Mail className="w-4 h-4 text-[#3DADEC]" />}
                <span>{copied ? 'Copied to Clipboard!' : 'Copy Email'}</span>
              </button>
            </div>

            {/* Star Rating & Social Proof */}
            <div className="pt-6 border-t border-slate-800 flex flex-col gap-2">
              <div className="flex items-center gap-1.5 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
                <span className="text-xs font-bold text-white ml-2 bg-[#262626] px-2 py-0.5 rounded">4.9 / 5.0</span>
              </div>
              <p className="text-xs text-slate-400 font-medium">
                Trusted by 500+ global brands and fast-growing technology leaders worldwide.
              </p>
            </div>
          </div>

          {/* Right Column: Sticky Stacked Capability Cards */}
          <div className="lg:col-span-7 relative flex flex-col pb-24">
            {services.map((service, index) => (
              <article
                key={service.number}
                style={{
                  top: `${100 + index * 42}px`,
                  zIndex: (index + 1) * 10,
                }}
                className={`sticky p-6 sm:p-9 rounded-3xl bg-[#151821] border border-slate-700/80 ${service.borderGlow} shadow-[0_-12px_35px_rgba(0,0,0,0.85),0_25px_60px_rgba(0,0,0,0.95)] transition-all duration-300 ${
                  index < services.length - 1 ? 'mb-28 sm:mb-40' : 'mb-8'
                } hover:border-[#3DADEC]/70`}
              >
                {/* Card Top Eyebrow Tagline & Number */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold tracking-wider text-slate-400 font-mono">
                    {service.tagline}
                  </span>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#3DADEC] bg-[#1d2330] px-3 py-1 rounded-full border border-slate-700/60">
                    Phase {service.number}
                  </span>
                </div>

                {/* Card Headline */}
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3 tracking-tight">
                  <span className="text-[#3DADEC] mr-2 font-mono">{service.number}.</span>
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Capabilities & Tools */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800/80">
                  {service.tools.map((tool) => (
                    <span
                      key={tool}
                      className="text-xs font-medium px-3 py-1.5 rounded-xl bg-[#1d222e] border border-slate-700/60 text-slate-300 hover:text-white hover:border-[#3DADEC]/40 transition-colors"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* ABOUT & GLOBAL IMPACT SECTION                                             */}
      {/* ========================================================================= */}
      <section id="about" className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-slate-800/80">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-6 flex flex-col gap-6 bg-[#121212]/80 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-slate-800/60">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e26d22]/10 border border-[#e26d22]/30 text-[#e26d22] text-xs font-semibold tracking-wider uppercase w-fit">
              <span>/ About Optimizers</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Engineering with <span className="text-[#3DADEC]">Purpose</span> & Precision.
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              With deep technical expertise spanning cloud infrastructure, 3D WebGL visualization, and modern front-end architectures, we turn ambitious ideas into digital experiences that captivate users and scale seamlessly across the globe.
            </p>

            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="p-4 rounded-2xl bg-[#1c1c1c] border border-slate-800 text-center">
                <div className="text-2xl sm:text-3xl font-black text-[#3DADEC]">99.99%</div>
                <div className="text-xs text-slate-400 mt-1">Uptime Reliability</div>
              </div>
              <div className="p-4 rounded-2xl bg-[#1c1c1c] border border-slate-800 text-center">
                <div className="text-2xl sm:text-3xl font-black text-[#e26d22]">600+</div>
                <div className="text-xs text-slate-400 mt-1">Global Deployments</div>
              </div>
              <div className="p-4 rounded-2xl bg-[#1c1c1c] border border-slate-800 text-center">
                <div className="text-2xl sm:text-3xl font-black text-white">&lt;25ms</div>
                <div className="text-xs text-slate-400 mt-1">Edge Latency</div>
              </div>
            </div>
          </div>

          <div id="contact" className="lg:col-span-6 p-8 rounded-3xl bg-gradient-to-br from-[#1c1c1c]/95 to-[#161616]/95 border border-slate-800 flex flex-col gap-6 shadow-2xl backdrop-blur-xl">
            <h3 className="text-xl font-bold text-white">Let’s build something extraordinary together</h3>
            <p className="text-sm text-slate-400">
              Ready to elevate your digital presence or engineer your next flagship application? Get in touch with our team today.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="mailto:contact@optimizersglobal.com"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#3DADEC] hover:bg-[#3498db] text-slate-950 font-semibold text-sm transition-all"
              >
                <span>Contact Us</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#262626] hover:bg-[#303030] text-slate-200 font-medium text-sm border border-slate-700 transition-all cursor-pointer"
              >
                <span>{copied ? 'Email Copied!' : 'contact@optimizersglobal.com'}</span>
              </button>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default Home;