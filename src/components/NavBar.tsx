"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export function NavBar() {
  const [activeTab, setActiveTab] = useState<string>("#about");

  useEffect(() => {
    const handleHashChange = () => {
      setActiveTab(window.location.hash || "#about");
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <header className="sticky top-0 z-20 border-b border-black bg-white">
      <nav className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#home" className="text-lg font-semibold tracking-tight">
          Mukesh Ramanathan
        </a>
        <div className="flex items-center gap-4 text-sm">
          {links.map((link) => {
            const isActive = activeTab === link.href;
            return (
              <a
                key={link.href}
                href={link.href}
                className={`border-b-2 pb-1 transition-colors ${
                  isActive
                    ? "border-black text-black"
                    : "border-transparent text-gray-600 hover:text-black"
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
