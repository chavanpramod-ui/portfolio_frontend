import React, { useState } from 'react';

const Header = ({ theme, toggleTheme, activeSection, setActiveSection }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const linkClass = (section) =>
    `inline-flex items-center gap-2 px-3 py-2 rounded-full font-medium transition ${
      activeSection === section
        ? 'bg-[var(--accent)] text-[var(--surface)] shadow-sm'
        : 'text-[var(--muted)] hover:text-[var(--text)] bg-transparent'
    }`;

  const handleLinkClick = (section) => {
    setActiveSection(section);
    setMenuOpen(false);
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm animate-slide-down"
      style={{ background: 'var(--nav-bg)' }}
    >
      <div className="mx-auto max-w-6xl px-6 py-3 flex items-center justify-between gap-4 border-b border-[var(--border)] shadow-[0_6px_30px_rgba(2,6,23,0.5)]">
        <button
          type="button"
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--surface)] text-[var(--text)]"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? '✕' : '☰'}
        </button>

        <nav
          className={`absolute inset-x-4 top-full mt-2 rounded-3xl border border-[var(--border)] bg-[var(--surface)]/95 p-4 shadow-xl backdrop-blur-xl transition-opacity duration-300 md:static md:top-auto md:inset-auto md:m-0 md:block md:border-0 md:bg-transparent md:p-0 md:shadow-none ${
            menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible md:opacity-100 md:visible'
          }`}
        >
          <ul className="flex flex-col gap-2 md:flex-row md:items-center md:justify-center md:gap-3">
            <li>
              <a
                href="#hero"
                onClick={() => handleLinkClick('hero')}
                aria-current={activeSection === 'hero' ? 'page' : undefined}
                className={linkClass('hero')}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#skills"
                onClick={() => handleLinkClick('skills')}
                aria-current={activeSection === 'skills' ? 'page' : undefined}
                className={linkClass('skills')}
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#experience"
                onClick={() => handleLinkClick('experience')}
                aria-current={activeSection === 'experience' ? 'page' : undefined}
                className={linkClass('experience')}
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href="#awards"
                onClick={() => handleLinkClick('awards')}
                aria-current={activeSection === 'awards' ? 'page' : undefined}
                className={linkClass('awards')}
              >
                Awards
              </a>
            </li>
            <li>
              <a
                href="#education"
                onClick={() => handleLinkClick('education')}
                aria-current={activeSection === 'education' ? 'page' : undefined}
                className={linkClass('education')}
              >
                Education
              </a>
            </li>
            <li>
              <a
                href="#projects"
                onClick={() => handleLinkClick('projects')}
                aria-current={activeSection === 'projects' ? 'page' : undefined}
                className={linkClass('projects')}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={() => handleLinkClick('contact')}
                aria-current={activeSection === 'contact' ? 'page' : undefined}
                className={linkClass('contact')}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className="ml-auto flex items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="h-10 w-10 rounded-md border border-[var(--border)] bg-[var(--surface)] text-[var(--text)] transition hover:brightness-110"
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;