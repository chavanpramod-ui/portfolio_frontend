import { useState } from 'react';

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
      const response = await fetch('http://localhost:5000/api/contact', {
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
    <section className="py-20 bg-[var(--surface)] text-[var(--text)] px-6">
      <div className="max-w-6xl mx-auto">
        
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
          Contact Me
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Left Side: Contact Information */}
          <div className="bg-[var(--surface-2)] p-8 md:p-12 rounded-2xl border border-[var(--border)] shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-[var(--text)]">Let's Connect</h3>
            <p className="text-[var(--muted)] mb-8 leading-relaxed">
              Whether you have a question about my MERN stack projects, a career opportunity, or just want to say hi, my inbox is always open. I'll try my best to get back to you!
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center text-[var(--muted)]">
                <span className="mr-4 text-[var(--accent-2)] text-2xl">📍</span>
                <span className="text-lg">Nashik, Maharashtra</span>
              </div>
              <div className="flex items-center text-[var(--muted)]">
                <span className="mr-4 text-[var(--accent)] text-2xl">📧</span>
                <span className="text-lg">pramodc431510@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Right Side: The Form */}
          <form onSubmit={handleSubmit} className="bg-[var(--surface-2)] p-8 md:p-12 rounded-2xl border border-[var(--border)] shadow-lg flex flex-col gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-[var(--muted)] mb-2">Name</label>
              <input 
                type="text" 
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="your name"
                className="w-full bg-[var(--surface)] border border-[var(--border)] rounded-lg px-4 py-3 text-[var(--text)] focus:outline-none focus:border-[var(--accent)] transition-colors"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[var(--muted)] mb-2">Email</label>
              <input 
                type="email" 
                id="email" 
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="example12@gmail.com"
                className="w-full bg-[var(--surface)] border border-[var(--border)] rounded-lg px-4 py-3 text-[var(--text)] focus:outline-none focus:border-[var(--accent)] transition-colors"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-[var(--muted)] mb-2">Message</label>
              <textarea 
                id="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="How can we work together?"
                className="w-full bg-[var(--surface)] border border-[var(--border)] rounded-lg px-4 py-3 text-[var(--text)] focus:outline-none focus:border-[var(--accent)] transition-colors resize-none"
              ></textarea>
            </div>

            {/* Status Messages */}
            {status === 'success' && <p className="text-emerald-400 font-medium text-center">Message sent successfully!</p>}
            {status === 'error' && <p className="text-red-400 font-medium text-center">Something went wrong. Please try again.</p>}

            <button 
              type="submit" 
              disabled={status === 'sending'}
              className="mt-4 w-full py-4 bg-[var(--accent)] hover:bg-[var(--accent-2)] disabled:opacity-50 text-white rounded-lg font-bold text-lg transition-all transform hover:-translate-y-0.5 hover:scale-[1.02] shadow-lg"
            >
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>
          </form>

        </div>
      </div>
    </section>
  );
};

export default Contact;