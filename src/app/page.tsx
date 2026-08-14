import Image from "next/image";
import Link from "next/link";
import { NavBar } from "@/components/NavBar";
import { ProjectGallery } from "@/components/ProjectGallery";
import { Section } from "@/components/Section";
import { contactLinks, experienceHighlights, projects } from "@/data/portfolio";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black">
      <NavBar />
      <main id="home" className="mx-auto flex max-w-4xl flex-col gap-24 px-6 py-24 lg:px-8">
        <section className="space-y-8">
          <div className="space-y-6">
            <h1 className="text-5xl font-semibold tracking-tight sm:text-6xl">
              Mukesh Ramanathan.
            </h1>
            <p className="max-w-2xl text-xl leading-relaxed text-gray-600">
              Engineering student focused on robotics, embedded systems, and building practical tools that turn ideas into reliable hardware and software.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="border-b-2 border-black pb-1 text-sm font-medium hover:text-gray-600 transition-colors"
            >
              Projects →
            </a>
            <a
              href="#contact"
              className="border-b-2 border-black pb-1 text-sm font-medium hover:text-gray-600 transition-colors"
            >
              Contact →
            </a>
          </div>
        </section>

        <Section id="about" eyebrow="About" title="Engineering mindset, thoughtful execution">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-gray-600">
              I work with electrical engineering fundamentals, robotics, and software experimentation to create systems that are both functional and aesthetically pleasing. Building reliable prototypes, improving control workflows, and learning how to communicate technical progress clearly in collaborative teams.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="overflow-hidden border border-black">
                <img
                  src="/images/DSC_3879.jpg"
                  alt=""
                  width={800}
                  height={533}
                  className="w-full h-72 object-cover"
                />
              </div>
              <div className="overflow-hidden border border-black">
                <img
                  src="/images/1774531076220.jpg"
                  alt=""
                  width={800}
                  height={533}
                  className="w-full h-72 object-cover object-top"
                />
              </div>
            </div>
          </div>
        </Section>

        <Section id="projects" eyebrow="Projects" title="Selected work">
          <ProjectGallery projects={projects} />
        </Section>

        <Section id="experience" eyebrow="Experience" title="Leadership and technical depth">
          <div className="space-y-6">
            {experienceHighlights.map((item) => (
              <div key={item.title} className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-2 text-base leading-relaxed text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="contact" eyebrow="Contact" title="Let's build something thoughtful">
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
