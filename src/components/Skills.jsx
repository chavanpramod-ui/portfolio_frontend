import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      description: "Building responsive and interactive user interfaces.",
      skills: ["React.js", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"]
    },
    {
      title: "Backend",
      description: "Creating scalable server-side architectures.",
      skills: ["Node.js", "Express.js", "MongoDB", "MySQL", "RESTful APIs"]
    },
    {
      title: "Tools & Core",
      description: "Foundational knowledge and version control.",
      skills: ["Java", "Python", "Data Structures", "Algorithms", "Git", "GitHub"]
    }
  ];

  return (
    <section id="skills" className="relative py-24 overflow-hidden">
      {/* Decorative Background Blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--accent)] rounded-full blur-[150px] opacity-10 pointer-events-none"></div>

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-16 flex flex-col items-center text-center fade-in-up">
          <span className="inline-block px-4 py-1.5 mb-6 rounded-full border border-[var(--border)] bg-[var(--surface-2)]/80 backdrop-blur-md text-xs font-bold uppercase tracking-[0.3em] text-[var(--accent)] shadow-sm">
            Technical Arsenal
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[var(--text)]">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="mt-4 max-w-2xl text-[var(--muted)]">
            A comprehensive overview of my technical expertise, ranging from modern frontend frameworks to robust backend architectures.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="group relative flex flex-col rounded-[2.5rem] border border-[var(--border)] bg-[var(--surface)]/80 backdrop-blur-xl p-8 shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_40px_-10px_var(--hover-glow)] hover:border-[var(--accent)]/50 pop-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Card Inner Gradient Hover */}
              <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-[var(--nav-accent)] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-10 pointer-events-none"></div>
              
              <div className="relative z-10 mb-8">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--gradient-start)] to-[var(--gradient-end)] text-[var(--surface)] shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                  {/* Basic Icon representation based on index */}
                  {index === 0 && (
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  )}
                  {index === 1 && (
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" /></svg>
                  )}
                  {index === 2 && (
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
                  )}
                </div>
                <h3 className="text-2xl font-bold text-[var(--text)]">{category.title}</h3>
                <p className="mt-2 text-sm text-[var(--muted)] leading-relaxed">{category.description}</p>
              </div>
              
              <div className="relative z-10 flex flex-wrap gap-2 mt-auto">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex} 
                    className="skill-pill px-3 py-1.5 rounded-lg text-sm font-medium bg-[var(--surface-2)] text-[var(--text)] border border-[var(--border)]/60 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;