const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export function NavBar() {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-200/80 bg-white/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#home" className="text-lg font-semibold tracking-tight text-slate-900">
          Mukesh Ramanathan
        </a>
        <div className="flex gap-4 text-sm text-slate-600 sm:gap-6">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition hover:text-slate-900"
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
