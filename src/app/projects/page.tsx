import { NavBar } from "@/components/NavBar";
import { ProjectGallery } from "@/components/ProjectGallery";
import { Section } from "@/components/Section";
import { projects } from "@/data/portfolio";

export default function Projects() {
  return (
    <div className="min-h-screen bg-white text-black">
      <NavBar />
      <main className="mx-auto flex max-w-6xl flex-col gap-24 px-6 py-24 lg:px-8">
        <Section id="projects" eyebrow="Projects" title="Selected work">
          <ProjectGallery projects={projects} />
        </Section>
      </main>
    </div>
  );
}
