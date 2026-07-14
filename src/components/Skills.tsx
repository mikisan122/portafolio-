import { motion } from 'motion/react';
import { skillsData } from '../data/skills';
import { Code, Layout, Server, Wrench, Shield, CheckCircle2 } from 'lucide-react';
import { Skill } from '../types';

export default function Skills() {
  
  // Categorize skill arrays
  const languages = skillsData.filter(s => s.category === 'languages');
  const frontend = skillsData.filter(s => s.category === 'frontend');
  const backend = skillsData.filter(s => s.category === 'backend');
  const tools = skillsData.filter(s => s.category === 'tools');

  const categories = [
    {
      title: 'Lenguajes de Programación',
      icon: Code,
      color: 'text-brand-red',
      borderColor: 'group-hover:border-brand-red/30',
      skills: languages,
      desc: 'Sintaxis y paradigmas que utilizo para estructurar la lógica.'
    },
    {
      title: 'Desarrollo Frontend',
      icon: Layout,
      color: 'text-white',
      borderColor: 'group-hover:border-white/20',
      skills: frontend,
      desc: 'Interfaces reactivas, fluidas y pixel-perfect con alto rendimiento.'
    },
    {
      title: 'Arquitectura Backend',
      icon: Server,
      color: 'text-brand-red',
      borderColor: 'group-hover:border-brand-red/30',
      skills: backend,
      desc: 'Servicios de alta disponibilidad, manejo de estado asíncrono y APIs.'
    },
    {
      title: 'Herramientas & DevOps',
      icon: Wrench,
      color: 'text-white',
      borderColor: 'group-hover:border-white/20',
      skills: tools,
      desc: 'Bases de datos, contenedores, optimización y flujos de trabajo.'
    }
  ];

  // Framer Motion container animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100, damping: 15 }
    }
  };

  return (
    <section 
      id="habilidades" 
      className="relative min-h-screen flex items-center justify-center py-24 px-6 web-grid"
    >
      <div className="max-w-7xl w-full mx-auto space-y-16 z-10">
        
        {/* Title block */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-3">
            <div className="w-8 h-[1px] bg-brand-red" />
            <span className="font-mono text-sm text-brand-red tracking-widest uppercase font-semibold">SKILLS & TOOLKIT</span>
            <div className="w-8 h-[1px] bg-brand-red" />
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
            Tecnologías que Utilizo para<br />
            <span className="text-brand-red text-glow-red font-extrabold">Tejer mis Creaciones</span>
          </h2>
          <p className="font-sans text-brand-muted text-base leading-relaxed font-light">
            Especializado en el ecosistema moderno de JavaScript y TypeScript, con experiencia sólida en el diseño de arquitecturas robustas y flujos de datos rápidos.
          </p>
        </div>

        {/* Bento Grid layout of skill categories */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                className="group relative p-6 rounded-none bg-brand-gray border-2 border-white/5 hover:border-brand-red/40 hover:bg-brand-gray/50 transition-all duration-300 shadow-[0_15px_30px_rgba(0,0,0,0.5)] flex flex-col justify-between"
              >
                {/* Floating category gradient index decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-red/5 rounded-full blur-2xl group-hover:bg-brand-red/10 transition-all duration-300 pointer-events-none" />

                <div className="space-y-6">
                  {/* Category Header */}
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-none border border-white/10 bg-brand-black flex items-center justify-center shrink-0 group-hover:border-brand-red/30 transition-colors duration-300 shadow-[0_4px_12px_rgba(0,0,0,0.5)]`}>
                      <Icon className={`w-5 h-5 ${cat.color}`} />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-lg text-white tracking-wide uppercase">{cat.title}</h3>
                      <p className="font-sans text-xs text-brand-muted font-light mt-0.5 leading-snug">{cat.desc}</p>
                    </div>
                  </div>

                  {/* Skills lists inside cards */}
                  <div className="space-y-4 pt-2 border-t border-white/5">
                    {cat.skills.map((skill: Skill, i: number) => (
                      <div key={i} className="space-y-1.5">
                        <div className="flex justify-between items-center text-xs font-mono">
                          <div className="flex items-center gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-brand-red/70 group-hover:text-brand-red transition-colors duration-300 shrink-0" />
                            <span className="text-white/90 group-hover:text-white font-medium">{skill.name}</span>
                          </div>
                          <span className="text-brand-muted group-hover:text-brand-red font-semibold transition-colors duration-300">{skill.level}%</span>
                        </div>
                        {/* Custom visual progress bar */}
                        <div className="w-full bg-brand-black h-[5px] rounded-none overflow-hidden border border-white/5">
                          <motion.div
                            className="h-full bg-brand-red rounded-none shadow-[0_0_8px_#D90429]"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, delay: i * 0.05, ease: 'easeOut' }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Micro tech indicators */}
                <div className="flex items-center justify-between font-mono text-[9px] text-brand-muted pt-6 mt-4 border-t border-white/5">
                  <span>SEC_VER_08</span>
                  <div className="flex gap-1.5">
                    <span className="w-1.5 h-1.5 bg-brand-red" />
                    <span className="w-1.5 h-1.5 bg-white/20" />
                    <span className="w-1.5 h-1.5 bg-white/20" />
                  </div>
                </div>

                {/* Dynamic red glowing accent corner line */}
                <div className="absolute top-0 left-0 w-8 h-[1px] bg-brand-red/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-0 left-0 w-[1px] h-8 bg-brand-red/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Dynamic spider thread overlay quote */}
        <div className="p-6 rounded-none border-2 border-brand-red/15 bg-brand-red/[0.02] text-center max-w-3xl mx-auto">
          <p className="font-mono text-xs text-brand-red uppercase tracking-widest font-semibold mb-1">PROTIP PARA EL RECLUTADOR</p>
          <p className="font-sans text-sm text-white/80 font-light leading-relaxed">
            "Este toolkit no es estático: gracias a las bases teóricas de la Ingeniería de Software, puedo adaptarme, aprender y dominar nuevas tecnologías o lenguajes en tiempo récord según los requerimientos del equipo."
          </p>
        </div>

      </div>

      <div className="absolute bottom-0 left-0 w-full h-24 cinematic-gradient-bottom pointer-events-none" />
    </section>
  );
}
