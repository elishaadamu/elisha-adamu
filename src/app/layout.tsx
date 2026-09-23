import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://elisha-portfolio-dev.netlify.app'),
  title: {
    default: 'Elisha Adamu Inuwa | Senior Frontend React & Mobile App Developer',
    template: '%s | Elisha Adamu Inuwa',
  },
  description: 'Senior Frontend Engineer (React, Next.js 16, TypeScript), Mobile App Developer (Flutter/Android), and Electrical & Electronics Engineer. Verified Upwork Top Rated with 100% Job Success score and 20+ shipped production applications for startups and global institutions.',
  keywords: [
    'Elisha Adamu Inuwa',
    'Senior Frontend Engineer',
    'React Developer',
    'Next.js 16',
    'TypeScript',
    'Flutter Developer',
    'Android Developer',
    'Electrical Electronics Engineer',
    'Upwork Top Rated',
    'Web Application Architect',
    'UI/UX Engineering',
    'Full-Stack Developer Nigeria',
  ],
  authors: [{ name: 'Elisha Adamu Inuwa', url: 'https://github.com/elishaadamu' }],
  creator: 'Elisha Adamu Inuwa',
  publisher: 'Elisha Adamu Inuwa',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/favicon.png', type: 'image/png' },
    ],
    apple: [{ url: '/favicon.png' }],
  },
  openGraph: {
    title: 'Elisha Adamu Inuwa | Senior Frontend React & Mobile App Developer',
    description: 'Senior Frontend Engineer & Mobile Developer. Upwork Top Rated 100% JSS. Delivering high-performance React, Next.js, and Mobile platforms with engineering precision.',
    url: 'https://elisha-portfolio-dev.netlify.app',
    siteName: 'Elisha Inuwa Portfolio',
    images: [
      {
        url: '/profile/img1-nobg.png',
        width: 1200,
        height: 1200,
        alt: 'Elisha Adamu Inuwa - Senior Frontend Engineer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Elisha Adamu Inuwa | Senior Frontend React & Mobile Developer',
    description: 'Verified Upwork Top Rated 100% JSS. High-performance React, Next.js, and Mobile applications.',
    images: ['/profile/img1-nobg.png'],
    creator: '@elishaadamu',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Elisha Adamu Inuwa',
  jobTitle: 'Senior Frontend Engineer & Mobile App Developer',
  url: 'https://elisha-portfolio-dev.netlify.app',
  sameAs: [
    'https://github.com/elishaadamu',
    'https://www.upwork.com/freelancers/~01f347888f7198ba97',
    'https://www.linkedin.com/in/frontend-developer-elisha-inuwa-75a200422',
  ],
  knowsAbout: [
    'React',
    'Next.js 16',
    'TypeScript',
    'JavaScript',
    'Flutter',
    'Android Development',
    'Tailwind CSS',
    'Electrical & Electronics Engineering',
    'Mobile UI/UX',
    'Performance Optimization',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="dark scroll-smooth">
      <head>
        <meta name="color-scheme" content="dark" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const saved = localStorage.getItem('theme');
                  if (saved === 'light') {
                    document.documentElement.classList.remove('dark');
                  } else {
                    document.documentElement.classList.add('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col relative antialiased selection:bg-[#a3e635]/30 selection:text-[#a3e635]">
        {/* Background Grid Pattern & Radial Glow */}
        <div className="fixed inset-0 pointer-events-none z-[-1] bg-square-grid" />
        <div className="fixed inset-0 pointer-events-none z-[-1] radial-lime-glow" />

        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
