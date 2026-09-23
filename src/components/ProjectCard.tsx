import React from 'react';
import Image from 'next/image';
import { Project } from '@/data/projects';
import { ExternalLink, ArrowUpRight, Smartphone, CheckCircle2 } from 'lucide-react';
import { Github } from '@/components/Icons';

interface ProjectCardProps {
  project: Project;
  onSelectWorkflow?: (workflowId: 'audio-to-note' | 'sm-data') => void;
}

export default function ProjectCard({ project, onSelectWorkflow }: ProjectCardProps) {
  return (
    <article className="group rounded-3xl bg-white dark:bg-[#0b0e14] border border-slate-200 dark:border-white/10 hover:border-[#a3e635]/50 dark:hover:border-[#a3e635]/50 flex flex-col overflow-hidden shadow-sm hover:shadow-xl hover:shadow-[#a3e635]/10 transition-all duration-300">
      {/* Cover Screenshot Container */}
      <div className="relative w-full aspect-[16/10] bg-slate-950 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-104"
        />

        {/* Ambient Top Shadow */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/20 opacity-70 group-hover:opacity-40 transition-opacity pointer-events-none" />

        {/* Category Pill Tag */}
        <div className="absolute top-4 left-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-slate-950/80 text-white backdrop-blur-md border border-white/10 shadow-sm">
            {project.category === 'Mobile Apps' ? (
              <Smartphone className="w-3.5 h-3.5 text-[#a3e635]" />
            ) : null}
            {project.category}
          </span>
        </div>

        {/* Live Status Pill */}
        <div className="absolute top-4 right-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-slate-950/80 text-[#a3e635] backdrop-blur-md border border-[#a3e635]/30 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#a3e635] animate-pulse" />
            <span>Active Production</span>
          </span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6 sm:p-7 flex flex-col flex-grow space-y-4">
        <div>
          <div className="flex items-center justify-between gap-2">
            <h3 className="text-xl font-extrabold text-slate-900 dark:text-white group-hover:text-[#a3e635] transition-colors">
              {project.title}
            </h3>
            {project.repoUrl && (
              <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#a3e635] shrink-0">
                <CheckCircle2 className="w-3 h-3" />
                Verified
              </span>
            )}
          </div>
          <p className="text-xs font-bold text-[#84cc16] dark:text-[#a3e635] mt-0.5">
            {project.role}
          </p>
        </div>

        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3">
          {project.description}
        </p>

        {/* Tech Stack Chips */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.technologies.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-white/10"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 5 && (
            <span className="px-2.5 py-1 rounded-lg text-xs font-medium text-slate-400 dark:text-slate-500">
              +{project.technologies.length - 5}
            </span>
          )}
        </div>

        {/* Action Buttons Row */}
        <div className="pt-4 border-t border-slate-100 dark:border-white/10 mt-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-extrabold bg-[#a3e635] hover:bg-[#bef264] text-black shadow-[0_0_15px_rgba(163,230,53,0.3)] transition-all active:scale-95"
              >
                <span>Live Demo</span>
                <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </a>
            )}

            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-semibold bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-white/10 hover:border-[#a3e635]/40 hover:text-[#a3e635] transition-colors"
                title="View GitHub repository proof"
              >
                <Github className="w-3.5 h-3.5" />
                <span>Code</span>
              </a>
            )}
          </div>

          {project.workflowId && onSelectWorkflow && (
            <button
              onClick={() => onSelectWorkflow(project.workflowId!)}
              className="inline-flex items-center gap-1 text-xs font-bold text-[#84cc16] dark:text-[#a3e635] hover:underline"
            >
              <span>View Workflow</span>
              <ArrowUpRight className="w-3 h-3 stroke-[2.5]" />
            </button>
          )}
        </div>
      </div>
    </article>
  );
}
