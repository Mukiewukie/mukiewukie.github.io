"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/about", label: "About" },
  { href: "/problems", label: "Problems" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
];

export function NavBar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-20 border-b border-[var(--line)] bg-[var(--paper)]/95 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="display text-lg font-bold tracking-tight">
          MR<span className="text-[var(--signal)]">.</span>
        </Link>
        <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.12em] sm:gap-6">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <a
                key={link.href}
                href={link.href}
                className={`border-b-2 pb-1 transition-colors ${
                  isActive
                    ? "border-[var(--signal)] text-[var(--signal)]"
                      : "border-transparent text-[var(--muted)] hover:border-[var(--ink)] hover:text-[var(--ink)]"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
