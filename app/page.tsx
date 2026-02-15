'use client'
import { useState } from "react";
import AboutUs from "./components/about-us";
import ContactSection from "./components/contact-section";
import FooterSection from "./components/footer-section";
import GallerySection from "./components/gallery-section";
import HeroSection from "./components/hero-section";
import MenuSection from "./components/menu-section";
import ReviewsSection from "./components/reviews-section";
import UnderDevelopment from "./components/under-development";
import LoadingScreen from "./components/loading-screen";
import ScrollUpButton from "./components/scroll-up-button";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <div className="flex flex-col min-h-screen font-sans">
      {isLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}
      
      {!isLoading && (
        <>
          {/* <UnderDevelopment/> */}
          <HeroSection/>
          <AboutUs/>
          <MenuSection/>
          <GallerySection/>
          <ReviewsSection/>
          <ContactSection/>
          <FooterSection/>
        </>
      )}
      
      <ScrollUpButton />
    </div>
  );
}
