import React from 'react';
import Image from 'next/image';

const Header: React.FC = () => {
  return (
    <header className="py-4 px-4 sm:px-6 absolute top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="Air-Gen Logo"
            width={140}
            height={56}
            className="h-11 w-auto"
          />
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
        <button className="hidden sm:block bg-transparent border border-white text-white px-4 sm:px-6 py-2 rounded-lg hover:bg-white hover:text-[#1a1a2e] transition-colors text-sm sm:text-base">
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
