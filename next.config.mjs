/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.huglemon.com",  // allows all subdomains
      },
    ],
    domains: ['ik.imagekit.io'],
  },
};




export default nextConfig;
