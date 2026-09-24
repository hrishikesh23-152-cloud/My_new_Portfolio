"use client";
import React from 'react';
import portfolioData from '../data/data.json';
import { Cpu, BrainCircuit, Database, Layout, Code2, Layers, Sparkles, Binary, Settings } from 'lucide-react';
import { motion } from 'motion/react';

const categoryIcons: Record<string, React.ReactNode> = {
  "Languages": <Code2 className="w-6 h-6 text-amber-400" />,
  "Backend": <Cpu className="w-6 h-6 text-sky-400" />,
  "Frontend": <Layout className="w-6 h-6 text-pink-400" />,
  "Databases": <Database className="w-6 h-6 text-emerald-400" />,
  "Messaging & Distributed Systems": <Layers className="w-6 h-6 text-violet-400" />,
  "Generative AI": <Sparkles className="w-6 h-6 text-indigo-400" />,
  "Machine Learning": <Binary className="w-6 h-6 text-teal-400" />,
  "DevOps & Tools": <Settings className="w-6 h-6 text-rose-400" />
};

const categoryBorders: Record<string, string> = {
  "Languages": "hover:border-amber-500/40 hover:shadow-amber-500/5",
  "Backend": "hover:border-sky-500/40 hover:shadow-sky-500/5",
  "Frontend": "hover:border-pink-500/40 hover:shadow-pink-500/5",
  "Databases": "hover:border-emerald-500/40 hover:shadow-emerald-500/5",
  "Messaging & Distributed Systems": "hover:border-violet-500/40 hover:shadow-violet-500/5",
  "Generative AI": "hover:border-indigo-500/40 hover:shadow-indigo-500/5",
  "Machine Learning": "hover:border-teal-500/40 hover:shadow-teal-500/5",
  "DevOps & Tools": "hover:border-rose-500/40 hover:shadow-rose-500/5"
};

const Skills = () => {
  const skillsData = portfolioData.skills;

  return (
    <div id="skills" className="py-20 bg-zinc-950 px-6 md:px-12 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-sky-500/5 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className='text-center max-w-2xl mx-auto mb-16 relative z-10'>
        <h2 className='text-xs md:text-sm text-sky-400 font-bold uppercase tracking-widest'>Expertise</h2>
        <h1 className='text-3xl md:text-5xl text-white font-bold tracking-tight mt-2'>Technical Skillset</h1>
        <p className='text-neutral-400 mt-4 text-sm md:text-base'>
          Proficiencies in backend engineering, database modeling, frontend client-side rendering, and GenAI workflows.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        {Object.entries(skillsData).map(([category, skills], index) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800 backdrop-blur-xl transition-all duration-300 shadow-md ${categoryBorders[category] || 'hover:border-sky-500/40'}`}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800/80 shadow-inner">
                {categoryIcons[category] || <Cpu className="w-6 h-6 text-sky-400" />}
              </div>
              <h3 className="text-lg font-bold text-white tracking-tight">{category}</h3>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {skills.map((skill: string, idx: number) => (
                <span
                  key={idx}
                  className="px-3.5 py-1.5 rounded-lg bg-zinc-950 text-neutral-300 text-xs font-semibold border border-zinc-850 hover:border-zinc-700/60 hover:text-white transition duration-200 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
