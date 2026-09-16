import { Star, Mail, Calendar, Sparkles, Check } from 'lucide-react';
import { useState } from 'react';


const Services = ({services}) => {
    const [copied, setCopied] = useState(false);
    
    

    const handleCopyEmail = () => {
        navigator.clipboard.writeText('contact@optimizersglobal.com');
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section id="services" className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
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
                            className={`sticky p-6 sm:p-9 rounded-3xl bg-[#151821] border border-slate-700/80 ${service.borderGlow} shadow-[0_-12px_35px_rgba(0,0,0,0.85),0_25px_60px_rgba(0,0,0,0.95)] transition-all duration-300 ${index < services.length - 1 ? 'mb-28 sm:mb-40' : 'mb-8'
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

                            {/* Complete Last Layer Visual Graphic */}
                            {service.image && (
                                <div className="mt-6 pt-5 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-5 bg-[#0e1017]/80 rounded-2xl p-4 sm:p-5 border border-slate-800/60 group hover:border-[#3DADEC]/40 transition-all">
                                    <div className="flex-1 text-left">
                                        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-[#3DADEC]/10 text-[#3DADEC] text-[11px] font-semibold tracking-wider uppercase mb-1">
                                            <span>Multi-Tier Architecture</span>
                                        </div>
                                        <h4 className="text-sm sm:text-base font-bold text-white">Full-Stack Enterprise Stack</h4>
                                        <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                                            Engineered with decoupled presentation and edge compute layers for lightning-fast global delivery.
                                        </p>
                                    </div>
                                    <div className="relative flex-shrink-0 flex items-center justify-center w-28 h-28 sm:w-32 sm:h-32 bg-gradient-to-b from-[#3DADEC]/10 via-[#1e2230]/40 to-transparent rounded-xl border border-slate-700/50 p-2 shadow-inner">
                                        <img
                                            src={service.image}
                                            alt="Complete Architecture Layer"
                                            className="max-h-full max-w-full object-contain filter drop-shadow-[0_8px_16px_rgba(61,173,236,0.35)] animate-float-1 group-hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                </div>
                            )}
                        </article>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default Services