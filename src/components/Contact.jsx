import { useState } from 'react';

// Use Vite env vars when available, fallback to localhost
const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:5000';
const CONTACT_ENDPOINT = import.meta.env.VITE_CONTACT_ENDPOINT || '/api/contact';

const Contact = () => {
  // State to hold form input
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  // State to show the user if the message is sending, succeeded, or failed
  const [status, setStatus] = useState('');

  // Update state when user types
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  // Handle the form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevents the page from refreshing
    setStatus('sending');

    try {
      // Send the POST request to your Express backend
      const response = await fetch(`${API_BASE}${CONTACT_ENDPOINT}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' }); // Clear the form
        setTimeout(() => setStatus(''), 5000); // Hide success message after 5 seconds
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      {/* Decorative Background Blob */}
      <div className="absolute bottom-0 left-0 -translate-x-1/3 translate-y-1/3 w-[600px] h-[600px] bg-[var(--accent)] rounded-full blur-[150px] opacity-10 pointer-events-none"></div>

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-16 flex flex-col items-center text-center fade-in-up">
          <span className="inline-block px-4 py-1.5 mb-6 rounded-full border border-[var(--border)] bg-[var(--surface-2)]/80 backdrop-blur-md text-xs font-bold uppercase tracking-[0.3em] text-[var(--accent)] shadow-sm">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[var(--text)]">
            Contact <span className="gradient-text">Me</span>
          </h2>
          <p className="mt-4 max-w-2xl text-[var(--muted)] text-lg">
            Whether you have a question about my projects, a career opportunity, or just want to say hi, my inbox is always open.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          
          {/* Left Side: Contact Information */}
          <div className="group relative flex flex-col rounded-[2.5rem] border border-[var(--border)] bg-[var(--surface)]/80 backdrop-blur-xl p-8 md:p-12 shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_40px_-10px_var(--hover-glow)] hover:border-[var(--accent)]/50 fade-in-up">
            <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-[var(--nav-accent)] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-10 pointer-events-none"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-6 text-[var(--text)]">Let's Connect</h3>
              <p className="text-[var(--muted)] mb-10 leading-relaxed text-lg">
                I'm actively looking for junior full-stack developer roles or exciting internships. Feel free to reach out and let's build something great together.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-center gap-6 text-[var(--muted)]">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--gradient-start)] to-[var(--gradient-end)] text-[var(--surface)] shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--accent)] mb-1">Location</p>
                    <span className="text-lg font-medium text-[var(--text)]">Mumbai, Maharashtra</span>
                  </div>
                </div>
                <div className="flex items-center gap-6 text-[var(--muted)]">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--gradient-start)] to-[var(--gradient-end)] text-[var(--surface)] shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--accent)] mb-1">Email</p>
                    <span className="text-lg font-medium text-[var(--text)]">pramodc431510@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: The Form */}
          <form onSubmit={handleSubmit} className="group relative rounded-[2.5rem] border border-[var(--border)] bg-[var(--surface)]/80 backdrop-blur-xl p-8 md:p-12 shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_40px_-10px_var(--hover-glow)] hover:border-[var(--accent)]/50 fade-in-up" style={{ animationDelay: '150ms' }}>
            <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-[var(--nav-accent)] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-10 pointer-events-none"></div>

            <div className="relative z-10 flex flex-col gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-bold tracking-wide text-[var(--text)] mb-2">Name</label>
                <input 
                  type="text" 
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="w-full bg-[var(--surface-2)] border border-[var(--border)] rounded-xl px-5 py-4 text-[var(--text)] placeholder-[var(--muted)]/50 focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] transition-all"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-bold tracking-wide text-[var(--text)] mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                  className="w-full bg-[var(--surface-2)] border border-[var(--border)] rounded-xl px-5 py-4 text-[var(--text)] placeholder-[var(--muted)]/50 focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] transition-all"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-bold tracking-wide text-[var(--text)] mb-2">Message</label>
                <textarea 
                  id="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="How can we work together?"
                  className="w-full bg-[var(--surface-2)] border border-[var(--border)] rounded-xl px-5 py-4 text-[var(--text)] placeholder-[var(--muted)]/50 focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] transition-all resize-none"
                ></textarea>
              </div>

              {/* Status Messages */}
              {status === 'success' && <p className="text-emerald-500 font-bold text-center bg-emerald-500/10 py-3 rounded-lg border border-emerald-500/20">Message sent successfully!</p>}
              {status === 'error' && <p className="text-rose-500 font-bold text-center bg-rose-500/10 py-3 rounded-lg border border-rose-500/20">Something went wrong. Please try again.</p>}

              <button 
                type="submit" 
                disabled={status === 'sending'}
                className="group/btn mt-2 w-full inline-flex items-center justify-center gap-3 py-4 rounded-xl bg-[var(--accent)] text-white font-bold text-lg shadow-lg transition-all duration-300 hover:bg-[var(--accent-2)] hover:shadow-[0_0_20px_var(--hover-glow)] hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
                {status !== 'sending' && (
                  <svg className="w-5 h-5 transition-transform duration-300 group-hover/btn:-translate-y-1 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
                )}
              </button>
            </div>
          </form>

        </div>
      </div>
    </section>
  );
};

export default Contact;