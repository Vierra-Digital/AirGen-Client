'use client';

import React, { useEffect, useRef, useState } from 'react';

const Donors: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [donorVisible, setDonorVisible] = useState<boolean[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);
  const donorRefs = useRef<(HTMLParagraphElement | null)[]>([]);

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

    const donorObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = parseInt(entry.target.getAttribute('data-index') || '0');
          setDonorVisible((prev) => {
            const newState = [...prev];
            newState[index] = true;
            return newState;
          });
        }
      });
    }, { ...observerOptions, threshold: 0.2 });

    if (sectionRef.current) {
      sectionObserver.observe(sectionRef.current);
    }

    donorRefs.current.forEach((donor) => {
      if (donor) {
        donorObserver.observe(donor);
      }
    });

    return () => {
      if (sectionRef.current) {
        sectionObserver.unobserve(sectionRef.current);
      }
      donorRefs.current.forEach((donor) => {
        if (donor) {
          donorObserver.unobserve(donor);
        }
      });
    };
  }, []);

  const donors = [
    "David Alas",
    "Dana Bizon", 
    "Steven Costa"
  ];

  return (
    <div ref={sectionRef} className="text-center">
      <h2 
        className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a1a2e] mb-3 sm:mb-4 transition-all duration-1000 ease-out ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
        }`}
      >
        Our Donors
      </h2>
      <h3 
        className={`text-base sm:text-lg md:text-xl text-[#374151] mb-6 sm:mb-8 transition-all duration-1000 ease-out ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-6'
        }`}
        style={{
          transitionDelay: isVisible ? '200ms' : '0ms',
        }}
      >
        Special Thanks To:
      </h3>
      
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-12">
        {donors.map((donor, index) => (
          <p 
            key={index}
            ref={(el) => {
              donorRefs.current[index] = el;
            }}
            data-index={index}
            className={`text-sm sm:text-base md:text-lg font-semibold text-[#374151] transition-all duration-700 ease-out ${
              donorVisible[index]
                ? 'opacity-100 translate-y-0 scale-100'
                : 'opacity-0 translate-y-6 scale-95'
            }`}
            style={{
              transitionDelay: donorVisible[index] ? `${index * 150}ms` : '0ms',
              willChange: donorVisible[index] ? 'auto' : 'transform, opacity',
            }}
          >
            {donor}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Donors;
