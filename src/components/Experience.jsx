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
    <section id="experience" className="relative py-24 w-full overflow-hidden">
      {/* Subtle Premium Background */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[600px] h-[600px] bg-[var(--accent-2)] rounded-full blur-[160px] opacity-[0.08] pointer-events-none"></div>

      <div className="relative mx-auto max-w-4xl px-6">
        <div className="mb-16">
          <span className="inline-block px-3 py-1 mb-4 rounded-full bg-[var(--surface-2)]/50 border border-[var(--border)] text-xs font-semibold uppercase tracking-widest text-[var(--accent)] backdrop-blur-md">
            Career Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[var(--text)]">
            Professional Experience
          </h2>
        </div>

        {/* Minimalist Left-Aligned Timeline */}
        <div className="relative border-l border-[var(--border)] ml-3 md:ml-4 space-y-12 pb-8">
          
          {roles.map((role, index) => (
            <div key={index} className="relative pl-8 md:pl-12 group fade-in-up" style={{ animationDelay: `${index * 150}ms` }}>
              
              {/* Timeline Dot */}
              <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-[var(--accent)] shadow-[0_0_10px_var(--hover-glow)] ring-4 ring-[var(--page-bg)] transition-transform duration-300 group-hover:scale-150"></div>
              
              {/* Content Box */}
              <article className="relative rounded-2xl bg-gradient-to-br from-[var(--surface-2)]/30 to-transparent border border-[var(--border)] p-6 md:p-8 backdrop-blur-sm transition-all duration-300 hover:border-[var(--accent)]/40 hover:bg-[var(--surface)]/50 hover:shadow-lg">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-semibold text-[var(--text)] tracking-tight">{role.title}</h3>
                    <p className="mt-1 text-lg text-[var(--accent)] font-medium">{role.company}</p>
                  </div>
                  <span className="inline-flex px-4 py-1.5 text-sm font-medium text-[var(--text)] bg-[var(--page-bg)] border border-[var(--border)] rounded-full shrink-0">
                    {role.duration}
                  </span>
                </div>

                <ul className="space-y-3">
                  {role.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-[var(--muted)] leading-relaxed text-base">
                      <span className="mt-2.5 w-1.5 h-1.5 shrink-0 rounded-full bg-[var(--border)] transition-colors duration-300 group-hover:bg-[var(--accent)]/50"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Experience;
