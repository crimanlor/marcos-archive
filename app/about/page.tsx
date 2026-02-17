import { Metadata } from 'next';
import Image from 'next/image';
import { aboutContent } from '../config/aboutContent';

export const metadata: Metadata = {
  title: 'Sobre mí | Marcos Villén Rubio',
  description: 'Conoce la filosofía y enfoque naturalista de nuestro trabajo arquitectónico',
};

export default function AboutPage() {
  return (
    <div className="pt-20 md:pt-24">
      {/* Hero section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container-portfolio max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-950 text-balance">
            {aboutContent.pageTitle}
          </h1>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16 md:py-24 bg-white border-t border-gray-200">
        <div className="container-portfolio max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:items-center">
            {/* Main text */}
            <div className="md:col-span-3 prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-950 mb-6">{aboutContent.mainSection.title}</h2>
              {aboutContent.mainSection.paragraphs.map((paragraph, index) => (
                <p key={index} className="text-lg text-gray-600 mb-6 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Sidebar */}
            <div className="md:col-span-2">
              {/* Image */}
            <div className="relative aspect-[3/4] w-full rounded-lg overflow-hidden border border-neutral-200">
              <Image
                src={aboutContent.mainSection.image}
                alt={aboutContent.mainSection.imageAlt}
                fill
                className="object-cover object-center"
                priority
              />
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formación section */}
      <section className="py-16 md:py-24 bg-gray-100 border-t border-gray-200">
        <div className="container-portfolio max-w-6xl">
          <h2 className="text-3xl font-bold text-gray-950 mb-12">{aboutContent.education.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aboutContent.education.items.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <p className="text-gray-600 text-base">
                  <span className="text-gray-950 font-semibold">{item.year}</span> · {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experiencia laboral section */}
      <section className="py-16 md:py-24 bg-white border-t border-gray-200">
        <div className="container-portfolio max-w-6xl">
          <h2 className="text-3xl font-bold text-gray-950 mb-6">{aboutContent.experience.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {aboutContent.experience.items.map((item, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-gray-950 mb-3">{item.title}</h3>
                <p className="text-gray-600 text-base">{item.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
