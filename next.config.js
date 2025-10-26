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
    // keep default deviceSizes unless you know what you're doing (750 must be present)
    // deviceSizes default includes 750, so usually no change is needed.
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/**',   // IMPORTANT
      },
    ],
    domains: ['res.cloudinary.com'], // for older Next versions
    formats: ['image/avif', 'image/webp'],
  },
};

module.exports = nextConfig;
