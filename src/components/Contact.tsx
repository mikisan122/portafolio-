import { Mail, MapPin, Github } from 'lucide-react';

export default function Contact() {
  return (
    <section 
      id="contacto" 
      className="relative min-h-[70vh] flex items-center justify-center py-24 px-6 bg-brand-dark/40 border-t border-white/5 overflow-hidden"
    >
      {/* Background glowing red circles */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-brand-red/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-3xl w-full mx-auto space-y-12 z-10 relative">
        
        {/* Title block */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-3">
            <div className="w-8 h-[1px] bg-brand-red" />
            <span className="font-mono text-sm text-brand-red tracking-widest uppercase font-semibold">CONTACTO</span>
            <div className="w-8 h-[1px] bg-brand-red" />
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
            ¿Iniciamos una Nueva<br />
            <span className="text-brand-red text-glow-red font-extrabold">Conexión de Proyecto?</span>
          </h2>
          <p className="font-sans text-brand-muted text-base leading-relaxed font-light">
            Estoy listo para tejer soluciones de código ágiles. Contáctame directamente por correo electrónico.
          </p>
        </div>

        {/* Center Contact Card */}
        <div className="max-w-xl mx-auto">
          <div className="p-6 sm:p-8 bg-brand-gray border-2 border-white/5 shadow-[0_20px_45px_rgba(0,0,0,0.7)] relative overflow-hidden space-y-8">
            
            {/* Geometric detail corners */}
            <div className="absolute top-0 right-0 w-16 h-[1px] bg-brand-red/40" />
            <div className="absolute top-0 right-0 w-[1px] h-16 bg-brand-red/40" />
            <div className="absolute bottom-0 left-0 w-16 h-[1px] bg-brand-red/40" />
            <div className="absolute bottom-0 left-0 w-[1px] h-16 bg-brand-red/40" />

            <div className="space-y-2 text-center sm:text-left">
              <h3 className="font-display text-xl font-bold text-white tracking-wider">
                INFORMACIÓN DE CONTACTO
              </h3>
              <p className="font-sans text-sm text-brand-muted font-light leading-relaxed">
                ¿Tienes una propuesta de proyecto, vacante o quieres colaborar? Escríbeme y hagamos algo genial juntos.
              </p>
            </div>

            {/* Contact coordinates list */}
            <div className="space-y-4">
              
              {/* Direct email card */}
              <a 
                href="mailto:plantillas.ms@gmail.com"
                className="flex flex-col sm:flex-row sm:items-center gap-4 p-4 border-2 border-white/5 bg-brand-black/40 hover:border-brand-red/40 hover:bg-brand-gray/70 hover:shadow-[0_0_15px_rgba(217,4,41,0.1)] transition-all duration-300 group text-left"
              >
                <div className="w-10 h-10 border border-white/10 bg-white/5 flex items-center justify-center text-brand-red shrink-0 group-hover:border-brand-red group-hover:bg-brand-red/5 transition-colors duration-300 mx-auto sm:mx-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="block font-mono text-[9px] text-brand-muted uppercase tracking-wider text-center sm:text-left">CORREO DIRECTO</span>
                  <span className="text-sm font-medium text-white group-hover:text-brand-red transition-colors duration-200 block text-center sm:text-left">plantillas.ms@gmail.com</span>
                </div>
              </a>

              {/* Location card */}
              <div 
                className="flex flex-col sm:flex-row sm:items-center gap-4 p-4 border-2 border-white/5 bg-brand-black/40 hover:border-brand-red/20 transition-all duration-300 text-left"
              >
                <div className="w-10 h-10 border border-white/10 bg-white/5 flex items-center justify-center text-brand-red shrink-0 mx-auto sm:mx-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="block font-mono text-[9px] text-brand-muted uppercase tracking-wider text-center sm:text-left">RESIDENCIA</span>
                  <span className="text-sm font-medium text-white block text-center sm:text-left">Hispanoamérica / Remoto</span>
                </div>
              </div>

            </div>

            {/* Social profiles */}
            <div className="space-y-3 pt-6 border-t border-white/5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <span className="block font-mono text-[10px] text-brand-muted uppercase tracking-wider text-center sm:text-left">Nodos Sociales</span>
              </div>
              <div className="flex justify-center sm:justify-end">
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-none border border-white/10 bg-brand-black hover:border-brand-red hover:text-white text-brand-muted transition-all duration-300 text-xs font-mono"
                >
                  <Github className="w-4 h-4 text-brand-red" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>

      <div className="absolute bottom-0 left-0 w-full h-24 cinematic-gradient-bottom pointer-events-none" />
    </section>
  );
}
