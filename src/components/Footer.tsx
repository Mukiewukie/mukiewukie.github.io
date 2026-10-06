const links = [
  { label: "Email", href: "mailto:16mukeshr@gmail.com" },
  { label: "GitHub", href: "https://github.com/Mukiewukie" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/mukesh-ramanathan-6b0480280/" },
  { label: "Instagram", href: "https://instagram.com/mukiewukie16" },
];

export function Footer() {
  return (
    <footer id="contact" className="mt-auto bg-[var(--ink)] text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-20">
        <div>
          <p className="mono text-xs uppercase tracking-[0.18em] text-[#b9c8ff]">Get in touch</p>
          <h2 className="display mt-4 max-w-xl text-4xl font-bold leading-tight sm:text-5xl">Let&apos;s build something useful.</h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-gray-300">
            I am interested in robotics, embedded systems, and collaborative engineering work. Reach out to discuss a project, opportunity, or problem worth solving.
          </p>
        </div>
        <div className="flex flex-col justify-end gap-4 lg:items-start">
          {links.map((link) => (
            <a key={link.label} href={link.href} className="text-lg font-semibold transition-colors hover:text-[#b9c8ff]">
              {link.label} <span aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
