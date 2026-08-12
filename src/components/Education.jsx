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


      <div className="relative mx-auto max-w-4xl px-6">
        <div className="mb-16 flex flex-col items-center text-center fade-in-up">
          <span className="inline-block px-4 py-1.5 mb-6 rounded-full border border-[var(--border)] bg-[var(--surface-2)]/80 backdrop-blur-md text-xs font-bold uppercase tracking-[0.3em] text-[var(--accent)] shadow-sm">
            Academic Background
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[var(--text)]">
            My <span className="gradient-text">Education</span>
          </h2>
          <p className="mt-4 max-w-2xl text-[var(--muted)]">
            My academic journey and foundational learning that shaped my technical expertise.
          </p>
        </div>

        {/* Grid Layout matching Projects/Skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educationList.map((item, index) => (
            <div 
              key={item.id} 
              className="group relative flex flex-col rounded-[2.5rem] border border-[var(--border)] bg-[var(--surface)]/80 backdrop-blur-xl p-8 shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_40px_-10px_var(--hover-glow)] hover:border-[var(--accent)]/50 pop-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Card Inner Gradient Hover */}
              <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-[var(--nav-accent)] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-10 pointer-events-none"></div>
              
              <div className="relative z-10 flex-1 flex flex-col">
                <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
                  <span className="inline-flex px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-[var(--text)] bg-[var(--surface-2)] border border-[var(--border)] rounded-full shadow-sm">
                    {item.duration}
                  </span>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold mb-2 text-[var(--text)] leading-snug">{item.degree}</h3>
                <p className="text-lg text-[var(--accent)] font-medium mb-4">{item.institution}</p>
                
                <p className="text-[var(--muted)] leading-relaxed text-base mb-8 flex-1">
                  {item.description}
                </p>

                {/* Coursework/Highlights Tags */}
                {item.highlights.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {item.highlights.map((highlight, idx) => (
                      <span 
                        key={idx} 
                        className="px-3 py-1.5 bg-[var(--surface-2)] border border-[var(--border)]/60 rounded-lg text-sm font-medium text-[var(--text)] cursor-default transition-colors duration-300 group-hover:border-[var(--accent)]/50"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;