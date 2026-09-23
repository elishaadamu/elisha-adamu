export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  quote: string;
  rating?: number;
  highlightBadge?: string;
  email?: string;
  website?: string;
  isUpworkVerified?: boolean;
}

export const testimonials: Testimonial[] = [
  {
    id: 'christopher-allen',
    name: 'Christopher Allen',
    role: 'Principal Architect & Founder',
    company: 'Life with Alacrity / Blockchain & Decentralized Identity',
    avatar: 'https://www.lifewithalacrity.com/assets/images/1516163297842.webp',
    quote: 'Elisha demonstrated remarkable technical precision and dedication in revamping LifeWithAlacrity.com. His command of static site architecture, Jekyll, and attention to typographic clarity brought tremendous value to our decentralized identity publication. A diligent and reliable engineer.',
    highlightBadge: 'Blockchain & Identity Architecture',
    email: 'ChristopherA@LifeWithAlacrity.com',
    website: 'https://www.lifewithalacrity.com',
  },
  {
    id: 'rashad-west',
    name: 'Rashad West',
    role: 'Founder & CEO',
    company: 'Sports Tech West (Techstars Alumni)',
    avatar: 'https://sportstechwest.com/assets/images/display/Techstars_DC.webp',
    quote: 'Working with Elisha has been exceptional for Sports Tech West. He spearheaded our frontend features, enhanced our web performance, and implemented critical SEO and social content workflows that elevated our platform. Fast, professional, and solutions-oriented.',
    highlightBadge: 'Techstars Alumni Enterprise',
    email: 'rashadlwest@gmail.com',
    website: 'https://sportstechwest.com',
  },
  {
    id: 'zakari-mumuni',
    name: 'Zakari Mumuni',
    role: 'Senior Software Engineer',
    company: 'Tech Collaborator & Full-Stack Lead',
    avatar: 'https://zak-mumuni-portfolio.netlify.app/assets/zak-mumuni-CV_U3obK.jpg',
    quote: 'Elisha combines deep electrical engineering fundamentals with modern frontend mastery. Whether collaborating on complex APIs, state systems, or crafting responsive UI architectures, his methodical problem-solving and rapid turnaround are inspiring.',
    highlightBadge: 'Engineering Peer Review',
    email: 'zmumunida@gmail.com',
    website: 'https://zak-mumuni-portfolio.netlify.app',
  },
  {
    id: 'upwork-portfolio-client',
    name: 'Verified Upwork Client',
    role: 'Tech Consultant & Author',
    company: 'Chirpy & Jekyll Portfolio Project',
    avatar: 'https://ui-avatars.com/api/?name=TC&background=0284c7&color=fff&rounded=true&bold=true',
    quote: 'Elisha helped me build my project portfolio. He guided me through the process, which allowed me to learn more about Jekyll along the way. He works quickly, is highly collaborative, and delivers excellent production quality.',
    rating: 5.0,
    highlightBadge: 'Upwork 5.0 Star Client',
    isUpworkVerified: true,
  },
  {
    id: 'upwork-book-promo-client',
    name: 'Verified Upwork Client',
    role: 'Publisher & Product Owner',
    company: 'Book Promotion Platform',
    avatar: 'https://ui-avatars.com/api/?name=PO&background=0ea5e9&color=fff&rounded=true&bold=true',
    quote: 'Great job - website looks good and is working well! Handled every requirement promptly and accommodated feedback seamlessly.',
    rating: 5.0,
    highlightBadge: 'Upwork 5.0 Star Client',
    isUpworkVerified: true,
  },
  {
    id: 'upwork-revamp-client',
    name: 'Verified Upwork Client',
    role: 'Brand Consultant',
    company: 'Personal Brand Platform Revamp',
    avatar: 'https://ui-avatars.com/api/?name=BC&background=0369a1&color=fff&rounded=true&bold=true',
    quote: 'Jekyll Expert to Revamp Personal Brand Website. Very professional, responsive, and skilled in modern responsive layouts.',
    rating: 5.0,
    highlightBadge: 'Upwork 5.0 Star Client',
    isUpworkVerified: true,
  }
];

export const upworkStats = {
  jobSuccessScore: '100%',
  badge: 'Top Rated',
  completedJobs: '20+',
  totalHours: '190+ hrs',
  totalEarnings: '$3K+',
  responseRate: '0-4 hours',
  verifications: ['Identity Verified', 'Payment Verified', 'Phone Verified'],
  insights: [
    { label: 'Clear Communicator', count: 2 },
    { label: 'Collaborative', count: 2 },
    { label: 'Solution Oriented', count: 2 },
    { label: 'Committed to Quality', count: 1 }
  ]
};
