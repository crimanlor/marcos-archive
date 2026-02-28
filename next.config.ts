import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // Añade aquí los dominios externos de imágenes cuando sean necesarios.
      // Ejemplo: { protocol: 'https', hostname: 'res.cloudinary.com' }
    ],
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1 año en segundos
  },
  reactCompiler: false,
};

export default nextConfig;
