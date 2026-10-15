import { NavBar } from "@/components/NavBar";
import { Section } from "@/components/Section";
import { ExpandableImage } from "@/components/ExpandableImage";

export default function About() {
  return (
    <div className="min-h-screen bg-white text-black">
      <NavBar />
      <main className="mx-auto flex max-w-6xl flex-col gap-24 px-6 py-24 lg:px-8">
        <Section id="about" eyebrow="About" title="What I’m learning by building">
          <div className="space-y-12">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-gray-600">
                I&apos;m a high school student in Charlotte, and I&apos;m interested in electrical engineering, robotics, and software. I learn best by trying things out. That might mean tracing a wiring problem on a robot, testing a model helicopter, or making a web tool easier to use. I&apos;m still figuring out which parts of engineering I like most.
              </p>
              <p className="text-lg leading-relaxed text-gray-600">
                I&apos;ve learned that my first idea is usually not the final one. FRC, hackathons, and personal projects have taught me to test things, learn from mistakes, and ask teammates for help. I like projects that solve a real problem, like helping a robotics team figure out its wiring or helping people find career training nearby.
              </p>
              <p className="text-lg leading-relaxed text-gray-600">
                I&apos;ve helped start Model UN, Science Olympiad, and Envirothon at my school. I&apos;m also an engineering captain on my robotics team, and I helped start FRCElectrical.org with other students and mentors. I&apos;ve learned that projects go better when people share ideas and help each other out.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="overflow-hidden rounded-lg border-2 border-black">
                <ExpandableImage
                  src="/images/DSC_3879.jpg"
                  alt="Robotics work"
                  className="h-72 border-0"
                />
              </div>
              <div className="overflow-hidden rounded-lg border-2 border-black">
                <ExpandableImage
                  src="/images/K71A1293.jpg"
                  alt="Mukesh and teammates at the FIRST Robotics World Championship"
                  className="h-72 border-0"
                />
              </div>
            </div>

            <div className="space-y-8">
              <h3 className="text-2xl font-semibold">How I like to work</h3>
              <div className="space-y-6">
                <div className="border-l-2 border-black pl-6">
                  <h4 className="text-lg font-semibold mb-2">Taking it one step at a time</h4>
                  <p className="text-base leading-relaxed text-gray-600">
                    I try to break big problems into smaller steps. On a robot, I might trace one circuit at a time. For a website, I might ask someone to try one feature. I&apos;m learning to check my ideas instead of just guessing.
                  </p>
                </div>
                <div className="border-l-2 border-black pl-6">
                  <h4 className="text-lg font-semibold mb-2">Collaboration</h4>
                  <p className="text-base leading-relaxed text-gray-600">
                    I do better when I listen and ask questions. On robotics and hackathon teams, I&apos;ve learned to share what I know, learn from others, and help with whatever needs doing.
                  </p>
                </div>
                <div className="border-l-2 border-black pl-6">
                  <h4 className="text-lg font-semibold mb-2">Learning through projects</h4>
                  <p className="text-base leading-relaxed text-gray-600">
                    I&apos;m still learning engineering, so every project teaches me something new. FRC, hackathons, and my internship have helped me try new coding tools and ways to work with data. I like learning something and then using it in a project.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Outside of tech</h3>
              <p className="text-lg leading-relaxed text-gray-600">
                I also like helping out in my community and learning from other people. At Diphda Medical, I saw how technology can help make healthcare more affordable. Mentoring FLL and FTC students has shown me how much it can mean to help younger students feel more confident in engineering. I helped start Science Olympiad, Model UN, and Envirothon clubs at my school, and got to learn alongside other students.
              </p>
              <p className="text-lg leading-relaxed text-gray-600">
                I enjoy art, video editing, and coding. I also like trading FRC shirts at competitions. It&apos;s a fun way to meet people from other teams, hear about their robots, and feel more connected to the FRC community. I bring some of that creativity into how I share my projects, too.
              </p>
            </div>
          </div>
        </Section>
      </main>
    </div>
  );
}
