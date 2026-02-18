import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Our Story', 'Sound & Rest', 'Retreats', 'Journal'];

  return (
    <nav
      className={`fixed z-50 transition-all duration-500 ease-in-out ${isScrolled
          ? 'top-0 left-0 right-0 bg-white/90 backdrop-blur-md shadow-sm py-4'
          : 'top-4 left-4 right-4 bg-transparent py-5'
        }`}
      aria-label="Main navigation"
    >
      <div
        className={`mx-auto px-6 flex justify-between items-center max-w-7xl ${isScrolled ? '' : 'bg-stone-900/20 backdrop-blur-sm rounded-2xl border border-white/10 px-8'
          }`}
      >
        {/* Logo */}
        <a href="#" className="flex flex-col focus:outline-none focus:ring-2 focus:ring-white/50 rounded-sm" aria-label="The Studio of Stillness — home">
          <span
            className={`font-serif text-xl tracking-wide font-medium transition-colors duration-300 ${isScrolled ? 'text-stone-800' : 'text-white'
              }`}
          >
            The Studio of Stillness
          </span>
          <span
            className={`font-sans text-[9px] uppercase tracking-[0.25em] transition-colors duration-300 ${isScrolled ? 'text-stone-500' : 'text-stone-300'
              }`}
          >
            Candice West
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, '-').replace('&', 'and')}`}
              className={`cursor-pointer font-sans text-xs uppercase tracking-widest transition-all duration-200 hover:opacity-60 focus:outline-none focus:ring-2 focus:ring-white/50 rounded-sm ${isScrolled ? 'text-stone-700' : 'text-stone-100'
                }`}
            >
              {item}
            </a>
          ))}

          {/* Desktop Book Now — Cal.com trigger */}
          <button
            className={`cursor-pointer font-sans text-xs uppercase tracking-widest px-6 py-2.5 border rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-1 ${isScrolled
                ? 'border-stone-800 text-stone-800 hover:bg-stone-800 hover:text-white focus:ring-stone-400'
                : 'border-white/70 text-white hover:bg-white hover:text-stone-900 focus:ring-white/50'
              }`}
            data-cal-link="jordan-chizick-2026/30min"
            data-cal-namespace="30min"
            data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
            aria-label="Book a session"
          >
            Book Now
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className={`cursor-pointer md:hidden p-2 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white/50 ${isScrolled ? 'text-stone-800 hover:bg-stone-100' : 'text-white hover:bg-white/10'
            }`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          className="absolute top-full left-4 right-4 mt-2 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-stone-100 py-6 px-6 md:hidden flex flex-col gap-5 motion-safe:animate-[fadeInDown_0.2s_ease-out]"
          role="menu"
        >
          {navLinks.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, '-').replace('&', 'and')}`}
              className="cursor-pointer font-serif text-lg italic text-stone-800 hover:text-stone-500 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-stone-300 rounded-sm"
              onClick={() => setMobileMenuOpen(false)}
              role="menuitem"
            >
              {item}
            </a>
          ))}
          <button
            className="cursor-pointer mt-2 px-6 py-3 bg-stone-900 text-white w-full rounded-full font-sans uppercase tracking-widest text-xs hover:bg-stone-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-stone-400 focus:ring-offset-2"
            data-cal-link="jordan-chizick-2026/30min"
            data-cal-namespace="30min"
            data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
            aria-label="Book a session"
            role="menuitem"
          >
            Book Now
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navigation;