import Link from "next/link";
import type { Project } from "@/data/portfolio";

type ProjectGalleryProps = {
  projects: Project[];
};

export function ProjectGallery({ projects }: ProjectGalleryProps) {
  return (
    <div className="space-y-8">
      {projects.map((project) => (
        <article key={project.title} className="border-b border-gray-200 pb-8">
          <div className="flex flex-col gap-4">
            <div>
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="mt-2 text-base leading-relaxed text-gray-600">{project.description}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <span
                  key={item}
                  className="text-sm text-gray-500"
                >
                  {item}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              {project.website ? (
                <Link
                  href={project.website}
                  className="border-b-2 border-black pb-1 text-sm font-medium hover:text-gray-600 transition-colors"
                >
                  Visit website →
                </Link>
              ) : null}
              {project.link ? (
                <Link
                  href={project.link}
                  className="border-b-2 border-black pb-1 text-sm font-medium hover:text-gray-600 transition-colors"
                >
                  View project →
                </Link>
              ) : null}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
