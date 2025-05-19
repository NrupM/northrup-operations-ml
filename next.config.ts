/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true, // Required for static export
  },
  // Configure the base path for GitHub Pages
  // This should match your repository name
  basePath: process.env.NODE_ENV === 'production' ? '/northrup-operations-ml' : '',
  // This tells Next.js that the app will be deployed to a sub-path
  assetPrefix: process.env.NODE_ENV === 'production' ? '/northrup-operations-ml/' : '',
  // Generate static HTML files for each page
  output: 'export',
};

module.exports = nextConfig;