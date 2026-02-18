import React from 'react';
import { ArrowDown, Music, Wind, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden flex items-center justify-center">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 motion-safe:scale-105 motion-safe:animate-[kenburns_20s_ease-out_infinite_alternate]"
        style={{ backgroundImage: `url('/hero-image.png')` }}
        role="img"
        aria-label="Serene wellness studio background"
      >
        {/* Layered gradient overlay — stronger for WCAG contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/55 via-stone-900/30 to-stone-900/70" />
        <div className="absolute inset-0 bg-stone-900/20" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center">

        {/* Decorative icon */}
        <div className="mb-6 motion-safe:animate-[fadeInDown_1.2s_ease-out_both]">
          <Sparkles
            className="w-5 h-5 text-stone-200/70 mx-auto"
            strokeWidth={1}
            aria-hidden="true"
          />
        </div>

        {/* Main Title — Lora serif */}
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-[1.1] mb-5 tracking-tight drop-shadow-md motion-safe:animate-[fadeInUp_1s_ease-out_0.2s_both]">
          The Studio <span className="italic font-light">of</span> Stillness
        </h1>

        {/* Subtitle */}
        <p className="font-sans text-stone-200 text-xs md:text-sm uppercase tracking-[0.35em] font-light mb-10 motion-safe:animate-[fadeInUp_1s_ease-out_0.45s_both]">
          Candice West &bull; Massage &amp; Sound-Based Rest
        </p>

        {/* Tagline */}
        <p className="font-serif text-stone-100/90 text-lg md:text-xl italic mb-14 max-w-xl leading-relaxed font-light motion-safe:animate-[fadeInUp_1s_ease-out_0.65s_both]">
          "Where frequency meets relaxation. Reclaim your peace through the ancient art of sound and touch."
        </p>

        {/* CTA Button */}
        <div className="motion-safe:animate-[fadeInUp_1s_ease-out_0.85s_both]">
          <button
            className="cursor-pointer group px-10 py-4 bg-white/10 backdrop-blur-sm border border-white/50 text-white rounded-full transition-all duration-300 ease-out hover:bg-white hover:text-stone-900 hover:border-transparent hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-white/70 focus:ring-offset-2 focus:ring-offset-transparent"
            data-cal-link="jordan-chizick-2026/30min"
            data-cal-namespace="30min"
            data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
            aria-label="Book your wellness session"
          >
            <span className="text-sm uppercase tracking-widest font-medium font-sans">
              Book Your Session
            </span>
          </button>
        </div>

      </div>

      {/* Scroll indicator — subtle, single animation */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/40 motion-safe:animate-bounce"
        aria-hidden="true"
      >
        <ArrowDown size={22} strokeWidth={1} />
      </div>

      {/* Ambient corner badges */}
      <div className="absolute bottom-10 right-10 hidden lg:flex gap-8 text-white/35" aria-hidden="true">
        <div className="flex flex-col items-center gap-2">
          <Music size={18} strokeWidth={1} />
          <span className="font-sans text-[9px] uppercase tracking-widest">Sound</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Wind size={18} strokeWidth={1} />
          <span className="font-sans text-[9px] uppercase tracking-widest">Breath</span>
        </div>
      </div>

    </div>
  );
};

export default Hero;