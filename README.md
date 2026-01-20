# 🎨 Portfolio de Arquitecto - Guía Rápida

[![Next.js](https://img.shields.io/badge/Next.js-16-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8)](https://tailwindcss.com/)

Portfolio web profesional minimalista para arquitectos. Optimizado, limpio y fácil de mantener.

## 🚀 Inicio Rápido

```bash
# 1. Instalar dependencias
npm install

# 2. Iniciar servidor de desarrollo
npm run dev

# 3. Abrir en navegador
# http://localhost:3000
```

## 📁 Estructura Principal

```
app/
├── page.tsx                 # Home
├── about/page.tsx          # Sobre mí
├── projects/               # Proyectos
│   ├── page.tsx
│   ├── landscape/
│   ├── watercolors/
│   └── photography/
├── components/             # Componentes reutilizables
├── config/site.ts         # ⭐ CONFIGURACIÓN AQUÍ
└── globals.css            # Estilos globales
```

## ✏️ Personalizar

### 1. Cambiar información
Edita `app/config/site.ts`:
```typescript
siteName: 'Tu Nombre'
email: 'tu-email@example.com'
phone: '+34 123 456 789'
```

### 2. Cambiar colores
Edita `app/globals.css`:
```css
:root {
  --color-primary: #000000;
  --color-accent: #0d3d3d;
}
```

### 3. Editar contenido
- **Home**: `app/page.tsx`
- **Sobre mí**: `app/about/page.tsx`
- **Proyectos**: `app/projects/page.tsx`

### 4. Agregar imágenes
Coloca en `public/images/` y usa:
```tsx
<img src="/images/foto.jpg" alt="Descripción" />
```

## 🧩 Componentes

```tsx
// Button
<Button variant="primary" size="lg">Click</Button>

// GalleryGrid
<GalleryGrid columns="auto" gap="md">
  {items.map(item => <div key={item.id}>{item}</div>)}
</GalleryGrid>
```

## 🎨 Clases Tailwind Comunes

```css
/* Espaciado */
p-4    /* padding 16px */
m-8    /* margin 32px */
gap-6  /* gap 24px */

/* Colores */
bg-white           /* fondo blanco */
text-gray-950      /* texto oscuro */
hover:bg-gray-100  /* hover */

/* Responsive */
md:text-5xl        /* tablet+ */
lg:grid-cols-3     /* desktop+ */
```

## 🐛 Problemas Comunes

```bash
# Limpiar caché
rm -rf .next && npm run dev

# Verificar errores
npm run lint

# Reinstalar dependencias
rm -rf node_modules && npm install
```

## 📚 Documentación Completa

- `00_COMIENZA_AQUI.md` - Tutorial paso a paso
- `QUICK_START.md` - Guía de 10 pasos
- `INDEX.md` - Índice completo del proyecto
- `DEVELOPMENT_GUIDE.md` - Guía de desarrollo avanzado

## 🚀 Deploy

```bash
# Vercel (recomendado)
npm i -g vercel
vercel

# O compilar
npm run build
npm start
```

## ✅ Checklist

- [ ] Cambiar nombre en `config/site.ts`
- [ ] Actualizar email y teléfono
- [ ] Personalizar textos
- [ ] Agregar imágenes
- [ ] Probar en móvil
- [ ] Deploy

## 📞 Ayuda

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind Docs](https://tailwindcss.com/docs)
- [React Docs](https://react.dev)

---

**Versión:** 1.0.0 | **Estado:** ✅ Optimizado y listo
