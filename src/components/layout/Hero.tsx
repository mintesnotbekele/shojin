'use client'

import Image from 'next/image'
import centerImage from '@/assets/icons/centerpiece.png'

export default function Hero() {
  return (
    <section className="relative flex items-center justify-center min-h-screen bg-[#1E2320] text-white px-6">
     

      {/* Main Content */}
      <div className="relative max-w-6xl w-full flex flex-col items-center justify-center">
        {/* Background Shape with Image */}
        <div className="relative w-[800px] h-[380px]  mx-auto">
          <Image
            src={centerImage}
            alt="center piece"
            style={{width: '60%', margin: 'auto', height: '600px'}}
            
            className="z-0"
          />

          {/* Top Left Text */}
          <p style={{fontSize: '70px'}} className="absolute -top-2 -left-32 text-left  sm:text-4xl font-light leading-snug text-gray-200 whitespace-nowrap">
            ...THE ART OF<br />PRACTICING...
          </p>

          {/* Top Right Text */}
          <p style={{fontSize: '40px'}} className="absolute bottom-1 right-[-220px] text-right text-lg sm:text-xl leading-snug text-gray-200 whitespace-nowrap">
            ...CONSCIOUSNESS IN THIS<br />WAY IS CALLED...
          </p>
        </div>

        {/* Title */}
        <h1 style={{zIndex: 10}} className="mt-10 text-[130px] sm:text-[160px] md:text-[200px] font-serif text-gray-200">
          SH<span className="tracking-normal">O’</span>JIN
        </h1>
      </div>
    </section>
  )
}
