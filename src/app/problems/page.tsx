import Link from "next/link";
import { NavBar } from "@/components/NavBar";
import { Section } from "@/components/Section";

const problems = [
  {
    title: "Helping robot teams find clear instructions",
    description:
      "FRC teams need good instructions for wiring their robots, but the information can be hard to find. I helped build FRCElectrical.org with other students and mentors. It is a free site with an intro course, wiring guides, tool suggestions, and materials for teachers. We hope teams around the world can use it to learn the basics and feel more confident working on their robots.",
  },
  {
    title: "Helping students find more opportunities",
    description:
      "Not every student has the same chances to try STEM. I helped start Science Olympiad and Envirothon at my school so more students could take part in science and engineering events. I also worked on a project to help people in Charlotte find jobs, nearby training, and ways to get there. I hope to keep finding ways to make these opportunities easier to learn about and join.",
  },
  {
    title: "Learning by researching and testing",
    description:
      "I've tried to answer questions in different projects. At Qualizeal, I helped work with EEG data and test if a computer model could sort emotional states. In Science Olympiad, my teammates and I built devices and tested them again and again. In a space-data project, I helped look for unusual patterns in seismic signals. These projects taught me to research carefully, test my ideas, and change things when they don't work. I'm thankful to the people who have helped me learn.",
  },
  {
    title: "Making lots of information easier to use",
    description:
      "I've worked on a few projects that bring information together. The Workforce Mobility Navigator puts local job, training, and transportation details in one place. Aid Compass helps people look through disaster aid programs and keep track of what to do next. FileAtlas helps people find and organize their files. I'm learning to think about what people need to know and how a tool can make it easier to find.",
  },
];

export default function Problems() {
  return (
    <div className="min-h-screen bg-white text-black">
      <NavBar />
      <main className="mx-auto flex max-w-6xl flex-col gap-16 px-6 py-24 lg:px-8">
        <Section id="problems" eyebrow="What I’m exploring" title="Projects start with a problem">
          <p className="max-w-3xl text-lg leading-8 text-gray-600">
            I&apos;m a high school student, and I&apos;m still learning how to turn ideas into useful projects. I care about helping more students try STEM, making robot instructions easier to find, and using research to answer questions.
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
