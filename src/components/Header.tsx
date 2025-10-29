'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

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
            className="h-10 sm:h-11 w-auto"
          />
        </div>

        {/* Navigation - Desktop */}
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

        {/* Contact Button - Desktop */}
        <button className="hidden sm:block bg-transparent border border-white text-white px-4 sm:px-6 py-2 rounded-lg hover:bg-white hover:text-[#1a1a2e] transition-colors text-sm sm:text-base">
          Contact
        </button>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white z-50 relative"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[#1a1a2e] shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } z-40`}
      >
        <div className="pt-20 px-6 space-y-6">
          <a 
            href="#how-it-works" 
            className="block text-white hover:text-[#10b981] transition-colors text-lg font-medium"
            onClick={closeMobileMenu}
          >
            How It Works
          </a>
          <a 
            href="#news-stories" 
            className="block text-white hover:text-[#10b981] transition-colors text-lg font-medium"
            onClick={closeMobileMenu}
          >
            News Stories
          </a>
          <a 
            href="#team" 
            className="block text-white hover:text-[#10b981] transition-colors text-lg font-medium"
            onClick={closeMobileMenu}
          >
            Our Partners
          </a>
          <a 
            href="#about" 
            className="block text-white hover:text-[#10b981] transition-colors text-lg font-medium"
            onClick={closeMobileMenu}
          >
            About Us
          </a>
          <button className="w-full bg-transparent border border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-[#1a1a2e] transition-colors text-base font-medium">
            Contact
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
