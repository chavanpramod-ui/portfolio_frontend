import React from 'react';

const Education = () => {
  const educationList = [
    {
      id: 1,
      degree: "B.Tech in Computer Science and Engineering (Final Year)",
      institution: "Sandip University, Nashik",
      duration: "June 2023 - June 2026",
      description: "Specializing in software engineering and scalable system architecture. Actively applying theoretical knowledge to build comprehensive startup prototypes and full-stack web applications.",
      highlights: ["Data Structures & Algorithms (Java)", "Object-Oriented Analysis & Design (OOAD)", "MERN Stack Development"]
    },
    {
      id: 2,
      degree: "Diploma in Computer Engineering",
      institution: "Government Polytechnic Jintur, India",
      duration: "June 2020 - June 2023",
      description: "Completed foundational coursework with a strong emphasis on mathematics, physics, and introductory computer science.",
      highlights: ["Java", "Python", "Data Structures & Algorithms (Java)", "Object-Oriented Analysis & Design (OOAD)"]
    }
  ];

  return (
    <section id="education" className="relative py-24 overflow-hidden">
      {/* Decorative Background Blob */}
      <div className="absolute top-1/3 left-0 -translate-x-1/3 w-[600px] h-[600px] bg-[var(--accent)] rounded-full blur-[150px] opacity-10 pointer-events-none"></div>

      <div className="relative mx-auto max-w-5xl px-6">
        <div className="mb-16 flex flex-col items-center text-center fade-in-up">
          <span className="inline-block px-4 py-1.5 mb-6 rounded-full border border-[var(--border)] bg-[var(--surface-2)]/80 backdrop-blur-md text-xs font-bold uppercase tracking-[0.3em] text-[var(--accent)] shadow-sm">
            Academic Background
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[var(--text)]">
            Education & <span className="gradient-text">Journey</span>
          </h2>
          <p className="mt-4 max-w-2xl text-[var(--muted)]">
            The foundation of my engineering knowledge and technical problem-solving abilities.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-[var(--border)] ml-3 md:ml-6 space-y-12">
          
          {educationList.map((item, index) => (
            <div key={item.id} className="relative pl-8 md:pl-12">
              
              {/* Glowing Timeline Dot */}
              <div className="absolute -left-[9px] top-10 w-4 h-4 bg-[var(--surface)] border-2 border-[var(--accent)] rounded-full shadow-[0_0_15px_var(--hover-glow)]"></div>
              
              {/* Content Card */}
              <div className="group relative flex flex-col rounded-[2.5rem] border border-[var(--border)] bg-[var(--surface)]/80 backdrop-blur-xl p-8 md:p-10 shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_40px_-10px_var(--hover-glow)] hover:border-[var(--accent)]/50 pop-in" style={{ animationDelay: `${index * 150}ms` }}>
                {/* Card Inner Gradient Hover */}
                <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-[var(--nav-accent)] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-10 pointer-events-none"></div>

                <div className="relative z-10 flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-6">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-[var(--text)]">{item.degree}</h3>
                    <p className="mt-2 text-lg font-medium text-[var(--accent)]">{item.institution}</p>
                  </div>
                  <span className="inline-flex px-5 py-2.5 text-sm font-semibold text-[var(--text)] bg-[var(--surface-2)] border border-[var(--border)] rounded-full shadow-sm whitespace-nowrap self-start">
                    {item.duration}
                  </span>
                </div>
                
                <p className="relative z-10 text-[var(--muted)] leading-relaxed text-base md:text-lg mb-8">
                  {item.description}
                </p>

                {/* Coursework/Highlights Tags */}
                {item.highlights.length > 0 && (
                  <div className="relative z-10 flex flex-wrap gap-3">
                    {item.highlights.map((highlight, idx) => (
                      <span 
                        key={idx} 
                        className="px-4 py-2 bg-[var(--surface-2)] border border-[var(--border)] rounded-full text-sm font-medium text-[var(--text)] shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md hover:border-[var(--accent)]"
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