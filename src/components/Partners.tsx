import React from 'react';

const Partners: React.FC = () => {
  const partners = [
    {
      name: "MIT",
      description: "Massachusetts Institute of Technology",
      type: "Research Partner"
    },
    {
      name: "Stanford University",
      description: "Department of Materials Science",
      type: "Academic Partner"
    },
    {
      name: "Clean Energy Ventures",
      description: "Venture Capital Partner",
      type: "Investment Partner"
    },
    {
      name: "National Science Foundation",
      description: "Research Funding Partner",
      type: "Funding Partner"
    },
    {
      name: "Tesla Energy",
      description: "Clean Energy Technology Partner",
      type: "Technology Partner"
    },
    {
      name: "Google X",
      description: "Innovation Lab Partner",
      type: "Innovation Partner"
    }
  ];

  return (
    <section id="partners" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1a1a2e] mb-4">Our Partners</h2>
          <p className="text-lg text-[#374151]">Collaborating with leading institutions and organizations to advance clean energy technology</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
            <div key={index} className="bg-[#f3f4f6] rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#10b981] to-[#3b82f6] rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-lg font-bold">
                    {partner.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-[#1a1a2e] mb-2">{partner.name}</h3>
                <p className="text-[#374151] mb-2">{partner.description}</p>
                <span className="inline-block bg-[#10b981] text-white text-sm px-3 py-1 rounded-full">
                  {partner.type}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
