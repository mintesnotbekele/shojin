'use client';

import React from 'react';

const QuoteBlock = () => {
  return (
    <div className="bg-[#D8DCD2] w-full px-4 py-6 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-[120px] leading-[1] tracking-normal uppercase font-faculty text-[#7B1F2A]">
          “THE MOST{' '}
          <span className="text-[#30605B]">UNIQUE</span>
          <br />
          CHESS EXPERIENCE”
        </h1>
        <p className="text-[#7B1F2A] mt-4 text-xl font-faculty">
          Max Mustermann, Grossmeister
        </p>
      </div>
    </div>
  );
};

export default QuoteBlock;
