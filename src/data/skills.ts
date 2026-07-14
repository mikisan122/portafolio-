import { Skill } from '../types';

export const skillsData: Skill[] = [
  // Languages
  { name: 'TypeScript', category: 'languages', level: 90 },
  { name: 'JavaScript', category: 'languages', level: 95 },
  { name: 'Python', category: 'languages', level: 80 },
  { name: 'Go (Golang)', category: 'languages', level: 75 },
  { name: 'SQL / PostgreSQL', category: 'languages', level: 85 },

  // Frontend
  { name: 'React (18/19)', category: 'frontend', level: 95 },
  { name: 'Next.js', category: 'frontend', level: 85 },
  { name: 'Tailwind CSS', category: 'frontend', level: 95 },
  { name: 'Framer Motion', category: 'frontend', level: 90 },
  { name: 'D3.js / Recharts', category: 'frontend', level: 80 },

  // Backend
  { name: 'Node.js', category: 'backend', level: 90 },
  { name: 'Express / Fastify', category: 'backend', level: 90 },
  { name: 'FastAPI (Python)', category: 'backend', level: 78 },
  { name: 'NestJS', category: 'backend', level: 70 },
  { name: 'REST & GraphQL APIs', category: 'backend', level: 88 },

  // Tools & DB
  { name: 'Git & GitHub', category: 'tools', level: 92 },
  { name: 'Docker', category: 'tools', level: 80 },
  { name: 'Redis', category: 'tools', level: 75 },
  { name: 'PostgreSQL & MongoDB', category: 'tools', level: 85 },
  { name: 'Linux / Bash', category: 'tools', level: 82 },
  { name: 'Vite / Webpack', category: 'tools', level: 88 }
];
