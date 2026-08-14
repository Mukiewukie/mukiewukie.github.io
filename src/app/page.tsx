import { NavBar } from "@/components/NavBar";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black">
      <NavBar />
      <main id="home" className="mx-auto flex max-w-6xl flex-col gap-24 px-6 py-24 lg:px-8">
        <section className="space-y-16">
          <div className="space-y-6">
            <h1 className="text-5xl font-semibold tracking-tight sm:text-6xl">
              Mukesh Ramanathan.
            </h1>
            <p className="max-w-3xl text-2xl leading-relaxed text-gray-600">
              Engineering student focused on robotics, embedded systems, and building practical tools that turn ideas into reliable hardware and software.
            </p>
          </div>

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
              <span className="text-base">robotics engineering · electrical design · automation</span>
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
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-8">Explore</h2>
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
        </section>
      </main>
    </div>
  );
}
