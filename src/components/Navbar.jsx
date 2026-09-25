import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.svg"

const navLinks = [
  { label: "Home", accent: "", href: "/" },
  { label: "Portfolio", accent: "", href: "/portfolio" },
  { label: "About", accent: "", href: "/about" },
  { label: "Contact", accent: "", href: "/contact" },
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
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <nav className="mx-auto flex w-full max-w-[1680px] z-10 items-center justify-between px-6 py-7 sm:px-10 lg:px-16">
        {/* Logo */}
        <a href={logo} className="relative z-50">
          <img src={logo} alt="Logo" width={200} height={100}  />
        </a>

        {/* Desktop Nav links */}
        <ul className="hidden items-start gap-8 xl:flex">
          {navLinks.map((link, i) => (
            <li key={i} className="leading-tight">
              <Link
                to={link.href}
                className="group relative inline-block pb-1 font-poppins text-[15px] text-white/90 transition-colors duration-300 hover:text-white"
              >
                <span className="block">{link.label}</span>

                {link.accent && (
                  <span className="block font-medium italic">
                    {link.accent}
                  </span>
                )}

                {/* White underline */}
                <span className="absolute bottom-0 left-0 h-0.5 w-full origin-left scale-x-0 bg-white transition-transform duration-300 ease-in-out group-hover:scale-x-100" />
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger button — mobile only */}
        <button
          id="navbar-hamburger"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
          className="relative z-50 flex xl:hidden flex-col justify-center items-center w-10 h-10 gap-[5px] focus:outline-none"
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
        className={`fixed inset-0 z-40 flex flex-col xl:hidden transition-all duration-500 ease-in-out ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        style={{ background: "rgba(5, 5, 10, 0.97)", backdropFilter: "blur(16px)" }}
      >
        {/* Links centered vertically */}
        <ul className="flex flex-1 flex-col items-center justify-center gap-10">
          {navLinks.map((link, i) => (
            <li
              key={i}
              className="overflow-hidden"
              style={{
                transform: menuOpen ? "translateY(0)" : "translateY(40px)",
                opacity: menuOpen ? 1 : 0,
                transition: `transform 0.45s ease ${i * 0.07 + 0.1}s, opacity 0.45s ease ${i * 0.07 + 0.1}s`,
              }}
            >
              <Link
                to={link.href}
                className="group relative inline-block font-poppins text-3xl font-light text-white/80 transition-colors duration-300 hover:text-white"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-white transition-transform duration-300 ease-in-out group-hover:scale-x-100" />
              </Link>
            </li>
          ))}
        </ul>

        {/* Bottom tagline */}
        <p
          className="pb-10 text-center font-poppins text-xs tracking-widest text-white/30 uppercase"
          style={{
            opacity: menuOpen ? 1 : 0,
            transition: "opacity 0.5s ease 0.5s",
          }}
        >
          Optimizers Global
        </p>
      </div>
    </header>
  );
}
