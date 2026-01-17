'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const Competitions: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [cardVisible, setCardVisible] = useState<boolean[]>([]);
  const sectionRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

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

    const cardObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = parseInt(entry.target.getAttribute('data-index') || '0');
          setCardVisible((prev) => {
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

    cardRefs.current.forEach((card) => {
      if (card) {
        cardObserver.observe(card);
      }
    });

    return () => {
      if (sectionRef.current) {
        sectionObserver.unobserve(sectionRef.current);
      }
      cardRefs.current.forEach((card) => {
        if (card) {
          cardObserver.unobserve(card);
        }
      });
    };
  }, []);

  const competitions = [
    {
      title: "Minute Pitch Competition",
      prize: "First Prize - $1,000",
      date: "October 2025",
      location: "UMass Amherst",
      description: "Alex Lombardi delivered the winning presentation in the campus Minute Pitch Competition, hosted by the Berthiaume Center for Entrepreneurship. In just 60 seconds, the pitch showcased Air-Gen's revolutionary technology that generates electricity from humidity, wowing judges with its potential to shape the future of sustainable energy.",
      link: "https://www.umass.edu/engineering/news/lombardi-minute-pitch",
      image: null,
      type: "pitch"
    },
    {
      title: "Campus Hult Prize",
      prize: "$5,000",
      date: "November 2025",
      location: "UMass Amherst",
      description: "The Air-Gen team secured victory in the Campus Hult Prize competition, recognizing innovative solutions to global challenges. This campus win qualifies us for the national competition and highlights our commitment to transforming renewable energy technology into viable entrepreneurial solutions that can make a positive impact worldwide.",
      link: null,
      image: "/images/team/IMG_0869.jpeg",
      type: "competition"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="competitions" 
      className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white to-[#f9fafb]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 
            className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a1a2e] mb-3 sm:mb-4 transition-all duration-1000 ease-out ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
            style={{
              transitionDelay: isVisible ? '0ms' : '0ms',
            }}
          >
            Competitions & Awards
          </h2>
          <h3 
            className={`text-lg sm:text-xl md:text-2xl text-[#1a1a2e] mb-2 tracking-wider transition-all duration-1000 ease-out ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-6'
            }`}
            style={{
              transitionDelay: isVisible ? '150ms' : '0ms',
            }}
          >
            Recognizing Excellence
          </h3>
          <p 
            className={`text-sm sm:text-base md:text-lg text-[#374151] transition-all duration-1000 ease-out ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-6'
            }`}
            style={{
              transitionDelay: isVisible ? '300ms' : '0ms',
            }}
          >
            Celebrating our achievements in research and innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
          {competitions.map((competition, index) => (
            <div 
              key={index}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              data-index={index}
              className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden border border-[#e5e7eb] group ${
                cardVisible[index]
                  ? 'opacity-100 translate-y-0 scale-100'
                  : 'opacity-0 translate-y-12 scale-95'
              }`}
              style={{
                transitionDelay: cardVisible[index] ? `${index * 200}ms` : '0ms',
                willChange: cardVisible[index] ? 'auto' : 'transform, opacity',
              }}
            >
              {/* Image or Icon Section */}
              {competition.image ? (
                <div className="relative w-full h-64 sm:h-72 md:h-80 overflow-hidden group/image">
                  <Image
                    src={competition.image}
                    alt={`${competition.title} - Team Photo`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover/image:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent transition-opacity duration-300 group-hover/image:opacity-75"></div>
                </div>
              ) : (
                <div className="w-full h-64 sm:h-72 md:h-80 bg-gradient-to-br from-[#1a1a2e] to-[#16213e] flex items-center justify-center group/icon overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#10b981]/0 via-[#10b981]/10 to-[#10b981]/0 transform -translate-x-full group-hover/icon:translate-x-full transition-transform duration-1000"></div>
                  <div className="text-center p-6 relative z-10">
                    <svg 
                      className="w-20 h-20 sm:w-24 sm:h-24 mx-auto text-white mb-4 transition-transform duration-500 group-hover/icon:scale-110 group-hover/icon:rotate-12" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                    <p className="text-white text-lg sm:text-xl font-semibold transition-transform duration-300 group-hover/icon:scale-105">Minute Pitch</p>
                  </div>
                </div>
              )}

              {/* Content Section */}
              <div className="p-6 sm:p-8">
                <div className="flex items-start justify-between mb-3">
                  <div className="w-full">
                    <h3 className="text-xl sm:text-2xl font-bold text-[#1a1a2e] mb-2 transition-colors duration-300 group-hover:text-[#10b981]">
                      {competition.title}
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="inline-block bg-[#10b981] text-white text-xs sm:text-sm font-semibold px-3 py-1 rounded-full transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
                        {competition.prize}
                      </span>
                      <span className="inline-block bg-[#f3f4f6] text-[#374151] text-xs sm:text-sm font-medium px-3 py-1 rounded-full">
                        {competition.date}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-[#374151] leading-relaxed mb-4">
                  {competition.description}
                </p>

                {competition.link && (
                  <a
                    href={competition.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-[#10b981] hover:text-[#059669] font-semibold text-sm sm:text-base transition-all duration-300 group/link"
                  >
                    Read More
                    <svg 
                      className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform duration-300" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Competitions;
