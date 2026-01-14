'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    return () => {
      if (contentRef.current) {
        observer.unobserve(contentRef.current);
      }
    };
  }, []);

  return (
    <section className="relative min-h-screen bg-[#1a1a2e] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero/background.png"
          alt="Air-Gen conceptual illustration showing water droplets, green fibrous material, and electrical discharges"
          fill
          className="object-cover opacity-80"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e]/20 via-[#16213e]/10 to-[#0f172a]/20"></div>
      </div>

      {/* Content */}
      <div ref={contentRef} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-32 sm:pt-40 md:pt-48 lg:pt-56 pb-12 sm:pb-16 md:pb-20">
        <div className="max-w-3xl">
          <h1 
            className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight transition-all duration-1000 ease-out ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
            style={{
              transitionDelay: isVisible ? '0ms' : '0ms',
            }}
          >
            Where Science Meets Revolution
          </h1>
          <p 
            className={`text-base sm:text-lg md:text-xl lg:text-2xl text-white mb-6 sm:mb-8 leading-relaxed transition-all duration-1000 ease-out ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-6'
            }`}
            style={{
              transitionDelay: isVisible ? '200ms' : '0ms',
            }}
          >
            Air-Gen turns the surrounding air into a limitless source of clean energy.
          </p>
          <a 
            href="https://youtu.be/d8eZy4QUuGc?si=0dVCsFeusxRjx7Eh" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={`inline-block bg-[#1a1a2e] border border-white text-white px-5 sm:px-6 md:px-8 py-3 sm:py-3.5 md:py-4 rounded-lg text-sm sm:text-base md:text-lg font-semibold hover:bg-white hover:text-[#1a1a2e] transition-all duration-500 touch-manipulation min-h-[44px] flex items-center justify-center ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-6'
            }`}
            style={{
              transitionDelay: isVisible ? '400ms' : '0ms',
            }}
          >
            Our Story
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
