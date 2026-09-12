"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type ExpandableImageProps = {
  src: string;
  alt: string;
  className?: string;
};

export function ExpandableImage({ src, alt, className = "aspect-[16/9]" }: ExpandableImageProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("keydown", closeOnEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className={`relative block w-full overflow-hidden border border-gray-200 text-left transition hover:border-[var(--signal)] focus:outline-none focus:ring-2 focus:ring-[var(--signal)] focus:ring-offset-2 ${className}`}
        aria-label={`Expand image: ${alt}`}
      >
        <Image src={src} alt={alt} fill sizes="(max-width: 768px) 100vw, 720px" className="object-cover transition duration-500 hover:scale-[1.02]" />
        <span className="absolute bottom-3 right-3 bg-black/80 px-3 py-2 text-xs font-semibold text-white">Expand image</span>
      </button>

      {isOpen ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-6"
          role="dialog"
          aria-modal="true"
          aria-label={alt}
          onClick={() => setIsOpen(false)}
        >
          <div className="relative h-full w-full max-w-6xl" onClick={(event) => event.stopPropagation()}>
            <Image src={src} alt={alt} fill sizes="100vw" className="object-contain" />
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="absolute right-0 top-0 border border-white/30 bg-black/80 px-3 py-2 text-sm font-semibold text-white hover:bg-black"
            >
              Close
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}