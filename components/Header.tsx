import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div 
          className={`text-xl font-bold tracking-tight cursor-pointer ${isScrolled ? 'text-slate-900' : 'text-white'}`}
          onClick={() => scrollToSection('hero')}
        >
          Vietnam Online Lab
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          <button onClick={() => scrollToSection('solutions')} className={`text-sm font-medium hover:text-blue-500 transition-colors ${isScrolled ? 'text-slate-600' : 'text-slate-200'}`}>서비스 특징</button>
          <button onClick={() => scrollToSection('services')} className={`text-sm font-medium hover:text-blue-500 transition-colors ${isScrolled ? 'text-slate-600' : 'text-slate-200'}`}>서비스 구성</button>
          <button onClick={() => scrollToSection('why-us')} className={`text-sm font-medium hover:text-blue-500 transition-colors ${isScrolled ? 'text-slate-600' : 'text-slate-200'}`}>Why Us</button>
          <button 
            onClick={() => scrollToSection('contact')}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
              isScrolled 
                ? 'bg-blue-900 text-white hover:bg-blue-800' 
                : 'bg-white text-blue-900 hover:bg-slate-100'
            }`}
          >
            상담 문의하기
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={isScrolled ? 'text-slate-900' : 'text-white'} />
          ) : (
            <Menu className={isScrolled ? 'text-slate-900' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg border-t border-slate-100 md:hidden flex flex-col p-4 space-y-4">
          <button onClick={() => scrollToSection('solutions')} className="text-left text-slate-700 font-medium py-2">서비스 특징</button>
          <button onClick={() => scrollToSection('services')} className="text-left text-slate-700 font-medium py-2">서비스 구성</button>
          <button onClick={() => scrollToSection('why-us')} className="text-left text-slate-700 font-medium py-2">Why Us</button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="w-full text-center bg-blue-900 text-white py-3 rounded-lg font-semibold"
          >
            상담 문의하기
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;