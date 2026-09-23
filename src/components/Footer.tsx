import React from 'react';
import Link from 'next/link';
import { MessageSquare, Mail, Award, ArrowUpRight, Sparkles } from 'lucide-react';
import { Github, Linkedin } from '@/components/Icons';

export default function Footer() {
  return (
    <footer className="w-full border-t border-slate-200 dark:border-white/10 bg-slate-50/70 dark:bg-[#06080c] text-slate-600 dark:text-slate-400 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Col 1: Bio & Status */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#a3e635] shadow-[0_0_10px_rgba(163,230,53,0.6)]" />
              <h3 className="font-extrabold text-lg text-slate-900 dark:text-white tracking-tight">
                Elisha Adamu Inuwa
              </h3>
            </div>
            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300 max-w-md">
              Senior Frontend React &amp; Next.js Developer, Mobile Engineer (Flutter &amp; Android), and Electrical &amp; Electronics Engineer. Turning complex product specifications into elegant, ultra-fast, and accessible digital realities.
            </p>
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#a3e635]/10 text-[#a3e635] border border-[#a3e635]/25">
                <Award className="w-3.5 h-3.5" />
                Upwork Top Rated • 100% Job Success
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                Open for Opportunities
              </div>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-slate-900 dark:text-white mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-[#a3e635] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#a3e635] transition-colors">
                  About Me &amp; Experience
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-[#a3e635] transition-colors">
                  Projects &amp; Repositories
                </Link>
              </li>
              <li>
                <Link href="/cv" className="hover:text-[#a3e635] transition-colors">
                  Curriculum Vitae (CV)
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-[#a3e635] transition-colors">
                  Technical Articles
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Connect */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-slate-900 dark:text-white mb-4">
              Connect
            </h4>
            <div className="flex flex-col space-y-2.5 text-sm">
              <a
                href="https://wa.link/powbca"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 hover:text-[#a3e635] transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-emerald-500" />
                WhatsApp Direct Chat
                <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
              </a>
              <a
                href="mailto:elishadamu97@gmail.com"
                className="inline-flex items-center gap-2 hover:text-[#a3e635] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#a3e635]" />
                elishadamu97@gmail.com
              </a>
              <a
                href="https://github.com/elishaadamu"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 hover:text-[#a3e635] transition-colors"
              >
                <Github className="w-4 h-4 text-slate-800 dark:text-slate-200" />
                GitHub Profile
                <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
              </a>
              <a
                href="https://www.linkedin.com/in/frontend-developer-elisha-inuwa-75a200422"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 hover:text-[#a3e635] transition-colors"
              >
                <Linkedin className="w-4 h-4 text-blue-500" />
                LinkedIn Profile
                <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-200 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© {new Date().getFullYear()} Elisha Adamu Inuwa. All rights reserved.</p>
          <p className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400">
            Crafted with Next.js App Router, TypeScript &amp; Square Grid
            <Sparkles className="w-3.5 h-3.5 text-[#a3e635]" />
          </p>
        </div>
      </div>
    </footer>
  );
}
