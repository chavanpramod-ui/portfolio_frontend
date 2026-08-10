import React from 'react';

const Education = () => {
  const educationList = [
    {
      id: 1,
      degree: "B.Tech in Computer Science & Engineering",
      institution: "Sandip University, Nashik",
      duration: "June 2023 - June 2026",
      description: "Specializing in software engineering and scalable system architecture. Actively applying theoretical knowledge to build comprehensive startup prototypes and full-stack web applications.",
      highlights: ["Data Structures & Algorithms", "OOAD", "MERN Stack"]
    },
    {
      id: 2,
      degree: "Diploma in Computer Engineering",
      institution: "Government Polytechnic Jintur",
      duration: "June 2020 - June 2023",
      description: "Completed foundational coursework with a strong emphasis on mathematics, physics, and introductory computer science.",
      highlights: ["Java", "Python", "Problem Solving"]
    }
  ];

  return (
    <section id="education" className="relative py-24 w-full overflow-hidden">
      {/* Subtle Premium Background */}
      <div className="absolute top-1/3 left-0 -translate-x-1/4 w-[600px] h-[600px] bg-[var(--accent)] rounded-full blur-[160px] opacity-[0.08] pointer-events-none"></div>

      <div className="relative mx-auto max-w-4xl px-6">
        <div className="mb-16">
          <span className="inline-block px-3 py-1 mb-4 rounded-full bg-[var(--surface-2)]/50 border border-[var(--border)] text-xs font-semibold uppercase tracking-widest text-[var(--accent)] backdrop-blur-md">
            Academic Background
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[var(--text)]">
            Education & Journey
          </h2>
        </div>

        {/* Minimalist Left-Aligned Timeline */}
        <div className="relative border-l border-[var(--border)] ml-3 md:ml-4 space-y-12 pb-8">
          
          {educationList.map((item, index) => (
            <div key={item.id} className="relative pl-8 md:pl-12 group fade-in-up" style={{ animationDelay: `${index * 150}ms` }}>
              
              {/* Timeline Dot */}
              <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-[var(--accent)] shadow-[0_0_10px_var(--hover-glow)] ring-4 ring-[var(--page-bg)] transition-transform duration-300 group-hover:scale-150"></div>
              
              {/* Content Box */}
              <article className="relative rounded-2xl bg-gradient-to-br from-[var(--surface-2)]/30 to-transparent border border-[var(--border)] p-6 md:p-8 backdrop-blur-sm transition-all duration-300 hover:border-[var(--accent)]/40 hover:bg-[var(--surface)]/50 hover:shadow-lg">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-[var(--text)] tracking-tight leading-snug">{item.degree}</h3>
                    <p className="mt-1 text-lg text-[var(--accent)] font-medium">{item.institution}</p>
                  </div>
                  <span className="inline-flex px-4 py-1.5 text-sm font-medium text-[var(--text)] bg-[var(--page-bg)] border border-[var(--border)] rounded-full shrink-0">
                    {item.duration}
                  </span>
                </div>
                
                <p className="text-[var(--muted)] leading-relaxed text-base mb-6">
                  {item.description}
                </p>

                {/* Coursework/Highlights Tags */}
                {item.highlights.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {item.highlights.map((highlight, idx) => (
                      <span 
                        key={idx} 
                        className="px-3 py-1 bg-[var(--page-bg)]/80 border border-[var(--border)] rounded-full text-xs font-medium text-[var(--muted)] transition-colors duration-300 group-hover:border-[var(--accent)]/50 group-hover:text-[var(--text)]"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                )}
              </article>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Education;