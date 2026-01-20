'use client';

import Link from 'next/link';

export default function CallToAction() {
  return (
    <section className="py-20 md:py-32 bg-gray-950 text-white">
      <div className="container-portfolio max-w-3xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance leading-tight">
          ¿Listo para tu proyecto?
        </h2>
        <p className="text-lg text-gray-300 mb-8 text-balance">
          Contacta conmigo para discutir tu proyecto y explorar cómo podemos crear espacios que inspiren.
        </p>
        <Link
          href="#contact"
          className="inline-block px-8 py-4 bg-white text-gray-950 font-medium hover:bg-gray-100 transition-colors duration-300"
        >
          Enviar mensaje
        </Link>
      </div>
    </section>
  );
}
