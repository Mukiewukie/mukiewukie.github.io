import { NavBar } from "@/components/NavBar";
import { Section } from "@/components/Section";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black">
      <NavBar />
      <main id="home" className="mx-auto flex max-w-6xl flex-col gap-24 px-6 py-24 lg:px-8">
        <Section id="home" eyebrow="Home" title="Mukesh Ramanathan.">
          <div className="space-y-16">
            <p className="max-w-3xl text-2xl leading-relaxed text-gray-600">
              Engineering student focused on robotics, embedded systems, and building practical tools that turn ideas into reliable hardware and software.
            </p>

            <div className="space-y-4">
              <div className="flex items-baseline gap-4">
                <span className="text-sm font-semibold uppercase tracking-wider text-gray-500 w-24">role</span>
                <span className="text-base">student · engineer</span>
              </div>
              <div className="flex items-baseline gap-4">
                <span className="text-sm font-semibold uppercase tracking-wider text-gray-500 w-24">based</span>
                <span className="text-base">charlotte, nc</span>
              </div>
              <div className="flex items-baseline gap-4">
                <span className="text-sm font-semibold uppercase tracking-wider text-gray-500 w-24">focus</span>
                <span className="text-base">robotics · electrical engineering · design</span>
              </div>
              <div className="flex items-baseline gap-4">
                <span className="text-sm font-semibold uppercase tracking-wider text-gray-500 w-24">class</span>
                <span className="text-base">2027</span>
              </div>
              <div className="flex items-baseline gap-4">
                <span className="text-sm font-semibold uppercase tracking-wider text-gray-500 w-24">status</span>
                <span className="text-base">open to internships & build projects</span>
              </div>
            </div>
          </div>
        </Section>

        <Section id="explore" eyebrow="Explore" title="">
          <div className="space-y-4">
            <a
              href="/about"
              className="block border-b border-gray-200 pb-4 hover:text-gray-600 transition-colors"
            >
              <div className="flex items-center justify-between">
                <span className="text-lg">About</span>
                <span>→</span>
              </div>
            </a>
            <a
              href="/projects"
              className="block border-b border-gray-200 pb-4 hover:text-gray-600 transition-colors"
            >
              <div className="flex items-center justify-between">
                <span className="text-lg">Projects</span>
                <span>→</span>
              </div>
            </a>
            <a
              href="/experience"
              className="block border-b border-gray-200 pb-4 hover:text-gray-600 transition-colors"
            >
              <div className="flex items-center justify-between">
                <span className="text-lg">Experience</span>
                <span>→</span>
              </div>
            </a>
            <a
              href="/contact"
              className="block border-b border-gray-200 pb-4 hover:text-gray-600 transition-colors"
            >
              <div className="flex items-center justify-between">
                <span className="text-lg">Contact</span>
                <span>→</span>
              </div>
            </a>
          </div>
        </Section>
      </main>
    </div>
  );
}
