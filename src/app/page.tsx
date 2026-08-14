import { NavBar } from "@/components/NavBar";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black">
      <NavBar />
      <main id="home" className="mx-auto flex max-w-6xl flex-col gap-24 px-6 py-24 lg:px-8">
        <section className="space-y-8">
          <div className="space-y-6">
            <h1 className="text-5xl font-semibold tracking-tight sm:text-6xl">
              Mukesh Ramanathan.
            </h1>
            <p className="max-w-2xl text-xl leading-relaxed text-gray-600">
              Engineering student focused on robotics, embedded systems, and building practical tools that turn ideas into reliable hardware and software.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <a
              href="/projects"
              className="border-b-2 border-black pb-1 text-sm font-medium hover:text-gray-600 transition-colors"
            >
              Projects →
            </a>
            <a
              href="/contact"
              className="border-b-2 border-black pb-1 text-sm font-medium hover:text-gray-600 transition-colors"
            >
              Contact →
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
