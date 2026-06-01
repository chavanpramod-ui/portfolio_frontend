import React from 'react';

const Header = ({ theme, toggleTheme, activeSection, setActiveSection }) => {
  const linkClass = (section) =>
    `inline-flex items-center gap-2 px-3 py-2 rounded-full font-medium transition ${
      activeSection === section
        ? 'bg-[var(--accent)] text-[var(--surface)] shadow-sm'
        : 'text-[var(--muted)] hover:text-[var(--text)] bg-transparent'
    }`;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm animate-slide-down" style={{ background: 'var(--nav-bg)' }}>
      <div className="mx-auto max-w-6xl px-6 py-3 flex items-center justify-between gap-6 border-b border-[var(--border)] shadow-[0_6px_30px_rgba(2,6,23,0.5)]">
        <div className="w-1/4" />

        <nav className="w-2/4">
          <ul className="hidden md:flex items-center justify-center gap-3">
            <li>
              <a
                href="#hero"
                onClick={() => setActiveSection('hero')}
                aria-current={activeSection === 'hero' ? 'page' : undefined}
                className={linkClass('hero')}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 11.5L12 4l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1v-8.5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Home
              </a>
            </li>
            <li>
              <a
                href="#skills"
                onClick={() => setActiveSection('skills')}
                aria-current={activeSection === 'skills' ? 'page' : undefined}
                className={linkClass('skills')}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 20v-8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M6 20v-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M18 20v-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Skills
              </a>
            </li>
            <li>
              <a
                href="#experience"
                onClick={() => setActiveSection('experience')}
                aria-current={activeSection === 'experience' ? 'page' : undefined}
                className={linkClass('experience')}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="3" y="7" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M16 3v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M8 3v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Experience
              </a>
            </li>
            <li>
              <a
                href="#awards"
                onClick={() => setActiveSection('awards')}
                aria-current={activeSection === 'awards' ? 'page' : undefined}
                className={linkClass('awards')}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2l2.09 4.26L18.6 7l-3.3 2.88L15.18 14 12 11.77 8.82 14l.88-4.12L6.4 7l4.51-.74L12 2z" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Awards
              </a>
            </li>
            <li>
              <a
                href="#education"
                onClick={() => setActiveSection('education')}
                aria-current={activeSection === 'education' ? 'page' : undefined}
                className={linkClass('education')}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M2 17l10 5 10-5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M2 12l10 5 10-5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Education
              </a>
            </li>
            <li>
              <a
                href="#projects"
                onClick={() => setActiveSection('projects')}
                aria-current={activeSection === 'projects' ? 'page' : undefined}
                className={linkClass('projects')}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 7h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <rect x="3" y="11" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <rect x="14" y="11" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={() => setActiveSection('contact')}
                aria-current={activeSection === 'contact' ? 'page' : undefined}
                className={linkClass('contact')}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 15a2 2 0 0 0-2-2h-1l-3 3v4h-6v-4l-3-3H5a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-3z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M7 8V6a5 5 0 0 1 10 0v2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className="w-1/4 flex items-center justify-end">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="h-10 w-10 rounded-md flex items-center justify-center border border-[var(--border)] bg-[var(--surface)] text-[var(--text)]"
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
