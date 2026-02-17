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
    // Calidad de imagen por defecto más alta (75 es el default de Next.js)
    // Puedes especificar quality en cada Image component para casos específicos
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  /* React compiler */
  reactCompiler: false,
};

export default nextConfig;
