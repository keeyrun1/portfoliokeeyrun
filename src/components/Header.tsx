import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Download, FileText, Check, Award, Braces } from 'lucide-react';
import { portfolioMetadata } from '../data/portfolioData';

interface HeaderProps {
  activeSection: string;
}

export default function Header({ activeSection }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [copyingText, setCopyingText] = useState(false);

  const navItems = [
    { label: 'Summary', id: 'summary' },
    { label: 'Experience', id: 'experience' },
    { label: 'Skills', id: 'skills' },
    { label: 'Labs & Education', id: 'education' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleCopyCommand = () => {
    navigator.clipboard.writeText('npm install -g @keeyrun/portfolio-explorer');
    setCopyingText(true);
    setTimeout(() => setCopyingText(false), 2000);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
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
    <>
      <header id="top-nav-bar" className="sticky top-0 w-full z-45 bg-[#080808]/80 backdrop-blur-xl border-b border-zinc-800/40">
        <div className="max-w-[1200px] mx-auto px-5 md:px-6 h-20 flex justify-between items-center">
          <div className="flex items-center">
            <a 
              href="#summary" 
              onClick={(e) => handleNavClick(e, 'summary')}
              className="flex items-center gap-3 group"
            >
              <div className="w-8 h-8 bg-white flex items-center justify-center rounded-sm transition-transform duration-300 group-hover:scale-105">
                <span className="text-black font-black text-xl leading-none font-headline">K</span>
              </div>
              <span className="text-white font-semibold tracking-tight text-lg font-sans">{portfolioMetadata.displayName}.</span>
            </a>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-[11px] uppercase tracking-[0.2em] font-bold">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className={`relative transition-all duration-300 py-1.5 ${
                    isActive 
                      ? 'text-white' 
                      : 'text-zinc-500 hover:text-zinc-200'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeSubline"
                      className="absolute bottom-0 left-0 right-0 h-[1px] bg-white"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <button
              id="view-resume-btn"
              onClick={() => setResumeModalOpen(true)}
              className="bg-white text-black px-6 py-2.5 rounded-full font-bold hover:bg-zinc-200 duration-300 transition-all text-xs uppercase tracking-widest flex items-center gap-2 shadow-lg shadow-white/5"
            >
              <FileText size={14} />
              Resume
            </button>
          </div>

          {/* Mobile Hamburguer */}
          <div className="md:hidden flex items-center">
            <button
              id="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-zinc-400 hover:text-white focus:outline-none p-2"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-nav-panel"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden w-full z-40 bg-[#09090b] border-b border-zinc-800/40 overflow-hidden absolute"
          >
            <div className="px-5 pt-3 pb-6 flex flex-col gap-5 text-left text-xs uppercase tracking-[0.15em] font-bold">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(e) => handleNavClick(e, item.id)}
                    className={`font-sans py-2 border-b border-zinc-800/20 ${
                      isActive ? 'text-white font-bold' : 'text-zinc-400'
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
              <button
                id="mobile-resume-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setResumeModalOpen(true);
                }}
                className="w-full bg-white text-black py-3 rounded-full font-bold hover:bg-zinc-200 transition-all flex items-center justify-center gap-2 text-xs uppercase tracking-widest shadow-lg shadow-white/5"
              >
                <FileText size={14} />
                Open Resume Portfolio
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Resume Overlay Modal */}
      <AnimatePresence>
        {resumeModalOpen && (
          <div id="resume-modal" className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setResumeModalOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />
            
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 30 }}
              className="relative bg-[#0d0d0d] border border-zinc-800/60 w-full max-w-3xl rounded-2xl max-h-[85vh] overflow-y-auto shadow-2xl p-6 md:p-8"
            >
              <button
                id="close-resume-modal-btn"
                onClick={() => setResumeModalOpen(false)}
                className="absolute top-4 right-4 text-zinc-400 hover:text-white p-2 rounded-full hover:bg-white/5 transition-colors"
              >
                <X size={20} />
              </button>

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-zinc-800/40 pb-6 mb-6 text-left">
                <div>
                  <h2 className="font-headline text-3xl font-extrabold text-white">{portfolioMetadata.name}</h2>
                  <p className="text-zinc-400 font-mono text-xs tracking-wider uppercase mt-1">
                    {portfolioMetadata.role} · v2.1 Professional Manifest
                  </p>
                </div>
                <button
                  id="print-resume-btn"
                  onClick={() => window.print()}
                  className="bg-white/10 hover:bg-white/15 text-white py-2 px-4 rounded-lg font-semibold text-xs inline-flex items-center gap-2 border border-zinc-800 transition-colors self-start md:self-auto"
                >
                  <Download size={14} />
                  Print / Save PDF
                </button>
              </div>

              <div className="space-y-6 text-zinc-400 font-sans text-sm leading-relaxed text-left">
                <div>
                  <h3 className="text-white font-semibold flex items-center gap-2 text-base mb-2">
                    <Award size={16} className="text-white" />
                    Summary & Core Philosophy
                  </h3>
                  <p>
                    Passionate product-minded software architect specializing in building pixel-perfect, highly responsive layout modules with scalable TypeScript ecosystems. Dedicated to maintaining the highest finish, optimizing interactions, and rendering delightful digital portfolios.
                  </p>
                </div>

                <div>
                  <h3 className="text-white font-semibold flex items-center gap-2 text-base mb-3">
                    <Braces size={16} className="text-white" />
                    Interactive Sandbox Access (NPM Command)
                  </h3>
                  <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-850/60 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                    <code className="font-mono text-xs text-zinc-300 overflow-x-auto select-all">
                      npm install -g @keeyrun/portfolio-explorer
                    </code>
                    <button
                      id="copy-npm-btn"
                      onClick={handleCopyCommand}
                      className="bg-white/10 hover:bg-white/15 text-white text-xs px-3 py-1.5 rounded font-mono font-medium flex items-center justify-center gap-1.5 transition-colors shrink-0"
                    >
                      {copyingText ? (
                        <>
                          <Check size={12} className="text-emerald-400" />
                          Copied!
                        </>
                      ) : (
                        'Copy Command'
                      )}
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                  <div>
                    <h4 className="text-zinc-200 font-bold mb-2">Core Competencies</h4>
                    <ul className="list-disc pl-4 space-y-1 text-xs">
                      <li>Modern Single-Page Architectures</li>
                      <li>Tailwind CSS Atomization and Design Tokens</li>
                      <li>Advanced State Management</li>
                      <li>Semantic Web Access & Accessibility</li>
                      <li>Version Control Flow Management</li>
                      <li>Micro-Interactions & Layout Animations</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-zinc-200 font-bold mb-2">Education & Credentials</h4>
                    <ul className="list-disc pl-4 space-y-1 text-xs">
                      <li>B.Tech in Computer Science & Engineering</li>
                      <li>Certified Full Stack Systems Expert</li>
                      <li>Active UI/UX Open Source Contributor</li>
                    </ul>
                  </div>
                </div>

                <div className="border-t border-zinc-800/40 pt-6 flex flex-wrap justify-between gap-4 text-xs font-mono">
                  <span>Contact: {portfolioMetadata.email}</span>
                  <span>Location: {portfolioMetadata.location}</span>
                  <span>GitHub: github.com/keeyrun1</span>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
