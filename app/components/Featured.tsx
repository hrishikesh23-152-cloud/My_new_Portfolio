import React from 'react'
import portfolioData from '../data/data.json'
import { BackgroundGradient } from '@/app/components/ui/background-gradient';
import { Star, GitFork, ArrowUpRight } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  slug: string;
  description: string;
  githubUrl: string;
  tags: string[];
  stars: number;
  isFeatured: boolean;
}

const Featured = () => {
  const featuredProjects = portfolioData.projects.filter((project: Project) => project.isFeatured);

  return (
    <div id="projects" className='py-20 bg-zinc-950 mt-10 px-6 md:px-12'>
      <div className='text-center max-w-2xl mx-auto'>
        <h2 className='text-xs md:text-sm text-sky-400 font-bold uppercase tracking-widest'>My Work</h2>
        <h1 className='text-3xl md:text-5xl text-white font-bold tracking-tight mt-2'>Featured Projects</h1>
        <p className='text-neutral-400 mt-4 text-sm md:text-base'>
          A handpicked selection of backend architectures, AI integrations, and full-stack applications.
        </p>
      </div>

      <div className='mt-16 max-w-6xl mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 justify-center'>
          {
            featuredProjects.map((project: Project) => (
              <div key={project.id} className='flex justify-center'>
                <BackgroundGradient className='flex flex-col rounded-[22px] bg-zinc-900/90 overflow-hidden h-full w-full p-6 border border-zinc-800/50 hover:border-sky-500/30 transition duration-500'>
                  <div className='flex flex-col h-full justify-between gap-6'>
                    
                    <div className='flex flex-col gap-3'>
                      <div className='flex justify-between items-start'>
                        <h3 className='text-xl md:text-2xl font-bold text-white tracking-tight'>{project.title}</h3>
                        {project.stars > 0 && (
                          <div className='flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-yellow-500/10 text-yellow-400 text-xs font-semibold'>
                            <Star className='w-3 h-3 fill-yellow-400' />
                            <span>{project.stars}</span>
                          </div>
                        )}
                      </div>
                      
                      <p className='text-sm text-neutral-400 leading-relaxed mt-2'>{project.description}</p>
                    </div>

                    <div className='flex flex-col gap-4 mt-auto'>
                      {/* Tags */}
                      <div className='flex flex-wrap gap-2'>
                        {project.tags.map((tag, idx) => (
                          <span 
                            key={idx} 
                            className='px-2.5 py-1 rounded-md bg-zinc-800 text-zinc-300 text-xs font-medium border border-zinc-700/40'
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Link */}
                      <div className='pt-2 border-t border-zinc-800/60 flex justify-end'>
                        <a 
                          href={project.githubUrl} 
                          target='_blank' 
                          rel='noopener noreferrer'
                          className='inline-flex items-center gap-1.5 text-xs text-sky-400 font-semibold hover:text-sky-300 transition duration-200'
                        >
                          View Repository
                          <ArrowUpRight className='w-3.5 h-3.5' />
                        </a>
                      </div>
                    </div>

                  </div>
                </BackgroundGradient>
              </div>
            ))
          }
        </div>
      </div>

      <div className='text-center mt-16'>
        <a 
          href="https://github.com/hrishikesh23-152-cloud" 
          target="_blank" 
          rel="noopener noreferrer"
          className='inline-flex items-center gap-2 text-white font-medium py-3 px-6 bg-zinc-900 border border-zinc-800 rounded-xl hover:bg-zinc-800 hover:border-zinc-700 transition duration-300 shadow-lg'
        >
          View All GitHub Repositories
          <ArrowUpRight className='w-4 h-4 text-neutral-400' />
        </a>
      </div>
    </div>
  )
}

export default Featured
