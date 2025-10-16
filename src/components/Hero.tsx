import React from 'react';
import Image from 'next/image';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-[#1a1a2e] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero/background.png"
          alt="Air-Gen conceptual illustration showing water droplets, green fibrous material, and electrical discharges"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e]/80 via-[#16213e]/70 to-[#0f172a]/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-20 sm:pt-32 pb-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Where Science Meets Revolution
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white mb-8 leading-relaxed">
            Air-Gen turns the surrounding air into a limitless source of clean energy.
          </p>
          <a href="#about" className="inline-block bg-[#1a1a2e] border border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-white hover:text-[#1a1a2e] transition-colors">
            Our Story
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
