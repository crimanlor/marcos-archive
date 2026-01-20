export interface Project {
  id: number;
  title: string;
  slug: string;
  description: string;
  location?: string;
  year?: number;
  image?: string;
  count?: number;
}

export interface ProjectCategory {
  id: string;
  title: string;
  description: string;
  slug: string;
  count: number;
  image: string;
}

export interface NavigationItem {
  href: string;
  label: string;
}
