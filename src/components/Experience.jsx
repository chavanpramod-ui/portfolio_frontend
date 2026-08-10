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
      ],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    }
  ];

  return (
    <section id="experience" className="relative py-24 w-full">
      {/* Premium Ambient Background */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 w-[800px] h-[800px] bg-[var(--accent-2)] rounded-full blur-[200px] opacity-[0.15] pointer-events-none"></div>

      <div className="relative mx-auto max-w-5xl px-4 md:px-6">
        <div className="mb-20 flex flex-col items-center text-center fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-[var(--border)] bg-[var(--surface-2)]/50 backdrop-blur-xl shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse"></span>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--accent)]">Career Journey</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-[var(--text)]">
            Professional <span className="gradient-text relative inline-block">Experience</span>
          </h2>
          <p className="mt-6 max-w-2xl text-lg text-[var(--muted)]">
            A timeline of my professional roles and the impactful projects I've contributed to.
          </p>
        </div>

        {/* Central Timeline Container */}
        <div className="relative flex flex-col space-y-16 py-10 before:absolute before:inset-0 before:ml-5 md:before:mx-auto before:h-full before:w-[2px] before:bg-gradient-to-b before:from-transparent before:via-[var(--border)] before:to-transparent">
          
          {roles.map((role, index) => (
            <div key={index} className={`relative flex items-center justify-between md:justify-normal w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'} group`}>
              
              {/* Timeline Node */}
              <div className="absolute left-5 md:left-1/2 -translate-x-1/2 flex h-12 w-12 items-center justify-center rounded-full border-4 border-[var(--page-bg)] bg-[var(--surface-2)] shadow-[0_0_20px_var(--hover-glow)] z-10 transition-transform duration-500 group-hover:scale-110 group-hover:bg-[var(--accent)] group-hover:text-[var(--page-bg)] text-[var(--accent)]">
                {role.icon}
              </div>

              {/* Empty Space for alignment on Desktop */}
              <div className="hidden md:block w-5/12"></div>

              {/* Content Card */}
              <div className="w-full pl-16 md:pl-0 md:w-5/12 fade-in-up" style={{ animationDelay: `${index * 150}ms` }}>
                <article className="relative flex flex-col rounded-3xl border border-[var(--border)] bg-[var(--surface)]/60 backdrop-blur-2xl p-8 shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-10px_var(--hover-glow)] hover:border-[var(--accent)]/60 overflow-hidden">
                  
                  {/* Glassmorphic Shine Effect */}
                  <div className="absolute top-0 right-0 -mr-20 -mt-20 w-40 h-40 rounded-full bg-white opacity-5 blur-[50px] transition-opacity duration-500 group-hover:opacity-10 pointer-events-none"></div>

                  <div className="flex flex-col gap-2 mb-6">
                    <span className="inline-flex w-fit px-3 py-1 text-xs font-semibold text-[var(--accent)] bg-[var(--accent)]/10 border border-[var(--accent)]/20 rounded-full">
                      {role.duration}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold text-[var(--text)] mt-2">{role.title}</h3>
                    <p className="text-lg font-medium text-[var(--muted)]">{role.company}</p>
                  </div>

                  <ul className="space-y-3 text-[var(--muted)] leading-relaxed text-base">
                    {role.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <svg className="w-5 h-5 shrink-0 text-[var(--accent)] mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
