'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/data/projects';
import { testimonials } from '@/data/testimonials';
import { appWorkflows } from '@/data/workflows';
import ProjectCard from '@/components/ProjectCard';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import WorkflowViewer from '@/components/WorkflowViewer';
import RotatingHeadline from '@/components/RotatingHeadline';
import TechMarquee from '@/components/TechMarquee';
import {
  ArrowRight,
  ArrowUpRight,
  ArrowDownRight,
  Code2,
  FileText,
  MessageSquare,
  Sparkles,
  Award,
  CheckCircle,
  CheckCircle2,
  Smartphone,
  Cpu,
  Layers,
  Zap,
  Globe,
  Star,
  Download,
  ExternalLink,
  ShieldCheck,
  Maximize2,
  X,
} from 'lucide-react';
import { Github, Upwork } from '@/components/Icons';

export default function HomePage() {
  const [selectedWorkflowKey, setSelectedWorkflowKey] = useState<'audio-to-note' | 'sm-data'>('audio-to-note');
  const [showUpworkModal, setShowUpworkModal] = useState(false);

  const featuredProjects = projects.filter((p) => p.featured).slice(0, 4);

  return (
    <div className="space-y-24 sm:space-y-32 pb-24">
      {/* 1. HERO SECTION (Exact Reference Architecture from Screenshot) */}
      <section className="relative pt-20 sm:pt-24 lg:pt-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Top Centered Pill Badge (Emoji Removed) */}
        <div className="flex justify-center mb-4 sm:mb-6">
          <div className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full text-xs sm:text-sm font-semibold bg-[#0e121a] text-white border border-[#a3e635]/40 shadow-[0_0_20px_rgba(163,230,53,0.2)]">
            <span>Yo! Whats Up?</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#a3e635] animate-pulse" />
          </div>
        </div>

        {/* Centered Massive Headline */}
        <h1 className="text-center text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.12] max-w-4xl mx-auto">
          Let&apos;s create <RotatingHeadline /> <br />
          together
        </h1>

        {/* Centered Massive Visual Layer (Maximized Cutout, Side Info & Floating Avatars) */}
        <div className="relative w-full max-w-6xl mx-auto mt-2 sm:mt-4 flex flex-col items-center justify-end min-h-[500px] sm:min-h-[620px] md:min-h-[720px] lg:min-h-[800px] xl:min-h-[850px]">
          {/* Ambient Lime Spotlight Glow directly behind head and silhouette */}
          <div className="absolute top-[28%] sm:top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[520px] lg:w-[680px] h-[340px] sm:h-[520px] lg:h-[680px] rounded-full bg-[#a3e635]/18 dark:bg-[#a3e635]/22 blur-[100px] pointer-events-none" />

          {/* Left Floating Circular Avatar Sticker (Exact from Reference Screenshot) */}
          <div className="absolute top-[14%] sm:top-[18%] lg:top-[20%] left-[2%] sm:left-[6%] lg:left-[12%] xl:left-[16%] z-20 w-16 sm:w-20 lg:w-24 aspect-square animate-float-slow select-none pointer-events-none">
            <Image
              src="/profile/avatar-cluster-left.png"
              alt="Creative 3D avatars"
              width={96}
              height={96}
              className="w-full h-full object-contain drop-shadow-2xl"
              priority
            />
          </div>

          {/* Right Floating Circular Avatar Sticker (Exact from Reference Screenshot) */}
          <div className="absolute top-[12%] sm:top-[16%] lg:top-[18%] right-[2%] sm:right-[6%] lg:right-[12%] xl:right-[16%] z-20 w-16 sm:w-20 lg:w-24 aspect-square animate-float-delay select-none pointer-events-none">
            <Image
              src="/profile/avatar-cluster-right.png"
              alt="Creative 3D avatars"
              width={96}
              height={96}
              className="w-full h-full object-contain drop-shadow-2xl"
              priority
            />
          </div>

          {/* Massive Center Free-standing Cutout (NO frame, NO box) */}
          <div className="relative w-[340px] sm:w-[520px] md:w-[680px] lg:w-[840px] xl:w-[940px] h-[480px] sm:h-[600px] md:h-[700px] lg:h-[780px] xl:h-[840px] flex items-end justify-center z-10">
            <Image
              src="/profile/img1-nobg.png"
              alt="Elisha Adamu Inuwa - Senior Frontend React & Mobile App Developer"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 840px, 940px"
              className="object-contain object-bottom drop-shadow-[0_25px_60px_rgba(0,0,0,0.6)]"
              priority
            />
          </div>

          {/* Bottom Left Info (Desktop) */}
          <div className="hidden md:block absolute bottom-6 left-2 lg:left-8 xl:left-14 max-w-[280px] lg:max-w-[320px] z-20 text-left space-y-3">
            <p className="text-xs sm:text-sm text-slate-300 dark:text-slate-300 leading-relaxed font-normal">
              Full-Stack &amp; Senior Frontend Engineer harnessing AI, design, and code to rapidly deliver intuitive global solutions for startups and financial institutions.
            </p>
            <a
              href="/documents/elisha-adamu-cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-white dark:text-slate-300 dark:hover:text-white transition-colors group"
            >
              <Download className="w-3.5 h-3.5 text-[#a3e635] group-hover:translate-y-0.5 transition-transform" />
              <span className="underline decoration-slate-600 underline-offset-4 group-hover:decoration-[#a3e635]">Corporate Profile</span>
            </a>
          </div>

          {/* Bottom Right CTA Button (Desktop) - High-End Electric Lime Pill */}
          <div className="hidden md:block absolute bottom-6 right-2 lg:right-8 xl:right-14 z-20 text-right">
            <Link
              href="/contact"
              className="btn-primary-lime group"
            >
              <span>LET&apos;S WORK</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5] group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Mobile Info & CTA (Below Cutout for Small Screens) */}
        <div className="md:hidden flex flex-col items-center text-center space-y-4 pt-4 pb-2 px-4">
          <p className="text-sm text-slate-600 dark:text-slate-300 max-w-sm">
            Full-Stack &amp; Senior Frontend Engineer harnessing AI, design, and code to rapidly deliver intuitive global solutions for startups and financial institutions.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="btn-primary-lime"
            >
              <span>LET&apos;S WORK</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="/documents/elisha-adamu-cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary-dark"
            >
              <Download className="w-3.5 h-3.5 text-[#a3e635]" />
              <span>Corporate Profile</span>
            </a>
          </div>
        </div>
      </section>

      {/* 2. TECH STACK MARQUEE (Underneath Hero, Rounded Tiles like Screenshot) */}
      <TechMarquee />

      {/* 3. UPWORK CREDIBILITY & REAL PROFILE SCREENSHOT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-[#0b0e14] border border-white/10 p-8 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Metrics & Proof Summary */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-[#a3e635]/10 border border-[#a3e635]/25 flex items-center justify-center text-[#a3e635]">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-extrabold text-xl text-white">
                      Upwork Certified Top Rated Freelancer
                    </h3>
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-black bg-[#a3e635] text-black">
                      100% JSS
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-400">
                    Verified track record delivering client success on React, Next.js, and Mobile applications.
                  </p>
                </div>
              </div>

              {/* Counters Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                  <p className="text-[11px] uppercase font-mono font-semibold text-slate-400">Job Success</p>
                  <p className="text-2xl font-extrabold text-[#a3e635] mt-1">100%</p>
                  <p className="text-[11px] text-slate-400">Top Rated</p>
                </div>
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                  <p className="text-[11px] uppercase font-mono font-semibold text-slate-400">Completed</p>
                  <p className="text-2xl font-extrabold text-white mt-1">20+ Jobs</p>
                  <p className="text-[11px] text-slate-400">5-Star Reviews</p>
                </div>
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                  <p className="text-[11px] uppercase font-mono font-semibold text-slate-400">Hours Logged</p>
                  <p className="text-2xl font-extrabold text-white mt-1">190+ Hrs</p>
                  <p className="text-[11px] text-slate-400">Tracked Work</p>
                </div>
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                  <p className="text-[11px] uppercase font-mono font-semibold text-slate-400">Response</p>
                  <p className="text-2xl font-extrabold text-[#a3e635] mt-1">&lt; 4 Hours</p>
                  <p className="text-[11px] text-slate-400">Rapid Delivery</p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="https://www.upwork.com/freelancers/~01f347888f7198ba97?viewMode=1"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold bg-[#a3e635] hover:bg-[#bef264] text-black transition-all active:scale-95 shadow-[0_0_15px_rgba(163,230,53,0.3)]"
                >
                  <Upwork className="w-4 h-4 text-black" />
                  <span>Open Upwork Profile</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-black stroke-[2.5]" />
                </a>

                <a
                  href="https://github.com/elishaadamu?tab=repositories"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold bg-white/[0.05] hover:bg-white/[0.1] text-white border border-white/10 hover:border-[#a3e635]/40 transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub Repositories</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#a3e635]" />
                </a>

                <button
                  type="button"
                  onClick={() => setShowUpworkModal(true)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold border border-white/10 text-slate-300 hover:border-[#a3e635] hover:text-[#a3e635] transition-colors"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>View Full Screenshot</span>
                </button>
              </div>
            </div>

            {/* Right Upwork Actual Screenshot Card */}
            <div className="lg:col-span-5">
              <div
                onClick={() => setShowUpworkModal(true)}
                className="group relative rounded-2xl overflow-hidden border border-white/10 hover:border-[#a3e635]/50 bg-slate-950 cursor-pointer transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative aspect-[16/10] w-full">
                  <Image
                    src="/reviews/upwork-profile-stats.png"
                    alt="Elisha Inuwa Upwork Profile Screenshot - Top Rated 100% Job Success"
                    fill
                    sizes="(max-width: 768px) 100vw, 500px"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-103"
                  />
                  <div className="absolute inset-0 bg-slate-950/30 group-hover:bg-transparent transition-colors" />

                  {/* Zoom indicator overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/90 text-white text-xs font-semibold backdrop-blur-md border border-white/10">
                      <Maximize2 className="w-3.5 h-3.5 text-[#a3e635]" />
                      Click to View Full Screenshot
                    </span>
                  </div>
                </div>

                <div className="p-3.5 bg-[#080b11] border-t border-white/[0.08] flex items-center justify-between text-xs">
                  <span className="font-semibold text-slate-300 flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#a3e635]" />
                    Verified Upwork Stats &amp; Earnings
                  </span>
                  <span className="text-[#a3e635] font-semibold font-mono">Expand Preview</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upwork Screenshot Full Modal */}
      {showUpworkModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setShowUpworkModal(false)}
        >
          <div
            className="relative max-w-5xl w-full rounded-2xl bg-[#0c1017] border border-white/10 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-[#a3e635]" />
                <h3 className="font-bold text-sm text-white">
                  Upwork Profile Verification Screenshot
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href="https://www.upwork.com/freelancers/~01f347888f7198ba97?viewMode=1"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#a3e635] text-black hover:bg-[#bef264] transition-colors"
                >
                  <Upwork className="w-3.5 h-3.5 text-black" />
                  <span>Visit Live Profile</span>
                  <ArrowUpRight className="w-3 h-3 text-black stroke-[2.5]" />
                </a>
                <button
                  type="button"
                  onClick={() => setShowUpworkModal(false)}
                  className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-white"
                  aria-label="Close modal"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
            <div className="relative aspect-[16/9] w-full bg-slate-950 overflow-auto">
              <Image
                src="/reviews/upwork-profile-stats.png"
                alt="Upwork Profile Details"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      )}

      {/* 4. INTERACTIVE MOBILE APP WORKFLOWS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#a3e635]/10 text-[#a3e635] border border-[#a3e635]/25">
            <Smartphone className="w-3.5 h-3.5" />
            Interactive Mobile Workflows
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            See the Architecture in Action
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
            Step through the mobile user journeys and engineering pipelines for my flagship Android applications.
          </p>

          {/* Workflow Toggle Buttons */}
          <div className="inline-flex p-1.5 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 mt-4">
            <button
              onClick={() => setSelectedWorkflowKey('audio-to-note')}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all ${
                selectedWorkflowKey === 'audio-to-note'
                  ? 'bg-[#a3e635] text-black shadow-[0_0_15px_rgba(163,230,53,0.35)]'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Audio to Note (AI Audio Recorder)
            </button>
            <button
              onClick={() => setSelectedWorkflowKey('sm-data')}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all ${
                selectedWorkflowKey === 'sm-data'
                  ? 'bg-[#a3e635] text-black shadow-[0_0_15px_rgba(163,230,53,0.35)]'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              SM DATA (Telecom &amp; Fintech)
            </button>
          </div>
        </div>

        {/* Selected Workflow Viewer */}
        <WorkflowViewer workflow={appWorkflows[selectedWorkflowKey]} />
      </section>

      {/* 5. FEATURED PROJECTS GRID (Anchored #work - Clean, Premium Redesign) */}
      <section id="work" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 scroll-mt-28">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#a3e635]/10 text-[#a3e635] border border-[#a3e635]/25 mb-2">
              <Layers className="w-3.5 h-3.5" />
              Selected Engineering Highlights
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Featured Web &amp; Mobile Applications
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-xl">
              Production solutions built for international clients, cryptographic publications, and commercial users.
            </p>
          </div>

          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#a3e635] hover:text-[#bef264] transition-colors"
          >
            <span>View all 15 projects &amp; repositories</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelectWorkflow={(id) => {
                setSelectedWorkflowKey(id);
                window.scrollTo({ top: 900, behavior: 'smooth' });
              }}
            />
          ))}
        </div>
      </section>

      {/* 6. CLIENT TESTIMONIALS CAROUSEL (Interactive Slider with Verified Client Data) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#a3e635]/10 text-[#a3e635] border border-[#a3e635]/25">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            Client Endorsements &amp; Reviews
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What Leaders &amp; Clients Say
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Direct feedback from decentralized identity architects, US tech founders, and verified Upwork clients.
          </p>
        </div>

        {/* Carousel Component */}
        <TestimonialCarousel testimonials={testimonials} />
      </section>

      {/* 7. HIGH-IMPACT CALL TO ACTION BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-[#0b0e14] border border-white/10 p-8 sm:p-14 text-white relative overflow-hidden">
          <div className="max-w-3xl space-y-4 relative z-10">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-[#a3e635]/10 text-[#a3e635] border border-[#a3e635]/25">
              <Sparkles className="w-3.5 h-3.5" />
              Let&apos;s Build Something Exceptional
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              Ready to create something huge?
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
              Whether you need a senior frontend engineer for your engineering team, a resilient Android / Flutter application, or a customized high-performance web platform, let&apos;s turn your vision into reality.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="btn-primary-lime"
              >
                <span>Start A Project / Let&apos;s Work</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </Link>

              <a
                href="https://wa.link/powbca"
                target="_blank"
                rel="noreferrer"
                className="btn-secondary-dark"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>Message on WhatsApp</span>
              </a>

              <Link
                href="/cv"
                className="btn-secondary-dark"
              >
                <Download className="w-4 h-4 text-[#a3e635]" />
                <span>Download CV</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
