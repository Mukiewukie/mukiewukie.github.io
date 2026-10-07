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
            <p className="mt-8 max-w-xl text-lg leading-8 text-[var(--muted)]">I&apos;m Mukesh Ramanathan, a high school student who likes figuring out how things work. I&apos;m still learning through robotics, software, and projects that try to solve everyday problems.</p>
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
            <div><p className="max-w-2xl text-lg leading-8 text-[var(--muted)]">I helped build FRCElectrical.org, a learning guide for FIRST Robotics Competition teams. It explains the robot control system, wiring and crimping techniques, battery connections, mechanism wiring, and tools and procurement options. It also includes teaching materials for educators. The goal is to help teams learn electrical basics and build more reliable robots for competition. I&apos;m glad people have found it useful, and I&apos;m still learning how to make it better.</p><Link href="/projects" className="mt-8 inline-block text-sm font-semibold underline decoration-[var(--signal)] decoration-2 underline-offset-8">See the full project index ↗</Link></div>
          </div>
        </section>

        <section className="grid gap-6 border-t border-[var(--line)] py-16 sm:grid-cols-3">
          <div><p className="mono text-xs uppercase tracking-[0.15em] text-[var(--muted)]">01</p><p className="mt-4 text-2xl font-semibold">World championship robotics</p><p className="mt-2 text-sm leading-6 text-[var(--muted)]">I drove and worked with my team, which won the Hopper Division.</p></div>
          <div><p className="mono text-xs uppercase tracking-[0.15em] text-[var(--muted)]">02</p><p className="mt-4 text-2xl font-semibold">Problems I&apos;m exploring</p><p className="mt-2 text-sm leading-6 text-[var(--muted)]">From robot electrical reliability to finding local career training. <Link href="/problems" className="font-semibold underline decoration-[var(--signal)] decoration-2 underline-offset-4">See the problems ↗</Link></p></div>
          <div><p className="mono text-xs uppercase tracking-[0.15em] text-[var(--muted)]">03</p><p className="mt-4 text-2xl font-semibold">What I&apos;m looking for</p><p className="mt-2 text-sm leading-6 text-[var(--muted)]">I&apos;m a Charlotte high school student in the Class of 2027, hoping to keep learning through challenging, useful work.</p></div>
        </section>
      </main>
    </div>
  );
}
