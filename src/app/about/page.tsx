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
                I'm really into electrical engineering, robotics, and building things that actually work. I like taking ideas and turning them into real systems, whether that's wiring up robots, coding websites, or just figuring out how to make stuff better. I've learned a lot about working with teams and explaining technical stuff to people who might not be engineers.
              </p>
              <p className="text-lg leading-relaxed text-gray-600">
                For me, the best way to learn is just to dive in and start building. I'd rather get my hands dirty with a project than just read about it. That's why I do stuff like FRC robotics, hackathons, and personal projects. I like seeing how things work in real life, not just on paper. It's cool when you can actually use what you build to help people.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="overflow-hidden rounded-lg border-2 border-black">
                <img
                  src="/images/DSC_3879.jpg"
                  alt="Robotics work"
                  width={800}
                  height={533}
                  className="w-full h-72 object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-lg border-2 border-black">
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
              <h3 className="text-2xl font-semibold">What I'm about</h3>
              <div className="space-y-6">
                <div className="border-l-2 border-black pl-6">
                  <h4 className="text-lg font-semibold mb-2">Solving problems</h4>
                  <p className="text-base leading-relaxed text-gray-600">
                    I like figuring out hard problems. Whether it's debugging electrical systems during competitions or trying to make an app that actually helps people, I enjoy breaking things down and finding solutions. It's satisfying when something that wasn't working finally clicks.
                  </p>
                </div>
                <div className="border-l-2 border-black pl-6">
                  <h4 className="text-lg font-semibold mb-2">Working with teams</h4>
                  <p className="text-base leading-relaxed text-gray-600">
                    Engineering is way better with other people. I've learned how to explain technical stuff clearly, listen to what others think, and actually contribute to group projects. Whether I'm leading the robotics team or doing a hackathon with friends, working together makes everything better.
                  </p>
                </div>
                <div className="border-l-2 border-black pl-6">
                  <h4 className="text-lg font-semibold mb-2">Always learning</h4>
                  <p className="text-base leading-relaxed text-gray-600">
                    Tech moves fast, so I'm always trying to learn new stuff. I pick up new programming languages, try out different frameworks, and mess around with AI and machine learning when I can. Every project teaches me something new, and that's what keeps it interesting.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Outside of tech</h3>
              <p className="text-lg leading-relaxed text-gray-600">
                When I'm not coding or building robots, I like doing stuff that actually matters. Working with Dipdha Medical showed me how software can help people get healthcare they couldn't afford before. Mentoring kids in FLL and FTC is fun because I get to see them get excited about engineering. And Model UN and student leadership have helped me get better at talking to people and standing up for what I believe in.
              </p>
            </div>
          </div>
        </Section>
      </main>
    </div>
  );
}
