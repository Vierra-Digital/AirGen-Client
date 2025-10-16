import React from 'react';
import Team from './Team';
import Donors from './Donors';

const TeamAndDonors: React.FC = () => {
  return (
    <section id="team" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Team Section */}
        <div className="mb-20 sm:mb-24">
          <Team />
        </div>
        
        {/* Donors Section - Centered */}
        <div className="flex justify-center">
          <div className="max-w-md">
            <Donors />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamAndDonors;
