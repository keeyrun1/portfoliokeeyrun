import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Code, Terminal, FileCode, Palette, Monitor, Cpu, Search } from 'lucide-react';
import { skills } from '../data/portfolioData';

export default function TechStack() {
  const [filter, setFilter] = useState<'All' | 'Language' | 'Styling' | 'Tools' | 'Principle'>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const getIcon = (skillName: string) => {
    switch (skillName.toLowerCase()) {
      case 'typescript':
        return <Code className="text-white" size={28} />;
      case 'javascript':
        return <Cpu className="text-zinc-300" size={28} />;
      case 'html5':
        return <FileCode className="text-zinc-400" size={28} />;
      case 'css3':
        return <Palette className="text-zinc-300" size={28} />;
      case 'git':
        return <Terminal className="text-zinc-400" size={28} />;
      case 'responsive':
        return <Monitor className="text-white" size={28} />;
      default:
        return <Code className="text-zinc-300" size={28} />;
    }
  };

  const getAccentBg = (skillName: string) => {
    return 'bg-zinc-800/10 group-hover:bg-zinc-805/30';
  };

  const categories = [
    { label: 'All Stack', value: 'All' },
    { label: 'Languages', value: 'Language' },
    { label: 'Styling', value: 'Styling' },
    { label: 'Tools & Workflows', value: 'Tools' },
    { label: 'Principles', value: 'Principle' },
  ] as const;

  const filteredSkills = skills.filter(item => {
    const matchesCategory = filter === 'All' || item.category === filter;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.level.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="skills" className="py-20 border-t border-zinc-800/40">
      <div className="text-center mb-12">
        <motion.h2 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-headline text-4xl font-light text-white mb-4 tracking-tighter"
        >
          Technical Stack
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-zinc-500 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed font-sans"
        >
          Mastery over the modern web stack, with a primary focus on TypeScript, atomic layout specifications, and highly fluid user architectures.
        </motion.p>
      </div>

      {/* Interactivity Bar: Search & Tabs */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-10 pb-4 border-b border-zinc-800/40">
        
        {/* Category Tabs */}
        <div className="flex flex-wrap gap-1 bg-zinc-900/10 p-1 rounded-xl border border-zinc-800/60 overflow-x-auto">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setFilter(cat.value)}
              className={`px-4 py-2 rounded-lg text-xs font-medium transition-all duration-300 whitespace-nowrap cursor-pointer ${
                filter === cat.value
                  ? 'bg-white text-black font-bold shadow-md'
                  : 'text-zinc-500 hover:text-zinc-200 hover:bg-white/5'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Dynamic Search Box */}
        <div className="relative max-w-xs w-full self-start md:self-auto">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-600" size={16} />
          <input
            type="text"
            placeholder="Search core stacks..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-zinc-900/10 border border-zinc-800/60 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-zinc-600 focus:outline-none focus:ring-1 focus:ring-white transition-all text-left"
          />
        </div>

      </div>

      {/* Grid containing skill items */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-5">
        <AnimatePresence mode="popLayout">
          {filteredSkills.map((item, idx) => (
            <motion.div
              layout
              key={item.name}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9, y: 15 }}
              transition={{ duration: 0.4 }}
              whileHover={{ 
                y: -6,
                borderColor: 'rgba(255, 255, 255, 0.15)',
                boxShadow: '0 15px 30px rgba(0, 0, 0, 0.5)',
                backgroundColor: 'rgba(24, 24, 27, 0.4)'
              }}
              className="group bg-zinc-900/20 backdrop-blur-md border border-zinc-800/60 p-5 sm:p-6 rounded-2xl flex flex-col items-center text-center transition-all duration-300 relative overflow-hidden"
            >
              {/* Icon Holder */}
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-transform duration-500 group-hover:scale-110 ${getAccentBg(item.name)}`}>
                {getIcon(item.name)}
              </div>

              <span className="font-headline font-bold text-sm sm:text-base text-zinc-200 tracking-tight">
                {item.name}
              </span>
              
              <span className="font-mono text-[10px] sm:text-xs text-zinc-550 font-semibold mt-1">
                {item.level}
              </span>

              {/* Glowing Dynamic Progress slide (custom micro-interaction) */}
              <div className="w-full h-1 bg-zinc-800/40 rounded-full mt-4 overflow-hidden relative">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${item.percentage}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: idx * 0.05 }}
                  className="h-full bg-gradient-to-r from-zinc-700 to-zinc-200 rounded-full"
                />
              </div>

            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {filteredSkills.length === 0 && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-16 bg-zinc-900/10 border border-zinc-800/40 rounded-2xl border-dashed"
        >
          <p className="text-zinc-650 text-sm font-mono">No matching skills found in the current scope.</p>
        </motion.div>
      )}
    </section>
  );
}
