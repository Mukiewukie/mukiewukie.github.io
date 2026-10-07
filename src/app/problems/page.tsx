import Link from "next/link";
import { NavBar } from "@/components/NavBar";
import { Section } from "@/components/Section";

const problems = [
  {
    title: "Helping robotics teams with electrical work",
    description:
      "FRC teams need to connect a lot of electrical components safely and reliably, often under a tight build schedule. I helped make FRCElectrical.org, a guide to wiring, crimping, batteries, tools, and procurement that teams can use while learning and building.",
  },
  {
    title: "Finding a path to local careers",
    description:
      "It can be hard to connect a career goal with nearby training and a realistic way to get there. I worked on a project that brings together information about in-demand jobs, local training, and transportation access for Charlotte residents.",
  },
  {
    title: "Exploring patterns in EEG data",
    description:
      "EEG data can be difficult to interpret. During my internship at Qualizeal, I helped build a web application to process EEG data and explored whether a machine-learning model could classify emotional states. I learned that preparing data and testing an approach carefully are important parts of the work.",
  },
  {
    title: "Making disaster aid easier to navigate",
    description:
      "After a disaster, people may need to sort through many assistance programs, documents, and deadlines. I worked with a team on Aid Compass, a web app designed to help North Carolina survivors understand aid options and keep track of next steps.",
  },
];

export default function Problems() {
  return (
    <div className="min-h-screen bg-white text-black">
      <NavBar />
      <main className="mx-auto flex max-w-6xl flex-col gap-16 px-6 py-24 lg:px-8">
        <Section id="problems" eyebrow="What I’m exploring" title="Projects start with a problem">
          <p className="max-w-3xl text-lg leading-8 text-gray-600">
            I&apos;m a high school student, and I&apos;m still learning how to turn an idea into something useful. These are a few practical problems that have shaped the projects I&apos;ve worked on so far.
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
