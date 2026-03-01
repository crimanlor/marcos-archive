# Guía Completa para Desarrolladores

**Portfolio de Arquitectura y Paisajismo - Next.js 16 (canary) + React 19 + TypeScript 5**

---

## 📋 Índice

1. [Setup Inicial](#-setup-inicial)
2. [Arquitectura del Proyecto](#-arquitectura-del-proyecto)
3. [Estructura de Carpetas](#-estructura-de-carpetas)
4. [Componentes](#-componentes)
5. [Gestión de Datos](#-gestión-de-datos)
6. [Estilos y Personalización](#-estilos-y-personalización)
7. [Optimización de Imágenes](#-optimización-de-imágenes)
8. [Performance](#-performance)
9. [Deploy](#-deploy)
10. [Comandos Útiles](#-comandos-útiles)

---

## 🚀 Setup Inicial

## Requisitos Previos
- Node.js **≥ 20** (el proyecto usa APIs de Node 20+; Node 18 falla en build)
- npm o yarn
- Git

### Instalación

```bash
# Clonar repositorio
git clone <repo-url>
cd marcos-archive

# Instalar dependencias
npm install

# Iniciar desarrollo
npm run dev

# Abrir en navegador
# http://localhost:3000
```

### Scripts Disponibles

```bash
npm run dev          # Servidor desarrollo (puerto 3000)
npm run build        # Build para producción
npm run start        # Servidor producción
npm run lint         # ESLint
npx tsc --noEmit     # TypeScript check (sin emitir archivos)
```

---

## 🏗️ Arquitectura del Proyecto

### Stack Tecnológico

- **Framework:** Next.js 16 canary (App Router)
- **UI:** React 19
- **Lenguaje:** TypeScript 5
- **Estilos:** Tailwind CSS 4
- **Optimización:** Next/Image, Sharp
- **Deploy:** Vercel (recomendado)

### Características Principales

✅ **Server Components por defecto** - Mejor performance  
✅ **App Router** - Sistema de rutas moderno  
✅ **TypeScript estricto** - Type safety completo  
✅ **Optimización de imágenes** - Script automático incluido  
✅ **Responsive design** - Mobile-first  
✅ **SEO optimizado** - Metadata dinámica  

---

## 📁 Estructura de Carpetas

```
marcos-archive/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Layout principal (metadata + locale desde siteConfig)
│   ├── page.tsx                 # Home
│   ├── globals.css              # Estilos globales + Tailwind
│   │
│   ├── about/                   # Página "Sobre mí"
│   │   └── page.tsx
│   │
│   ├── contact/                 # Página de contacto
│   │   └── page.tsx
│   │
│   ├── projects/                # Sección de proyectos
│   │   ├── page.tsx            # Listado de categorías
│   │   ├── landscape/          # Proyectos conceptuales de paisajismo
│   │   │   ├── page.tsx
│   │   │   └── [id]/page.tsx   # Detalle proyecto (SSG con generateStaticParams)
│   │   ├── watercolors/        # Sketches/Acuarelas
│   │   │   └── page.tsx
│   │   ├── photography/        # Archivo fotográfico
│   │   │   ├── page.tsx
│   │   │   └── [id]/page.tsx   # Detalle foto (SSG con generateStaticParams)
│   │   └── references/         # Referencias (libros, obras, artistas)
│   │       └── page.tsx
│   │
│   ├── components/             # Componentes React reutilizables
│   │   ├── Navigation.tsx      # Barra de navegación (client)
│   │   ├── Footer.tsx          # Footer (server)
│   │   ├── HeroSection.tsx     # Hero homepage (server)
│   │   ├── CategoryCard.tsx    # Tarjeta de categoría de proyectos (server)
│   │   ├── ProjectCategoryLayout.tsx  # Layout compartido de categorías (server)
│   │   ├── ProjectsPreview.tsx # Preview de proyectos en Home (server)
│   │   ├── PhotoModal.tsx      # Modal para fotos (client)
│   │   ├── Breadcrumb.tsx      # Breadcrumbs (server)
│   │   └── CallToAction.tsx    # Secciones CTA (server)
│   │
│   ├── config/                 # ⚙️ TODO el contenido visible (fuente única de verdad)
│   │   ├── site.ts             # Info del sitio, contacto, redes, locale, footer, créditos
│   │   ├── navigationContent.ts  # Menú, botón contacto, accesibilidad
│   │   ├── homeContent.ts      # Contenido Hero / portada
│   │   ├── aboutContent.ts     # Contenido página "Sobre mí"
│   │   ├── contactContent.ts   # Contenido página Contacto + labels métodos
│   │   ├── projectsContent.ts  # Categorías de proyectos
│   │   ├── projectNavigationContent.ts  # Textos de nav entre proyectos, sidebar, modal, fallbacks
│   │   └── referencesContent.ts  # Contenido sección Referencias
│   │
│   ├── lib/                    # Datos de proyectos y utilidades
│   │   ├── landscape.ts        # Proyectos conceptuales (array tipado)
│   │   ├── photos.ts           # Archivo fotográfico (array tipado)
│   │   ├── watercolors.ts      # Sketches — sistema de generación automática
│   │   ├── imageConfig.ts      # Constantes de tamaños y clases de imágenes
│   │   ├── metadata.ts         # Helper para SEO (generateMetadata)
│   │   └── types.ts            # TypeScript types compartidos
│   │
│   └── hooks/                  # Custom React Hooks
│       ├── useGalleryModal.ts  # Hook para modal de galería
│       └── useScrollReveal.ts  # Hook para animaciones de scroll
│
├── public/                     # Archivos estáticos
│   └── images/                 # Todas las imágenes
│       ├── originales/         # Backups de imágenes originales (pre-optimización)
│       ├── photo-*.jpg         # Fotografías del archivo
│       ├── watercolor-*.jpg    # Acuarelas/Sketches
│       ├── image-*.jpg         # Imágenes de páginas
│       └── plant-*.jpg         # Referencias de plantas/texturas
│
├── docs/                       # Documentación
│   ├── DEVELOPER_GUIDE.md      # Este archivo
│   └── GUIA_CAMBIOS_CONTENIDO.md  # Para no-devs
│
├── optimize-images.sh          # Script de optimización de imágenes
├── next.config.ts              # Config de Next.js
├── tailwind.config.ts          # Config de Tailwind
├── tsconfig.json               # Config de TypeScript (alias @/* → ./)
└── package.json                # Dependencies
```

---

## Componentes

### Navigation

Barra de navegación responsive con menú móvil. Client Component (`'use client'`) porque usa estado local para el toggle.

```tsx
// Ya incluido en app/layout.tsx — no necesita props
// Lee items de navigationContent y nombre del arquitecto de siteConfig
import Navigation from '@/components/Navigation';
```

### CategoryCard

Tarjeta de categoría de proyectos. Server Component.

```tsx
import CategoryCard from '@/components/CategoryCard';

<CategoryCard category={category} index={index} />

// category viene de projectsContent.categories
// index se usa para la animación de entrada escalonada
```

### ProjectCategoryLayout

Layout compartido para todas las páginas de categoría. Incluye back-link, h1 y barra de navegación inferior entre categorías. Server Component.

```tsx
import ProjectCategoryLayout from '@/components/ProjectCategoryLayout';

<ProjectCategoryLayout
  title={category.title}
  navLeft={{ href: '/projects', label: 'Todos los proyectos', sublabel: 'Volver a' }}
  navRight={{ href: '/projects/watercolors', label: 'Sketches', sublabel: 'Siguiente categoría' }}
  navSectionBg="gray"   // 'gray' | 'white'
>
  {/* contenido de la categoría */}
</ProjectCategoryLayout>
```

### PhotoModal

Modal para visualizar fotos en grande con navegación por teclado. Client Component.

```tsx
import PhotoModal from '@/components/PhotoModal';
import { useGalleryModal } from '@/hooks/useGalleryModal';

const { selectedItem, isOpen, openModal, closeModal, handleNext, handlePrevious, hasNext, hasPrevious } = useGalleryModal(items);

<PhotoModal
  isOpen={isOpen}
  onClose={closeModal}
  imageSrc={selectedItem ? getImagePath(selectedItem.filename) : ''}
  imageAlt={selectedItem?.title || ''}
  onNext={handleNext}
  onPrevious={handlePrevious}
  hasNext={hasNext}
  hasPrevious={hasPrevious}
/>
```

### Breadcrumb

Migas de pan para navegación. Server Component.

```tsx
import Breadcrumb from '@/components/Breadcrumb';

<Breadcrumb
  items={[
    { label: 'Proyectos', href: '/projects' },
    { label: 'Paisajismo', href: '/projects/landscape' },
    { label: 'Proyecto 1' }
  ]}
/>
```

---

## Gestión de Datos

### Arquitectura: contenido 100% en `config/`

Ningún string visible al usuario está hardcodeado en componentes o páginas. Todo vive en `app/config/`.

```
app/config/
├── site.ts                     # Info del sitio, contacto, redes, locale, footer, créditos
├── navigationContent.ts        # Menú, botón contacto, accesibilidad (aria-labels)
├── homeContent.ts              # Contenido Hero / portada
├── aboutContent.ts             # Contenido página "Sobre mí"
├── contactContent.ts           # Contenido página Contacto + labels métodos
├── projectsContent.ts          # Categorías de proyectos (title, slug, imagen, count)
├── projectNavigationContent.ts # Textos nav entre proyectos, sidebar, modal, fallbacks de alt
└── referencesContent.ts        # Contenido sección Referencias
```

---

### site.ts

**Archivo:** `app/config/site.ts`

Fuente única de verdad para información del sitio. Usado en Navigation, Footer, layout, contact y metadata.

```typescript
export const siteConfig = {
  siteName: 'Marcos Villén Rubio',
  siteDescription: '...',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://arquitectura-portfolio.com',

  contact: {
    email: 'marcos.villen@hotmail.com',
    phone: '+34 695 531 983',
    location: 'Barcelona, España',
  },

  socialLinks: {
    instagram: 'https://instagram.com/marcosvillen',
    instagramLabel: 'Instagram',       // texto del enlace + aria-label
    linkedin: 'https://www.linkedin.com/in/marcosvillen/',
    linkedinLabel: 'LinkedIn',
  },

  architect: {
    name: 'Marcos Villén Rubio',
    title: 'Arquitectura del Paisaje',
    subtitle: 'Urbanismo · Biofilia · Regeneración Ecológica',
    bio: '...',
    favicon: '/images/marcos-villen-logo.png',
  },

  features: { blog: false, shop: false, /* ... */ },

  seo: {
    keywords: 'arquitectura, paisaje, ...',
    author: 'Marcos Villén Rubio',
    ogImage: '/og-image.jpg',
  },

  analytics: {
    googleAnalyticsId: '',   // vacío = deshabilitado
    enableCookieConsent: true,
  },

  locale: 'es_ES',           // usado en <html lang> y Open Graph

  footer: {
    navigationHeading: 'Navegación',
    contactHeading: 'Contacto',
    rightsReserved: 'Todos los derechos reservados.',
  },

  credits: {
    developedBy: 'Desarrollado por',
    developerName: 'Lorena Criado',
    developerUrl: 'https://github.com/crimanlor',
  },
};
```

---

### navigationContent.ts

**Archivo:** `app/config/navigationContent.ts`

```typescript
export const navigationContent = {
  items: [
    { label: 'Inicio', href: '/' },
    { label: 'Sobre mí', href: '/about' },
    { label: 'Proyectos', href: '/projects' },
  ],
  contactButton: { label: 'Contacto', href: '/contact' },
  mobile: { backButton: 'Volver', menuLabel: 'Menú' },
  accessibility: {
    toggleMenu: 'Toggle menu',   // aria-label del botón hamburguesa
  },
};
```

---

### contactContent.ts

**Archivo:** `app/config/contactContent.ts`

```typescript
export const contactContent = {
  pageTitle: 'Información de contacto',
  methods: {
    email: 'Email',
    phone: 'Teléfono',
    linkedin: 'LinkedIn',
    location: 'Ubicación',
  },
  cvSection: {
    title: 'Currículum Vitae',
    description: '...',
    buttonText: 'Descargar CV (PDF)',
    driveLink: 'https://drive.google.com/...',
  },
  ctaSection: {
    title: '¿Quieres ver más de mi trabajo?',
    description: '...',
    buttonText: 'Ver proyectos',
    buttonLink: '/projects',
  },
};
```

---

### projectNavigationContent.ts

**Archivo:** `app/config/projectNavigationContent.ts`

Textos de toda la navegación interna de proyectos: botones de volver, prev/next, sidebar de detalles, aria-labels del modal y textos fallback para alt de imágenes sin caption.

```typescript
export const projectNavigationContent = {
  backButton: {
    text: 'Volver a proyectos',
    textAll: 'Todos los proyectos',
  },
  navigation: {
    previous: 'Anterior',
    next: 'Siguiente',
    backTo: 'Volver a',
    projectOf: 'Proyecto',
  },
  projectDetails: {
    location: 'Ubicación', year: 'Año', area: 'Superficie',
    distance: 'Distancia', category: 'Categoría',
  },
  sections: {
    features: 'Características principales',
    aboutProject: 'Sobre este proyecto',
    gallery: 'Galería del proyecto',
    plantsAndTextures: 'Plantas y texturas',
  },
  cta: { viewFullProject: 'Ver proyecto completo' },
  categoryNav: {
    backTo: 'Volver a',
    allProjects: 'Todos los proyectos',
    nextCategory: 'Siguiente categoría',
  },
  sidebar: { projectDetails: 'Detalles del proyecto' },
  modal: { close: 'Cerrar', previous: 'Anterior', next: 'Siguiente' },
  fallbacks: {
    detailImage: (n: number) => `Detalle ${n}`,
    featureImage: 'Imagen destacada',
    planImage: 'Plano del proyecto',
    additionalInfo: 'Aquí puedes añadir más información...',
  },
};
```

---

### projectsContent.ts

**Archivo:** `app/config/projectsContent.ts`

```typescript
export const projectsContent = {
  pageTitle: 'Proyectos',
  categories: [
    {
      id: 'landscape',
      title: 'Proyectos conceptuales',
      description: '...',
      slug: 'landscape',
      count: landscapeProjects.length,  // se actualiza automáticamente
      image: '/images/image-projects-1.jpg',
    },
    // watercolors, photography, references...
  ],
};
```

---

### landscape.ts — Proyectos de Paisajismo

**Archivo:** `app/lib/landscape.ts`

```typescript
export const landscapeProjects: LandscapeProject[] = [
  {
    id: 1,
    filename: 'image-landscape-project-01.jpg',
    title: 'Nombre del Proyecto',
    description: 'Descripción breve',
    location: 'Ciudad, País',
    year: '2024',
    area: '168 m²',
    category: 'Proyecto conceptual',
    features: ['Característica 1', 'Característica 2'],
    additionalInfo: ['Párrafo 1...', 'Párrafo 2...'],
    detailImages: [
      { filename: 'image-x.jpg', caption: 'Descripción' },
    ],
    featureImage: { filename: 'image-y.jpg', caption: 'Imagen destacada' },
    planImage: { filename: 'image-z.jpg', caption: 'Plano' },
    plantsAndTextures: [
      { filename: 'plant-salvia-rosmarinus.jpg', name: 'SALVIA ROSMARINUS' },
    ],
  },
];
```

Las páginas `landscape/page.tsx` y `landscape/[id]/page.tsx` usan `generateStaticParams()` → SSG completo.

---

### photos.ts — Archivo Fotográfico

**Archivo:** `app/lib/photos.ts`

```typescript
export const photos: Photo[] = [
  {
    id: 1,
    filename: 'photo-001.jpg',
    title: 'Título',
    description: 'Descripción',
    location: 'Ubicación',
    year: '2024',
    category: 'Paisajismo',
    additionalInfo: 'Texto opcional de detalle',
  },
];
```

La página `photography/[id]/page.tsx` usa navegación circular y `generateStaticParams()`.

---

### watercolors.ts — Sketches (automático)

**Archivo:** `app/lib/watercolors.ts`

```typescript
// Solo cambia este número al añadir o eliminar sketches
const TOTAL_WATERCOLORS = 11;

export const watercolors = Array.from({ length: TOTAL_WATERCOLORS }, (_, i) => ({
  id: i + 1,
  filename: `watercolor-${String(i + 1).padStart(3, '0')}.jpg`,
  title: `Sketch ${i + 1}`,
  // ...
}));
```

---

### Types

**Archivo:** `app/lib/types.ts`

```typescript
export interface Photo {
  id: number;
  filename: string;
  title: string;
  description: string;
  location: string;
  year: string;
  category: string;
  additionalInfo?: string;
}
// LandscapeProject, Watercolor, etc.
```

---

## Estilos y Personalización

### Tailwind CSS 4

El proyecto usa Tailwind CSS 4. La configuración del contenido escaneado está en `tailwind.config.ts`:

```typescript
export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  // Tailwind 4 usa CSS nativo para temas; evitar plugins de v3
};
```

### CSS Global

**Archivo:** `app/globals.css`

```css
@import "tailwindcss";

/* Utilidades personalizadas */
@layer utilities {
  .container-portfolio {
    @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
  }
}
```

### Clases Tailwind Comunes

```
/* Responsive */
md:text-xl       ≥768px
lg:text-2xl      ≥1024px

/* Colores del proyecto */
bg-gray-950      Negro casi puro (principal)
text-gray-600    Gris para texto secundario
border-gray-200  Divisores
```

---

## 🖼️ Optimización de Imágenes

### Script Automático

El proyecto incluye un script bash para optimizar imágenes automáticamente.

**Archivo:** `optimize-images.sh`

```bash
# Ejecutar optimización
./optimize-images.sh
```

**Qué hace:**
- ✅ Redimensiona a máximo 2000px
- ✅ Comprime con calidad 80%
- ✅ Guarda originales en `public/images/originales/`
- ✅ Reduce peso 80-95%

### Next.js Image Component

Siempre usa el componente `Image` de Next.js:

```tsx
import Image from 'next/image';

<Image
  src="/images/photo-001.jpg"
  alt="Descripción"
  width={1200}
  height={800}
  className="..."
  priority={false}  // true solo para above-the-fold
/>
```

### Convenciones de Nombres

```
photo-001.jpg a photo-040.jpg    # Archivo fotográfico
watercolor-001.jpg a 011.jpg     # Sketching/acuarelas
image-hero.jpg                   # Hero homepage
image-quien-soy-1.jpg            # Foto perfil
image-landscape-project-*.jpg    # Proyectos paisajismo
plant-*.jpg                      # Referencias plantas
texture-*.jpg                    # Referencias texturas
```

**Reglas:**
- Minúsculas siempre
- Sin espacios (usar guiones)
- Sin acentos
- Formato JPG preferido
- Optimizar antes de subir

---

## ⚡ Performance

### Checklist de Optimización

#### Imágenes
- [x] Usar `next/image` siempre
- [x] Optimizar con script incluido
- [x] Definir `width` y `height`
- [ ] Implementar lazy loading
- [ ] Usar WebP/AVIF en producción

#### JavaScript
- [x] Code splitting automático (Next.js)
- [x] Server Components por defecto
- [ ] Dynamic imports para componentes pesados
- [ ] Usar `use client` solo cuando necesario

#### CSS
- [x] Tailwind con PurgeCSS automático
- [x] CSS-in-JS mínimo
- [ ] Critical CSS inline

#### SEO
- [x] Metadata dinámica por página
- [x] Sitemap automático
- [x] robots.txt configurado
- [ ] Open Graph tags
- [ ] Schema.org markup

### Métricas Core Web Vitals

**Objetivos:**
```
LCP (Largest Contentful Paint):  < 2.5s
FID (First Input Delay):         < 100ms
CLS (Cumulative Layout Shift):   < 0.1
```

### Lighthouse Score Target

```
Performance:  > 90
Accessibility: > 95
Best Practices: > 95
SEO:          > 95
```

---

## 🚀 Deploy

### Vercel (Recomendado)

**Método 1: GitHub Integration**
1. Conecta tu repositorio en vercel.com
2. Vercel detecta Next.js automáticamente
3. Deploy automático en cada push

**Método 2: CLI**
```bash
npm i -g vercel
vercel login
vercel
```

### Variables de Entorno

Si necesitas variables de entorno:

```bash
# .env.local (no subir a Git)
NEXT_PUBLIC_SITE_URL=https://tusitio.com
```

Configurar en Vercel Dashboard:
Settings → Environment Variables

### Build Manual

```bash
# Build
npm run build

# Test producción local
npm run start
```

### Configuración Next.js

**Archivo:** `next.config.ts`

```typescript
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'tu-cdn.com',
      },
    ],
  },
};
```

---

## 🛠️ Comandos Útiles

### Desarrollo

```bash
npm run dev              # Desarrollo puerto 3000
npm run dev -- -p 3001   # Puerto personalizado
npm run build            # Build producción
npm run start            # Servidor producción
npm run lint             # ESLint
npm run lint:fix         # Fix automático
```

### Imágenes

```bash
./optimize-images.sh     # Optimizar todas las nuevas imágenes
```

### Git

```bash
git status               # Ver cambios
git add .                # Añadir todos
git commit -m "mensaje"  # Commit
git push                 # Subir a GitHub
```

### Troubleshooting

```bash
# Limpiar caché Next.js
rm -rf .next

# Limpiar node_modules
rm -rf node_modules
npm install

# Limpiar todo
rm -rf .next node_modules
npm install
npm run dev
```

### Verificar Performance

```bash
# Build de producción
npm run build

# Analizar bundle
npm run build -- --analyze  # Si tienes @next/bundle-analyzer
```

---

## 🐛 Debugging

### Console Logs

```tsx
// Solo en desarrollo
if (process.env.NODE_ENV === 'development') {
  console.log('Debug:', data);
}
```

### React DevTools

Instala la extensión de navegador:
- Chrome: React Developer Tools
- Firefox: React Developer Tools

### Next.js Debugging

VSCode `launch.json`:

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Next.js: debug server-side",
      "type": "node-terminal",
      "request": "launch",
      "command": "npm run dev"
    }
  ]
}
```

---

## 📝 Buenas Prácticas

### Estructura de Componentes

```tsx
// 1. Imports
import React from 'react';
import Image from 'next/image';

// 2. Types
interface MyComponentProps {
  title: string;
}

// 3. Component
export default function MyComponent({ title }: MyComponentProps) {
  return <div>{title}</div>;
}
```

### Nomenclatura

```typescript
// Componentes: PascalCase
Button.tsx, Navigation.tsx

// Archivos: camelCase
useGalleryModal.ts, data.ts

// Constants: UPPER_SNAKE_CASE
const MAX_ITEMS = 10;

// Funciones: camelCase
function handleClick() {}
```

### TypeScript

```typescript
// Siempre tipado explícito
const projects: Project[] = [];

// Evitar 'any'
const data: unknown = fetchData();

// Usar interfaces para props
interface ButtonProps {
  text: string;
}
```

---

## 🔄 Actualizar Dependencias

```bash
# Ver outdated
npm outdated

# Update specific
npm update next react react-dom

# Update all (cuidado)
npm update

# Update major versions
npx npm-check-updates -u
npm install
```

---

## 📚 Recursos

- **Next.js Docs:** https://nextjs.org/docs
- **React Docs:** https://react.dev
- **Tailwind CSS:** https://tailwindcss.com/docs
- **TypeScript:** https://www.typescriptlang.org/docs
- **Vercel:** https://vercel.com/docs

---

## 🆘 Problemas Comunes

**Error: Module not found**
```bash
rm -rf node_modules .next
npm install
```

**Error: Port already in use**
```bash
lsof -ti:3000 | xargs kill -9
npm run dev
```

**Imágenes no optimizadas**
```bash
./optimize-images.sh
```

**Cambios no se ven**
```bash
# Hard refresh: Cmd+Shift+R (Mac) / Ctrl+Shift+R (Win)
# O limpiar caché
rm -rf .next
```

---

## 📧 Contacto y Soporte

Para dudas técnicas sobre este proyecto, consulta:
1. Esta guía primero
2. Documentación oficial de Next.js
3. Issues del repositorio

---

**Versión:** 3.0  
**Última actualización:** Marzo 2026  
**Autor:** Documentación consolidada del proyecto

---

*Esta es la única guía técnica que necesitas. Todo está aquí. Si falta algo, actualiza este documento.*
