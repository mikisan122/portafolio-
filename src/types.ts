/**
 * TypeScript interfaces for Miguel Sánchez's portfolio components.
 */

export interface Project {
  id: string;
  nombre: string;
  descripcion: string;
  imagen: string;
  tecnologias: string[];
  github?: string;
  demo?: string;
  categoria: string; // e.g. "Full Stack", "Front End", "Backend", "AI / Data"
  fecha: string;
  featured?: boolean;
  funciones?: string[];
}

export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'tools' | 'languages';
  level: number; // 0-100 percentage
}

export interface Experience {
  id: string;
  rol: string;
  entidad: string; // Company or University
  periodo: string;
  descripcion: string[];
  tecnologias?: string[];
  tipo: 'education' | 'work' | 'achievement';
}
