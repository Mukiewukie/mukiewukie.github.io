import Link from "next/link";
import { NavBar } from "@/components/NavBar";
import { Section } from "@/components/Section";

const problems = [
  {
    title: "Making robotics documentation easier to use",
    description:
      "FRC teams need clear, reliable instructions for wiring and connecting robot components, but useful information can be spread across many places. With other students and mentors, I helped build FRCElectrical.org, a free, open-source resource with a learning course, control-system explanations, wiring and connection guides, tool recommendations, and educator materials. We hope it can help teams around the world learn electrical basics and build with more confidence.",
  },
  {
    title: "Making opportunities easier to find",
    description:
      "Access to STEM learning and career opportunities is not the same for everyone. I helped start Science Olympiad and Envirothon at my school so more students could try team science and engineering events. I also worked on a project to help Charlotte residents explore in-demand careers, find nearby training, and understand transportation options. These experiences have helped me think about practical ways to make opportunities easier to discover and join.",
  },
  {
    title: "Using research and testing to understand problems",
    description:
      "I’ve explored questions in a few different settings: at Qualizeal, I helped process EEG data and test whether a model could classify emotional states; in Science Olympiad, teammates and I built devices and learned from repeated trials; and in a space-data project, I helped look for unusual patterns in seismic signals. These projects taught me that useful results take careful research, testing, and a willingness to revise an idea. I’m grateful to the people who helped me learn along the way.",
  },
];

export default function Problems() {
  return (
    <div className="min-h-screen bg-white text-black">
      <NavBar />
      <main className="mx-auto flex max-w-6xl flex-col gap-16 px-6 py-24 lg:px-8">
        <Section id="problems" eyebrow="What I’m exploring" title="Projects start with a problem">
          <p className="max-w-3xl text-lg leading-8 text-gray-600">
            I&apos;m a high school student, and I&apos;m still learning how to turn an idea into something useful. These are a few problems I care about—unequal access to STEM and career opportunities, gaps in robotics documentation, and questions that research might help us explore.
          </p>
        </Section>

        <div className="grid gap-6 md:grid-cols-2">
          {problems.map((problem, index) => (
            <article key={problem.title} className="border border-[var(--line)] p-6 sm:p-8">
              <p className="mono text-xs uppercase tracking-[0.16em] text-[var(--signal)]">
                Problem 0{index + 1}
              </p>
              <h3 className="display mt-4 text-2xl font-bold">{problem.title}</h3>
              <p className="mt-3 text-[15px] leading-7 text-gray-600">{problem.description}</p>
            </article>
          ))}
        </div>

        <p className="text-sm text-gray-600">
          Want to see the projects behind these examples?{" "}
          <Link href="/projects" className="font-semibold underline decoration-[var(--signal)] decoration-2 underline-offset-4">
            Browse my projects ↗
          </Link>
        </p>
      </main>
    </div>
  );
}
