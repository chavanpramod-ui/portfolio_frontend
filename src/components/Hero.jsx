// 1. Import your image here (make sure the extension matches your file!)
import profilePic from '../assets/profile.png'; 

const Hero = () => {
  return (
    <section id="hero" className="fade-in-up">
      <div className="bg-[var(--surface)] border border-[var(--border)] rounded-3xl p-10 shadow-xl">
        <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-8">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[var(--muted)]">Resume</p>
            <h1 className="text-5xl md:text-6xl font-extrabold text-[var(--text)] mt-4">Pramod Chavan</h1>
            <p className="mt-4 text-[var(--muted)] leading-relaxed text-lg">
              Final-year Computer Science and Engineering student and full-stack developer specializing in MERN applications, Java systems, and polished user interfaces.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface-2)] p-5">
                <p className="text-sm uppercase tracking-[0.3em] text-[var(--muted)]">Location</p>
                <p className="mt-2 text-[var(--text)]">Nashik, Maharashtra</p>
              </div>
              <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface-2)] p-5">
                <p className="text-sm uppercase tracking-[0.3em] text-[var(--muted)]">Availability</p>
                <p className="mt-2 text-[var(--text)]">Open to internships and junior full-stack roles</p>
              </div>
            </div>
          </div>

          <div className="mx-auto xl:mx-0 rounded-full overflow-hidden border border-[var(--border)] w-44 h-44 shadow-lg">
            <img
              src={profilePic}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface-2)] p-6">
            <p className="text-sm uppercase tracking-[0.3em] text-[var(--muted)]">Phone</p>
            <p className="mt-2 text-[var(--text)]">(+91) 8788120892</p>
          </div>
          <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface-2)] p-6">
            <p className="text-sm uppercase tracking-[0.3em] text-[var(--muted)]">Email</p>
            <p className="mt-2 text-[var(--text)]">pramodc431510@gmail.com</p>
          </div>
          <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface-2)] p-6">
            <p className="text-sm uppercase tracking-[0.3em] text-[var(--muted)]">LinkedIn</p>
            <p className="mt-2 text-[var(--accent)]">linkedin.com/in/pramod-chavan</p>
          </div>
          <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface-2)] p-6">
            <p className="text-sm uppercase tracking-[0.3em] text-[var(--muted)]">GitHub</p>
            <p className="mt-2 text-[var(--accent)]">github.com/chavanpramod-ui</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;