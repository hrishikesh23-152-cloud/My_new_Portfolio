"use client";
import React from "react";
import { StickyScroll } from '@/app/components/ui/sticky-scroll-reveal';
import portfolioData from '../data/data.json';

const WhyChooseUs = () => {
  const timelineData = [
    ...portfolioData.experience.map((exp) => ({
      title: `${exp.title} - ${exp.company}`,
      description: `${exp.period}\n\n${exp.description}`,
      content: (
        <div className="h-full w-full bg-zinc-950 p-8 flex flex-col justify-center text-white border border-zinc-800 rounded-lg">
          <span className="text-xs text-sky-400 font-extrabold tracking-wider uppercase">Professional Experience</span>
          <h3 className="text-2xl font-bold mt-3 text-zinc-100 leading-tight">{exp.company}</h3>
          <p className="text-sm text-sky-300/80 mt-1 font-medium">{exp.period}</p>
          <div className="mt-6 w-16 h-1 bg-gradient-to-r from-sky-400 to-blue-600 rounded-full"></div>
          <p className="mt-4 text-xs text-neutral-500 italic uppercase">{exp.title}</p>
        </div>
      )
    })),
    {
      title: "B.Tech in Computer Science and Engineering - Assam Engineering College",
      description: "2023 - 2027 (Expected)\n\nStudying core computer science disciplines including backend architecture, systems programming, databases, and machine learning. Maintained an active CGPA of 8.14.",
      content: (
        <div className="h-full w-full bg-zinc-950 p-8 flex flex-col justify-center text-white border border-zinc-800 rounded-lg">
          <span className="text-xs text-emerald-400 font-extrabold tracking-wider uppercase">Education</span>
          <h3 className="text-2xl font-bold mt-3 text-zinc-100 leading-tight">Assam Engineering College</h3>
          <p className="text-sm text-emerald-300/80 mt-1 font-medium">2023 - 2027</p>
          <div className="mt-6 w-16 h-1 bg-gradient-to-r from-emerald-400 to-teal-600 rounded-full"></div>
          <p className="mt-4 text-xs text-neutral-500 italic uppercase">B.Tech in CSE (CGPA: 8.14)</p>
        </div>
      )
    }
  ];

  return (
    <div id="experience" className="py-20 bg-black border-y border-zinc-900 px-6 md:px-12">
      <div className='text-center max-w-2xl mx-auto mb-16'>
        <h2 className='text-xs md:text-sm text-sky-400 font-bold uppercase tracking-widest'>Journey</h2>
        <h1 className='text-3xl md:text-5xl text-white font-bold tracking-tight mt-2'>Work & Education</h1>
        <p className='text-neutral-400 mt-4 text-sm md:text-base'>
          A timeline of my hands-on internships, fellowship training, and academic background.
        </p>
      </div>
      <div className="max-w-5xl mx-auto rounded-xl overflow-hidden border border-zinc-900">
        <StickyScroll content={timelineData} />
      </div>
    </div>
  );
}

export default WhyChooseUs;

