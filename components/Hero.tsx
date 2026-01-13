import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[170vh] bg-[#fdfbf7] overflow-visible">
      {/* Launch Header Area */}
      <div className="pt-48 md:pt-64 px-8 max-w-[1400px] mx-auto relative z-20">
        <div className="relative flex flex-col items-center">
          
          {/* Side Labels */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 hidden lg:block text-left w-64 border-l border-emerald-900/10 pl-6">
            <p className="text-[11px] font-black uppercase tracking-[0.2em] text-emerald-800 mb-2">The Launch Event</p>
            <p className="text-[13px] font-medium leading-relaxed text-black/80">
              Forging a<br />
              Civilizational Shift
            </p>
          </div>

          <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:block text-right w-64 border-r border-emerald-900/10 pr-6">
            <p className="text-[11px] font-black uppercase tracking-[0.2em] text-black/40 mb-2">Digital Showcase</p>
            <p className="text-[13px] font-medium leading-relaxed text-black/80">
              Official Portal –<br />
              Live at slsrf.com
            </p>
          </div>

          {/* Main Title - Essence of Life */}
          <div className="flex flex-col items-center text-center animate-fade-up">
            <span className="text-[12px] font-black uppercase tracking-[0.7em] mb-12 text-emerald-900">Semporutkalai Life Science</span>
            <h1 className="flex flex-col items-center">
              <span className="text-8xl md:text-[11rem] lg:text-[13rem] serif leading-[0.9]">
                Essence of
              </span>
              <span className="text-9xl md:text-[13rem] lg:text-[16rem] serif italic leading-[0.7] -mt-2 md:-mt-4">
                Life
              </span>
            </h1>
            <p className="mt-12 text-lg md:text-xl font-medium tracking-wide text-emerald-950/70 max-w-2xl serif italic">
              Life is harmony, purpose, love, and conscious connection with all.
            </p>
          </div>
        </div>
      </div>

      {/* Hero Visual Composition */}
      <div className="relative w-full max-w-[1200px] mx-auto h-[900px] mt-24 px-4">
        
        {/* Left: PhytoVault / Nature */}
        <div className="absolute left-[-2%] top-[10%] w-[38%] h-[650px] z-10 shadow-2xl overflow-hidden animate-fade-up" style={{ animationDelay: '0.2s' }}>
          <img 
            src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1200" 
            alt="Environmental Stewardship" 
            className="w-full h-full object-cover grayscale-[0.3] hover:grayscale-0 transition-all duration-1000"
          />
        </div>

        {/* Center: The Core Vision */}
        <div className="absolute left-[25%] bottom-0 w-[65%] h-[500px] z-30 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] border-[20px] border-[#fdfbf7] overflow-hidden animate-fade-up" style={{ animationDelay: '0.4s' }}>
          <img 
            src="https://images.unsplash.com/photo-1524143878510-e3b8d6312402?auto=format&fit=crop&q=80&w=1400" 
            alt="Semporutkalai Research Center" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right: Consciousness Representation */}
        <div className="absolute right-[-4%] top-[25%] w-[40%] h-[580px] z-20 shadow-2xl overflow-hidden animate-fade-up" style={{ animationDelay: '0.6s' }}>
          <img 
            src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=1200" 
            alt="Noetic Research" 
            className="w-full h-full object-cover"
          />
          
          <div className="absolute bottom-24 -left-20 rotate-[-4deg] bg-emerald-950 px-10 py-4 shadow-[0_20px_50px_rgba(0,0,0,0.15)] z-40 pointer-events-none">
            <p className="text-[13px] font-black uppercase tracking-[0.3em] text-white whitespace-nowrap">Official Platform Launch 2025</p>
          </div>
        </div>
      </div>
      
      {/* Decorative Marquee */}
      <div className="absolute bottom-[-5%] left-0 w-full overflow-hidden pointer-events-none opacity-5">
         <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-end gap-32 min-w-max h-full grayscale px-12">
              <span className="text-[120px] font-black tracking-tighter serif">SLSRF.COM</span>
              <span className="text-[120px] font-black tracking-tighter serif">SEMPORUTKALAI</span>
              <span className="text-[120px] font-black tracking-tighter serif">LIFE SCIENCE</span>
              <span className="text-[120px] font-black tracking-tighter serif">LAUNCH</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;