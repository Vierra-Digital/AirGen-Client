'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const HowItWorks: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [diagramVisible, setDiagramVisible] = useState(false);
  const [textVisible, setTextVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const diagramRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    }, observerOptions);

    const diagramObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setDiagramVisible(true);
        }
      });
    }, { ...observerOptions, threshold: 0.2 });

    const textObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTextVisible(true);
        }
      });
    }, { ...observerOptions, threshold: 0.2 });

    if (sectionRef.current) {
      sectionObserver.observe(sectionRef.current);
    }
    if (diagramRef.current) {
      diagramObserver.observe(diagramRef.current);
    }
    if (textRef.current) {
      textObserver.observe(textRef.current);
    }

    return () => {
      if (sectionRef.current) {
        sectionObserver.unobserve(sectionRef.current);
      }
      if (diagramRef.current) {
        diagramObserver.unobserve(diagramRef.current);
      }
      if (textRef.current) {
        textObserver.unobserve(textRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} id="how-it-works" className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 
          className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a1a2e] mb-8 sm:mb-12 md:mb-16 transition-all duration-1000 ease-out ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          How It Works
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
          {/* Left Side - Diagram */}
          <div ref={diagramRef} className="space-y-6 md:space-y-8">
            <div 
              className={`bg-[#1a1a2e] rounded-lg p-6 sm:p-8 transition-all duration-1000 ease-out ${
                diagramVisible 
                  ? 'opacity-100 translate-x-0 scale-100' 
                  : 'opacity-0 -translate-x-12 scale-95'
              }`}
            >
              <Image
                src="/images/diagrams/diagram.png"
                alt="Air-Gen Technology Diagram showing Water Moisture, Porous Top Electrode, Nanoporous Membrane, and Full Bottom Electrode"
                width={500}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Right Side - Text */}
          <div ref={textRef} className="space-y-4 md:space-y-6">
            <h3 
              className={`text-2xl sm:text-3xl font-bold text-[#1a1a2e] transition-all duration-1000 ease-out ${
                textVisible 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 translate-x-12'
              }`}
              style={{
                transitionDelay: textVisible ? '100ms' : '0ms',
              }}
            >
              The Future of Energy
            </h3>
            <p 
              className={`text-base sm:text-lg text-[#374151] leading-relaxed transition-all duration-1000 ease-out ${
                textVisible 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 translate-x-12'
              }`}
              style={{
                transitionDelay: textVisible ? '200ms' : '0ms',
              }}
            >
              Air-Gen turns the natural humidity in the air into a constant source of clean electricity. 
              At the heart of our technology are ultra-thin protein nanowires paired with carbon electrodes. 
              When water molecules in the air interact with these nanowires, they generate a tiny but steady 
              electrical current. No fuel, no sunlight, no moving parts required. This process is highly 
              efficient and works from the Sahara Desert to the Amazon rainforest, and can be scaled from 
              powering small devices today with the potential to energize entire systems in the future. 
              Air-Gen opens the door to new energy solutions for consumer electronics, off-grid communities, 
              and large-scale infrastructure, offering a limitless renewable power source made possible by 
              the air we breathe every day.
            </p>
            <div 
              className={`space-y-3 md:space-y-4 transition-all duration-1000 ease-out ${
                textVisible 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 translate-x-12'
              }`}
              style={{
                transitionDelay: textVisible ? '400ms' : '0ms',
              }}
            >
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-[#10b981] rounded-full flex-shrink-0"></div>
                <span className="text-sm sm:text-base text-[#374151]">No fuel required.</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-[#10b981] rounded-full flex-shrink-0"></div>
                <span className="text-sm sm:text-base text-[#374151]">Works in any climate.</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-[#10b981] rounded-full flex-shrink-0"></div>
                <span className="text-sm sm:text-base text-[#374151]">Scalable technology.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
