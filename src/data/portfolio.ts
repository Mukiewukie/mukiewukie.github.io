export interface Project {
  title: string;
  description: string;
  stack: string[];
  link?: string;
  website?: string;
  chiefDelphi?: string;
  image?: string;
  preview?: boolean;
}

export interface Highlight {
  title: string;
  description: string;
  isParent?: boolean;
  indentLevel?: number;
  image?: string;
}

export interface Award {
  title: string;
  group: string;
  category: string;
  description?: string;
}

export const projects: Project[] = [
  {
    title: "FRCElectrical.org",
    description:
      "I helped build FRCElectrical.org with other students and mentors. It is a free, open-source guide for FRC teams around the world. It has lessons on the control system, wiring and connection guides, tool and parts suggestions, and a handbook for teachers. We hope it helps teams learn electrical basics and find answers while they build. I feel lucky to be part of it and appreciate everyone who has shared ideas and feedback.",
    stack: ["FRC", "Electrical Design", "Control Systems", "Debugging"],
    link: "https://github.com/FRCElectrical/FRCElectrical.org",
    website: "https://frcelectrical.org",
    chiefDelphi: "https://www.chiefdelphi.com/t/introducing-frcelectrical-org-ai-free-high-quality-open-source-electrical-knowledge/522889",
    preview: true,
  },
  {
    title: "Science Olympiad Build Captain Work",
    description:
      "Science Olympiad is a team competition with events in science, engineering, and building. I helped my teammates prepare for Helicopter, Boomilever, Electric Vehicle, and Robot Tour. For Helicopter, we built a small model and changed its weight, balance, and rotors between test flights. For Boomilever, we designed and tested a light bridge. For Electric Vehicle, we built and adjusted a small car to meet the rules. For Robot Tour, we got a robot ready to follow a course. I learned a lot from my teammates and from designs that needed more work.",
    stack: ["CAD", "Prototyping", "Mechanical Design", "Engineering Design Process"],
    image: "/images/Helicopter-2025-Image.jpg",
  },
  {
    title: "Software Engineering Internship",
    description:
      "I feel really lucky to have interned at Qualizeal and learned from its software engineering team. I helped build a web app that works with EEG (brainwave) data. We tested whether a convolutional neural network could sort the data into emotional states. I learned how the frontend and backend work together, how important it is to prepare data, and how to test a model. I was happy to help and thankful to the team for being patient and answering my questions.",
    stack: ["Python", "EEG Data", "CNN", "Machine Learning"],
    link: "https://github.com/Mukiewukie/EEG-Processing-Site-Internship",
  },
  {
    title: "Discord Bot Development",
    description:
      "Built a Discord bot with custom commands and integrations to automate routine tasks and improve community engagement.",
    stack: ["Python", "Discord API", "Asyncio"],
    image: "/images/discord-bot-screenshot.png",
  },
  {
    title: "AI Workforce Mobility Navigator",
    description:
      "Helped build a site where people in Charlotte can look up growing job fields, find nearby training, and see how they might get there.",
    stack: [
      "Next.js",
      "scikit-learn",
      "OpenRouteService",
      "Firebase",
      "NCWorks data",
    ],
    link: "https://github.com/Mukiewukie/charlotte-pathfinder-ai",
  },
  {
    title: "FileAtlas / GreenCode Hack",
    description:
      "Helped build a file tool that lets people search in everyday language, see how their files connect, organize them, and find duplicates.",
    stack: [
      "Next.js",
      "Google Drive APIs",
      "OpenAI APIs",
      "Graph visualization",
      "Metadata analysis",
    ],
    link: "https://github.com/tralalero-tech-support/greencode-hack",
  },
  {
    title: "Hyperion Space App",
    description:
      "Helped make an app that looks for unusual patterns in seismic data. It filters out extra noise and compares short-term and long-term changes.",
    stack: [
      "Signal processing",
      "Bandpass filter",
      "Lowpass filter",
      "Anomaly detection",
      "Space data analysis",
    ],
    link: "https://github.com/qwertycloudhub/hyperion-space-app",
  },
  {
    title: "Aid Compass",
    description:
      "Helped build a chat-based site to help people in North Carolina find disaster aid. It asks questions to find relevant programs and helps people track documents, deadlines, and next steps.",
    stack: [
      "Next.js",
      "Claude API",
      "Firebase",
      "Firestore",
      "Resend",
    ],
    link: "https://github.com/quadruple-t/cac-2026",
  },
  {
    title: "mukiewukie.github.io",
    description:
      "Wait, my portfolio made it into my portfolio. I built this site to share my projects and what I’m learning.",
    stack: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "TypeScript",
    ],
    link: "https://github.com/Mukiewukie/mukiewukie.github.io",
    website: "https://mukiewukie.github.io/",
    preview: true,
  },
];

export const experienceHighlights: Highlight[] = [
  {
    title: "Programming & Software Development",
    description: "",
    isParent: true,
  },
  {
    title: "Software Engineering Internship @ Qualizeal",
    description:
      "I feel lucky to have interned at Qualizeal and learned from its software engineering team. I helped build a web app to work with EEG data and tested whether a convolutional neural network and SMOTE could sort it into emotional states. I learned how the front and back ends fit together, how to prepare data, and how to test a model. I’m thankful to the team for their help and glad I could contribute.",
    indentLevel: 1,
  },
  {
    title: "Hackathon Projects",
    description:
      "At hackathons, I’ve worked with teams to make AI apps, file tools, and space-data projects. I got to try ideas quickly, work with new people, and present what we made.",
    indentLevel: 1,
  },
  {
    title: "Founder & Core Contributor, FRCElectrical.org",
    description:
      "I helped start FRCElectrical.org with other students, mentors, and volunteers. We wanted FRC teams everywhere to have an easier time learning electrical basics. The free site has lessons on the control system, wiring and connection guides, tool suggestions, and a handbook for teachers. I help update the site and moderate Jimmy's Electrical Server. I’m thankful to everyone who shares ideas and feedback, and I hope more teams find it useful.",
    indentLevel: 1,
  },
  {
    title: "Personal Software Projects",
    description:
      "I’ve made websites and small tools with Next.js, React, and Python. I’ve also connected projects to services like OpenAI and Firebase when we needed them.",
    indentLevel: 1,
  },
  {
    title: "Robotics & Engineering",
    description: "",
    isParent: true,
  },
  {
    title: "Engineering Captain, YETI 3506 Robotics",
    description:
      "I’m thankful to be part of YETI 3506 as an engineering captain and driver. At the FIRST Robotics World Championship, I drove during the playoffs, and our alliance won the Hopper Division. During the season, I worked with my teammates to test and improve our robot. I learned a lot from them and from the teams we competed with.",
    indentLevel: 1,
    image: "/images/DSC_3879.jpg",
  },
  {
    title: "Founder, Treasurer, and Build Captain, Science Olympiad",
    description:
      "I helped start my school's Science Olympiad program and was a build captain. I helped my teammates get ready for Helicopter, Boomilever, Electric Vehicle, and Robot Tour. We built and tested a small helicopter, made a light bridge, built and adjusted a small car, and got a robot ready to follow a course. For Helicopter, I helped change the model's weight, balance, and rotors between flights. I’m thankful to my teammates for teaching me a lot, especially when our first designs needed work.",
    indentLevel: 1,
  },
  {
    title: "Mentoring & Education",
    description: "",
    isParent: true,
  },
  {
    title: "FLL/FTC Mentoring",
    description:
      "I help FLL and FTC students learn the basics of robotics, programming, and how to build and test their ideas.",
    indentLevel: 1,
  },
  {
    title: "Kumon Assistant",
    description:
      "I help students with math and reading and keep track of their work in KumonConnect.",
    indentLevel: 1,
  },
  {
    title: "Founder, School Model United Nations",
    description:
      "I helped start my school's Model UN club and get students ready for conferences. We practice research, debate, and speaking in front of people. I’ve learned a lot from doing this with other students.",
    indentLevel: 1,
  },
  {
    title: "Founder, School Envirothon Program",
    description:
      "I helped start my school's Envirothon team and competed in regional and state events.",
    indentLevel: 1,
  },
  {
    title: "Leadership & Advocacy",
    description: "",
    isParent: true,
  },
  {
    title: "SASA Advocate",
    description:
      "I went to the state capitol and talked with lawmakers about why schools need support for science, technology, engineering, and math programs.",
    indentLevel: 1,
  },
  {
    title: "Healthcare & Social Impact",
    description: "",
    isParent: true,
  },
  {
    title: "Accessible Health Equity Committee Member @ Diphda Medical Company (4 years)",
    description:
      "I helped share health information with communities in India and Nigeria. I also helped keep an online store running where people could find affordable health products through Medicaid.",
    indentLevel: 1,
  },
];

export const awards: Award[] = [
  {
    title: "Division Winner, FIRST Robotics World Championship",
    group: "Robotics",
    category: "World Championship",
    description: "I was our team's main driver in the top 32 out of 600 teams. Our alliance included teams from Australia, Canada, and Maine, and we won the Hopper Division.",
  },
  {
    title: "Hopper Division Engineering Inspiration Award, FIRST Robotics World Championship",
    group: "Robotics",
    category: "World Championship · 1 of 74 teams",
    description: "Our team was recognized for years of community work, including mentoring, demonstrations, and speaking up for STEM. We also won our division at the championship.",
  },
  {
    title: "1st Place, Optics Physics & Lab, Boyceville Invitational Science Olympiad",
    group: "Science Olympiad",
    category: "1 of 215 teams",
    description: "I answered questions about light and vision, including eye diseases and refraction. I also did a lab about how light moves through a group of mirrors.",
  },
  {
    title: "1st Place, Chandrayaan Science Fair",
    group: "Science Fair & Programming",
    category: "Science Fair",
    description: "I researched the Chandrayaan rocket launch, built a working rover model and a smaller rocket replica, and presented my project to high school teams from across the state. It won first place.",
  },
  {
    title: "1st Place, GreenCode Hackathon",
    group: "Science Fair & Programming",
    category: "Programming · State level · 1 of 10 teams",
    description: "My team made FileAtlas, a file site that connects to Google Drive. It can make project mind maps, find similar files, and keep them in sync.",
  },
  { title: "Verbal Commendation at MUNCH", group: "Club Competitions", category: "Model United Nations" },
  { title: "Delegation Award, Carolinas Conference", group: "Club Competitions", category: "Model United Nations" },
  { title: "1st Place, Optics, Boyceville Invitational", group: "Science Olympiad", category: "National level" },
  { title: "3rd Place, Geological Mapping, 5th Place, Helicopter", group: "Science Olympiad", category: "Regionals" },
  { title: "6th Place, Geological Mapping, 10th Place, Optics and Helicopter", group: "Science Olympiad", category: "States" },
  { title: "Impact Award, Asheville Event", group: "Robotics", category: "Regional" },
  { title: "Impact Award, DCMP", group: "Robotics", category: "State" },
  { title: "6th Place, Envirothon", group: "Club Competitions", category: "Regionals" },
  { title: "8th Place, Envirothon", group: "Club Competitions", category: "States" },
  { title: "AutoCAD Certification", group: "Technical Recognition", category: "Technical certification" },
  { title: "Software Engineering Internship Certification, Qualizeal", group: "Technical Recognition", category: "Professional certification" },
  { title: "Cabarrus County Winner", group: "Robotics", category: "Regional" },
  { title: "Elon District Winner", group: "Robotics", category: "Regional" },
  { title: "Innovation in Controls", group: "Robotics", category: "Regional" },
  { title: "6th Ranking", group: "Robotics", category: "States" },
  { title: "4th Place, Envirothon", group: "Club Competitions", category: "Regionals" },
];

export const contactLinks = [
  { label: "Email", href: "mailto:16mukeshr@gmail.com" },
  { label: "GitHub", href: "https://github.com/Mukiewukie" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/mukesh-ramanathan-6b0480280/" },
];
