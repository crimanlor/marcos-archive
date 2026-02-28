import { Metadata } from 'next';
import { siteConfig } from '../config/site';

interface PageMetadataOptions {
  title: string;
  description?: string;
  path?: string;
}

/**
 * Genera metadata estandarizada para las páginas del sitio.
 * Usa `siteConfig` como única fuente de verdad para el nombre del sitio y la URL.
 *
 * @param options.title - Título de la página (sin el sufijo del sitio)
 * @param options.description - Descripción de la página. Por defecto usa `siteConfig.siteDescription`.
 * @param options.path - Ruta relativa de la página (e.g. '/projects/landscape')
 */
export function generatePageMetadata({ title, description, path }: PageMetadataOptions): Metadata {
  const siteName = siteConfig.architect.name;
  const siteUrl = siteConfig.siteUrl;
  const fullTitle = `${title} | ${siteName}`;
  const fullDescription = description ?? siteConfig.siteDescription;
  const url = path ? `${siteUrl}${path}` : siteUrl;

  return {
    title: fullTitle,
    description: fullDescription,
    openGraph: {
      title: fullTitle,
      description: fullDescription,
      url,
      siteName,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: fullDescription,
    },
  };
}

/** Metadata pre-construida para proyectos de paisajismo */
export const landscapeMetadata = generatePageMetadata({
  title: 'Proyectos conceptuales',
  description: 'Proyectos conceptuales de paisajismo y espacio público',
  path: '/projects/landscape',
});

/** Metadata pre-construida para el archivo fotográfico */
export const photographyMetadata = generatePageMetadata({
  title: 'Archivo fotográfico',
  description: 'Archivo fotográfico y espacios públicos',
  path: '/projects/photography',
});

/** Metadata pre-construida para sketches */
export const watercolorsMetadata = generatePageMetadata({
  title: 'Sketches',
  description: 'Sketches de arquitectura y paisaje',
  path: '/projects/watercolors',
});
