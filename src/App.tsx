import { useEffect, useState } from 'react';
import CustomCursor from './components/CustomCursor';
import ParticleBackground from './components/ParticleBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ExperienceTimeline from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('inicio');

  // Multi-section Intersection Observer for automatic active nav updates
  useEffect(() => {
    const sections = ['inicio', 'sobre-mi', 'habilidades', 'proyectos', 'experiencia', 'contacto'];
    const observers = sections.map((id) => {
      const element = document.getElementById(id);
      if (!element) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            // If the section is largely in viewport, mark it active
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          });
        },
        {
          // Adjust root margin depending on screen height for better accuracy
          rootMargin: '-30% 0px -40% 0px',
          threshold: 0.1,
        }
      );

      observer.observe(element);
      return { observer, element };
    });

    return () => {
      observers.forEach((obs) => {
        if (obs) {
          obs.observer.unobserve(obs.element);
        }
      });
    };
  }, []);

  return (
    <div className="relative min-h-screen text-white select-none selection:bg-brand-red selection:text-white">
      
      {/* Precision Custom Mouse Cursor Follower (Pointer devices only) */}
      <CustomCursor />

      {/* Optimized Spider-Web Particle Connection Background (HTML5 Canvas) */}
      <ParticleBackground />

      {/* Global Navigation Header with Integrated Scroll Progress Indicator */}
      <Navbar activeSection={activeSection} />

      {/* Main Single Page High-Fidelity Sequence */}
      <main className="relative z-10 w-full overflow-hidden">
        
        {/* Fullscreen Cinematic Entry (Hero) */}
        <Hero />

        {/* Storytelling Narrative Column Block (Sobre Mí) */}
        <AboutMe />

        {/* Bento Grid Dynamic Toolkit layout (Habilidades) */}
        <Skills />

        {/* Category-Filtered Grid Showcase (Proyectos) */}
        <Projects />

        {/* Vertical Pipeline Checkpoints (Experiencia) */}
        <ExperienceTimeline />

        {/* Interactive Glowing Entry Gate (Contacto) */}
        <Contact />

      </main>

      {/* Minimalist Footing Coordinates and Floating Return Button */}
      <Footer />
    </div>
  );
}
