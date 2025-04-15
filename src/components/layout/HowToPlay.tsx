import React from 'react';
import rook from '@/assets/rook.png';

import knight from '@/assets/knight.png';
import bishop from '@/assets/bishop.png';
import Image from 'next/image';

const HowToPlay = () => {
  return (
    <section className="bg-[#0c1c1a] text-white px-6 py-16 text-center">
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-medium tracking-wide mb-14">
        HOW TO PLAY – KEY FEATURES
      </h2>

      {/* Cards Grid */}
      <div className="flex flex-col md:flex-row justify-center gap-8 max-w-6xl mx-auto">
        {/* BASIC */}
        <div className="bg-[#2c7471] rounded-xl p-6 w-full md:w-1/3 flex flex-col justify-between items-center text-sm leading-relaxed">
          <h3 className="uppercase tracking-widest text-base mb-4 border-b border-white pb-1 w-full text-center">
            Basic
          </h3>
          <p className="text-[#e0f2f1] mb-6">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque 
            <strong> laudantium</strong>, totam rem aperiam.
            <br /><br />
            <strong>Eaque ipsa</strong> quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </p>
          <div className="text-6xl mb-2">
            <Image src={knight} alt='knight'/>
            </div>
        </div>

        {/* UPGRADES */}
        <div className="bg-[#2c7471] rounded-xl p-6 w-full md:w-1/3 flex flex-col justify-between items-center text-sm leading-relaxed">
          <h3 className="uppercase tracking-widest text-base mb-4 border-b border-white pb-1 w-full text-center">
            Upgrades
          </h3>
          <p className="text-[#e0f2f1] mb-6">
            At vero eos et <strong>accusamus</strong> et iusto odio dignissimos ducimus qui blanditiis praesentium 
            voluptatum <strong>deleniti atque</strong> corrupti quos <strong>dolores et quas</strong> molestias excepturi sint occaecati.
            <br /><br />
            Cupiditate non provident, similique sunt in <strong>culpa</strong> qui officia deserunt mollitia animi, 
            est laborum et dolorum fuga.
            <br /><br />
            Et harum quidem rerum facilis est et expedita distinctio.
          </p>
          <div className="text-6xl mb-2">
          <Image src={bishop} alt='bishop'/>
          </div>
        </div>

        {/* SPECIALS */}
        <div className="bg-[#2c7471] rounded-xl p-6 w-full md:w-1/3 flex flex-col justify-between items-center text-sm leading-relaxed">
          <h3 className="uppercase tracking-widest text-base mb-4 border-b border-white pb-1 w-full text-center">
            Specials
          </h3>
          <p className="text-[#e0f2f1] mb-6">
            <strong>Nam libero tempore</strong>, cum soluta nobis est eligendi optio cumque nihil impedit quo minus 
            id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.
            <br /><br />
            <strong>Temporibus autem</strong> quibusdam et aut officiis <strong>debitis</strong> aut rerum necessitatibus saepe 
            eveniet ut et voluptates repudiandae sint et molestiae non recusandae.
          </p>
          <div className="text-6xl mb-2">
          <Image src={rook} alt='rook'/>
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <div className="mt-16">
        <button className="bg-[#a7202c] hover:bg-[#901a26] transition px-8 py-3 rounded-full text-white text-lg font-medium tracking-wide">
          TRY THE GAME
        </button>
      </div>
    </section>
  );
};

export default HowToPlay;
