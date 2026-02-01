import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Image optimization */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  /* React compiler */
  reactCompiler: false,
  /* Turbopack configuration */
  experimental: {
    turbo: {
      root: __dirname,
    },
  },
};

export default nextConfig;
