/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.huglemon.com",   // ✅ correct wildcard
      },
      {
        protocol: "https",
        hostname: "ik.imagekit.io",   // ✅ ImageKit
      },
    ],
  },
};

export default nextConfig;
