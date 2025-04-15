// components/AboutGame.tsx
import Image from 'next/image';
import React from 'react';
import abt1 from "@/assets/alphabets/abt1.png"
import abt2 from "@/assets/alphabets/abt2.png"
import abt3 from "@/assets/alphabets/abt3.png"


import alph2 from "@/assets/alphabets/D01.png"
import alph1 from "@/assets/alphabets/S10.png"
import alph3 from "@/assets/alphabets/S11.png"

import alph4 from "@/assets/alphabets/S11.png"

const AboutGame = () => {
  return (
    <section className="bg-[#114348] text-white text-center px-6 py-12 relative">
      {/* Heading */}
      <h2 className="text-xl tracking-widest font-medium mb-4">✦ ABOUT THE GAME ✦</h2>

      {/* Paragraph */}
      <p className="text-sm max-w-md mx-auto leading-relaxed text-[#d4d4d4]">
        <span className="font-bold text-white">Lorem ipsum</span> dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore <span className="font-bold text-white">magna aliqua</span>.
        <br /><br />
        Ut enim ad minim veniam, quis nostrud exercitation <span className="font-bold text-white">ullamco laboris</span> nisi ut aliquip ex
        ea commodo consequat.
      </p>

      {/* Game Icon / Logo */}
      <div className="mt-8 mb-6 flex justify-center">
       
          
          
      <Image src={alph3} alt='alphabet charachter'/>
      <Image src={alph2} alt='alphabet charachter'/>
          
          <Image src={alph1} alt='alphabet charachter'/>
          <Image src={alph4} alt='alphabet charachter'/>
        
      </div>

      {/* Buttons */}
      <div className="flex justify-center gap-4 mb-12">
        <button className="bg-black text-white px-6 py-2 rounded-md text-sm hover:bg-opacity-80 transition">JOIN BETA</button>
        <button className="bg-black text-white px-6 py-2 rounded-md text-sm hover:bg-opacity-80 transition">LEARN MORE</button>
      </div>

      {/* Decorative Bottom Shapes */}
      <div className="absolute  left-0 w-full flex justify-between">
        <div className="w-[25%] h-[60px] ">
            <Image src={abt1} alt='about 1'/>
        </div>
        <div className="w-[25%] h-[60px] ">
             <Image src={abt2} alt='about 1'/>
        </div>
        <div className="w-[25%] h-[60px] ">
        <Image src={abt3} alt='about 1'/>
        </div>
      </div>
    </section>
  );
};

export default AboutGame;
