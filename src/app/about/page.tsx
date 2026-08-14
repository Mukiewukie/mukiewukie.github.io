import { NavBar } from "@/components/NavBar";
import { Section } from "@/components/Section";

export default function About() {
  return (
    <div className="min-h-screen bg-white text-black">
      <NavBar />
      <main className="mx-auto flex max-w-6xl flex-col gap-24 px-6 py-24 lg:px-8">
        <Section id="about" eyebrow="About" title="Engineering mindset, thoughtful execution">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-gray-600">
              I work with electrical engineering fundamentals, robotics, and software experimentation to create systems that are both functional and aesthetically pleasing. Building reliable prototypes, improving control workflows, and learning how to communicate technical progress clearly in collaborative teams.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="overflow-hidden border border-black">
                <img
                  src="/images/DSC_3879.jpg"
                  alt=""
                  width={800}
                  height={533}
                  className="w-full h-72 object-cover"
                />
              </div>
              <div className="overflow-hidden border border-black">
                <img
                  src="/images/1774531076220.jpg"
                  alt=""
                  width={800}
                  height={533}
                  className="w-full h-72 object-cover object-top"
                />
              </div>
            </div>
          </div>
        </Section>
      </main>
    </div>
  );
}
