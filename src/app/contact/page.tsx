import { NavBar } from "@/components/NavBar";
import { Section } from "@/components/Section";

const contactLinks = [
  { label: "Email", href: "mailto:16mukeshr@gmail.com" },
  { label: "Phone", href: "tel:7048602955" },
  { label: "Instagram", href: "https://instagram.com/mukiewukie16" },
  { label: "GitHub", href: "https://github.com/Mukiewukie" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/mukesh-ramanathan-6b0480280/" },
];

export default function Contact() {
  return (
    <div className="min-h-screen bg-white text-black">
      <NavBar />
      <main className="mx-auto flex max-w-6xl flex-col gap-24 px-6 py-24 lg:px-8">
        <Section id="contact" eyebrow="Contact" title="Let's build something impactful">
          <div className="space-y-6">
            <p className="max-w-2xl text-lg leading-relaxed text-gray-600">
              I'm interested in robotics, embedded systems, and collaborative engineering work. Feel free to reach out! I'm always open for conversations about building better products.
            </p>
            <div className="flex flex-wrap gap-4">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="border-b-2 border-black pb-1 text-sm font-medium hover:text-gray-600 transition-colors"
                >
                  {link.label} →
                </a>
              ))}
            </div>
          </div>
        </Section>
      </main>
    </div>
  );
}
