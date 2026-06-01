import { useEffect, useState } from 'react';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Education from './components/Education';
import ProjectGallery from './components/ProjectGallery';
import Contact from './components/Contact';

function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.documentElement.classList.toggle('light', theme === 'light');
  }, [theme]);

  const toggleTheme = () => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));

  return (
    <div className="min-h-screen font-sans bg-[var(--page-bg)] text-[var(--text)] transition-colors duration-500">
      <div className="fixed right-6 top-6 z-50">
        <button
          onClick={toggleTheme}
          className="px-4 py-2 rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--text)] shadow-lg transition hover:-translate-y-0.5"
        >
          {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>

      <Hero />
      <Skills />
      <Education />
      <ProjectGallery />
      <Contact />
    </div>
  );
}

export default App;