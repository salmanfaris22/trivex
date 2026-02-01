/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "landingpage.huglemon.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "huglemon.com",   // add this
        pathname: "/**",
      },
    ],
  },
};




export default nextConfig;
