"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Bangers } from "next/font/google";
import { galleryImages, type GalleryImage } from '../data/galleryData';

const title = Bangers({ subsets: ["latin"], weight: "400" });

const GallerySection = () => {
  const [visibleCount, setVisibleCount] = useState(5);

  const visibleImages = galleryImages.slice(0, visibleCount);
  const hasMore = visibleCount < galleryImages.length;

  const handleShowMore = () => {
    setVisibleCount(prev => Math.min(prev + 5, galleryImages.length));
  };

  return (
    <section id='gallery' className="bg-linear-to-b from-[#1a0000] to-[#800000]">
      {/* Section Header - Centered like other sections */}
      <div className="text-center mt-12 mb-10 md:mb-12">
        <h2 className={`text-white ${title.className} text-3xl md:text-4xl lg:text-6xl mb-2`}>
          GALLERY
        </h2>
        <p className="text-[#fff22d] text-sm md:text-base lg:text-lg font-medium">
          Experience Our Beautiful Restaurant
        </p>
      </div>

      {/* Gallery Grid - Added more padding */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {/* First image - spans 2 columns on large screens */}
          {visibleImages[0] && (
            <div className="lg:col-span-2 group cursor-pointer">
              <div className="relative aspect-[4/3] lg:aspect-[16/10] rounded-2xl overflow-hidden shadow-xl bg-black">
                <Image
                  src={visibleImages[0].src}
                  alt={visibleImages[0].alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 66vw"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
            </div>
          )}

          {/* Second image - spans 1 column */}
          {visibleImages[1] && (
            <div className="group cursor-pointer">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl bg-black">
                <Image
                  src={visibleImages[1].src}
                  alt={visibleImages[1].alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
            </div>
          )}

          {/* Remaining images */}
          {visibleImages.slice(2).map((image, index) => (
            <div key={index + 2} className="group cursor-pointer">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl bg-black">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Show More Button */}
      {hasMore && (
        <div className="text-center mt-8 mb-8">
          <button
            onClick={handleShowMore}
            className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/40 rounded-full font-medium transition-all duration-300 hover:scale-105 flex items-center gap-2 mx-auto"
          >
            <span>Show More</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <p className="text-white/60 text-sm mt-2">
            Showing {visibleCount} of {galleryImages.length} photos
          </p>
        </div>
      )}

      {/* Gallery Stats */}
      {/* <div className="text-center mt-8">
        <div className="flex justify-center items-center gap-4 text-white/60 text-sm">
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span>{galleryImages.length} Photos</span>
          </div>
          
        </div>
      </div> */}
    </section>
  );
};

export default GallerySection;