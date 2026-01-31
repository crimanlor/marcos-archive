'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

export default function HeroSection() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elements = [titleRef.current, subtitleRef.current, ctaRef.current];
    elements.forEach((el, index) => {
      if (el) {
        el.style.animation = `fadeInUp 0.8s ease-out ${index * 0.2}s both`;
      }
    });
  }, []);

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-20">
      {/* Hero Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/image-hero.jpg"
          alt="Arquitectura y naturaleza"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/60 to-white/70" />
      </div>
      
      {/* Decorative elements - removed as image is now background */}

      {/* Content */}
      <div className="container-portfolio text-center z-10 max-w-3xl">
        <h1
          ref={titleRef}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-gray-950 mb-6 leading-tight text-balance"
        >
          Arquitectura que respira paisaje
        </h1>

        <p
          ref={subtitleRef}
          className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed text-balance max-w-2xl mx-auto"
        >
          Urbanismo · Biofilia · Regeneración ecológica
        </p>

        <div ref={ctaRef} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/projects"
            className="px-8 py-4 bg-gray-950 text-white font-medium hover:bg-gray-800 transition-all duration-300 hover:shadow-lg rounded-lg"
          >
            Ver proyectos
          </Link>
          <Link
            href="/about"
            className="px-8 py-4 border-2 border-gray-950 text-gray-950 font-medium hover:bg-gray-950 hover:text-white transition-all duration-300 rounded-lg"
          >
            Sobre mí
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
