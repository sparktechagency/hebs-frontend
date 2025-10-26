// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   experimental: {
    
//   }, 
//   images: {
//     remotePatterns: [
//       {
//         protocol: "http",
//         hostname: "**",
//       },
//       // {
//       //   protocol: "http",  // Use HTTP for local IPs or servers
//       //   hostname: "10.0.60.55",  // Allow the local server IP
//       // },
//     ],
//     domains: ['res.cloudinary.com'],
//   },
// };
   

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {

    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],

    domains: ['res.cloudinary.com'],
    remotePatterns: [
      { protocol: 'https', hostname: 'res.cloudinary.com', pathname: '/**' },
      { protocol: 'http',  hostname: 'res.cloudinary.com', pathname: '/**' }, 
    ],
    formats: ['image/avif', 'image/webp'],
  },
};

module.exports = nextConfig;

