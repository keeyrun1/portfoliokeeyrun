import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Journey from './components/Journey';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('summary');

  // Intelligent Scroll-Spy listener
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['summary', 'experience', 'skills', 'education', 'contact'];
      const scrollPosition = window.scrollY + 120; // adjust offset for visual trigger

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial run
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id="kinetic-portfolio-root" className="min-h-screen bg-[#080808] text-zinc-100 relative overflow-x-hidden font-sans selection:bg-white/10 selection:text-white">
      
      {/* Visual Ambient backgrounds */}
      <div className="absolute top-0 inset-x-0 h-[600px] bg-gradient-to-b from-zinc-900/10 to-[#080808] pointer-events-none z-0" />
      <div className="absolute top-[1200px] left-[-200px] w-[500px] h-[500px] bg-zinc-800/2 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[800px] right-[-200px] w-[600px] h-[600px] bg-zinc-700/2 blur-[140px] rounded-full pointer-events-none" />

      {/* Sticky Navigation Header */}
      <Header activeSection={activeSection} />

      {/* Central Content Canvas */}
      <main className="max-w-[1200px] mx-auto px-5 md:px-6 relative z-10 space-y-4">
        
        {/* Core Sections */}
        <Hero />
        
        <Stats />
        
        <Journey />
        
        <TechStack />

        <Projects />
        
        <Education />
        
        <Contact />

      </main>

      {/* Persistent Footer */}
      <div className="bg-[#080808] border-t border-zinc-800/40 px-5 md:px-6">
        <Footer />
      </div>

    </div>
  );
}
