import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { experienceData } from '../data/experience';
import { Briefcase, GraduationCap, Trophy, Calendar, CheckSquare, ListFilter } from 'lucide-react';
import { Experience } from '../types';

export default function ExperienceTimeline() {
  const [filter, setFilter] = useState<'all' | 'work' | 'education' | 'achievement'>('all');

  const filteredData = filter === 'all' 
    ? experienceData 
    : experienceData.filter(item => item.tipo === filter);

  // Helper to resolve appropriate milestone icon
  const getIcon = (type: 'education' | 'work' | 'achievement') => {
    switch (type) {
      case 'work': return Briefcase;
      case 'education': return GraduationCap;
      case 'achievement': return Trophy;
      default: return Briefcase;
    }
  };

  // Helper to resolve icon color classes
  const getIconColors = (type: 'education' | 'work' | 'achievement') => {
    switch (type) {
      case 'work': return 'text-brand-red border-brand-red/30 bg-brand-red/5';
      case 'education': return 'text-white border-white/20 bg-white/5';
      case 'achievement': return 'text-brand-red border-brand-red/40 bg-brand-red/10 shadow-[0_0_12px_rgba(217,4,41,0.2)]';
      default: return 'text-white';
    }
  };

  return (
    <section 
      id="experiencia" 
      className="relative min-h-screen py-24 px-6 web-grid"
    >
      <div className="max-w-7xl w-full mx-auto space-y-16 z-10 relative">
        
        {/* Section Title */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-3">
            <div className="w-8 h-[1px] bg-brand-red" />
            <span className="font-mono text-sm text-brand-red tracking-widest uppercase font-semibold">TRAYECTORIA</span>
            <div className="w-8 h-[1px] bg-brand-red" />
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
            Mi Camino en la<br />
            <span className="text-brand-red text-glow-red font-extrabold">Ingeniería & Código</span>
          </h2>
          <p className="font-sans text-brand-muted text-base leading-relaxed font-light">
            Experiencias académicas, retos profesionales y metas cumplidas organizados cronológicamente.
          </p>
        </div>

        {/* Filters Menu for Timeline */}
        <div className="flex flex-wrap justify-center gap-2 max-w-xl mx-auto border-b border-white/5 pb-6">
          {[
            { value: 'all', label: 'Todos' },
            { value: 'work', label: 'Trabajo' },
            { value: 'education', label: 'Educación' },
            { value: 'achievement', label: 'Logros' }
          ].map((btn) => {
            const isSelected = filter === btn.value;
            return (
              <button
                key={btn.value}
                onClick={() => setFilter(btn.value as any)}
                className={`relative px-4 py-1.5 rounded font-mono text-[11px] tracking-wider uppercase transition-all duration-300 ${
                  isSelected 
                    ? 'text-white font-semibold' 
                    : 'text-brand-muted hover:text-white bg-white/[0.01] border border-white/5'
                }`}
              >
                <span className="relative z-10">{btn.label}</span>
                {isSelected && (
                  <motion.div
                    layoutId="activeTimelineFilter"
                    className="absolute inset-0 bg-brand-red/10 border-b-2 border-brand-red rounded-t shadow-[0_4px_10px_rgba(217,4,41,0.15)]"
                    transition={{ type: 'spring', stiffness: 400, damping: 28 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Timeline Grid Container */}
        <div className="relative max-w-4xl mx-auto pt-6">
          
          {/* Main timeline backbone thread line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-brand-red/5 via-brand-red/40 to-brand-red/5 -translate-x-1/2 pointer-events-none hidden md:block" />
          <div className="absolute left-6 top-0 bottom-0 w-[1px] bg-brand-red/30 pointer-events-none md:hidden" />

          {/* Timeline Nodes */}
          <div className="space-y-12 relative">
            <AnimatePresence mode="popLayout">
              {filteredData.map((item: Experience, idx: number) => {
                const IconComponent = getIcon(item.tipo);
                const isEven = idx % 2 === 0;

                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    className={`flex flex-col md:flex-row relative ${
                      isEven ? 'md:flex-row-reverse' : ''
                    }`}
                  >
                    
                    {/* Rotated Square Node Indicator centered on track */}
                    <div className="absolute left-6 md:left-1/2 w-8 h-8 border-2 border-brand-red/40 bg-brand-black flex items-center justify-center -translate-x-1/2 z-10 transform rotate-45 hover:border-brand-red hover:bg-brand-red/10 transition-all duration-300">
                      <div className="transform -rotate-45 flex items-center justify-center">
                        <IconComponent className="w-3.5 h-3.5 text-brand-red" />
                      </div>
                    </div>

                    {/* Timeline spacing placeholder for alternate grid alignment on desktop */}
                    <div className="w-full md:w-1/2 hidden md:block" />

                    {/* Milestone Information Card */}
                    <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8">
                      <motion.div
                        className="p-6 rounded-none bg-brand-gray border-2 border-white/5 hover:border-brand-red/40 hover:bg-brand-gray/50 transition-all duration-300 shadow-[0_10px_25px_rgba(0,0,0,0.5)] space-y-4 group relative"
                        whileHover={{ y: -3 }}
                      >
                        {/* Header metadata */}
                        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/5 pb-3">
                          <div>
                            <span className="font-mono text-[9px] tracking-widest text-brand-red uppercase font-bold bg-brand-red/5 border border-brand-red/20 px-2 py-0.5 rounded">
                              {item.tipo === 'work' ? 'TRABAJO' : item.tipo === 'education' ? 'EDUCACIÓN' : 'LOGRO'}
                            </span>
                            <h3 className="font-display font-bold text-base text-white mt-1.5 group-hover:text-brand-red transition-colors duration-300">
                              {item.rol}
                            </h3>
                            <p className="font-sans text-xs text-brand-muted mt-0.5 font-light">
                              {item.entidad}
                            </p>
                          </div>
                          
                          <div className="flex items-center gap-1.5 font-mono text-[10px] text-brand-muted bg-white/5 border border-white/5 px-2.5 py-1 rounded">
                            <Calendar className="w-3.5 h-3.5 text-brand-red" />
                            <span>{item.periodo}</span>
                          </div>
                        </div>

                        {/* Description points list */}
                        <ul className="space-y-2.5 font-sans text-xs text-brand-muted leading-relaxed font-light">
                          {item.descripcion.map((bullet, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <CheckSquare className="w-4 h-4 text-brand-red/70 mt-0.5 shrink-0" />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Associated technologies block */}
                        {item.tecnologias && item.tecnologias.length > 0 && (
                          <div className="pt-3 border-t border-white/5 flex flex-wrap gap-1">
                            {item.tecnologias.map((tech, i) => (
                              <span
                                key={i}
                                className="px-1.5 py-0.5 rounded bg-brand-black border border-white/5 font-mono text-[8.5px] text-white/85"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        )}
                      </motion.div>
                    </div>

                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

        </div>

        {/* High-tech spider vector thread connection marker */}
        <div className="max-w-md mx-auto pt-4 flex flex-col items-center justify-center text-center font-mono text-[10px] text-brand-muted">
          <div className="w-[1px] h-12 bg-brand-red/30 mb-2" />
          <span>FIN DE LA SECUENCIA DE HITOS</span>
        </div>

      </div>

      <div className="absolute bottom-0 left-0 w-full h-24 cinematic-gradient-bottom pointer-events-none" />
    </section>
  );
}
