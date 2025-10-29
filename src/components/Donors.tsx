import React from 'react';

const Donors: React.FC = () => {
  const donors = [
    "David Alas",
    "Dana Bizon", 
    "Steven Costa"
  ];

  return (
    <div className="text-center">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a1a2e] mb-3 sm:mb-4">Our Donors</h2>
      <h3 className="text-base sm:text-lg md:text-xl text-[#374151] mb-6 sm:mb-8">Special Thanks To:</h3>
      
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-12">
        {donors.map((donor, index) => (
          <p key={index} className="text-sm sm:text-base md:text-lg font-semibold text-[#374151]">{donor}</p>
        ))}
      </div>
    </div>
  );
};

export default Donors;
