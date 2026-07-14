import { motion, AnimatePresence } from 'motion/react';
import { projectsData } from '../data/projects';
import { Calendar, Tag, Sparkles } from 'lucide-react';
import { Project } from '../types';

export default function Projects() {
  return (
    <section 
      id="proyectos" 
      className="relative min-h-screen py-24 px-6 bg-brand-dark/40 border-t border-b border-white/5 overflow-hidden"
    >
      {/* Background glowing meshes */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[450px] h-[450px] rounded-full bg-brand-red/[0.04] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-12 left-12 w-[350px] h-[350px] rounded-full bg-brand-red/[0.03] blur-[90px] pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto space-y-16 z-10 relative">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-3">
            <div className="w-8 h-[1px] bg-brand-red" />
            <span className="font-mono text-sm text-brand-red tracking-widest uppercase font-semibold">PORTFOLIO</span>
            <div className="w-8 h-[1px] bg-brand-red" />
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
            Proyectos Destacados y<br />
            <span className="text-brand-red text-glow-red font-extrabold">Soluciones en Funcionamiento</span>
          </h2>
          <p className="font-sans text-brand-muted text-base leading-relaxed font-light">
            Estructuras de software robustas, diseñadas con precisión y preparadas para escalar de forma sostenible.
          </p>
        </div>

        {/* Dynamic Interactive Grid with AnimatePresence Layout */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {projectsData.map((project: Project) => {
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  key={project.id}
                  className="interactive-card group relative rounded-none bg-brand-gray border-2 border-white/5 overflow-hidden flex flex-col justify-between shadow-[0_15px_30px_rgba(0,0,0,0.6)] hover:border-brand-red/40 hover:shadow-[0_0_20px_rgba(217,4,41,0.15)] transition-all duration-300"
                >
                  {/* Card Visual Header: Zoom Image Overlay */}
                  <div className="relative h-48 w-full overflow-hidden bg-brand-black">
                    <img 
                      src={project.imagen} 
                      alt={project.nombre}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:opacity-40"
                    />
                    
                    {/* Dark gradient slide-up mask */}
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-gray via-transparent to-transparent opacity-80" />

                    {/* Category Label Overlay */}
                    <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1 bg-brand-black/85 backdrop-blur-md rounded-none border border-white/10">
                      <Tag className="w-3 h-3 text-brand-red" />
                      <span className="font-mono text-[9px] text-white tracking-widest uppercase">{project.categoria}</span>
                    </div>

                    {/* Featured Star Indicator */}
                    {project.featured && (
                      <div className="absolute top-4 right-4 p-1.5 bg-brand-red rounded-none shadow-[0_0_8px_#D90429] border border-white/20">
                        <Sparkles className="w-3.5 h-3.5 text-white animate-pulse" />
                      </div>
                    )}
                  </div>

                  {/* Card Main Information Body */}
                  <div className="p-6 space-y-4 flex-1 flex flex-col justify-between z-10 bg-brand-gray">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-brand-muted text-[10px] font-mono">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{project.fecha}</span>
                      </div>
                      
                      <h3 className="font-display font-bold text-lg text-white group-hover:text-brand-red transition-colors duration-300">
                        {project.nombre}
                      </h3>
                      
                      <p className="font-sans text-xs text-brand-muted leading-relaxed font-light mb-3">
                        {project.descripcion}
                      </p>

                      {project.funciones && project.funciones.length > 0 && (
                        <div className="mt-3.5 space-y-2 pt-3 border-t border-white/5">
                          <p className="font-mono text-[9px] text-brand-red uppercase tracking-wider font-semibold">Funcionalidades:</p>
                          <ul className="grid grid-cols-1 gap-1.5">
                            {project.funciones.map((func, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-[11px] font-sans text-brand-muted font-light leading-snug">
                                <span className="w-1.5 h-1.5 bg-brand-red transform rotate-45 shrink-0 mt-1" />
                                <span>{func}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>

                    {/* Dynamic Technologies Pills list */}
                    <div className="space-y-4 pt-4 border-t border-white/5">
                      <div className="flex flex-wrap gap-1.5">
                        {project.tecnologias.map((tech, i) => (
                          <span 
                            key={i} 
                            className="px-2 py-0.5 rounded-none bg-brand-black text-[9px] font-mono text-white border border-white/5 group-hover:border-brand-red/25 transition-colors duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Corner styling elements */}
                  <div className="absolute bottom-0 right-0 w-2 h-2 bg-brand-red opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Dynamic pagination / message block */}
        <div className="text-center font-mono text-xs text-brand-muted pt-8">
          <span>PÁGINA 1 DE 1 • TOTAL {projectsData.length} PROYECTOS CARGADOS DESDE DATA OBJECTS</span>
        </div>

      </div>

      <div className="absolute bottom-0 left-0 w-full h-24 cinematic-gradient-bottom pointer-events-none" />
    </section>
  );
}
