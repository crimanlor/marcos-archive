'use client';

import { useEffect } from 'react';

/**
 * Observa todos los elementos con la clase `.scroll-fade` y les añade
 * la clase `visible` cuando entran en el viewport.
 * Diseñado para animar elementos al hacer scroll mediante CSS.
 *
 * @example
 * // En un componente cliente:
 * useScrollReveal();
 * // En el JSX:
 * <div className="scroll-fade">...</div>
 */
export function useScrollReveal() {
  useEffect(() => {
    const revealElements = document.querySelectorAll('.scroll-fade');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}
