import { NavBar } from "@/components/NavBar";
import { Section } from "@/components/Section";
import { ExpandableImage } from "@/components/ExpandableImage";
import { awards, experienceHighlights } from "@/data/portfolio";

const awardGroups = [
  "Robotics",
  "Science Olympiad",
  "Science Fair & Programming",
  "Club Competitions",
  "Technical Recognition",
];

export default function Experience() {
  return (
    <div className="min-h-screen bg-white text-black">
      <NavBar />
      <main className="mx-auto flex max-w-6xl flex-col gap-24 px-6 py-24 lg:px-8">
        <Section id="experience" eyebrow="Experience" title="Projects, teams, and what I’ve learned">
          <div className="space-y-8">
            {experienceHighlights.map((item) => (
              <div key={item.title}>
                {item.isParent ? (
                  <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
                ) : (
                  <div className={`border-b border-gray-200 pb-6 ${item.indentLevel ? 'ml-6' : ''}`}>
                    <h4 className="text-xl font-semibold">{item.title}</h4>
                    <p className="mt-2 text-base leading-relaxed text-gray-600">{item.description}</p>
                    {item.image ? (
                      <ExpandableImage src={item.image} alt="FRC Robotics and Competition" className="mt-6 max-w-3xl" />
                    ) : null}
                  </div>
                )}
              </div>
            ))}
          </div>
        </Section>
        <Section id="awards" eyebrow="Recognition" title="Awards and honors">
          <div className="space-y-14">
            {awardGroups.map((group) => {
              const groupAwards = awards.filter((award) => award.group === group);

              return (
                <section key={group}>
                  <div className="mb-5 flex items-center gap-4">
                    <h3 className="text-2xl font-semibold">{group}</h3>
                    <div className="h-px flex-1 bg-gray-200" />
                  </div>
                  <div className="grid gap-x-10 gap-y-0 lg:grid-cols-2">
                    {groupAwards.map((award) => (
                      <article key={award.title} className="border-b border-gray-200 py-6 first:pt-0 lg:[&:nth-child(2)]:pt-0">
                        <p className="mono text-xs uppercase tracking-[0.12em] text-[var(--signal)]">{award.category}</p>
                        <h4 className="mt-2 text-xl font-semibold">{award.title}</h4>
                        {award.description ? (
                          <p className="mt-2 text-base leading-relaxed text-gray-600">{award.description}</p>
                        ) : null}
                      </article>
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        </Section>
      </main>
    </div>
  );
}
