import { NavBar } from "@/components/NavBar";
import { Section } from "@/components/Section";
import { ExpandableImage } from "@/components/ExpandableImage";

export default function About() {
  return (
    <div className="min-h-screen bg-white text-black">
      <NavBar />
      <main className="mx-auto flex max-w-6xl flex-col gap-24 px-6 py-24 lg:px-8">
        <Section id="about" eyebrow="About" title="How I approach engineering">
          <div className="space-y-12">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-gray-600">
                I am drawn to electrical engineering because it turns ideas into systems people can use. My work ranges from wiring competition robots to building web tools, and I enjoy the discipline of taking an idea from an early sketch to a reliable result. Along the way, I have learned to explain technical decisions clearly and contribute effectively on a team.
              </p>
              <p className="text-lg leading-relaxed text-gray-600">
                I learn best by building, testing, and revising. FRC, hackathons, and personal projects have taught me to work through constraints, learn from failed attempts, and improve a design with each iteration. I am most motivated by work that is both technically demanding and useful to other people.
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
              <h3 className="text-2xl font-semibold">What guides my work</h3>
              <div className="space-y-6">
                <div className="border-l-2 border-black pl-6">
                  <h4 className="text-lg font-semibold mb-2">Methodical problem solving</h4>
                  <p className="text-base leading-relaxed text-gray-600">
                    I break complex problems into smaller, testable parts. Whether I am troubleshooting an electrical system during competition or designing an application for a community need, I value evidence, iteration, and solutions that hold up under real conditions.
                  </p>
                </div>
                <div className="border-l-2 border-black pl-6">
                  <h4 className="text-lg font-semibold mb-2">Collaboration</h4>
                  <p className="text-base leading-relaxed text-gray-600">
                    Strong engineering depends on clear communication and shared ownership. Robotics and hackathon teams have taught me to listen carefully, explain tradeoffs, and contribute where the group needs me most.
                  </p>
                </div>
                <div className="border-l-2 border-black pl-6">
                  <h4 className="text-lg font-semibold mb-2">Learning through projects</h4>
                  <p className="text-base leading-relaxed text-gray-600">
                    Most of my learning comes from the work in front of me. FRC, hackathons, and internships have introduced me to new programming languages, frameworks, and data tools as each project has required them.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Outside of tech</h3>
              <p className="text-lg leading-relaxed text-gray-600">
                Outside of technical projects, I stay involved in work that serves my community. At Diphda Medical, I saw how accessible technology can support affordable healthcare. Mentoring FLL and FTC students has shown me the value of helping younger students find confidence in engineering, while Model UN and student leadership have strengthened my research, public-speaking, and advocacy skills.
              </p>
              <p className="text-lg leading-relaxed text-gray-600">
                I also enjoy art, video editing, and coding. Those creative interests shape how I communicate ideas and present my work.
              </p>
            </div>
          </div>
        </Section>
      </main>
    </div>
  );
}
