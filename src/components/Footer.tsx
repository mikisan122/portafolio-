import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUp, Github, Mail } from 'lucide-react';

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Monitor scroll height to show/hide the back-to-top button
  useEffect(() => {
    const checkScrollHeight = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', checkScrollHeight);
    return () => window.removeEventListener('scroll', checkScrollHeight);
  }, []);

  // Back to top click handler
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="relative bg-brand-black border-t border-white/5 py-12 px-6 overflow-hidden">
        
        {/* Subtle red mesh overlay */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-brand-red/[0.03] blur-[70px] pointer-events-none" />

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 z-10 relative">
          
          {/* Logo brand representation */}
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 border border-brand-red/40 bg-brand-red/5 flex items-center justify-center transform rotate-45">
              <span className="-rotate-45 font-black text-white text-[10px]">MS</span>
            </div>
            <span className="font-display font-semibold text-sm tracking-widest text-white uppercase">
              MIGUEL<span className="text-brand-red">.</span>SÁNCHEZ
            </span>
          </div>

          {/* Copyright description */}
          <div className="text-center font-sans text-xs text-brand-muted font-light leading-relaxed">
            <p>© {currentYear} Miguel Sánchez. Todos los derechos reservados.</p>
            <p className="text-[10px] text-brand-muted/70 mt-1 font-mono">
              Diseñado & Programado con Pasión, React, Vite y Tailwind CSS v4.
            </p>
          </div>

          {/* Social connection nodes */}
          <div className="flex items-center gap-3">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-none bg-white/5 border border-white/5 flex items-center justify-center text-brand-muted hover:text-white hover:border-brand-red hover:shadow-[0_0_8px_rgba(217,4,41,0.3)] transition-all duration-300"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a 
              href="mailto:plantillas.ms@gmail.com"
              className="w-8 h-8 rounded-none bg-white/5 border border-white/5 flex items-center justify-center text-brand-muted hover:text-brand-red hover:border-brand-red hover:shadow-[0_0_8px_rgba(217,4,41,0.3)] transition-all duration-300"
              aria-label="Direct Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

        </div>
      </footer>

      {/* Floating Back To Top Spring Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ scale: 0, opacity: 0, y: 30, rotate: 0 }}
            animate={{ scale: 1, opacity: 1, y: 0, rotate: 45 }}
            exit={{ scale: 0, opacity: 0, y: 30, rotate: 0 }}
            whileHover={{ 
              scale: 1.15,
              backgroundColor: '#D90429'
            }}
            whileTap={{ scale: 0.9 }}
            onClick={handleScrollToTop}
            className="fixed bottom-6 right-6 w-10 h-10 border-2 border-brand-red text-white bg-brand-black flex items-center justify-center z-50 cursor-pointer shadow-[0_4px_15px_rgba(0,0,0,0.6)]"
            aria-label="Volver arriba"
          >
            <div className="transform -rotate-45 flex items-center justify-center">
              <ArrowUp className="w-5 h-5" />
            </div>
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
