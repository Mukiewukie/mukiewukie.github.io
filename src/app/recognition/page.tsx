import { NavBar } from "@/components/NavBar";
import { Section } from "@/components/Section";
import { awards } from "@/data/portfolio";

const awardGroups = [
  "Robotics",
  "Science Olympiad",
  "Science Fair & Programming",
  "Club Competitions",
  "Technical Recognition",
];

export default function Recognition() {
  return (
    <div className="min-h-screen bg-white text-black">
      <NavBar />
      <main className="mx-auto flex max-w-6xl flex-col gap-24 px-6 py-24 lg:px-8">
        <Section id="recognition" eyebrow="Recognition" title="Awards and honors">
          <div className="space-y-10">
            {awardGroups.map((group, groupIndex) => {
              const groupAwards = awards.filter((award) => award.group === group);

              return (
                <section key={group} className="overflow-hidden border border-gray-200 bg-[#fafaf8]">
                  <div className="flex items-center justify-between gap-4 border-b border-gray-200 px-6 py-5 sm:px-8">
                    <div className="flex items-center gap-4">
                      <span className="mono text-xs text-[var(--signal)]">0{groupIndex + 1}</span>
                      <h3 className="text-xl font-semibold sm:text-2xl">{group}</h3>
                    </div>
                    <span className="mono text-xs text-gray-500">{groupAwards.length} awards</span>
                  </div>
                  <div className="grid gap-4 p-4 sm:grid-cols-2 sm:p-6">
                    {groupAwards.map((award) => (
                      <article key={award.title} className="border border-gray-200 bg-white p-5 sm:p-6">
                        <p className="mono text-xs uppercase tracking-[0.12em] text-[var(--signal)]">{award.category}</p>
                        <h4 className="mt-2 text-lg font-semibold leading-snug">{award.title}</h4>
                        {award.description ? (
                          <p className="mt-3 text-sm leading-7 text-gray-600">{award.description}</p>
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
