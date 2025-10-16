import React from 'react';
import Image from 'next/image';

const NewsStories: React.FC = () => {
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
    <section id="news-stories" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1a1a2e] mb-4">News Stories</h2>
          <h3 className="text-xl sm:text-2xl text-[#1a1a2e] mb-2 tracking-wider">Revolutionizing Energy Generation</h3>
          <p className="text-base sm:text-lg text-[#374151]">See the news articles we are featured in.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {newsItems.map((item, index) => (
            <div key={index} className="bg-[#f3f4f6] rounded-lg p-6 hover:shadow-lg transition-shadow text-center">
              <div className="mb-2">
                <div className="w-full h-24 mb-2 flex items-center justify-center">
                  <Image
                    src={item.logo}
                    alt={`${item.outlet} logo`}
                    width={300}
                    height={96}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              </div>
              <p className="text-[#374151] leading-relaxed text-center">&ldquo;{item.quote}&rdquo;</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsStories;
