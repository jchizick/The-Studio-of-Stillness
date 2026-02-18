import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        isScrolled
          ? 'bg-stone-50/90 backdrop-blur-md py-4 shadow-sm text-stone-900'
          : 'bg-transparent py-6 text-stone-50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo / Name */}
        <div className="flex flex-col">
          <span className={`font-serif text-2xl tracking-wide font-medium ${isScrolled ? 'text-stone-800' : 'text-white'}`}>
            The Studio of Stillness
          </span>
          <span className={`text-[10px] uppercase tracking-[0.2em] opacity-80 ${isScrolled ? 'text-stone-600' : 'text-stone-200'}`}>
            Candice West
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-12">
          {['Our Story', 'Sound & Rest', 'Retreats', 'Journal'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className={`text-sm uppercase tracking-widest hover:opacity-70 transition-opacity ${
                isScrolled ? 'text-stone-800' : 'text-stone-100'
              }`}
            >
              {item}
            </a>
          ))}
          <button
            className={`px-6 py-2 border transition-all duration-300 ${
              isScrolled
                ? 'border-stone-800 text-stone-800 hover:bg-stone-800 hover:text-white'
                : 'border-white text-white hover:bg-white hover:text-stone-900'
            }`}
          >
            Book Now
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2">
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-stone-50 text-stone-900 py-8 px-6 shadow-xl border-t border-stone-100 md:hidden flex flex-col space-y-6 animate-fade-in">
          {['Our Story', 'Sound & Rest', 'Retreats', 'Journal'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className="text-lg font-serif italic"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
           <button className="px-6 py-3 bg-stone-900 text-white w-full uppercase tracking-widest text-sm">
            Book Now
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navigation;