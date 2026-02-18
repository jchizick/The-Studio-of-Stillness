import React from 'react';
import { Instagram, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-400 py-16 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 border-b border-stone-800 pb-12">
        <div className="flex flex-col space-y-4">
          <h4 className="font-serif text-2xl text-stone-200">The Studio of Stillness</h4>
          <p className="text-sm leading-relaxed max-w-xs">
            A sanctuary for the senses. Dedicated to restoring balance through the transformative power of sound and touch.
          </p>
        </div>
        
        <div className="flex flex-col space-y-4">
          <h4 className="font-serif text-xl text-stone-200">Contact</h4>
          <div className="flex items-center space-x-3 text-sm hover:text-stone-200 transition-colors cursor-pointer">
            <Mail size={16} />
            <span>hello@candicewest.com</span>
          </div>
          <div className="flex items-center space-x-3 text-sm hover:text-stone-200 transition-colors cursor-pointer">
            <MapPin size={16} />
            <span>123 Serenity Lane, Wellness District</span>
          </div>
        </div>

        <div className="flex flex-col space-y-4 md:items-end">
          <h4 className="font-serif text-xl text-stone-200">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="#" className="p-2 border border-stone-700 rounded-full hover:bg-stone-800 transition-colors">
              <Instagram size={18} />
            </a>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto pt-8 flex flex-col md:flex-row justify-between items-center text-xs tracking-wider opacity-60">
        <p>&copy; {new Date().getFullYear()} Candice West. All Rights Reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;