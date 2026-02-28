import { Metadata } from 'next';
import { projectsContent } from '../config/projectsContent';
import { siteConfig } from '../config/site';
import CategoryCard from '../components/CategoryCard';

export const metadata: Metadata = {
  title: `${projectsContent.pageTitle} | ${siteConfig.architect.name}`,
  description: siteConfig.siteDescription,
};

export default function ProjectsPage() {
  return (
    <div className="pt-20 md:pt-24">
      {/* Hero */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container-portfolio max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-950 text-balance">
            {projectsContent.pageTitle}
          </h1>
        </div>
      </section>

      {/* Grid de categorías */}
      <section className="py-16 md:py-24 bg-white border-t border-gray-200">
        <div className="container-portfolio">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {projectsContent.categories.map((category, index) => (
              <CategoryCard key={category.id} category={category} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
