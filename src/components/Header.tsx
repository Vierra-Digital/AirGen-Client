'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

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
          <a href="#competitions" className="text-white hover:underline underline-offset-4 transition-all duration-300">
            Competitions
          </a>
          <a href="#team" className="text-white hover:underline underline-offset-4 transition-all duration-300">
            Our Partners
          </a>
          <a href="#about" className="text-white hover:underline underline-offset-4 transition-all duration-300">
            About Us
          </a>
        </nav>

        {/* Contact Button - Desktop */}
        <button className="hidden sm:block bg-transparent border border-white text-white px-4 sm:px-6 py-2.5 rounded-lg hover:bg-white hover:text-[#1a1a2e] transition-colors text-sm sm:text-base touch-manipulation min-h-[44px]">
          Contact
        </button>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white z-50 relative p-2 -mr-2 touch-manipulation"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
          aria-expanded={isMobileMenuOpen}
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

      {/* Mobile Menu Backdrop */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={closeMobileMenu}
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 max-w-[85vw] bg-[#1a1a2e] shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } z-40 overflow-y-auto`}
      >
        <div className="pt-20 px-6 pb-8 space-y-4">
          <a 
            href="#how-it-works" 
            className="block text-white hover:text-[#10b981] transition-colors text-lg font-medium py-2 touch-manipulation"
            onClick={closeMobileMenu}
          >
            How It Works
          </a>
          <a 
            href="#news-stories" 
            className="block text-white hover:text-[#10b981] transition-colors text-lg font-medium py-2 touch-manipulation"
            onClick={closeMobileMenu}
          >
            News Stories
          </a>
          <a 
            href="#competitions" 
            className="block text-white hover:text-[#10b981] transition-colors text-lg font-medium py-2 touch-manipulation"
            onClick={closeMobileMenu}
          >
            Competitions
          </a>
          <a 
            href="#team" 
            className="block text-white hover:text-[#10b981] transition-colors text-lg font-medium py-2 touch-manipulation"
            onClick={closeMobileMenu}
          >
            Our Partners
          </a>
          <a 
            href="#about" 
            className="block text-white hover:text-[#10b981] transition-colors text-lg font-medium py-2 touch-manipulation"
            onClick={closeMobileMenu}
          >
            About Us
          </a>
          <button className="w-full bg-transparent border border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-[#1a1a2e] transition-colors text-base font-medium touch-manipulation mt-4">
            Contact
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
