'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Simulate loading time - you can adjust this duration
    const timer = setTimeout(() => {
      setIsVisible(false);
      // Add a small delay before calling onLoadingComplete to allow fade out animation
      setTimeout(onLoadingComplete, 500);
    }, 3000); // Show loading for 3 seconds

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  if (!isVisible) {
    return (
      <div className="fixed inset-0 z-50 bg-gradient-to-br from-[#1a0000] to-[#800000] flex items-center justify-center transition-opacity duration-500 opacity-0 pointer-events-none">
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-br from-[#1a0000] to-[#800000] flex items-center justify-center">
      {/* Logo Container */}
      <div className="relative">
        <div className="logo-container">
          <Image
            src="/Logo.png"
            alt="Jonee Regale City Logo"
            width={120}
            height={120}
            className="logo-image"
            priority
          />
        </div>
      </div>

      <style jsx>{`
        .logo-container {
          animation: logoAnimation 2s ease-in-out infinite;
        }

        .logo-image {
          filter: blur(0px);
          animation: logoBlur 2s ease-in-out infinite;
        }

        @keyframes logoAnimation {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          25% {
            transform: scale(1.1);
            opacity: 0.7;
          }
          50% {
            transform: scale(0.9);
            opacity: 0.4;
          }
          75% {
            transform: scale(1.05);
            opacity: 0.8;
          }
        }

        @keyframes logoBlur {
          0%, 100% {
            filter: blur(0px) brightness(1);
          }
          25% {
            filter: blur(2px) brightness(1.2);
          }
          50% {
            filter: blur(4px) brightness(0.8);
          }
          75% {
            filter: blur(1px) brightness(1.1);
          }
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;