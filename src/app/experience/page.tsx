import { NavBar } from "@/components/NavBar";
import { Section } from "@/components/Section";
import { ExpandableImage } from "@/components/ExpandableImage";
import { experienceHighlights, type Highlight } from "@/data/portfolio";

const experienceGroups = experienceHighlights.reduce<
  { title: string; items: Highlight[] }[]
>((groups, item) => {
  if (item.isParent) {
    groups.push({ title: item.title, items: [] });
  } else {
    groups[groups.length - 1]?.items.push(item);
  }
  return groups;
}, []);

export default function Experience() {
  return (
    <div className="min-h-screen bg-white text-black">
      <NavBar />
      <main className="mx-auto flex max-w-6xl flex-col gap-24 px-6 py-24 lg:px-8">
        <Section id="experience" eyebrow="Experience" title="Projects, teams, and what I’ve learned">
          <div className="space-y-10">
            {experienceGroups.map((group, groupIndex) => (
              <section key={group.title} className="overflow-hidden border border-gray-200 bg-[#fafaf8]">
                <div className="flex items-center gap-4 border-b border-gray-200 px-6 py-5 sm:px-8">
                  <span className="mono text-xs text-[var(--signal)]">0{groupIndex + 1}</span>
                  <h3 className="text-xl font-semibold sm:text-2xl">{group.title}</h3>
                </div>
                <div className="grid gap-4 p-4 sm:grid-cols-2 sm:p-6">
                  {group.items.map((item) => (
                    <article key={item.title} className="flex flex-col border border-gray-200 bg-white p-5 sm:p-6">
                      <h4 className="text-lg font-semibold">{item.title}</h4>
                      <p className="mt-3 flex-1 text-sm leading-7 text-gray-600">{item.description}</p>
                      {item.image ? (
                        <ExpandableImage src={item.image} alt={`${item.title} at a robotics event`} className="mt-5" />
                      ) : null}
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </Section>
      </main>
    </div>
  );
}
