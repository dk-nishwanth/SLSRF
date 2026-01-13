
import React from 'react';
import { Globe, Search } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-8 py-8 flex items-start justify-between bg-transparent pointer-events-none">
      <div className="flex items-center gap-8 pointer-events-auto invisible">
        {/* Placeholder to keep logo centered */}
        <div className="w-24"></div>
      </div>

      <div className="flex flex-col items-center pointer-events-auto cursor-pointer group">
        <div className="flex flex-col items-center leading-none">
          <span className="text-[20px] font-black tracking-[0.4em] uppercase group-hover:text-emerald-600 transition-colors">SLSRF</span>
          <span className="text-[8px] font-bold tracking-[0.2em] uppercase mt-1 opacity-50">Semporutkalai Foundation</span>
        </div>
      </div>

      <div className="flex items-center gap-8 pointer-events-auto">
        <div className="hidden md:flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest">
          <button className="hover:opacity-60 text-gray-400">IN</button>
          <span className="opacity-30">/</span>
          <button className="border-b border-black">EN</button>
        </div>
        <button className="hover:text-emerald-600 transition-colors"><Search size={18} /></button>
      </div>
    </nav>
  );
};

export default Navbar;
