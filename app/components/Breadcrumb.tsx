import Link from 'next/link';

interface BreadcrumbProps {
  items: Array<{
    label: string;
    href?: string;
  }>;
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="flex items-center gap-2 text-sm">
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          {item.href ? (
            <Link href={item.href} className="text-gray-600 hover:text-gray-950 transition-colors">
              {item.label}
            </Link>
          ) : (
            <span className="text-gray-950 font-medium">{item.label}</span>
          )}
          {index < items.length - 1 && <span className="text-gray-400">/</span>}
        </div>
      ))}
    </nav>
  );
}
