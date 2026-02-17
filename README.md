# 🎨 Portfolio de Arquitectura y Paisajismo

[![Next.js](https://img.shields.io/badge/Next.js-15-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8)](https://tailwindcss.com/)

Portfolio web profesional minimalista. Optimizado, limpio y fácil de mantener.

---

## 🚀 Inicio Rápido

```bash
npm install
npm run dev
# http://localhost:3000
```

---

## 📚 Documentación

**Solo 2 documentos, nada más:**

### 💻 [Para Desarrolladores → DEVELOPER_GUIDE.md](./docs/DEVELOPER_GUIDE.md)

Setup, arquitectura, componentes, deploy, troubleshooting. **Todo lo técnico está aquí.**

### 📝 [Para No Desarrolladores → GUIA_CAMBIOS_CONTENIDO.md](./docs/GUIA_CAMBIOS_CONTENIDO.md)

Cómo editar textos, cambiar imágenes, optimizarlas y subirlas a GitHub. **Sin código.**

---

## 📁 Estructura

```
marcos-archive/
├── app/                    # Código de la aplicación
│   ├── components/        # Componentes React
│   ├── lib/               # Datos (proyectos, fotos)
│   ├── config/site.ts     # ⚙️ Configuración principal
│   └── ...
├── public/images/         # 🖼️ Todas las imágenes
├── docs/                  # 📚 Solo 2 guías
│   ├── DEVELOPER_GUIDE.md
│   └── GUIA_CAMBIOS_CONTENIDO.md
└── optimize-images.sh     # Script de optimización
```

---

## ✏️ Cambios Rápidos

**Nombre (Navigation/Footer):** `app/components/Navigation.tsx` y `Footer.tsx`  
**Email y teléfono:** `app/components/Footer.tsx` (líneas 50-67)  
**Redes sociales:** `app/components/Footer.tsx` (líneas 73-90)  
**Biografía completa:** `app/about/page.tsx` (líneas 28-52)  
**Proyectos paisajismo:** `app/lib/data.ts`  
**Fotografías:** `app/lib/photos.ts`  
**Imágenes:** `public/images/`

**Optimizar imágenes:**
```bash
./optimize-images.sh
```

---

## 🛠️ Comandos

```bash
npm run dev          # Desarrollo
npm run build        # Build producción
npm run lint         # Verificar código
./optimize-images.sh # Optimizar imágenes
```

---

## 🚀 Deploy

**Vercel (recomendado):**
1. Conecta tu repo en [vercel.com](https://vercel.com)
2. Deploy automático en cada push

O con CLI:
```bash
npm i -g vercel
vercel
```

---

## 🆘 Problemas

```bash
# No arranca
rm -rf .next node_modules
npm install && npm run dev

# Puerto ocupado
lsof -ti:3000 | xargs kill -9
```

---

## 📖 Recursos

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind Docs](https://tailwindcss.com/docs)
- [React Docs](https://react.dev)

---

**¿Desarrollador?** → Lee [DEVELOPER_GUIDE.md](./docs/DEVELOPER_GUIDE.md)  
**¿No técnico?** → Lee [GUIA_CAMBIOS_CONTENIDO.md](./docs/GUIA_CAMBIOS_CONTENIDO.md)

---

*v2.0 - Docs optimizadas y consolidadas*
