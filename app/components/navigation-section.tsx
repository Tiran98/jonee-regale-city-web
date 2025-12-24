"use client";

import React, { useState } from "react";

const NavigationSection = () => {
  const navLinks = ["HOME",, "ABOUT", "MENU", "RESERVATIONS", "CONTACT"];
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative">
      {/* Desktop Menu */}
      <div className="hidden md:flex justify-center items-center gap-6">
        {navLinks.map((link) => (
          <a
            key={link}
            href={`#${link?.toLowerCase()}`}
            className="text-white hover:text-gray-300 font-medium transition"
          >
            {link}
          </a>
        ))}
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden flex justify-end">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white focus:outline-none"
          aria-label="Toggle Menu"
        >
          {/* Hamburger Icon */}
          <div className="space-y-1">
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
          </div>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-4 w-48 bg-black/80 backdrop-blur-md rounded-lg shadow-lg md:hidden z-100">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link?.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 text-white hover:bg-white/10 transition"
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default NavigationSection;
