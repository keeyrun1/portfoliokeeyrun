import { motion } from 'motion/react';
import { educations } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-20 border-t border-zinc-800/40 text-left">
      <motion.h2 
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-headline text-4xl font-light text-white mb-12 tracking-tighter"
      >
        Education & Credentials
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {educations.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            whileHover={{ 
              y: -6,
              borderColor: 'rgba(255, 255, 255, 0.15)',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.5)',
              backgroundColor: 'rgba(24, 24, 27, 0.4)'
            }}
            className="group bg-zinc-900/20 backdrop-blur-md border border-zinc-800/60 rounded-3xl overflow-hidden transition-all duration-300 relative text-left"
          >
            {/* Image section with Zoom aspect */}
            <div className="h-44 sm:h-48 overflow-hidden relative">
              <img 
                alt={item.title} 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-750 ease-out filter grayscale contrast-110 brightness-90 group-hover:grayscale-[0.1]" 
                src={item.image}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-90" />
            </div>

            {/* Bottom Content Area */}
            <div className="p-6 sm:p-8">
              <span className="font-mono text-[9px] sm:text-[10px] font-bold text-zinc-400 uppercase tracking-[0.2em] bg-zinc-950 border border-zinc-900/60 px-2.5 py-1 rounded-md">
                {item.type}
              </span>
              
              <h3 className="font-headline text-2xl font-semibold text-zinc-100 mt-4 mb-3 tracking-tight group-hover:text-white transition-colors">
                {item.title}
              </h3>
              
              <p className="text-zinc-500 text-sm sm:text-base leading-relaxed font-sans">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
