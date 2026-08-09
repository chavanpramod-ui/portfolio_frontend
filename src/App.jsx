import { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Awards from './components/Awards';
import Education from './components/Education';
import ProjectGallery from './components/ProjectGallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [theme, setTheme] = useState('light');
  const [activeSection, setActiveSection] = useState('hero');
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('light', theme === 'light');
  }, [theme]);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll('section[id]'));
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleSection?.target?.id) {
          setActiveSection(visibleSection.target.id);
        }
      },
      {
        rootMargin: '-40% 0px -55% 0px',
        threshold: [0.1, 0.25, 0.5],
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 320);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const animationObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    );

    const timeout = setTimeout(() => {
      const animatedElements = document.querySelectorAll('.fade-in-up, .pop-in');
      animatedElements.forEach((el) => animationObserver.observe(el));
    }, 100);

    return () => {
      clearTimeout(timeout);
      animationObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    let ticking = false;
    const handleParallax = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const sections = document.querySelectorAll('section[id]');
          sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            
            // Only apply parallax when section is scrolling up past the viewport top
            if (rect.top <= 0 && rect.bottom >= 0) {
              const progress = Math.abs(rect.top) / (window.innerHeight * 0.75);
              const clampedProgress = Math.min(1, Math.max(0, progress));
              
              // Scale down slightly to 0.92, fade opacity, and translate down to simulate parallax depth
              const scale = 1 - (clampedProgress * 0.08);
              const opacity = 1 - (clampedProgress * 1.2); 
              const translateY = clampedProgress * 120;
              
              section.style.transform = `translateY(${translateY}px) scale(${scale})`;
              section.style.opacity = Math.max(0, opacity);
              section.style.transformOrigin = 'top center';
            } else {
              // Reset styles when fully in view or below viewport
              section.style.transform = 'none';
              section.style.opacity = 1;
            }
          });
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleParallax, { passive: true });
    // Initial call
    handleParallax();
    
    return () => window.removeEventListener('scroll', handleParallax);
  }, []);

  const toggleTheme = () => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));

  return (
    <div className="min-h-screen bg-[var(--page-bg)] text-[var(--text)] transition-colors duration-500">
      <Header theme={theme} toggleTheme={toggleTheme} activeSection={activeSection} setActiveSection={setActiveSection} />

      <main className="px-6 py-28">
        <div className="mx-auto max-w-5xl space-y-16">
          <Hero />
          <Skills />
          <Experience />
          <Awards />
          <Education />
          <ProjectGallery />
          <Contact />
        </div>
      </main>

      <Footer />

      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed right-6 bottom-6 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[var(--accent)] text-[var(--surface)] shadow-lg transition-transform duration-300 hover:-translate-y-1"
          aria-label="Scroll to top"
        >
          ↑
        </button>
      )}
    </div>
  );
}

export default App;