'use client';

import React, { useEffect, useRef, useState } from 'react';

const AboutUs: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [leftVisible, setLeftVisible] = useState(false);
  const [rightVisible, setRightVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

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

    const leftObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setLeftVisible(true);
        }
      });
    }, { ...observerOptions, threshold: 0.2 });

    const rightObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setRightVisible(true);
        }
      });
    }, { ...observerOptions, threshold: 0.2 });

    if (sectionRef.current) {
      sectionObserver.observe(sectionRef.current);
    }
    if (leftRef.current) {
      leftObserver.observe(leftRef.current);
    }
    if (rightRef.current) {
      rightObserver.observe(rightRef.current);
    }

    return () => {
      if (sectionRef.current) {
        sectionObserver.unobserve(sectionRef.current);
      }
      if (leftRef.current) {
        leftObserver.unobserve(leftRef.current);
      }
      if (rightRef.current) {
        rightObserver.unobserve(rightRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 
            className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a1a2e] mb-4 sm:mb-6 transition-all duration-1000 ease-out ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            About Us
          </h2>
          <p 
            className={`text-base sm:text-lg text-[#374151] max-w-3xl mx-auto leading-relaxed px-4 transition-all duration-1000 ease-out ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-6'
            }`}
            style={{
              transitionDelay: isVisible ? '200ms' : '0ms',
            }}
          >
            Air-Gen is pioneering the future of clean energy generation through revolutionary technology 
            that harvests electricity directly from atmospheric humidity. Our mission is to provide 
            sustainable, limitless power solutions that work anywhere on Earth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          <div ref={leftRef} className="space-y-4 md:space-y-6">
            <h3 
              className={`text-xl sm:text-2xl font-bold text-[#1a1a2e] transition-all duration-1000 ease-out ${
                leftVisible 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 -translate-x-8'
              }`}
            >
              Our Mission
            </h3>
            <p 
              className={`text-sm sm:text-base text-[#374151] leading-relaxed transition-all duration-1000 ease-out ${
                leftVisible 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 -translate-x-8'
              }`}
              style={{
                transitionDelay: leftVisible ? '100ms' : '0ms',
              }}
            >
              To revolutionize energy generation by creating clean, sustainable power solutions 
              that harness the natural humidity in our atmosphere. We believe in a future where 
              energy is abundant, clean, and accessible to everyone, everywhere.
            </p>
            
            <h3 
              className={`text-xl sm:text-2xl font-bold text-[#1a1a2e] transition-all duration-1000 ease-out ${
                leftVisible 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 -translate-x-8'
              }`}
              style={{
                transitionDelay: leftVisible ? '300ms' : '0ms',
              }}
            >
              Our Vision
            </h3>
            <p 
              className={`text-sm sm:text-base text-[#374151] leading-relaxed transition-all duration-1000 ease-out ${
                leftVisible 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 -translate-x-8'
              }`}
              style={{
                transitionDelay: leftVisible ? '400ms' : '0ms',
              }}
            >
              A world powered by atmospheric energy - where devices, communities, and entire 
              cities run on clean electricity generated from the air we breathe. No fuel, 
              no emissions, no limitations.
            </p>
          </div>

          <div ref={rightRef} className="space-y-4 md:space-y-6">
            <h3 
              className={`text-xl sm:text-2xl font-bold text-[#1a1a2e] transition-all duration-1000 ease-out ${
                rightVisible 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 translate-x-8'
              }`}
            >
              Our Technology
            </h3>
            <p 
              className={`text-sm sm:text-base text-[#374151] leading-relaxed transition-all duration-1000 ease-out ${
                rightVisible 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 translate-x-8'
              }`}
              style={{
                transitionDelay: rightVisible ? '100ms' : '0ms',
              }}
            >
              Using ultra-thin protein nanowires and carbon electrodes, our technology converts 
              atmospheric humidity into continuous electrical current. This breakthrough enables 
              power generation in any climate, from deserts to rainforests.
            </p>
            
            <h3 
              className={`text-xl sm:text-2xl font-bold text-[#1a1a2e] transition-all duration-1000 ease-out ${
                rightVisible 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 translate-x-8'
              }`}
              style={{
                transitionDelay: rightVisible ? '300ms' : '0ms',
              }}
            >
              Our Impact
            </h3>
            <p 
              className={`text-sm sm:text-base text-[#374151] leading-relaxed transition-all duration-1000 ease-out ${
                rightVisible 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 translate-x-8'
              }`}
              style={{
                transitionDelay: rightVisible ? '400ms' : '0ms',
              }}
            >
              From powering small devices to energizing entire communities, our technology 
              offers scalable solutions for consumer electronics, off-grid applications, 
              and large-scale infrastructure projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
