const Education = () => {
  const educationList = [
    {
      id: 1,
      degree: "B.Tech in Computer Science and Engineering (Final Year)",
      institution: "Sandip University, Nashik",
      duration: "Expected Graduation: 2026",
      description: "Specializing in software engineering and scalable system architecture. Actively applying theoretical knowledge to build comprehensive startup prototypes and full-stack web applications.",
      highlights: ["Data Structures & Algorithms (Java)", "Object-Oriented Analysis & Design (OOAD)", "MERN Stack Development"]
    },
    {
      id: 2,
      degree: "Diploma in Computer Engineering",
      institution: "Government Polytechnic Jintur India",
      duration: "june 2020 - june 2023",
      description: "Completed foundational coursework with a strong emphasis on mathematics, physics, and introductory computer science.",
      highlights: ["Java (programing Language)","Pythone (programing Language)","Data Structures & Algorithms (Java)","Object-Oriented Analysis & Design (OOAD)"]
    }
  ];

  return (
    <section className="py-20 bg-[var(--surface-2)] text-[var(--text)] px-6 border-t border-[var(--border)]">
      <div className="max-w-4xl mx-auto">
        
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-emerald-400">
          Education & Academic Journey
        </h2>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-[var(--border)] ml-3 md:ml-6 space-y-12">
          
          {educationList.map((item) => (
            <div key={item.id} className="relative pl-8 md:pl-12">
              
              {/* Glowing Timeline Dot */}
              <div className="absolute -left-2.25 top-1.5 w-4 h-4 bg-[var(--surface)] border-2 border-[var(--accent-2)] rounded-full shadow-[0_0_10px_rgba(16,185,129,0.8)]"></div>
              
              {/* Content Card */}
              <div className="bg-[var(--surface)] p-6 md:p-8 rounded-2xl border border-[var(--border)] shadow-lg hover:border-[var(--accent-2)]/30 transition-colors duration-300">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-[var(--text)]">{item.degree}</h3>
                    <h4 className="text-lg text-[var(--accent-2)] font-medium mt-1">{item.institution}</h4>
                  </div>
                  <span className="mt-2 md:mt-0 px-4 py-1 bg-[var(--surface)] border border-[var(--border)] rounded-full text-sm text-[var(--muted)] font-semibold inline-block w-max">
                    {item.duration}
                  </span>
                </div>
                
                <p className="text-[var(--muted)] leading-relaxed mb-6">
                  {item.description}
                </p>

                {/* Coursework/Highlights Tags */}
                {item.highlights.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {item.highlights.map((highlight, index) => (
                      <span 
                        key={index} 
                        className="px-3 py-1 bg-[var(--surface)] border border-[var(--border)] rounded-md text-xs font-medium text-[var(--accent)]"
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