// // /** @type {import('next').NextConfig} */
const nextConfig = {
    // experimental: {
    //     allowedDevOrigins: ['http://16.16.183.92:9090'],
    // },
    images: {
        remotePatterns: [
     
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
            },
            {
                protocol: 'https',
                hostname: 'illuminatemuslimminds.com',
            },
        ],
    },
};
 
export default nextConfig;

