import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.svg";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/About" },
  { label: "Projects", href: "/projects" },
  { label: "Services", href: "/services" },
    { label: "Case-Studies", href: "/Case-studies" },
      { label: "Contact", href: "/Contact" },


  
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="absolute inset-x-0 top-0 z-40">
      <nav className="mx-auto flex w-full max-w-[1680px] items-center justify-between px-4 py-4 sm:px-10 lg:px-16">
        {/* Logo */}
        <Link to="/" className="relative z-50 inline-block focus:outline-none shrink-0">
          <img
            src={logo}
            alt="Optimizers United Arab Emirates"
            className="h-7 sm:h-9 md:h-12 w-auto object-contain"
          />
        </Link>

        {/* Mobile Location Pill — visible on mobile (350px+) matching reference image */}
        <div className="hidden min-[350px]:flex md:hidden items-center">
          <div className="rounded-full border border-[#FF7900]/40 bg-black/60 backdrop-blur-md px-2.5 py-1 flex items-center gap-1.5 shadow-[0_2px_10px_rgba(255,121,0,0.18)] whitespace-nowrap">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF7900] shrink-0" />
            <span className="font-poppins text-[7.5px] xs:text-[8px] sm:text-[9px] font-semibold tracking-[0.14em] uppercase text-white">
              DUBAI · LONDON · NEW YORK
            </span>
          </div>
        </div>

        {/* Desktop Nav links (Centered) */}
        <ul className="hidden items-center gap-9 md:flex">
          {navLinks.map((link) => {
            const isActive =
              location.pathname === link.href ||
              (link.href === "/" && location.pathname === "");

            return (
              <li key={link.label}>
                <Link
                  to={link.href}
                  className={`group relative inline-block py-1 font-poppins text-[15px] font-medium transition-colors duration-200 ${
                    isActive ? "text-white" : "text-white/80 hover:text-white"
                  }`}
                >
                  <span>{link.label}</span>
                  {/* Underline — thin orange when active, white on hover */}
                  <span
                    className={`absolute bottom-0 left-0 h-[2px] w-full transition-all duration-300 ease-out ${
                      isActive
                        ? "bg-[#FF7900] scale-x-100"
                        : "bg-white scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Right Location Pill */}
        <div className="hidden lg:flex items-center">
          <div className="rounded-full border border-white/20 bg-black/40 backdrop-blur-md px-4 py-1.5 flex items-center gap-2.5 shadow-[0_2px_12px_rgba(0,0,0,0.3)]">
            <span className="w-2 h-2 rounded-full bg-[#FF7900] shrink-0" />
            <span className="font-poppins text-[10.5px] font-semibold tracking-[0.22em] uppercase text-white/90">
              DUBAI · LONDON · NEW YORK
            </span>
          </div>
        </div>

        {/* Hamburger button — mobile only */}
        <button
          id="navbar-hamburger"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
          className="relative z-50 flex md:hidden flex-col justify-center items-center w-10 h-10 gap-[5px] focus:outline-none"
        >
          <span
            className={`block h-[2px] w-6 bg-white rounded-full transition-all duration-300 ease-in-out ${
              menuOpen ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-[2px] w-6 bg-white rounded-full transition-all duration-300 ease-in-out ${
              menuOpen ? "opacity-0 scale-x-0" : ""
            }`}
          />
          <span
            className={`block h-[2px] w-6 bg-white rounded-full transition-all duration-300 ease-in-out ${
              menuOpen ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 flex flex-col md:hidden transition-all duration-500 ease-in-out ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        style={{
          background: "rgba(8, 6, 9, 0.98)",
          backdropFilter: "blur(20px)",
        }}
      >
        {/* Links centered vertically */}
        <ul className="flex flex-1 flex-col items-center justify-center gap-8">
          {navLinks.map((link, i) => (
            <li
              key={link.label}
              className="overflow-hidden"
              style={{
                transform: menuOpen ? "translateY(0)" : "translateY(30px)",
                opacity: menuOpen ? 1 : 0,
                transition: `transform 0.4s ease ${i * 0.06 + 0.1}s, opacity 0.4s ease ${i * 0.06 + 0.1}s`,
              }}
            >
              <Link
                to={link.href}
                className="group relative inline-block font-poppins text-2xl font-medium text-white/90 transition-colors duration-300 hover:text-white"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 h-0.5 w-full origin-left scale-x-0 bg-[#FF7900] transition-transform duration-300 ease-in-out group-hover:scale-x-100" />
              </Link>
            </li>
          ))}

          {/* Location in mobile drawer */}
          <li className="mt-4">
            <div className="rounded-full border border-white/20 bg-black/40 px-4 py-1.5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#FF7900]" />
              <span className="font-poppins text-[10px] font-semibold tracking-[0.2em] uppercase text-white/80">
                DUBAI · LONDON · NEW YORK
              </span>
            </div>
          </li>
        </ul>

        {/* Bottom tagline */}
        <p className="pb-8 text-center font-poppins text-[11px] tracking-[0.25em] text-white/40 uppercase">
          Optimizers Global
        </p>
      </div>
    </header>
  );
}
