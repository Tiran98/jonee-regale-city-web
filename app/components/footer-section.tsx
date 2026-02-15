"use client";

import React from 'react';
import { Bangers } from "next/font/google";
import { contactData } from '../data/contactData';

const title = Bangers({ subsets: ["latin"], weight: "400" });

const FooterSection = () => {
  const handlePhoneClick = () => {
    window.open(`tel:${contactData.phone}`, '_self');
  };

  const handleEmailClick = () => {
    window.open(`mailto:${contactData.email}`, '_self');
  };

  const handleDirectionsClick = () => {
    window.open(contactData.googleMapsUrl, '_blank', 'noopener noreferrer');
  };

  return (
    <footer className="bg-gradient-to-t from-[#800000] to-[#1a0000] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Restaurant Info */}
          <div className="lg:col-span-2">
            <h3 className={`${title.className} text-2xl md:text-3xl text-[#fff22d] mb-4`}>
              JONEE REGALE CITY
            </h3>
            <p className="text-white/80 text-sm leading-relaxed mb-4">
              Experience authentic flavors and exceptional dining at Jonee Regale City. 
              We serve delicious meals with fresh ingredients and traditional recipes 
              that will delight your taste buds.
            </p>
          </div>
        </div>

        {/* Social Media Links */}
        <div className=" pt-2">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">

            {/* Quick Links */}
            <div className="flex flex-wrap items-center gap-6 text-sm">
              <a href="./" className="text-white/70 hover:text-[#fff22d] transition-colors duration-300">Home</a>
              <a href="#menu" className="text-white/70 hover:text-[#fff22d] transition-colors duration-300">Menu</a>
              <a href="#gallery" className="text-white/70 hover:text-[#fff22d] transition-colors duration-300">Gallery</a>
              <a href="#about" className="text-white/70 hover:text-[#fff22d] transition-colors duration-300">About</a>
              <a href="#contact" className="text-white/70 hover:text-[#fff22d] transition-colors duration-300">Contact</a>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center mt-8 pt-6 border-t border-white/10">
            <p className="text-white/60 text-sm">
              © {new Date().getFullYear()} Jonee Regale City. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;