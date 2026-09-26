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
  UserCheck,
  Languages,
  Layers,
  HeartHandshake,
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
            Curriculum Vitae (CV) &amp; Resume
          </h1>
          <p className="text-xs sm:text-sm text-slate-400">
            Updated executive format reflecting all recent commercial contracts, verified engineering credentials, and certifications.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <a
            href="/documents/elisha-adamu-cv.pdf"
            download="Adamu_Elisha_Inuwa_CV.pdf"
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
        <div className="border-b border-white/10 pb-8 flex flex-col sm:flex-row sm:items-start justify-between gap-6">
          <div className="space-y-3">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight uppercase">
              Elisha Adamu Inuwa
            </h2>
            <p className="text-base sm:text-lg font-bold text-[#a3e635]">
              Full-Stack Web &amp; React Native Developer | Electrical &amp; Electronics Engineer
            </p>

            {/* Contact details */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs sm:text-sm text-slate-400 pt-1">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#a3e635] shrink-0" />
                No. 8, Newlayout, behind living faith church, Jebbu Bassa Jos, Plateau State, Nigeria (930221)
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs sm:text-sm text-slate-400 pt-0.5">
              <a href="mailto:elishadamu97@gmail.com" className="flex items-center gap-1.5 hover:text-[#a3e635] transition-colors">
                <Mail className="w-4 h-4 text-[#a3e635] shrink-0" />
                elishadamu97@gmail.com
              </a>
              <a href="https://wa.link/powbca" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-[#a3e635] transition-colors">
                <Phone className="w-4 h-4 text-[#a3e635] shrink-0" />
                (+234) 07067206984
              </a>
              <a href="https://elisha-adamu.vercel.app" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-[#a3e635] transition-colors">
                <Globe className="w-4 h-4 text-[#a3e635] shrink-0" />
                elisha-adamu.vercel.app
              </a>
            </div>

            {/* Social & Verification Badges */}
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
                • NSE Graduate Member (G45009)
              </span>
            </div>

            {/* Personal Details Tagline */}
            <div className="flex flex-wrap items-center gap-2 pt-2 text-[11px] text-slate-400 font-mono">
              <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10">Nationality: Nigerian</span>
              <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10">Passport: B04212312</span>
              <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10">DOB: 28/01/1997</span>
              <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10">Place of Birth: Lagos, Nigeria</span>
            </div>
          </div>

          <div className="relative w-28 h-28 sm:w-32 sm:h-32 flex-shrink-0 flex items-center justify-center">
            <Image
              src="/profile/img3-nobg.png"
              alt="Elisha Adamu Inuwa"
              fill
              sizes="128px"
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Professional Summary (About Me) */}
        <section className="space-y-3">
          <h3 className="text-sm font-bold uppercase tracking-wider text-[#a3e635] flex items-center gap-2 border-b border-[#a3e635]/20 pb-1 font-mono">
            <Sparkles className="w-4 h-4" />
            About Me &amp; Professional Summary
          </h3>
          <p className="text-sm sm:text-base leading-relaxed text-slate-300">
            I’m a <strong className="text-white">Full-Stack Web and React Native Developer</strong> with a background in <strong className="text-white">Electrical &amp; Electronics Engineering</strong> and a passion for building practical, scalable, and high-performance digital products across web and mobile.
          </p>
          <p className="text-sm sm:text-base leading-relaxed text-slate-300">
            My engineering background has strengthened my analytical thinking, problem-solving, and systems approach, which I bring into software development. I build modern web applications with <strong className="text-white">React.js, Next.js, Express.js, and FastAPI</strong>, and mobile applications with <strong className="text-white">React Native and Expo</strong>, creating seamless experiences across platforms.
          </p>
          <p className="text-sm sm:text-base leading-relaxed text-slate-300">
            I enjoy turning ideas into functional products, from responsive interfaces and REST APIs to mobile applications and complete full-stack systems. I work with modern development practices including component-based architecture, reusable UI patterns, API integration, performance optimization, Git/GitHub, and cloud deployment.
          </p>
          <p className="text-sm sm:text-base leading-relaxed text-slate-300">
            Beyond development, I have a strong interest in UI/UX, emerging technologies, automation, and technology-driven solutions. My work spans personal products, client projects, and collaborative development, giving me experience adapting to different requirements and solving real-world problems. My goal is to combine my engineering mindset, software development skills, and continuous learning to build technology that is useful, reliable, and impactful.
          </p>
        </section>

        {/* Work Experience */}
        <section className="space-y-6">
          <h3 className="text-sm font-bold uppercase tracking-wider text-[#a3e635] flex items-center gap-2 border-b border-[#a3e635]/20 pb-1 font-mono">
            <Briefcase className="w-4 h-4" />
            Work Experience
          </h3>

          <div className="space-y-6">
            {/* 1. AY Creative Technologies */}
            <div className="space-y-2 p-5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[#a3e635]/30 transition-colors">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm gap-1">
                <div>
                  <h4 className="font-bold text-base text-white">
                    Senior Frontend React Developer &amp; App Developer
                  </h4>
                  <p className="text-[#a3e635] font-semibold">
                    AY Creative Technologies • Kano, Nigeria
                  </p>
                </div>
                <span className="text-xs font-semibold text-slate-400 font-mono">
                  07/05/2025 – Present
                </span>
              </div>
              <p className="text-xs text-slate-400 pt-1">
                Building responsive and high-performance web applications using React.js and NEXTJS, collaborating with designers and backend developers to ensure seamless cross-device user experiences, and implementing application software for mobile devices.
              </p>
              <ul className="list-disc list-inside space-y-1.5 text-xs sm:text-sm text-slate-300 pt-1">
                <li>Developed modern web interfaces using React, JavaScript (ES6+), and Vite for optimized runtime performance.</li>
                <li>Implemented mobile applications software for mobile devices based on designs using React Native, Expo, and native device tooling.</li>
                <li>Styled applications with Tailwind CSS, Bootstrap, Material UI, and Ant Design, ensuring responsive and mobile-friendly layouts.</li>
                <li>Deployed applications using Netlify, Vercel, and Render; managed version control with Git and GitHub, and integrated RESTful APIs.</li>
                <li>Translated UI/UX designs into reusable components and ensured cross-browser compatibility and accessibility.</li>
                <li>Maintained clean code practices, conducted pull request code reviews, and collaborated in fast-paced Agile workflows.</li>
              </ul>
            </div>

            {/* 2. Life with Alacrity */}
            <div className="space-y-2 p-5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[#a3e635]/30 transition-colors">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm gap-1">
                <div>
                  <h4 className="font-bold text-base text-white">
                    Frontend Developer &amp; Static Site Architect
                  </h4>
                  <p className="text-[#a3e635] font-semibold">
                    Life with Alacrity • California, United States (Remote)
                  </p>
                  <p className="text-xs text-slate-400 font-mono">
                    Blockchain &amp; Decentralized Identity Architecture •{' '}
                    <a
                      href="https://github.com/lifewithalacrity/www.LifeWithAlacrity.com"
                      target="_blank"
                      rel="noreferrer"
                      className="text-[#a3e635] hover:underline"
                    >
                      github.com/lifewithalacrity
                    </a>{' '}
                    •{' '}
                    <a
                      href="https://www.lifewithalacrity.com"
                      target="_blank"
                      rel="noreferrer"
                      className="text-[#a3e635] hover:underline"
                    >
                      lifewithalacrity.com
                    </a>
                  </p>
                </div>
                <span className="text-xs font-semibold text-slate-400 font-mono">
                  15/09/2023 – Present
                </span>
              </div>
              <ul className="list-disc list-inside space-y-1.5 text-xs sm:text-sm text-slate-300 pt-1">
                <li>Collaborated with Christopher Allen (co-author of TLS/SSL specification and decentralized identity architect) on publication redesign.</li>
                <li>Redesign of website architecture and modern layout for maximum readability.</li>
                <li>Data entry and technical curation of cryptographic essays, Markdown archives, and decentralized identity specifications.</li>
                <li>Development of website features and continuous maintenance on GitHub Pages with Jekyll.</li>
                <li>Diagnosed and resolved hosting and deployment errors from the GitHub repository.</li>
              </ul>
            </div>

            {/* 3. Sport Tech West */}
            <div className="space-y-2 p-5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[#a3e635]/30 transition-colors">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm gap-1">
                <div>
                  <h4 className="font-bold text-base text-white">
                    Web Developer &amp; Social Media Manager
                  </h4>
                  <p className="text-[#a3e635] font-semibold">
                    Sport Tech West • Las Vegas, United States (Remote)
                  </p>
                  <p className="text-xs text-slate-400 font-mono">
                    Website:{' '}
                    <a
                      href="http://sportstechwest.com"
                      target="_blank"
                      rel="noreferrer"
                      className="text-[#a3e635] hover:underline"
                    >
                      sportstechwest.com
                    </a>{' '}
                    • Repo:{' '}
                    <a
                      href="https://github.com/rashadwest/Sportstechwest"
                      target="_blank"
                      rel="noreferrer"
                      className="text-[#a3e635] hover:underline"
                    >
                      github.com/rashadwest/Sportstechwest
                    </a>
                  </p>
                </div>
                <span className="text-xs font-semibold text-slate-400 font-mono">
                  28/07/2024 – Present
                </span>
              </div>
              <ul className="list-disc list-inside space-y-1.5 text-xs sm:text-sm text-slate-300 pt-1">
                <li>Engineered and launched new interactive features to enhance website functionality and user experience.</li>
                <li>Authored and updated rich digital contents across web properties.</li>
                <li>Managed social media publishing and brand communications across corporate handles.</li>
                <li>Optimized and edited content to comply with strict technical SEO guidelines, increasing search traffic and engagement.</li>
              </ul>
            </div>

            {/* 4. Master Eye Security Services */}
            <div className="space-y-2 p-5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[#a3e635]/30 transition-colors">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm gap-1">
                <div>
                  <h4 className="font-bold text-base text-white">
                    Web Programmer
                  </h4>
                  <p className="text-[#a3e635] font-semibold">
                    Master Eye Security Services Limited • Jos Plateau, Nigeria
                  </p>
                  <p className="text-xs text-slate-400 font-mono">
                    Website:{' '}
                    <a
                      href="https://mastereyeservices.netlify.app"
                      target="_blank"
                      rel="noreferrer"
                      className="text-[#a3e635] hover:underline"
                    >
                      mastereyeservices.netlify.app
                    </a>
                  </p>
                </div>
                <span className="text-xs font-semibold text-slate-400 font-mono">
                  23/01/2023 – Present
                </span>
              </div>
              <ul className="list-disc list-inside space-y-1.5 text-xs sm:text-sm text-slate-300 pt-1">
                <li>Developed and deployed the corporate security website with service catalogs and consultation channels.</li>
                <li>Added interactive engagement modules including real-time comments using the Disqus API.</li>
                <li>Administered social media technical channels across TikTok, Facebook, and Instagram to grow digital outreach.</li>
              </ul>
            </div>

            {/* 5. Coding for kids */}
            <div className="space-y-2 p-5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[#a3e635]/30 transition-colors">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm gap-1">
                <div>
                  <h4 className="font-bold text-base text-white">
                    Coding Instructor
                  </h4>
                  <p className="text-[#a3e635] font-semibold">
                    Coding for kids • Remote, Nigeria
                  </p>
                </div>
                <span className="text-xs font-semibold text-slate-400 font-mono">
                  01/12/2025 – Present
                </span>
              </div>
              <ul className="list-disc list-inside space-y-1.5 text-xs sm:text-sm text-slate-300 pt-1">
                <li>Responsible for tutoring children aged 8–14 in fundamental programming languages including HTML, CSS, and JavaScript.</li>
                <li>Cultivated algorithmic thinking and assisted young learners with designing and building their first interactive web projects.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Volunteering & Community Impact */}
        <section className="space-y-4">
          <h3 className="text-sm font-bold uppercase tracking-wider text-[#a3e635] flex items-center gap-2 border-b border-[#a3e635]/20 pb-1 font-mono">
            <HeartHandshake className="w-4 h-4" />
            Volunteering &amp; Community Impact
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* CodeJika */}
            <div className="p-5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[#a3e635]/30 transition-colors space-y-2">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-bold text-white text-sm">Physical Coding Tutor</h4>
                  <p className="text-[#a3e635] font-medium text-xs">CodeJika • Jos, Nigeria</p>
                </div>
                <span className="text-[11px] text-slate-400 font-mono">21/10/2022 – 21/12/2022</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Specialized in teaching secondary school students the fundamentals of web development. Guided students through building functional websites using Notepad, Notepad++, VS Code, and Sublime Text, introducing HTML, CSS, and JavaScript to empower independent problem-solving.
              </p>
              <div className="pt-2 flex items-center gap-3 text-xs">
                <a
                  href="https://codejika.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-[#a3e635] hover:underline font-mono"
                >
                  <ExternalLink className="w-3 h-3" />
                  codejika.com
                </a>
                <a
                  href="https://drive.google.com/drive/folders/1DVyg7DJg6O1RQCSzzcmjwv1vcSJm2xbz?usp=drive_link"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-slate-400 hover:text-white font-mono"
                >
                  <ExternalLink className="w-3 h-3" />
                  Proof Folders
                </a>
              </div>
            </div>

            {/* Kitron Green Initiatives */}
            <div className="p-5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[#a3e635]/30 transition-colors space-y-2">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-bold text-white text-sm">Tech Support Specialist &amp; Web Developer</h4>
                  <p className="text-[#a3e635] font-medium text-xs">Kitron Green Initiatives • Nigeria</p>
                </div>
                <span className="text-[11px] text-slate-400 font-mono">15/04/2023 – Present</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Combined passion for technology with commitment to environmental sustainability. Designed and maintained responsive, user-friendly websites with clean, efficient code, and diagnosed and resolved technical IT infrastructure issues to empower team operations.
              </p>
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
            <span className="text-xs text-[#a3e635] font-mono">Verified Credentials</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
            {/* 1. B.Eng ATBU */}
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#a3e635]/40 transition-colors flex flex-col justify-between space-y-2">
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-white">
                    B.Eng in Electrical Electronics Engineering
                  </h4>
                  <span className="text-[11px] font-mono text-[#a3e635]">ATBU</span>
                </div>
                <p className="text-[#a3e635] font-medium">
                  Abubakar Tafawa Balewa University (ATBU), Bauchi
                </p>
                <p className="text-slate-400 text-xs">
                  Fields: Electricity &amp; energy, Electronics &amp; automation
                </p>
                <p className="text-slate-400 text-xs">
                  Final Grade: <strong className="text-white">Second Class Upper Division</strong> • 19/11/2017 – 28/10/2024
                </p>
              </div>
              <div className="pt-2 flex items-center gap-3">
                <a
                  href="/documents/bachelors-degree.jpg"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#a3e635] hover:underline"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  View Original Certificate
                </a>
                <a
                  href="https://atbu.edu.ng/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-400 hover:text-white text-xs font-mono"
                >
                  atbu.edu.ng
                </a>
              </div>
            </div>

            {/* 2. National Diploma */}
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#a3e635]/40 transition-colors flex flex-col justify-between space-y-2">
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-white">
                    National Diploma in Electrical Electronics Engineering Technology
                  </h4>
                  <span className="text-[11px] font-mono text-[#a3e635]">ND</span>
                </div>
                <p className="text-[#a3e635] font-medium">
                  Gwallameji, Bauchi, Nigeria
                </p>
                <p className="text-slate-400 text-xs">
                  Foundational engineering curriculum in circuit design, electromechanics, telemetry, and instrumentation.
                </p>
                <p className="text-slate-400 text-xs font-mono">
                  19/10/2014 – 29/06/2017
                </p>
              </div>
            </div>

            {/* 3. Introduction to Front-End Development (Meta) */}
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#a3e635]/40 transition-colors flex flex-col justify-between space-y-2">
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-white">
                    Introduction to Front-End Development
                  </h4>
                  <span className="text-[11px] font-mono text-[#a3e635]">Meta</span>
                </div>
                <p className="text-[#a3e635] font-medium">
                  Meta (Coursera)
                </p>
                <p className="text-slate-400 text-xs">
                  Modern web foundations, UI development, responsive web architecture, and DOM manipulation.
                </p>
                <p className="text-slate-400 text-[11px] font-mono">
                  Period: 23/07/2023 – 23/08/2023 • ID: PYVLS7GBFAA7
                </p>
              </div>
              <div className="pt-2">
                <a
                  href="https://www.coursera.org/account/accomplishments/verify/PYVLS7GBFAA7"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#a3e635] hover:underline"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  Verify Meta Credential
                </a>
              </div>
            </div>

            {/* 4. Version Control (Meta) */}
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#a3e635]/40 transition-colors flex flex-col justify-between space-y-2">
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-white">
                    Version Control
                  </h4>
                  <span className="text-[11px] font-mono text-[#a3e635]">Meta</span>
                </div>
                <p className="text-[#a3e635] font-medium">
                  Meta (Coursera)
                </p>
                <p className="text-slate-400 text-xs">
                  Git CLI workflows, GitHub branching strategies, remote repository management, pull requests, and CI/CD pipelines.
                </p>
                <p className="text-slate-400 text-[11px] font-mono">
                  Period: 01/08/2023 – 13/08/2023 • ID: RW4ZSAVBC4T6
                </p>
              </div>
              <div className="pt-2">
                <a
                  href="https://www.coursera.org/account/accomplishments/verify/RW4ZSAVBC4T6"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#a3e635] hover:underline"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  Verify Meta Credential
                </a>
              </div>
            </div>

            {/* 5. Developing Interpersonal Skills (IBM) */}
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
                  Active listening, technical diplomacy, team leadership, stakeholder communications, and agile collaboration.
                </p>
                <p className="text-slate-400 text-[11px] font-mono">
                  Period: 10/07/2023 – 24/07/2023 • ID: MGSZC6NC7V7P
                </p>
              </div>
              <div className="pt-2">
                <a
                  href="https://coursera.org/verify/MGSZC6NC7V7P"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#a3e635] hover:underline"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  Verify IBM Credential
                </a>
              </div>
            </div>

            {/* 6. Frontend Engineer (Meta) */}
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#a3e635]/40 transition-colors flex flex-col justify-between space-y-2">
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-white">
                    Frontend Engineer
                  </h4>
                  <span className="text-[11px] font-mono text-[#a3e635]">Meta</span>
                </div>
                <p className="text-[#a3e635] font-medium">
                  Meta (Coursera)
                </p>
                <p className="text-slate-400 text-xs">
                  Advanced React, component architecture, hooks, state management, testing, and responsive UI optimization.
                </p>
                <p className="text-slate-400 text-[11px] font-mono">
                  Period: 23/07/2023 – Current
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

            {/* 7. Satellite Installation */}
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#a3e635]/40 transition-colors flex flex-col justify-between space-y-2">
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-white">
                    Satellite Installation
                  </h4>
                  <span className="text-[11px] font-mono text-[#a3e635]">Space Tech</span>
                </div>
                <p className="text-[#a3e635] font-medium">
                  Home of Space and Renewable Technology • Jos, Nigeria
                </p>
                <p className="text-slate-400 text-xs">
                  Practical installation, alignment, and signal optimization of satellite communication receivers and renewable power units.
                </p>
                <p className="text-slate-400 text-[11px] font-mono">
                  Period: 15/08/2015 – 31/08/2016
                </p>
              </div>
            </div>

            {/* 8. NSE Graduate Member */}
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
          </div>
        </section>

        {/* Engineering Capstone Project */}
        <section className="space-y-3">
          <h3 className="text-sm font-bold uppercase tracking-wider text-[#a3e635] flex items-center gap-2 border-b border-[#a3e635]/20 pb-1 font-mono">
            <Cpu className="w-4 h-4" />
            Engineering Projects &amp; Research
          </h3>
          <div className="p-5 rounded-xl bg-white/[0.03] border border-white/10 space-y-3 text-xs sm:text-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <h4 className="font-bold text-base text-white">
                Design and Construction of Solar Float Lamp for Engineering Complex Block C
              </h4>
              <span className="text-xs font-mono text-[#a3e635]">
                25/05/2024 – 10/10/2024
              </span>
            </div>
            <p className="leading-relaxed text-slate-300">
              This project aimed to design, construct, and test an automatic solar-powered flood lamp system for Block C, Abubakar Tafawa Balewa University (ATBU), Bauchi, with the primary objective of providing efficient and sustainable lighting.
            </p>
            <p className="leading-relaxed text-slate-300">
              A comprehensive methodology was adopted, involving thorough site lighting calculations (area coverage, brightness levels, operational hours, lumen and energy requirements). The system utilized a <strong className="text-white">215W solar panel array</strong>, a <strong className="text-white">60Ah battery</strong>, and a microcontroller-controlled automatic lighting mechanism switching LED lights on/off based on ambient lux conditions.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3 rounded-lg bg-white/5 border border-white/5">
                <span className="text-[11px] text-slate-400 uppercase font-mono">Total Lumen Output</span>
                <p className="text-base font-extrabold text-[#a3e635]">6,232.2 lux</p>
              </div>
              <div className="p-3 rounded-lg bg-white/5 border border-white/5">
                <span className="text-[11px] text-slate-400 uppercase font-mono">Energy Efficiency</span>
                <p className="text-base font-extrabold text-white">22%</p>
              </div>
              <div className="p-3 rounded-lg bg-white/5 border border-white/5">
                <span className="text-[11px] text-slate-400 uppercase font-mono">Energy Reduction</span>
                <p className="text-base font-extrabold text-[#a3e635]">75% vs Traditional</p>
              </div>
            </div>
            <p className="text-xs text-slate-400 pt-1 leading-relaxed">
              Extensive testing confirmed efficient energy capture, storage, and lighting performance. Notably, the system reduced energy consumption by 75% compared to traditional floodlights, demonstrating the feasibility and effectiveness of solar-powered lighting solutions for public and institutional spaces.
            </p>
          </div>
        </section>

        {/* Technical Skills Matrix */}
        <section className="space-y-4">
          <h3 className="text-sm font-bold uppercase tracking-wider text-[#a3e635] flex items-center gap-2 border-b border-[#a3e635]/20 pb-1 font-mono">
            <Code2 className="w-4 h-4" />
            Skills &amp; Technical Capabilities
          </h3>

          <div className="space-y-3 text-xs sm:text-sm">
            <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
              <span className="text-[#a3e635] font-bold uppercase tracking-wider text-xs font-mono">
                Full-Stack &amp; Web Development:
              </span>
              <p className="text-slate-300">
                React.js, Next.js, Express.js, FastAPI, Node.js, JavaScript (ES6+), TypeScript, Vite, PHP, SQL, Java Servlets and MySQL backend.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
              <span className="text-[#a3e635] font-bold uppercase tracking-wider text-xs font-mono">
                Mobile Applications:
              </span>
              <p className="text-slate-300">
                React Native, Expo, Android application development, cross-platform mobile architecture, push notifications, and device hardware integration.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
              <span className="text-[#a3e635] font-bold uppercase tracking-wider text-xs font-mono">
                Headless &amp; Static Site Generators:
              </span>
              <p className="text-slate-300">
                Gatsby, Nuxt, Jekyll, 11ty, Liquid templating, Markdown workflows, GitHub Pages deployment.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
              <span className="text-[#a3e635] font-bold uppercase tracking-wider text-xs font-mono">
                UI &amp; Styling Frameworks:
              </span>
              <p className="text-slate-300">
                Tailwind CSS, Bootstrap, Material UI, Ant Design, CSS3, HTML5, Responsive layouts, and Accessibility (ADA).
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
              <span className="text-[#a3e635] font-bold uppercase tracking-wider text-xs font-mono">
                APIs, Testing &amp; Cloud Deployment:
              </span>
              <p className="text-slate-300">
                Parse &amp; RESTful APIs integration, JSON parsing, WebSockets, Git &amp; GitHub, Netlify, Vercel, Render. Familiar with Unit, e2e, Integration, Coverage, and Functional testing.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
              <span className="text-[#a3e635] font-bold uppercase tracking-wider text-xs font-mono">
                Productivity, Collaboration &amp; Virtual Assistance:
              </span>
              <p className="text-slate-300">
                Microsoft Office package (Word, Excel, PowerPoint, Access), Google Meet, Video Conferencing (Zoom, Teams, Skype, Webex - Advanced), Virtual Assistance, and Agile teamwork.
              </p>
            </div>
          </div>
        </section>

        {/* Language Skills */}
        <section className="space-y-3">
          <h3 className="text-sm font-bold uppercase tracking-wider text-[#a3e635] flex items-center gap-2 border-b border-[#a3e635]/20 pb-1 font-mono">
            <Languages className="w-4 h-4" />
            Language Skills &amp; Proficiencies
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm">
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-1.5">
              <div className="flex items-center justify-between">
                <strong className="text-white">English</strong>
                <span className="text-[11px] font-mono text-[#a3e635]">Mother Tongue</span>
              </div>
              <p className="text-xs text-slate-400">
                Proficient User (C2) across listening, reading, writing, and spoken interaction.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-1.5">
              <div className="flex items-center justify-between">
                <strong className="text-white">Hausa</strong>
                <span className="text-[11px] font-mono text-[#a3e635]">Independent / Proficient</span>
              </div>
              <p className="text-xs text-slate-400">
                Listening: C1 • Spoken Interaction: B2 • Reading: B1 • Writing: B1 • Spoken Production: B1
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-1.5">
              <div className="flex items-center justify-between">
                <strong className="text-white">French</strong>
                <span className="text-[11px] font-mono text-[#a3e635]">Basic User</span>
              </div>
              <p className="text-xs text-slate-400">
                Listening: A2 • Reading: A2 • Spoken Interaction: A2 • Spoken Production: B1 • Writing: A1
              </p>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
}
