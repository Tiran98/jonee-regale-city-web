import AboutUs from "./components/about-us";
import HeroSection from "./components/hero-section";
import MenuSection from "./components/menu-section";
import UnderDevelopment from "./components/under-development";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-sans">
     {/* <UnderDevelopment/> */}
     <HeroSection/>
     <AboutUs/>
     <MenuSection/>
    </div>
  );
}
