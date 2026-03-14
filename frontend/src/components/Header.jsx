import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Home } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-md' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className={`p-2 rounded-lg transition-colors ${
              isScrolled ? 'bg-[#6B8E23]' : 'bg-white/90'
            }`}>
              <Home className={`h-6 w-6 ${
                isScrolled ? 'text-white' : 'text-[#6B8E23]'
              }`} />
            </div>
            <div>
              <h1 className={`text-xl font-bold transition-colors ${
                isScrolled ? 'text-gray-900' : 'text-white drop-shadow-lg'
              }`}>
                Chambre Carcassonne
              </h1>
              <p className={`text-xs transition-colors ${
                isScrolled ? 'text-gray-600' : 'text-white/90 drop-shadow'
              }`}>
                Lauraguel
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('accueil')}
              className={`font-medium transition-colors hover:text-[#6B8E23] ${
                isScrolled ? 'text-gray-700' : 'text-white drop-shadow-lg'
              }`}
            >
              Accueil
            </button>
            <button
              onClick={() => scrollToSection('chambres')}
              className={`font-medium transition-colors hover:text-[#6B8E23] ${
                isScrolled ? 'text-gray-700' : 'text-white drop-shadow-lg'
              }`}
            >
              Nos Chambres
            </button>
            <button
              onClick={() => scrollToSection('tourisme')}
              className={`font-medium transition-colors hover:text-[#6B8E23] ${
                isScrolled ? 'text-gray-700' : 'text-white drop-shadow-lg'
              }`}
            >
              Découvrir
            </button>
            <button
              onClick={() => scrollToSection('avis')}
              className={`font-medium transition-colors hover:text-[#6B8E23] ${
                isScrolled ? 'text-gray-700' : 'text-white drop-shadow-lg'
              }`}
            >
              Avis
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className={`font-medium transition-colors hover:text-[#6B8E23] ${
                isScrolled ? 'text-gray-700' : 'text-white drop-shadow-lg'
              }`}
            >
              Contact
            </button>
            <Button
              onClick={() => scrollToSection('reservation')}
              className="bg-[#6B8E23] hover:bg-[#556B1E] text-white px-6 transition-all duration-300 hover:scale-105"
            >
              Réserver
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2"
          >
            {isMobileMenuOpen ? (
              <X className={isScrolled ? 'text-gray-900' : 'text-white'} />
            ) : (
              <Menu className={isScrolled ? 'text-gray-900' : 'text-white'} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-4 space-y-3">
            <button
              onClick={() => scrollToSection('accueil')}
              className="block w-full text-left py-2 text-gray-700 hover:text-[#6B8E23] font-medium"
            >
              Accueil
            </button>
            <button
              onClick={() => scrollToSection('chambres')}
              className="block w-full text-left py-2 text-gray-700 hover:text-[#6B8E23] font-medium"
            >
              Nos Chambres
            </button>
            <button
              onClick={() => scrollToSection('tourisme')}
              className="block w-full text-left py-2 text-gray-700 hover:text-[#6B8E23] font-medium"
            >
              Découvrir
            </button>
            <button
              onClick={() => scrollToSection('avis')}
              className="block w-full text-left py-2 text-gray-700 hover:text-[#6B8E23] font-medium"
            >
              Avis
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left py-2 text-gray-700 hover:text-[#6B8E23] font-medium"
            >
              Contact
            </button>
            <Button
              onClick={() => scrollToSection('reservation')}
              className="w-full bg-[#6B8E23] hover:bg-[#556B1E] text-white"
            >
              Réserver
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
