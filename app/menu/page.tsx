"use client";

import React, { useState } from 'react';
import { Bangers, Noto_Sans_Sinhala } from "next/font/google";
import Link from 'next/link';

const notoSinhala = Noto_Sans_Sinhala({
    weight: ["700"],
    subsets: ["sinhala"],
    variable: "--font-noto-sinhala",
});
const title = Bangers({ subsets: ["latin"], weight: "400" });

type MenuItem = {
  name: string;
  price?: string;
  smallPrice?: string;
  largePrice?: string;
};

type MenuSection = {
  title: string;
  items: MenuItem[];
};

type MenuCategory = {
  title: string;
  subtitle?: string;
  sections: MenuSection[];
};

type MenuData = {
  [key: string]: MenuCategory;
};

const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState<string>("fried-rice");

  const menuData: MenuData = {
    "salads-soups": {
      title: "Salads & Soups",
      sections: [
        {
          title: "Fresh Salads",
          items: [
            { name: "Vegetable Salad", price: "750.00" },
            { name: "Coleslaw Salad", price: "850.00" },
            { name: "Cucumber & Tomato Salad", price: "750.00" },
            { name: "Tomato & Onion Salad", price: "750.00" },
            { name: "Mix Salad", price: "1000.00" },
            { name: "Singapore Chicken Salad", price: "1250.00" },
            { name: "Jonee Special Chicken Salad", price: "1800.00" }
          ]
        },
        {
          title: "Hearty Soups",
          items: [
            { name: "Clear Vegetable Soup", price: "700.00" },
            { name: "Sweet Corn Vegetable Soup", price: "750.00" },
            { name: "Cream of Tomato Soup", price: "700.00" },
            { name: "Cream of Chicken Soup", price: "800.00" },
            { name: "Cream of Mushroom Soup", price: "950.00" },
            { name: "Mix Noodles Soup", price: "950.00" },
            { name: "Tom Young Soup", price: "950.00" },
            { name: "Chicken & Sweet Corn Soup", price: "850.00" },
            { name: "Sea Food Clear Soup", price: "950.00" },
            { name: "Chicken Soup", price: "800.00" }
          ]
        }
      ]
    },
    "fried-rice": {
      title: "Fried Rice & Noodles",
      sections: [
        {
          title: "Fried Rice (Basmati)",
          items: [
            { name: "Jonee Special", price: "2000.00" },
            { name: "Mixed", smallPrice: "980.00", largePrice: "1500.00" },
            { name: "Sea Food", smallPrice: "1100.00", largePrice: "1650.00" },
            { name: "Prawns", smallPrice: "1200.00", largePrice: "1800.00" },
            { name: "Chicken", smallPrice: "780.00", largePrice: "1200.00" },
            { name: "Fish", smallPrice: "780.00", largePrice: "1200.00" },
            { name: "Sausage", smallPrice: "750.00", largePrice: "1150.00" },
            { name: "Egg", smallPrice: "650.00", largePrice: "1000.00" },
            { name: "Vegetable", smallPrice: "600.00", largePrice: "900.00" },
            { name: "Nasiguran", smallPrice: "1200.00", largePrice: "1900.00" },
            { name: "Chicken Biryani", price: "1250.00" }
          ]
        },
        {
          title: "Fried Noodles",
          items: [
            { name: "Jonee Special", price: "2000.00" },
            { name: "Mixed", smallPrice: "980.00", largePrice: "1500.00" },
            { name: "Sea Food", smallPrice: "1100.00", largePrice: "1650.00" },
            { name: "Prawns", smallPrice: "1200.00", largePrice: "1800.00" },
            { name: "Chicken", smallPrice: "780.00", largePrice: "1200.00" },
            { name: "Fish", smallPrice: "780.00", largePrice: "1200.00" },
            { name: "Sausage", smallPrice: "750.00", largePrice: "1150.00" },
            { name: "Egg", smallPrice: "650.00", largePrice: "1000.00" },
            { name: "Vegetable", smallPrice: "600.00", largePrice: "900.00" }
          ]
        }
      ]
    },
    "koththu": {
      title: "Koththu",
      sections: [
        {
          title: "Traditional Koththu",
          items: [
            { name: "Jonee Special Koththu", smallPrice: "1350.00", largePrice: "2000.00" },
            { name: "Cheese Koththu", smallPrice: "900.00", largePrice: "1350.00" },
            { name: "Cheese & Chicken Koththu", smallPrice: "1200.00", largePrice: "1800.00" },
            { name: "Mix Koththu", smallPrice: "980.00", largePrice: "1500.00" },
            { name: "Seafood Koththu", smallPrice: "1100.00", largePrice: "1650.00" },
            { name: "Prawns Koththu", smallPrice: "1200.00", largePrice: "1800.00" },
            { name: "Chicken Koththu", smallPrice: "780.00", largePrice: "1200.00" },
            { name: "Fish Koththu", smallPrice: "780.00", largePrice: "1200.00" },
            { name: "Sausages Koththu", smallPrice: "750.00", largePrice: "1150.00" },
            { name: "Egg Koththu", smallPrice: "650.00", largePrice: "1000.00" },
            { name: "Vegetable Koththu", smallPrice: "600.00", largePrice: "900.00" }
          ]
        }
      ]
    },
    "main-dishes": {
      title: "Main Dishes",
      subtitle: "Most served with Steamed Rice or Vegetables",
      sections: [
        {
          title: "Chicken Dishes",
          items: [
            { name: "Roast Chicken (Full 1kg)", price: "2800.00" },
            { name: "Roast Chicken (Half 500g)", price: "1900.00" },
            { name: "Singapore Chilli Chicken", price: "1800.00" },
            { name: "Sweet and Sour Chicken", price: "1800.00" },
            { name: "Battered Chicken, Hot Garlic Sauce", price: "1800.00" },
            { name: "Chicken Devilled", price: "1800.00" }
          ]
        },
        {
          title: "Fish & Cuttle Fish",
          items: [
            { name: "Sweet and Sour Fish", price: "1800.00" },
            { name: "Devilled Fish", price: "1800.00" },
            { name: "Cuttle Fish Hot Butter", price: "2000.00" },
            { name: "Fried Calamari with French Fries", price: "2000.00" }
          ]
        },
        {
          title: "Prawns Side Dish",
          items: [
            { name: "Batter Prawns with Garlic Sauce", price: "2500.00" },
            { name: "Hot Butter Prawns", price: "2500.00" },
            { name: "Devilled Prawns", price: "2500.00" }
          ]
        }
      ]
    },
    "special-menu": {
      title: "Jonee's Special Menu",
      sections: [
        {
          title: "Chef's Specials",
          items: [
            { name: "Jonee Special Mix Grilled with Egg Fried Rice", price: "2800.00" },
            { name: "Devilled Mutton with Fried Rice and Salad", price: "2900.00" },
            { name: "Grilled Chicken (Whole Leg) with Fried Rice and Salad", price: "2200.00" },
            { name: "Chowmen Chicken", price: "1700.00" }
          ]
        }
      ]
    },
    "sri-lankan": {
      title: "Sri Lankan Corner",
      sections: [
        {
          title: "Traditional Rice & Curry",
          items: [
            { name: "Rice & Curry Vegetable (3 Curry)", price: "750.00" },
            { name: "Rice & Curry Fish or Egg", price: "1000.00" },
            { name: "Rice & Curry Chicken or Omelet", price: "1200.00" },
            { name: "Steamed Rice (Samba)", price: "350.00" },
            { name: "Steamed Rice (Basmati)", price: "500.00" }
          ]
        }
      ]
    }
  };

  const categories = [
    { id: "fried-rice", name: "Fried Rice & Noodles", icon: "" },
    { id: "koththu", name: "Koththu", icon: "" },
    { id: "main-dishes", name: "Main Dishes", icon: "" },
    { id: "special-menu", name: "Special Menu", icon: "" },
    { id: "salads-soups", name: "Salads & Soups", icon: "" },
    { id: "sri-lankan", name: "Sri Lankan Corner", icon: "" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a0000] via-[#2d0000] to-[#800000]">
      {/* Header */}
      <div className="bg-black/50 backdrop-blur-md sticky top-0 z-50 border-b border-white/10">
        <div className="container mx-auto px-4 py-3 md:py-4 flex justify-between items-center">
          <Link href="/" className="text-white hover:text-yellow-400 transition-colors flex items-center gap-2 text-sm md:text-base">
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="hidden sm:inline">Back to Home</span>
            <span className="sm:hidden">Back</span>
          </Link>
          
        </div>
      </div>

      <div className="container mx-auto px-4 py-6 md:py-8">
        {/* Title */}
        <div className="text-center mb-8 md:mb-12">
          <h1 className={`text-white ${title.className} text-3xl md:text-6xl mb-4`}>FULL MENU</h1>
          <div className='flex justify-center items-center gap-2 md:gap-4 mb-6 md:mb-8'>
            <hr className='w-10 md:w-20 border-white/50'/>
            <h2 className={`text-white ${notoSinhala.className} text-lg md:text-xl`}>සම්පූර්ණ මෙනුව</h2>
            <hr className='w-10 md:w-20 border-white/50'/>
          </div>
        </div>

        {/* Category Navigation */}
        <div className="mb-6 md:mb-8 overflow-x-auto pb-2">
          <div className="flex gap-2 justify-start md:justify-center min-w-max px-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 md:px-6 py-2 md:py-3 rounded-full font-medium transition-all duration-300 whitespace-nowrap text-sm md:text-base ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-yellow-600 to-yellow-500 text-black shadow-lg'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                <span className="mr-1 md:mr-2">{category.icon}</span>
                <span className="hidden sm:inline">{category.name}</span>
                <span className="sm:hidden">{category.name.split(' ')[0]}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Menu Content */}
        <div className="bg-black/30 backdrop-blur-sm rounded-2xl md:rounded-3xl p-4 md:p-8 border border-white/10">
          {menuData[activeCategory] && (
            <div>
              <div className="text-center mb-6 md:mb-8">
                <h2 className={`text-white ${title.className} text-2xl md:text-4xl mb-2`}>
                  {menuData[activeCategory].title}
                </h2>
                {menuData[activeCategory].subtitle && (
                  <p className="text-yellow-400 text-base md:text-lg font-medium">
                    {menuData[activeCategory].subtitle}
                  </p>
                )}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
                {menuData[activeCategory].sections.map((section: MenuSection, sectionIndex: number) => (
                  <div key={sectionIndex} className="bg-white/5 rounded-xl md:rounded-2xl p-4 md:p-6 border border-white/10 hover:border-white/20 transition-all duration-300">
                    <h3 className={`text-white ${title.className} text-xl md:text-2xl mb-4 md:mb-6 text-center border-b border-white/20 pb-2`}>
                      {section.title}
                    </h3>
                    <div className="space-y-3">
                      {section.items.map((item: MenuItem, itemIndex: number) => (
                        <div key={itemIndex} className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 gap-2 sm:gap-4">
                          <div className="flex-1">
                            <span className="text-white font-medium text-sm md:text-base">{item.name}</span>
                          </div>
                          <div className="text-yellow-400 font-bold">
                            {item.price ? (
                              <span className='text-lg md:text-2xl'>Rs. {item.price}</span>
                            ) : (
                              <div className='flex flex-col items-start sm:items-end min-w-[140px] md:min-w-[180px]'>
                                <div className='flex justify-between w-full mb-1 md:mb-2 gap-4 md:gap-6'>
                                  <span className='text-xs md:text-sm text-white/70'>Small</span>
                                  <span className='text-xs md:text-sm text-white/70'>Large</span>
                                </div>
                                <div className='flex justify-between w-full gap-2 md:gap-4'>
                                  <span className='text-lg md:text-2xl'>Rs. {item.smallPrice}</span>
                                  <span className='text-lg md:text-2xl'>Rs. {item.largePrice}</span>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer Note */}
        <div className="text-center mt-8 md:mt-12 p-4 md:p-6 bg-black/30 backdrop-blur-sm rounded-xl md:rounded-2xl border border-white/10">
          <p className="text-white/80 mb-2 text-sm md:text-base">Above all prices are subject to <b>10% service charges</b></p>
          <p className="text-yellow-400 font-medium text-sm md:text-base">All prices are in Sri Lankan Rupees (LKR)</p>
        </div>
      </div>
    </div>
  );
};

export default MenuPage;