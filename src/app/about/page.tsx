import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  GraduationCap,
  Briefcase,
  Award,
  CheckCircle2,
  FileText,
  Zap,
  Cpu,
  ArrowRight,
  ArrowUpRight,
  ExternalLink,
  Code2,
  Sparkles,
  MapPin,
  Calendar,
} from 'lucide-react';

const experiences = [
  {
    role: 'Senior Frontend React Developer',
    company: 'AY Creative Technologies',
    location: 'Kano, Nigeria',
    period: '05/2025 – Present',
    duration: 'Ongoing',
    description:
      'Architecting responsive, high-performance web applications using React.js, Next.js, and Vite. Collaborating with cross-functional design and backend teams, implementing reusable UI component libraries, and integrating complex RESTful APIs.',
    achievements: [
      'Engineered dynamic dashboards with optimized bundle size and sub-second paint times.',
      'Enforced modern accessibility (a11y) and responsive standards across all device breakpoints.',
      'Streamlined deployment pipelines using Vercel, Netlify, and Render.',
    ],
  },
  {
    role: 'Frontend Developer & Jekyll Specialist',
    company: 'Life with Alacrity',
    location: 'California, United States (Remote)',
    period: '09/2023 – Present',
    duration: '2+ Years',
    description:
      'Collaborating with Christopher Allen (co-author of TLS/SSL and decentralized identity pioneer) to redesign and maintain LifeWithAlacrity.com. Managed complex static site architecture, Jekyll themes, and GitHub Pages deployments.',
    achievements: [
      'Redesigned publication layout for maximum typographical clarity and mobile readability.',
      'Structured technical essays, cryptographic references, and Markdown content with zero downtime.',
      'Optimized site speed and search engine indexation.',
    ],
    link: 'https://www.lifewithalacrity.com',
  },
  {
    role: 'Web Developer & Technical Consultant',
    company: 'Sports Tech West',
    location: 'Las Vegas, United States (Remote)',
    period: '07/2024 – Present',
    duration: '1+ Year',
    description:
      'Led frontend development and digital content architecture for Sports Tech West (Techstars Alumni company). Enhanced web features, optimized SEO performance, and streamlined content distribution.',
    achievements: [
      'Implemented high-conversion interactive features to drive user engagement.',
      'Audited and refined technical SEO, resulting in measurable organic traffic gains.',
      'Managed digital presence and social media technical integrations.',
    ],
    link: 'http://sportstechwest.com',
  },
  {
    role: 'Web Programmer',
    company: 'Master Eye Security Services Limited',
    location: 'Jos Plateau, Nigeria',
    period: '01/2023 – Present',
    duration: '3+ Years',
    description:
      'Built and maintained the corporate security portal. Introduced real-time community engagement modules, Disqus integration, inquiry workflows, and social media channels.',
    achievements: [
      'Designed end-to-end security services portfolio with fast-loading responsive assets.',
      'Integrated live feedback channels, increasing client consultations.',
    ],
    link: 'https://mastereyeservices.netlify.app',
  },
  {
    role: 'Coding Instructor',
    company: 'CodeJika & Youth Tech Academy',
    location: 'Jos, Nigeria',
    period: '2022 – Present',
    duration: 'Community Mentorship',
    description:
      'Mentored secondary school students and youth aged 8–16 in foundational web development. Taught HTML5, CSS3, modern JavaScript, and algorithmic problem-solving.',
    achievements: [
      'Empowered over 50+ students to build and deploy their first live websites independently.',
      'Curated hands-on project curriculums fostering critical thinking.',
    ],
  },
  {
    role: 'Tech Support Specialist & Developer',
    company: 'Kitron Green Initiatives',
    location: 'Nigeria',
    period: '04/2023 – Present',
    duration: 'Sustainability Support',
    description:
      'Provided dual-role expertise in web development and IT infrastructure for environmental sustainability initiatives. Built web interfaces and diagnosed complex network and hardware configurations.',
    achievements: [
      'Maintained organizational platforms and automated daily administrative workflows.',
    ],
  },
];

const certifications = [
  {
    title: 'Meta Frontend Engineer Certificate',
    issuer: 'Meta (Coursera)',
    period: '2023',
    link: 'https://coursera.org',
  },
  {
    title: 'Introduction to Front-End Development',
    issuer: 'Meta (Coursera)',
    period: '2023',
    link: 'https://www.coursera.org/account/accomplishments/verify/PYVLS7GBFAA7',
  },
  {
    title: 'Version Control with Git & GitHub',
    issuer: 'Meta (Coursera)',
    period: '2023',
    link: 'https://www.coursera.org/account/accomplishments/verify/RW4ZSAVBC4T6',
  },
  {
    title: 'Developing Interpersonal Skills',
    issuer: 'IBM (Coursera)',
    period: '2023',
    link: 'https://coursera.org/verify/MGSZC6NC7V7P',
  },
];

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-28 space-y-16 sm:space-y-24">
      {/* 1. Page Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#a3e635]/10 text-[#a3e635] border border-[#a3e635]/25 font-mono">
          <Sparkles className="w-3.5 h-3.5" />
          The Story Behind the Code
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Bridging Electrical Engineering &amp; Modern Software Systems
        </h1>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
          I apply circuit-level discipline, analytical systems thinking, and a passion for design aesthetics to solve complex challenges in React, Next.js, and Android mobile applications.
        </p>
      </div>

      {/* 2. Portrait (img2.jpeg) & Narrative (Inspired by Velombe.com & Yuyu.ng) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Professional Cutout Column (img2-nobg.png - NO frame, NO box) */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-full max-w-[380px] sm:max-w-[420px] flex flex-col items-center">
            {/* Ambient Aura */}
            <div className="absolute inset-0 rounded-full bg-[#a3e635]/15 blur-3xl scale-95 pointer-events-none" />

            {/* Free-standing cutout without frame */}
            <div className="relative w-full aspect-[4/5] flex items-end justify-center">
              <Image
                src="/profile/img2-nobg.png"
                alt="Elisha Adamu Inuwa - Electrical Engineer & Senior Software Developer"
                fill
                sizes="(max-width: 768px) 100vw, 420px"
                className="object-contain object-bottom drop-shadow-2xl hover:scale-102 transition-transform duration-500"
                priority
              />
            </div>

            {/* Verified Degree Certificate Pill */}
            <div className="w-full mt-4 p-3.5 rounded-2xl bg-white dark:bg-[#0b0e14] border border-slate-200 dark:border-white/10 flex items-center justify-between text-xs shadow-md">
              <div>
                <p className="font-bold text-slate-900 dark:text-white">ATBU Bauchi B.Eng</p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">Electrical &amp; Electronics (2:1)</p>
              </div>
              <a
                href="/documents/bachelors-degree.jpg"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 font-bold text-[#84cc16] dark:text-[#a3e635] hover:underline"
              >
                <span>Verify Degree</span>
                <ExternalLink className="w-3 h-3 stroke-[2.5]" />
              </a>
            </div>
          </div>
        </div>

        {/* Narrative Text */}
        <div className="lg:col-span-7 space-y-6 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
          <div className="p-6 rounded-2xl bg-white dark:bg-[#0b0e14] border border-slate-200 dark:border-white/10 space-y-3 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Zap className="w-5 h-5 text-[#a3e635]" />
              Engineering Mindset in Frontend Code
            </h2>
            <p>
              I graduated with a <strong className="text-slate-900 dark:text-white">Second Class Upper (2:1)</strong> in Electrical and Electronics Engineering from <strong className="text-slate-900 dark:text-white">Abubakar Tafawa Balewa University (ATBU), Bauchi</strong>. My capstone engineering thesis focused on the design and construction of an automatic solar-powered flood lamp system for Engineering Complex Block C—reducing power consumption by 75% through microcontroller-controlled ambient lux sensors and solar battery management.
            </p>
            <p>
              This rigorous engineering background gave me a first-principles understanding of signal processing, telemetry, state machines, and algorithmic efficiency. When building frontend applications with React and Next.js, or mobile applications with Flutter and React Native, I approach UI state, network latency, and memory consumption with the exact same rigor.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-[#0b0e14] border border-slate-200 dark:border-white/10 space-y-3 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Cpu className="w-5 h-5 text-[#a3e635]" />
              From Systems Engineering to International Web Scale
            </h2>
            <p>
              Over the past 5+ years, I have collaborated with visionary clients across the globe. Working alongside <strong className="text-slate-900 dark:text-white">Christopher Allen</strong> (pioneer of TLS/SSL and founder of Blockchain Commons) on <em>Life with Alacrity</em> honed my attention to typographical precision, cryptographic documentation, and Markdown architecture.
            </p>
            <p>
              Concurrently, supporting <strong className="text-slate-900 dark:text-white">Sports Tech West</strong> in the United States and architecting fintech/telecom infrastructure for <strong className="text-slate-900 dark:text-white">SM DATA</strong> in Nigeria demonstrated my capacity to handle diverse business models, live payment gateways, automated VTU APIs, and offline-first mobile apps.
            </p>
          </div>
        </div>
      </div>

      {/* 3. Work Experience (Inspired by Yuyu.ng Company Timeline) */}
      <div className="space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#a3e635]/10 text-[#a3e635] border border-[#a3e635]/25 mb-2">
              <Briefcase className="w-3.5 h-3.5" />
              Career Journey
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Work Experience &amp; Corporate Engagements
            </h2>
          </div>

          <a
            href="/documents/elisha-adamu-cv.pdf"
            download
            className="btn-primary-lime self-start sm:self-auto"
          >
            <FileText className="w-4 h-4" />
            <span>Download Official CV</span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white dark:bg-[#0b0e14] border border-slate-200 dark:border-white/10 space-y-4 hover:border-[#a3e635]/40 transition-all duration-300 shadow-sm"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    {exp.role}
                  </h3>
                  <p className="text-xs font-bold text-[#84cc16] dark:text-[#a3e635]">
                    {exp.company}
                  </p>
                </div>
                <span className="shrink-0 px-2.5 py-1 rounded-full text-[11px] font-mono font-bold bg-[#a3e635]/10 text-[#a3e635] border border-[#a3e635]/25">
                  {exp.duration}
                </span>
              </div>

              <div className="flex items-center gap-4 text-xs text-slate-400 dark:text-slate-500">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {exp.period}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" />
                  {exp.location}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {exp.description}
              </p>

              <ul className="space-y-1.5 pt-2 border-t border-slate-100 dark:border-white/10">
                {exp.achievements.map((ach, aIdx) => (
                  <li
                    key={aIdx}
                    className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#a3e635] shrink-0 mt-0.5" />
                    <span>{ach}</span>
                  </li>
                ))}
              </ul>

              {exp.link && (
                <div className="pt-2">
                  <a
                    href={exp.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#84cc16] dark:text-[#a3e635] hover:underline"
                  >
                    <span>Visit Platform</span>
                    <ExternalLink className="w-3 h-3 stroke-[2.5]" />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* 4. Education & Verified Certifications */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Education Card */}
        <div className="p-8 rounded-2xl bg-white dark:bg-[#0b0e14] border border-slate-200 dark:border-white/10 space-y-4 shadow-sm">
          <div className="w-12 h-12 rounded-xl bg-[#a3e635]/10 border border-[#a3e635]/25 flex items-center justify-center text-[#a3e635]">
            <GraduationCap className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              B.Eng in Electrical &amp; Electronics Engineering
            </h3>
            <p className="text-sm font-semibold text-[#84cc16] dark:text-[#a3e635]">
              Abubakar Tafawa Balewa University (ATBU), Bauchi
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Second Class Upper Division (2:1) · 2017 – 2023
            </p>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            Rigorous 5-year curriculum covering control systems, telecommunications, digital electronics, microprocessors, signal processing, and high-voltage power networks.
          </p>
          <div className="pt-3">
            <a
              href="/documents/bachelors-degree.jpg"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#84cc16] dark:text-[#a3e635] hover:underline"
            >
              <ExternalLink className="w-3.5 h-3.5 stroke-[2.5]" />
              View Verified Bachelor&apos;s Degree Certificate
            </a>
          </div>
        </div>

        {/* Certifications Card */}
        <div className="p-8 rounded-2xl bg-white dark:bg-[#0b0e14] border border-slate-200 dark:border-white/10 space-y-4 shadow-sm">
          <div className="w-12 h-12 rounded-xl bg-[#a3e635]/10 border border-[#a3e635]/25 flex items-center justify-center text-[#a3e635]">
            <Award className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              Industry Certifications &amp; Credentials
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Verified certificates from Meta and IBM via Coursera.
            </p>
          </div>
          <div className="space-y-3 pt-2">
            {certifications.map((c, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200/60 dark:border-white/10 text-xs"
              >
                <div>
                  <p className="font-bold text-slate-900 dark:text-white">{c.title}</p>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">
                    {c.issuer} · {c.period}
                  </p>
                </div>
                <a
                  href={c.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#84cc16] dark:text-[#a3e635] hover:underline flex items-center gap-1 font-bold"
                >
                  Verify <ExternalLink className="w-3 h-3 stroke-[2.5]" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
