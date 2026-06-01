import { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Awards from './components/Awards';
import Education from './components/Education';
import ProjectGallery from './components/ProjectGallery';
import Contact from './components/Contact';

function App() {
  const [theme, setTheme] = useState('light');
  const [activeSection, setActiveSection] = useState('hero');

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
    </div>
  );
}

export default App;