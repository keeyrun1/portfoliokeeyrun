import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Folder, GitBranch, Star, Link, Code2 } from 'lucide-react';
import { projects } from '../data/portfolioData';

export default function Projects() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="projects-grid" className="py-20 border-t border-zinc-800/40">
      <div className="text-left mb-12">
        <div className="inline-flex items-center gap-2 mb-6">
          <span className="w-2 h-[1px] bg-zinc-600"></span>
          <span className="text-xs uppercase tracking-[0.3em] text-zinc-500 font-bold">Featured Repositories</span>
        </div>
        <h2 className="font-headline text-4xl font-light text-white mb-4 tracking-tighter">
          Experimental Lab
        </h2>
        <p className="text-zinc-500 text-sm sm:text-base leading-relaxed max-w-2xl font-sans">
          Curated open-source modules and micro-interactions built with rigorous specification, demonstrating structural modularity and layout performance.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((proj, idx) => (
          <motion.div
            key={proj.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            onMouseEnter={() => setHoveredId(proj.id)}
            onMouseLeave={() => setHoveredId(null)}
            onClick={() => setSelectedProject(proj)}
            whileHover={{ y: -6 }}
            className="group cursor-pointer bg-zinc-900/20 border border-zinc-800/60 p-8 rounded-2xl transition-all duration-300 flex flex-col justify-between hover:bg-zinc-900/40 hover:border-zinc-700 text-left"
          >
            <div className="w-full">
              <div className="flex justify-between items-center mb-6">
                <div className="p-3 bg-zinc-950 rounded-xl border border-zinc-900/40 text-zinc-500 group-hover:text-white transition-colors">
                  <Folder size={20} />
                </div>
                <div className="flex items-center gap-3.5 text-xs text-zinc-650 font-mono">
                  <span className="flex items-center gap-1 hover:text-zinc-300 transition-colors">
                    <Star size={13} /> 12
                  </span>
                  <span className="flex items-center gap-1 hover:text-zinc-300 transition-colors">
                    <GitBranch size={13} /> 4
                  </span>
                </div>
              </div>

              <div className="flex justify-between items-start gap-4">
                <div>
                  <span className="text-[9px] text-zinc-600 uppercase font-mono tracking-widest block mb-2">0{idx+1} / Interactive Spec</span>
                  <h3 className="font-headline text-2xl text-zinc-100 font-medium tracking-tight mb-2 group-hover:text-white transition-colors">
                    {proj.title}
                  </h3>
                  <p className="text-zinc-500 text-sm leading-relaxed mb-6 font-sans">
                    {proj.description}
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex flex-wrap gap-1.5 mb-6 justify-start">
                {proj.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-mono text-zinc-500 bg-zinc-950 border border-zinc-900/40 px-2.5 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center w-full">
                <span className="inline-flex items-center gap-2 text-[10px] uppercase font-bold tracking-widest text-zinc-400 group-hover:text-white transition-all duration-300">
                  Explore Specs
                  <Link size={11} />
                </span>
                <div className="w-10 h-10 rounded-full border border-zinc-800/60 flex items-center justify-center text-zinc-400 text-md group-hover:bg-white group-hover:text-black group-hover:border-white transition-all duration-300">
                  →
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Detail Expansion Modal Drawer */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.72 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black"
            />
            
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-[#0b0b0b] border border-zinc-800/60 rounded-2xl max-w-lg w-full p-6 sm:p-8 relative z-10 shadow-2xl text-left"
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase">PORTFOLIO LAB // SPEC {selectedProject.id.toUpperCase()}</span>
                  <h3 className="font-headline text-2xl font-medium text-white tracking-tight mt-1 pr-8">{selectedProject.title}</h3>
                </div>
                <button
                  id="close-projs-spec-btn"
                  onClick={() => setSelectedProject(null)}
                  className="p-1.5 px-3 bg-zinc-900 hover:bg-zinc-850 hover:text-white text-zinc-400 border border-zinc-800/60 rounded-lg text-xs font-mono font-medium"
                >
                  Close
                </button>
              </div>

              <div className="space-y-4 text-sm text-zinc-400 leading-relaxed">
                <div>
                  <h4 className="font-mono text-[10px] text-zinc-550 uppercase tracking-wider mb-1">Architecture / Role</h4>
                  <p className="font-medium text-zinc-200">{selectedProject.role}</p>
                </div>

                <div>
                  <h4 className="font-mono text-[10px] text-zinc-550 uppercase tracking-wider mb-1">Technological Specifications</h4>
                  <div className="flex flex-wrap gap-1.5 mt-1.5">
                    {selectedProject.tags.map((tag) => (
                      <span key={tag} className="text-xs font-mono text-zinc-300 bg-zinc-950 px-2.5 py-1.5 rounded-lg border border-zinc-850/60">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-mono text-[10px] text-zinc-550 uppercase tracking-wider mb-1">Functional Outline</h4>
                  <p>{selectedProject.description} Designed to function seamlessly inside modular frameworks. Highly responsive with minimal rendering overhead, utilizing structural flex grids and optimized bundle footprint sizes.</p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-zinc-800/40 flex justify-end gap-3">
                <button
                  id="modal-view-code-btn"
                  onClick={() => window.open('https://github.com/keeyrun1/Portfolio', '_blank')}
                  className="bg-zinc-900 border border-zinc-800/60 hover:bg-zinc-850 hover:border-zinc-500 text-white font-bold py-2.5 px-5 rounded-full text-xs transition-colors inline-flex items-center gap-1.5 uppercase tracking-wide"
                >
                  <GitBranch size={13} />
                  View Repository
                </button>
                <button
                  id="modal-test-runner-btn"
                  onClick={() => alert("Simulation Runner Completed stables: 16/16 Passed")}
                  className="bg-white text-black font-bold py-2.5 px-5 rounded-full text-xs hover:bg-zinc-200 duration-300 transition-colors uppercase tracking-widest shadow-lg shadow-white/5"
                >
                  Execute Local Test Unit
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
