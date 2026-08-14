"use client";

import { usePathname } from "next/navigation";

const links = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/contact", label: "Contact" },
];

export function NavBar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-black bg-black">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="/" className="text-lg font-semibold tracking-tight !text-white">
          Mukesh Ramanathan
        </a>
        <div className="flex items-center gap-4 text-sm">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <a
                key={link.href}
                href={link.href}
                className={`border-b-4 pb-1 transition-colors !text-white ${
                  isActive
                    ? "border-gray-400"
                    : "border-transparent hover:text-gray-300"
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
