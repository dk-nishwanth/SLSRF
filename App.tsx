import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ArtworkCard from './components/ArtworkCard';
import { ARTWORKS, CORE_VALUES, CONGLOMERATES } from './constants';
import { CheckCircle2, Mail, Phone, ExternalLink, ArrowRight, Globe } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen selection:bg-emerald-800 selection:text-white bg-[#fdfbf7]">
      <Navbar />
      
      <main>
        {/* Grand Launch Hero */}
        <Hero />

        {/* Launch Gateway Section */}
        <section className="max-w-[1400px] mx-auto px-8 py-32 border-t border-emerald-900/10">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-16 bg-white p-12 md:p-24 shadow-2xl relative -mt-32 z-40">
            <div className="max-w-2xl">
              <span className="text-[11px] font-black uppercase tracking-[0.4em] text-emerald-800 mb-6 block">The Digital Hub</span>
              <h2 className="text-5xl md:text-7xl serif leading-[0.9] mb-10">Experience the<br />Full Ecosystem</h2>
              <p className="text-lg text-gray-500 font-light leading-relaxed">
                This digital showcase marks the official launch of the Semporutkalai Life Science Research Foundation. We invite you to explore our deep science initiatives and cultural programs at the primary platform.
              </p>
            </div>
            <a 
              href="https://slsrf.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex flex-col items-center justify-center p-12 aspect-square bg-emerald-950 text-white hover:bg-emerald-900 transition-all duration-500 rounded-full"
            >
              <Globe size={32} className="mb-4 group-hover:rotate-12 transition-transform" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] mb-2 opacity-60">Visit Official Site</span>
              <span className="text-2xl serif italic whitespace-nowrap">slsrf.com</span>
              <ArrowRight size={20} className="mt-4 group-hover:translate-x-2 transition-transform" />
            </a>
          </div>
        </section>

        {/* Welcome & Founder Mission */}
        <section className="max-w-[1400px] mx-auto px-8 py-48">
          <div className="grid lg:grid-cols-2 gap-32 items-start">
            <div className="animate-fade-up">
              <span className="text-[11px] font-black uppercase tracking-[0.4em] text-emerald-800 mb-8 block">About the Foundation</span>
              <h2 className="text-6xl md:text-8xl serif leading-[0.9] mb-12">Universal<br />Sustenance</h2>
              <div className="space-y-8 text-xl text-gray-600 font-light leading-relaxed">
                <p>
                  Semporutkalai Life Science Research Foundation (SLSRF) is a global initiative founded on the vision that human evolution and environmental protection must go hand in hand.
                </p>
                <p>
                  Inspired by the Tamil word “Semporul” (supreme essence), we represent a confluence of Eastern ancient wisdom systems and contemporary scientific research.
                </p>
              </div>
            </div>
            
            <div className="lg:pt-32 space-y-12 animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center gap-10 p-12 bg-white border border-emerald-50 shadow-xl">
                <div className="w-24 h-24 rounded-full overflow-hidden grayscale border-2 border-emerald-900/10">
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200" alt="Leader" className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-widest text-emerald-900 mb-1">Spearheaded by</p>
                  <p className="text-lg serif italic">Thiru. Jeyachandran Srinivasan</p>
                  <p className="text-[10px] uppercase text-gray-400 font-bold tracking-[0.2em] mt-2">Founder & Thought Leader</p>
                </div>
              </div>
              <div className="p-12 border-l-4 border-emerald-900 bg-white shadow-sm">
                <h3 className="text-3xl serif italic mb-6 text-emerald-950">A Civilizational Shift</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  Spearheading Social Transformation through Noetic Science and Environmental Stewardship. Our dual-core mission touches both the inner consciousness and the outer ecosystems.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Vertical List */}
        <section className="max-w-[1400px] mx-auto px-8 py-32">
          <div className="flex flex-col items-center mb-48 text-center">
            <span className="text-[11px] font-black uppercase tracking-[0.6em] text-emerald-800 mb-8">Launch Verticals</span>
            <h2 className="text-6xl md:text-8xl serif leading-none">Research &<br /><span className="italic">Excellence</span></h2>
          </div>
          <div className="space-y-64">
            {ARTWORKS.map((artwork) => (
              <ArtworkCard key={artwork.id} artwork={artwork} />
            ))}
          </div>
        </section>

        {/* Mission Action Detail */}
        <section className="py-64 px-8 bg-[#1a1a1a] text-white">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid lg:grid-cols-2 gap-32">
              <div className="animate-fade-up">
                <span className="text-[11px] font-black uppercase tracking-[0.5em] text-emerald-400 mb-12 block">Mission Focus A</span>
                <h2 className="text-6xl md:text-8xl serif italic mb-16 leading-tight">Environmental Innovation</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                  {[
                    "AI-powered blockchain PhytoVault",
                    "Flying RoBo-Mapped Digitization",
                    "Eco-Tech Incubation platform",
                    "Green Start-up Acceleration",
                    "STEM Environmental Hackathons",
                    "CSR Climate Resilience"
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 items-start border-t border-white/10 pt-8 group">
                      <CheckCircle2 size={16} className="text-emerald-500 mt-1 shrink-0 group-hover:scale-125 transition-transform" />
                      <span className="text-xs font-black tracking-widest uppercase leading-relaxed text-gray-400 group-hover:text-white transition-colors">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:pt-48 animate-fade-up" style={{ animationDelay: '0.2s' }}>
                <span className="text-[11px] font-black uppercase tracking-[0.5em] text-emerald-400 mb-12 block text-right">Mission Focus B</span>
                <h2 className="text-6xl md:text-8xl serif italic mb-16 leading-tight text-right">Noetic Science</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                  {[
                    "Noetic Research Clusters",
                    "nseUW Certification Ecosystem",
                    "Youth Leadership Cohorts",
                    "Scientific Publication Index",
                    "Behavioral Resilience Protocols",
                    "Unified Wholeness Modules"
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 items-start border-t border-white/10 pt-8 group justify-end text-right">
                      <span className="text-xs font-black tracking-widest uppercase leading-relaxed text-gray-400 group-hover:text-white transition-colors">{item}</span>
                      <CheckCircle2 size={16} className="text-emerald-500 mt-1 shrink-0 group-hover:scale-125 transition-transform" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Value Core */}
        <section className="py-48 px-8 bg-white border-b border-emerald-900/5">
          <div className="max-w-[1400px] mx-auto grid md:grid-cols-3 gap-24">
            {CORE_VALUES.map((val) => (
              <div key={val.id} className="flex flex-col items-center text-center group">
                <span className="text-8xl serif italic font-black text-emerald-900/5 mb-8 group-hover:text-emerald-900/10 transition-colors">{val.id}</span>
                <h4 className="text-3xl serif italic mb-6">{val.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed max-w-xs">{val.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Global Impact */}
        <section className="py-64 px-8 bg-[#0a201a] text-white relative overflow-hidden">
          <div className="max-w-[1400px] mx-auto relative z-10 text-center">
            <span className="text-[11px] font-black uppercase tracking-[0.6em] text-emerald-400 mb-12 block">A Global Initiative</span>
            <p className="text-5xl md:text-8xl serif leading-tight mb-24 max-w-6xl mx-auto italic opacity-90">
              "Building National Impact through collaborative scientific and spiritual leadership."
            </p>
            <div className="flex flex-wrap justify-center gap-12 md:gap-32 opacity-40 grayscale contrast-150">
               {["AYUSH", "Tribal Affairs", "MoEFCC", "CSIR", "CSIR-NEIST"].map((p, i) => (
                 <span key={i} className="text-sm font-black uppercase tracking-[0.5em] hover:opacity-100 transition-opacity cursor-default">{p}</span>
               ))}
            </div>
          </div>
        </section>

        {/* Conglomerate Section */}
        <section className="py-32 px-12 bg-white">
          <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-16">
            <div className="text-center md:text-left">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-300">Member of the Group</span>
              <h5 className="text-2xl serif italic mt-2">Our Conglomerate</h5>
            </div>
            <div className="flex flex-wrap justify-center gap-16 md:gap-32">
              {CONGLOMERATES.map((c) => (
                <div key={c.name} className="flex flex-col items-center group cursor-pointer">
                  <span className="text-2xl font-black tracking-[0.3em] uppercase opacity-20 group-hover:opacity-100 group-hover:text-emerald-900 transition-all">{c.logo}</span>
                  <span className="text-[9px] uppercase font-bold tracking-widest text-gray-400 mt-2">{c.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final Launch CTA */}
        <section className="py-64 px-8 bg-emerald-950 text-white text-center relative overflow-hidden">
          <div className="max-w-4xl mx-auto relative z-10">
            <span className="text-[11px] font-black uppercase tracking-[0.5em] text-emerald-400 mb-8 block">Ready for Discovery</span>
            <h2 className="text-6xl md:text-[8rem] serif italic mb-16 leading-none">Join the Mission</h2>
            <div className="flex flex-col items-center gap-12">
              <a href="https://slsrf.com/" className="group flex items-center gap-8 px-16 py-8 bg-white text-emerald-950 rounded-full font-black uppercase tracking-widest text-xs hover:bg-emerald-400 transition-all shadow-2xl">
                Go to slsrf.com
                <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </a>
              <p className="text-emerald-100/50 text-sm uppercase tracking-[0.3em]">Official Launch Phase 1.0</p>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-800/20 blur-[150px] -z-10 rounded-full"></div>
        </section>

        {/* Footer */}
        <footer className="py-32 px-12 bg-white border-t border-emerald-900/10">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid lg:grid-cols-4 gap-24 mb-32">
              <div className="col-span-1 lg:col-span-2 space-y-12">
                <div className="flex flex-col">
                  <span className="text-[28px] font-black tracking-[0.3em] uppercase">SLSRF</span>
                  <span className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.1em] mt-1">Research Foundation Launch Showcase</span>
                </div>
                <div className="flex flex-col gap-6">
                  <div className="flex items-center gap-4">
                    <Mail size={16} className="text-emerald-800" />
                    <a href="mailto:hello@slsrf-research-foundation.com" className="text-sm font-bold border-b border-black">hello@slsrf-research-foundation.com</a>
                  </div>
                  <div className="flex items-center gap-4">
                    <Phone size={16} className="text-emerald-800" />
                    <span className="text-sm font-bold">+91 6383499920</span>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <h5 className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-300">Pages</h5>
                <ul className="space-y-4">
                  <li><a href="#" className="text-xs font-black uppercase tracking-widest hover:text-emerald-600">Home</a></li>
                  <li><a href="#" className="text-xs font-black uppercase tracking-widest hover:text-emerald-600">About</a></li>
                  <li><a href="#" className="text-xs font-black uppercase tracking-widest hover:text-emerald-600">Environment</a></li>
                  <li><a href="#" className="text-xs font-black uppercase tracking-widest hover:text-emerald-600">Social</a></li>
                  <li><a href="#" className="text-xs font-black uppercase tracking-widest hover:text-emerald-600 text-emerald-900 border-b border-emerald-900">Contact</a></li>
                </ul>
              </div>

              <div className="space-y-8">
                <h5 className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-300">Connect</h5>
                <ul className="space-y-4">
                  <li><a href="https://slsrf.com/" className="text-xs font-black uppercase tracking-widest flex items-center gap-2 hover:text-emerald-600">slsrf.com <ExternalLink size={12}/></a></li>
                  <li><a href="#" className="text-xs font-black uppercase tracking-widest hover:text-emerald-600">Terms & Conditions</a></li>
                  <li><a href="#" className="text-xs font-black uppercase tracking-widest hover:text-emerald-600">Privacy Policy</a></li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center pt-16 border-t border-gray-100 gap-8">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-300">© 2025 SLSRF Research Foundation</span>
              <div className="flex items-center gap-4">
                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-emerald-900 italic">Enabling Social Excellence</span>
              </div>
            </div>
          </div>
        </footer>
      </main>

      {/* Noise Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.04] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] z-50"></div>
    </div>
  );
}

export default App;