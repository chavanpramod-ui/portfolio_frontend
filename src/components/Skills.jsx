const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: ["React.js", "JavaScript (ES6+)", "HTML5 & CSS3", "Tailwind CSS", "jQuery"]
    },
    {
      title: "Backend & Database",
      skills: ["Node.js", "Express.js", "MongoDB", "PHP", "RESTful APIs"]
    },
    {
      title: "Core Programming & Concepts",
      skills: ["Java","Python", "Data Structures & Algorithms", "Object-Oriented Design", "Information Security"]
    }
  ];

  return (
    <section className="py-20 bg-gray-800 text-white px-6">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-transparent bg-clip-text bg-linear-to-r from-emerald-400 to-cyan-400">
         My Skills
        </h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-gray-900 p-8 rounded-2xl border border-gray-700 shadow-lg hover:border-emerald-500/50 transition-all duration-300 hover:-translate-y-2"
            >
              <h3 className="text-2xl font-semibold mb-6 text-gray-200 border-b border-gray-700 pb-3">
                {category.title}
              </h3>
              <ul className="space-y-3 flex flex-col">
                {category.skills.map((skill, skillIndex) => (
                  <li 
                    key={skillIndex} 
                    className="flex items-center text-gray-400 hover:text-emerald-400 transition-colors"
                  >
                    <span className="mr-3 text-emerald-500">▹</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;