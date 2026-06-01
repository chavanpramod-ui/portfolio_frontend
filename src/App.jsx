import { useEffect, useState } from 'react';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Awards from './components/Awards';
import Education from './components/Education';
import ProjectGallery from './components/ProjectGallery';
import Contact from './components/Contact';

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.documentElement.classList.toggle('light', theme === 'light');
  }, [theme]);

  const toggleTheme = () => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));

  return (
    <div className="min-h-screen bg-[var(--page-bg)] text-[var(--text)] transition-colors duration-500 px-6 py-8">
      <div className="fixed right-6 top-6 z-50">
        <button
          onClick={toggleTheme}
          className="px-4 py-2 rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--text)] shadow-lg transition hover:-translate-y-0.5"
        >
          {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>

      <div className="mx-auto max-w-5xl space-y-16">
        <Hero />
        <Skills />
        <Experience />
        <Awards />
        <Education />
        <ProjectGallery />
        <Contact />
      </div>
    </div>
  );
}

export default App;