/**
 * Configuración centralizada del Portfolio
 * Modifica estos valores para personalizar el sitio
 */

export const siteConfig = {
  // Información básica
  siteName: 'Marcos Villén Rubio',
  siteDescription: 'Portfolio de arquitectura del paisaje · Urbanismo · Biofilia · Regeneración Ecológica',
  siteUrl: 'https://arquitectura-portfolio.com',
  
  // Información del contacto
  contact: {
    email: 'marcos.villen@hotmail.com',
    phone: '+34 695 531 983',
    location: 'Barcelona, España',
  },

  // Redes sociales
  socialLinks: {
    instagram: 'https://instagram.com/marcosvillen',
    linkedin: 'https://www.linkedin.com/in/marcosvillen/',
    twitter: '',
    behance: '',
  },

  // Información del arquitecto
  architect: {
    name: 'Marcos Villén Rubio',
    title: 'Arquitectura del Paisaje',
    subtitle: 'Urbanismo · Biofilia · Regeneración Ecológica',
    bio: 'Especializado en diseño del paisaje y espacios naturales contemporáneos.',
    yearsExperience: 0,
    favicon: '/images/marcos-villen-logo.png',
  },

  // Colores personalizados
  colors: {
    primary: '#000000',
    secondary: '#1a1a1a',
    accent: '#0d3d3d',
    background: '#ffffff',
    text: '#000000',
  },

  // Tipografía
  typography: {
    fontFamily: {
      sans: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif',
      serif: '"Playfair Display", serif',
    },
  },

  // Categorías de proyectos
  projectCategories: [
    {
      id: 'landscape',
      name: 'Proyectos Paisajísticos',
      slug: 'landscape',
      description: 'Diseño del paisaje y espacios naturales contemporáneos',
      icon: '🌿',
    },
    {
      id: 'watercolors',
      name: 'Sketching',
      slug: 'watercolors',
      description: 'Interpretación artística de espacios y conceptos',
      icon: '🎨',
    },
    {
      id: 'photography',
      name: 'Archivo Fotográfico',
      slug: 'photography',
      description: 'Documentación visual de proyectos y espacios',
      icon: '📸',
    },
  ],

  // Secciones habilitadas
  features: {
    blog: false,
    shop: false,
    newsletter: false,
    testimonials: true,
    caseStudies: true,
    downloadCatalog: false,
  },

  // SEO
  seo: {
    keywords: 'arquitectura, paisaje, diseño, minimalismo, portfolio',
    author: 'Juan Pérez',
    ogImage: '/og-image.jpg',
  },

  // Analytics
  analytics: {
    googleAnalyticsId: 'GA_XXXXXXXXX',
    enableCookieConsent: true,
  },

  // Navegación
  navigation: [
    { label: 'Inicio', href: '/' },
    { label: 'Sobre mí', href: '/about' },
    { label: 'Proyectos', href: '/projects' },
  ],

  // Footers links
  footerLinks: [
    { label: 'Privacidad', href: '/privacy' },
    { label: 'Términos', href: '/terms' },
    { label: 'Sitemap', href: '/sitemap.xml' },
  ],
};

// Tipos para TypeScript
export type SiteConfig = typeof siteConfig;
