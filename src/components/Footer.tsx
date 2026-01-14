import React from 'react';
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1a1a2e] text-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6 md:gap-8 mb-8 sm:mb-12">
          {/* Air-Gen Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <Image
                src="/images/logo.png"
                alt="Air-Gen Logo"
                width={160}
                height={60}
                className="h-12 w-auto"
              />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-3">Contact Us</h3>
              <div className="space-y-2 text-sm sm:text-base text-[#9ca3af]">
                <p>admin@air-gen.tech</p>
                <p>+1 (555) 123-4567</p>
                <p>Amherst, MA</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Quick Links</h3>
            <div className="space-y-2">
              <a href="#how-it-works" className="block text-sm sm:text-base text-[#9ca3af] hover:text-white hover:underline underline-offset-4 transition-all duration-300">How It Works</a>
              <a href="#news-stories" className="block text-sm sm:text-base text-[#9ca3af] hover:text-white hover:underline underline-offset-4 transition-all duration-300">News Stories</a>
              <a href="#competitions" className="block text-sm sm:text-base text-[#9ca3af] hover:text-white hover:underline underline-offset-4 transition-all duration-300">Competitions</a>
              <a href="#team" className="block text-sm sm:text-base text-[#9ca3af] hover:text-white hover:underline underline-offset-4 transition-all duration-300">Our Partners</a>
              <a href="#about" className="block text-sm sm:text-base text-[#9ca3af] hover:text-white hover:underline underline-offset-4 transition-all duration-300">About Us</a>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Resources</h3>
            <div className="space-y-2">
              <a href="#" className="block text-sm sm:text-base text-[#9ca3af] hover:text-white hover:underline underline-offset-4 transition-all duration-300">Research Papers</a>
              <a href="#" className="block text-sm sm:text-base text-[#9ca3af] hover:text-white hover:underline underline-offset-4 transition-all duration-300">Technology Overview</a>
              <a href="#" className="block text-sm sm:text-base text-[#9ca3af] hover:text-white hover:underline underline-offset-4 transition-all duration-300">FAQs</a>
              <a href="#" className="block text-sm sm:text-base text-[#9ca3af] hover:text-white hover:underline underline-offset-4 transition-all duration-300">Press Kit</a>
            </div>
          </div>

          {/* Follow Us & Newsletter */}
          <div className="space-y-4 sm:space-y-6">
            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Follow Us</h3>
              <div className="flex space-x-3">
                <a href="#" className="w-10 h-10 bg-[#374151] rounded-full flex items-center justify-center hover:bg-[#10b981] transition-colors cursor-pointer">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-[#374151] rounded-full flex items-center justify-center hover:bg-[#10b981] transition-colors cursor-pointer">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="https://www.youtube.com/@Air-Gen" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#374151] rounded-full flex items-center justify-center hover:bg-[#10b981] transition-colors cursor-pointer">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3">Newsletter</h3>
              <p className="text-xs sm:text-sm text-[#9ca3af] mb-2 sm:mb-3">Stay updated on our latest developments</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="flex-1 px-3 sm:px-3 py-3 bg-[#374151] text-white placeholder-[#9ca3af] rounded-l-lg border border-[#4b5563] focus:outline-none focus:border-[#10b981] text-sm min-h-[44px]"
                />
                <button className="bg-[#1a1a2e] border border-white text-white px-4 sm:px-5 py-3 rounded-r-lg hover:bg-white hover:text-[#1a1a2e] transition-colors text-sm sm:text-base touch-manipulation min-h-[44px]">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#374151] pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-[#9ca3af] text-xs sm:text-sm">©2025 Air-Gen. All rights reserved.</p>
            <p className="text-[#9ca3af] text-xs sm:text-sm">
              Website Powered by <a href="https://vierradev.com" target="_blank" rel="noopener noreferrer" className="text-[#10b981] hover:text-white transition-colors">Vierra Digital</a>
            </p>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-6">
              <a href="#" className="text-xs sm:text-sm text-[#9ca3af] hover:text-white hover:underline underline-offset-4 transition-all duration-300">Privacy Policy</a>
              <a href="#" className="text-xs sm:text-sm text-[#9ca3af] hover:text-white hover:underline underline-offset-4 transition-all duration-300">Terms of Service</a>
              <a href="#" className="text-xs sm:text-sm text-[#9ca3af] hover:text-white hover:underline underline-offset-4 transition-all duration-300">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
