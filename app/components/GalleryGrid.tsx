'use client';

import { ReactNode } from 'react';

interface GalleryGridProps {
  children: ReactNode;
  columns?: 'auto' | 2 | 3;
  gap?: 'sm' | 'md' | 'lg';
}

export default function GalleryGrid({
  children,
  columns = 'auto',
  gap = 'md',
}: GalleryGridProps) {
  const colsClass = {
    'auto': 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-3',
  };

  const gapClass = {
    'sm': 'gap-4',
    'md': 'gap-6',
    'lg': 'gap-8',
  };

  return (
    <div className={`grid ${colsClass[columns]} ${gapClass[gap]}`}>
      {children}
    </div>
  );
}
