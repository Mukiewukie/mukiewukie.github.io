import { NavBar } from "@/components/NavBar";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--paper)] text-[var(--ink)]">
      <NavBar />
      <main id="home" className="mx-auto max-w-6xl px-6 pb-24 lg:px-8">
        <section className="reveal grid min-h-[calc(100vh-73px)] items-center gap-12 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:py-24">
          <div>
            <p className="mono mb-8 text-xs uppercase tracking-[0.2em] text-[var(--signal)]">High school student · Class of 2027 · Charlotte, NC</p>
            <h1 className="display max-w-4xl text-6xl font-bold leading-[0.94] sm:text-8xl">Learning by <span className="text-[var(--signal)]">building.</span></h1>
            <p className="mt-8 max-w-xl text-lg leading-8 text-[var(--muted)]">I&apos;m Mukesh Ramanathan, a high school student in Charlotte, NC, in the Class of 2027. I&apos;m interested in making STEM learning easier to access, improving the guides students use to build robots, and using software to explore research questions. I&apos;m still learning how to help with these problems, one project at a time.</p>
            <div className="mt-10 flex flex-wrap items-center gap-5">
              <Link href="/projects" className="bg-[var(--ink)] px-5 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5">Explore selected work <span aria-hidden="true">↗</span></Link>
              <a href="#contact" className="text-sm font-semibold underline decoration-[var(--signal)] decoration-2 underline-offset-8">Let&apos;s connect</a>
            </div>
          </div>
          <div className="dot-grid relative min-h-[420px] overflow-hidden border border-[var(--line)] bg-[#e6e8e3] p-4 sm:min-h-[520px]">
            <Image src="/images/1774531076220.jpg" alt="Mukesh at a FIRST Robotics Competition event" fill sizes="(max-width: 1024px) 100vw, 40vw" className="!relative h-full min-h-[388px] w-full object-cover object-center sm:min-h-[488px]" priority />
            <div className="absolute bottom-8 left-8 bg-[var(--ink)] px-4 py-3 text-white"><p className="mono text-[10px] uppercase tracking-[0.15em] text-[#b9c8ff]">Currently</p><p className="mt-1 text-sm">Open to internships + build projects</p></div>
          </div>
        </section>

        <section className="border-t border-[var(--line)] py-16">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div><p className="mono text-xs uppercase tracking-[0.2em] text-[var(--signal)]">01 / featured build</p><h2 className="display mt-4 text-4xl font-bold">A clearer way for robot teams to work on electrical systems.</h2></div>
            <div><p className="max-w-2xl text-lg leading-8 text-[var(--muted)]">I&apos;m grateful to work with other students and mentors on FRCElectrical.org, a free, open-source learning resource for FRC teams around the world. It brings together an introductory course, control-system explanations, wiring and connection guides, tool and parts recommendations, and an educators handbook. We hope it helps students and teams find clear electrical guidance, whether they&apos;re new to FRC or teaching others. I&apos;m glad to help maintain it and learn from the teams who use it.</p><Link href="https://www.chiefdelphi.com/t/introducing-frcelectrical-org-ai-free-high-quality-open-source-electrical-knowledge/522889" className="mt-5 inline-block text-sm font-semibold underline decoration-[var(--signal)] decoration-2 underline-offset-4">Read our introduction on Chief Delphi ↗</Link><br /><Link href="/projects" className="mt-5 inline-block text-sm font-semibold underline decoration-[var(--signal)] decoration-2 underline-offset-8">See the full project index ↗</Link></div>
          </div>
        </section>

        <section className="grid gap-6 border-t border-[var(--line)] py-16 sm:grid-cols-3">
          <div><p className="mono text-xs uppercase tracking-[0.15em] text-[var(--muted)]">01</p><p className="mt-4 text-2xl font-semibold">World championship robotics</p><p className="mt-2 text-sm leading-6 text-[var(--muted)]">I drove for YETI 3506 at the FIRST Robotics World Championship, where our alliance won the Hopper Division. I was grateful to compete alongside my teammates and alliance partners, and learned how much trust and communication matter in a match.</p></div>
          <div><p className="mono text-xs uppercase tracking-[0.15em] text-[var(--muted)]">02</p><p className="mt-4 text-2xl font-semibold">Problems I&apos;m exploring</p><p className="mt-2 text-sm leading-6 text-[var(--muted)]">Unequal access to STEM, gaps in robot-building documentation, and research questions like whether EEG data can help classify emotional states. <Link href="/problems" className="font-semibold underline decoration-[var(--signal)] decoration-2 underline-offset-4">See the projects ↗</Link></p></div>
          <div><p className="mono text-xs uppercase tracking-[0.15em] text-[var(--muted)]">03</p><p className="mt-4 text-2xl font-semibold">Where I&apos;d like to grow</p><p className="mt-2 text-sm leading-6 text-[var(--muted)]">I&apos;m in the Class of 2027 and based in Charlotte, NC. I&apos;d be grateful for chances to learn from people working on practical STEM, engineering, or research projects and to contribute wherever I can.</p></div>
        </section>
      </main>
    </div>
  );
}
