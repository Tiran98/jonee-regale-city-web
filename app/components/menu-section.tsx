'use client';
import React from 'react'
import { Bangers, Noto_Sans_Sinhala } from "next/font/google";
import Link from 'next/link';
import { popularMenuItems, PopularItem } from '../data/menuData';

const notoSinhala = Noto_Sans_Sinhala({
    weight: ["700"],
    subsets: ["sinhala"],
    variable: "--font-noto-sinhala",
});
const title = Bangers({ subsets: ["latin"], weight: "400" });

const MenuSection = () => {
  const MenuItem = ({ item }: { item: PopularItem }) => (
    <div className="group bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-sm border border-white/10 rounded-2xl p-4 hover:border-yellow-400/50 hover:shadow-lg hover:shadow-yellow-400/10 transition-all duration-300 hover:scale-[1.02]">
      {item.isSpecial && (
        <div className="flex items-center gap-2 mb-3">
          <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1">
            <span>⭐</span>
            <span>SPECIAL</span>
          </div>
        </div>
      )}
      
      <div className="mb-3">
        <h3 className="text-white font-bold text-lg md:text-xl mb-2 group-hover:text-yellow-400 transition-colors">
          {item.name}
        </h3>
        <p className="text-white/70 text-sm leading-relaxed">
          {item.description}
        </p>
      </div>
      
      <div className="flex justify-between items-end">
        <div className="text-xs text-white/50 uppercase tracking-wider">
          {item.category}
        </div>
        
        <div className="text-right">
          {item.price ? (
            <div className="text-yellow-400 font-bold text-xl">
              Rs. {item.price}
            </div>
          ) : (
            <div className="space-y-1">
              <div className="flex flex-col items-end gap-1">
                <div className="flex items-center gap-2 text-xs text-white/60">
                  <span>Small</span>
                  <span className="text-yellow-400 font-bold text-lg">Rs. {item.smallPrice}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-white/60">
                  <span>Large</span>
                  <span className="text-yellow-400 font-bold text-lg">Rs. {item.largePrice}</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <section id="menu" className='w-full min-h-screen bg-gradient-to-b from-[#1a0000] via-[#2d0000] to-[#800000] py-12 md:py-20'>
      <div className='container mx-auto px-4 max-w-7xl'>
        {/* Header */}
        <div className='text-center mb-12'>
          <h1 className={`text-white ${title.className} text-4xl md:text-6xl lg:text-7xl mb-6`}>
            OUR SPECIAL MENU
          </h1>
          <div className='flex justify-center items-center gap-4 mb-8'>
            <div className='w-16 md:w-24 h-0.5 bg-gradient-to-r from-transparent to-yellow-400'></div>
            <h2 className={`text-yellow-400 ${notoSinhala.className} text-lg md:text-xl font-bold`}>
              හිත පිරෙන්න
            </h2>
            <div className='w-16 md:w-24 h-0.5 bg-gradient-to-l from-transparent to-yellow-400'></div>
          </div>
          <p className='text-white/80 text-base md:text-lg max-w-3xl mx-auto leading-relaxed'>
            Discover our most beloved dishes, crafted with authentic Sri Lankan flavors and the freshest ingredients
          </p>
        </div>

        {/* Menu Items Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12'>
          {popularMenuItems.map((item, index) => (
            <MenuItem key={index} item={item} />
          ))}
        </div>

        {/* CTA Section */}
        <div className='text-center bg-black/30 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10'>
          <h3 className={`text-white ${title.className} text-2xl md:text-3xl mb-4`}>
            Craving for More?
          </h3>
          <p className='text-white/70 mb-8 text-base md:text-lg max-w-2xl mx-auto'>
            Explore our complete menu featuring over 100+ authentic Sri Lankan dishes, from traditional rice & curry to modern fusion creations.
          </p>
          
          <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
            <Link 
              href="/menu" 
              className='group inline-flex items-center gap-3 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 text-black font-bold py-4 px-8 rounded-2xl transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl w-full sm:w-auto justify-center'
            >
              <span className='text-lg'>View Full Menu</span>
              <svg className='w-5 h-5 group-hover:translate-x-1 transition-transform' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 7l5 5m0 0l-5 5m5-5H6' />
              </svg>
            </Link>
            
            <div className='flex items-center gap-2 text-white/60 text-sm'>
              <div className='w-2 h-2 bg-green-400 rounded-full animate-pulse'></div>
              <span>Available for Dine-in & Takeaway</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MenuSection
