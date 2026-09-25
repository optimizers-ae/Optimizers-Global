import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Navbar from './Navbar';
import portraitImg from '../assets/portrait.png';

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen hero-gradient-bg overflow-hidden flex flex-col justify-between select-none">
      {/* Background Radial & Linear Lighting Overlays (Layer 1 - z-0) */}
      <div className="absolute inset-0 hero-glow-orange pointer-events-none z-0" />
      <div className="absolute inset-0 hero-glow-crimson pointer-events-none z-0" />

      {/* Header / Navigation Bar (z-50) */}
      <Navbar />

      {/* Main Hero Content Area */}
      <div className="relative w-full flex-1 px-6 md:px-12 lg:px-16 pt-2 pb-6 flex flex-col justify-between z-10">
        
        {/* Top Grid: Left Headline & Right Growth Team Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start relative z-10">
          
          {/* ================= LEFT SIDE ALIGNMENT FIX ================= */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
            className="lg:col-span-7 xl:col-span-7 flex flex-col items-start pt-2 z-20"
          >
            {/* Main Editorial Headline */}
            <h1 className="font-editorial text-[55px] sm:text-[80px] md:text-[100px] lg:text-[118px] xl:text-[90px] text-white font-extrabold leading-none tracking-tight uppercase whitespace-nowrap my-1">
              WELCOME TO
            </h1>

            {/* Sub-brand Typography - Yahan spacing aur alignment fix ki gayi hai */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-2 ml-1">
              <span className="font-sans-clean text-white font-extralight text-base sm:text-lg md:text-xl tracking-[0.22em] uppercase">
                OPTIMIZERS
              </span>
              <span className="font-sans-clean text-white font-extrabold text-base sm:text-lg md:text-xl tracking-[0.12em] uppercase">
                GLOBAL LLC
              </span>
            </div>
          </motion.div>

          {/* ================= RIGHT SIDE ALIGNMENT FIX ================= */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="lg:col-span-5 xl:col-span-5 flex flex-col items-start lg:pl-10 pt-4 lg:pt-14 z-50 relative"
          >
            {/* Right Title Block - ml-15 (invalid) ko hata kar proper margin diya */}
            <div className="ml-0 lg:ml-20">
              {/* Heading */}
              <h2 className="font-sans-clean font-bold text-white text-xl sm:text-2xl md:text-[28px] lg:text-[32px] leading-[1.18] mb-3 drop-shadow-md">
                Your Dedicated<br />Growth & Marketing Team
              </h2>

              {/* Subtext */}
              <p className="font-sans-clean text-white/90 text-xs sm:text-sm font-light leading-relaxed max-w-xs mb-6 drop-shadow-md">
                While you focus on <strong className="font-bold text-white">leading</strong> your business, we focus on <strong className="font-bold text-white">growing it.</strong>
              </p>
            </div>

            {/* CTA Button - Iski alignment perfect ki gayi hai (Icon aur Text ka gap) */}
            <motion.a
              href="#services"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="group cta-button flex items-center bg-black hover:bg-neutral-950 text-white rounded-full pl-2 pr-5 py-2 transition-all duration-300 shadow-xl cursor-pointer ml-0 lg:ml-20 "
            >
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-3 text-black">
                <ArrowRight size={16} className="cta-arrow transition-transform duration-300 group-hover:translate-x-1" />
              </div>
              <span className="font-sans-clean text-xs md:text-sm font-medium tracking-wide">
                See our services
              </span>
            </motion.a>
          </motion.div>
        </div>

        {/* ================= PORTRAIT IMAGE (BILKUL WAISA HI HAI) ================= */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' }}
          className="absolute top-[12vh] sm:top-[10vh] md:top-[8vh] bottom-0 left-[50%] md:left-[49%] -translate-x-[50%] w-[100%] sm:w-[90%] md:w-[80%] lg:w-[75%] h-[68vh] sm:h-[78vh] md:h-[86vh] lg:h-[92vh] pointer-events-none z-30 flex items-end justify-center"
        >
          <img
            src={portraitImg}
            alt="Optimizers Leader"
            className="h-full w-full object-contain object-bottom drop-shadow-2xl relative z-30"
          />
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;