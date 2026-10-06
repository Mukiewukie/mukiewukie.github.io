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
            <p className="mono mb-8 text-xs uppercase tracking-[0.2em] text-[var(--signal)]">Electrical engineering / robotics / software</p>
            <h1 className="display max-w-4xl text-6xl font-bold leading-[0.94] sm:text-8xl">Building systems that <span className="text-[var(--signal)]">move.</span></h1>
            <p className="mt-8 max-w-xl text-lg leading-8 text-[var(--muted)]">I&apos;m Mukesh Ramanathan, an engineering student in Charlotte focused on practical hardware, software, and the systems that connect them.</p>
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
            <div><p className="mono text-xs uppercase tracking-[0.2em] text-[var(--signal)]">01 / featured build</p><h2 className="display mt-4 text-4xl font-bold">Reliable electrical systems for competitive robots.</h2></div>
            <div><p className="max-w-2xl text-lg leading-8 text-[var(--muted)]">I am interested in the point where careful documentation, sound electrical design, and real-time debugging lead to better performance.</p><Link href="/projects" className="mt-8 inline-block text-sm font-semibold underline decoration-[var(--signal)] decoration-2 underline-offset-8">See the full project index ↗</Link></div>
          </div>
        </section>

        <section className="grid gap-6 border-t border-[var(--line)] py-16 sm:grid-cols-3">
          <div><p className="mono text-xs uppercase tracking-[0.15em] text-[var(--muted)]">01</p><p className="mt-4 text-2xl font-semibold">World championship robotics</p><p className="mt-2 text-sm leading-6 text-[var(--muted)]">Driver and team member. Hopper Division winner.</p></div>
          <div><p className="mono text-xs uppercase tracking-[0.15em] text-[var(--muted)]">02</p><p className="mt-4 text-2xl font-semibold">Web and data projects</p><p className="mt-2 text-sm leading-6 text-[var(--muted)]">Projects in Next.js, Python, and data analysis.</p></div>
          <div><p className="mono text-xs uppercase tracking-[0.15em] text-[var(--muted)]">03</p><p className="mt-4 text-2xl font-semibold">Class of 2027</p><p className="mt-2 text-sm leading-6 text-[var(--muted)]">Charlotte, NC. Looking for challenging problems with practical outcomes.</p></div>
        </section>
      </main>
    </div>
  );
}
