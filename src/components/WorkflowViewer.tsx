'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { AppWorkflow } from '@/data/workflows';
import { ChevronLeft, ChevronRight, CheckCircle2, Sparkles, Smartphone, ExternalLink } from 'lucide-react';
import { Github } from '@/components/Icons';

interface WorkflowViewerProps {
  workflow: AppWorkflow;
}

export default function WorkflowViewer({ workflow }: WorkflowViewerProps) {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const currentStep = workflow.steps[activeStepIndex];

  const handleNext = () => {
    setActiveStepIndex((prev) => (prev < workflow.steps.length - 1 ? prev + 1 : 0));
  };

  const handlePrev = () => {
    setActiveStepIndex((prev) => (prev > 0 ? prev - 1 : workflow.steps.length - 1));
  };

  return (
    <div className="w-full rounded-3xl bg-white dark:bg-[#0b0e14] p-6 sm:p-8 relative overflow-hidden shadow-xl border border-slate-200 dark:border-white/10">
      {/* Header bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100 dark:border-white/10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#a3e635]/10 text-[#a3e635] mb-2 border border-[#a3e635]/25">
            <Smartphone className="w-3.5 h-3.5" />
            {workflow.category}
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
            {workflow.appName}
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-2xl">
            {workflow.tagline}
          </p>
        </div>

        <div className="flex items-center gap-2">
          {workflow.liveUrl && (
            <a
              href={workflow.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#a3e635]/10 hover:bg-[#a3e635]/20 text-[#a3e635] transition-colors border border-[#a3e635]/25"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Live Platform
            </a>
          )}
          <a
            href={workflow.repoUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-800 dark:text-slate-200 transition-colors border border-slate-200 dark:border-white/10"
          >
            <Github className="w-3.5 h-3.5" />
            GitHub Repo Evidence
          </a>
        </div>
      </div>

      {/* Step Pills Navigation */}
      <div className="py-4 overflow-x-auto scrollbar-none flex items-center gap-2 border-b border-slate-100 dark:border-white/10">
        {workflow.steps.map((step, idx) => {
          const isCurrent = idx === activeStepIndex;
          return (
            <button
              key={step.step}
              onClick={() => setActiveStepIndex(idx)}
              className={`flex-shrink-0 flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                isCurrent
                  ? 'bg-[#a3e635] text-black shadow-md shadow-[#a3e635]/25 scale-102'
                  : 'bg-slate-100/70 dark:bg-white/5 text-slate-600 dark:text-slate-400 hover:bg-[#a3e635]/10 dark:hover:bg-white/10 hover:text-[#a3e635]'
              }`}
            >
              <span className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-bold ${
                isCurrent ? 'bg-black text-[#a3e635]' : 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300'
              }`}>
                {step.step}
              </span>
              <span>{step.title.split(' ')[0]}</span>
            </button>
          );
        })}
      </div>

      {/* Interactive Main Stage */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-6">
        {/* Step Details & Explanation */}
        <div className="lg:col-span-6 space-y-5 order-2 lg:order-1">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider bg-[#a3e635]/10 text-[#a3e635] border border-[#a3e635]/25">
              Stage {currentStep.step} of {workflow.steps.length}
            </span>
            <span className="text-xs font-medium text-emerald-500 dark:text-emerald-400 flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              {currentStep.highlightTag}
            </span>
          </div>

          <div>
            <h4 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
              {currentStep.title}
            </h4>
            <p className="text-xs font-bold text-[#84cc16] dark:text-[#a3e635] mt-1">
              {currentStep.subtitle}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50/80 dark:bg-slate-900/60 border border-slate-200 dark:border-white/10 leading-relaxed text-slate-700 dark:text-slate-300 text-sm">
            {currentStep.description}
          </div>

          {/* Stepper Controls */}
          <div className="flex items-center gap-3 pt-2">
            <button
              onClick={handlePrev}
              aria-label="Previous Workflow Step"
              className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-200 bg-white/70 dark:bg-white/5 hover:border-[#a3e635]/50 hover:text-[#a3e635] text-xs font-semibold transition-all shadow-xs"
            >
              <ChevronLeft className="w-4 h-4" />
              Previous Stage
            </button>
            <button
              onClick={handleNext}
              aria-label="Next Workflow Step"
              className="flex items-center gap-1.5 px-5 py-2 rounded-full bg-[#a3e635] hover:bg-[#bef264] text-black text-xs font-extrabold shadow-md shadow-[#a3e635]/20 transition-all active:scale-95"
            >
              Next Stage
              <ChevronRight className="w-4 h-4 stroke-[2.5]" />
            </button>
            <span className="text-xs text-slate-500 dark:text-slate-400 ml-2">
              Use arrows to navigate
            </span>
          </div>
        </div>

        {/* Device Frame with Screenshot */}
        <div className="lg:col-span-6 flex justify-center order-1 lg:order-2">
          <div className="relative w-full max-w-[280px] sm:max-w-[320px] aspect-[9/18] rounded-[36px] p-3 bg-gradient-to-b from-slate-800 via-slate-900 to-black shadow-2xl border-4 border-slate-700/80 ring-1 ring-[#a3e635]/30">
            {/* Notch / Speaker */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-4 bg-slate-950 rounded-full z-20 flex items-center justify-center">
              <div className="w-2.5 h-2.5 rounded-full bg-slate-900 border border-slate-800" />
            </div>

            {/* Screen Content */}
            <div className="relative w-full h-full rounded-[26px] overflow-hidden bg-black">
              <Image
                src={currentStep.image}
                alt={`${workflow.appName} - ${currentStep.title}`}
                fill
                sizes="(max-width: 768px) 100vw, 320px"
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
