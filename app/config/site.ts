/**
 * Configuración centralizada del portfolio.
 * Modifica estos valores para personalizar el sitio.
 *
 * Fuente única de verdad para: datos de contacto, redes sociales,
 * información del arquitecto, features y SEO.
 *
 * NOTA: Los colores están definidos en tailwind.config.ts y globals.css.
 * Las categorías de proyectos están en app/config/projectsContent.ts.
 * Los ítems de navegación están en app/config/navigationContent.ts.
 */

export const siteConfig = {
  siteName: 'Marcos Villén Rubio',
  siteDescription: 'Portfolio de arquitectura del paisaje · Urbanismo · Biofilia · Regeneración Ecológica',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://arquitectura-portfolio.com',

  contact: {
    email: 'marcos.villen@hotmail.com',
    phone: '+34 695 531 983',
    location: 'Barcelona, España',
  },

  socialLinks: {
    instagram: 'https://instagram.com/marcosvillen',
    instagramLabel: 'Instagram',
    linkedin: 'https://www.linkedin.com/in/marcosvillen/',
    linkedinLabel: 'LinkedIn',
  },

  architect: {
    name: 'Marcos Villén Rubio',
    title: 'Arquitectura del Paisaje',
    subtitle: 'Urbanismo · Biofilia · Regeneración Ecológica',
    bio: 'Especializado en diseño del paisaje y espacios naturales contemporáneos.',
    favicon: '/images/marcos-villen-logo.png',
  },

  /** Secciones y funcionalidades habilitadas en el sitio */
  features: {
    blog: false,
    shop: false,
    newsletter: false,
    testimonials: true,
    caseStudies: true,
    downloadCatalog: false,
  },

  seo: {
    keywords: 'arquitectura, paisaje, diseño, minimalismo, portfolio',
    author: 'Marcos Villén Rubio',
    ogImage: '/og-image.jpg',
  },

  /**
   * ID de Google Analytics. Dejar vacío ('') para deshabilitar.
   * Reemplazar con el ID real cuando se integre Analytics.
   */
  analytics: {
    googleAnalyticsId: '',
    enableCookieConsent: true,
  },

  /** Locale BCP 47 usado en Open Graph y html[lang] */
  locale: 'es_ES',

  /** Textos del pie de página */
  footer: {
    navigationHeading: 'Navegación',
    contactHeading: 'Contacto',
    rightsReserved: 'Todos los derechos reservados.',
  },

  /** Créditos del desarrollador */
  credits: {
    developedBy: 'Desarrollado por',
    developerName: 'Lorena Criado',
    developerUrl: 'https://github.com/crimanlor',
  },
};

export type SiteConfig = typeof siteConfig;
