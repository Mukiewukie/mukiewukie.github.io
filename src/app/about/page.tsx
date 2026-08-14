import { NavBar } from "@/components/NavBar";
import { Section } from "@/components/Section";

export default function About() {
  return (
    <div className="min-h-screen bg-white text-black">
      <NavBar />
      <main className="mx-auto flex max-w-6xl flex-col gap-24 px-6 py-24 lg:px-8">
        <Section id="about" eyebrow="About" title="Engineering mindset, thoughtful execution">
          <div className="space-y-12">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-gray-600">
                I work with electrical engineering fundamentals, robotics, and software experimentation to create systems that are both functional and aesthetically pleasing. Building reliable prototypes, improving control workflows, and learning how to communicate technical progress clearly in collaborative teams.
              </p>
              <p className="text-lg leading-relaxed text-gray-600">
                My approach to engineering is grounded in curiosity and practical application. I believe the best way to learn is by doing—taking abstract concepts and turning them into tangible systems that solve real problems. Whether it's designing electrical systems for competition robots, building web applications that serve communities, or mentoring younger students in robotics, I'm driven by the desire to create impact through technology.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="overflow-hidden border border-black">
                <img
                  src="/images/DSC_3879.jpg"
                  alt="Robotics work"
                  width={800}
                  height={533}
                  className="w-full h-72 object-cover"
                />
              </div>
              <div className="overflow-hidden border border-black">
                <img
                  src="/images/1774531076220.jpg"
                  alt="Engineering projects"
                  width={800}
                  height={533}
                  className="w-full h-72 object-cover object-top"
                />
              </div>
            </div>

            <div className="space-y-8">
              <h3 className="text-2xl font-semibold">What drives me</h3>
              <div className="space-y-6">
                <div className="border-l-2 border-black pl-6">
                  <h4 className="text-lg font-semibold mb-2">Problem-solving mindset</h4>
                  <p className="text-base leading-relaxed text-gray-600">
                    I thrive on complex challenges that require creative solutions. From debugging electrical systems in high-pressure competition environments to designing algorithms for social impact applications, I enjoy breaking down problems and building systematic approaches to solve them.
                  </p>
                </div>
                <div className="border-l-2 border-black pl-6">
                  <h4 className="text-lg font-semibold mb-2">Collaborative engineering</h4>
                  <p className="text-base leading-relaxed text-gray-600">
                    The best engineering happens in teams. I've learned to communicate technical concepts clearly, listen to diverse perspectives, and contribute effectively to group projects. Whether leading a robotics team or working on hackathon projects, collaboration is central to my process.
                  </p>
                </div>
                <div className="border-l-2 border-black pl-6">
                  <h4 className="text-lg font-semibold mb-2">Continuous learning</h4>
                  <p className="text-base leading-relaxed text-gray-600">
                    Technology evolves rapidly, and I'm committed to staying ahead. I actively seek out new challenges—from learning new programming languages and frameworks to understanding emerging technologies like AI and machine learning. Every project is an opportunity to grow.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Beyond engineering</h3>
              <p className="text-lg leading-relaxed text-gray-600">
                Outside of technical work, I'm passionate about making technology accessible and impactful. Through my work with Dipdha Medical, I've seen how software can address real-world healthcare challenges. As a mentor in FLL and FTC, I've helped inspire the next generation of engineers. And through my involvement in Model UN and student leadership, I've developed the communication and advocacy skills that complement my technical abilities.
              </p>
            </div>
          </div>
        </Section>
      </main>
    </div>
  );
}
