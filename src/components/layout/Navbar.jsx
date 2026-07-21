"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Stats", href: "#stats" },
  { label: "Clients", href: "#clients" },
  { label: "Accredian Edge", href: "#accredian-edge" },
  { label: "CAT", href: "#cat" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "FAQs", href: "#faqs" },
  { label: "Testimonials", href: "#testimonials" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-cream border-b border-charcoal/10">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="#home" className="text-2xl font-bold text-charcoal">
          accredian
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium text-charcoal/80 hover:text-amber transition-colors duration-200"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA button - desktop */}
        <Link
          href="#enquire"
          className="hidden lg:inline-block bg-amber hover:bg-amber-dark text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors duration-200"
        >
          Enquire Now
        </Link>

        {/* Mobile hamburger button */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span className={`w-6 h-0.5 bg-charcoal transition-transform duration-200 ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`w-6 h-0.5 bg-charcoal transition-opacity duration-200 ${isOpen ? "opacity-0" : ""}`} />
          <span className={`w-6 h-0.5 bg-charcoal transition-transform duration-200 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <ul className="lg:hidden flex flex-col gap-1 px-6 pb-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block py-2 text-charcoal/80 hover:text-amber transition-colors duration-200"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="#enquire"
              onClick={() => setIsOpen(false)}
              className="block mt-2 bg-amber hover:bg-amber-dark text-white text-center font-semibold px-5 py-2.5 rounded-lg transition-colors duration-200"
            >
              Enquire Now
            </Link>
          </li>
        </ul>
      )}
    </header>
  );
}