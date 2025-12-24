import React from "react";
import NavigationSection from "./navigation-section";
import Image from "next/image";

const HeaderSection = () => {
  return (
    <header className="w-full px-4 py-3">
      <div className="hidden md:flex justify-evenly items-center">
        <Image
          src="/Horizontal Logo.png"
          alt="Jonee Regale City Logo"
          width={350}
          height={100}
          priority
        />
        <NavigationSection />
      </div>

      <div className="grid grid-cols-3 items-center md:hidden">
        <div></div>

        <div className="flex justify-center">
          <Image
            src="/Logo.png"
            alt="Jonee Regale City Logo"
            width={90}
            height={90}
            priority
          />
        </div>

        <div className="flex justify-end">
          <NavigationSection />
        </div>
      </div>
    </header>
  );
};

export default HeaderSection;
