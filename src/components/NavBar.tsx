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
                className={`pb-3 px-2 transition-colors ${
                  isActive
                    ? "border-b-4 border-white text-white font-semibold"
                    : "text-white hover:text-gray-300"
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
