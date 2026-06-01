// 1. Import your image here (make sure the extension matches your file!)
import profilePic from '../assets/profile.png'; 

const Hero = () => {
  return (
    <section id="hero" className="fade-in-up">
      <div className="bg-[var(--surface)] border border-[var(--border)] rounded-[2.5rem] p-10 shadow-xl max-w-6xl mx-auto">
        <div className="flex flex-col xl:flex-row xl:items-start xl:justify-between gap-10">
          <div className="xl:max-w-3xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[var(--muted)]">Profile</p>
            <p className="mt-4 text-lg leading-8 text-[var(--muted)] max-w-3xl">
              Final-year Computer Science and Engineering student and full-stack developer with experience building scalable MERN applications, Java systems, and polished user interfaces.
            </p>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 text-[var(--text)]">
              <div className="rounded-3xl bg-[var(--surface-2)] p-5 border border-[var(--border)]">
                <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">Location</p>
                <p className="mt-3 font-semibold">Nashik, Maharashtra</p>
              </div>
              <div className="rounded-3xl bg-[var(--surface-2)] p-5 border border-[var(--border)]">
                <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">Availability</p>
                <p className="mt-3 font-semibold">Open to internships and junior full-stack roles</p>
              </div>
              <div className="rounded-3xl bg-[var(--surface-2)] p-5 border border-[var(--border)]">
                <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">Phone</p>
                <p className="mt-3 font-semibold">(+91) 8788120892</p>
              </div>
              <div className="rounded-3xl bg-[var(--surface-2)] p-5 border border-[var(--border)]">
                <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">Email</p>
                <p className="mt-3 font-semibold">pramodc431510@gmail.com</p>
              </div>
              <div className="rounded-3xl bg-[var(--surface-2)] p-5 border border-[var(--border)]">
                <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">LinkedIn</p>
                <p className="mt-3 font-semibold">linkedin.com/in/pramod-chavan</p>
              </div>
              <div className="rounded-3xl bg-[var(--surface-2)] p-5 border border-[var(--border)]">
                <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">GitHub</p>
                <p className="mt-3 font-semibold">github.com/chavanpramod-ui</p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center rounded-full bg-[var(--surface-2)] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.12)]">
            <img
              src={profilePic}
              alt="Profile"
              className="h-48 w-48 rounded-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;