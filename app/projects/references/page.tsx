import { Metadata } from 'next';
import { projectsContent } from '../../config/projectsContent';
import { referencesContent } from '../../config/referencesContent';
import { projectNavigationContent } from '../../config/projectNavigationContent';
import ProjectCategoryLayout from '../../components/ProjectCategoryLayout';

const category = projectsContent.categories.find(cat => cat.id === 'references')!;
const firstCategory = projectsContent.categories.find(cat => cat.id === 'landscape')!;

/** Tipo inferido de un ítem de referencia para evitar la anotación inline */
type ReferenceItem = (typeof referencesContent.sections)[keyof typeof referencesContent.sections]['items'][number];

export const metadata: Metadata = {
  title: `${category.title} | ${projectsContent.pageTitle}`,
};

export default function ReferencesPage() {
  return (
    <ProjectCategoryLayout
      title={category.title}
      navLeft={{ href: '/projects', label: projectNavigationContent.categoryNav.allProjects, sublabel: projectNavigationContent.categoryNav.backTo }}
      navRight={{ href: `/projects/${firstCategory.slug}`, label: firstCategory.title, sublabel: projectNavigationContent.categoryNav.nextCategory }}
      navSectionBg="gray"
    >
      {/* Contenido de referencias */}
      <section className="py-16 md:py-24 bg-white border-t border-gray-200">
        <div className="container-portfolio max-w-5xl">
          {Object.values(referencesContent.sections).map((section, categoryIndex) => (
            <div key={categoryIndex} className="mb-16 last:mb-0">
              <h2 className="text-3xl font-bold text-gray-950 mb-8 pb-4 border-b-2 border-gray-950">
                {section.title}
              </h2>

              <div className="space-y-8">
                {section.items.map((item: ReferenceItem, itemIndex: number) => (
                  <div key={itemIndex} className="group">
                    <div className="flex flex-col gap-2">
                      <h3 className="text-xl font-semibold text-gray-950 group-hover:text-gray-700 transition-colors">
                        {item.name}
                      </h3>
                      <p className="text-base text-gray-600 font-medium">{item.author}</p>
                      {(item.location || item.year) && (
                        <p className="text-sm text-gray-500">
                          {[item.location, item.year].filter(Boolean).join(', ')}
                        </p>
                      )}
                      <p className="text-base text-gray-700 leading-relaxed mt-2">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </ProjectCategoryLayout>
  );
}
