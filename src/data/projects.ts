export interface Project {
  id: string;
  title: string;
  slug: string;
  tagline: string;
  category: 'Mobile Apps' | 'Full-Stack & Web Apps' | 'Civic & Public Tech' | 'Jekyll & CMS';
  description: string;
  role: string;
  features: string[];
  technologies: string[];
  liveUrl?: string;
  repoUrl?: string;
  image: string;
  workflowId?: 'audio-to-note' | 'sm-data';
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: 'audio-to-note',
    title: 'Audio to Note - AI Lecture Recorder',
    slug: 'audio-to-note',
    tagline: 'AI-driven speech-to-text, real-time summarization & 8-language translation app',
    category: 'Mobile Apps',
    description: 'An intelligent Android mobile application engineered for students, researchers, and professionals. Features real-time audio waveform capture, instant speech-to-text using Whisper Large models, contextual lecture summarization powered by Google Gemini 2.5 Flash Analytics, interactive quiz generation, and translation across 8 languages including French, Spanish, German, Chinese, Arabic, Hausa, Igbo, and Yoruba. Complete with secure 4-digit PIN authentication and PDF export.',
    role: 'Lead Mobile & AI Developer',
    features: [
      'Gemini 2.5 Flash Analytics for instant lecture note extraction',
      'Whisper Large speech recognition with high-accuracy transcription',
      'Real-time audio waveform recording & live speaker sync playback',
      'Multi-language translation engine (8 supported languages)',
      'Secure PIN-protected notes repository with PDF/Text export'
    ],
    technologies: ['Android', 'React Native', 'Gemini 2.5 Flash', 'Whisper Large', 'Node.js', 'Audio Streaming', 'Security PIN Auth'],
    liveUrl: 'https://github.com/elishaadamu/audio-to-note',
    repoUrl: 'https://github.com/elishaadamu/audio-to-note',
    image: '/audio-to-note/step-5-processed.jpeg',
    workflowId: 'audio-to-note',
    featured: true,
  },
  {
    id: 'sm-data',
    title: 'SM DATA - VTU & Fintech Platform',
    slug: 'sm-data',
    tagline: 'High-speed automated virtual top-up, telecom data bundling & digital payments',
    category: 'Mobile Apps',
    description: 'A commercial telecommunications VTU platform and Android mobile app serving thousands of users across Nigeria. Delivers sub-5-second automated top-ups for MTN, Airtel, Glo, and 9mobile, dynamic wallet funding via dedicated virtual accounts, WAEC/NECO examination tokens, utility bill payments, instant order receipt sharing, and 24/7 direct WhatsApp and phone support integration.',
    role: 'Full-Stack & Mobile Developer',
    features: [
      'Instant sub-5-second VTU automated dispatch engine',
      'Dedicated virtual account wallet funding with balance tracking',
      'Multi-network airtime & corporate/SME data bundle purchase',
      'WAEC & NECO exam PIN generation and verification',
      'Automated transaction receipts and 24/7 WhatsApp customer helpdesk'
    ],
    technologies: ['React Native / Android', 'Next.js', 'Tailwind CSS', 'Fintech APIs', 'Virtual Accounts', 'Automated Webhooks'],
    liveUrl: 'https://smdata.com.ng/',
    repoUrl: 'https://github.com/elishaadamu/sm-data-mobile-app',
    image: '/sm-data/step-1-banner.jpeg',
    workflowId: 'sm-data',
    featured: true,
  },
  {
    id: 'life-with-alacrity',
    title: 'Life With Alacrity',
    slug: 'life-with-alacrity',
    tagline: 'Decentralized identity, cryptographic architecture & web publishing platform',
    category: 'Jekyll & CMS',
    description: 'The flagship web publication of Christopher Allen (co-author of the SSL/TLS 3.0 specification and pioneer of decentralized identity architectures). Revamped the website architecture, migrating complex articles into high-performance static pages with clean responsive typography, GitHub Pages CI/CD workflow deployment, and accessibility compliance.',
    role: 'Frontend Developer & Jekyll Specialist',
    features: [
      'Streamlined Jekyll static site generator architecture',
      'High-readability typographical system tailored for deep tech essays',
      'Automated GitHub Actions CI/CD deployment pipelines',
      'Rich metadata, RSS syndication, and SEO indexation'
    ],
    technologies: ['Jekyll', 'Liquid', 'HTML5/SASS', 'GitHub Pages', 'CI/CD Actions', 'Decentralized Identity Standards'],
    liveUrl: 'https://www.lifewithalacrity.com/',
    repoUrl: 'https://github.com/lifewithalacrity/www.LifeWithAlacrity.com',
    image: '/projects/life-with-alacrity.png',
    featured: true,
  },
  {
    id: 'creator-forge',
    title: 'Creator Forge SaaS Launchpad',
    slug: 'creator-forge',
    tagline: 'Modern creator workspace for rapid product launching and asset management',
    category: 'Full-Stack & Web Apps',
    description: 'A SaaS platform frontend built with Next.js and modern React patterns. Delivers an interactive onboarding experience, sleek dark-mode user interface, creator toolkits, state management, and responsive dashboards tailored for modern digital creators.',
    role: 'Frontend React Engineer',
    features: [
      'Interactive creator onboarding and campaign launching flow',
      'Ultra-fast client state management and dynamic form handling',
      'Responsive dark-theme UI with modern micro-animations',
      'Modular component library built for scalability'
    ],
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'REST API Integration', 'Vercel'],
    liveUrl: 'https://creator-forge-frontend.vercel.app/launch',
    repoUrl: 'https://github.com/elishaadamu/creator-forge-frontend',
    image: '/projects/creator-forge.png',
    featured: true,
  },
  {
    id: 'cpdc-perf-tracker',
    title: 'CPDC Performance Tracker',
    slug: 'cpdc-perf-tracker',
    tagline: 'Data visualization and KPI tracking system for operational governance',
    category: 'Civic & Public Tech',
    description: 'An enterprise performance monitoring portal designed to visualize institutional metrics, target KPIs, and project milestones through interactive data charts and filtering modules.',
    role: 'Frontend Engineer',
    features: [
      'Dynamic KPI scorecards and trend indicators',
      'Interactive data charts and responsive report filtering',
      'Accessible data tables with search and sorting capabilities',
      'Optimized lightweight asset delivery for rapid page loads'
    ],
    technologies: ['React', 'JavaScript (ES6+)', 'Tailwind CSS', 'Chart.js / D3', 'Netlify'],
    liveUrl: 'https://cpdcperftracker.netlify.app/',
    repoUrl: 'https://github.com/elishaadamu/cpdc_perf_tracker',
    image: '/projects/cpdc-perf-tracker.png',
    featured: true,
  },
  {
    id: 'full-mpo-website',
    title: 'Broward Metropolitan Planning Organization Portal',
    slug: 'full-mpo-website',
    tagline: 'Comprehensive urban transportation planning & civic infrastructure portal',
    category: 'Civic & Public Tech',
    description: 'A full-featured regional metropolitan transportation portal providing public access to transportation improvement programs (TIP), long-range mobility plans, interactive planning maps, and civic hearing schedules.',
    role: 'Frontend & UI Developer',
    features: [
      'Interactive transportation project explorer and document archives',
      'Public meeting calendar and civic agenda broadcasts',
      'Multi-breakpoint responsive layouts accessible across all devices',
      'Clean accessibility standards meeting ADA guidelines'
    ],
    technologies: ['React', 'HTML5 / CSS3', 'JavaScript', 'Map Integrations', 'Netlify'],
    liveUrl: 'https://full-mpo-website.netlify.app/',
    repoUrl: 'https://github.com/elishaadamu/broward-mpo-v2',
    image: '/projects/full-mpo-website.png',
  },
  {
    id: 'tcampo-public-involvement',
    title: 'TCAMPO Public Involvement Portal',
    slug: 'tcampo-public-involvement',
    tagline: 'Civic participation & public feedback platform for transportation policy',
    category: 'Civic & Public Tech',
    description: 'A community engagement web application developed for the Tri-County Area Metropolitan Planning Organization. Empowers regional citizens to review public notices, submit feedback on regional development, and inspect environmental impact reports.',
    role: 'Frontend Web Developer',
    features: [
      'Interactive citizen comment submission & survey collection',
      'Document library with downloadable policy briefs',
      'Responsive design optimized for low-bandwidth mobile devices',
      'Streamlined navigation with clear accessibility milestones'
    ],
    technologies: ['React', 'JavaScript', 'CSS3 / SASS', 'Netlify', 'Form Handlers'],
    liveUrl: 'https://tcampo-public-involvement.netlify.app/',
    repoUrl: 'https://github.com/elishaadamu/tcamp-area',
    image: '/projects/tcampo-public-involvement.png',
  },
  {
    id: 'tcampo-invoice-app',
    title: 'TCAMPO Invoicing & Tax Computation App',
    slug: 'tcampo-invoice-app',
    tagline: 'Automated municipal contract billing, expense auditing & tax calculations',
    category: 'Full-Stack & Web Apps',
    description: 'A financial management web tool engineered to calculate contract fees, tax withholding, reimbursable expenses, and automated invoice line items with one-click print-ready generation.',
    role: 'Frontend Engineer',
    features: [
      'Real-time multi-tier tax and rate computation engine',
      'Dynamic itemized billing rows with instant validation',
      'Print-ready professional invoice rendering with company branding',
      'Client-side storage for drafting and quick re-use'
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Print CSS', 'Netlify'],
    liveUrl: 'https://tcampo-invoice-app.netlify.app/',
    repoUrl: 'https://github.com/elishaadamu/tcampo-invoice-app',
    image: '/projects/tcampo-invoice-app.png',
  },
  {
    id: 'rooted-rising',
    title: 'Rooted Rising Initiative',
    slug: 'rooted-rising',
    tagline: 'Community empowerment & sustainable development non-profit hub',
    category: 'Full-Stack & Web Apps',
    description: 'The official digital home of Rooted Rising Initiative, an NGO committed to youth education, community resilience, and social impact in Nigeria. Built with modern web standards, featuring donation pathways, program showcases, and storytelling.',
    role: 'Lead Web Developer',
    features: [
      'Engaging visual storytelling highlighting community impact',
      'Donation integration and volunteer sign-up channels',
      'High-performance asset optimization for smooth mobile loads',
      'Modern glassmorphism cards and custom typography'
    ],
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'Vercel', 'SEO Optimization'],
    liveUrl: 'https://rootedrising.org.ng/',
    repoUrl: 'https://github.com/elishaadamu/rootedrising.org.ng',
    image: '/projects/rooted-rising.png',
  },
  {
    id: 'ireact-initiative',
    title: 'IREACT Initiative',
    slug: 'ireact-initiative',
    tagline: 'Youth climate innovation, civic tech & social empowerment network',
    category: 'Full-Stack & Web Apps',
    description: 'A dynamic platform championing environmental advocacy, sustainable development goals (SDGs), and youth leadership programs through educational toolkits and interactive campaign registrations.',
    role: 'Web Developer',
    features: [
      'Program showcase with interactive project milestones',
      'Civic action resource downloads and media center',
      'Responsive design engineered for rapid mobile accessibility',
      'Integrated newsletter subscription and contact routing'
    ],
    technologies: ['React', 'Tailwind CSS', 'Vercel', 'JavaScript (ES6+)'],
    liveUrl: 'https://ireactinitiative.org/',
    repoUrl: 'https://github.com/elishaadamu/ireact',
    image: '/projects/ireact-initiative.png',
  },
  {
    id: 'master-eye-services',
    title: 'Master Eye Security Services Limited',
    slug: 'master-eye-services',
    tagline: 'Corporate security systems, surveillance & protective operations',
    category: 'Full-Stack & Web Apps',
    description: 'Corporate website for Master Eye Security Services Limited. Features an interactive service portfolio, client consultation booking, real-time community engagement with Disqus integration, and social media syndication.',
    role: 'Web Programmer & Technical Lead',
    features: [
      'Corporate service catalog (Guards, Surveillance, Escort, CCTV)',
      'Integrated interactive discussion forum using Disqus API',
      'Direct WhatsApp inquiry floating dispatch',
      'SEO-optimized architecture generating customer leads'
    ],
    technologies: ['React / HTML5', 'CSS3', 'JavaScript', 'Disqus API', 'Netlify'],
    liveUrl: 'https://mastereyeservices.netlify.app/',
    repoUrl: 'https://github.com/elishaadamu/backend-mastereysecurity',
    image: '/projects/master-eye-services.png',
  },
  {
    id: 'marcus-engineering',
    title: 'Marcus Engineering',
    slug: 'marcus-engineering',
    tagline: 'Industrial design, hardware prototyping & electrical engineering showcase',
    category: 'Full-Stack & Web Apps',
    description: 'An engineering consultancy showcase presenting complex technical capabilities, embedded electronics, and industrial manufacturing solutions with a clean, high-precision layout.',
    role: 'Frontend Developer',
    features: [
      'Technical capability matrices and case study portfolios',
      'Interactive client inquiry intake form',
      'Sleek industrial visual aesthetic with technical diagrams',
      'Fast static deployment via GitHub Pages'
    ],
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'GitHub Pages', 'Responsive Design'],
    liveUrl: 'https://elishaadamu.github.io/marcusengineering/',
    repoUrl: 'https://github.com/elishaadamu/marcusengineering',
    image: '/projects/marcus-engineering.png',
  },
  {
    id: 'zendel-services',
    title: 'Zendel Services',
    slug: 'zendel-services',
    tagline: 'Enterprise business consulting, logistics & operational solutions',
    category: 'Full-Stack & Web Apps',
    description: 'A modern corporate landing page presenting multi-disciplinary consulting, facilities management, and corporate enterprise offerings with crisp animation and responsive layouts.',
    role: 'Frontend Developer',
    features: [
      'High-impact hero section with smooth scroll triggers',
      'Interactive service breakdown and client testimonial tabs',
      'Fully responsive UI styled with modern CSS utilities',
      'Optimized bundle size for sub-second first contentful paint'
    ],
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'Vercel'],
    liveUrl: 'https://zendelservices.vercel.app/',
    repoUrl: 'https://github.com/elishaadamu/vtu-website',
    image: '/projects/zendel-services.png',
  },
  {
    id: 'cv-my-job',
    title: 'CV My Job Online',
    slug: 'cv-my-job',
    tagline: 'Professional resume generation, ATS scoring & job readiness portal',
    category: 'Full-Stack & Web Apps',
    description: 'A web platform designed to assist job seekers with creating ATS-compliant resumes, career profiling, and direct applications.',
    role: 'Frontend Engineer',
    features: [
      'Dynamic resume sections preview with instant formatting',
      'Clean step-by-step onboarding for job candidates',
      'Mobile-first responsive interface for job seekers',
      'Optimized fast-loading web architecture'
    ],
    technologies: ['React', 'JavaScript', 'Tailwind CSS', 'REST APIs'],
    liveUrl: 'https://cvmyjob.online/',
    repoUrl: 'https://github.com/elishaadamu/elisha-portfolio',
    image: '/projects/cv-my-job.png',
  },
  {
    id: 'delivery-mobile-app',
    title: 'On-Demand Logistics & Delivery Mobile App',
    slug: 'delivery-mobile-app',
    tagline: 'Real-time courier dispatch, route optimization & package tracking',
    category: 'Mobile Apps',
    description: 'A cross-platform mobile delivery application built for couriers and recipients. Features live GPS map tracking, order status updates, courier assignment, push notifications, and automated delivery receipts.',
    role: 'Mobile App Developer',
    features: [
      'Real-time GPS parcel and courier tracking on dynamic maps',
      'Instant push notifications on parcel transit states',
      'Courier assignment and pickup confirmation workflows',
      'Clean mobile UI designed for high outdoor readability'
    ],
    technologies: ['React Native', 'Android', 'REST APIs', 'Geolocation / Maps', 'Push Notifications'],
    liveUrl: 'https://delivery-app-tan-seven.vercel.app',
    repoUrl: 'https://github.com/elishaadamu/delivery-mobile-app',
    image: '/projects/creator-forge.png',
  }
];
