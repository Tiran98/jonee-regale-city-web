"use client";

import React, { useEffect, useState } from "react";
import { Pacifico, Poppins } from "next/font/google";

const paraFont = Poppins({ subsets: ["latin"], weight: "400" });
const headingFont = Pacifico({ subsets: ["latin"], weight: "400" });

type Horizontal = "left" | "center" | "right";
type Vertical = "top" | "center" | "bottom";

const slides: {
  image: string;
  h: Horizontal;
  v: Vertical;
  text: React.ReactNode;
}[] = [
  {
    image: "/images/para1.jpg",
    h: "center",
    v: "top",
    text: (
      <>
        At <span className="font-medium">Jonee Regale City</span>, food is more
        than just a meal — it’s a way to connect people. Since opening our doors
        in 2022, we serve dishes inspired by authentic Sri Lankan flavors.
      </>
    ),
  },
  {
    image: "/images/para2.jpg",
    h: "right",
    v: "center",
    text: (
      <>
        Every dish is prepared using carefully selected ingredients and
        traditional cooking techniques to preserve taste, quality, and
        consistency.
      </>
    ),
  },
  {
    image: "/images/para3.jpeg",
    h: "center",
    v: "bottom",
    text: (
      <>
        Backed by a friendly and dedicated team, we create a welcoming space
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
      ? "justify-end text-right pr-15"
      : "justify-center text-center";

  const vertical =
    v === "top"
      ? "items-start pt-16"
      : v === "bottom"
      ? "items-end pb-16"
      : "items-center";

  return `${horizontal} ${vertical}`;
};

const AboutUs = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);

  return (
    <section id="about" className="relative w-full h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/20" />

          <div
            className={`relative w-full h-full flex ${getWrapperClasses(
              slide.h,
              slide.v
            )}`}
          >
            <div className="w-full px-8 flex flex-col gap-4">
              {/* Heading */}
              <h2
                className={`text-3xl md:text-4xl text-white ${headingFont.className}`}
              >
                About Us
              </h2>

              {/* Text Card */}
              <div
                className={`max-w-xl bg-black/40 backdrop-blur-sm p-8 rounded-xl ${getCardAlign(
                  slide.h
                )}`}
              >
                <p
                  className={`text-lg md:text-xl text-white leading-relaxed ${paraFont.className}`}
                >
                  {slide.text}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/60 text-white w-12 h-12 rounded-full"
      >
        ❮
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/60 text-white w-12 h-12 rounded-full"
      >
        ❯
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition ${
              index === current ? "bg-white scale-125" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default AboutUs;
