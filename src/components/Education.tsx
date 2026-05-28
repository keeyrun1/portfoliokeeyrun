import { motion } from 'motion/react';
import { educations, labCertifications } from '../data/portfolioData';
import { ExternalLink, FlaskConical, Cpu, Terminal, ShieldCheck, Award } from 'lucide-react';

export default function Education() {
  const handleVerifyRedirect = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="education" className="py-20 border-t border-zinc-800/40 text-left">
      
      {/* Education Header */}
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 mb-6">
          <span className="w-2 h-[1px] bg-zinc-650"></span>
          <span className="text-xs uppercase tracking-[0.3em] text-zinc-500 font-bold">Verified Logs & Credentials</span>
        </div>
        <h2 className="font-headline text-4xl font-light text-white mb-4 tracking-tighter">
          Academic Foundations
        </h2>
        <p className="text-zinc-500 text-sm sm:text-base leading-relaxed max-w-2xl font-sans">
          Rigorous systems preparation and academic methodologies under corporate standards.
        </p>
      </div>

      {/* Degree Card Grid */}
      <div className="grid grid-cols-1 gap-8 mb-20">
        {educations.filter(item => item.id === 'edu1').map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
            className="group bg-zinc-950/40 border border-zinc-900/80 rounded-2xl overflow-hidden transition-all duration-300 relative text-left p-6 sm:p-8 flex flex-col gap-6"
          >
            {/* Top Content Area */}
            <div className="flex flex-col justify-between py-1">
              <div>
                <div className="flex flex-wrap items-center gap-2.5 mb-3">
                  <span className="font-mono text-[9px] font-bold text-zinc-400 uppercase tracking-widest bg-zinc-900 border border-zinc-850 px-2 py-0.5 rounded">
                    {item.type}
                  </span>
                  <span className="font-mono text-[9px] text-zinc-500 font-bold uppercase tracking-widest">
                    Verified ID: CST-2011
                  </span>
                </div>
                
                <h3 className="font-headline text-2xl font-semibold text-zinc-100 mb-2 tracking-tight group-hover:text-white transition-colors">
                  {item.title}
                </h3>
                <span className="text-xs font-mono text-zinc-400 block mb-4">{item.provider}</span>
                
                <p className="text-zinc-500 text-sm leading-relaxed font-sans max-w-3xl">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-zinc-900 flex md:justify-start">
                <span className="inline-flex items-center gap-2 text-[10px] font-mono tracking-widest text-zinc-400">
                  <Terminal size={12} className="text-zinc-650" /> SYSTEM RESOLUTION: SUCCESS [CLASS_COMPRESSED]
                </span>
              </div>
            </div>

            {/* Embedded illustration display moved to the bottom */}
            <div className="w-full h-40 sm:h-52 md:h-64 overflow-hidden rounded-xl relative shrink-0">
              <img 
                alt={item.title} 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-750 ease-out filter grayscale contrast-110 brightness-95 group-hover:grayscale-0" 
                src={item.image}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Certifications section header */}
      <div className="mb-12 pt-6">
        <div className="inline-flex items-center gap-2 mb-6">
          <Award size={14} className="text-zinc-500 animate-pulse" />
          <span className="text-xs uppercase tracking-[0.3em] text-zinc-500 font-bold">Authenticated Credentials</span>
        </div>
        <h2 className="font-headline text-4xl font-light text-white mb-4 tracking-tighter">
          Professional Certifications
        </h2>
        <p className="text-zinc-500 text-sm sm:text-base leading-relaxed max-w-2xl font-sans">
          Verified professional credentials validating enterprise architecture domain mastery, public cloud engineering expertise, and financial services frameworks. Select any card to launch official certificate verification.
        </p>
      </div>

      {/* High tech lab layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {labCertifications.map((cert) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            whileHover={{ y: -4, borderColor: 'rgba(255, 255, 255, 0.15)' }}
            className="group relative bg-[#09090b]/80 border border-zinc-900/80 rounded-xl p-6 flex flex-col justify-between transition-all duration-300 hover:bg-[#0c0c0e]"
          >
            {/* Corner Tech Decorator Grid */}
            <div className="absolute top-0 right-0 w-8 h-8 pointer-events-none overflow-hidden">
              <div className="absolute top-0 right-0 w-[1px] h-3 bg-zinc-800" />
              <div className="absolute top-0 right-0 h-[1px] w-3 bg-zinc-800" />
            </div>

            {/* Top Lab Header Info */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-[9px] text-zinc-500 bg-zinc-950 px-2 py-1 rounded border border-zinc-900 font-bold">
                  {cert.systemCode}
                </span>

                {/* status sign with pulsating flash effect */}
                <div className="flex items-center gap-1.5 font-mono text-[9px]">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                  </span>
                  <span className="text-[9px] tracking-wider text-emerald-400 font-black">
                    {cert.status}
                  </span>
                </div>
              </div>

              <h4 className="font-sans text-lg font-bold text-zinc-150 leading-snug tracking-tight mb-3 group-hover:text-white transition-colors">
                {cert.title}
              </h4>
              
              <div className="space-y-1.5 font-mono text-[11px] text-zinc-500 mb-6">
                <div className="flex justify-between border-b border-zinc-950 pb-1">
                  <span>Authority:</span>
                  <span className="text-zinc-300 font-semibold">{cert.issuer}</span>
                </div>
                <div className="flex justify-between border-b border-zinc-950 pb-1">
                  <span>Issued Date:</span>
                  <span className="text-zinc-400">{cert.issued}</span>
                </div>
                {cert.expires && (
                  <div className="flex justify-between border-b border-zinc-950 pb-1">
                    <span>Expiration:</span>
                    <span className="text-zinc-500">{cert.expires}</span>
                  </div>
                )}
                {cert.credentialId && (
                  <div className="flex justify-between">
                    <span>Protocol ID:</span>
                    <span className="text-zinc-400 select-all">{cert.credentialId}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Bottom Actions and Link Redirect */}
            <div className="pt-4 border-t border-zinc-950 flex flex-col gap-2">
              <button
                onClick={() => handleVerifyRedirect(cert.verifyUrl)}
                className="w-full bg-zinc-950 hover:bg-white hover:text-black border border-zinc-900 hover:border-white transition-all duration-300 text-[10px] font-mono py-2 rounded font-bold uppercase tracking-widest flex items-center justify-center gap-1.5 group-hover:shadow-lg"
              >
                <span>Verify Protocol Link</span>
                <ExternalLink size={10} />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
