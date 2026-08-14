import { NavBar } from "@/components/NavBar";
import { Section } from "@/components/Section";
import { experienceHighlights } from "@/data/portfolio";

export default function Experience() {
  return (
    <div className="min-h-screen bg-white text-black">
      <NavBar />
      <main className="mx-auto flex max-w-6xl flex-col gap-24 px-6 py-24 lg:px-8">
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
      </main>
    </div>
  );
}
