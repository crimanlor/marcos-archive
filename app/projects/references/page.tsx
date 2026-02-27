import Link from 'next/link';
import { Metadata } from 'next';
import { projectsContent } from '../../config/projectsContent';
import { referencesContent } from '../../config/referencesContent';

export const metadata: Metadata = {
  title: `Referencias | ${projectsContent.pageTitle}`
};

const references = referencesContent.sections;

export default function ReferencesPage() {
  return (
    <div className="pt-20 md:pt-24">
      {/* Hero section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container-portfolio max-w-4xl">
          <Link href="/projects" className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-950 transition-colors mb-6">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Volver a proyectos
          </Link>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-950 mb-6 text-balance">
            {projectsContent.categories.find(cat => cat.id === 'references')?.title}
          </h1>
        </div>
      </section>

      {/* References Content */}
      <section className="py-16 md:py-24 bg-white border-t border-gray-200">
        <div className="container-portfolio max-w-5xl">
          {Object.values(references).map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16 last:mb-0">
              {/* Category Title */}
              <h2 className="text-3xl font-bold text-gray-950 mb-8 pb-4 border-b-2 border-gray-950">
                {category.title}
              </h2>

              {/* Items Grid */}
              <div className="space-y-8">
                {category.items.map((item: { name: string; author: string; location: string; year: string; description: string }, itemIndex: number) => (
                  <div key={itemIndex} className="group">
                    <div className="flex flex-col gap-2">
                      {/* Project Name */}
                      <h3 className="text-xl font-semibold text-gray-950 group-hover:text-gray-700 transition-colors">
                        {item.name}
                      </h3>
                      
                      {/* Author */}
                      <p className="text-base text-gray-600 font-medium">
                        {item.author}
                      </p>
                      
                      {/* Location & Year */}
                      {(item.location || item.year) && (
                        <p className="text-sm text-gray-500">
                          {[item.location, item.year].filter(Boolean).join(', ')}
                        </p>
                      )}
                      
                      {/* Description */}
                      <p className="text-base text-gray-700 leading-relaxed mt-2">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Navigation */}
      <section className="py-16 md:py-24 bg-gray-50 border-t border-gray-200">
        <div className="container-portfolio max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link
              href="/projects"
              className="p-6 border border-gray-300 hover:border-gray-950 rounded-lg transition-colors hover:bg-white"
            >
              <p className="text-sm text-gray-600 mb-2">Volver a</p>
              <h3 className="text-lg font-semibold text-gray-950">Todos los proyectos</h3>
            </Link>
            <Link
              href="/projects/landscape"
              className="p-6 border border-gray-300 hover:border-gray-950 rounded-lg transition-colors hover:bg-white text-right"
            >
              <p className="text-sm text-gray-600 mb-2">Siguiente categoría</p>
              <h3 className="text-lg font-semibold text-gray-950">Proyectos Paisajísticos</h3>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
