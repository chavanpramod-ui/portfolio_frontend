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
    <section className="py-20 bg-gray-900 text-white px-6">
      <div className="max-w-6xl mx-auto">
        
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-emerald-400">
         My Projects
        </h2>
        
        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-2 shadow-lg group"
            >
              {/* Image Placeholder (You can replace this with an actual <img> tag later) */}
              <div className="h-48 bg-gray-700 flex items-center justify-center group-hover:bg-gray-600 transition-colors">
                 <span className="text-gray-400 font-medium text-lg">{project.title} Preview</span>
              </div>
              
              {/* Card Content */}
              <div className="p-8">
                <span className="text-emerald-400 text-sm font-semibold tracking-wider uppercase mb-2 block">
                  {project.type}
                </span>
                <h3 className="text-2xl font-bold mb-3 text-gray-100">{project.title}</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((tech, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 bg-gray-900 border border-gray-700 rounded-full text-xs font-medium text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Action Buttons */}
                <div className="flex gap-4">
                  <a href={project.github} className="flex-1 text-center py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-sm font-semibold transition-colors">
                    GitHub
                  </a>
                  <a href={project.live} className="flex-1 text-center py-2 bg-blue-600 hover:bg-blue-500 rounded-lg text-sm font-semibold transition-colors">
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProjectGallery;