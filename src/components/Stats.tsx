import { motion } from 'motion/react';
import { portfolioMetadata } from '../data/portfolioData';

export default function Stats() {
  const statsList = [
    { value: portfolioMetadata.commits, label: 'COMMITS' },
    { value: portfolioMetadata.tsMastery, label: 'TYPESCRIPT MASTERY' },
    { value: portfolioMetadata.designFocus, label: 'DESIGN FOCUS' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } }
  };

  return (
    <motion.section 
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-50px' }}
      className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mb-16 md:mb-24"
    >
      {statsList.map((stat, idx) => (
        <motion.div
          key={idx}
          variants={itemVariants}
          whileHover={{ 
            y: -6, 
            borderColor: 'rgba(255, 255, 255, 0.2)',
            boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
            backgroundColor: 'rgba(24, 24, 27, 0.5)'
          }}
          className="bg-zinc-900/20 backdrop-blur-md border border-zinc-800/60 p-6 md:p-8 rounded-2xl text-center duration-300 transition-colors"
        >
          <span className="block font-headline text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-white">
            {stat.value}
          </span>
          <span className="block font-mono text-[9px] md:text-[10px] text-zinc-550 tracking-[0.2em] uppercase mt-3 font-bold">
            {stat.label}
          </span>
        </motion.div>
      ))}
    </motion.section>
  );
}
