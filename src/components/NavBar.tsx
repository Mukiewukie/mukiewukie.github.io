"use client";

const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export function NavBar() {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-200/80 bg-white/80 backdrop-blur dark:bg-slate-950/80 dark:border-slate-700/80">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#home" className="text-lg font-semibold tracking-tight text-slate-900 dark:text-slate-100">
          Mukesh Ramanathan
        </a>
        <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300 sm:gap-6">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition text-slate-800 dark:text-slate-100 hover:text-slate-900 dark:hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
