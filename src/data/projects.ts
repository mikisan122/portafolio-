import { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: '1',
    nombre: 'Sistema de Gestión para Al Minuto Autoservicio',
    descripcion: 'Sistema administrativo completo diseñado para la optimización de procesos de autoservicio. Permite un control integral de operaciones administrativas, financieras y logísticas bajo una arquitectura robusta y de alto rendimiento.',
    imagen: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200',
    tecnologias: ['React', 'Node.js', 'Express', 'MySQL'],
    categoria: 'Desarrollo Full Stack',
    fecha: 'Enero 2026',
    featured: true,
    github: 'https://github.com/plantillas-ms/al-minuto-autoservicio',
    demo: '#',
    funciones: [
      'Gestión de proveedores',
      'Gestión de pedidos',
      'Calendario',
      'Control de fondos',
      'Administración de información'
    ]
  },
  {
    id: '2',
    nombre: 'Fénix Bienestar',
    descripcion: 'Plataforma médica integral para la gestión de salud y bienestar. Automatiza el ciclo completo de citas y expedientes médicos, respaldado por consultas optimizadas con procedimientos almacenados y reportes dinámicos en PDF.',
    imagen: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1200',
    tecnologias: ['PHP', 'MySQL', 'FPDF', 'JavaScript'],
    categoria: 'Desarrollo Full Stack',
    fecha: 'Noviembre 2025',
    featured: true,
    github: 'https://github.com/plantillas-ms/fenix-bienestar',
    demo: '#',
    funciones: [
      'Gestión de pacientes',
      'Gestión de médicos',
      'Sistema de citas',
      'Reportes',
      'Generación de PDF',
      'Procedimientos almacenados'
    ]
  },
  {
    id: '3',
    nombre: 'TicketFenix',
    descripcion: 'Sistema de ticketing y reservación de eventos en tiempo real. Cuenta con selección interactiva de asientos con actualización reactiva de disponibilidad, sistema de autenticación seguro y flujos fluidos de compra.',
    imagen: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=1200',
    tecnologias: ['React', 'Firebase', 'Node.js'],
    categoria: 'Desarrollo Full Stack',
    fecha: 'Septiembre 2025',
    featured: true,
    github: 'https://github.com/plantillas-ms/ticketfenix',
    demo: '#',
    funciones: [
      'Compra de boletos',
      'Selección de asientos',
      'Inicio de sesión',
      'Gestión de eventos'
    ]
  },
  {
    id: '3b',
    nombre: 'ZenSpace',
    descripcion: 'Plataforma web interactiva para relajación y bienestar mental. Permite a los usuarios desconectar del estrés diario mediante paisajes sonoros personalizables en tiempo real, guías de respiración interactiva con animaciones fluidas y temporizadores de meditación inmersivos.',
    imagen: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=1200',
    tecnologias: ['React', 'Tailwind CSS', 'Web Audio API', 'Motion'],
    categoria: 'Desarrollo Frontend',
    fecha: 'Diciembre 2025',
    featured: true,
    github: 'https://github.com/plantillas-ms/zenspace',
    demo: '#',
    funciones: [
      'Reproductor de sonidos relajantes mixtos',
      'Guía visual interactiva de respiración',
      'Temporizador zen personalizable',
      'Estética minimalista y relajante de alto impacto visual'
    ]
  },
  {
    id: '4',
    nombre: 'Prácticas de Ciberseguridad',
    descripcion: 'Laboratorio de pruebas de penetración y auditoría de seguridad web en entornos controlados. Análisis detallado de vulnerabilidades críticas, descubrimiento de rutas ocultas y generación de reportes técnicos de mitigación.',
    imagen: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=1200',
    tecnologias: ['OWASP Juice Shop', 'Burp Suite', 'GoBuster'],
    categoria: 'Ciberseguridad',
    fecha: 'Junio 2025',
    featured: false,
    github: 'https://github.com/plantillas-ms/security-auditing',
    funciones: [
      'Descubrimiento de directorios',
      'Pruebas de seguridad web',
      'Enumeración de rutas',
      'Reportes técnicos'
    ]
  },
  {
    id: '5',
    nombre: 'Prácticas con MongoDB',
    descripcion: 'Diseño e implementación de esquemas de bases de datos NoSQL de alta escalabilidad. Incluye gestión avanzada de seguridad mediante roles y permisos de usuario, automatización de respaldos y optimización de consultas CRUD.',
    imagen: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&q=80&w=1200',
    tecnologias: ['MongoDB', 'NoSQL', 'Database Design'],
    categoria: 'Bases de Datos',
    fecha: 'Abril 2025',
    featured: false,
    github: 'https://github.com/plantillas-ms/mongodb-practices',
    funciones: [
      'CRUD',
      'Roles',
      'Usuarios',
      'Permisos',
      'Respaldos',
      'Restauración',
      'Modelado de bases de datos'
    ]
  }
];
