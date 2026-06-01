const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: ["React.js", "JavaScript (ES6+)", "HTML5 & CSS3", "Tailwind CSS", "Bootstrap"]
    },
    {
      title: "Backend & Cloud",
      skills: ["Node.js", "Express.js", "MongoDB", "MySQL", "RESTful APIs"]
    },
    {
      title: "Programming & Tools",
      skills: ["Java", "Python", "Data Structures & Algorithms", "Git & GitHub", "VS Code / Postman"]
    }
  ];

  return (
    <section id="skills" className="py-20 fade-in-up">
      <div className="bg-[var(--surface)] border border-[var(--border)] rounded-3xl p-10 shadow-xl">
        <div className="mb-10">
          <p className="text-sm uppercase tracking-[0.35em] text-[var(--muted)]">Technical Skills</p>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 gradient-text">Skill Summary</h2>
        </div>

        <div className="space-y-6">
          {skillCategories.map((category, index) => (
            <div key={index} className="rounded-3xl border border-[var(--border)] bg-[var(--surface-2)] p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_25px_70px_rgba(0,0,0,0.08)] pop-in">
              <h3 className="text-xl font-semibold text-[var(--text)] mb-3">{category.title}</h3>
              <p className="text-[var(--muted)] leading-relaxed">{category.skills.join(' • ')}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;