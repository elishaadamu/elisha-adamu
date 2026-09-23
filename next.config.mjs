/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'www.lifewithalacrity.com',
      },
      {
        protocol: 'https',
        hostname: 'zak-mumuni-portfolio.netlify.app',
      },
      {
        protocol: 'https',
        hostname: 'sportstechwest.com',
      },
      {
        protocol: 'https',
        hostname: 'ui-avatars.com',
      },
    ],
  },
};

export default nextConfig;
