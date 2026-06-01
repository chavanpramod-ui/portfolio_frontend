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
    <section id="experience" className="py-20 bg-[var(--surface)] text-[var(--text)] px-6 border-t border-[var(--border)] fade-in-up">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-[var(--muted)]">Experience</p>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 gradient-text">Professional Experience</h2>
        </div>

        <div className="space-y-8">
          {roles.map((role, index) => (
            <article key={index} className="bg-[var(--surface-2)] p-8 rounded-3xl border border-[var(--border)] shadow-lg hover:border-[var(--accent)]/40 transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-2xl font-semibold text-[var(--text)]">{role.title}</h3>
                  <p className="mt-2 text-[var(--muted)]">{role.company}</p>
                </div>
                <span className="inline-block px-4 py-2 text-sm text-[var(--text)] bg-[var(--surface)] border border-[var(--border)] rounded-full">
                  {role.duration}
                </span>
              </div>

              <ul className="space-y-3 text-[var(--muted)] leading-relaxed">
                {role.highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="mt-1 text-[var(--accent)]">•</span>
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
