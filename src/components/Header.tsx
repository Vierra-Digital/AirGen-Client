import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-[#1a1a2e] text-white py-4 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <span className="text-xl sm:text-2xl font-bold">Air</span>
          <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-br from-[#10b981] to-[#3b82f6] rounded-sm flex items-center justify-center">
            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
            </svg>
          </div>
          <span className="text-xl sm:text-2xl font-bold">Gen</span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#how-it-works" className="text-white hover:underline underline-offset-4 transition-all duration-300">
            How It Works
          </a>
          <a href="#news-stories" className="text-white hover:underline underline-offset-4 transition-all duration-300">
            News Stories
          </a>
          <a href="#team" className="text-white hover:underline underline-offset-4 transition-all duration-300">
            Our Partners
          </a>
          <a href="#about" className="text-white hover:underline underline-offset-4 transition-all duration-300">
            About Us
          </a>
        </nav>

        {/* Contact Button */}
        <button className="hidden sm:block bg-[#1a1a2e] border border-white text-white px-4 sm:px-6 py-2 rounded-lg hover:bg-white hover:text-[#1a1a2e] transition-colors text-sm sm:text-base">
          Contact
        </button>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
