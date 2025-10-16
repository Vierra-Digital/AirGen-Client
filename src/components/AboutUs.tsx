import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1a1a2e] mb-6">About Us</h2>
          <p className="text-lg text-[#374151] max-w-3xl mx-auto leading-relaxed">
            Air-Gen is pioneering the future of clean energy generation through revolutionary technology 
            that harvests electricity directly from atmospheric humidity. Our mission is to provide 
            sustainable, limitless power solutions that work anywhere on Earth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-[#1a1a2e]">Our Mission</h3>
            <p className="text-[#374151] leading-relaxed">
              To revolutionize energy generation by creating clean, sustainable power solutions 
              that harness the natural humidity in our atmosphere. We believe in a future where 
              energy is abundant, clean, and accessible to everyone, everywhere.
            </p>
            
            <h3 className="text-2xl font-bold text-[#1a1a2e]">Our Vision</h3>
            <p className="text-[#374151] leading-relaxed">
              A world powered by atmospheric energy - where devices, communities, and entire 
              cities run on clean electricity generated from the air we breathe. No fuel, 
              no emissions, no limitations.
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-[#1a1a2e]">Our Technology</h3>
            <p className="text-[#374151] leading-relaxed">
              Using ultra-thin protein nanowires and carbon electrodes, our technology converts 
              atmospheric humidity into continuous electrical current. This breakthrough enables 
              power generation in any climate, from deserts to rainforests.
            </p>
            
            <h3 className="text-2xl font-bold text-[#1a1a2e]">Our Impact</h3>
            <p className="text-[#374151] leading-relaxed">
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
