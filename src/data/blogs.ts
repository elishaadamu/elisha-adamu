export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  date: string;
  readTime: string;
  summary: string;
  tags: string[];
  content: string;
  coverImage?: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'building-ai-mobile-apps-gemini-whisper',
    title: 'Building AI-Powered Mobile Applications with Google Gemini 2.5 and Whisper Speech Models',
    date: 'Sep 18, 2026',
    readTime: '7 min read',
    summary: 'A deep architectural breakdown of Audio-to-Note: streaming microphone audio, generating live waveforms, high-accuracy speech-to-text with Whisper Large, contextual lecture summarization with Gemini 2.5 Flash, and multi-language translation.',
    tags: ['Mobile AI', 'Gemini 2.5', 'Whisper Large', 'Android', 'Speech-to-Text'],
    coverImage: '/audio-to-note/step-5-processed.jpeg',
    content: `
### The Vision: Seamless Lecture & Meeting Intelligence

In modern academic and corporate environments, taking manual notes during fast-paced lectures or executive briefings creates cognitive overload. Students and professionals are often torn between listening actively and typing frantically. 

With **Audio-to-Note**, the goal was to build a zero-friction mobile application that records continuous audio, processes speech with high fidelity, produces contextualized summaries, and breaks language barriers.

---

### Architectural Pipeline

The system is constructed with a four-stage pipeline:

1. **Audio Capture & Live Waveform Rendering**:
   - Audio is captured through low-latency hardware audio buffers.
   - An RMS (Root Mean Square) amplitude normalizer feeds values into a canvas-based waveform visualizer in real time, giving users immediate visual confidence that speech is being captured.

2. **Speech-to-Text with Whisper Large**:
   - When the user taps **Save & Process**, the audio payload is ingested by OpenAI's Whisper Large model.
   - Whisper handles accents, background lecture noise, and technical jargon with exceptional word error rates (WER), generating raw timestamps and transcripts.

3. **Contextual Synthesis with Google Gemini 2.5 Flash**:
   - The raw transcript is passed to Google's Gemini 2.5 Flash model with specialized prompt engineering:
     - Extraction of core thesis and key talking points.
     - Structuring into structured Markdown with bulleted action items.
     - Automatic generation of self-assessment quiz questions.

4. **Multi-Language Localization Engine**:
   - To serve diverse classrooms globally and in Africa, the note synthesis can be translated instantly into 8 languages: English, French, Spanish, German, Chinese, Arabic, Hausa, Igbo, and Yoruba.

---

### Security First: PIN Authentication

Notes frequently contain proprietary discussions and private study material. Audio-to-Note enforces a local 4-digit PIN authentication gate before granting access to the encrypted SQLite storage database, ensuring that sensitive recordings remain secure.

---

### Key Takeaways
- Hybrid AI architectures combining dedicated speech models (Whisper) with multi-modal reasoning models (Gemini 2.5 Flash) yield far higher accuracy than single monolithic solutions.
- Mobile client optimization (waveform streaming, local caching) ensures the app remains snappy even on mid-range Android devices.
`
  },
  {
    id: '2',
    slug: 'architecting-instant-vtu-fintech-nigeria',
    title: 'Architecting Instant VTU & Fintech Telecommunications Systems in Nigeria',
    date: 'Aug 28, 2026',
    readTime: '6 min read',
    summary: 'Engineering SM DATA: How to build sub-5-second telecom top-up systems, integrate virtual bank accounts, manage asynchronous webhook failures, and ensure rock-solid reliability for airtime, data bundles, and exam tokens.',
    tags: ['Fintech', 'VTU Systems', 'Next.js', 'API Gateways', 'SM Data'],
    coverImage: '/sm-data/step-1-banner.jpeg',
    content: `
### Emerging Market Fintech Challenges

In the Nigerian telecommunications and digital payments ecosystem, virtual top-up (VTU) platforms must handle extreme volatility in telecom gateway response times while guaranteeing transaction idempotency and instant order fulfillment.

Building **SM DATA** required solving real-world infrastructure constraints:
- Telco network downtimes (MTN, Airtel, Glo, 9mobile)
- Delayed bank credit alerts for wallet funding
- Preventing duplicate airtime or data disbursements on intermittent mobile connections

---

### Core Engineering Strategies

#### 1. Dynamic Virtual Accounts & Real-Time Wallet Funding
Rather than forcing users to manually input debit cards or wait for manual admin confirmations, SM DATA generates dynamic virtual bank accounts linked to each user profile. Incoming payments trigger authenticated webhooks with cryptographic HMAC signatures, instantly crediting the user balance with sub-second latency.

#### 2. Idempotent VTU Dispatch Pipeline
Every purchase request is assigned a unique reference ID (e.g., \`AIRTIME-1788192700380-752\`). If a user double-taps on poor network connectivity, the gateway identifies the existing in-flight transaction and prevents duplicate billing.

#### 3. Graceful Fallbacks & Automated Receipts
When a transaction succeeds, an automated digital receipt is generated on the client with transaction time, previous balance, new balance, network provider, and a one-click **Share Receipt** button for social proof.

#### 4. 24/7 Dedicated Customer Escalation
Automation must be backed by transparent customer support. We integrated direct WhatsApp and phone hotlines (\`+234 707 377 5347\`) directly into the transaction modal, reducing ticket resolution time to under 5 minutes.
`
  },
  {
    id: '3',
    slug: 'optimizing-nextjs-react-core-web-vitals',
    title: 'Optimizing Next.js & React Applications for Core Web Vitals and Modern Browser Performance',
    date: 'Jul 14, 2026',
    readTime: '8 min read',
    summary: 'Practical strategies for eliminating layout shifts (CLS), minimizing interaction to next paint (INP), and mastering server components, code splitting, image prioritization, and modern CSS color-scheme utilities.',
    tags: ['Next.js', 'React', 'Core Web Vitals', 'Performance', 'Web Engineering'],
    coverImage: '/projects/creator-forge.png',
    content: `
### Beyond Just "Making It Work"

In modern web development, shipping a functional UI is only half the battle. Delivering a truly world-class web experience requires optimizing for **Core Web Vitals**: Largest Contentful Paint (LCP), Interaction to Next Paint (INP), and Cumulative Layout Shift (CLS).

---

### 1. Eliminating Theme Flash (FOUC)
When implementing light and dark mode toggles, many developers rely solely on \`useEffect\`, resulting in an unsightly flash of white before switching to dark mode. The modern standard is to execute an inline, synchronous snippet in the document head before browser paint:

\`\`\`html
<meta name="color-scheme" content="light dark">
<script>
  (() => {
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (saved === 'dark' || (!saved && prefersDark)) {
      document.documentElement.classList.add('dark');
    }
  })();
</script>
\`\`\`

---

### 2. Next.js App Router & Server Components
By keeping data fetching on the server, you reduce the client bundle size drastically. Heavy markdown parsers, syntax highlighters, and data mappers should run at build time or on the server, streaming lightweight HTML down to the browser.

---

### 3. Font and Image Strategy
- Use \`next/font\` to load variable fonts with zero layout shift and automatic preloading.
- Always provide explicit \`width\` and \`height\` or \`fill\` with appropriate \`sizes\` attributes to avoid CLS penalties.
`
  },
  {
    id: '4',
    slug: 'why-jekyll-static-architecture-dominates',
    title: 'Why Jekyll and Static Site Architecture Still Dominate Open Source & Decentralized Identity',
    date: 'Jun 02, 2026',
    readTime: '5 min read',
    summary: 'Lessons learned redesigning LifeWithAlacrity.com for Christopher Allen: why static Markdown architecture paired with Git workflows delivers unmatched security, zero-cost scaling, and permanent preservation for foundational cryptographic research.',
    tags: ['Jekyll', 'Static Sites', 'Decentralized Identity', 'GitHub Pages', 'Markdown'],
    coverImage: '/projects/life-with-alacrity.png',
    content: `
### The Power of Boring, Robust Technology

When Christopher Allen—co-author of the SSL/TLS 3.0 specification and decentralized identity pioneer—needed his publication **Life With Alacrity** revamped, the choice of technology was intentional: **Jekyll and GitHub Pages**.

In an era where every website wants a complex headless CMS with recurring subscriptions and database maintenance, Jekyll continues to reign supreme for deep research publications.

---

### Why Static Markdown Wins for Long-Form Thought Leadership:
1. **Immutable History & Git Provenance**: Every revision, footnote, and essay is tracked in version control.
2. **Zero Attack Surface**: With no SQL databases or server-side interpreters to exploit, security vulnerabilities are reduced to virtually zero.
3. **Decentralized Portability**: A folder of Markdown files can be regenerated 20 years from now with any static compiler, outlasting proprietary SaaS tools.
4. **Performance by Default**: Pre-rendered HTML and CSS load in milliseconds over CDNs without caching layers.

Working on LifeWithAlacrity taught me that true software engineering isn't about using the newest framework for every problem—it's about choosing the architecture that guarantees durability, accessibility, and elegance.
`
  },
  {
    id: '5',
    slug: 'engineering-mindset-in-frontend-development',
    title: 'From Electrical & Electronics Engineering to Senior Frontend Development: A Systems Thinking Approach',
    date: 'Apr 20, 2026',
    readTime: '6 min read',
    summary: 'How circuit design, power efficiency, and hardware constraints at Abubakar Tafawa Balewa University shaped my approach to software architecture, state machines, component decoupling, and reliable web applications.',
    tags: ['Engineering', 'Problem Solving', 'Career Journey', 'Architecture'],
    coverImage: '/profile/img2.jpeg',
    content: `
### Bridging Two Worlds

Before writing React components and architecting Next.js applications, I graduated with a Second Class Upper in **Electrical and Electronics Engineering** from Abubakar Tafawa Balewa University (ATBU), Bauchi.

My capstone project involved designing and constructing an **Automatic Solar-Powered Flood Lamp System for Engineering Complex Block C**, utilizing microcontroller automation, solar battery storage, and ambient lux sensors. The project reduced energy consumption by 75% and delivered 6,232.2 lux of clean illumination.

---

### How Hardware Principles Translate to Code:

- **Circuit Decoupling & Component Isolation**: In hardware design, a noisy circuit module will corrupt adjacent signals if not properly filtered. In React, un-isolated component state causes unnecessary re-renders across the entire virtual DOM tree.
- **State Machines**: Hardware flip-flops and microcontrollers operate strictly on deterministic finite state machines. Applying this discipline to frontend UI states (Idle, Loading, Success, Error) eliminates race conditions.
- **Constraints Foster Creativity**: Working within battery capacities and watt ratings teaches you to respect client constraints—whether memory overhead on low-end smartphones or 3G bandwidth limitations.
`
  }
];
