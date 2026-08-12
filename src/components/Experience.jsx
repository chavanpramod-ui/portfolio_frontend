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


      <div className="relative mx-auto max-w-4xl px-6">
        <div className="mb-16 flex flex-col items-center text-center fade-in-up">
          <span className="inline-block px-4 py-1.5 mb-6 rounded-full border border-[var(--border)] bg-[var(--surface-2)]/80 backdrop-blur-md text-xs font-bold uppercase tracking-[0.3em] text-[var(--accent)] shadow-sm">
            Career Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[var(--text)]">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="mt-4 max-w-2xl text-[var(--muted)]">
            A summary of my professional roles and the value I've delivered through hands-on development.
          </p>
        </div>

        {/* Grid Layout matching Projects/Skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {roles.map((role, index) => (
            <div 
              key={index} 
              className="group relative flex flex-col rounded-[2.5rem] border border-[var(--border)] bg-[var(--surface)]/80 backdrop-blur-xl p-8 shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_40px_-10px_var(--hover-glow)] hover:border-[var(--accent)]/50 pop-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Card Inner Gradient Hover */}
              <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-[var(--nav-accent)] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-10 pointer-events-none"></div>
              
              <div className="relative z-10 flex-1">
                <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
                  <span className="inline-flex px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-[var(--text)] bg-[var(--surface-2)] border border-[var(--border)] rounded-full shadow-sm">
                    {role.duration}
                  </span>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold mb-2 text-[var(--text)]">{role.title}</h3>
                <p className="text-lg text-[var(--accent)] font-medium mb-6">{role.company}</p>
                
                <ul className="space-y-3 mb-8">
                  {role.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-[var(--muted)] leading-relaxed text-base">
                      <svg className="w-5 h-5 shrink-0 text-[var(--accent)] mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
