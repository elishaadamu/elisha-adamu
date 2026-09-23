'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';

const navLinks = [
  { name: 'Work', href: '/#work' },
  { name: 'Projects', href: '/projects' },
  { name: 'About', href: '/about' },
  { name: 'CV', href: '/cv' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-3.5 sm:pt-4 pointer-events-none">
      <nav className="pointer-events-auto flex w-full max-w-4xl items-center justify-between gap-3 rounded-full border border-slate-200/80 dark:border-slate-800/90 py-2 pl-4 sm:pl-5 pr-2 bg-white/75 dark:bg-[#070b14]/75 backdrop-blur-xl transition-all duration-300">
        {/* Brand Wordmark */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="relative flex items-center justify-center w-8 h-8 rounded-xl bg-[#06080c] border border-[#a3e635]/30 text-white font-black text-xs group-hover:scale-105 transition-transform">
            <span className="text-white">E</span>
            <span className="text-[#a3e635]">i</span>
            <span className="absolute -bottom-0.5 -right-0.5 w-2 h-2 bg-[#a3e635] border-2 border-white dark:border-[#06080c] rounded-full animate-pulse" />
          </div>
          <span className="font-extrabold text-sm tracking-tight text-slate-900 dark:text-white hidden xs:inline-flex items-center gap-0.5">
            Elisha Inuwa
            <span className="text-[#a3e635] font-black">.</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive =
              link.href === '/'
                ? pathname === '/'
                : link.href.startsWith('/#')
                ? pathname === '/'
                : pathname === link.href;

            return (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={`block rounded-full px-3.5 py-1.5 text-xs font-semibold tracking-wide transition-all duration-200 ${
                    isActive
                      ? 'text-[#a3e635] bg-[#a3e635]/10 border border-[#a3e635]/25 font-bold'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/60 dark:hover:bg-slate-800/50'
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Right CTA & Controls */}
        <div className="flex items-center gap-2">
          <Link
            href="/contact"
            className="group relative isolate hidden sm:inline-flex items-center justify-center gap-1.5 overflow-hidden rounded-full bg-[#a3e635] text-black hover:bg-[#bef264] px-4 py-1.5 text-xs font-extrabold shadow-[0_0_20px_rgba(163,230,53,0.35)] hover:shadow-[0_0_30px_rgba(163,230,53,0.6)] transition-all hover:scale-104 active:scale-96"
          >
            <span>Hire me</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-black stroke-[2.5] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>

          {/* Mobile menu hamburger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="inline-flex size-8 items-center justify-center rounded-full border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white md:hidden"
          >
            {mobileMenuOpen ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto fixed inset-x-4 top-20 z-50 rounded-2xl border border-slate-200/90 dark:border-slate-800/90 bg-white/95 dark:bg-[#06080c]/95 backdrop-blur-2xl p-4 md:hidden space-y-1.5 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-slate-200/60 dark:border-slate-800/80 mb-2">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
              Navigation
            </span>
            <span className="flex items-center gap-1 text-[11px] font-medium text-[#a3e635]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#a3e635] animate-pulse" />
              Available for hire
            </span>
          </div>

          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between px-3 py-2 rounded-xl text-sm font-medium text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors"
            >
              <span>{link.name}</span>
              <ArrowUpRight className="size-3.5 text-slate-400" />
            </Link>
          ))}

          <div className="pt-3 border-t border-slate-200/60 dark:border-slate-800/80 flex flex-col gap-2">
            <Link
              href="/cv"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-2 rounded-xl border border-slate-200 dark:border-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:border-[#a3e635]/50 hover:text-[#a3e635]"
            >
              Download CV (PDF)
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#a3e635] text-black text-xs font-extrabold hover:bg-[#bef264]"
            >
              <span>Hire Me</span>
              <ArrowUpRight className="size-3.5 stroke-[2.5]" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
