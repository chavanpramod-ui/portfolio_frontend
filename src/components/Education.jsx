import React from 'react';

const Education = () => {
  const educationList = [
    {
      id: 1,
      degree: "B.Tech in Computer Science & Engineering",
      institution: "Sandip University, Nashik",
      duration: "June 2023 - June 2026",
      description: "Specializing in software engineering and scalable system architecture. Actively applying theoretical knowledge to build comprehensive startup prototypes and full-stack web applications.",
      highlights: ["Data Structures & Algorithms", "OOAD", "MERN Stack"],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14v7" />
        </svg>
      )
    },
    {
      id: 2,
      degree: "Diploma in Computer Engineering",
      institution: "Government Polytechnic Jintur",
      duration: "June 2020 - June 2023",
      description: "Completed foundational coursework with a strong emphasis on mathematics, physics, and introductory computer science.",
      highlights: ["Java", "Python", "Problem Solving"],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    }
  ];

  return (
    <section id="education" className="relative py-24 w-full">
      {/* Premium Ambient Background */}
      <div className="absolute top-1/3 left-0 -translate-x-1/4 w-[800px] h-[800px] bg-[var(--accent)] rounded-full blur-[200px] opacity-[0.15] pointer-events-none"></div>

      <div className="relative mx-auto max-w-5xl px-4 md:px-6">
        <div className="mb-20 flex flex-col items-center text-center fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-[var(--border)] bg-[var(--surface-2)]/50 backdrop-blur-xl shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse"></span>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--accent)]">Academic Background</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-[var(--text)]">
            Education & <span className="gradient-text relative inline-block">Journey</span>
          </h2>
          <p className="mt-6 max-w-2xl text-lg text-[var(--muted)]">
            The foundation of my engineering knowledge and technical problem-solving abilities.
          </p>
        </div>

        {/* Central Timeline Container */}
        <div className="relative flex flex-col space-y-16 py-10 before:absolute before:inset-0 before:ml-5 md:before:mx-auto before:h-full before:w-[2px] before:bg-gradient-to-b before:from-transparent before:via-[var(--border)] before:to-transparent">
          
          {educationList.map((item, index) => (
            <div key={item.id} className={`relative flex items-center justify-between md:justify-normal w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'} group`}>
              
              {/* Timeline Node */}
              <div className="absolute left-5 md:left-1/2 -translate-x-1/2 flex h-12 w-12 items-center justify-center rounded-full border-4 border-[var(--page-bg)] bg-[var(--surface-2)] shadow-[0_0_20px_var(--hover-glow)] z-10 transition-transform duration-500 group-hover:scale-110 group-hover:bg-[var(--accent)] group-hover:text-[var(--page-bg)] text-[var(--accent)]">
                {item.icon}
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
                      {item.duration}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold text-[var(--text)] mt-2 leading-tight">{item.degree}</h3>
                    <p className="text-lg font-medium text-[var(--muted)]">{item.institution}</p>
                  </div>
                  
                  <p className="relative z-10 text-[var(--muted)] leading-relaxed text-base mb-8">
                    {item.description}
                  </p>

                  {/* Coursework/Highlights Tags */}
                  {item.highlights.length > 0 && (
                    <div className="relative z-10 flex flex-wrap gap-2">
                      {item.highlights.map((highlight, idx) => (
                        <span 
                          key={idx} 
                          className="px-3 py-1.5 bg-[var(--surface-2)]/80 border border-[var(--border)] rounded-full text-xs font-medium text-[var(--text)] transition-transform hover:-translate-y-1 hover:border-[var(--accent)]"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  )}
                </article>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;