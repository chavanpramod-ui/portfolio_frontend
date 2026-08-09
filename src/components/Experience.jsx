import React from 'react';

const Experience = () => {
  const roles = [
    {
      title: 'Web Developer Trainee',
      company: 'SUMAGO Infotech, Nashik',
      duration: 'Jul 2022 – Aug 2022',
      highlights: [
        'Built responsive UI layouts using HTML, CSS, JavaScript, and Bootstrap',
        'Developed full-stack web pages with dynamic content and interactive features',
        'Collaborated with the team to implement clean, maintainable frontend code',
        'Gained hands-on experience in client-server architecture and real-world web workflows'
      ]
    }
  ];

  return (
    <section id="experience" className="relative py-24 overflow-hidden">
      {/* Decorative Background Blob - position it on the right side this time */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/3 w-[600px] h-[600px] bg-[var(--accent-2)] rounded-full blur-[150px] opacity-10 pointer-events-none"></div>

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-16 flex flex-col items-center text-center fade-in-up">
          <span className="inline-block px-4 py-1.5 mb-6 rounded-full border border-[var(--border)] bg-[var(--surface-2)]/80 backdrop-blur-md text-xs font-bold uppercase tracking-[0.3em] text-[var(--accent)] shadow-sm">
            Career Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[var(--text)]">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="mt-4 max-w-2xl text-[var(--muted)]">
            A timeline of my professional roles and the impactful projects I've contributed to.
          </p>
        </div>

        <div className="space-y-8 relative">
          {roles.map((role, index) => (
            <article 
              key={index} 
              className="group relative flex flex-col rounded-[2.5rem] border border-[var(--border)] bg-[var(--surface)]/80 backdrop-blur-xl p-8 md:p-10 shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_40px_-10px_var(--hover-glow)] hover:border-[var(--accent)]/50 pop-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Card Inner Gradient Hover */}
              <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-[var(--nav-accent)] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-10 pointer-events-none"></div>
              
              <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
                <div className="flex items-center gap-6">
                  {/* Icon or visual marker */}
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--gradient-start)] to-[var(--gradient-end)] text-[var(--surface)] shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-[var(--text)]">{role.title}</h3>
                    <p className="mt-2 text-lg font-medium text-[var(--accent)]">{role.company}</p>
                  </div>
                </div>
                
                <span className="inline-flex px-5 py-2.5 text-sm font-semibold text-[var(--text)] bg-[var(--surface-2)] border border-[var(--border)] rounded-full shadow-sm whitespace-nowrap self-start md:self-auto">
                  {role.duration}
                </span>
              </div>

              <ul className="relative z-10 space-y-4 text-[var(--muted)] leading-relaxed text-base md:text-lg">
                {role.highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <span className="mt-1.5 flex h-2 w-2 shrink-0 rounded-full bg-[var(--accent)] shadow-[0_0_8px_var(--hover-glow)]"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
