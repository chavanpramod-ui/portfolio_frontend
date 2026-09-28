import React from 'react';

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
    <section id="awards" className="relative py-24 overflow-hidden">


      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-16 flex flex-col items-center text-center fade-in-up">
          <span className="inline-block px-4 py-1.5 mb-6 rounded-full border border-[var(--border)] bg-[var(--surface-2)]/80 backdrop-blur-md text-xs font-bold uppercase tracking-[0.3em] text-[var(--accent)] shadow-sm">
            Awards And Certifications
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[var(--text)]">
            Certifications & <span className="gradient-text">Achievements</span>
          </h2>
          <p className="mt-4 max-w-2xl text-[var(--muted)]">
            Recognitions and rigorous training programs completed to continuously hone my technical craft.
          </p>
        </div>

        <ul className="space-y-8 relative">
          {awards.map((award, idx) => (
            <li 
              key={idx} 
              className="group relative flex flex-col rounded-[2.5rem] border border-[var(--border)] bg-[var(--surface)]/80 backdrop-blur-xl p-8 md:p-10 shadow-2xl premium-hover pop-in"
              style={{ animationDelay: `${idx * 150}ms` }}
            >
              {/* Card Inner Gradient Hover */}
              <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-[var(--nav-accent)] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-10 pointer-events-none"></div>
              
              <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-6">
                <div className="flex items-center gap-6">
                  {/* Icon */}
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--gradient-start)] to-[var(--gradient-end)] text-[var(--surface)] shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-[var(--text)]">{award.title}</h3>
                    <p className="mt-2 text-lg font-medium text-[var(--accent)]">{award.issuer}</p>
                  </div>
                </div>
                
                <span className="inline-flex px-5 py-2.5 text-sm font-semibold text-[var(--text)] bg-[var(--surface-2)] border border-[var(--border)] rounded-full shadow-sm whitespace-nowrap self-start md:self-auto">
                  {award.duration}
                </span>
              </div>
              
              <div className="relative z-10 md:pl-[88px]">
                <p className="text-[var(--muted)] leading-relaxed text-base md:text-lg mb-8">{award.details}</p>
                <div className="flex items-center">
                  <a
                    href={award.link}
                    target="_blank"
                    rel="noreferrer"
                    className="group/btn inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:bg-[var(--accent-2)] hover:shadow-[0_0_20px_var(--hover-glow)] hover:-translate-y-1"
                  >
                    View Certificate
                    <svg className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Awards;
