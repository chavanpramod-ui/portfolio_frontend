const Awards = () => {
  const awards = [
    {
      title: 'Certificate in Data Structures and Algorithms - Java',
      issuer: 'Online Certification / Training Program',
      duration: 'Aug 2025 – Jan 2026',
      details: 'Completed an intensive Alpha batch covering Linked Lists, Trees, Graphs, Dynamic Programming, and competitive problem-solving techniques.',
      link: 'https://drive.google.com/file/d/1JNxdKf_elMTPSOFfhnVlcKnDU3LNTBoK/view'
    },
    {
      title: 'Full Stack Web Development - MERN',
      issuer: 'Industry Certification Program',
      duration: 'Jan 2026 – May 2026',
      details: 'Earned certification in full-stack MERN development with a focus on responsive UI, REST APIs, database design, and deployment workflows.',
      link: 'https://drive.google.com/file/d/1LItvdJ0m8NUGxSFkNIvWFwZSGGEmG3Mh/view'
    }
  ];

  return (
    <section id="awards" className="py-20 fade-in-up">
      <div className="bg-[var(--surface)] border border-[var(--border)] rounded-3xl p-10 shadow-xl">
        <div className="mb-10">
          <p className="text-sm uppercase tracking-[0.35em] text-[var(--muted)]">Awards & Certifications</p>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 gradient-text">Certifications & Achievements</h2>
        </div>

        <ul className="space-y-6 text-[var(--muted)] leading-relaxed">
          {awards.map((award, idx) => (
            <li key={idx} className="rounded-3xl border border-[var(--border)] bg-[var(--surface-2)] p-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div>
                  <h3 className="text-xl font-semibold text-[var(--text)]">{award.title}</h3>
                  <p className="mt-2 text-[var(--muted)]">{award.issuer}</p>
                </div>
                <span className="inline-block rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm text-[var(--text)]">
                  {award.duration}
                </span>
              </div>
              <p className="mt-4">{award.details}</p>
              <div className="mt-6">
                <a
                  href={award.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center rounded-full bg-[var(--accent)] px-4 py-2 text-sm font-semibold text-white hover:bg-[var(--accent-2)] transition"
                >
                  View Certificate
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Awards;
