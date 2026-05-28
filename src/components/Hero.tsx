import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { portfolioMetadata } from '../data/portfolioData';

export default function Hero() {
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      id="summary" 
      className="py-16 md:py-24 flex flex-col md:flex-row items-center gap-12 md:gap-16 relative"
    >
      <div className="flex-1 space-y-6 md:space-y-8 text-left z-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2"
        >
          <span className="w-2 h-[1px] bg-zinc-600"></span>
          <span className="text-xs uppercase tracking-[0.3em] text-zinc-500 font-bold">
            Digital Architect
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-3"
        >
          <h1 className="font-headline text-5xl md:text-6xl lg:text-7xl font-light text-white tracking-tighter leading-[1.05]">
            Kiran Kumar <br className="hidden sm:inline" /><span className="text-zinc-500">Pasupuleti</span>
          </h1>
          <h2 className="font-headline text-2xl sm:text-3xl font-light text-zinc-400 tracking-tight">
            {portfolioMetadata.role}
          </h2>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="font-sans text-base text-zinc-500 leading-relaxed max-w-xl"
        >
          {portfolioMetadata.bio}
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center gap-6"
        >
          <button
            id="talk-hero-btn"
            onClick={() => handleScrollTo('contact')}
            className="px-8 py-3.5 bg-white text-black text-xs font-bold uppercase tracking-widest rounded-full hover:bg-zinc-200 transition-all shadow-lg shadow-white/5 flex items-center gap-2 cursor-pointer"
          >
            Let's Talk
            <ArrowRight size={14} />
          </button>
          
          <button
            id="view-projects-hero-btn"
            onClick={() => handleScrollTo('experience')}
            className="border border-zinc-800 text-zinc-400 hover:border-zinc-500 hover:text-white px-8 py-3.5 rounded-full font-bold text-xs uppercase tracking-widest transition-all duration-300"
          >
            View Projects
          </button>

          <div className="text-xs text-zinc-650 font-mono tracking-tighter">
            [ Available Q3 2026 ]
          </div>
        </motion.div>
      </div>

      <div className="flex-1 relative w-full max-w-sm sm:max-w-md">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: 'spring' }}
          className="relative aspect-square w-full rounded-2xl overflow-hidden bg-zinc-900/20 border border-zinc-800/60 p-3 group z-10"
        >
          <img 
            alt="Kiran Kumar Pasupuleti Profile" 
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover rounded-xl filter grayscale contrast-110 brightness-95 group-hover:grayscale-0 transition-all duration-700 ease-in-out scale-100 group-hover:scale-[1.02]" 
            src={portfolioMetadata.avatar}
          />
          <div className="absolute inset-x-0 bottom-0 py-4 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col items-center justify-end duration-300 opacity-0 group-hover:opacity-100">
            <span className="text-white font-mono text-xs tracking-wider font-medium">KIRAN KUMAR PASUPULETI</span>
            <span className="text-zinc-500 font-sans text-[10px] mt-0.5">FRONTEND ARCHITECT</span>
          </div>
        </motion.div>
        
        {/* Ambient Back Glows */}
        <div className="absolute -top-10 -right-10 w-48 h-48 bg-zinc-800/10 blur-[80px] rounded-full pointer-events-none"></div>
        <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-zinc-700/5 blur-[90px] rounded-full pointer-events-none"></div>
      </div>
    </section>
  );
}
