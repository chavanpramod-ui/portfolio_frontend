function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[#2C2C2A] text-[var(--muted)]">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-2">
          <p className="text-sm">Web portfolio crafted with React, Tailwind CSS, and Node.js.</p>
          <p className="text-sm">Designed for modern, responsive presentation and easy navigation.</p>
        </div>

        <div className="space-y-2 text-sm text-[var(--text)] sm:text-right">
          <p>Let's connect:</p>
          <p>pramodc431510@gmail.com.com</p>
          <p className="text-[var(--muted)]">© {new Date().getFullYear()} Pramod Chavan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
