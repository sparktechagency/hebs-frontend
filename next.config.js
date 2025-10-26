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
   

// module.exports = nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
};

module.exports = nextConfig;
