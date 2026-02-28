import Link from 'next/link';
import Image from 'next/image';
import { ProjectCategory } from '../lib/types';

interface CategoryCardProps {
  category: ProjectCategory;
  /** Índice 0-based en la lista, usado para el número decorativo y ajustes de imagen */
  index: number;
}

/**
 * Tarjeta de categoría de proyecto.
 * Utilizada tanto en la página de inicio (ProjectsPreview) como en /projects.
 */
export default function CategoryCard({ category, index }: CategoryCardProps) {
  return (
    <Link
      href={`/projects/${category.slug}`}
      className="group flex flex-col overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-300 rounded-lg bg-stone-100"
    >
      {/* Número decorativo */}
      <div className="p-6 pb-4">
        <h3 className="text-5xl font-bold text-gray-950 mb-3">
          {String(index + 1).padStart(2, '0')}
        </h3>
        <div className="w-full h-px bg-gray-300" />
      </div>

      {/* Imagen */}
      <div className="relative w-full bg-gray-100 aspect-square overflow-hidden">
        <Image
          src={category.image}
          alt={category.title}
          fill
          className={`object-cover ${index === 2 ? 'object-top' : ''}`}
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
      </div>

      {/* Contenido */}
      <div className="p-6 flex-1 flex flex-col">
        <h2 className="text-2xl font-bold text-gray-950 mb-2 group-hover:text-gray-700 transition-colors">
          {category.title}
        </h2>
        <p className="text-gray-600 mb-4 flex-1">{category.description}</p>
      </div>
    </Link>
  );
}
