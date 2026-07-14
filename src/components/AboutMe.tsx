import { motion } from 'motion/react';
import { User, MapPin, GraduationCap, Cpu, Zap, Eye, Code, Layers } from 'lucide-react';

export default function AboutMe() {
  const quickFacts = [
    { icon: MapPin, label: 'Ubicación', value: 'Hispanoamérica / Remoto' },
    { icon: GraduationCap, label: 'Formación', value: 'Ingeniería en Software' },
    { icon: Zap, label: 'Disponibilidad', value: 'Proyectos & Prácticas' },
    { icon: Eye, label: 'Enfoque', value: 'UI/UX & Arquitectura Asíncrona' }
  ];

  const corePillars = [
    {
      title: 'Agilidad Extrema',
      desc: 'Código fluido que corre sin fricciones. Optimización del bundle y tiempos de carga instantáneos.',
      icon: Zap,
    },
    {
      title: 'Arquitectura Interconectada',
      desc: 'Servicios modulares que cooperan en armonía como una red asíncrona perfecta y altamente segura.',
      icon: Layers,
    },
    {
      title: 'Diseño Sensorial',
      desc: 'Interfaces vivas, fluidas y memorables. Cada interacción se siente precisa y cinematográfica.',
      icon: Eye,
    }
  ];

  return (
    <section 
      id="sobre-mi" 
      className="relative min-h-screen flex items-center justify-center py-24 px-6 bg-brand-dark/40 border-t border-b border-white/5 overflow-hidden"
    >
      {/* Spider thread vector background graphic */}
      <svg className="absolute inset-0 w-full h-full text-brand-red/[0.015] pointer-events-none z-0" xmlns="http://www.w3.org/2000/svg">
        <path d="M0,0 Q300,500 1200,100" fill="none" stroke="currentColor" strokeWidth="1" />
        <path d="M0,800 Q400,200 1200,900" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="5 5" />
      </svg>

      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center z-10">
        
        {/* Left Column: Photograph Frame & Visual Node Grid */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
          
          {/* Animated red background glow for balance */}
          <div className="absolute w-[280px] h-[280px] bg-brand-red/5 blur-[50px] pointer-events-none" />
          
          <motion.div 
            className="relative w-72 sm:w-80 h-96 bg-brand-gray border-2 border-white/10 overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.9)] group/about-photo"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            {/* Interactive Background Grid */}
            <div className="absolute inset-0 bg-[radial-gradient(#1c1c1c_1px,transparent_1px)] [background-size:16px_16px] opacity-40 pointer-events-none" />

            {/* Futuristic Tech Blueprint */}
            <div className="absolute inset-0 bg-brand-black/95 p-6 flex flex-col justify-between border border-brand-red/15 m-2">
              
              <div className="flex justify-between items-start">
                <div className="font-mono text-[9px] text-brand-muted">
                  SYSTEM: ONLINE<br />
                  NODE_ID: 896d770d
                </div>
                <div className="w-2.5 h-2.5 bg-brand-red animate-ping" />
              </div>

              {/* Geometric logo placeholder */}
              <div className="flex flex-col items-center justify-center flex-1">
                <div className="relative w-36 h-36 mb-4 flex items-center justify-center">
                  {/* Concentric rotating geometric boxes */}
                  <motion.div 
                    className="absolute inset-0 border border-brand-red/40 transform rotate-45"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                  />
                  <motion.div 
                    className="absolute inset-2 border border-white/15 transform -rotate-45"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  />
                  <div className="w-[100px] h-[100px] overflow-hidden border border-brand-red/30 z-10 relative bg-brand-black flex items-center justify-center">
                    <img 
                      src="/src/assets/images/tech_developer_avatar_1783738387726.jpg" 
                      alt="Avatar de Miguel" 
                      className="w-full h-full object-cover grayscale opacity-90 group-hover/about-photo:grayscale-0 group-hover/about-photo:opacity-100 transition-all duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
                
                <span className="font-mono text-[9px] text-brand-muted mt-4 uppercase tracking-widest">
                  ID: MIGUEL_SANCHEZ
                </span>
              </div>

              {/* Technical status lines */}
              <div className="space-y-1.5 font-mono text-[9px] text-brand-muted">
                <div className="flex justify-between">
                  <span>VELOCIDAD:</span>
                  <span className="text-white font-bold">100ms LCP</span>
                </div>
                <div className="w-full bg-white/5 h-1 overflow-hidden">
                  <motion.div 
                    className="h-full bg-brand-red"
                    animate={{ width: ["10%", "95%", "40%", "95%"] }}
                    transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                  />
                </div>
              </div>
            </div>

            {/* Corner crosshairs */}
            <div className="absolute top-4 left-4 w-5 h-5 border-t-2 border-l-2 border-brand-red/60" />
            <div className="absolute top-4 right-4 w-5 h-5 border-t-2 border-r-2 border-brand-red/60" />
            <div className="absolute bottom-4 left-4 w-5 h-5 border-b-2 border-l-2 border-brand-red/60" />
            <div className="absolute bottom-4 right-4 w-5 h-5 border-b-2 border-r-2 border-brand-red/60" />
          </motion.div>

          {/* Connected target labels mimicking design agility */}
          <div className="absolute top-1/4 -right-8 bg-brand-black border border-white/10 p-3 shadow-xl font-mono text-[10px] hidden sm:block">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-brand-red animate-pulse" />
              <span className="text-white font-medium">Full Stack Dev</span>
            </div>
          </div>
          
          <div className="absolute bottom-1/4 -left-8 bg-brand-black border border-white/10 p-3 shadow-xl font-mono text-[10px] hidden sm:block">
            <div className="flex items-center gap-2">
              <Code className="w-3.5 h-3.5 text-brand-red" />
              <span className="text-white font-medium">Ingeniería en Software</span>
            </div>
          </div>
        </div>

        {/* Right Column: Information & Pillars */}
        <div className="lg:col-span-7 space-y-8">
          
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-[1px] bg-brand-red" />
              <span className="font-mono text-sm text-brand-red tracking-widest uppercase font-semibold">SOBRE MÍ</span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight leading-tight">
              Diseño Código Ágil para el<br />
              <span className="text-brand-red text-glow-red">Ecosistema Digital Interconectado</span>
            </h2>
          </div>

          <div className="space-y-4 font-sans text-brand-muted text-base leading-relaxed font-light">
            <p>
              Soy un desarrollador apasionado por resolver problemas complejos mediante soluciones elegantes, limpias y eficientes. Mi trayectoria en la <span className="text-white font-medium">Ingeniería en Software</span> me ha dotado de una sólida comprensión de las estructuras de datos, la algoritmia y los principios arquitectónicos que garantizan que el software pueda crecer de forma sostenible.
            </p>
            <p>
              Me fascina el desarrollo full-stack, donde puedo dar forma tanto a APIs backend asíncronas de alta velocidad como a interfaces web altamente dinámicas e inmersivas en el frontend. Al igual que una red arácnida, considero que cada línea de código debe tener un propósito estructural claro y cooperar simbióticamente para sostener el peso de la aplicación.
            </p>
          </div>

          {/* Quick Facts Grid */}
          <div className="grid grid-cols-2 md:grid-cols-2 gap-4 max-w-xl">
            {quickFacts.map((fact, i) => {
              const Icon = fact.icon;
              return (
                <motion.div 
                  key={i}
                  className="flex items-center gap-3 p-3 rounded-xl border border-white/5 bg-brand-gray/30 hover:border-brand-red/20 hover:bg-brand-gray/50 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center justify-center w-9 h-9 rounded-lg border border-white/10 bg-white/5 text-brand-red shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-mono text-brand-muted uppercase tracking-wider">{fact.label}</span>
                    <span className="text-sm font-medium text-white">{fact.value}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Core Pillars */}
          <div className="space-y-4 pt-4 border-t border-white/5">
            <h3 className="font-display text-lg font-bold text-white tracking-wider">Mis Tres Pilares de Desarrollo</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {corePillars.map((pillar, i) => {
                const Icon = pillar.icon;
                return (
                  <div 
                    key={i} 
                    className="p-4 rounded-xl border border-white/5 bg-brand-black/60 relative overflow-hidden group/pillar hover:border-brand-red/30 transition-all duration-300"
                  >
                    <div className="absolute top-0 left-0 w-[2px] h-0 bg-brand-red group-hover/pillar:h-full transition-all duration-300" />
                    <Icon className="w-5 h-5 text-brand-red mb-3" />
                    <h4 className="font-display font-bold text-sm text-white mb-1.5 tracking-wide uppercase">{pillar.title}</h4>
                    <p className="font-sans text-xs text-brand-muted leading-relaxed font-light">{pillar.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

      </div>

      <div className="absolute bottom-0 left-0 w-full h-24 cinematic-gradient-bottom pointer-events-none" />
    </section>
  );
}
