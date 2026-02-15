'use client'
import React from "react";
import HeaderSection from "./header-section";
import { Pacifico, Bangers } from "next/font/google";

const welcome = Pacifico({ subsets: ["latin"], weight: "400" });
const companyName = Bangers({ subsets: ["latin"], weight: "400" });

const HeroSectionWelcomeText = () => {
  return (
    <div className="absolute flex flex-col justify-center items-center text-center px-4 top-40 md:top-60 lg:top-72">
      {/* Remove the background overlay entirely and rely on text shadows */}
      
      <div className="relative z-10">
        <h1
          className={`text-3xl md:text-4xl lg:text-5xl text-[#fff22d] mt-10 drop-shadow-2xl font-bold ${welcome.className}`}
          style={{
            textShadow: '2px 2px 4px rgba(0,0,0,0.9), 0 0 15px rgba(0,0,0,0.7), 0 0 25px rgba(0,0,0,0.5)'
          }}
        >
          Welcome to the
        </h1>

        <p
          className={`text-4xl md:text-5xl lg:text-6xl text-white mt-8 drop-shadow-2xl font-bold ${companyName.className}`}
          style={{
            textShadow: '3px 3px 6px rgba(0,0,0,0.9), 0 0 20px rgba(0,0,0,0.7), 0 0 30px rgba(0,0,0,0.5)'
          }}
        >
          Jonee Regale City - Family Restaurant
        </p>

        <p 
          className="max-w-2xl text-sm md:text-base lg:text-lg text-white mt-10 font-semibold leading-relaxed"
          style={{
            textShadow: '2px 2px 4px rgba(0,0,0,0.9), 0 0 12px rgba(0,0,0,0.7)'
          }}
        >
          Experience authentic flavors, premium ingredients, and unforgettable
          dining moments crafted with passion just for you.
        </p>

        <button
          className="mt-8 px-8 py-3 bg-[#fff22d] text-black font-bold rounded-full
          hover:bg-yellow-400 transition duration-300 shadow-2xl hover:shadow-yellow-400/25
          border-2 border-yellow-300 hover:scale-105 transform"
          onClick={() => window.location.href = '/#menu'}
        >
          Explore Our Menu
        </button>
      </div>
    </div>
  );
};

const commingSoonText = () => {
  return (
    <div className="absolute flex flex-col justify-center items-center text-center px-4 top-40">
      <h1>Comming Soon...</h1>
    </div>
  );
};

const HeroSection = () => {
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = React.useState(false);

  React.useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Force video properties for mobile compatibility
    video.setAttribute('webkit-playsinline', 'true');
    video.setAttribute('playsinline', 'true');
    video.muted = true;
    video.loop = true;
    
    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    
    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);

    const attemptPlay = async () => {
      try {
        // Wait for video to be ready
        if (video.readyState < 3) {
          await new Promise((resolve) => {
            video.addEventListener('canplay', resolve, { once: true });
          });
        }
        
        await video.play();
        setIsPlaying(true);
      } catch {
        console.log('Autoplay prevented, setting up interaction handlers');
        
        // If autoplay fails, set up interaction handlers
        const playOnInteraction = async () => {
          try {
            await video.play();
            setIsPlaying(true);
            
            // Remove all event listeners after successful play
            document.removeEventListener('touchstart', playOnInteraction);
            document.removeEventListener('click', playOnInteraction);
            document.removeEventListener('scroll', playOnInteraction);
            window.removeEventListener('scroll', playOnInteraction);
          } catch (playError) {
            console.error('Play failed:', playError);
          }
        };

        // Add multiple interaction event listeners for better coverage
        document.addEventListener('touchstart', playOnInteraction, { once: true, passive: true });
        document.addEventListener('click', playOnInteraction, { once: true });
        document.addEventListener('scroll', playOnInteraction, { once: true, passive: true });
        window.addEventListener('scroll', playOnInteraction, { once: true, passive: true });
      }
    };

    // Small delay to ensure video element is fully initialized
    const timer = setTimeout(attemptPlay, 100);

    return () => {
      clearTimeout(timer);
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
    };
  }, []);

  return (
    <div className="relative flex flex-col justify-between items-center w-full h-screen overflow-hidden bg-gradient-to-r from-[#1a0000] to-[#800000]">
      {/* Background Video */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        webkit-playsinline="true"
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{ 
          width: '100%', 
          height: '100%',
          objectFit: 'cover'
        }}
        onLoadedMetadata={(e) => {
          const video = e.target as HTMLVideoElement;
          video.play().catch(() => {
            console.log('Initial play attempt failed - waiting for user interaction');
          });
        }}
        onError={(e) => {
          const video = e.target as HTMLVideoElement;
          // Only log error if video actually failed to load (not just network hiccups)
          if (video.networkState === HTMLMediaElement.NETWORK_NO_SOURCE) {
            console.error('Video source not found');
          } else if (video.error && video.error.code === MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED) {
            console.error('Video format not supported');
          } else {
            console.log('Video loading issue (may still play successfully)');
          }
        }}
        onCanPlay={() => {
          // Clear any previous error state when video can play
          console.log('Video ready to play');
        }}
      >
        <source src="/hero-video.mp4" type="video/mp4" />
        <source src="/hero-video.webm" type="video/webm" />
      </video>

      {/* Single Dark Overlay - using rgba for better control */}
      <div 
        className="absolute inset-0 z-10" 
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
      ></div>

      {/* Show tap to play hint for mobile if video isn't playing - without additional overlay */}
      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center z-30 md:hidden">
          <div className="text-center text-white bg-black bg-opacity-50 px-6 py-4 rounded-lg">
            <div className="animate-pulse">
              <svg className="w-16 h-16 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
              <p className="text-sm">Tap to play video</p>
            </div>
          </div>
        </div>
      )}
      
      {/* Content container with higher z-index */}
      <div className="relative z-20 flex flex-col justify-between items-center w-full h-full">
        <HeaderSection />
        <HeroSectionWelcomeText />
      </div>
    </div>
  );
};

export default HeroSection;
