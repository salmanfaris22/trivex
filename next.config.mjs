/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.huglemon.com",  // allows all subdomains
      },
    ],
  },
};




export default nextConfig;
