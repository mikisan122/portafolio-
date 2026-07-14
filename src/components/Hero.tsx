import { motion } from 'motion/react';
import { ArrowRight, Download, Terminal, Network, ShieldAlert } from 'lucide-react';

export default function Hero() {
  
  // Custom interactive CV downloader function
  const handleDownloadCV = () => {
    const cvText = `========================================================
MIGUEL SÁNCHEZ | PORTAFOLIO PROFESIONAL
Estudiante de Ingeniería en Software & Desarrollador Full Stack
Contacto: plantillas.ms@gmail.com
Sitio Web: https://miguelsanchez.dev
========================================================

SOBRE MÍ
--------------------------------------------------------
Estudiante de Ingeniería de Software apasionado por la creación de
sistemas rápidos, intuitivos y eficientes. Especializado en el desarrollo
Full Stack utilizando tecnologías modernas como React, Node.js,
TypeScript y bases de datos relacionales y NoSQL. Inspirado en tejer
soluciones de código optimizadas con la agilidad y precisión de una red.

EDUCACIÓN
--------------------------------------------------------
Ingeniería de Software (Universidad Politécnica) | 2022 - Presente
- Promedio académico sobresaliente (9.0/10)
- Líder de la sociedad de desarrollo de software

TECNOLOGÍAS PRINCIPALES
--------------------------------------------------------
- Lenguajes: JavaScript (ES6+), TypeScript, Python, Go, SQL (PostgreSQL)
- Frontend: React, Next.js, Tailwind CSS, Framer Motion, HTML5, CSS3
- Backend: Node.js, Express, Fastify, RESTful APIs, GraphQL
- Herramientas: Git, GitHub, Docker, Redis, MongoDB, Linux / Bash, Vite

PROYECTOS DESTACADOS
--------------------------------------------------------
1. Spider Crawler Search Engine (Node.js, TypeScript, Redis)
   - Rastreador web asíncrono asombrosamente rápido con mapeo interactivo de nodos.
2. SilkRoute API Gateway (Go, gRPC, Redis, React)
   - Gateway con limitación de tasa integrada y analíticas en tiempo real.
3. NeuroWeb Grid Visualizer (React, D3.js, TensorFlow.js)
   - Modelador interactivo 2D/3D de flujos de datos y conexiones sinápticas.

========================================================
¡Gracias por descargar mi CV! Hagamos algo increíble juntos.
========================================================`;

    const blob = new Blob([cvText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'CV_Miguel_Sanchez_Desarrollador.txt');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section 
      id="inicio" 
      className="relative min-h-screen flex items-center justify-center pt-24 px-6 overflow-hidden web-grid"
    >
      {/* Background circular red glow effects (arachnid energy source) */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] md:w-[500px] h-[350px] md:h-[500px] rounded-full bg-brand-red/10 blur-[80px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[300px] md:w-[450px] h-[300px] md:h-[450px] rounded-full bg-brand-red/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center z-10 py-12">
        
        {/* Left Column: Copywriting & Actions */}
        <div className="lg:col-span-7 space-y-8 flex flex-col justify-center">
          
          {/* Arachnid high-tech tagline */}
          <motion.div 
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-brand-red/30 bg-brand-red/5 w-fit"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-red opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-red"></span>
            </span>
            <span className="font-mono text-xs text-brand-red tracking-widest uppercase font-semibold">
              SISTEMAS ÁGILES • DISEÑO CINEMÁTICO
            </span>
          </motion.div>

          <div className="space-y-4">
            <motion.h3 
              className="font-mono text-sm tracking-widest text-brand-muted"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              HOLA, MI NOMBRE ES
            </motion.h3>

            <motion.h1 
              className="font-display font-bold text-5xl sm:text-6xl md:text-7xl tracking-tight text-white leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7, type: 'spring', stiffness: 100 }}
            >
              Miguel Sánchez<span className="text-brand-red text-glow-red">.</span>
            </motion.h1>

            <motion.div 
              className="space-y-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-medium text-brand-red">
                Estudiante de Ingeniería en Software
              </h2>
              <div className="flex items-center gap-2">
                <Terminal className="w-5 h-5 text-brand-muted shrink-0" />
                <p className="font-mono text-sm sm:text-base text-white/80">
                  Desarrollador <span className="text-white font-bold border-b-2 border-brand-red/40 animate-pulse">Full Stack Jr.</span>
                </p>
              </div>
            </motion.div>
          </div>

          <motion.p 
            className="font-sans text-base sm:text-lg text-brand-muted max-w-xl leading-relaxed font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            Soy estudiante de Ingeniería en Software apasionado por crear aplicaciones web modernas, desarrollar soluciones completas y seguir aprendiendo nuevas tecnologías. Me gusta trabajar tanto en el frontend como en el backend y construir proyectos que resuelvan problemas reales.
          </motion.p>

          {/* Call to action buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 pt-4"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            {/* Direct Projects Link */}
            <a 
              href="#proyectos" 
              className="group relative inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-brand-red rounded border border-transparent font-display text-sm font-bold tracking-widest text-white uppercase overflow-hidden shadow-[0_4px_20px_rgba(217,4,41,0.3)] transition-all duration-300 hover:bg-brand-red hover:shadow-[0_0_25px_#D90429] hover:scale-105 active:scale-95"
            >
              <span>Ver proyectos</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
            </a>

            {/* Custom Interactive Resume Downloader */}
            <button 
              onClick={handleDownloadCV}
              className="group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-brand-black rounded border border-white/10 font-display text-sm font-bold tracking-widest text-white uppercase overflow-hidden transition-all duration-300 hover:border-brand-red hover:bg-brand-red/5 hover:scale-105 active:scale-95"
            >
              <span>Descargar CV</span>
              <Download className="w-4 h-4 text-brand-red group-hover:scale-110 transition-transform duration-300" />
            </button>
          </motion.div>

          {/* Quick social statistics or properties */}
          <motion.div 
            className="grid grid-cols-3 gap-6 pt-8 border-t border-white/5 max-w-md font-mono"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <div>
              <span className="block text-xl sm:text-2xl font-bold text-white tracking-tight">9.0</span>
              <span className="text-[10px] tracking-wider text-brand-muted uppercase">Promedio Académico</span>
            </div>
            <div>
              <span className="block text-xl sm:text-2xl font-bold text-brand-red text-glow-red">10+</span>
              <span className="text-[10px] tracking-wider text-brand-muted uppercase">Sistemas Creados</span>
            </div>
            <div>
              <span className="block text-xl sm:text-2xl font-bold text-white tracking-tight">3</span>
              <span className="text-[10px] tracking-wider text-brand-muted uppercase">Años de Código</span>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Dynamic Geometry Web Photograph frame */}
        <div className="lg:col-span-5 flex items-center justify-center relative py-12">
          <motion.div 
            className="relative w-[280px] sm:w-[320px] h-[280px] sm:h-[320px] border-2 border-brand-red flex items-center justify-center transform rotate-45 group hover:bg-brand-red/5 transition-all duration-500 shadow-[0_0_30px_rgba(217,4,41,0.15)]"
            initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
            animate={{ opacity: 1, scale: 1, rotate: 45 }}
            transition={{ delay: 0.3, duration: 0.8, type: 'spring', damping: 20 }}
          >
            {/* Concentric subtle decorative frames */}
            <div className="absolute inset-2 border border-white/10 pointer-events-none" />
            <div className="absolute inset-4 border border-dashed border-brand-red/20 pointer-events-none" />
            
            {/* Outer corner marks */}
            <div className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-brand-red pointer-events-none" />
            <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 bg-brand-red pointer-events-none" />
            <div className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-white pointer-events-none" />
            <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 bg-white pointer-events-none" />

            {/* Inner text content, rotated back to 0 degrees */}
            <div className="transform -rotate-45 text-center select-none space-y-4 px-6 z-10">
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="w-14 h-14 mx-auto rounded-full bg-brand-red/10 border border-brand-red/30 flex items-center justify-center shadow-[0_0_15px_rgba(217,4,41,0.1)]"
              >
                <Network className="w-7 h-7 text-brand-red" />
              </motion.div>
              
              <div>
                <h2 className="font-display font-black text-4xl sm:text-5xl text-white tracking-tighter">
                  MIGUEL
                </h2>
                <p className="font-mono text-xs text-brand-red uppercase tracking-widest font-semibold mt-1">
                  DESARROLLADOR
                </p>
              </div>

              <p className="font-mono text-[9px] text-brand-muted leading-relaxed max-w-[180px] mx-auto">
                SISTEMAS ESTRUCTURADOS • PORTFOLIO INTERACTIVO v.24
              </p>

              <div className="inline-flex items-center gap-1.5 px-2 py-1 bg-white/5 border border-white/5 rounded text-[8px] font-mono text-white/60">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-red animate-pulse" />
                <span>READY TO SHIP</span>
              </div>
            </div>

            {/* Scanning line */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-white opacity-40 pointer-events-none" style={{
              animation: 'scan 4s linear infinite'
            }} />
          </motion.div>
        </div>
      </div>

      {/* Styled background transition mask */}
      <div className="absolute bottom-0 left-0 w-full h-24 cinematic-gradient-bottom pointer-events-none" />
    </section>
  );
}
