import Link from "next/link"
import { Spotlight } from "./ui/Spotlight"
import { Button } from "./ui/moving-border";
import portfolioData from '../data/data.json';

function HeroSection() {
  const { name, title, tagline, subheading } = portfolioData.profile;

  return (
    <div
      id="home"
      className="h-screen w-full flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0 bg-black/[0.9]"
    >
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="rgba(56, 189, 248, 0.3)"
      />
      <div className="p-4 relative z-10 w-full text-center max-w-4xl px-6 md:px-12" >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-sky-500/30 bg-sky-500/10 text-sky-400 text-xs md:text-sm font-medium mb-6">
          <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse"></span>
          Open to Opportunities
        </div>
        <h1
          className="mt-4 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 tracking-tight leading-none"
        >
          Hi, I’m {name}
        </h1>
        <p className="mt-4 text-lg md:text-2xl text-sky-400/90 font-medium">
          {title}
        </p>
        <p
          className="mt-6 font-normal text-sm md:text-lg text-neutral-400 max-w-2xl mx-auto leading-relaxed"
        >
          {subheading}. <br className="hidden md:inline"/>
          {tagline}
        </p>
        <div className="mt-10 flex flex-wrap gap-4 justify-center items-center">
          <a href="#projects">
            <Button
              borderRadius="1.75rem"
              className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              Explore Projects
            </Button>
          </a>
          <a 
            href="#contact" 
            className="px-6 py-3 rounded-full border border-neutral-800 hover:border-sky-500/50 bg-black/40 text-neutral-300 hover:text-white transition duration-300 text-sm font-medium"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </div>
  )
}

export default HeroSection

