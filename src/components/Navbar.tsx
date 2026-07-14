import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Shield } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
}

export default function Navbar({ activeSection }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Monitor scroll progress & scroll states
  useEffect(() => {
    const handleScroll = () => {
      // Denser navbar on scroll
      setIsScrolled(window.scrollY > 20);

      // Scroll progress percentage calculation
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Precision Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-[3px] bg-brand-black z-50">
        <motion.div 
          className="h-full bg-brand-red shadow-[0_0_12px_#D90429]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <motion.header
        className={`fixed top-[3px] left-0 w-full z-40 transition-all duration-300 ${
          isScrolled 
            ? 'bg-brand-black/85 backdrop-blur-md border-b border-white/10 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.8)]' 
            : 'bg-transparent py-5'
        }`}
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Geometric spider logo */}
          <a href="#inicio" className="flex items-center gap-2.5 group">
            <div className="relative flex items-center justify-center w-9 h-9 rounded-lg border border-brand-red/40 bg-brand-red/5 group-hover:border-brand-red group-hover:bg-brand-red/10 transition-all duration-300">
              <Shield className="w-5 h-5 text-brand-red group-hover:scale-110 transition-transform duration-300" />
              {/* Subtle tech crosshairs */}
              <div className="absolute -top-1 -left-1 w-1.5 h-1.5 border-t border-l border-brand-red opacity-50 group-hover:opacity-100" />
              <div className="absolute -bottom-1 -right-1 w-1.5 h-1.5 border-b border-r border-brand-red opacity-50 group-hover:opacity-100" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-lg tracking-wider text-white group-hover:text-brand-red transition-colors duration-300">
                MIGUEL<span className="text-brand-red">.</span>S
              </span>
              <span className="font-mono text-[9px] tracking-widest text-brand-muted uppercase -mt-1 group-hover:text-white transition-colors duration-300">
                SOFTWARE ENG
              </span>
            </div>
          </a>

          {/* Desktop Nav Actions */}
          <div className="flex items-center">
            {/* Custom Action Call: Reclutador Highlight */}
            <a 
              href="mailto:plantillas.ms@gmail.com"
              className="px-5 py-2 rounded border border-brand-red bg-brand-red/10 text-white font-display text-xs font-bold tracking-widest uppercase transition-all duration-300 hover:bg-brand-red hover:shadow-[0_0_15px_#D90429] hover:scale-105 active:scale-95"
            >
              Contratar
            </a>
          </div>
        </div>
      </motion.header>
    </>
  );
}
