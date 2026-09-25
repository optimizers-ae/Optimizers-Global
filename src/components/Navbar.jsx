import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X, ArrowRight, Sparkles } from 'lucide-react';
import { mainNavItems, servicesDropdownData } from '../data/navigationData';

const Navbar = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileCategory, setOpenMobileCategory] = useState(null);
  const dropdownRef = useRef(null);
  const location = useLocation();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close menus on location change
  useEffect(() => {
    setIsServicesOpen(false);
    setIsMobileMenuOpen(false);
  }, [location]);

  const toggleMobileCategory = (index) => {
    setOpenMobileCategory(openMobileCategory === index ? null : index);
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="w-full pt-6 pb-4 px-6 md:px-12 lg:px-16 flex items-center justify-between relative z-50"
    >
      {/* Brand Logo */}
      <Link to="/" className="flex flex-col group cursor-pointer select-none z-50">
        <span className="font-editorial text-2xl md:text-3xl lg:text-4xl text-white font-normal leading-none tracking-tight group-hover:text-amber-200/90 transition-colors">
          Optimizers
        </span>
        <span className="font-sans-clean text-[9px] md:text-[10px] text-white/80 font-semibold uppercase tracking-[0.28em] mt-1 group-hover:text-white transition-colors">
          GLOBAL LLC
        </span>
      </Link>

      {/* Desktop Main Navigation Bar */}
      <nav className="hidden md:flex items-center space-x-8 lg:space-x-10 relative" ref={dropdownRef}>
        {mainNavItems.map((item) => {
          if (item.isDropdown) {
            return (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className={`flex items-center space-x-1 font-sans-clean text-xs lg:text-sm font-medium tracking-wide transition-colors py-2 select-none cursor-pointer ${
                    isServicesOpen ? 'text-white' : 'text-white/80 hover:text-white'
                  }`}
                  aria-expanded={isServicesOpen}
                >
                  <span>{item.label}</span>
                  <ChevronDown
                    size={15}
                    className={`transition-transform duration-300 ${
                      isServicesOpen ? 'rotate-180 text-amber-400' : 'text-white/60'
                    }`}
                  />
                </button>

                {/* Mega Dropdown Menu */}
                <AnimatePresence>
                  {isServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 12, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.98 }}
                      transition={{ duration: 0.25, ease: 'easeOut' }}
                      className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[92vw] max-w-6xl bg-[#120505]/95 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 lg:p-8 shadow-2xl shadow-black/80 text-white z-50 overflow-hidden"
                    >
                      {/* Top Header Badge */}
                      <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
                        <div className="flex items-center space-x-2">
                          <Sparkles size={16} className="text-amber-400" />
                          <span className="font-sans-clean text-xs font-semibold tracking-widest text-amber-300 uppercase">
                            Our Comprehensive Services
                          </span>
                        </div>
                        <span className="text-[11px] text-white/40 tracking-wider">
                          Optimizers Global Solutions
                        </span>
                      </div>

                      {/* 5 Category Grid Columns */}
                      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8">
                        {servicesDropdownData.map((cat, idx) => (
                          <div key={idx} className="flex flex-col space-y-3">
                            <h3 className="font-sans-clean text-xs font-bold uppercase tracking-wider text-amber-400/90 leading-snug border-b border-white/5 pb-2">
                              {cat.category}
                            </h3>
                            <ul className="flex flex-col space-y-2">
                              {cat.items.map((sub, subIdx) => (
                                <li key={subIdx}>
                                  <Link
                                    to={sub.path}
                                    className="group/item flex items-center text-[12px] leading-tight text-white/70 hover:text-white transition-colors"
                                  >
                                    <span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover/item:bg-amber-400 transition-colors mr-2 shrink-0" />
                                    <span className="group-hover/item:translate-x-0.5 transition-transform duration-200">
                                      {sub.label}
                                    </span>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>

                      {/* Dropdown Footer Banner */}
                      <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between bg-white/[0.02] p-4 rounded-xl">
                        <p className="text-xs text-white/70">
                          Need a custom growth strategy tailored for your business?
                        </p>
                        <Link
                          to="/contact"
                          className="flex items-center space-x-1 text-xs font-semibold text-amber-300 hover:text-white transition-colors"
                        >
                          <span>Get Free Consultation</span>
                          <ArrowRight size={14} />
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          }

          const isActive = location.pathname === item.path;

          return (
            <Link
              key={item.label}
              to={item.path}
              className={`font-sans-clean text-xs lg:text-sm font-medium tracking-wide transition-colors relative py-2 ${
                isActive ? 'text-white font-semibold' : 'text-white/80 hover:text-white'
              }`}
            >
              {item.label}
              {isActive && (
                <motion.div
                  layoutId="activeUnderline"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-amber-400 rounded-full"
                  transition={{ duration: 0.3 }}
                />
              )}
            </Link>
          );
        })}
      </nav>

      {/* Desktop Contact CTA */}
      <div className="hidden md:flex items-center">
        <Link
          to="/contact"
          className="px-5 py-2 rounded-full border border-white/20 hover:border-amber-400/60 bg-white/5 hover:bg-amber-400/10 text-xs lg:text-sm text-white font-medium tracking-wide transition-all duration-300 shadow-md"
        >
          Let's Talk
        </Link>
      </div>

      {/* Mobile Hamburger Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="md:hidden text-white p-2 focus:outline-none z-50 cursor-pointer"
        aria-label="Toggle Navigation Menu"
      >
        {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
      </button>

      {/* Mobile Overlay Navigation Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-0 left-0 w-full h-screen bg-[#0d0101]/98 backdrop-blur-xl z-40 flex flex-col pt-24 px-6 pb-8 overflow-y-auto"
          >
            <div className="flex flex-col space-y-4">
              {mainNavItems.map((item) => {
                if (item.isDropdown) {
                  return (
                    <div key={item.label} className="border-b border-white/10 pb-4">
                      <button
                        onClick={() => setIsServicesOpen(!isServicesOpen)}
                        className="w-full flex items-center justify-between text-lg font-semibold text-white py-2"
                      >
                        <span>{item.label}</span>
                        <ChevronDown
                          size={18}
                          className={`transition-transform duration-300 ${
                            isServicesOpen ? 'rotate-180 text-amber-400' : 'text-white/60'
                          }`}
                        />
                      </button>

                      {/* Mobile Services Accordion */}
                      {isServicesOpen && (
                        <div className="mt-3 pl-2 flex flex-col space-y-4">
                          {servicesDropdownData.map((cat, idx) => (
                            <div key={idx} className="bg-white/5 rounded-xl p-3">
                              <button
                                onClick={() => toggleMobileCategory(idx)}
                                className="w-full flex items-center justify-between text-sm font-semibold text-amber-300 text-left"
                              >
                                <span>{cat.category}</span>
                                <ChevronDown
                                  size={14}
                                  className={`transition-transform ${
                                    openMobileCategory === idx ? 'rotate-180' : ''
                                  }`}
                                />
                              </button>

                              {(openMobileCategory === idx || true) && (
                                <ul className="mt-2 pl-2 space-y-1.5 border-l border-amber-400/20">
                                  {cat.items.map((sub, subIdx) => (
                                    <li key={subIdx}>
                                      <Link
                                        to={sub.path}
                                        className="text-xs text-white/70 hover:text-white block py-1"
                                      >
                                        {sub.label}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.label}
                    to={item.path}
                    className="text-lg font-semibold text-white/90 hover:text-white border-b border-white/10 pb-4"
                  >
                    {item.label}
                  </Link>
                );
              })}

              <div className="pt-4">
                <Link
                  to="/contact"
                  className="w-full block text-center py-3 rounded-full bg-amber-400 text-black font-semibold text-sm hover:bg-amber-300 transition-colors shadow-lg"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;