import { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '../config/site';
import { contactContent } from '../config/contactContent';

export const metadata: Metadata = {
  title: `${contactContent.pageTitle} | ${siteConfig.architect.name}`,
  description: siteConfig.siteDescription,
};

export default function ContactPage() {
  return (
    <div className="pt-20 md:pt-24">
      {/* Hero section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container-portfolio max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-950 text-balance">
            {contactContent.pageTitle}
          </h1>
          {/* <p className="text-xl text-gray-600 text-balance">
            Estoy disponible para nuevos proyectos de arquitectura y paisajismo. No dudes en contactarme para explorar cómo podemos crear espacios excepcionales juntos.
          </p> */}
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 md:py-24 bg-white border-t border-gray-200">
        <div className="container-portfolio max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div className="space-y-8">
              
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gray-100 rounded-lg">
                  <svg className="w-6 h-6 text-gray-950" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-950 mb-1">Email</h3>
                  <a href={`mailto:${siteConfig.contact.email}`} className="text-gray-600 hover:text-gray-950 transition-colors">
                    {siteConfig.contact.email}
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gray-100 rounded-lg">
                  <svg className="w-6 h-6 text-gray-950" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-950 mb-1">Teléfono</h3>
                  <a href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`} className="text-gray-600 hover:text-gray-950 transition-colors">
                    {siteConfig.contact.phone}
                  </a>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gray-100 rounded-lg">
                  <svg className="w-6 h-6 text-gray-950" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-950 mb-1">LinkedIn</h3>
                  <a 
                    href={siteConfig.socialLinks.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-950 transition-colors inline-flex items-center gap-2"
                  >
                    {siteConfig.architect.name}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gray-100 rounded-lg">
                  <svg className="w-6 h-6 text-gray-950" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-950 mb-1">Ubicación</h3>
                  <p className="text-gray-600">{siteConfig.contact.location}</p>
                </div>
              </div>
            </div>

            {/* CV Download */}
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-950 mb-4">{contactContent.cvSection.title}</h3>
              <p className="text-gray-600 mb-6">
                {contactContent.cvSection.description}
              </p>
              
              <a
                href={contactContent.cvSection.driveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 bg-gray-950 text-white rounded-lg hover:bg-gray-800 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                {contactContent.cvSection.buttonText}
              </a>

            </div>
          </div>
        </div>
      </section>

      {/* CTA to Projects */}
      <section className="py-16 md:py-24 bg-gray-50 border-t border-gray-200">
        <div className="container-portfolio max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-950 mb-6">
            {contactContent.ctaSection.title}
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            {contactContent.ctaSection.description}
          </p>
          <Link
            href={contactContent.ctaSection.buttonLink}
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-gray-950 text-gray-950 font-medium hover:bg-gray-950 hover:text-white transition-all duration-300 rounded-lg"
          >
            {contactContent.ctaSection.buttonText}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
