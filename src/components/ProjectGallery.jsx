import React from 'react';

const ProjectGallery = () => {
  // We will eventually fetch this data from your MongoDB backend
  const projects = [
    {
      title: "Profile Hub",
      type: "Full-Stack Web App",
      description: "A centralized professional data hub built to streamline and showcase user profiles efficiently with a seamless user experience.",
      tech: ["MongoDB", "Express.js", "React", "Node.js"],
      github: "https://github.com/chavanpramod-ui/ProfileHub_Frontend",
      live: "https://profile-hub-jet.vercel.app/"
    },
    {
      title: "Money Manager",
      type: "Hackathon Build",
      description: "A comprehensive expense tracking application developed under tight deadlines to manage personal finances and analyze spending habits.",
      tech: ["React", "Node.js", "Express", "Tailwind CSS"],
      github: "#",
      live: "https://money-manager-frontend-mu.vercel.app/"
    },
    {
      title: "Student Chat-Bot System",
      type: "Academic Project",
      description: "An automated assistant designed to handle student queries, improving response times and making university resources more accessible.",
      tech: ["JavaScript", "React", "Node.js", "API Integration"],
      github: "#",
      live: "#"
    },
    {
      title: "Hyperlocal Delivery Platform",
      type: "Startup Prototype",
      description: "A delivery service architecture designed to connect users seamlessly with local general store products, focusing on fast checkout flows.",
      tech: ["React", "UI/UX Design", "System Architecture"],
      github: "#",
      live: "#"
    }
  ];

  return (
    <section id="projects" className="relative py-24 overflow-hidden">
      {/* Decorative Background Blob */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/3 w-[700px] h-[700px] bg-[var(--accent-2)] rounded-full blur-[150px] opacity-10 pointer-events-none"></div>

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-16 flex flex-col items-center text-center fade-in-up">
          <span className="inline-block px-4 py-1.5 mb-6 rounded-full border border-[var(--border)] bg-[var(--surface-2)]/80 backdrop-blur-md text-xs font-bold uppercase tracking-[0.3em] text-[var(--accent)] shadow-sm">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[var(--text)]">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="mt-4 max-w-3xl text-lg text-[var(--muted)] leading-relaxed">
            A selection of web applications demonstrating real-world MERN development, responsive UI design, and data-driven functionality.
          </p>
        </div>

        {/* Feature Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 fade-in-up">
          <div className="group rounded-[2rem] border border-[var(--border)] bg-[var(--surface)]/80 backdrop-blur-xl p-8 shadow-lg transition-transform hover:-translate-y-1">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--surface-2)] text-[var(--accent)] mb-6 shadow-inner">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" /></svg>
            </div>
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)] mb-2 font-bold">Focus</p>
            <p className="text-2xl font-bold text-[var(--text)]">MERN Stack</p>
          </div>
          <div className="group rounded-[2rem] border border-[var(--border)] bg-[var(--surface)]/80 backdrop-blur-xl p-8 shadow-lg transition-transform hover:-translate-y-1" style={{ animationDelay: '100ms' }}>
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--surface-2)] text-[var(--accent)] mb-6 shadow-inner">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            </div>
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)] mb-2 font-bold">Feature</p>
            <p className="text-2xl font-bold text-[var(--text)]">Real-Time Sync</p>
          </div>
          <div className="group rounded-[2rem] border border-[var(--border)] bg-[var(--surface)]/80 backdrop-blur-xl p-8 shadow-lg transition-transform hover:-translate-y-1" style={{ animationDelay: '200ms' }}>
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--surface-2)] text-[var(--accent)] mb-6 shadow-inner">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" /></svg>
            </div>
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)] mb-2 font-bold">Outcome</p>
            <p className="text-2xl font-bold text-[var(--text)]">Polished UI</p>
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group relative flex flex-col rounded-[2.5rem] border border-[var(--border)] bg-[var(--surface)]/80 backdrop-blur-xl p-8 shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_40px_-10px_var(--hover-glow)] hover:border-[var(--accent)]/50 pop-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Card Inner Gradient Hover */}
              <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-[var(--nav-accent)] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-10 pointer-events-none"></div>

              <div className="relative z-10 flex-1">
                <div className="mb-6 flex flex-wrap items-center gap-3">
                  <span className="inline-flex px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-[var(--text)] bg-[var(--surface-2)] border border-[var(--border)] rounded-full shadow-sm">
                    {project.type}
                  </span>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[var(--text)]">{project.title}</h3>
                <p className="text-[var(--muted)] mb-8 leading-relaxed text-base md:text-lg">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((techItem, i) => (
                    <span key={i} className="text-sm font-medium text-[var(--accent)] bg-[var(--accent)]/10 px-3 py-1 rounded-md">
                      {techItem}
                    </span>
                  ))}
                </div>
              </div>

              <div className="relative z-10 flex flex-wrap gap-4 mt-auto">
                {project.github !== '#' && (
                  <a href={project.github} target="_blank" rel="noreferrer" className="group/btn inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface-2)] px-6 py-3 text-sm font-bold text-[var(--text)] transition-all hover:border-[var(--accent)] hover:text-[var(--accent)] hover:-translate-y-1">
                    GitHub
                  </a>
                )}
                {project.live !== '#' && (
                  <a href={project.live} target="_blank" rel="noreferrer" className="group/btn inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:bg-[var(--accent-2)] hover:shadow-[0_0_20px_var(--hover-glow)] hover:-translate-y-1">
                    Live Demo
                    <svg className="w-4 h-4 transition-transform duration-300 group-hover/btn:-translate-y-1 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProjectGallery;