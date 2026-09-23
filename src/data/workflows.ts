export interface WorkflowStep {
  step: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  highlightTag: string;
}

export interface AppWorkflow {
  id: string;
  appName: string;
  tagline: string;
  category: string;
  repoUrl: string;
  liveUrl?: string;
  steps: WorkflowStep[];
}

export const appWorkflows: Record<string, AppWorkflow> = {
  'audio-to-note': {
    id: 'audio-to-note',
    appName: 'Audio to Note - AI Lecture Intelligence',
    tagline: 'Android app combining Whisper Large speech-to-text, Gemini 2.5 Flash summaries, and 8-language translations.',
    category: 'Mobile AI & Education',
    repoUrl: 'https://github.com/elishaadamu/audio-to-note',
    steps: [
      {
        step: 1,
        title: 'PIN Authentication Gate',
        subtitle: 'Confidentiality & Local Security',
        description: 'Biometric and 4-digit security PIN lock screen guarding local encrypted SQLite database storage against unauthorized access.',
        image: '/audio-to-note/step-1-auth.jpeg',
        highlightTag: 'Security & Auth',
      },
      {
        step: 2,
        title: 'Ready to Record Home',
        subtitle: 'Dual Input & Gemini 2.5 Flash',
        description: 'Clean recording launchpad featuring Google Gemini 2.5 Flash analytics status, direct mic capture, or local audio file upload.',
        image: '/audio-to-note/step-2-ready.jpeg',
        highlightTag: 'Gemini 2.5 Flash',
      },
      {
        step: 3,
        title: 'Live Audio Waveform',
        subtitle: 'Real-Time Amplitude Sampling',
        description: 'Live RMS audio waveform rendering during lecture capture with precision recording timer, pause, and stop controls.',
        image: '/audio-to-note/step-3-recording.jpeg',
        highlightTag: 'Real-time Waveform',
      },
      {
        step: 4,
        title: 'Recording Review & Dispatch',
        subtitle: 'Instant Audio Playback',
        description: 'Captured audio review player giving users the option to replay, discard, or trigger the AI note processing pipeline.',
        image: '/audio-to-note/step-4-saved.jpeg',
        highlightTag: 'Audio Review',
      },
      {
        step: 5,
        title: 'AI Note Processing & Sync',
        subtitle: 'Contextual Notes & Speaker Sync',
        description: 'Processed note view showing word count (1,023 words), duration, Gemini 2.5 model badge, and auto-scrolling speaker playback sync.',
        image: '/audio-to-note/step-5-processed.jpeg',
        highlightTag: 'Auto-Sync Player',
      },
      {
        step: 6,
        title: 'Productivity & Export Suite',
        subtitle: 'PDF, Text & Quiz Generation',
        description: 'Comprehensive utility suite allowing users to export notes to PDF, copy raw text, save processed audio, and take auto-generated quizzes.',
        image: '/audio-to-note/step-6-actions.jpeg',
        highlightTag: 'Export Tools',
      },
      {
        step: 7,
        title: 'Multi-Language Translation',
        subtitle: '8 Languages Localization',
        description: 'Instant translation engine converting synthesized lecture notes into French, Spanish, German, Chinese, Arabic, Hausa, Igbo, and Yoruba.',
        image: '/audio-to-note/step-7-translation.jpeg',
        highlightTag: '8 Languages AI',
      },
      {
        step: 8,
        title: 'Settings & Whisper Model',
        subtitle: 'Model Customization & Profile',
        description: 'Application settings allowing selection of the Whisper Large speech model, audio language preferences, and security PIN updates.',
        image: '/audio-to-note/step-8-settings.jpeg',
        highlightTag: 'Whisper Large Engine',
      },
    ],
  },
  'sm-data': {
    id: 'sm-data',
    appName: 'SM DATA - VTU & Telecom Solutions',
    tagline: 'Android & Web fintech platform delivering sub-5-second automated telecom top-ups and bill payments across Nigeria.',
    category: 'Fintech & Telecom Automation',
    repoUrl: 'https://github.com/elishaadamu/sm-data-mobile-app',
    liveUrl: 'https://smdata.com.ng/',
    steps: [
      {
        step: 1,
        title: 'Platform Brand Overview',
        subtitle: 'Automated VTU & Telecom Hub',
        description: 'Commercial overview showcasing instant automated top-ups, dedicated virtual accounts, and 24/7 reliability for Nigerian telecoms.',
        image: '/sm-data/step-1-banner.jpeg',
        highlightTag: 'Platform Overview',
      },
      {
        step: 2,
        title: 'Smart VTU & Wallet Dashboard',
        subtitle: 'Virtual Accounts & Live Balance',
        description: 'Personalized user dashboard displaying real-time wallet balances, automated virtual account creation, and quick-action service modules.',
        image: '/sm-data/step-2-dashboard.jpeg',
        highlightTag: 'Virtual Wallet',
      },
      {
        step: 3,
        title: 'Comprehensive Service Catalog',
        subtitle: 'Data, Airtime, Exam PINs & Power',
        description: 'Complete services catalog covering MTN, Airtel, Glo, and 9mobile SME/corporate bundles, WAEC/NECO scratch cards, and utility tokens.',
        image: '/sm-data/step-3-services.jpeg',
        highlightTag: 'Multi-Service Hub',
      },
      {
        step: 4,
        title: 'Instant Network Dispatch',
        subtitle: 'Sub-5-Second VTU Top-Up',
        description: 'Streamlined purchase interface with telco network selection, quick phone number input, and preset denomination buttons.',
        image: '/sm-data/step-4-dispatch.jpeg',
        highlightTag: 'Instant Top-Up',
      },
      {
        step: 5,
        title: '24/7 Dedicated Customer Desk',
        subtitle: 'Direct WhatsApp & Phone Channel',
        description: 'Integrated customer support modal providing direct one-tap WhatsApp chat and phone call access (+234 707 377 5347) for instant assistance.',
        image: '/sm-data/step-5-support.jpeg',
        highlightTag: '24/7 Support Desk',
      },
      {
        step: 6,
        title: 'Digital Order Receipt & Proof',
        subtitle: 'Instant Audit & Share Receipt',
        description: 'Auditable transaction receipt with unique Reference ID (e.g. AIRTIME-1788192700380-752), success confirmation, balance audit, and sharing.',
        image: '/sm-data/step-6-receipt.jpeg',
        highlightTag: 'Audit Receipt',
      },
    ],
  },
};
