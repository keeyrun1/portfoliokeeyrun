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
      className="py-16 md:py-28 relative flex flex-col justify-center items-start overflow-hidden border-b border-zinc-900/60"
    >
      <div className="w-full max-w-3xl space-y-6 md:space-y-8 text-left z-10">
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

      {/* Subtle background highlight matching the elegant layout */}
      <div className="absolute top-1/2 -translate-y-1/2 right-10 w-96 h-96 bg-zinc-800/5 blur-[120px] rounded-full pointer-events-none z-0"></div>
    </section>
  );
}
