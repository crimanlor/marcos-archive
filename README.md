# Portfolio de Arquitectura y Paisajismo

[![Next.js](https://img.shields.io/badge/Next.js-16-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8)](https://tailwindcss.com/)

Portfolio web profesional minimalista. Optimizado, limpio y fácil de mantener.

---

## Inicio Rápido

```bash
npm install
npm run dev
# http://localhost:3000
```

> **Requisito:** Node.js ≥ 20

---

## Documentación

**Solo 2 documentos, nada más:**

### [Para Desarrolladores → DEVELOPER_GUIDE.md](./docs/DEVELOPER_GUIDE.md)

Setup, arquitectura, componentes, deploy, troubleshooting. **Todo lo técnico está aquí.**

### [Para No Desarrolladores → GUIA_CAMBIOS_CONTENIDO.md](./docs/GUIA_CAMBIOS_CONTENIDO.md)

Cómo editar textos, cambiar imágenes, optimizarlas y subirlas a GitHub. **Sin código.**

---

## Estructura

```
marcos-archive/
├── app/
│   ├── components/        # Componentes React
│   ├── config/            # ⚙️ TODO el contenido visible
│   │   ├── site.ts        # Info del sitio, contacto, redes, footer, créditos
│   │   ├── navigationContent.ts
│   │   ├── homeContent.ts
│   │   ├── aboutContent.ts
│   │   ├── contactContent.ts
│   │   ├── projectsContent.ts
│   │   ├── projectNavigationContent.ts
│   │   └── referencesContent.ts
│   ├── lib/               # Datos (proyectos, fotos, tipos)
│   ├── hooks/             # Custom hooks
│   └── ...páginas
├── public/images/         # Todas las imágenes
├── docs/                  # Solo 2 guías
└── optimize-images.sh     # Script de optimización
```

---

## Cambios Rápidos

**Todo el contenido visible está centralizado en `app/config/`**

| Qué cambiar | Archivo |
|---|---|
| Nombre, email, teléfono, redes, footer | `app/config/site.ts` |
| Menú de navegación | `app/config/navigationContent.ts` |
| Página de inicio | `app/config/homeContent.ts` |
| Página "Sobre mí" | `app/config/aboutContent.ts` |
| Página de Contacto | `app/config/contactContent.ts` |
| Categorías de proyectos | `app/config/projectsContent.ts` |
| Textos de navegación entre proyectos | `app/config/projectNavigationContent.ts` |
| Proyectos de paisajismo (datos) | `app/lib/landscape.ts` |
| Fotografías | `app/lib/photos.ts` |
| Sketches | `app/lib/watercolors.ts` |
| Imágenes | `public/images/` |

**Optimizar imágenes:**
```bash
./optimize-images.sh
```

---

## Comandos

```bash
npm run dev          # Desarrollo
npm run build        # Build producción
npm run lint         # Verificar código
npx tsc --noEmit     # Verificar tipos TypeScript
./optimize-images.sh # Optimizar imágenes
```

---

## Deploy

**Vercel (recomendado):**
1. Conecta tu repo en [vercel.com](https://vercel.com)
2. Añade la variable de entorno `NEXT_PUBLIC_SITE_URL=https://tusitio.com`
3. Deploy automático en cada push

O con CLI:
```bash
npm i -g vercel
vercel
```

---

## Problemas

```bash
# No arranca
rm -rf .next node_modules
npm install && npm run dev

# Puerto ocupado
lsof -ti:3000 | xargs kill -9
```

---

## Recursos

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind Docs](https://tailwindcss.com/docs)
- [React Docs](https://react.dev)

---

**¿Desarrollador?** → Lee [DEVELOPER_GUIDE.md](./docs/DEVELOPER_GUIDE.md)  
**¿No técnico?** → Lee [GUIA_CAMBIOS_CONTENIDO.md](./docs/GUIA_CAMBIOS_CONTENIDO.md)

---

*v3.0 - Refactor completo: contenido 100% centralizado en config/*
