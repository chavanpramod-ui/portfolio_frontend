import React, { useState } from 'react';

const Header = ({ theme, toggleTheme, activeSection, setActiveSection }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const linkClass = (section) =>
    `relative px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
      activeSection === section
        ? 'bg-[var(--accent)] text-[var(--surface)] shadow-[0_4px_12px_var(--hover-glow)] transform scale-105'
        : 'text-[var(--text)] hover:text-[var(--accent)] hover:bg-[var(--surface-2)] bg-transparent'
    }`;

  const handleLinkClick = (section) => {
    setActiveSection(section);
    setMenuOpen(false);
  };

  return (
    <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none animate-slide-down">
      <div 
        className="pointer-events-auto relative flex items-center justify-between gap-6 rounded-full border border-[var(--border)] px-4 py-2 shadow-[0_8px_32px_rgba(0,0,0,0.12)] backdrop-blur-md transition-all duration-300"
        style={{ background: 'var(--nav-bg)' }}
      >
        <button
          type="button"
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--text)] shadow-sm transition-transform active:scale-95"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? '✕' : '☰'}
        </button>

        <nav
          className={`absolute top-full mt-4 left-1/2 -translate-x-1/2 w-[240px] origin-top rounded-3xl border border-[var(--border)] bg-[var(--surface)]/95 p-4 shadow-2xl backdrop-blur-xl transition-all duration-300 md:static md:mt-0 md:w-auto md:translate-x-0 md:border-0 md:bg-transparent md:p-0 md:shadow-none ${
            menuOpen ? 'opacity-100 visible scale-y-100' : 'opacity-0 invisible scale-y-95 md:scale-y-100 md:opacity-100 md:visible'
          }`}
        >
          <ul className="flex flex-col gap-2 md:flex-row md:items-center md:justify-center md:gap-1">
            {['hero', 'skills', 'experience', 'awards', 'education', 'projects', 'contact'].map((section) => (
              <li key={section}>
                <a
                  href={`#${section}`}
                  onClick={() => handleLinkClick(section)}
                  aria-current={activeSection === section ? 'page' : undefined}
                  className={`block text-center md:inline-block ${linkClass(section)}`}
                >
                  {section === 'hero' ? 'Home' : section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--text)] shadow-sm transition-all hover:scale-110 hover:shadow-[0_4px_12px_var(--hover-glow)] hover:border-[var(--accent)]"
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;