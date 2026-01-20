'use client';
import React, { useState } from 'react'
import { Bangers, Noto_Sans_Sinhala } from "next/font/google";
import Link from 'next/link';

const notoSinhala = Noto_Sans_Sinhala({
    weight: ["700"],
    subsets: ["sinhala"],
    variable: "--font-noto-sinhala",
});
const title = Bangers({ subsets: ["latin"], weight: "400" });

const MenuSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const popularItems = [
    {
      category: "Fried Rice",
      items: [
        { name: "Jonee Special Fried Rice", price: "2000.00", description: "Our signature blend with special ingredients" },
        { name: "Chicken Fried Rice", smallPrice: "780.00", largePrice: "1200.00", description: "Classic chicken fried rice" },
        { name: "Seafood Fried Rice", smallPrice: "1100.00", largePrice: "1650.00", description: "Fresh seafood with aromatic basmati rice" },
        { name: "Mix Fried Rice", smallPrice: "980.00", largePrice: "1500.00", description: "Perfect combination of chicken, egg & vegetables" }
      ]
    },
    {
      category: "Fried Noodles",
      items: [
        { name: "Chicken Fried Noodles", smallPrice: "780.00", largePrice: "1200.00", description: "Stir-fried noodles with tender chicken" },
        { name: "Seafood Fried Noodles", smallPrice: "1100.00", largePrice: "1650.00", description: "Ocean fresh seafood with noodles" },
        { name: "Egg Fried Noodles", smallPrice: "650.00", largePrice: "1000.00", description: "Simple yet delicious egg noodles" }
      ]
    },
    {
      category: "Koththu",
      items: [
        { name: "Jonee Special Koththu", smallPrice: "1350.00", largePrice: "2000.00", description: "Our premium koththu with special ingredients" },
        { name: "Chicken Koththu", smallPrice: "780.00", largePrice: "1200.00", description: "Traditional chicken koththu" },
        { name: "Mix Koththu", smallPrice: "980.00", largePrice: "1500.00", description: "Combination koththu with multiple proteins" }
      ]
    },
    {
      category: "Special Items",
      items: [
        { name: "Nasiguran", smallPrice: "1200.00", largePrice: "1900.00", description: "Traditional Sri Lankan rice dish" },
        { name: "Chicken Biryani", price: "1250.00", description: "Aromatic basmati rice with spiced chicken" },
        { name: "Devilled Mutton with Rice", price: "2900.00", description: "Spicy mutton with fried rice & salad" }
      ]
    }
  ];

  return (
    <section id="menu" className='flex flex-col items-center w-full min-h-screen bg-gradient-to-b from-[#1a0000] via-[#2d0000] to-[#800000] py-8 md:py-16'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-8 md:mb-12'>
          <h1 className={`text-white ${title.className} text-3xl md:text-5xl mb-4`}>OUR SPECIAL MENU</h1>
          <div className='flex justify-center items-center gap-2 md:gap-4 mb-6 md:mb-8'>
            <hr className='w-10 md:w-20 border-white/50'/>
            <h2 className={`text-white ${notoSinhala.className} text-base md:text-lg`}>හිත පිරෙන්න</h2>
            <hr className='w-10 md:w-20 border-white/50'/>
          </div>
          <p className='text-white/80 text-base md:text-lg max-w-2xl mx-auto px-4'>
            Discover our most popular dishes crafted with authentic Sri Lankan flavors and fresh ingredients
          </p>
        </div>

        {/* Tab Navigation */}
        <div className='flex justify-center mb-6 md:mb-8 overflow-x-auto'>
          <div className='bg-black/30 backdrop-blur-sm rounded-2xl p-2 border border-white/10 min-w-max'>
            <div className='flex gap-1 md:gap-2'>
              {popularItems.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`px-3 md:px-6 py-2 md:py-3 rounded-xl font-semibold transition-all duration-300 text-sm md:text-base whitespace-nowrap ${
                    activeTab === index
                      ? 'bg-gradient-to-r from-yellow-600 to-yellow-500 text-black'
                      : 'text-white hover:bg-white/10'
                  }`}
                >
                  {category.category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Active Tab Content */}
        <div className='max-w-4xl mx-auto mb-8 md:mb-12'>
          <div className='bg-black/30 backdrop-blur-sm rounded-2xl p-4 md:p-8 border border-white/10 hover:border-white/30 transition-all duration-300'>
            <h3 className={`text-white ${title.className} text-2xl md:text-3xl mb-6 md:mb-8 text-center`}>
              {popularItems[activeTab].category}
            </h3>
            <div className='grid gap-4 md:gap-6'>
              {popularItems[activeTab].items.map((item, itemIndex) => (
                <div key={itemIndex} className='bg-white/5 rounded-xl p-4 md:p-6 hover:bg-white/10 transition-all duration-300'>
                  <div className='flex flex-col md:flex-row md:justify-between md:items-start mb-3 gap-2'>
                    <h4 className='text-white font-semibold text-lg md:text-xl flex-1'>{item.name}</h4>
                    <div className='text-yellow-400 font-bold'>
                      {item.price ? (
                        <span className='text-xl md:text-2xl'>Rs. {item.price}</span>
                      ) : (
                        <div className='flex flex-col items-start md:items-end min-w-[140px] md:min-w-[180px]'>
                          <div className='flex justify-between w-full mb-2 gap-6 md:gap-8'>
                            <span className='text-sm text-white/70'>Small</span>
                            <span className='text-sm text-white/70'>Large</span>
                          </div>
                          <div className='flex justify-between w-full gap-4'>
                            <span className='text-xl md:text-2xl'>Rs. {item.smallPrice}</span>
                            <span className='text-xl md:text-2xl'>Rs. {item.largePrice}</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  <p className='text-white/70 text-sm md:text-base'>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className='text-center'>
          <Link 
            href="/menu" 
            className='inline-flex items-center gap-2 md:gap-3 bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 text-black font-bold py-3 md:py-4 px-6 md:px-8 rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl'
          >
            <span className='text-base md:text-lg'>View Full Menu</span>
            <svg className='w-4 h-4 md:w-5 md:h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 7l5 5m0 0l-5 5m5-5H6' />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default MenuSection
