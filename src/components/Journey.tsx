import { motion } from 'motion/react';
import { Zap, Layers, Users } from 'lucide-react';
import { experiences, currentFocus } from '../data/portfolioData';

export default function Journey() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Zap': return <Zap className="text-white shrink-0" size={18} />;
      case 'Layers': return <Layers className="text-white shrink-0" size={18} />;
      case 'Users': return <Users className="text-white shrink-0" size={18} />;
      default: return <Zap className="text-white shrink-0" size={18} />;
    }
  };

  return (
    <section id="experience" className="py-20 border-t border-zinc-800/40">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="font-headline text-4xl font-light text-white mb-12 select-none tracking-tighter"
      >
        Professional Journey
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 relative">
        
        {/* Experience Timeline column */}
        <div className="lg:col-span-8 relative ml-4 sm:ml-6 pl-6 sm:pl-8 border-l border-zinc-800/40 space-y-10">
          
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative"
            >
              {/* Timeline Thread node connector dots */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-6 w-2.5 h-2.5 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)] z-10 animate-pulse" />
              
              <motion.div
                whileHover={{ 
                  y: -5, 
                  borderColor: 'rgba(255, 255, 255, 0.15)',
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.5)',
                  backgroundColor: 'rgba(24, 24, 27, 0.5)'
                }}
                className="bg-zinc-900/20 backdrop-blur-md border border-zinc-800/60 p-6 sm:p-8 rounded-2xl transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4 text-left">
                  <div>
                    <h3 className="font-headline text-2xl font-semibold text-zinc-100">{exp.role}</h3>
                    <p className="text-zinc-500 font-medium text-sm mt-0.5">{exp.company}</p>
                  </div>
                  <span className="font-mono text-xs text-zinc-400 font-semibold tracking-wider px-3 py-1.5 rounded-lg bg-zinc-900/30 border border-zinc-800/40 self-start sm:self-auto uppercase">
                    {exp.period}
                  </span>
                </div>
                
                <p className="text-zinc-500 text-sm sm:text-base leading-relaxed mb-6 font-sans text-left">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2 justify-start">
                  {exp.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="px-3 py-1.5 bg-white/5 border border-zinc-850/60 text-zinc-400 text-xs font-mono rounded-lg transition-colors hover:bg-white/10 hover:text-white"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Sidebar Current Focus Column */}
        <div className="lg:col-span-4 space-y-6 text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ 
              borderColor: 'rgba(255, 255, 255, 0.15)'
            }}
            className="bg-zinc-900/20 backdrop-blur-md border border-zinc-800/60 p-6 sm:p-8 rounded-2xl"
          >
            <h4 className="font-mono text-xs font-bold tracking-widest text-zinc-500 uppercase mb-6 pb-2 border-b border-zinc-800/40 select-none">
              CURRENT FOCUS
            </h4>
            
            <ul className="space-y-5">
              {currentFocus.map((focus, index) => (
                <motion.li 
                  key={index} 
                  className="flex items-start gap-4 group cursor-default"
                  whileHover={{ x: 4 }}
                  transition={{ type: 'spring', stiffness: 200 }}
                >
                  <div className="p-1.5 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors">
                    {getIcon(focus.icon)}
                  </div>
                  <span className="text-zinc-400 group-hover:text-zinc-200 text-sm font-sans font-medium transition-colors pt-1">
                    {focus.text}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          {/* Subtle decoration display box to balance layout */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-zinc-950/40 border border-zinc-900/60 p-6 rounded-2xl hidden lg:block text-left"
          >
            <p className="font-mono text-[9px] text-zinc-600 leading-normal tracking-tight">
              SYSTEM STATUS: COMPILER ONLINE // ALL CRITICAL LIBRARIES BUNDLED ON V2.1 EMISSION // READY TO PROCESS OUTBOX
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
