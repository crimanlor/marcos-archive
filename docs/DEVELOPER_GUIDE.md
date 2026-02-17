# 🛠️ Guía Completa para Desarrolladores

**Portfolio de Arquitectura y Paisajismo - Next.js 15 + React 19 + TypeScript**

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

### Requisitos Previos
- Node.js 18+ 
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
npm run type-check   # TypeScript check
```

---

## 🏗️ Arquitectura del Proyecto

### Stack Tecnológico

- **Framework:** Next.js 15 (App Router)
- **UI:** React 19
- **Lenguaje:** TypeScript 5.3
- **Estilos:** Tailwind CSS 3.4
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
│   ├── layout.tsx               # Layout principal
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
│   │   ├── page.tsx            # Listado de proyectos
│   │   ├── landscape/          # Proyectos paisajísticos
│   │   │   ├── page.tsx
│   │   │   └── [id]/page.tsx   # Detalle proyecto
│   │   ├── watercolors/        # Sketching/Acuarelas
│   │   │   └── page.tsx
│   │   ├── photography/        # Archivo fotográfico
│   │   │   ├── page.tsx
│   │   │   └── [id]/page.tsx
│   │   └── references/         # Referencias (plantas, texturas)
│   │       └── page.tsx
│   │
│   ├── components/             # Componentes React reutilizables
│   │   ├── Navigation.tsx      # Barra de navegación
│   │   ├── Footer.tsx          # Footer
│   │   ├── Button.tsx          # Botón con variantes
│   │   ├── GalleryGrid.tsx     # Grid de galerías
│   │   ├── HeroSection.tsx     # Hero homepage
│   │   ├── ProjectsPreview.tsx # Preview de proyectos
│   │   ├── PhotoModal.tsx      # Modal para fotos
│   │   ├── Breadcrumb.tsx      # Breadcrumbs
│   │   └── CallToAction.tsx    # CTA sections
│   │
│   ├── config/                 # Configuración
│   │   └── site.ts             # ⚙️ Config del sitio (IMPORTANTE)
│   │
│   ├── lib/                    # Utilidades y datos
│   │   ├── data.ts             # Datos de proyectos paisajísticos
│   │   ├── photos.ts           # Datos del archivo fotográfico
│   │   ├── watercolors.ts      # Datos de sketching
│   │   ├── landscape.ts        # Datos específicos de paisajismo
│   │   ├── imageConfig.ts      # Config de imágenes Next
│   │   ├── metadata.ts         # Helper para SEO
│   │   └── types.ts            # TypeScript types
│   │
│   ├── hooks/                  # Custom React Hooks
│   │   └── useGalleryModal.ts  # Hook para modales
│   │
│   └── utils/                  # Utilidades generales
│       └── hooks.ts
│
├── public/                     # Archivos estáticos
│   └── images/                 # 🖼️ Todas las imágenes
│       ├── originales/         # Backups de imágenes originales
│       ├── photo-*.jpg         # Fotografías (001-040)
│       ├── watercolor-*.jpg    # Acuarelas (001-011)
│       ├── image-*.jpg         # Imágenes de páginas
│       └── plant-*.jpg         # Referencias de plantas
│
├── docs/                       # 📚 Documentación
│   ├── DEVELOPER_GUIDE.md      # Este archivo
│   └── GUIA_CAMBIOS_CONTENIDO.md  # Para no-devs
│
├── optimize-images.sh          # Script de optimización
├── next.config.ts              # Config de Next.js
├── tailwind.config.ts          # Config de Tailwind
├── tsconfig.json               # Config de TypeScript
└── package.json                # Dependencies
```

---

## 🧩 Componentes

### Navigation

Barra de navegación responsive con menú móvil.

```tsx
// Ya incluido en app/layout.tsx
import Navigation from '@/app/components/Navigation';

// Props: Ninguna (lee config de app/config/site.ts)
```

### Button

Botón con múltiples variantes y tamaños.

```tsx
import Button from '@/app/components/Button';

// Variantes
<Button variant="primary">Primario</Button>
<Button variant="secondary">Secundario</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>

// Tamaños
<Button size="sm">Pequeño</Button>
<Button size="md">Mediano</Button>
<Button size="lg">Grande</Button>

// Como link
<Button asLink href="/projects">Ver Proyectos</Button>

// Props completas
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  asLink?: boolean;
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
}
```

### GalleryGrid

Grid responsive para galerías de imágenes.

```tsx
import GalleryGrid from '@/app/components/GalleryGrid';

<GalleryGrid columns="auto" gap="md">
  {items.map(item => (
    <div key={item.id}>
      <Image src={item.image} alt={item.title} />
    </div>
  ))}
</GalleryGrid>

// Props
interface GalleryGridProps {
  columns?: 'auto' | '2' | '3' | '4';
  gap?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}
```

### PhotoModal

Modal para visualizar fotos en grande con información.

```tsx
import PhotoModal from '@/app/components/PhotoModal';
import { useGalleryModal } from '@/app/hooks/useGalleryModal';

const { selectedPhoto, openModal, closeModal } = useGalleryModal();

<PhotoModal
  photo={selectedPhoto}
  onClose={closeModal}
/>
```

### Breadcrumb

Migajas de pan para navegación.

```tsx
import Breadcrumb from '@/app/components/Breadcrumb';

<Breadcrumb
  items={[
    { label: 'Proyectos', href: '/projects' },
    { label: 'Paisajismo', href: '/projects/landscape' },
    { label: 'Proyecto 1' }
  ]}
/>
```

---

## 📊 Gestión de Datos

### ⚠️ Información Dispersa (No Centralizada)

**IMPORTANTE:** A diferencia de lo esperado, NO toda la información está en `app/config/site.ts`. Aquí está la ubicación REAL de cada dato:

#### Información de Contacto y Personal

| Dato | Ubicación Real | Líneas |
|------|---------------|--------|
| Nombre completo | `app/components/Navigation.tsx` | 14 |
| Nombre completo | `app/components/Footer.tsx` | 12 |
| Email | `app/components/Footer.tsx` | 51-56 |
| Teléfono | `app/components/Footer.tsx` | 61-66 |
| Instagram | `app/components/Footer.tsx` | 73-80 |
| LinkedIn | `app/components/Footer.tsx` | 83-90 |
| Biografía completa | `app/about/page.tsx` | 28-52 |

**Para cambiar tu nombre, email o redes:** Edita directamente en Footer.tsx y Navigation.tsx (están hardcodeados).

---

### Configuración del Sitio

**Archivo:** `app/config/site.ts`

⚠️ **Nota:** Este archivo existe pero NO se está usando para contacto/redes sociales en la versión actual.

Contiene configuración general pero no está conectado a los componentes:

```typescript
export const siteConfig = {
  siteName: 'Estudio Arquitectura',
  siteDescription: 'Portfolio de arquitecto...',
  
  // ⚠️ Estos datos NO se usan actualmente en Footer/Navigation
  contact: {
    email: 'contact@example.com',
    phone: '+34 000 000 000',
    location: 'Barcelona, España',
  },
  
  socialLinks: {
    instagram: 'https://instagram.com/usuario',
    linkedin: 'https://linkedin.com/in/usuario',
  },
  
  // Colores personalizados
  colors: {
    primary: '#000000',
    secondary: '#1a1a1a',
    accent: '#0d3d3d',
  },
};
```

**TODO:** Refactorizar Footer.tsx y Navigation.tsx para usar `siteConfig` en lugar de valores hardcodeados.

### Datos de Proyectos

**Archivo:** `app/lib/data.ts`

Contiene todos los proyectos paisajísticos:

```typescript
export const landscapeProjects: Project[] = [
  {
    id: 1,
    title: 'Nombre del Proyecto',
    slug: 'nombre-del-proyecto',
    description: 'Descripción breve',
    location: 'Ciudad, País',
    year: 2024,
  },
  // ...
];
```

Para añadir un proyecto:
1. Añade el objeto al array
2. Incrementa el `id`
3. El `slug` debe ser URL-friendly (sin espacios, todo minúsculas)

### Fotografías

**Archivo:** `app/lib/photos.ts`

Configuración de fotografías del archivo:

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
  },
  // ...
];
```

**Importante:** El `filename` debe coincidir con el archivo en `public/images/`

### Types

**Archivo:** `app/lib/types.ts`

Definiciones de TypeScript:

```typescript
export interface Project {
  id: number;
  title: string;
  slug: string;
  description: string;
  location: string;
  year: number;
}

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
```

---

## 🎨 Estilos y Personalización

### Tailwind CSS

El proyecto usa Tailwind con configuración personalizada.

**Archivo:** `tailwind.config.ts`

```typescript
export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#000000',
        secondary: '#1a1a1a',
        accent: '#0d3d3d',
      },
    },
  },
};
```

### CSS Global

**Archivo:** `app/globals.css`

Variables CSS personalizadas:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --color-primary: 0 0% 0%;
    --color-secondary: 0 0% 10%;
    --color-accent: 180 60% 15%;
  }
}

/* Utilidades personalizadas */
.container-portfolio {
  @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
}
```

### Clases Tailwind Comunes

```css
/* Espaciado */
p-4, p-6, p-8        # padding
m-4, m-6, m-8        # margin
gap-4, gap-6         # gap en grids/flex

/* Layout */
flex, grid           # display
items-center         # align-items
justify-between      # justify-content

/* Responsive */
sm:text-lg          # ≥640px
md:text-xl          # ≥768px
lg:text-2xl         # ≥1024px
xl:text-3xl         # ≥1280px

/* Colores */
bg-white, bg-gray-100
text-gray-900, text-gray-600
hover:bg-gray-50

/* Tipografía */
font-bold, font-semibold
text-sm, text-base, text-lg
leading-tight, leading-relaxed
```

### Personalizar Colores

Opción 1: Modificar `tailwind.config.ts`
```typescript
colors: {
  primary: '#tu-color',
  secondary: '#tu-color',
}
```

Opción 2: Modificar `app/globals.css`
```css
:root {
  --color-primary: h s l;
}
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

**Versión:** 2.0  
**Última actualización:** Febrero 2026  
**Autor:** Documentación consolidada del proyecto

---

*Esta es la única guía técnica que necesitas. Todo está aquí. Si falta algo, actualiza este documento.*
