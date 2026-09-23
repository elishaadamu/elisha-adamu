import React from 'react';
import Image from 'next/image';
import { Project } from '@/data/projects';
import { ExternalLink, ArrowUpRight, Smartphone, CheckCircle2, Lock, Globe } from 'lucide-react';
import { Github } from '@/components/Icons';

interface ProjectCardProps {
  project: Project;
  onSelectWorkflow?: (workflowId: 'audio-to-note' | 'sm-data') => void;
}

export default function ProjectCard({ project, onSelectWorkflow }: ProjectCardProps) {
  const isMobile = project.category === 'Mobile Apps';
  const displayUrl = project.liveUrl
    ? project.liveUrl.replace(/^https?:\/\//, '').replace(/\/$/, '')
    : `${project.id}.app`;

  return (
    <article className="group rounded-3xl bg-[#0b0e14] border border-white/10 hover:border-[#a3e635]/60 flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1.5 relative">
      {/* Top Hairline Glow Accent on Card Hover */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#a3e635]/0 group-hover:via-[#a3e635]/60 to-transparent transition-opacity duration-300 z-30" />

      {/* Realistic Device / Browser Mockup Container */}
      <div className="relative w-full bg-[#06080c] border-b border-white/10 overflow-hidden">
        {/* macOS Dark Browser Header (for Web Apps) or Mobile Frame Header (for Mobile Apps) */}
        {!isMobile ? (
          <div className="px-4 py-2.5 bg-[#080b11] border-b border-white/[0.08] flex items-center justify-between gap-2 select-none">
            {/* macOS Window Controls */}
            <div className="flex items-center gap-1.5 shrink-0">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]/90 border border-[#e0443e]/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]/90 border border-[#dea123]/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]/90 border border-[#1aab29]/80" />
            </div>

            {/* Browser Address Bar Pill */}
            <div className="flex-1 max-w-[220px] sm:max-w-[280px] mx-auto bg-[#040608] border border-white/[0.08] rounded-md px-2.5 py-0.5 flex items-center justify-center gap-1.5 text-[10px] text-slate-400 font-mono truncate">
              <Lock className="w-2.5 h-2.5 text-[#a3e635] shrink-0" />
              <span className="truncate">{displayUrl}</span>
            </div>

            {/* Active Uptime Beacon */}
            <div className="flex items-center gap-1 shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-[#a3e635] animate-pulse" />
              <span className="text-[10px] font-mono text-[#a3e635] hidden sm:inline">99.9%</span>
            </div>
          </div>
        ) : (
          <div className="px-4 py-2 bg-[#080b11] border-b border-white/[0.08] flex items-center justify-between text-[11px] font-mono text-slate-400 select-none">
            <span className="flex items-center gap-1 text-[#a3e635]">
              <Smartphone className="w-3.5 h-3.5" />
              <span>Android / React Native</span>
            </span>
            <span className="flex items-center gap-1 text-slate-500">
              <span className="w-1.5 h-1.5 rounded-full bg-[#a3e635] animate-pulse" />
              <span>APK Built</span>
            </span>
          </div>
        )}

        {/* Viewport Screenshot with Smooth Tactile Hover Reveal */}
        <div className={`relative w-full overflow-hidden ${isMobile ? 'aspect-[16/11] bg-black/80 flex items-center justify-center p-3' : 'aspect-[16/10] bg-slate-950'}`}>
          {isMobile ? (
            /* Smartphone Mockup Frame inside card */
            <div className="relative h-full aspect-[9/16] rounded-2xl overflow-hidden border-2 border-slate-700/80 bg-black">
              {/* Dynamic Island */}
              <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-10 h-2 bg-slate-900 rounded-full z-20" />
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, 300px"
                className="object-contain transition-transform duration-500 ease-out group-hover:scale-105"
              />
            </div>
          ) : (
            /* Web Viewport Screenshot */
            <div className="relative w-full h-full">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-103"
              />
              {/* Subtle Ambient Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#06080c]/60 via-transparent to-black/10 opacity-60 group-hover:opacity-20 transition-opacity pointer-events-none" />
            </div>
          )}

          {/* Floating Category Badge */}
          <div className="absolute bottom-3 left-3 z-20">
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider bg-[#06080c]/90 text-white backdrop-blur-md border border-white/10 font-mono">
              {project.category}
            </span>
          </div>

          {/* Floating Live Preview Pill on Hover */}
          {project.liveUrl && (
            <div className="absolute bottom-3 right-3 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-[10px] font-bold bg-[#a3e635] text-black">
                <span>View Live</span>
                <ArrowUpRight className="w-3 h-3 stroke-[2.5]" />
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6 sm:p-7 flex flex-col flex-grow space-y-4">
        <div>
          <div className="flex items-center justify-between gap-2">
            <h3 className="text-xl font-extrabold text-white group-hover:text-[#a3e635] transition-colors tracking-tight">
              {project.title}
            </h3>
            {project.repoUrl && (
              <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#a3e635] shrink-0 font-mono">
                <CheckCircle2 className="w-3 h-3" />
                Verified
              </span>
            )}
          </div>
          <p className="text-xs font-bold text-[#a3e635] mt-1 font-mono">
            {project.role}
          </p>
        </div>

        <p className="text-sm text-slate-300 leading-relaxed line-clamp-3">
          {project.description}
        </p>

        {/* Tech Stack Chips */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.technologies.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-lg text-xs font-medium bg-white/[0.04] text-slate-300 border border-white/10"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 5 && (
            <span className="px-2.5 py-1 rounded-lg text-xs font-medium text-slate-500">
              +{project.technologies.length - 5}
            </span>
          )}
        </div>

        {/* Action Buttons Row */}
        <div className="pt-4 border-t border-white/10 mt-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-extrabold bg-[#a3e635] hover:bg-[#bef264] text-black transition-all active:scale-95"
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
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-semibold bg-white/[0.05] hover:bg-white/[0.1] text-slate-200 border border-white/10 hover:border-[#a3e635]/40 hover:text-[#a3e635] transition-colors"
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
              className="inline-flex items-center gap-1 text-xs font-bold text-[#a3e635] hover:underline"
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
