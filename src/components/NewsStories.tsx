'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const NewsStories: React.FC = () => {
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

  const newsItems = [
    {
      outlet: "The Boston Globe",
      quote: "Air-Gen's breakthrough technology could revolutionize how we think about renewable energy sources.",
      logo: "/images/news-stories/BostonGlobe.png"
    },
    {
      outlet: "Smithsonian",
      quote: "This innovative approach to energy generation represents a significant leap forward in sustainable technology.",
      logo: "/images/news-stories/Smithsonian.png"
    },
    {
      outlet: "The Guardian",
      quote: "Air-Gen's air-to-energy technology offers hope for a cleaner, more sustainable future.",
      logo: "/images/news-stories/TheGuardian.png"
    },
    {
      outlet: "BBC",
      quote: "The potential applications of this technology span from small devices to large-scale infrastructure.",
      logo: "/images/news-stories/BBC.png"
    },
    {
      outlet: "Popular Science",
      quote: "Air-Gen's protein nanowire technology opens new possibilities for clean energy generation.",
      logo: "/images/news-stories/PopularScience.png"
    },
    {
      outlet: "VICE",
      quote: "This revolutionary approach to energy could change the way we power our world.",
      logo: "/images/news-stories/Vice.png"
    }
  ];

  return (
    <section ref={sectionRef} id="news-stories" className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 
            className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a1a2e] mb-3 sm:mb-4 transition-all duration-1000 ease-out ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            News Stories
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
            Revolutionizing Energy Generation
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
            See the news articles we are featured in.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
          {newsItems.map((item, index) => (
            <div 
              key={index}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              data-index={index}
              className={`bg-[#f3f4f6] rounded-lg p-5 sm:p-6 hover:shadow-lg transition-all duration-500 text-center ${
                cardVisible[index]
                  ? 'opacity-100 translate-y-0 scale-100'
                  : 'opacity-0 translate-y-8 scale-95'
              }`}
              style={{
                transitionDelay: cardVisible[index] ? `${index * 100}ms` : '0ms',
                willChange: cardVisible[index] ? 'auto' : 'transform, opacity',
              }}
            >
              <div className="mb-2">
                <div className="w-full h-20 sm:h-24 mb-2 flex items-center justify-center">
                  <Image
                    src={item.logo}
                    alt={`${item.outlet} logo`}
                    width={300}
                    height={96}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              </div>
              <p className="text-sm sm:text-base text-[#374151] leading-relaxed text-center">&ldquo;{item.quote}&rdquo;</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsStories;
