import React from "react";
import HeaderSection from "./header-section";
import Image from "next/image";
import { Pacifico, Bangers } from "next/font/google";

const welcome = Pacifico({ subsets: ["latin"], weight: "400" });
const companyName = Bangers({ subsets: ["latin"], weight: "400" });

const HeroSectionWelcomeText = () => {
  return (
    <div className="absolute flex flex-col justify-center items-center text-center px-4 top-40">
      
      <h1
        className={`text-3xl md:text-4xl lg:text-5xl text-[#fff22d] mt-10 ${welcome.className}`}
      >
        Welcome to the
      </h1>

      <p
        className={`text-4xl md:text-2xl lg:text-6xl text-white mt-8 ${companyName.className}`}
      >
        Jonee Regale City - Family Restaurant
      </p>

      <p className="max-w-2xl text-sm md:text-base lg:text-lg text-gray-200 mt-10">
        Experience authentic flavors, premium ingredients, and unforgettable dining
        moments crafted with passion just for you.
      </p>

      <button className="mt-6 px-8 py-3 bg-[#fff22d] text-black font-semibold rounded-full
        hover:bg-yellow-400 transition duration-300">
        Explore Our Menu
      </button>

    </div>
  );
};


const HeroSection = () => {
  return (
    <div className="flex flex-col justify-between items-center w-full h-screen bg-linear-to-r from-[#1a0000] to-[#800000]">
      <HeaderSection />
      <HeroSectionWelcomeText />
      <Image
        src="/Rice Half.png"
        alt="Hero Image"
        width={600}
        height={600}
        className="mt-6"
      />
    </div>
  );
};

export default HeroSection;
