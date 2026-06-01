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
    <section id="projects" className="py-20 bg-[var(--page-bg)] text-[var(--text)] px-6 fade-in-up">
      <div className="max-w-6xl mx-auto">
        
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 gradient-text">
         My Projects
        </h2>

        <div className="max-w-3xl mx-auto text-center mb-12 text-[var(--muted)] leading-relaxed">
          <p>
            A selection of web applications demonstrating real-world MERN development, responsive UI design, and data-driven functionality.
            These projects showcase full-stack implementation, API integration, and polished user experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-sm">
            <p className="text-sm uppercase tracking-[0.3em] text-[var(--muted)] mb-3">Focus</p>
            <p className="text-xl font-semibold text-[var(--text)]">MERN Stack</p>
          </div>
          <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-sm">
            <p className="text-sm uppercase tracking-[0.3em] text-[var(--muted)] mb-3">Feature</p>
            <p className="text-xl font-semibold text-[var(--text)]">Real-Time Interaction</p>
          </div>
          <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-sm">
            <p className="text-sm uppercase tracking-[0.3em] text-[var(--muted)] mb-3">Outcome</p>
            <p className="text-xl font-semibold text-[var(--text)]">Polished UI</p>
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-[var(--surface)] rounded-3xl border border-[var(--border)] p-8 shadow-lg hover:border-[var(--accent)]/50 transition-all duration-300 group fade-in-up"
            >
              <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <span className="text-[var(--accent)] text-sm font-semibold uppercase tracking-[0.2em]">{project.type}</span>
                <span className="text-sm text-[var(--muted)]">{project.tech.join(' • ')}</span>
              </div>

              <h3 className="text-2xl font-semibold mb-3 text-[var(--text)]">{project.title}</h3>
              <p className="text-[var(--muted)] mb-6 leading-relaxed">{project.description}</p>

              <div className="flex gap-4 flex-wrap">
                <a href={project.github} className="px-4 py-2 rounded-full border border-[var(--border)] bg-[var(--surface-2)] text-sm font-medium text-[var(--text)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition">
                  GitHub
                </a>
                <a href={project.live} className="px-4 py-2 rounded-full bg-[var(--accent)] text-sm font-medium text-white hover:bg-[var(--accent-2)] transition">
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProjectGallery;