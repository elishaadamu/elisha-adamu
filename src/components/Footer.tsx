'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  MessageSquare,
  Mail,
  Award,
  ArrowUpRight,
  ArrowUp,
  Sparkles,
  Check,
  Copy,
  ExternalLink,
  ShieldCheck,
  MapPin,
  Clock,
  Code2,
} from 'lucide-react';
import { Github, Linkedin, Upwork } from '@/components/Icons';

export default function Footer() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('elishadamu97@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full border-t border-white/10 bg-[#040609] text-slate-300 relative overflow-hidden">
      {/* Subtle Ambient Radial Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-64 bg-radial-gradient pointer-events-none opacity-40">
        <div className="w-full h-full bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(163,230,53,0.08),transparent_70%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-12 relative z-10 space-y-16 sm:space-y-20">
        {/* 1. EXECUTIVE PRE-FOOTER COLLABORATION BANNER */}
        <div className="rounded-3xl bg-[#090d14] border border-white/10 p-8 sm:p-12 relative overflow-hidden">
          {/* Subtle Corner Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#a3e635]/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#a3e635]/10 text-[#a3e635] border border-[#a3e635]/30">
                <span className="w-2 h-2 rounded-full bg-[#a3e635] animate-pulse" />
                <span>Open for High-Impact Projects &amp; Senior Engineering Roles</span>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Let&apos;s build something high-performance together.
              </h3>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                Whether you need a full-stack engineer for complex React/Next.js architectures, a resilient mobile application in React Native or Android, or high-performance APIs in Express.js and FastAPI, I am ready to collaborate.
              </p>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-extrabold bg-[#a3e635] hover:bg-[#bef264] text-black transition-all active:scale-95 shadow-[0_0_20px_rgba(163,230,53,0.3)] hover:shadow-[0_0_30px_rgba(163,230,53,0.5)]"
              >
                <span>Start a Project Conversation</span>
                <ArrowUpRight className="w-4 h-4 text-black stroke-[2.5]" />
              </Link>

              <a
                href="https://www.upwork.com/freelancers/~01f347888f7198ba97?viewMode=1"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs sm:text-sm font-semibold border border-white/10 hover:border-[#a3e635]/50 bg-white/5 hover:bg-white/10 text-white transition-all active:scale-95"
              >
                <Upwork className="w-4 h-4 text-[#14a800]" />
                <span>Hire on Upwork</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
              </a>

              <a
                href="https://wa.link/powbca"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs sm:text-sm font-semibold border border-white/10 hover:border-emerald-500/50 bg-white/5 hover:bg-white/10 text-white transition-all active:scale-95"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* 2. MAIN 4-COLUMN FOOTER GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Col 1: Identity & Credentials (5 cols on lg) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <Link href="/" className="inline-flex items-center gap-3 group">
                <div className="relative flex items-center justify-center w-10 h-10 rounded-2xl bg-[#06080c] border border-[#a3e635]/40 text-white font-black text-sm group-hover:scale-105 transition-transform shadow-[0_0_15px_rgba(163,230,53,0.2)]">
                  <span className="text-white">E</span>
                  <span className="text-[#a3e635]">i</span>
                  <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-[#a3e635] border-2 border-[#06080c] rounded-full animate-pulse" />
                </div>
                <div className="flex flex-col">
                  <span className="font-extrabold text-xl text-white tracking-tight group-hover:text-[#a3e635] transition-colors">
                    Elisha Adamu Inuwa
                  </span>
                  <span className="text-xs font-mono text-[#a3e635]">
                    Full-Stack Web &amp; React Native Developer
                  </span>
                </div>
              </Link>

              <p className="text-base leading-relaxed text-slate-300 font-normal max-w-md">
                Full-Stack Web &amp; React Native Developer, and registered Electrical &amp; Electronics Engineer (B.Eng ATBU, 2024). Bringing rigorous architectural design, high-converting UX, and zero-compromise speed to modern digital products.
              </p>
            </div>

            {/* Verified Credential Pills */}
            <div className="flex flex-wrap items-center gap-2.5 pt-1">
              <a
                href="https://www.upwork.com/freelancers/~01f347888f7198ba97?viewMode=1"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#a3e635]/10 text-[#a3e635] border border-[#a3e635]/30 hover:bg-[#a3e635]/20 hover:border-[#a3e635]/60 transition-all group"
              >
                <Award className="w-3.5 h-3.5 text-[#a3e635]" />
                <span>Upwork Top Rated • 100% JSS</span>
                <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href="https://drive.google.com/file/d/1pMVkMwVb8W1Ewuf8g8v5h3Is-2rOJZNg/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white/5 text-slate-200 border border-white/10 hover:border-[#a3e635]/40 hover:text-[#a3e635] transition-all group"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-[#a3e635]" />
                <span>NSE Graduate Member</span>
                <ExternalLink className="w-3 h-3 opacity-60 group-hover:opacity-100" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-bold text-sm uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-3 text-base">
              <li>
                <Link href="/" className="text-slate-300 hover:text-[#a3e635] transition-colors leading-relaxed inline-flex items-center gap-1 group">
                  <span className="group-hover:translate-x-1 transition-transform">Home</span>
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-300 hover:text-[#a3e635] transition-colors leading-relaxed inline-flex items-center gap-1 group">
                  <span className="group-hover:translate-x-1 transition-transform">About &amp; Journey</span>
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-slate-300 hover:text-[#a3e635] transition-colors leading-relaxed inline-flex items-center gap-1 group">
                  <span className="group-hover:translate-x-1 transition-transform">Projects &amp; Demos</span>
                </Link>
              </li>
              <li>
                <Link href="/cv" className="text-slate-300 hover:text-[#a3e635] transition-colors leading-relaxed inline-flex items-center gap-1 group">
                  <span className="group-hover:translate-x-1 transition-transform">Curriculum Vitae</span>
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-slate-300 hover:text-[#a3e635] transition-colors leading-relaxed inline-flex items-center gap-1 group">
                  <span className="group-hover:translate-x-1 transition-transform">Technical Articles</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-300 hover:text-[#a3e635] transition-colors leading-relaxed inline-flex items-center gap-1 group">
                  <span className="group-hover:translate-x-1 transition-transform">Get in Touch</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Technical Specialties (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-bold text-sm uppercase tracking-wider text-white">
              Specialties
            </h4>
            <ul className="space-y-3 text-base text-slate-300">
              <li className="leading-relaxed">React 19 &amp; Next.js 16</li>
              <li className="leading-relaxed">React Native &amp; Expo</li>
              <li className="leading-relaxed">Express.js &amp; FastAPI</li>
              <li className="leading-relaxed">TypeScript Architecture</li>
              <li className="leading-relaxed">Design Systems &amp; Tailwind</li>
              <li className="leading-relaxed">REST &amp; WebSockets APIs</li>
            </ul>
          </div>

          {/* Col 4: Direct Channels (3 cols on lg) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-bold text-sm uppercase tracking-wider text-white">
              Connect Channels
            </h4>
            <div className="flex flex-col space-y-3.5 text-base">
              <a
                href="https://www.upwork.com/freelancers/~01f347888f7198ba97?viewMode=1"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-between text-slate-300 hover:text-[#a3e635] transition-colors group leading-relaxed p-2.5 rounded-xl border border-white/5 hover:border-[#a3e635]/40 bg-white/[0.02]"
              >
                <div className="flex items-center gap-2.5">
                  <Upwork className="w-4.5 h-4.5 text-[#14a800] group-hover:text-[#a3e635] transition-colors shrink-0" />
                  <span className="font-medium">Upwork Profile</span>
                </div>
                <ArrowUpRight className="w-4 h-4 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-[#a3e635]" />
              </a>

              <a
                href="https://wa.link/powbca"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-between text-slate-300 hover:text-[#a3e635] transition-colors group leading-relaxed p-2.5 rounded-xl border border-white/5 hover:border-[#a3e635]/40 bg-white/[0.02]"
              >
                <div className="flex items-center gap-2.5">
                  <MessageSquare className="w-4.5 h-4.5 text-emerald-400 shrink-0" />
                  <span className="font-medium">WhatsApp Direct</span>
                </div>
                <ArrowUpRight className="w-4 h-4 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-[#a3e635]" />
              </a>

              {/* Copy Email Widget */}
              <div className="p-2.5 rounded-xl border border-white/5 bg-white/[0.02] flex items-center justify-between gap-2">
                <a
                  href="mailto:elishadamu97@gmail.com"
                  className="flex items-center gap-2.5 text-slate-300 hover:text-[#a3e635] transition-colors min-w-0"
                >
                  <Mail className="w-4.5 h-4.5 text-[#a3e635] shrink-0" />
                  <span className="truncate font-medium text-sm">elishadamu97@gmail.com</span>
                </a>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  title="Copy email to clipboard"
                  className="p-1.5 rounded-lg border border-white/10 hover:border-[#a3e635]/50 bg-white/5 text-slate-300 hover:text-[#a3e635] transition-all shrink-0"
                  aria-label="Copy email address"
                >
                  {copied ? (
                    <Check className="w-3.5 h-3.5 text-[#a3e635]" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>

              <div className="flex items-center gap-2 pt-1">
                <a
                  href="https://github.com/elishaadamu"
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2 px-3 rounded-xl border border-white/10 hover:border-[#a3e635]/40 bg-white/5 text-slate-200 hover:text-[#a3e635] text-xs font-semibold transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/frontend-developer-elisha-inuwa-75a200422"
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2 px-3 rounded-xl border border-white/10 hover:border-[#a3e635]/40 bg-white/5 text-slate-200 hover:text-[#a3e635] text-xs font-semibold transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-blue-400" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 3. PREMIUM BOTTOM SIGNATURE BAR */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 text-sm text-slate-400">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-center sm:text-left">
            <span className="flex items-center gap-1.5 font-medium">
              <MapPin className="w-3.5 h-3.5 text-[#a3e635]" />
              Jos, Plateau State, Nigeria (UTC+1)
            </span>
            <span className="hidden sm:inline text-white/20">•</span>
            <span>Available Worldwide</span>
            <span className="hidden sm:inline text-white/20">•</span>
            <span className="text-slate-500">© {new Date().getFullYear()} Elisha Adamu Inuwa</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-xs text-slate-400">
              Next.js 16 • React • TypeScript
              <Sparkles className="w-3.5 h-3.5 text-[#a3e635]" />
            </span>

            {/* Back to top button */}
            <button
              onClick={scrollToTop}
              title="Back to top"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/10 hover:border-[#a3e635]/50 bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 hover:text-[#a3e635] transition-all group"
              aria-label="Scroll back to top"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
