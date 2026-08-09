import React from 'react';
import profilePic from '../assets/profile.png'; 

const Hero = () => {
  return (
    <section id="hero" className="relative pt-36 pb-24 overflow-hidden">
      {/* Decorative Background Blob */}
      <div className="absolute top-0 right-0 -translate-y-1/3 translate-x-1/3 w-[700px] h-[700px] bg-[var(--accent)] rounded-full blur-[150px] opacity-15 pointer-events-none"></div>

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-16">
          <div className="order-last xl:order-first xl:flex-1">
            <div className="fade-in-up">
              <span className="inline-block px-4 py-1.5 mb-6 rounded-full border border-[var(--border)] bg-[var(--surface-2)]/80 backdrop-blur-md text-xs font-bold uppercase tracking-[0.3em] text-[var(--accent)] shadow-sm">
                Profile
              </span>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[var(--text)] mb-6">
                Full-Stack <span className="gradient-text">Developer</span>
              </h1>
              <p className="text-lg md:text-xl leading-relaxed text-[var(--muted)] max-w-3xl">
                Skilled in building end-to-end features using React, Node.js, and MongoDB. Experienced in REST API integration, JWT-based authentication, real-time systems with Socket.io, and scalable database design. Writes clean, maintainable code and actively strengthening DSA skills in Java. Seeking a growth-stage team where ownership and product impact matter.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6 text-[var(--text)]">
              {[
                { label: 'Location', value: 'Mumbai, Maharashtra' },
                { label: 'Availability', value: 'Open to internships and junior full-stack roles' },
                { label: 'Phone', value: '(+91) 8788120892' },
                { label: 'Email', value: 'pramodc431510@gmail.com' },
                { label: 'LinkedIn', value: 'Linkedin.com', link: 'https://www.linkedin.com/in/chavan-pramod' },
                { label: 'GitHub', value: 'GitHub.com', link: 'https://github.com/chavanpramod-ui' }
              ].map((item, idx) => (
                <div 
                  key={idx} 
                  className="group relative flex flex-col rounded-[2rem] border border-[var(--border)] bg-[var(--surface)]/80 backdrop-blur-xl p-6 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-10px_var(--hover-glow)] hover:border-[var(--accent)]/50 pop-in"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-[var(--nav-accent)] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-10 pointer-events-none"></div>
                  <div className="relative z-10">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--accent)] mb-2">{item.label}</p>
                    {item.link ? (
                      <a href={item.link} target="_blank" rel="noreferrer noopener" className="font-semibold text-[var(--text)] hover:text-[var(--accent)] transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-semibold text-[var(--text)]">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="order-first xl:order-last w-full xl:w-1/3 flex items-center justify-center fade-in-up">
            <div className="relative group cursor-pointer">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[var(--gradient-start)] to-[var(--gradient-end)] blur-xl opacity-40 group-hover:opacity-70 transition-opacity duration-500"></div>
              <div className="relative rounded-full p-1.5 bg-gradient-to-tr from-[var(--gradient-start)] to-[var(--gradient-end)] shadow-2xl transition-transform duration-500 hover:scale-105 hover:-rotate-3">
                <div className="rounded-full bg-[var(--surface)] p-2">
                  <img
                    src={profilePic}
                    alt="Profile"
                    className="h-48 w-48 md:h-64 md:w-64 rounded-full object-cover block border-4 border-[var(--surface-2)] shadow-inner"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;