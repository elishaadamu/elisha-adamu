'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Download,
  Printer,
  Mail,
  Phone,
  MapPin,
  MessageSquare,
  Award,
  GraduationCap,
  Briefcase,
  Code2,
  ExternalLink,
  CheckCircle2,
  Globe,
  Sparkles,
  FileCheck,
  Cpu,
} from 'lucide-react';
import { Github, Linkedin, Upwork } from '@/components/Icons';

export default function CVPage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-8">
      {/* 1. Header Toolbar (Hidden on print) */}
      <div className="print:hidden rounded-2xl bg-[#0b0e14] p-6 border border-[#a3e635]/25 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#a3e635]/10 text-[#a3e635] border border-[#a3e635]/25 mb-1 font-mono">
            <FileCheck className="w-3.5 h-3.5" />
            Official Curriculum Vitae
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Curriculum Vitae (CV) & Resume
          </h1>
          <p className="text-xs sm:text-sm text-slate-400">
            Standard executive format with verified engineering credentials, Coursera certificates, and enterprise experience.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <a
            href="/documents/elisha-adamu-cv.pdf"
            download="ADAMU_ELISHA_INUWA_CV.pdf"
            className="btn-primary-lime text-xs sm:text-sm"
          >
            <Download className="w-4 h-4" />
            Download PDF
          </a>
          <button
            onClick={handlePrint}
            className="btn-secondary-dark text-xs sm:text-sm"
          >
            <Printer className="w-4 h-4" />
            Print / Save
          </button>
          <a
            href="/documents/bachelors-degree.jpg"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl font-semibold text-xs border border-[#a3e635]/30 text-[#a3e635] hover:bg-[#a3e635]/10 transition-colors"
          >
            <Award className="w-4 h-4" />
            Degree Proof
          </a>
          <a
            href="https://drive.google.com/file/d/1pMVkMwVb8W1Ewuf8g8v5h3Is-2rOJZNg/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl font-semibold text-xs border border-white/10 hover:border-[#a3e635]/40 text-slate-200 hover:text-[#a3e635] bg-white/5 transition-colors"
          >
            <CheckCircle2 className="w-4 h-4 text-[#a3e635]" />
            NSE Member
          </a>
        </div>
      </div>

      {/* 2. Official CV Document Container (A4 Proportions) */}
      <article className="rounded-3xl bg-[#06080c] border border-white/10 p-8 sm:p-14 space-y-12 print:border-none print:p-0 print:m-0 print:bg-white text-slate-200">
        {/* CV Header */}
        <div className="border-b border-white/10 pb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="space-y-2">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight uppercase">
              Elisha Adamu Inuwa
            </h2>
            <p className="text-base sm:text-lg font-bold text-[#a3e635]">
              Senior Frontend React &amp; Next.js Developer | Electrical Electronics Engineer
            </p>
            <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs sm:text-sm text-slate-400 pt-1">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#a3e635]" />
                Jos, Plateau State, Nigeria
              </span>
              <a href="mailto:elishadamu97@gmail.com" className="flex items-center gap-1.5 hover:text-[#a3e635] transition-colors">
                <Mail className="w-4 h-4 text-[#a3e635]" />
                elishadamu97@gmail.com
              </a>
              <a href="https://wa.link/powbca" className="flex items-center gap-1.5 hover:text-[#a3e635] transition-colors">
                <Phone className="w-4 h-4 text-[#a3e635]" />
                (+234) 07067206984
              </a>
            </div>
            <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-slate-400 pt-1 font-mono">
              <a
                href="https://github.com/elishaadamu"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 hover:text-[#a3e635] transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                github.com/elishaadamu
              </a>
              <a
                href="https://www.linkedin.com/in/frontend-developer-elisha-inuwa-75a200422"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 hover:text-[#a3e635] transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5" />
                LinkedIn Profile
              </a>
              <a
                href="https://www.upwork.com/freelancers/~01f347888f7198ba97?viewMode=1"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 text-[#a3e635] font-semibold hover:underline"
              >
                <Upwork className="w-3.5 h-3.5" />
                <span>Upwork Top Rated (100% JSS)</span>
                <ExternalLink className="w-3 h-3 opacity-70" />
              </a>
              <span className="text-slate-400">
                • NSE Graduate Member
              </span>
            </div>
          </div>

          <div className="relative w-28 h-28 flex-shrink-0 flex items-center justify-center">
            <Image
              src="/profile/img3-nobg.png"
              alt="Elisha Adamu Inuwa"
              fill
              sizes="112px"
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Professional Summary */}
        <section className="space-y-3">
          <h3 className="text-sm font-bold uppercase tracking-wider text-[#a3e635] flex items-center gap-2 border-b border-[#a3e635]/20 pb-1 font-mono">
            <Sparkles className="w-4 h-4" />
            About Me &amp; Professional Summary
          </h3>
          <p className="text-sm sm:text-base leading-relaxed text-slate-300">
            I am a graduate of <strong className="text-white">Electrical and Electronics Engineering</strong> and a registered <strong className="text-white">Graduate Member of the Nigerian Society of Engineers (NSE)</strong> with advanced specialization in React and mobile development. My rigorous engineering background sharpens my architectural thinking and performance optimization, which I apply to enterprise web and mobile platforms.
          </p>
          <p className="text-sm sm:text-base leading-relaxed text-slate-300">
            Through commercial enterprise contracts and self-directed engineering, I have delivered scalable solutions using <strong className="text-white">React.js, Next.js 16, TypeScript, Android (React Native), and Jekyll</strong>. I excel at building accessible, performant, and high-converting user interfaces with clean architecture and robust API integrations.
          </p>
        </section>

        {/* Work Experience */}
        <section className="space-y-6">
          <h3 className="text-sm font-bold uppercase tracking-wider text-[#a3e635] flex items-center gap-2 border-b border-[#a3e635]/20 pb-1 font-mono">
            <Briefcase className="w-4 h-4" />
            Work Experience
          </h3>

          <div className="space-y-6">
            {/* AY Creative Technologies */}
            <div className="space-y-2 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[#a3e635]/30 transition-colors">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm">
                <div>
                  <h4 className="font-bold text-base text-white">
                    Senior Frontend React Developer
                  </h4>
                  <p className="text-[#a3e635] font-semibold">
                    AY Creative Technologies • Kano, Nigeria
                  </p>
                </div>
                <span className="text-xs font-semibold text-slate-400 font-mono">
                  05/2025 – Present
                </span>
              </div>
              <ul className="list-disc list-inside space-y-1.5 text-xs sm:text-sm text-slate-300">
                <li>Developed modern web interfaces using React, JavaScript (ES6+), and Next.js/Vite for optimized runtime performance.</li>
                <li>Styled applications with Tailwind CSS, Bootstrap, Material UI, and Ant Design, ensuring responsive and mobile-friendly layouts.</li>
                <li>Deployed applications using Netlify, Vercel, and Render; managed version control with Git and GitHub, integrating secure RESTful APIs.</li>
                <li>Translated UI/UX designs into reusable component libraries, guaranteeing cross-browser compatibility and ADA accessibility.</li>
                <li>Maintained clean code practices, conducted pull request reviews, and collaborated in fast-paced Agile sprints.</li>
              </ul>
            </div>

            {/* Life with Alacrity */}
            <div className="space-y-2 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[#a3e635]/30 transition-colors">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm">
                <div>
                  <h4 className="font-bold text-base text-white">
                    Frontend Developer &amp; Static Site Architect
                  </h4>
                  <p className="text-[#a3e635] font-semibold">
                    Life with Alacrity • California, United States (Remote)
                  </p>
                </div>
                <span className="text-xs font-semibold text-slate-400 font-mono">
                  09/2023 – Present
                </span>
              </div>
              <ul className="list-disc list-inside space-y-1.5 text-xs sm:text-sm text-slate-300">
                <li>Collaborated with Christopher Allen (co-author of TLS/SSL specification and decentralized identity architect) on publication redesign.</li>
                <li>Engineered high-performance static pages using Jekyll, Liquid, and GitHub Pages CI/CD.</li>
                <li>Structured technical research papers, Markdown archives, and cryptographic documentation with high typographic readability.</li>
                <li>Fixed deployment errors and optimized search indexation.</li>
              </ul>
            </div>

            {/* Sports Tech West */}
            <div className="space-y-2 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[#a3e635]/30 transition-colors">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm">
                <div>
                  <h4 className="font-bold text-base text-white">
                    Web Developer &amp; Technical Consultant
                  </h4>
                  <p className="text-[#a3e635] font-semibold">
                    Sports Tech West (Techstars Alumni) • Las Vegas, United States (Remote)
                  </p>
                </div>
                <span className="text-xs font-semibold text-slate-400 font-mono">
                  07/2024 – Present
                </span>
              </div>
              <ul className="list-disc list-inside space-y-1.5 text-xs sm:text-sm text-slate-300">
                <li>Spearheaded new web feature development and interactive UI components.</li>
                <li>Audited and refined technical SEO and metadata to increase organic search traffic.</li>
                <li>Integrated content workflows across social media channels and digital assets.</li>
              </ul>
            </div>

            {/* Master Eye Security Services */}
            <div className="space-y-2 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[#a3e635]/30 transition-colors">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm">
                <div>
                  <h4 className="font-bold text-base text-white">
                    Web Programmer
                  </h4>
                  <p className="text-[#a3e635] font-semibold">
                    Master Eye Security Services Limited • Jos, Nigeria
                  </p>
                </div>
                <span className="text-xs font-semibold text-slate-400 font-mono">
                  01/2023 – Present
                </span>
              </div>
              <ul className="list-disc list-inside space-y-1.5 text-xs sm:text-sm text-slate-300">
                <li>Designed, built, and launched the corporate website with interactive service portfolios.</li>
                <li>Integrated live comment capabilities using Disqus API to increase customer engagement.</li>
                <li>Administered social media technical channels and lead acquisition.</li>
              </ul>
            </div>

            {/* CodeJika & Kitron */}
            <div className="space-y-2 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[#a3e635]/30 transition-colors">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm">
                <div>
                  <h4 className="font-bold text-base text-white">
                    Coding Instructor &amp; Tech Support Specialist
                  </h4>
                  <p className="text-[#a3e635] font-semibold">
                    CodeJika &amp; Kitron Green Initiatives • Jos / Remote, Nigeria
                  </p>
                </div>
                <span className="text-xs font-semibold text-slate-400 font-mono">
                  2022 – Present
                </span>
              </div>
              <ul className="list-disc list-inside space-y-1.5 text-xs sm:text-sm text-slate-300">
                <li>Tutored secondary school students and youth aged 8–16 in foundational web development (HTML5, CSS3, JavaScript).</li>
                <li>Diagnosed and resolved technical issues and maintained IT infrastructure for environmental sustainability projects.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Education & Verified Certifications */}
        <section id="certifications" className="space-y-4">
          <div className="flex items-center justify-between border-b border-[#a3e635]/20 pb-1">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#a3e635] flex items-center gap-2 font-mono">
              <GraduationCap className="w-4 h-4" />
              Education &amp; Verified Professional Certifications
            </h3>
            <span className="text-xs text-[#a3e635] font-mono">5 Verified Credentials</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
            {/* Degree */}
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#a3e635]/40 transition-colors flex flex-col justify-between space-y-2">
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-white">
                    B.Eng in Electrical and Electronics Engineering
                  </h4>
                  <span className="text-[11px] font-mono text-[#a3e635]">ATBU</span>
                </div>
                <p className="text-[#a3e635] font-medium">
                  Abubakar Tafawa Balewa University (ATBU), Bauchi
                </p>
                <p className="text-slate-400 text-xs">
                  Grade: <strong className="text-white">Second Class Upper Division</strong> • 2017 – 2022
                </p>
              </div>
              <div className="pt-2">
                <a
                  href="/documents/bachelors-degree.jpg"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#a3e635] hover:underline"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  View Original Certificate
                </a>
              </div>
            </div>

            {/* NSE Graduate Member */}
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#a3e635]/40 transition-colors flex flex-col justify-between space-y-2">
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-white">
                    NSE Graduate Member Certificate (GMNSE)
                  </h4>
                  <span className="text-[11px] font-mono text-[#a3e635]">NSE</span>
                </div>
                <p className="text-[#a3e635] font-medium">
                  The Nigerian Society of Engineers (NSE)
                </p>
                <p className="text-slate-400 text-xs">
                  Official Graduate Professional Membership (Certificate No. G45009)
                </p>
              </div>
              <div className="pt-2">
                <a
                  href="https://drive.google.com/file/d/1pMVkMwVb8W1Ewuf8g8v5h3Is-2rOJZNg/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#a3e635] hover:underline"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  Verify NSE Certificate
                </a>
              </div>
            </div>

            {/* Meta Android Mobile Application Development */}
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#a3e635]/40 transition-colors flex flex-col justify-between space-y-2">
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-white">
                    Introduction to Android Mobile Application Development
                  </h4>
                  <span className="text-[11px] font-mono text-[#a3e635]">Meta</span>
                </div>
                <p className="text-[#a3e635] font-medium">
                  Meta (Coursera)
                </p>
                <p className="text-slate-400 text-xs">
                  Android Studio, Kotlin/React Native basics, mobile layouts, lifecycle management
                </p>
              </div>
              <div className="pt-2">
                <a
                  href="https://drive.google.com/file/d/1ee2veXl_aYpJ-hy9Sx2LBksfMyyCHmG5/view?usp=drive_link"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#a3e635] hover:underline"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  Verify Coursera Certificate
                </a>
              </div>
            </div>

            {/* Version Control with Git & GitHub */}
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#a3e635]/40 transition-colors flex flex-col justify-between space-y-2">
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-white">
                    Version Control with Git &amp; GitHub
                  </h4>
                  <span className="text-[11px] font-mono text-[#a3e635]">Meta</span>
                </div>
                <p className="text-[#a3e635] font-medium">
                  Meta (Coursera)
                </p>
                <p className="text-slate-400 text-xs">
                  Advanced Git CLI, branch management, collaborative PR workflows, CI/CD
                </p>
              </div>
              <div className="pt-2">
                <a
                  href="https://drive.google.com/file/d/10PICzPKTh9bEIVIOegnvbPnunyHL-pb9/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#a3e635] hover:underline"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  Verify Coursera Certificate
                </a>
              </div>
            </div>

            {/* Developing Interpersonal Skills */}
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#a3e635]/40 transition-colors flex flex-col justify-between space-y-2">
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-white">
                    Developing Interpersonal Skills
                  </h4>
                  <span className="text-[11px] font-mono text-[#a3e635]">IBM</span>
                </div>
                <p className="text-[#a3e635] font-medium">
                  IBM (Coursera)
                </p>
                <p className="text-slate-400 text-xs">
                  Active listening, technical diplomacy, client communications, agile collaboration
                </p>
              </div>
              <div className="pt-2">
                <a
                  href="https://drive.google.com/file/d/1OsiySSX1Q5a145SKw69owERG_-dUixo5/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#a3e635] hover:underline"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  Verify Coursera Certificate
                </a>
              </div>
            </div>

            {/* Meta Frontend Engineer */}
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#a3e635]/40 transition-colors flex flex-col justify-between space-y-2">
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-white">
                    Meta Frontend Engineer Professional Certificate
                  </h4>
                  <span className="text-[11px] font-mono text-[#a3e635]">Meta</span>
                </div>
                <p className="text-[#a3e635] font-medium">
                  Meta (Coursera)
                </p>
                <p className="text-slate-400 text-xs">
                  Advanced React, component architecture, hooks, state management, testing
                </p>
              </div>
              <div className="pt-2">
                <a
                  href="https://coursera.org"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#a3e635] hover:underline"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  Coursera Specialization
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Engineering Capstone Project */}
        <section className="space-y-3">
          <h3 className="text-sm font-bold uppercase tracking-wider text-[#a3e635] flex items-center gap-2 border-b border-[#a3e635]/20 pb-1 font-mono">
            <Cpu className="w-4 h-4" />
            Engineering Capstone Project
          </h3>
          <div className="p-5 rounded-xl bg-white/[0.03] border border-white/10 space-y-2 text-xs sm:text-sm">
            <h4 className="font-bold text-white">
              Design and Construction of Automatic Solar-Powered Flood Lamp for Engineering Complex Block C
            </h4>
            <p className="leading-relaxed text-slate-300">
              Designed, constructed, and tested an automated solar-powered lighting system at ATBU Bauchi. The system utilized a 215W solar panel array, 60Ah storage battery, and microcontroller-controlled ambient lux sensors to switch LED luminaires automatically. The system delivered 6,232.2 lux of illumination, achieved an energy efficiency of 22%, and reduced energy consumption by 75% compared to conventional floodlights.
            </p>
          </div>
        </section>

        {/* Technical Skills Matrix */}
        <section className="space-y-3">
          <h3 className="text-sm font-bold uppercase tracking-wider text-[#a3e635] flex items-center gap-2 border-b border-[#a3e635]/20 pb-1 font-mono">
            <Code2 className="w-4 h-4" />
            Technical Skills Taxonomy
          </h3>

          <div className="space-y-2 text-xs sm:text-sm">
            <p>
              <strong className="text-white">Frontend Core:</strong> React.js, Next.js (App Router), TypeScript, JavaScript (ES6+), Vite, Tailwind CSS, SASS/CSS3, HTML5, Redux Toolkit, Zustand, Material UI, Ant Design.
            </p>
            <p>
              <strong className="text-white">Mobile &amp; AI:</strong> Android / React Native, Google Gemini 2.5 Flash, OpenAI Whisper Large, Real-Time Audio Streaming, Waveform Rendering, Push Notifications.
            </p>
            <p>
              <strong className="text-white">CMS &amp; Static Generators:</strong> Jekyll, Chirpy Theme Architecture, Liquid Templating, GitHub Pages, Markdown, Decap CMS, Hugo.
            </p>
            <p>
              <strong className="text-white">APIs &amp; Backend Integration:</strong> RESTful APIs, Webhooks, JSON Parsing, Virtual Accounts &amp; Payment Gateways, Node.js, SQLite, MySQL.
            </p>
            <p>
              <strong className="text-white">Tools &amp; Deployment:</strong> Git, GitHub Actions, Vercel, Netlify, Render, Postman, Chrome DevTools, VS Code, Figma.
            </p>
          </div>
        </section>

        {/* Languages */}
        <section className="space-y-3">
          <h3 className="text-sm font-bold uppercase tracking-wider text-[#a3e635] flex items-center gap-2 border-b border-[#a3e635]/20 pb-1 font-mono">
            <Globe className="w-4 h-4" />
            Language Proficiencies
          </h3>
          <div className="flex flex-wrap gap-6 text-xs sm:text-sm text-slate-300">
            <div>
              <strong className="text-white">English:</strong> Native / Full Professional (C2)
            </div>
            <div>
              <strong className="text-white">Hausa:</strong> Professional Working Proficiency (C1 / B2)
            </div>
            <div>
              <strong className="text-white">French:</strong> Elementary (A2)
            </div>
          </div>
        </section>
      </article>
    </div>
  );
}
