import React from 'react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="pt-0 pb-16 px-6 text-center bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        <div className="w-full max-w-[800px] flex justify-center -mt-12 md:-mt-20">
          <Image 
            src="/logoSpring.png" 
            alt="Spring Star HVAC Logo" 
            width={800} 
            height={400}
            className="w-full h-auto object-contain"
            priority
          />
        </div>

        <div className="max-w-4xl mx-auto -mt-16 md:-mt-32 relative z-10 text-center">
          
          <p className="text-lg md:text-xl text-slate-700 font-medium mb-10 leading-relaxed">
            Spring Star HVAC provides professional HVAC, mechanical, and utility solutions for commercial, industrial, and regulated facilities. We deliver reliable, energy-efficient, and quality-focused services tailored to both everyday comfort and mission-critical operations.
          </p>

        </div>
      </div>
    </section>
  );
}