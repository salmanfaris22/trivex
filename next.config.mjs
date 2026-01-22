/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
			  protocol: 'https',
        hostname: 'landingpage.huglemon.com',
        pathname: '/**', // ✅ IMPORTANT
			},
		],
	},
};

export default nextConfig;
