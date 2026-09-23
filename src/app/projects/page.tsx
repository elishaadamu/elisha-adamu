'use client';

import React, { useState, useMemo } from 'react';
import { projects } from '@/data/projects';
import { appWorkflows } from '@/data/workflows';
import ProjectCard from '@/components/ProjectCard';
import WorkflowViewer from '@/components/WorkflowViewer';
import {
  Layers,
  Search,
  CheckCircle,
  Sparkles,
  Smartphone,
  X,
  Filter,
} from 'lucide-react';

const categories = [
  'All',
  'Mobile Apps',
  'Full-Stack & Web Apps',
  'Civic & Public Tech',
  'Jekyll & CMS',
] as const;

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeWorkflowModal, setActiveWorkflowModal] = useState<'audio-to-note' | 'sm-data' | null>(null);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory =
        activeCategory === 'All' || project.category === activeCategory;
      const matchesSearch =
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.technologies.some((t) =>
          t.toLowerCase().includes(searchQuery.toLowerCase())
        );
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-28 space-y-12">
      {/* 1. Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#a3e635]/10 text-[#a3e635] border border-[#a3e635]/25 font-mono">
          <Layers className="w-3.5 h-3.5" />
          Verified Portfolio &amp; Proof of Work
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Production Projects &amp; Verified Repositories
        </h1>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
          Every project listed below is backed by authentic live URLs and direct GitHub repository links as verifiable proof of authorship and code craft.
        </p>
      </div>

      {/* 2. Interactive Mobile Workflows Banner */}
      <div className="rounded-3xl bg-white dark:bg-[#0b0e14] p-6 sm:p-8 border border-slate-200 dark:border-white/10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#84cc16] dark:text-[#a3e635] uppercase tracking-wider">
              <Smartphone className="w-3.5 h-3.5" />
              Mobile App Architecture Walkthroughs
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              Step-by-step Interactive Mobile Experience
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              Inspect step-by-step screenshots and engineering pipelines for our Android applications.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => setActiveWorkflowModal('audio-to-note')}
              className="px-5 py-2.5 rounded-full text-xs font-extrabold bg-[#a3e635] hover:bg-[#bef264] text-black transition-all active:scale-95"
            >
              Audio to Note (8 Stages)
            </button>
            <button
              onClick={() => setActiveWorkflowModal('sm-data')}
              className="btn-secondary-dark"
            >
              SM DATA (6 Stages)
            </button>
          </div>
        </div>
      </div>

      {/* 3. Search & Filter Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-2">
        {/* Category Pills (Rounded-full, clean border) */}
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                  isActive
                    ? 'bg-[#a3e635] text-black shadow-[0_0_15px_rgba(163,230,53,0.35)]'
                    : 'bg-white dark:bg-[#0b0e14] border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 hover:border-[#a3e635]/50 hover:text-[#a3e635]'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search React, Next.js, Mobile..."
            className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm rounded-full border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0b0e14] text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-[#a3e635] focus:ring-1 focus:ring-[#a3e635]"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* 4. Projects Grid */}
      {filteredProjects.length === 0 ? (
        <div className="text-center py-16 rounded-3xl bg-white dark:bg-[#0b0e14] border border-slate-200 dark:border-white/10 space-y-3">
          <p className="text-lg font-bold text-slate-900 dark:text-white">
            No projects matched your search criteria
          </p>
          <p className="text-sm text-slate-500">
            Try adjusting your search query or switching categories.
          </p>
          <button
            onClick={() => {
              setActiveCategory('All');
              setSearchQuery('');
            }}
            className="btn-primary-lime"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelectWorkflow={(workflowId) => setActiveWorkflowModal(workflowId)}
            />
          ))}
        </div>
      )}

      {/* 5. Workflow Modal */}
      {activeWorkflowModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setActiveWorkflowModal(null)}
        >
          <div
            className="relative max-w-5xl w-full max-h-[90vh] overflow-y-auto rounded-3xl bg-white dark:bg-[#090e1a] border border-slate-200 dark:border-white/10 p-6 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-white/10 mb-6">
              <div className="flex items-center gap-2">
                <Smartphone className="w-5 h-5 text-[#a3e635]" />
                <h3 className="font-bold text-lg text-slate-900 dark:text-white">
                  {appWorkflows[activeWorkflowModal].appName} Architecture Workflow
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveWorkflowModal(null)}
                className="w-8 h-8 rounded-full border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-500 hover:text-slate-900 dark:hover:text-white"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <WorkflowViewer workflow={appWorkflows[activeWorkflowModal]} />
          </div>
        </div>
      )}
    </div>
  );
}
