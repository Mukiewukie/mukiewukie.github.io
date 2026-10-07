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
                I&apos;m a high school student in Charlotte, and I&apos;m interested in electrical engineering, robotics, and software. So far, I&apos;ve learned the most by working on real projects: tracing a wiring problem on a competition robot, testing a model helicopter, or trying to make a web tool easier to use. I&apos;m still figuring out which parts of engineering I enjoy most.
              </p>
              <p className="text-lg leading-relaxed text-gray-600">
                Building things has also taught me that my first idea is rarely the finished one. FRC, hackathons, and personal projects have given me practice testing ideas, learning from mistakes, and asking teammates for help. I especially like projects that solve a concrete problem, such as helping a robotics team troubleshoot wiring or helping people find local career training.
              </p>
              <p className="text-lg leading-relaxed text-gray-600">
                I&apos;ve had the chance to help start Model UN, Science Olympiad, and Envirothon at my school, and I serve as an engineering captain on my robotics team. I also started FRCElectrical.org with help from others. These experiences have taught me that a good project depends on people sharing ideas and pitching in.
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
                    I try to break a big problem into smaller things I can check. On a robot, that might mean tracing one circuit at a time. In a software project, it might mean testing one feature with someone who could use it. I&apos;m learning to check my assumptions instead of guessing.
                  </p>
                </div>
                <div className="border-l-2 border-black pl-6">
                  <h4 className="text-lg font-semibold mb-2">Collaboration</h4>
                  <p className="text-base leading-relaxed text-gray-600">
                    Team projects have shown me that I do better work when I listen and ask questions. Robotics and hackathons have given me practice sharing what I know, learning from other people, and helping with whatever the team needs.
                  </p>
                </div>
                <div className="border-l-2 border-black pl-6">
                  <h4 className="text-lg font-semibold mb-2">Learning through projects</h4>
                  <p className="text-base leading-relaxed text-gray-600">
                    I&apos;m still early in learning engineering, so every project brings something new. FRC, hackathons, and my internship have helped me try programming tools and data methods I had not used before. I like having a reason to learn something and a project where I can put it to use.
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
