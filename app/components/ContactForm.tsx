"use client";
import React, { useState } from 'react';
import portfolioData from '../data/data.json';
import { Github, Linkedin, Award, ExternalLink, Mail, MapPin, Copy, Check, Send } from 'lucide-react';

const ContactForm = () => {
  const { socials, email, location } = portfolioData.profile;
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleCopyEmail = () => {
    if (email) {
      navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('submitting');
    // Simulate API call/processing message
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    }, 1500);
  };

  return (
    <div id="contact" className="py-20 bg-black px-6 md:px-12 relative overflow-hidden">
      {/* Decorative grids */}
      <div className="absolute inset-0 bg-grid-white-faded opacity-50 pointer-events-none"></div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-xs md:text-sm text-sky-400 font-bold uppercase tracking-widest">Connect</h2>
          <h1 className="text-3xl md:text-5xl text-white font-bold tracking-tight mt-2">Let's Work Together</h1>
          <p className="text-neutral-400 mt-4 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            I am interested in backend engineering roles, AI system integrations, and collaborative full-stack projects. Contact me directly or drop a message below!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mt-12 items-start">
          {/* Contact info column (2/5 size) */}
          <div className="lg:col-span-2 flex flex-col gap-6 w-full">
            <h3 className="text-xl font-bold text-white tracking-tight mb-2">Contact Details</h3>
            
            {/* Email Card */}
            <div className="p-5 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 backdrop-blur-xl flex flex-col gap-3 relative group">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-sky-500/10 text-sky-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <h4 className="text-sm font-semibold text-neutral-400">Email Address</h4>
                  <a href={`mailto:${email}`} className="text-base font-bold text-white hover:text-sky-400 transition break-all mt-0.5 inline-block">
                    {email}
                  </a>
                </div>
              </div>
              <button 
                onClick={handleCopyEmail}
                className="mt-2 text-xs flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-zinc-950 border border-zinc-800 text-neutral-400 hover:text-white hover:border-zinc-700 hover:bg-zinc-900 transition cursor-pointer w-full"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400 font-semibold">Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Email Address</span>
                  </>
                )}
              </button>
            </div>

            {/* Location Card */}
            <div className="p-5 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 backdrop-blur-xl flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="text-left">
                <h4 className="text-sm font-semibold text-neutral-400">Location</h4>
                <p className="text-base font-bold text-white mt-0.5">{location}</p>
              </div>
            </div>

            <h3 className="text-xl font-bold text-white tracking-tight mt-6 mb-2">Social Profiles</h3>
            {/* Social Links Grid */}
            <div className="grid grid-cols-2 gap-4">
              <a 
                href={socials.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-xl bg-zinc-900/40 border border-zinc-800 hover:border-sky-500/30 transition duration-300 group"
              >
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-lg bg-sky-500/10 text-sky-400">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold text-white">LinkedIn</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-neutral-500 group-hover:text-sky-400 transition" />
              </a>

              <a 
                href={socials.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-xl bg-zinc-900/40 border border-zinc-800 hover:border-sky-500/30 transition duration-300 group"
              >
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-lg bg-neutral-500/10 text-white">
                    <Github className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold text-white">GitHub</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-neutral-500 group-hover:text-white transition" />
              </a>

              <a 
                href={socials.leetcode} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-xl bg-zinc-900/40 border border-zinc-800 hover:border-sky-500/30 transition duration-300 group"
              >
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-lg bg-yellow-500/10 text-yellow-500">
                    <Award className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold text-white">LeetCode</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-neutral-500 group-hover:text-yellow-500 transition" />
              </a>

              <a 
                href={socials.gfg} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-xl bg-zinc-900/40 border border-zinc-800 hover:border-sky-500/30 transition duration-300 group"
              >
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-500">
                    <Award className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold text-white">GeeksforGeeks</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-neutral-500 group-hover:text-emerald-500 transition" />
              </a>
            </div>
          </div>

          {/* Form column (3/5 size) */}
          <div className="lg:col-span-3 w-full p-6 md:p-8 rounded-3xl bg-zinc-900/30 border border-zinc-800/80 backdrop-blur-xl relative">
            <h3 className="text-xl font-bold text-white tracking-tight mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="John Doe"
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl py-3 px-4 text-sm text-white focus:outline-none focus:border-sky-500/60 focus:ring-1 focus:ring-sky-500/20 transition duration-200"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="john@example.com"
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl py-3 px-4 text-sm text-white focus:outline-none focus:border-sky-500/60 focus:ring-1 focus:ring-sky-500/20 transition duration-200"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="subject" className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Inquiry / Partnership / Greeting"
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl py-3 px-4 text-sm text-white focus:outline-none focus:border-sky-500/60 focus:ring-1 focus:ring-sky-500/20 transition duration-200"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  placeholder="Hey Hrishikesh, let's discuss..."
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl py-3 px-4 text-sm text-white focus:outline-none focus:border-sky-500/60 focus:ring-1 focus:ring-sky-500/20 transition duration-200 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="mt-2 w-full py-3.5 px-6 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 transition duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-lg disabled:opacity-50"
              >
                {status === 'idle' && (
                  <>
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
                {status === 'submitting' && (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                    <span>Sending...</span>
                  </>
                )}
                {status === 'success' && (
                  <>
                    <Check className="w-4 h-4 text-emerald-300" />
                    <span className="text-emerald-300">Message Sent!</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
