import React from 'react';

const offerings = [
  {
    title: "Therapeutic Massage",
    description: "Deep tissue work integrated with myofascial release to unwind tension patterns.",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Sound Bath Immersion",
    description: "A full-body listening experience that intentionally uses sound to invite therapeutic restoration.",
    image: "https://images.unsplash.com/photo-1515377905703-c4788e51dc15?q=80&w=2076&auto=format&fit=crop"
  },
  {
    title: "Private Integration",
    description: "Personalized sessions combining breathwork, sound, and stillness for deep healing.",
    image: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=2070&auto=format&fit=crop"
  }
];

const Offerings: React.FC = () => {
  return (
    <section id="sound-&-rest" className="py-24 px-6 bg-stone-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-16 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-stone-500 mb-4">Our Offerings</span>
          <h2 className="font-serif text-4xl md:text-5xl text-stone-900 italic">Pathways to Stillness</h2>
          <div className="h-px w-24 bg-stone-300 mt-6"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {offerings.map((offer, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="overflow-hidden aspect-[4/5] mb-6 relative">
                <img 
                  src={offer.image} 
                  alt={offer.title} 
                  className="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-105 filter saturate-[0.8] group-hover:saturate-100"
                />
                 <div className="absolute inset-0 bg-stone-900/10 group-hover:bg-transparent transition-colors duration-500" />
              </div>
              <h3 className="text-2xl font-serif text-stone-800 mb-2 group-hover:text-stone-600 transition-colors">{offer.title}</h3>
              <p className="text-stone-500 leading-relaxed font-light text-sm">{offer.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offerings;