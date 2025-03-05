/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true, // Ensure this is present if you're using the App Router
  },
};

module.exports = nextConfig;