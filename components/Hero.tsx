import React from 'react';
import { ArrowDown, Music, Wind, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image Container */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 transform scale-105 animate-[kenburns_20s_ease-out_infinite_alternate]"
        style={{
          backgroundImage: `url('/hero-image.png')`,
        }}
      >
        {/* Gradient Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/40 via-stone-900/20 to-stone-900/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">

        {/* Decorative Top Element */}
        <div className="mb-6 opacity-80 animate-[fadeInDown_1.5s_ease-out]">
          <Sparkles className="w-6 h-6 text-stone-200 mx-auto opacity-75" strokeWidth={1} />
        </div>

        {/* Main Title */}
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-stone-50 leading-tight mb-4 tracking-tight drop-shadow-sm animate-[fadeInUp_1s_ease-out_0.2s_both]">
          The Studio <span className="italic font-light">of</span> Stillness
        </h1>

        {/* Subtitle / Name */}
        <h2 className="text-stone-200 text-sm md:text-base uppercase tracking-[0.3em] font-light mb-8 animate-[fadeInUp_1s_ease-out_0.5s_both]">
          Candice West &bull; Massage &amp; Sound-Based Rest
        </h2>

        {/* Description Text */}
        <p className="font-serif text-stone-100 text-xl md:text-2xl italic opacity-90 mb-12 max-w-2xl leading-relaxed font-light animate-[fadeInUp_1s_ease-out_0.8s_both]">
          "Where frequency meets relaxation. Reclaim your peace through the ancient art of sound and touch."
        </p>

        {/* CTA Button */}
        <div className="animate-[fadeInUp_1s_ease-out_1.1s_both]">
          <button
            className="group relative px-10 py-4 bg-white/10 backdrop-blur-sm border border-white/40 text-white overflow-hidden transition-all duration-300 hover:bg-white hover:text-stone-900 hover:border-transparent rounded-full"
            data-cal-link="jordan-chizick-2026/30min"
            data-cal-namespace="30min"
            data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
          >
            <span className="relative z-10 text-sm uppercase tracking-widest font-medium">Book Your Session</span>
          </button>
        </div>

      </div>

      {/* Bottom Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/50">
        <ArrowDown size={24} strokeWidth={1} />
      </div>

      {/* Floating Badges (Optional aesthetics) */}
      <div className="absolute bottom-12 right-12 hidden lg:flex space-x-8 text-white/40">
        <div className="flex flex-col items-center space-y-2">
          <Music size={20} strokeWidth={1} />
          <span className="text-[10px] uppercase tracking-wider">Sound</span>
        </div>
        <div className="flex flex-col items-center space-y-2">
          <Wind size={20} strokeWidth={1} />
          <span className="text-[10px] uppercase tracking-wider">Breath</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;