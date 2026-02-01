import { Metadata } from 'next';

interface PageMetadataOptions {
  title: string;
  description: string;
  path?: string;
}

const SITE_NAME = 'Marcos · Arquitecto';
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://marcos-portfolio.com';

/**
 * Genera metadata estandarizada para páginas del sitio
 * @param options - Opciones de título, descripción y path
 * @returns Objeto Metadata de Next.js
 */
export function generatePageMetadata({ title, description, path }: PageMetadataOptions): Metadata {
  const fullTitle = `${title} | ${SITE_NAME}`;
  const url = path ? `${SITE_URL}${path}` : SITE_URL;

  return {
    title: fullTitle,
    description,
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_NAME,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
    },
  };
}

/**
 * Metadata para proyectos de paisajismo
 */
export const landscapeMetadata = generatePageMetadata({
  title: 'Proyectos Paisajísticos',
  description: 'Galería de proyectos de paisajismo y diseño de espacios naturales contemporáneos',
  path: '/projects/landscape',
});

/**
 * Metadata para archivo fotográfico
 */
export const photographyMetadata = generatePageMetadata({
  title: 'Archivo Fotográfico',
  description: 'Documentación visual de proyectos completados, espacios naturales y detalles arquitectónicos',
  path: '/projects/photography',
});

/**
 * Metadata para acuarelas
 */
export const watercolorsMetadata = generatePageMetadata({
  title: 'Acuarelas Arquitectónicas',
  description: 'Galería de acuarelas: interpretación artística de proyectos y conceptos arquitectónicos',
  path: '/projects/watercolors',
});
