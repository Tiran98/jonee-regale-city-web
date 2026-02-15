"use client";

import React, { useState } from "react";
import Link from "next/link";

const NavigationSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "HOME", href: "/#home" },
    { name: "ABOUT", href: "/#about" },
    { name: "MENU", href: "/#menu" },
    { name: "GALLERY", href: "/#gallery" },
    { name: "REVIEWS", href: "/#reviews" },
    { name: "CONTACT", href: "/#contact" }
  ];

  return (
    <nav className="relative">
      {/* Desktop Menu */}
      <div className="hidden md:flex justify-center items-center gap-6">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="text-white hover:text-gray-300 font-medium transition"
          >
            {item.name}
          </Link>
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
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 text-white hover:bg-white/10 transition"
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default NavigationSection;
