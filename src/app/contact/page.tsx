'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  Mail,
  Phone,
  MessageSquare,
  Clock,
  MapPin,
  Send,
  CheckCircle2,
  Sparkles,
  ExternalLink,
  Award,
} from 'lucide-react';
import { Github, Linkedin } from '@/components/Icons';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'React / Next.js Web Application',
    budget: '$1,000 - $5,000',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const subject = encodeURIComponent(`Inquiry from ${formData.name}: ${formData.projectType}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nProject Type: ${formData.projectType}\nEstimated Scope/Budget: ${formData.budget}\n\nMessage:\n${formData.message}`
    );

    // Open mail client
    window.location.href = `mailto:elishadamu97@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hi Elisha, I found your portfolio! I'm interested in discussing a ${formData.projectType}.`
    );
    window.open(`https://wa.me/2347067206984?text=${text}`, '_blank');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-28 space-y-16">
      {/* 1. Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#a3e635]/10 text-[#a3e635] border border-[#a3e635]/25 font-mono">
          <MessageSquare className="w-3.5 h-3.5" />
          Get In Touch
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Let&apos;s Build Something Extraordinary Together
        </h1>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
          I am currently open for full-time engineering roles, freelance contracts, and technical consulting across React, Next.js, Express.js, FastAPI, and React Native mobile development.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Column: Contact Cards */}
        <div className="lg:col-span-5 space-y-6">
          {/* Profile Greeting Box with img3.png */}
          <div className="rounded-2xl glass-panel p-5 border border-[#a3e635]/25 flex items-center gap-4 bg-[#a3e635]/5">
            <div className="relative w-16 h-16 shrink-0 flex items-center justify-center">
              <Image
                src="/profile/img3-nobg.png"
                alt="Elisha Adamu Inuwa"
                fill
                sizes="64px"
                className="object-contain drop-shadow-sm"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-slate-900 dark:text-white text-sm">
                  Elisha Adamu Inuwa
                </h3>
                <span className="w-2 h-2 rounded-full bg-[#a3e635] animate-pulse" />
              </div>
              <p className="text-xs text-[#a3e635] font-medium">
                Full-Stack Web &amp; React Native Developer
              </p>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                Available for contracts &amp; full-time roles
              </p>
            </div>
          </div>
          {/* WhatsApp Primary Card */}
          <div className="rounded-2xl glass-panel p-6 border-2 border-[#a3e635]/30 bg-[#a3e635]/5 relative overflow-hidden">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#a3e635] uppercase tracking-wider font-mono">
                  <span className="w-2 h-2 rounded-full bg-[#a3e635] animate-ping" />
                  Fastest Response
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">&lt; 15 mins</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Direct WhatsApp Channel
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                Chat directly with me about your project specs, team openings, or urgent contract milestones.
              </p>
              <div className="pt-2">
                <a
                  href="https://wa.link/powbca"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full btn-primary-lime justify-center"
                >
                  <MessageSquare className="w-4 h-4" />
                  Chat on WhatsApp (+234 07067206984)
                </a>
              </div>
            </div>
          </div>

          {/* Email Direct */}
          <div className="rounded-2xl glass-panel p-6 border border-white/10 dark:border-white/10 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#a3e635]/15 border border-[#a3e635]/30 flex items-center justify-center text-[#a3e635]">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-slate-900 dark:text-white">Email Inbox</h4>
                <a
                  href="mailto:elishadamu97@gmail.com"
                  className="text-xs sm:text-sm text-[#a3e635] hover:underline"
                >
                  elishadamu97@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Social and Profiles */}
          <div className="rounded-2xl glass-panel p-6 border border-white/10 dark:border-white/10 space-y-4">
            <h4 className="font-bold text-sm text-slate-900 dark:text-white uppercase tracking-wider">
              Professional Profiles
            </h4>
            <div className="space-y-3">
              <a
                href="https://github.com/elishaadamu"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 hover:border-[#a3e635]/50 transition-colors"
              >
                <div className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">
                  <Github className="w-4 h-4" />
                  GitHub: elishaadamu
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>

              <a
                href="https://www.linkedin.com/in/frontend-developer-elisha-inuwa-75a200422"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 hover:border-[#a3e635]/50 transition-colors"
              >
                <div className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">
                  <Linkedin className="w-4 h-4 text-[#a3e635]" />
                  LinkedIn: Elisha Inuwa
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>
            </div>

            <div className="pt-2 border-t border-slate-200 dark:border-white/10 flex items-center gap-2 text-xs text-slate-500">
              <Clock className="w-3.5 h-3.5 text-[#a3e635]" />
              <span>Location: Jos, Nigeria (UTC+1 / West Africa Time)</span>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-7">
          <div className="rounded-3xl glass-panel p-8 sm:p-10 border border-white/10 dark:border-white/10">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
              Send a Project Proposal or Inquiry
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-8">
              Fill in your details below and I will get back to you with architectural ideas, estimates, or next steps.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                    Your Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Christopher Allen"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-[#0b0e14] text-slate-900 dark:text-white text-sm focus:outline-none focus:border-[#a3e635] focus:ring-1 focus:ring-[#a3e635] transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                    Your Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. name@organization.com"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-[#0b0e14] text-slate-900 dark:text-white text-sm focus:outline-none focus:border-[#a3e635] focus:ring-1 focus:ring-[#a3e635] transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                    Project Type / Engagement
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-[#0b0e14] text-slate-900 dark:text-white text-sm focus:outline-none focus:border-[#a3e635] focus:ring-1 focus:ring-[#a3e635] transition-all"
                  >
                    <option>React / Next.js Web Application</option>
                    <option>Android / React Native Mobile App</option>
                    <option>Jekyll / Static Site Engineering</option>
                    <option>Full-Time Senior Frontend Role</option>
                    <option>Technical Consultation & Architecture</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                    Estimated Timeline / Budget
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-[#0b0e14] text-slate-900 dark:text-white text-sm focus:outline-none focus:border-[#a3e635] focus:ring-1 focus:ring-[#a3e635] transition-all"
                  >
                    <option>$500 - $1,500 (Small sprint/revamp)</option>
                    <option>$1,500 - $5,000 (Full web/mobile app)</option>
                    <option>$5,000+ (Comprehensive enterprise system)</option>
                    <option>Full-Time Monthly Salary</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                  Project Details & Goals
                </label>
                <textarea
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your product, required features, timeline, and current tech stack..."
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-[#0b0e14] text-slate-900 dark:text-white text-sm focus:outline-none focus:border-[#a3e635] focus:ring-1 focus:ring-[#a3e635] transition-all"
                />
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
                <button
                  type="submit"
                  className="w-full sm:w-auto btn-primary-lime"
                >
                  <Send className="w-4 h-4" />
                  Dispatch Email Inquiry
                </button>
                <button
                  type="button"
                  onClick={handleWhatsAppDirect}
                  className="w-full sm:w-auto btn-secondary-dark"
                >
                  <MessageSquare className="w-4 h-4 text-[#a3e635]" />
                  Forward to WhatsApp
                </button>
              </div>

              {submitted && (
                <div className="p-4 rounded-xl bg-[#a3e635]/10 border border-[#a3e635]/30 flex items-center gap-3 text-xs sm:text-sm text-[#a3e635]">
                  <CheckCircle2 className="w-5 h-5 text-[#a3e635] flex-shrink-0" />
                  <span>
                    Thank you! Your email client has been prepared. If it did not open automatically, please reach out directly at <strong>elishadamu97@gmail.com</strong> or via WhatsApp.
                  </span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
