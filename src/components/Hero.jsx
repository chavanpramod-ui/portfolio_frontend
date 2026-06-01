// 1. Import your image here (make sure the extension matches your file!)
import profilePic from '../assets/profile.png'; 

const Hero = () => {
  return (
    <section id="hero" className="fade-in-up">
      <div className="bg-[var(--surface)] border border-[var(--border)] rounded-[2.5rem] p-10 shadow-xl max-w-6xl mx-auto">
        <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-10">
          <div className="order-last xl:order-first xl:max-w-3xl xl:flex-1">
            <p className="text-sm uppercase tracking-[0.35em] text-[var(--muted)]">Profile</p>
            <p className="mt-4 text-lg leading-8 text-[var(--muted)] max-w-3xl">
              Computer Science Engineering student and full-stack developer with a demonstrated ability to design and deliver scalable web
applications using the MERN stack. Experienced in building end-to-end features, complex business logic, and real-time
dashboards. Highly skilled in Data Structures and Algorithms with a passion for clean code architecture and solving real-world
software engineering challenges.

            </p>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 text-[var(--text)]">
              <div className="rounded-3xl bg-[var(--surface-2)] p-5 border border-[var(--border)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
                <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">Location</p>
                <p className="mt-3 font-semibold"> Mumbai, Maharashtra</p>
              </div>
              <div className="rounded-3xl bg-[var(--surface-2)] p-5 border border-[var(--border)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
                <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">Availability</p>
                <p className="mt-3 font-semibold">Open to internships and junior full-stack roles</p>
              </div>
              <div className="rounded-3xl bg-[var(--surface-2)] p-5 border border-[var(--border)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
                <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">Phone</p>
                <p className="mt-3 font-semibold">(+91) 8788120892</p>
              </div>
              <div className="rounded-3xl bg-[var(--surface-2)] p-5 border border-[var(--border)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
                <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">Email</p>
                <p className="mt-3 font-semibold">pramodc431510@gmail.com</p>
              </div>
              <div className="rounded-3xl bg-[var(--surface-2)] p-5 border border-[var(--border)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
                <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">LinkedIn</p>
                <a
                  href="https://www.linkedin.com/in/chavan-pramod"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="mt-3 block font-semibold text-[var(--text)] hover:text-[var(--accent)] transition-colors"
                >
                  Linkedin.com
                </a>
              </div>
              <div className="rounded-3xl bg-[var(--surface-2)] p-5 border border-[var(--border)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
                <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">GitHub</p>
                <a
                  href="https://github.com/chavanpramod-ui"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="mt-3 block font-semibold text-[var(--text)] hover:text-[var(--accent)] transition-colors"
                >
                  Github.com
                </a>
              </div>
            </div>
          </div>

          <div className="order-first xl:order-last w-full xl:w-1/3 flex items-center justify-center">
            <div className="rounded-full p-1 bg-gradient-to-tr from-[var(--accent)] to-[var(--accent-2)] shadow-[0_30px_80px_rgba(0,0,0,0.18)] transition-transform hover:scale-105">
              <div className="rounded-full bg-[var(--surface-2)] p-4">
                <img
                  src={profilePic}
                  alt="Profile"
                  className="h-40 w-40 md:h-48 md:w-48 rounded-full object-cover block"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;