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
        <div className="  overflow-hidden w-[280px] sm:w-[300px] ">
          <div className="relative w-full h-[560px]">
            <Image
              src={posterImg}
              alt="Souvenir Poster"
              fill
              className="object-cover"
            />
          </div>
          {/* <div className="p-4 text-black">
            <h3 className="text-sm font-semibold tracking-wide">SOUVENIR POSTER</h3>
            <p className="text-sm text-lime-600 mt-1">Physical Product</p>
            <p className="text-right text-sm mt-2">€12.00</p>
          </div> */}
        </div>

        {/* Product 2 - Coffee Table Book */}
        <div className="shadow-lg overflow-hidden w-[280px] sm:w-[300px] relative mt-30">


          <div className="relative w-full h-[500px] ">
            <Image
              src={bookImg}
              alt="Sho'jin Book"
              fill
              className="object-cover"
            />
          </div>
          {/* <div className="p-4 text-black">
            <h3 className="text-sm font-semibold tracking-wide">
              THE ART OF SHO’JIN COFFEE TABLE BOOK
            </h3>
            <p className="text-sm text-lime-600 mt-1">Physical Product</p>
            <p className="text-right text-sm mt-2">€39.90</p>
          </div> */}
        </div>
      </div>
    </section>
  )
}
