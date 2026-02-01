# Portfolio de Arquitecto - Next.js

Un portfolio web minimalista y elegante para un arquitecto especializado en diseño naturalista y paisajismo contemporáneo.

## 🎨 Características

- **Diseño Minimalista Editorial**: Enfoque visual limpio y sobrio
- **Responsive Design**: Optimizado para mobile-first
- **Animaciones Sutiles**: Transiciones suaves y fade-in effects
- **Paleta Neutral**: Negro, gris y blanco como colores principales
- **Tipografía Moderna**: Sans-serif elegante y legible
- **Performance Optimizado**: Código limpio y escalable

## 📁 Estructura del Proyecto

```
architect-portfolio/
├── app/
│   ├── components/
│   │   ├── Navigation.tsx       # Navegación principal
│   │   ├── HeroSection.tsx      # Sección hero
│   │   ├── ProjectsPreview.tsx  # Vista previa de proyectos
│   │   ├── CallToAction.tsx     # CTA section
│   │   └── Footer.tsx           # Footer
│   ├── lib/
│   │   └── data.ts              # Datos mock
│   ├── utils/
│   │   └── hooks.ts             # Custom hooks
│   ├── about/
│   │   └── page.tsx             # Página Sobre mí
│   ├── projects/
│   │   ├── page.tsx             # Índice de proyectos
│   │   ├── landscape/
│   │   │   └── page.tsx         # Proyectos paisajísticos
│   │   ├── watercolors/
│   │   │   └── page.tsx         # Sketching
│   │   └── photography/
│   │       └── page.tsx         # Archivo fotográfico
│   ├── layout.tsx               # Layout raíz
│   ├── page.tsx                 # Home
│   └── globals.css              # Estilos globales
├── public/
│   └── placeholder-projects/    # Imágenes placeholder
├── package.json
├── tailwind.config.ts
├── postcss.config.mjs
├── tsconfig.json
└── next.config.ts
```

## 🚀 Tecnologías Utilizadas

- **Next.js 16** - React framework con App Router
- **React 19** - Librería UI
- **TypeScript** - Type safety
- **Tailwind CSS** - Utilidad CSS
- **PostCSS** - Procesador CSS

## 📋 Páginas Principales

### Home (`/`)
- Hero section con imagen/gradiente de fondo
- Texto de bienvenida
- CTAs principales
- Preview de tres categorías de proyectos

### Sobre mí (`/about`)
- Biografía profesional
- Filosofía de diseño
- Áreas de expertise
- Credentials y experiencia
- Imagen del arquitecto (placeholder)

### Proyectos (`/projects`)
- Índice con tres categorías principales
- Tarjetas grandes con información descriptiva

#### Proyectos Paisajísticos (`/projects/landscape`)
- Galería de 8 proyectos
- Layout editorial (imagen + texto alternados)
- Información: ubicación, año, descripción, características

#### Acuarelas (`/projects/watercolors`)
- Grid responsive de 12 acuarelas
- Hover effects sutiles
- Descripción de la serie

#### Archivo Fotográfico (`/projects/photography`)
- Grid masónico de 45 fotos
- Foto destacada grande (2 cols)
- Hover effects interactivos

## 🎯 Componentes Principales

### Navigation
- Fixed header con logo
- Menu desktop horizontal
- Menu mobile hamburguesa
- Buttons con estilos coherentes

### HeroSection
- Gradient background elegante
- Animaciones fade-in secuenciales
- CTA buttons primarios
- Scroll indicator

### ProjectsPreview
- Grid 3 columnas
- Overlay hover con información
- Links a subcategorías

### Footer
- Información de contacto
- Links de navegación
- Social media
- Copyright dinámico

## 🎨 Sistema de Colores

```
--color-primary: #000000 (Negro)
--color-secondary: #1a1a1a (Gris muy oscuro)
--color-accent: #0d3d3d (Verde oscuro)
--color-bg-dark: #0f0f0f (Fondo oscuro)
--color-bg-light: #f5f5f5 (Fondo claro)
--color-text-light: #ffffff (Texto blanco)
--color-text-dark: #000000 (Texto negro)
```

## 🔧 Instalación y Desarrollo

### Requisitos Previos
- Node.js 18+ (idealmente 20+)
- npm o yarn

### Pasos de Instalación

```bash
# Instalar dependencias
npm install

# Ejecutar servidor de desarrollo
npm run dev

# Construir para producción
npm run build

# Ejecutar construcción de producción
npm start
```

El sitio estará disponible en `http://localhost:3000`

## 📱 Responsive Design

- **Mobile**: 320px - 768px (full-width, stack vertical)
- **Tablet**: 768px - 1024px (2 columnas)
- **Desktop**: 1024px+ (3 columnas, full layouts)

## ✨ Características de Animación

- **Fade In**: Elementos aparecen con suavidad
- **Slide In**: Textos entran desde los lados
- **Hover Effects**: Transiciones suaves en botones y tarjetas
- **Scroll Reveal**: Elementos se revelan al scrollear
- **Smooth Scroll**: Comportamiento scroll fluido

## 📝 Guía de Personalización

### Cambiar Paleta de Colores
Editar `app/globals.css` y modificar variables CSS en `:root`

### Agregar Nuevos Proyectos
Actualizar `app/lib/data.ts` y crear nuevas páginas en `app/projects/`

### Modificar Contenido
- Textos en componentes individuales
- Metadata en `app/layout.tsx`
- Información en páginas específicas

### Agregar Imágenes Reales
1. Colocar imágenes en `public/images/` o `public/placeholder-projects/`
2. Usar componente `Image` de Next.js
3. Actualizar referencias en componentes

## 🔗 Estructura de Rutas

```
/                   Home
/about              Sobre mí
/projects           Índice de proyectos
/projects/landscape Proyectos paisajísticos
/projects/watercolors Acuarelas
/projects/photography Archivo fotográfico
```

## 📊 Performance

- ✅ Optimizado para Core Web Vitals
- ✅ Imágenes optimizadas (Next.js Image)
- ✅ CSS modular con Tailwind
- ✅ Tipografía system fonts
- ✅ Code splitting automático

## 🌐 SEO

- Metadata configurada en `layout.tsx`
- Open Graph tags
- Títulos y descripciones en cada página
- Links semánticos

## 📦 Scripts Disponibles

```bash
npm run dev      # Desarrollo
npm run build    # Build
npm start        # Producción
npm run lint     # ESLint
```

## 🎓 Notas de Desarrollo

### Datos Mock
El proyecto utiliza datos mock locales en `app/lib/data.ts`. Para conectar con una API:

1. Crear servicio en `app/services/`
2. Reemplazar imports de datos locales
3. Implementar error handling y loading states

### Componentes Reutilizables
Los componentes están diseñados para ser modularizados. Se pueden extraer más:
- `Button` component
- `ProjectCard` component
- `GalleryGrid` component

### TypeScript
El proyecto está completamente tipado. Crear interfaces en archivos `.ts` separados cuando sea necesario.

## 📄 Licencia

Este proyecto es un template personalizable. Libre de usar y modificar.

## 💬 Contacto y Soporte

Para preguntas o sugerencias sobre mejoras, consultar la estructura de archivos o la documentación de Next.js.

---

**Última actualización**: Enero 2026
**Versión**: 1.0.0
