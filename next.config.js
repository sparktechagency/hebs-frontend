/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    
  }, 
  images: {
    remotePatterns: [
      // {
      //   protocol: "https",
      //   hostname: "**",
      // },
      {
        protocol: "http",  // Use HTTP for local IPs or servers
        hostname: "10.0.60.55",  // Allow the local server IP
      },
    ],
  },
};
   

module.exports = nextConfig;