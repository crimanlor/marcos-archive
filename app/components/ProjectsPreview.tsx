import { projectsContent } from '../config/projectsContent';
import CategoryCard from './CategoryCard';

/**
 * Sección de vista previa de proyectos para la página de inicio.
 * Muestra todas las categorías de proyectos en un grid de 4 columnas.
 */
export default function ProjectsPreview() {
  return (
    <section className="py-20 bg-white">
      <div className="container-portfolio">
        <div className="mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-950 mb-2 text-balance">
            Proyectos
          </h2>
        </div>

        <div className="py-16 md:py-24 border-t border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {projectsContent.categories.map((category, index) => (
              <CategoryCard key={category.id} category={category} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
