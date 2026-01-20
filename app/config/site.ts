/**
 * Configuración centralizada del Portfolio
 * Modifica estos valores para personalizar el sitio
 */

export const siteConfig = {
  // Información básica
  siteName: 'Estudio Arquitectura',
  siteDescription: 'Portfolio de arquitecto especializado en diseño naturalista y paisajismo contemporáneo',
  siteUrl: 'https://arquitectura-portfolio.com',
  
  // Información del contacto
  contact: {
    email: 'contact@example.com',
    phone: '+34 000 000 000',
    location: 'Barcelona, España',
  },

  // Redes sociales
  socialLinks: {
    instagram: 'https://instagram.com/usuario',
    linkedin: 'https://linkedin.com/in/usuario',
    twitter: 'https://twitter.com/usuario',
    behance: 'https://behance.net/usuario',
  },

  // Información del arquitecto
  architect: {
    name: 'Juan Pérez',
    title: 'Arquitecto & Diseñador de Paisajes',
    bio: 'Especializado en diseño minimalista y arquitectura naturalista.',
    yearsExperience: 10,
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
      name: 'Acuarelas Arquitectónicas',
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
