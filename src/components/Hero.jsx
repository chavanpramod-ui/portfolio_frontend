// 1. Import your image here (make sure the extension matches your file!)
import profilePic from '../assets/profile.png'; 

const Hero = () => {
  return (
    <section id="hero" className="flex flex-col items-center justify-center min-h-screen bg-[var(--surface)] text-[var(--text)] px-6 fade-in-up">
      <div className="max-w-3xl text-center flex flex-col items-center">
        
        {/* Profile Photo with Glowing Border */}
        <div className="mb-8 float-slow rounded-full glow-border">
          <img 
            src={profilePic} 
            alt="Profile" 
            className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover"
          />
        </div>
        
        {/* Glowing Gradient Headline */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
          Hi, I'm Pramod Chavan
        </h1>
        
        {/* Introduction Subtitle */}
        <p className="text-xl md:text-2xl text-[var(--muted)] mb-8 leading-relaxed max-w-3xl">
          Computer Science Engineering student and full-stack developer with a demonstrated ability to design and deliver scalable web
applications using the MERN stack. Experienced in building end-to-end features, complex business logic, and real-time
dashboards. Highly skilled in Data Structures and Algorithms with a passion for clean code architecture and solving real-world
software engineering challenges.

        </p>
        
        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#projects" className="px-8 py-3 bg-[var(--accent)] hover:brightness-110 text-white rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg shadow-[0_0_30px_rgba(139,92,246,0.35)]">
            View Projects
          </a>
          <a href="#contact" className="px-8 py-3 bg-[var(--surface-2)] hover:bg-[var(--surface)] border border-[var(--border)] rounded-full font-semibold transition-all transform hover:scale-105 text-[var(--text)]">
            Contact Me
          </a>
        </div>

      </div>
    </section>
  );
};

export default Hero;