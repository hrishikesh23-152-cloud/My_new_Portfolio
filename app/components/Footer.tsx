"use client";
import React from 'react';
import portfolioData from '../data/data.json';
import { Github, Linkedin, Award, ArrowUp } from 'lucide-react';

const Footer = () => {
  const { name, socials } = portfolioData.profile;
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-black border-t border-zinc-900/80 py-12 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-blue-500 tracking-tight">
            {name}
          </span>
          <p className="text-xs text-neutral-500">
            &copy; {currentYear} {name}. All rights reserved.
          </p>
        </div>

        <div className="flex gap-6 items-center">
          <a
            href={socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-500 hover:text-white transition duration-200"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href={socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-500 hover:text-sky-400 transition duration-200"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href={socials.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-500 hover:text-yellow-500 transition duration-200"
            aria-label="LeetCode"
          >
            <Award className="w-5 h-5" />
          </a>
          <a
            href={socials.gfg}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-500 hover:text-emerald-500 transition duration-200"
            aria-label="GeeksforGeeks"
          >
            <span className="font-extrabold text-xs tracking-tighter">GfG</span>
          </a>
        </div>

        <div>
          <button
            onClick={handleScrollToTop}
            className="p-2.5 rounded-full bg-zinc-900 border border-zinc-800 hover:border-sky-500/50 hover:bg-zinc-800 text-neutral-400 hover:text-white transition duration-300 shadow-md flex items-center justify-center cursor-pointer"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
