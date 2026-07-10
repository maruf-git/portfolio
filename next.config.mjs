/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  images: {
    minimumCacheTTL: 31536000, // 1 year cache for optimized images on Vercel Edge
    remotePatterns: [
      { protocol: "https", hostname: "**" },
    ],
  },
};

export default nextConfig;
