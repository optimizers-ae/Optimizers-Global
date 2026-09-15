import { useState, useEffect } from 'react';
import logoSvg from '../assets/logo.svg';
import {
  X,
  ArrowRight,
  Mail,
  Check,
  Send,
  Share2,
} from 'lucide-react';

/**
 * Top Navigation Bar & Off-Canvas Menu Drawer Component
 * Theme: #3DADEC (Cyan), #e26d22 (Orange), #363636 (Charcoal)
 */
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('contact@optimizersglobal.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const navLinks = [
    { number: '01', label: 'Home', href: '#home', tag: 'Overview' },
    { number: '02', label: 'Services', href: '#services', tag: 'Solutions' },
    { number: '03', label: 'Capabilities & Skills', href: '#services', tag: 'Expertise' },
    { number: '04', label: 'About Optimizers', href: '#about', tag: 'Company' },
    { number: '05', label: 'Contact Us', href: '#contact', tag: 'Get in touch' },
  ];

  return (
    <>
      {/* ========================================================================= */}
      {/* 1. TOP NAVBAR HEADER                                                     */}
      {/* ========================================================================= */}
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#0f131a]/85 backdrop-blur-xl border-slate-800/80 py-3.5 shadow-2xl shadow-black/50'
            : 'bg-transparent py-5 sm:py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Left: Official Logo from assets/logo.svg */}
          <a href="#home" className="group focus:outline-none flex items-center" aria-label="Optimizers Global Home">
            <img
              src={logoSvg}
              alt="Optimizers United Arab Emirates"
              className="h-9 sm:h-11 w-auto max-w-[200px] sm:max-w-[240px] object-contain transition-all duration-300 group-hover:brightness-110 drop-shadow-[0_2px_12px_rgba(61,173,236,0.15)]"
            />
          </a>

          {/* Right: Premium Modern Menu Button */}
          <div className="flex items-center gap-4">
            {/* Direct Contact Button (Desktop) */}
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1c222d]/80 hover:bg-[#252d3c] border border-slate-700/60 hover:border-[#3DADEC]/50 text-slate-200 hover:text-white text-xs font-semibold backdrop-blur-md transition-all duration-200"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#3DADEC] animate-pulse" />
              <span>Get in touch</span>
            </a>

            {/* Menu Trigger Button */}
            <button
              onClick={() => setIsOpen(true)}
              aria-label="Open Navigation Menu"
              className="relative group flex items-center gap-3 px-4 sm:px-5 py-2.5 rounded-full bg-gradient-to-r from-[#181d26]/90 to-[#12161f]/90 hover:from-[#202733] hover:to-[#171d28] border border-slate-700/80 hover:border-[#3DADEC]/60 shadow-[0_4px_20px_rgba(0,0,0,0.5)] backdrop-blur-xl transition-all duration-300 cursor-pointer hover:scale-[1.03] active:scale-95"
            >
              {/* Outer Subtle Glow Aura on Hover */}
              <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-[#3DADEC]/30 to-[#e26d22]/30 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-300 -z-10" />

              {/* Minimalist 2-Bar Animated Indicator */}
              <div className="flex flex-col gap-1.5 w-4 items-end justify-center">
                <span className="h-[2px] w-full bg-[#3DADEC] rounded-full group-hover:w-3 transition-all duration-300" />
                <span className="h-[2px] w-3 bg-[#e26d22] rounded-full group-hover:w-full transition-all duration-300" />
              </div>

              {/* Typography */}
              <span className="text-xs sm:text-sm font-bold tracking-wider uppercase text-slate-200 group-hover:text-white transition-colors font-mont">
                Menu
              </span>
            </button>
          </div>

        </div>
      </header>

      {/* ========================================================================= */}
      {/* 2. OFF-CANVAS FULLSCREEN / DRAWER MENU                                   */}
      {/* ========================================================================= */}
      <div
        className={`fixed inset-0 z-[99999] transition-all duration-500 select-none ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop Overlay with Blur */}
        <div
          onClick={() => setIsOpen(false)}
          className="absolute inset-0 bg-black/75 backdrop-blur-md transition-opacity duration-500"
        />

        {/* Drawer Panel Sliding in from Right */}
        <div
          className={`absolute top-0 right-0 w-full max-w-lg h-full bg-[#14161a] border-l border-slate-800 p-6 sm:p-10 flex flex-col justify-between overflow-y-auto transition-transform duration-500 ease-out shadow-2xl shadow-black ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Ambient Inner Halo */}
          <div className="absolute top-1/4 right-0 w-72 h-72 rounded-full bg-[#3DADEC]/10 blur-[100px] pointer-events-none" />
          <div className="absolute bottom-10 left-0 w-72 h-72 rounded-full bg-[#e26d22]/10 blur-[100px] pointer-events-none" />

          {/* Drawer Top Header */}
          <div className="relative z-10 flex items-center justify-between border-b border-slate-800/80 pb-6">
            <img
              src={logoSvg}
              alt="Optimizers United Arab Emirates"
              className="h-8 sm:h-9 w-auto max-w-[180px] object-contain"
            />

            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close Menu"
              className="w-10 h-10 rounded-full bg-[#20242c] hover:bg-[#2b313d] border border-slate-700/80 hover:border-[#e26d22] text-slate-300 hover:text-white flex items-center justify-center transition-all cursor-pointer group"
            >
              <X className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="relative z-10 flex flex-col gap-2 my-auto py-8">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#3DADEC] mb-2">
              Navigation
            </span>

            {navLinks.map((link) => (
              <a
                key={link.number}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="group flex items-center justify-between p-3.5 rounded-2xl hover:bg-[#1d222b] border border-transparent hover:border-slate-800 transition-all duration-200"
              >
                <div className="flex items-center gap-4">
                  <span className="font-mono text-xs font-bold text-slate-500 group-hover:text-[#3DADEC] transition-colors">
                    {link.number}
                  </span>
                  <span className="text-xl sm:text-2xl font-bold text-slate-200 group-hover:text-white group-hover:translate-x-1.5 transition-transform duration-200">
                    {link.label}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-slate-500 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    {link.tag}
                  </span>
                  <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-[#e26d22] group-hover:translate-x-1 transition-all" />
                </div>
              </a>
            ))}
          </nav>

          {/* Drawer Footer Contact & Socials */}
          <div className="relative z-10 flex flex-col gap-5 pt-6 border-t border-slate-800/80">
            {/* Quick Contact Action */}
            <div className="flex items-center justify-between gap-3 p-3.5 rounded-2xl bg-[#1d222b]/80 border border-slate-800">
              <div className="flex flex-col text-left">
                <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400">Headquarters</span>
                <span className="text-xs font-semibold text-slate-200">Dubai, United Arab Emirates</span>
              </div>
              <button
                onClick={handleCopyEmail}
                className="px-3 py-1.5 rounded-full bg-[#2a313d] hover:bg-[#343e4f] text-[#3DADEC] text-xs font-medium flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Mail className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied' : 'Email'}</span>
              </button>
            </div>

            {/* Social Links with SVG icons */}
            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-500 font-medium">Connect with us</span>
              <div className="flex items-center gap-2">
                <a
                  href="mailto:contact@optimizersglobal.com"
                  aria-label="Email Us"
                  className="w-8 h-8 rounded-full bg-[#1d222b] hover:bg-[#3DADEC] hover:text-black text-slate-400 flex items-center justify-center transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://t.me"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Telegram"
                  className="w-8 h-8 rounded-full bg-[#1d222b] hover:bg-[#3DADEC] hover:text-black text-slate-400 flex items-center justify-center transition-colors"
                >
                  <Send className="w-3.5 h-3.5" />
                </a>
                <a
                  href="#contact"
                  aria-label="Share"
                  className="w-8 h-8 rounded-full bg-[#1d222b] hover:bg-[#e26d22] hover:text-white text-slate-400 flex items-center justify-center transition-colors"
                >
                  <Share2 className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Navbar;
