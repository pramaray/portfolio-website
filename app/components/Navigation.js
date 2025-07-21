'use client';

import { useState, useEffect } from 'react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-cream shadow-md' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <div className="flex items-center">
            <div className="w-6 h-6 bg-orange-500 transform rotate-45 mr-3"></div>
            <div className="text-xl font-bold text-emerald-800 font-display">
              Prama Ray
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-cream-100 hover:text-yellow-400 transition-colors font-medium"
            >
              About me
            </button>
            <button
              onClick={() => scrollToSection('resume')}
              className="text-cream-100 hover:text-yellow-400 transition-colors font-medium"
            >
              Resume
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-cream-100 hover:text-yellow-400 transition-colors font-medium"
            >
              Work
            </button>
            <button
              className="bg-yellow-500 text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-yellow-400 transition-colors"
              onClick={() => scrollToSection('contact')}
            >
              Get in touch
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-cream-100 hover:text-yellow-400 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-emerald-800 border-t">
              <button
                onClick={() => scrollToSection('about')}
                className="block w-full text-left px-3 py-2 text-cream-100 hover:text-yellow-400"
              >
                About me
              </button>
              <button
                onClick={() => scrollToSection('resume')}
                className="block w-full text-left px-3 py-2 text-cream-100 hover:text-yellow-400"
              >
                Resume
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="block w-full text-left px-3 py-2 text-cream-100 hover:text-yellow-400"
              >
                Work
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left px-3 py-2 text-cream-100 hover:text-yellow-400"
              >
                Get in touch
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
