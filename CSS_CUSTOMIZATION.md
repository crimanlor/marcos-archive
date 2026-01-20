/* 
  Ejemplos de Customización CSS
  Descomenta o modifica según tus necesidades
*/

/* ============================================
   VARIANTES DE PALETA DE COLORES
   ============================================ */

/* Opción 1: Dark elegante (actual) */
/*
:root {
  --color-primary: #000000;
  --color-secondary: #1a1a1a;
  --color-accent: #0d3d3d;
}
*/

/* Opción 2: Verde minimalista */
/*
:root {
  --color-primary: #1a3a3a;
  --color-secondary: #2d5a5a;
  --color-accent: #4a8a8a;
}
*/

/* Opción 3: Azul marino contemporáneo */
/*
:root {
  --color-primary: #0f1f3f;
  --color-secondary: #1a3a5a;
  --color-accent: #2d5a8a;
}
*/

/* Opción 4: Tierra y naturaleza */
/*
:root {
  --color-primary: #3d2817;
  --color-secondary: #5a3a28;
  --color-accent: #8a5a3a;
}
*/

/* ============================================
   ALTERNATIVAS DE TIPOGRAFÍA
   ============================================ */

/* Opción 1: Moderno minimalista (actual) */
/*
body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
}
*/

/* Opción 2: Editorial premium */
/*
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Lato:wght@400;500&display=swap');

body {
  font-family: 'Lato', sans-serif;
}

h1, h2, h3, h4 {
  font-family: 'Playfair Display', serif;
}
*/

/* Opción 3: Geométrica moderna */
/*
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&family=Archivo:wght@400;500&display=swap');

body {
  font-family: 'Archivo', sans-serif;
}

h1, h2, h3 {
  font-family: 'Montserrat', sans-serif;
}
*/

/* Opción 4: Serifa elegante */
/*
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700&family=Open+Sans:wght@400;500&display=swap');

body {
  font-family: 'Open Sans', sans-serif;
}

h1, h2, h3 {
  font-family: 'Cormorant Garamond', serif;
}
*/

/* ============================================
   ANIMACIONES PERSONALIZADAS
   ============================================ */

/* Ejemplo: Animación de entrada diferente */
@keyframes slideInFromTop {
  from {
    opacity: 0;
    transform: translateY(-100px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-slide-in-top {
  animation: slideInFromTop 0.8s ease-out forwards;
}

/* Ejemplo: Animación de rotación */
@keyframes rotateIn {
  from {
    opacity: 0;
    transform: rotate(-10deg) scale(0.8);
  }
  to {
    opacity: 1;
    transform: rotate(0) scale(1);
  }
}

.animate-rotate-in {
  animation: rotateIn 0.6s ease-out forwards;
}

/* ============================================
   HOVER EFFECTS AVANZADOS
   ============================================ */

/* Botones con underline */
.button-underline:hover {
  text-decoration: underline;
  text-underline-offset: 4px;
}

/* Cards con shadow gradual */
.card-shadow-hover {
  transition: box-shadow 0.3s ease, transform 0.3s ease;
}

.card-shadow-hover:hover {
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  transform: translateY(-4px);
}

/* ============================================
   LAYOUT ALTERNATIVO
   ============================================ */

/* Layout en dos columnas para proyectos */
.projects-layout-two-col {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

@media (max-width: 768px) {
  .projects-layout-two-col {
    grid-template-columns: 1fr;
  }
}

/* ============================================
   TIPOGRAFÍA ALTERNATIVA
   ============================================ */

/* Espaciado de letras premium */
.text-luxury {
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

/* Línea decorativa */
.text-with-line {
  position: relative;
  padding-bottom: 1rem;
}

.text-with-line::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 60px;
  height: 2px;
  background-color: currentColor;
}

/* ============================================
   EFECTOS DE FONDO
   ============================================ */

/* Gradiente radial */
.bg-radial-gradient {
  background: radial-gradient(circle at center, #ffffff 0%, #f5f5f5 100%);
}

/* Textura de papel */
.bg-paper-texture {
  background-image: 
    repeating-linear-gradient(
      90deg,
      transparent,
      transparent 2px,
      rgba(255,255,255,.05) 2px,
      rgba(255,255,255,.05) 4px
    ),
    repeating-linear-gradient(
      0deg,
      transparent,
      transparent 2px,
      rgba(255,255,255,.02) 2px,
      rgba(255,255,255,.02) 4px
    );
}

/* ============================================
   RESPONSIVE ADJUSTMENTS
   ============================================ */

/* Extra large screens */
@media (min-width: 1440px) {
  .container-portfolio {
    max-width: 1320px;
  }
}

/* Small screens */
@media (max-width: 480px) {
  body {
    font-size: 14px;
  }
  
  h1 {
    font-size: 28px;
  }
}

/* ============================================
   DARK MODE (Si deseas implementarlo)
   ============================================ */

/*
@media (prefers-color-scheme: dark) {
  :root {
    --color-bg-light: #1a1a1a;
    --color-text-dark: #ffffff;
  }
  
  body {
    background-color: var(--color-bg-light);
    color: var(--color-text-dark);
  }
}
*/

/* ============================================
   PRINT STYLES
   ============================================ */

@media print {
  header,
  footer,
  nav,
  .no-print {
    display: none;
  }
  
  body {
    background: white;
    color: black;
  }
}
