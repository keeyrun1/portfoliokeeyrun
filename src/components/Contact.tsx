import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, MapPin, Send, CheckCircle2, AlertCircle, History, Trash2 } from 'lucide-react';
import { ContactMessage } from '../types';
import { portfolioMetadata } from '../data/portfolioData';

export default function Contact() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  
  // Validation and process states
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [showLogDrawer, setShowLogDrawer] = useState(false);

  // Sent Messages mock pipeline
  const [sentMessages, setSentMessages] = useState<ContactMessage[]>([]);

  // Load any existing mock sent messages from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('kinetic_portfolio_messages');
    if (saved) {
      try {
        setSentMessages(JSON.parse(saved));
      } catch (err) {
        console.error("Failed to parse local stored messages");
      }
    }
  }, []);

  const validateForm = () => {
    const nextErrors: typeof errors = {};
    if (!fullName.trim()) nextErrors.name = 'Full name is required';
    if (!email.trim()) {
      nextErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nextErrors.email = 'Please provide a valid email address';
    }
    if (!message.trim()) nextErrors.message = 'Please input a short message description';
    
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    // Simulate real network latency (900ms)
    setTimeout(() => {
      const newMessage: ContactMessage = {
        id: Math.random().toString(36).substr(2, 9),
        name: fullName,
        email: email,
        message: message,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      const updatedMessages = [newMessage, ...sentMessages];
      setSentMessages(updatedMessages);
      localStorage.setItem('kinetic_portfolio_messages', JSON.stringify(updatedMessages));

      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Clear inputs
      setFullName('');
      setEmail('');
      setMessage('');
      setErrors({});

      // Toast feedback timeout
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 900);
  };

  const handleDeleteMessage = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const updated = sentMessages.filter(m => m.id !== id);
    setSentMessages(updated);
    localStorage.setItem('kinetic_portfolio_messages', JSON.stringify(updated));
  };

  return (
    <section id="contact" className="py-20 border-t border-zinc-800/40 relative text-left">
      <div className="bg-zinc-900/20 backdrop-blur-md border border-zinc-800/60 p-8 md:p-12 rounded-[40px] relative overflow-hidden">
        
        <div className="relative z-10 flex flex-col lg:flex-row items-stretch justify-between gap-12">
          
          {/* Informational column */}
          <div className="max-w-xl flex flex-col justify-between">
            <div className="space-y-6">
              <h2 className="font-headline text-4xl sm:text-5xl font-light text-white tracking-tighter leading-[1.05]">
                Let's build something exceptional.
              </h2>
              
              <p className="font-sans text-zinc-500 text-base leading-relaxed">
                Ready to transform your vision into a polished digital reality? I'm currently open to new opportunities, collaborations, or discussing state design module engineering.
              </p>
              
              <div className="space-y-4 pt-6">
                <div className="flex items-center gap-4 group cursor-pointer" onClick={() => window.location.href = `mailto:${portfolioMetadata.email}`}>
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-all duration-300">
                    <Mail className="text-white" size={18} />
                  </div>
                  <div className="text-left">
                    <span className="block text-xs font-mono text-zinc-650 uppercase tracking-[0.2em] font-normal">Direct Email</span>
                    <span className="text-base font-semibold text-zinc-350 group-hover:text-white transition-colors">{portfolioMetadata.email}</span>
                  </div>
                </div>

                <div className="flex items-center gap-4 group cursor-default">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-all duration-300">
                    <MapPin className="text-white" size={18} />
                  </div>
                  <div className="text-left">
                    <span className="block text-xs font-mono text-zinc-650 uppercase tracking-[0.2em] font-normal">Deployment Base</span>
                    <span className="text-base font-semibold text-zinc-350">{portfolioMetadata.location}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Interaction widget: local sent messages log tracker */}
            {sentMessages.length > 0 && (
              <div className="mt-12 pt-6 border-t border-zinc-800/40 self-start">
                <button
                  id="view-sent-logs-btn"
                  onClick={() => setShowLogDrawer(true)}
                  className="bg-zinc-950 hover:bg-zinc-90 w-full text-zinc-400 border border-zinc-850/60 font-mono text-[10px] tracking-wider uppercase font-bold py-2.5 px-4 rounded-xl inline-flex items-center gap-2 transition-all duration-300 cursor-pointer"
                >
                  <History size={13} className="text-white" />
                  Local Sandbox Outbox ({sentMessages.length})
                </button>
              </div>
            )}
          </div>

          {/* Form column */}
          <form onSubmit={handleSubmit} className="w-full lg:max-w-md space-y-5 text-left bg-zinc-950/20 p-6 rounded-2xl border border-zinc-850/40">
            
            {/* Full Name field */}
            <div className="space-y-1.5">
              <label className="font-mono text-[9px] font-bold tracking-[0.2em] text-zinc-550 uppercase">
                Full Name
              </label>
              <input 
                type="text"
                placeholder="John Doe"
                value={fullName}
                onChange={(e) => {
                  setFullName(e.target.value);
                  if (errors.name) setErrors(prev => ({ ...prev, name: undefined }));
                }}
                className={`w-full bg-zinc-900/30 border rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-1 focus:ring-white transition-all placeholder-zinc-700 ${
                  errors.name ? 'border-red-500' : 'border-zinc-800/60'
                }`}
              />
              {errors.name && (
                <span className="text-xs text-red-400 flex items-center gap-1 font-mono mt-1">
                  <AlertCircle size={11} /> {errors.name}
                </span>
              )}
            </div>

            {/* Email Address field */}
            <div className="space-y-1.5">
              <label className="font-mono text-[9px] font-bold tracking-[0.2em] text-zinc-550 uppercase">
                Email Address
              </label>
              <input 
                type="text"
                placeholder="john@example.com"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (errors.email) setErrors(prev => ({ ...prev, email: undefined }));
                }}
                className={`w-full bg-zinc-900/30 border rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-1 focus:ring-white transition-all placeholder-zinc-700 ${
                  errors.email ? 'border-red-500' : 'border-zinc-800/60'
                }`}
              />
              {errors.email && (
                <span className="text-xs text-red-500 flex items-center gap-1 font-mono mt-1">
                  <AlertCircle size={11} /> {errors.email}
                </span>
              )}
            </div>

            {/* Message field */}
            <div className="space-y-1.5">
              <label className="font-mono text-[9px] font-bold tracking-[0.2em] text-zinc-550 uppercase">
                Message
              </label>
              <textarea 
                rows={4}
                placeholder="Tell me about your project..."
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                  if (errors.message) setErrors(prev => ({ ...prev, message: undefined }));
                }}
                className={`w-full bg-zinc-900/30 border rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-1 focus:ring-white transition-all placeholder-zinc-700 ${
                  errors.message ? 'border-red-500' : 'border-zinc-800/60'
                }`}
              />
              {errors.message && (
                <span className="text-xs text-red-500 flex items-center gap-1 font-mono mt-1">
                  <AlertCircle size={11} /> {errors.message}
                </span>
              )}
            </div>

            <button
              id="submit-contact-form-btn"
              disabled={isSubmitting}
              className="w-full bg-white text-black py-4 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-zinc-200 disabled:bg-zinc-950 disabled:text-zinc-650 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer leading-none pr-3 shadow-lg shadow-white/5"
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 rounded-full border-2 border-black/20 border-t-black animate-spin" />
                  Compiling Message...
                </>
              ) : (
                <>
                  Send Message
                  <Send size={15} />
                </>
              )}
            </button>

          </form>

        </div>

        {/* Decorative subtle ambient circle elements */}
        <div className="absolute -right-20 -top-20 w-80 h-80 bg-zinc-800/5 blur-[90px] rounded-full pointer-events-none" />
        <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-zinc-700/5 blur-[90px] rounded-full pointer-events-none" />

      </div>

      {/* Success simulated notification popup (Toast representation) */}
      <AnimatePresence>
        {submitSuccess && (
          <motion.div
            id="success-toast-alert"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.9 }}
            className="fixed bottom-6 right-6 z-50 bg-white text-black p-4 pr-6 rounded-2xl shadow-2xl flex items-center gap-3.5 max-w-sm border border-zinc-200"
          >
            <CheckCircle2 size={24} className="shrink-0 text-black" />
            <div className="text-left">
              <p className="font-bold text-sm tracking-tight">Transmission Succeeded!</p>
              <p className="text-xs text-zinc-600 font-sans mt-0.5">Your message was appended to the Sandbox outbox logs perfectly.</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Outbox Local Message Log Drawer overlay */}
      <AnimatePresence>
        {showLogDrawer && (
          <div id="outbox-drawer" className="fixed inset-0 z-50 flex items-center justify-end">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowLogDrawer(false)}
              className="absolute inset-0 bg-black"
            />
            
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className="relative bg-[#0b0b0b] border-l border-zinc-800/60 w-full max-w-md h-full shadow-2xl p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-center pb-4 border-b border-zinc-800/40 mb-6 text-left">
                  <div>
                    <h3 className="font-light text-lg text-white flex items-center gap-2">
                      <History size={16} className="text-white" />
                      Local Sandbox Outbox
                    </h3>
                    <p className="text-[9px] font-mono text-zinc-550 uppercase tracking-widest mt-0.5">
                      Messages stored in browser's local sandbox
                    </p>
                  </div>
                  <button
                    id="close-outbox-drawer-btn"
                    onClick={() => setShowLogDrawer(false)}
                    className="p-1.5 hover:bg-white/5 rounded-lg text-zinc-400 hover:text-white font-mono text-xs cursor-pointer"
                  >
                    Close
                  </button>
                </div>

                <div className="space-y-4 max-h-[70vh] overflow-y-auto pr-1">
                  {sentMessages.map((msg) => (
                    <motion.div
                      layout
                      key={msg.id}
                      className="bg-zinc-950/40 border border-zinc-900/60 p-4 rounded-xl flex flex-col justify-between group/msg gap-2 text-left"
                    >
                      <div className="flex justify-between items-start gap-2">
                        <div>
                          <p className="text-xs font-bold text-zinc-300">{msg.name}</p>
                          <p className="text-[10px] font-mono text-zinc-550">{msg.email}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-mono text-zinc-500">{msg.timestamp}</span>
                          <button
                            id={`delete-msg-${msg.id}`}
                            onClick={(e) => handleDeleteMessage(msg.id, e)}
                            className="text-zinc-500 hover:text-red-400 p-1 rounded hover:bg-white/5 transition-colors opacity-0 group-hover/msg:opacity-100 cursor-pointer"
                            title="Delete Log"
                          >
                            <Trash2 size={12} />
                          </button>
                        </div>
                      </div>
                      <p className="text-xs text-zinc-500 leading-relaxed italic bg-zinc-950/20 p-2 rounded border border-zinc-900/40">
                        "{msg.message}"
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-zinc-800/40 flex justify-between items-center text-[10px] font-mono text-zinc-500 text-left">
                <span>OUTBOX CLIENT v2.1</span>
                <button
                  id="outbox-clear-all"
                  onClick={() => {
                    setSentMessages([]);
                    localStorage.removeItem('kinetic_portfolio_messages');
                    setShowLogDrawer(false);
                  }}
                  className="hover:text-red-400 font-bold uppercase tracking-wide cursor-pointer"
                >
                  Clear All History
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
