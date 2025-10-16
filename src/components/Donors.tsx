import React from 'react';

const Donors: React.FC = () => {
  const donors = [
    "David Alas",
    "Dana Bizon", 
    "Steven Costa"
  ];

  return (
    <div className="text-center">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1a1a2e] mb-4">Our Donors</h2>
      <h3 className="text-xl text-[#374151] mb-8">Special Thanks To:</h3>
      
      <div className="flex justify-center items-center gap-8 sm:gap-12">
        {donors.map((donor, index) => (
          <p key={index} className="text-lg font-semibold text-[#374151]">{donor}</p>
        ))}
      </div>
    </div>
  );
};

export default Donors;
