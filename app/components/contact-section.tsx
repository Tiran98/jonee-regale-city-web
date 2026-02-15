"use client";

import React from 'react';
import { Bangers } from "next/font/google";
import { contactData } from '../data/contactData';

const title = Bangers({ subsets: ["latin"], weight: "400" });

const ContactSection = () => {
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
    <section id='contact' className="bg-gradient-to-b from-[#1a0000] to-[#800000] py-16">
      {/* Section Header */}
      <div className="text-center mb-8 md:mb-12">
        <h2 className={`text-white ${title.className} text-3xl md:text-4xl lg:text-6xl mb-2`}>
          CONTACT US
        </h2>
        <p className="text-[#fff22d] text-sm md:text-base lg:text-lg font-medium mb-6">
          Get in Touch with Jonee Regale City
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            {/* Phone */}
            <div className="group">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:bg-white/15">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#fff22d] to-[#ffaa00] rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-semibold text-lg mb-1">Phone</h3>
                    <button
                      onClick={handlePhoneClick}
                      className="text-[#fff22d] hover:text-white transition-colors duration-300 text-lg font-medium"
                    >
                      {contactData.phone}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="group">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:bg-white/15">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#fff22d] to-[#ffaa00] rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-semibold text-lg mb-1">Email</h3>
                    <button
                      onClick={handleEmailClick}
                      className="text-[#fff22d] hover:text-white transition-colors duration-300 text-lg font-medium break-all"
                    >
                      {contactData.email}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="group">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:bg-white/15">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#fff22d] to-[#ffaa00] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-semibold text-lg mb-2">Location</h3>
                    <p className="text-white/90 text-base leading-relaxed mb-3">
                      {contactData.address.fullAddress}
                    </p>
                    <button
                      onClick={handleDirectionsClick}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/40 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M21.71 11.29l-9-9a.996.996 0 00-1.41 0l-9 9a1.003 1.003 0 000 1.42l9 9c.39.39 1.02.39 1.41 0l9-9c.39-.39.39-1.03 0-1.42zM14 14.5V12h-4v3H8v-4c0-.55.45-1 1-1h5V7.5l3.5 3.5-3.5 3.5z"/>
                      </svg>
                      <span>Get Directions</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="group">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:bg-white/15">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#fff22d] to-[#ffaa00] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
                      <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-semibold text-lg mb-3">Hours</h3>
                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between items-center">
                        <span className="text-white/70">Monday - Thursday</span>
                        <span className="text-white/90">{contactData.hours.monday}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-white/70">Friday - Saturday</span>
                        <span className="text-white/90">{contactData.hours.friday}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-white/70">Sunday</span>
                        <span className="text-white/90">{contactData.hours.sunday}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Google Map */}
          <div className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:bg-white/15 h-full">
              <h3 className="text-white font-semibold text-lg mb-4">Find Us</h3>
              <div className="w-full h-64 lg:h-96 rounded-xl overflow-hidden">
                <iframe
                  src={contactData.googleMapsEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-xl"
                  title="Jonee Regale City Location"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="text-center mt-12">
          <h3 className="text-white font-semibold text-xl mb-6">Follow Us</h3>
          <div className="flex justify-center gap-4">
            <a
              href={contactData.socialMedia.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-110"
            >
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a
              href={contactData.socialMedia.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-110"
            >
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a
              href={contactData.socialMedia.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-110"
            >
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-.88-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;