"use client";

import React, { useState } from 'react';
import { Bangers } from "next/font/google";
import { displayedReviews, GOOGLE_REVIEW_URL } from '../data/reviewsData';

const title = Bangers({ subsets: ["latin"], weight: "400" });

const ReviewsSection = () => {
  const [visibleCount, setVisibleCount] = useState(3);

  const visibleReviews = displayedReviews.slice(0, visibleCount);
  const hasMore = visibleCount < displayedReviews.length;

  const handleShowMore = () => {
    setVisibleCount(prev => Math.min(prev + 3, displayedReviews.length));
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg
        key={index}
        className={`w-5 h-5 ${index < rating ? 'text-yellow-400' : 'text-gray-400'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section id='reviews' className="bg-gradient-to-b from-[#1a0000] to-[#800000] py-16">
      {/* Section Header */}
      <div className="text-center mb-8 md:mb-12">
        <h2 className={`text-white ${title.className} text-3xl md:text-4xl lg:text-6xl mb-2`}>
          CUSTOMER REVIEWS
        </h2>
        <p className="text-[#fff22d] text-sm md:text-base lg:text-lg font-medium mb-6">
          Some of Our Customer Reviews
        </p>

        {/* Add Review Button */}
        <div className="mb-8">
          <a
            href={GOOGLE_REVIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/40 rounded-full font-medium transition-all duration-300 hover:scale-105"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            <span>Write a Google Review</span>
          </a>
        </div>
      </div>

      {/* Reviews Grid */}
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleReviews.map((review) => (
            <div key={review.id} className="group">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 h-full border border-white/20 hover:border-white/40 transition-all duration-300 hover:bg-white/15">
                {/* Review Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#fff22d] to-[#ffaa00] rounded-full flex items-center justify-center text-black font-bold text-lg">
                    {review.avatar}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white font-semibold text-lg">{review.name}</h4>
                    <div className="flex items-center gap-2">
                      <div className="flex">
                        {renderStars(review.rating)}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Review Content */}
                <p className="text-white/90 text-sm leading-relaxed">
                  &ldquo;{review.review}&rdquo;
                </p>

                {/* Customer Badge */}
                <div className="flex items-center gap-2 mt-4 pt-4 border-t border-white/10">
                  <svg className="w-4 h-4 text-white/60" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                  <span className="text-white/60 text-xs">Customer Review</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Show More Button */}
      {hasMore && (
        <div className="text-center mt-8">
          <button
            onClick={handleShowMore}
            className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/40 rounded-full font-medium transition-all duration-300 hover:scale-105 flex items-center gap-2 mx-auto"
          >
            <span>Show More Reviews</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <p className="text-white/60 text-sm mt-2">
            Showing {visibleCount} of {displayedReviews.length} featured reviews
          </p>
        </div>
      )}
    </section>
  );
};

export default ReviewsSection;