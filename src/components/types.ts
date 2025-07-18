export interface Project {
  id: number;
  order: number;
  title: string;
  category: string;
  type: string;
  description: string;
  image: string;
  video?: string;
  tags: string[];
  featured: boolean;
  process?: string;
  related?: number[];
} 