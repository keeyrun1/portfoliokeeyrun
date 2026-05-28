import React from 'react';
import { portfolioMetadata } from '../data/portfolioData';

export default function Footer() {
  const handleScrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="w-full py-12 max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6 bg-[#080808]">
      <div className="flex flex-col gap-1.5 text-center md:text-left">
        <a 
          href="#top" 
          onClick={handleScrollToTop}
          className="font-headline text-lg sm:text-xl font-light tracking-tighter text-white hover:text-zinc-400 transition-colors duration-300 self-center md:self-start"
        >
          {portfolioMetadata.displayName}
        </a>
        <p className="text-zinc-500 font-sans text-xs md:text-sm">
          © 2026 {portfolioMetadata.name}. Built with technical mastery.
        </p>
      </div>

      <div className="flex gap-6 sm:gap-8 flex-wrap justify-center">
        <a 
          href="#" 
          className="text-zinc-500 hover:text-white transition-all duration-300 text-sm font-sans"
        >
          LinkedIn
        </a>
        <a 
          href={portfolioMetadata.github}
          target="_blank"
          rel="noreferrer"
          className="text-zinc-500 hover:text-white transition-all duration-300 text-sm font-sans"
        >
          GitHub
        </a>
        <a 
          href="#" 
          className="text-zinc-500 hover:text-white transition-all duration-300 text-sm font-sans"
        >
          Twitter
        </a>
        <a 
          href={`mailto:${portfolioMetadata.email}`}
          className="text-zinc-500 hover:text-white transition-all duration-300 text-sm font-sans"
        >
          Email
        </a>
      </div>
    </footer>
  );
}
