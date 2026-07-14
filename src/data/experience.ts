import { Experience } from '../types';

export const experienceData: Experience[] = [
  {
    id: 'exp-1',
    rol: 'Creador y Desarrollador Full Stack',
    entidad: 'Proyecto "Al Minuto Autoservicio"',
    periodo: 'Enero 2026',
    descripcion: [
      'Diseñé e implementé de extremo a extremo un sistema administrativo completo para optimizar procesos comerciales y logísticos.',
      'Desarrollé la gestión integral de proveedores, flujo estructurado de pedidos, calendario integrado y un módulo seguro para control de fondos.',
      'Conecté una interfaz reactiva en React con una API robusta en Node.js/Express, respaldada por un almacenamiento optimizado en MySQL.'
    ],
    tecnologias: ['React', 'Node.js', 'Express', 'MySQL', 'Tailwind CSS'],
    tipo: 'work'
  },
  {
    id: 'exp-2',
    rol: 'Creador y Desarrollador de Software',
    entidad: 'Proyecto "Fénix Bienestar"',
    periodo: 'Noviembre 2025',
    descripcion: [
      'Desarrollé una plataforma médica integral dedicada a la automatización del ciclo completo de citas y expedientes médicos de pacientes.',
      'Automaticé la generación dinámica de recetas e informes médicos en PDF a través de la librería FPDF en PHP.',
      'Diseñé e implementé procedimientos almacenados complejos en MySQL para optimizar drásticamente las consultas y tiempos de respuesta.'
    ],
    tecnologias: ['PHP', 'MySQL', 'FPDF', 'JavaScript'],
    tipo: 'work'
  },
  {
    id: 'exp-3',
    rol: 'Creador y Desarrollador Full Stack',
    entidad: 'Proyecto "TicketFenix"',
    periodo: 'Septiembre 2025',
    descripcion: [
      'Construí una plataforma interactiva de reserva y venta de boletos para eventos con sincronización de datos en tiempo real.',
      'Maqueté un selector visual de asientos interactivo que evita colisiones de reservas simultáneas y asegura una excelente experiencia de usuario.',
      'Implementé un sistema de autenticación seguro y estructuré bases de datos no relacionales utilizando Firebase.'
    ],
    tecnologias: ['React', 'Firebase', 'Node.js', 'Tailwind CSS'],
    tipo: 'work'
  },
  {
    id: 'exp-3b',
    rol: 'Creador y Desarrollador Frontend',
    entidad: 'Proyecto "ZenSpace"',
    periodo: 'Diciembre 2025',
    descripcion: [
      'Concebí, diseñé y programé un sitio web interactivo enfocado en la relajación profunda y reducción del estrés.',
      'Implementé un sistema de reproducción de paisajes sonoros dinámicos donde los usuarios pueden mezclar audio ambiental (lluvia, bosque, ruido blanco) a su gusto.',
      'Diseñé guías visuales animadas para ejercicios de respiración rítmica y temporizadores de meditación que promueven un estado de paz.'
    ],
    tecnologias: ['React', 'Tailwind CSS', 'Web Audio API', 'Motion'],
    tipo: 'work'
  },
  {
    id: 'exp-4',
    rol: 'Estudiante de Ingeniería en Software',
    entidad: 'Formación Académica / Universidad',
    periodo: '2022 - Presente',
    descripcion: [
      'Especialización en arquitectura de software, algoritmia elemental, patrones de diseño de sistemas y seguridad web.',
      'Desarrollo de proyectos prácticos orientados a la solución de problemas reales del mundo laboral, frontend y backend.',
      'Estudio constante de metodologías ágiles de desarrollo y modelado avanzado de bases de datos tanto relacionales (MySQL) como NoSQL (MongoDB).'
    ],
    tecnologias: ['Bases de Datos', 'Estructuras de Datos', 'Arquitectura de Software', 'Clean Code'],
    tipo: 'education'
  }
];
