import React from 'react';
import { Mail, MapPin, Linkedin } from 'lucide-react';
import { portfolioMetadata } from '../data/portfolioData';

export default function Contact() {
  return (
    <section id="contact" className="py-20 border-t border-zinc-800/40 relative text-center">
      <div className="bg-zinc-900/20 backdrop-blur-md border border-zinc-800/60 p-8 md:p-12 rounded-[40px] relative overflow-hidden max-w-3xl mx-auto">
        
        <div className="relative z-10 flex flex-col items-center justify-center gap-8 max-w-xl mx-auto">
          
          <div className="space-y-4">
            <h2 className="font-headline text-4xl sm:text-5xl font-light text-white tracking-tighter leading-[1.05] text-center">
              Let's build something exceptional.
            </h2>
            
            <p className="font-sans text-zinc-500 text-sm sm:text-base leading-relaxed text-center">
              Ready to transform your vision into a polished digital reality? I'm currently open to new opportunities, collaborations, or discussing software architecture optimization.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full pt-4">
            <a 
              href={`mailto:${portfolioMetadata.email}`}
              className="flex items-center gap-4 bg-zinc-950/60 border border-zinc-900 hover:border-zinc-800/80 p-4 rounded-2xl transition-all duration-300 group hover:bg-zinc-950"
            >
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-all duration-300 shrink-0">
                <Mail className="text-zinc-400 group-hover:text-white transition-colors" size={16} />
              </div>
              <div className="text-left font-sans">
                <span className="block text-[9px] font-mono text-zinc-500 uppercase tracking-[0.2em] font-normal">Direct Email</span>
                <span className="text-sm font-semibold text-zinc-300 group-hover:text-white transition-colors break-all">{portfolioMetadata.email}</span>
              </div>
            </a>

            <a 
              href={portfolioMetadata.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 bg-zinc-950/60 border border-zinc-900 hover:border-zinc-800/80 p-4 rounded-2xl transition-all duration-300 group hover:bg-zinc-950"
            >
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-all duration-300 shrink-0">
                <Linkedin className="text-zinc-400 group-hover:text-white transition-colors" size={16} />
              </div>
              <div className="text-left font-sans">
                <span className="block text-[9px] font-mono text-zinc-500 uppercase tracking-[0.2em] font-normal">Professional Network</span>
                <span className="text-sm font-semibold text-zinc-300 group-hover:text-white transition-colors">LinkedIn Profile</span>
              </div>
            </a>

            <div className="flex items-center gap-4 bg-zinc-950/60 border border-zinc-900 p-4 rounded-2xl col-span-1 sm:col-span-2">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                <MapPin className="text-zinc-400" size={16} />
              </div>
              <div className="text-left font-sans">
                <span className="block text-[9px] font-mono text-zinc-550 uppercase tracking-[0.2em] font-normal">Deployment Base</span>
                <span className="text-sm font-semibold text-zinc-300">{portfolioMetadata.location}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Decorative subtle ambient circle elements */}
        <div className="absolute -right-20 -top-20 w-80 h-80 bg-zinc-800/5 blur-[90px] rounded-full pointer-events-none" />
        <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-zinc-700/5 blur-[90px] rounded-full pointer-events-none" />

      </div>
    </section>
  );
}
