import React from "react";
import { Link } from "react-router-dom";

const navLinks = [
  { label: "Home", accent: "", href: "/" },
  { label: "Portfolio", accent: "", href: "/portfolio" },
  { label: "About", accent: "", href: "/about" },
  { label: "Contact", accent: "", href: "/contact" },
];

export default function Navbar() {
  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <nav className="mx-auto flex w-full max-w-[1680px] items-center justify-between px-6 py-7 sm:px-10 lg:px-16">
        {/* Logo */}
        <a href="/" className="font-poppins text-xl tracking-tight text-white">
          <span className="font-semibold">Optimizers</span>{" "}
          <span className="font-light text-white/70">Global</span>
        </a>

        {/* Nav links */}
        <ul className="hidden items-start gap-8 xl:flex">
          {navLinks.map((link, i) => (
            <li key={i} className="leading-tight">
              <Link
                href={link.href}
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
      </nav>
    </header>
  );
}
