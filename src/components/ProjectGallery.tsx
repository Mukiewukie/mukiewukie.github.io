import Link from "next/link";
import type { Project } from "@/data/portfolio";
import { ExpandableImage } from "@/components/ExpandableImage";

type ProjectGalleryProps = {
  projects: Project[];
};

export function ProjectGallery({ projects }: ProjectGalleryProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {projects.map((project, index) => (
        <article key={project.title} className={`group overflow-hidden border border-[var(--line)] bg-white ${index === 0 ? "md:col-span-2" : ""}`}>
          {project.preview && project.website ? (
            <div className={`relative overflow-hidden bg-[#e9e9e4] ${index === 0 ? "aspect-[2.4/1]" : "aspect-[16/9]"}`}>
              <div className="absolute inset-x-0 top-0 z-10 flex h-8 items-center gap-2 border-b border-[var(--line)] bg-white/95 px-4">
                <span className="h-2 w-2 rounded-full bg-[#ff6b5f]" />
                <span className="h-2 w-2 rounded-full bg-[#f7c84b]" />
                <span className="h-2 w-2 rounded-full bg-[#56c271]" />
                <span className="mono ml-2 truncate text-[10px] text-[var(--muted)]">frcelectrical.org</span>
              </div>
              <iframe
                src={project.website}
                title={`${project.title} website preview`}
                loading="lazy"
                className="h-full w-full border-0 bg-white pt-8"
              />
            </div>
          ) : project.image ? (
            <ExpandableImage
              src={project.image}
              alt={`${project.title} project image`}
              className={`bg-[#e9e9e4] ${index === 0 ? "aspect-[2.4/1]" : "aspect-[16/9]"}`}
            />
          ) : null}
          <div className="flex flex-col gap-5 p-6 sm:p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="mono mb-3 text-xs uppercase tracking-[0.16em] text-[var(--signal)]">0{index + 1} / selected build</p>
                <h3 className="display text-2xl font-bold sm:text-3xl">{project.title}</h3>
                <p className="mt-3 max-w-2xl text-[15px] leading-7 text-[var(--muted)]">{project.description}</p>
              </div>
              <span className="mono hidden text-xs text-[var(--muted)] sm:block">{String(index + 1).padStart(2, "0")}</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <span key={item} className="border border-[var(--line)] px-2 py-1 text-xs text-[var(--muted)]">{item}</span>
              ))}
            </div>
            <div className="flex flex-wrap gap-5">
              {project.website ? (
                <Link
                  href={project.website}
                  className="text-sm font-semibold text-[var(--signal)] transition-colors hover:text-black"
                >
                  Visit website <span aria-hidden="true">↗</span>
                </Link>
              ) : null}
              {project.link ? (
                <Link
                  href={project.link}
                  className="text-sm font-semibold transition-colors hover:text-[var(--signal)]"
                >
                  View project <span aria-hidden="true">↗</span>
                </Link>
              ) : null}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
