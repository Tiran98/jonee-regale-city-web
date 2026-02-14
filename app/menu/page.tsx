"use client";

import React, { useState } from 'react';
import { Bangers, Noto_Sans_Sinhala } from "next/font/google";
import Link from 'next/link';
import Image from 'next/image';
import { fullMenuData, menuCategories, MenuItem, MenuSection } from '../data/menuData';

const notoSinhala = Noto_Sans_Sinhala({
    weight: ["700"],
    subsets: ["sinhala"],
    variable: "--font-noto-sinhala",
});
const title = Bangers({ subsets: ["latin"], weight: "400" });

const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState<string>("fried-rice");

  const MenuItemCard = ({ item }: { item: MenuItem }) => (
    <div className="group bg-gradient-to-br from-white/5 to-white/2 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:border-yellow-400/50 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
      {/* Mobile Layout */}
      <div className="block sm:hidden">
        <div className="mb-3">
          <div className="flex items-start gap-2 mb-2">
            <h4 className="text-white font-semibold text-base leading-tight group-hover:text-yellow-400 transition-colors flex-1">
              {item.name}
            </h4>
            {item.isSpecial && (
              <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-xs font-bold px-2 py-0.5 rounded-full flex items-center gap-1 shrink-0">
                <span>⭐</span>
                <span>Special</span>
              </div>
            )}
          </div>
        </div>
        <div className="text-right">
          {item.price ? (
            <div className="text-yellow-400 font-bold text-xl">
              Rs. {item.price}
            </div>
          ) : (
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-white/60 text-sm">Small</span>
                <span className="text-yellow-400 font-bold text-lg">Rs. {item.smallPrice}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white/60 text-sm">Large</span>
                <span className="text-yellow-400 font-bold text-lg">Rs. {item.largePrice}</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden sm:flex justify-between items-center gap-4">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h4 className="text-white font-semibold text-sm md:text-base leading-tight group-hover:text-yellow-400 transition-colors">
              {item.name}
            </h4>
            {item.isSpecial && (
              <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-xs font-bold px-2 py-0.5 rounded-full flex items-center gap-1 shrink-0">
                <span>⭐</span>
                <span>Special</span>
              </div>
            )}
          </div>
        </div>
        
        <div className="shrink-0">
          {item.price ? (
            <div className="text-yellow-400 font-bold text-lg md:text-xl">
              Rs. {item.price}
            </div>
          ) : (
            <div className="bg-black/40 rounded-lg px-3 py-2 border border-white/10">
              <div className="flex items-center justify-center gap-3 text-yellow-400 font-bold text-sm md:text-base">
                <div className="text-center">
                  <div className="text-white/60 text-xs mb-0.5">S</div>
                  <div>Rs. {item.smallPrice}</div>
                </div>
                <div className="w-px h-8 bg-white/20"></div>
                <div className="text-center">
                  <div className="text-white/60 text-xs mb-0.5">L</div>
                  <div>Rs. {item.largePrice}</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  const MenuSectionCard = ({ section }: { section: MenuSection }) => (
    <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-white/10">
      <h3 className={`text-white ${title.className} text-xl md:text-2xl mb-4 md:mb-6 text-center pb-2 border-b border-white/20`}>
        {section.title}
      </h3>
      <div className="grid grid-cols-1 gap-3">
        {section.items.map((item: MenuItem, itemIndex: number) => (
          <MenuItemCard key={itemIndex} item={item} />
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a0000] via-[#2d0000] to-[#800000]">
      {/* Header with Logo */}
      <div className="bg-black/50 backdrop-blur-md sticky top-0 z-50 border-b border-white/10">
        <div className="container mx-auto px-4 py-3 md:py-4">
          {/* Logo Section */}
          <div className="flex justify-center items-center mb-4">
            <Link href="/" className="bg-white/10 backdrop-blur-sm rounded-2xl p-3 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
              <Image
                src="/Horizontal Logo.png"
                alt="Jonee Regale City"
                width={200}
                height={60}
                className="w-auto h-12 md:h-16 object-contain"
                priority
              />
            </Link>
          </div>
          
          {/* Navigation */}
          <div className="flex justify-between items-center">
            <Link href="/" className="hidden sm:flex text-white hover:text-yellow-400 transition-colors items-center gap-2 text-sm md:text-base">
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span>Back to Home</span>
            </Link>
            
            {/* Mobile: Empty div to maintain layout */}
            <div className="sm:hidden"></div>
            
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6 md:py-8">
        {/* Welcome Message for QR Users */}
        <div className="text-center mb-6 md:mb-8 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 backdrop-blur-sm rounded-2xl p-4 border border-yellow-400/20">
          <div className="flex items-center justify-center gap-2 mb-2">
            <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            <h2 className="text-yellow-400 font-bold text-lg">Welcome to Our Digital Menu</h2>
          </div>
          <p className="text-white/80 text-sm">Browse our authentic Sri Lankan dishes • Order at your table</p>
        </div>

        {/* Title */}
        <div className="text-center mb-8 md:mb-12">
          <h1 className={`text-white ${title.className} text-3xl md:text-5xl lg:text-6xl mb-4`}>FULL MENU</h1>
          <div className='flex justify-center items-center gap-2 md:gap-4 mb-6 md:mb-8'>
            <hr className='w-10 md:w-20 border-white/50'/>
            <h2 className={`text-white ${notoSinhala.className} text-lg md:text-xl`}>සම්පූර්ණ මෙනුව</h2>
            <hr className='w-10 md:w-20 border-white/50'/>
          </div>
          <p className='text-white/80 text-sm md:text-base max-w-2xl mx-auto'>
            Explore our complete collection of authentic Sri Lankan dishes
          </p>
        </div>

        {/* Category Navigation */}
        <div className="mb-6 md:mb-8">
          {/* Mobile Scrollable Categories */}
          <div className="block sm:hidden mb-4">
            <div className="overflow-x-auto scrollbar-hide">
              <div className="flex gap-2 px-4 py-2 min-w-max">
                {menuCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-4 py-3 rounded-xl font-medium transition-all duration-300 whitespace-nowrap text-sm flex items-center gap-2 shrink-0 ${
                      activeCategory === category.id
                        ? 'bg-gradient-to-r from-yellow-600 to-yellow-500 text-black shadow-lg'
                        : 'bg-black/40 text-white border border-white/10'
                    }`}
                  >
                    <span className="text-lg">{category.icon}</span>
                    <span>{category.name}</span>
                  </button>
                ))}
              </div>
            </div>
            <div className="text-center text-white/50 text-xs mt-2 flex items-center justify-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
              </svg>
              Swipe to browse categories
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>

          {/* Desktop Grid Categories */}
          <div className="hidden sm:block">
            <div className="bg-black/40 backdrop-blur-lg rounded-2xl p-2 border border-white/10 mx-auto max-w-fit">
              <div className="grid grid-cols-2 sm:flex gap-1 justify-center">
                {menuCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-3 md:px-4 py-2 md:py-3 rounded-xl font-medium transition-all duration-300 whitespace-nowrap text-xs md:text-sm flex items-center justify-center gap-2 ${
                      activeCategory === category.id
                        ? 'bg-gradient-to-r from-yellow-600 to-yellow-500 text-black shadow-lg'
                        : 'bg-white/5 text-white hover:bg-white/10 hover:text-yellow-400'
                    }`}
                  >
                    <span className="text-sm">{category.icon}</span>
                    <span className="hidden sm:inline">{category.name}</span>
                    <span className="sm:hidden text-xs">{category.name.split(' ')[0]}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Menu Content */}
        <div className="bg-black/30 backdrop-blur-sm rounded-2xl md:rounded-3xl p-4 md:p-6 lg:p-8 border border-white/10">
          {fullMenuData[activeCategory] && (
            <div>
              <div className="text-center mb-6 md:mb-8">
                <h2 className={`text-white ${title.className} text-2xl md:text-3xl lg:text-4xl mb-2 flex items-center justify-center gap-3`}>
                  <span className="text-2xl">{fullMenuData[activeCategory].icon}</span>
                  {fullMenuData[activeCategory].title}
                </h2>
                {fullMenuData[activeCategory].subtitle && (
                  <p className="text-yellow-400 text-sm md:text-base lg:text-lg font-medium">
                    {fullMenuData[activeCategory].subtitle}
                  </p>
                )}
              </div>

              <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
                {fullMenuData[activeCategory].sections.map((section: MenuSection, sectionIndex: number) => (
                  <MenuSectionCard key={sectionIndex} section={section} />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Call to Action for Orders */}
        <div className="text-center mt-8 bg-gradient-to-r from-green-500/10 to-blue-500/10 backdrop-blur-sm rounded-2xl p-6 border border-green-400/20">
          <div className="flex items-center justify-center gap-2 mb-3">
            <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21L9 10l3 3 .707-1.707a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V16a2 2 0 01-2 2h-1C9.716 18 3 11.284 3 5z" />
            </svg>
            <h3 className="text-green-400 font-bold text-lg">Ready to Order?</h3>
          </div>
          <p className="text-white/80 mb-4 text-sm md:text-base">
            Call our staff or visit the counter to place your order
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <div className="bg-white/10 rounded-lg px-4 py-2 border border-white/20">
              <span className="text-white/60 text-sm">Table Service Available</span>
            </div>
            <div className="bg-white/10 rounded-lg px-4 py-2 border border-white/20">
              <span className="text-white/60 text-sm">Order at Counter</span>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-8 md:mt-12 p-4 md:p-6 bg-black/30 backdrop-blur-sm rounded-xl md:rounded-2xl border border-white/10">
          <div className="max-w-2xl mx-auto">
            <p className="text-white/80 mb-2 text-sm md:text-base">
              Above all prices are subject to <b>10% service charges</b>
            </p>
            <p className="text-yellow-400 font-medium text-sm md:text-base mb-4">
              All prices are in Sri Lankan Rupees (LKR)
            </p>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center items-center text-xs md:text-sm text-white/60">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Fresh ingredients daily</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span>Halal certified</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span>Made to order</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuPage;