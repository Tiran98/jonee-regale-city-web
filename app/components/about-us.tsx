"use client";

import React, { useEffect, useState } from "react";
import { Pacifico, Poppins } from "next/font/google";

const paraFont = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "600"] });
const headingFont = Pacifico({ subsets: ["latin"], weight: "400" });

type Horizontal = "left" | "center" | "right";
type Vertical = "top" | "center" | "bottom";

const slides: {
  image: string;
  h: Horizontal;
  v: Vertical;
  text: React.ReactNode;
  title: string;
}[] = [
  {
    image: "/images/para1.jpg",
    h: "center",
    v: "bottom",
    title: "Our Story",
    text: (
      <>
        At <span className="font-semibold text-amber-200">Jonee Regale City</span>, food is more
        than just a meal — it&apos;s a way to connect people. Since opening our doors
        in 2007, we serve dishes inspired by authentic Sri Lankan flavors.
      </>
    ),
  },
  {
    image: "/images/para2.jpg",
    h: "right",
    v: "center",
    title: "Our Craft",
    text: (
      <>
        Every dish is prepared using <span className="font-semibold text-amber-200">carefully selected ingredients</span> and
        traditional cooking techniques to preserve taste, quality, and
        consistency.
      </>
    ),
  },
  {
    image: "/images/para3.jpg",
    h: "center",
    v: "bottom",
    title: "Our Promise",
    text: (
      <>
        Backed by a <span className="font-semibold text-amber-200">friendly and dedicated team</span>, we create a welcoming space
        where every guest enjoys a memorable dining experience.
      </>
    ),
  },
];

const getCardAlign = (h: Horizontal) => {
  if (h === "left") return "self-start";
  if (h === "right") return "self-end";
  return "self-center";
};

const getWrapperClasses = (h: Horizontal, v: Vertical) => {
  const horizontal =
    h === "left"
      ? "justify-start text-left"
      : h === "right"
      ? "justify-end text-right"
      : "justify-center text-center";

  const vertical =
    v === "top"
      ? "items-start pt-20"
      : v === "bottom"
      ? "items-end pb-20"
      : "items-center";

  return `${horizontal} ${vertical}`;
};

const AboutUs = () => {
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isHovered]);

  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);

  return (
    <section 
      id="about" 
      className="relative w-full h-screen overflow-hidden group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/30 via-transparent to-amber-900/20 z-[1]" />
      
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === current 
              ? "opacity-100 scale-100 z-10" 
              : index === (current - 1 + slides.length) % slides.length
              ? "opacity-0 scale-105 z-5"
              : "opacity-0 scale-95 z-0"
          }`}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Enhanced overlay with gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50" />

          <div
            className={`relative w-full h-full flex ${getWrapperClasses(
              slide.h,
              slide.v
            )} px-4 md:px-8 lg:px-12`}
          >
            <div className="w-full flex flex-col gap-6 max-w-7xl mx-auto">
              {/* Main heading with animation */}
              <div className="overflow-hidden">
                <h2
                  className={`text-4xl md:text-6xl lg:text-7xl text-white ${headingFont.className} 
                    drop-shadow-2xl transform transition-all duration-1000 delay-200 ${
                    index === current 
                      ? "translate-y-0 opacity-100" 
                      : "translate-y-full opacity-0"
                  }`}
                >
                  About Us
                </h2>
              </div>

              {/* Enhanced text card with glassmorphism */}
              <div
                className={`max-w-2xl transform transition-all duration-1000 delay-500 ${
                  index === current 
                    ? "translate-y-0 opacity-100" 
                    : "translate-y-8 opacity-0"
                } ${getCardAlign(slide.h)}`}
              >
                {/* Glassmorphism card */}
                <div className="relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 md:p-10 shadow-2xl overflow-hidden">
                  {/* Card background effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-black/5 rounded-3xl" />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Slide title */}
                    <h3 className={`text-xl md:text-2xl font-semibold text-amber-200 mb-4 ${paraFont.className}`}>
                      {slide.title}
                    </h3>
                    
                    {/* Main text */}
                    <p className={`text-lg md:text-xl lg:text-2xl text-white leading-relaxed ${paraFont.className} font-light`}>
                      {slide.text}
                    </p>
                  </div>
                  
                  {/* Decorative corner accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-amber-400/20 to-transparent rounded-bl-3xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Enhanced navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 
          bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20
          text-white w-14 h-14 md:w-16 md:h-16 rounded-full
          transition-all duration-300 hover:scale-110 hover:shadow-xl
          opacity-0 group-hover:opacity-100 transform -translate-x-4 group-hover:translate-x-0
          flex items-center justify-center text-xl font-bold"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 
          bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20
          text-white w-14 h-14 md:w-16 md:h-16 rounded-full
          transition-all duration-300 hover:scale-110 hover:shadow-xl
          opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0
          flex items-center justify-center text-xl font-bold"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Enhanced dot indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-4 z-20">
        {slides.map((slide, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`relative transition-all duration-500 group/dot ${
              index === current 
                ? "w-12 h-4" 
                : "w-4 h-4 hover:w-6"
            }`}
            aria-label={`Go to slide ${index + 1}: ${slide.title}`}
          >
            <div className={`absolute inset-0 rounded-full transition-all duration-500 ${
              index === current 
                ? "bg-white shadow-lg shadow-white/25" 
                : "bg-white/50 hover:bg-white/70"
            }`} />
            
            {/* Active indicator line */}
            {index === current && (
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-400 to-amber-200 opacity-75" />
            )}
          </button>
        ))}
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/10 z-20">
        <div 
          className="h-full bg-gradient-to-r from-amber-400 to-amber-200 transition-all duration-300 ease-out"
          style={{ 
            width: `${((current + 1) / slides.length) * 100}%`,
            transition: isHovered ? 'none' : 'width 5000ms linear'
          }}
        />
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-20 right-20 w-2 h-2 bg-amber-400/30 rounded-full animate-pulse hidden lg:block" />
      <div className="absolute bottom-32 left-20 w-1 h-1 bg-white/40 rounded-full animate-ping hidden lg:block" />
      <div className="absolute top-1/3 left-10 w-1.5 h-1.5 bg-amber-300/25 rounded-full animate-pulse hidden lg:block" />
    </section>
  );
};

export default AboutUs;
