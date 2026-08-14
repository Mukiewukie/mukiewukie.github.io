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
        <div className="flex items-center gap-6 text-sm">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <a
                key={link.href}
                href={link.href}
                className={`pb-3 px-4 transition-colors min-w-fit relative ${
                  isActive
                    ? "text-white font-semibold"
                    : "text-white hover:text-gray-300"
                }`}
              >
                {link.label}
                {isActive && <span className="absolute bottom-0 left-0 right-0 h-1 bg-white"></span>}
              </a>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
