import React from 'react';
import Image from 'next/image';

const Team: React.FC = () => {
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
    <div>
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a1a2e] mb-8 sm:mb-12 md:mb-16 lg:mb-20">Meet The Team</h2>
      
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 md:gap-12 lg:gap-20">
        {teamMembers.map((member, index) => (
          <div key={index} className="text-center flex flex-col items-center">
            <div className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 mx-auto mb-4 sm:mb-6 rounded-full overflow-hidden shadow-lg">
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
