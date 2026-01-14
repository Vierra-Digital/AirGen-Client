'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const Team: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [memberVisible, setMemberVisible] = useState<boolean[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);
  const memberRefs = useRef<(HTMLDivElement | null)[]>([]);

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

    const memberObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = parseInt(entry.target.getAttribute('data-index') || '0');
          setMemberVisible((prev) => {
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

    memberRefs.current.forEach((member) => {
      if (member) {
        memberObserver.observe(member);
      }
    });

    return () => {
      if (sectionRef.current) {
        sectionObserver.unobserve(sectionRef.current);
      }
      memberRefs.current.forEach((member) => {
        if (member) {
          memberObserver.unobserve(member);
        }
      });
    };
  }, []);

  const teamMembers = [
    {
      name: "Alex Lombardi",
      role: "Co-Founder",
      image: "/images/team/AlexLombardi.png"
    },
    {
      name: "Milo Loyall",
      role: "Co-Founder", 
      image: "/images/team/MiloLoyall.png"
    },
    {
      name: "Brian Wang",
      role: "Co-Founder",
      image: "/images/team/BrianWang.png"
    },
    {
      name: "Vincent Frye",
      role: "Lab Director",
      image: "/images/team/Ellipse 5975.png"
    },
    {
      name: "Aaron Lo",
      role: "Lab Assistant",
      image: "/images/team/AaronLo.png"
    }
  ];

  return (
    <div ref={sectionRef}>
      <h2 
        className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a1a2e] mb-8 sm:mb-12 md:mb-16 lg:mb-20 transition-all duration-1000 ease-out ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
        }`}
      >
        Meet The Team
      </h2>
      
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 md:gap-12 lg:gap-20">
        {teamMembers.map((member, index) => (
          <div 
            key={index}
            ref={(el) => {
              memberRefs.current[index] = el;
            }}
            data-index={index}
            className={`text-center flex flex-col items-center transition-all duration-700 ease-out ${
              memberVisible[index]
                ? 'opacity-100 translate-y-0 scale-100'
                : 'opacity-0 translate-y-8 scale-95'
            }`}
            style={{
              transitionDelay: memberVisible[index] ? `${index * 100}ms` : '0ms',
              willChange: memberVisible[index] ? 'auto' : 'transform, opacity',
            }}
          >
            <div className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 mx-auto mb-4 sm:mb-6 rounded-full overflow-hidden shadow-lg transition-transform duration-300 hover:scale-110">
              <Image
                src={member.image}
                alt={`${member.name} - ${member.role}`}
                width={144}
                height={144}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-base sm:text-lg md:text-xl font-semibold text-[#374151] mb-1 sm:mb-2 text-center">{member.name}</h3>
            <p className="text-sm sm:text-base text-[#6b7280] text-center">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
