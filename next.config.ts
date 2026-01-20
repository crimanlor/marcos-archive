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
};

export default nextConfig;
