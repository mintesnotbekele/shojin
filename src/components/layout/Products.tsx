'use client'

import Image from 'next/image'
import posterImg from '@/assets/poster.png'
import bookImg from '@/assets/book.png'
import bgChess from '@/assets/chessgrid.png' // ⬅️ your background image path

export default function Products() {
  return (
    
    <section
      
      className="min-h-screen flex items-center justify-center py-16 px-4 bg-center bg-cover"
      style={{
        backgroundImage: `url(${bgChess.src})`,
      }}
    >
      <div className="flex gap-10">
        {/* Product 1 - Poster */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden w-[280px] sm:w-[300px]">
          <div className="relative w-full h-[360px]">
            <Image
              src={posterImg}
              alt="Souvenir Poster"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-4 text-black">
            <h3 className="text-sm font-semibold tracking-wide">SOUVENIR POSTER</h3>
            <p className="text-sm text-lime-600 mt-1">Physical Product</p>
            <p className="text-right text-sm mt-2">€12.00</p>
          </div>
        </div>

        {/* Product 2 - Coffee Table Book */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden w-[280px] sm:w-[300px] relative">
          {/* M badge */}
          <div className="absolute top-2 right-2 z-10">
            <div className="w-8 h-8 rounded-full bg-gray-800 border border-gray-700 shadow-md flex items-center justify-center">
              <span className="text-lime-400 font-bold text-sm">M</span>
            </div>
          </div>

          <div className="relative w-full h-[360px]">
            <Image
              src={bookImg}
              alt="Sho'jin Book"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-4 text-black">
            <h3 className="text-sm font-semibold tracking-wide">
              THE ART OF SHO’JIN COFFEE TABLE BOOK
            </h3>
            <p className="text-sm text-lime-600 mt-1">Physical Product</p>
            <p className="text-right text-sm mt-2">€39.90</p>
          </div>
        </div>
      </div>
    </section>
  )
}
