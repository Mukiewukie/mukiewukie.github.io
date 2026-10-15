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
      "With help from teammates and mentors, I helped build FRCElectrical.org, a free, open-source resource for FRC teams anywhere in the world. It offers a step-by-step introduction to FRC electrical systems, control-system explanations, wiring and connection guides, tool and parts recommendations, and a handbook for educators. We hope it makes reliable electrical knowledge easier to find, especially for students and teams who are still learning where to start. I feel lucky to work on it, and grateful to everyone who has shared feedback and helped it grow.",
    stack: ["FRC", "Electrical Design", "Control Systems", "Debugging"],
    link: "https://github.com/FRCElectrical/FRCElectrical.org",
    website: "https://frcelectrical.org",
    chiefDelphi: "https://www.chiefdelphi.com/t/introducing-frcelectrical-org-ai-free-high-quality-open-source-electrical-knowledge/522889",
    preview: true,
  },
  {
    title: "Science Olympiad Build Captain Work",
    description:
      "Science Olympiad is a team competition with events in science, engineering, and building. I helped my teammates prepare for Helicopter, Boomilever, Electric Vehicle, and Robot Tour. For Helicopter, we built and tested a small model, adjusting its weight, balance, and rotors between flights. For Boomilever, we designed and tested a lightweight bridge; for Electric Vehicle, we built and tuned a small vehicle to meet the event rules; and for Robot Tour, we prepared a robot to navigate a course. I was grateful to learn alongside my teammates, especially when our first designs needed changes.",
    stack: ["CAD", "Prototyping", "Mechanical Design", "Engineering Design Process"],
    image: "/images/Helicopter-2025-Image.jpg",
  },
  {
    title: "Software Engineering Internship",
    description:
      "I feel very fortunate to have interned at Qualizeal and to have learned from its software engineering team. I helped build a web application for processing EEG (brainwave) data and explored whether a convolutional neural network could classify emotional states. I learned about connecting frontend and backend code, preparing data, and testing a machine-learning approach carefully. I was happy to contribute, and I’m thankful to the team for their guidance and patience.",
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
      "Built a platform to help Charlotte residents identify high-demand careers, locate local training, and understand transportation access to those opportunities.",
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
      "Built a file-management system with natural-language search, file graphs, contextual organization, and duplicate detection.",
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
      "Developed a seismic-detection application that combines bandpass and lowpass filters to reduce frequency outliers, then compares short- and long-term trends to identify significant disruptions.",
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
      "Built a conversational web application that helps North Carolina disaster survivors navigate federal, state, and local aid programs. It includes guided intake, personalized aid dashboards, document checklists, deadline tracking, and FEMA case explanations.",
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
      "Designed and built this portfolio in Next.js to present my projects, experience, and technical interests through a focused, accessible interface.",
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
      "I feel fortunate to have interned at Qualizeal and learned from its software engineering team. I helped build a web application to process EEG data and explored using a convolutional neural network and SMOTE to classify emotional states. I learned about connecting frontend and backend code, preparing data, and testing a model carefully. I’m grateful to the team for their guidance and was happy to contribute to the project.",
    indentLevel: 1,
  },
  {
    title: "Hackathon Projects",
    description:
      "Built AI applications, file-management tools, and space-data projects in hackathon settings. These projects strengthened my rapid-prototyping, collaboration, and presentation skills.",
    indentLevel: 1,
  },
  {
    title: "Founder & Core Contributor, FRCElectrical.org",
    description:
      "I began FRCElectrical.org with other students, mentors, and volunteers because we wanted FRC electrical knowledge to be easier for teams everywhere to find and learn. The free, open-source site includes a step-by-step learning course, control-system explanations, wiring and connection guides, tool and parts recommendations, and an educators handbook. I help maintain the site and moderate Jimmy's Electrical Server. I’m grateful for everyone who has contributed ideas and feedback, and I hope the resource keeps growing to serve more teams.",
    indentLevel: 1,
  },
  {
    title: "Personal Software Projects",
    description:
      "Built full-stack applications, web platforms, and automation scripts with Next.js, React, and Python. I regularly integrate APIs such as OpenAI and Firebase when they are useful to the product.",
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
      "Serve as engineering captain, driver, and team member in the FIRST Robotics Competition. Won the Hopper Division at the World Championship and spent more than three months designing, building, and refining a robot that integrated electrical, mechanical, and software systems.",
    indentLevel: 1,
    image: "/images/DSC_3879.jpg",
  },
  {
    title: "Founder, Treasurer, and Build Captain, Science Olympiad",
    description:
      "I helped start my school's Science Olympiad program and served as a build captain. I helped teammates prepare for Helicopter, Boomilever, Electric Vehicle, and Robot Tour. We built and tested a small model helicopter, designed a lightweight Boomilever bridge, built and tuned an electric vehicle to meet its event rules, and prepared a robot to navigate a course for Robot Tour. In Helicopter, I helped adjust the model's weight, balance, and rotors between flights. I’m grateful to my teammates for what they taught me, including how to learn from designs that needed more work.",
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
      "Mentored FIRST Lego League and FIRST Tech Challenge students in robotics fundamentals, programming, and the engineering design process.",
    indentLevel: 1,
  },
  {
    title: "Kumon Assistant",
    description:
      "Managed student progress through KumonConnect and supported instruction in math and reading while maintaining accurate learning records.",
    indentLevel: 1,
  },
  {
    title: "Founder, School Model United Nations",
    description:
      "Founded my school's Model UN program and prepared students for conferences through research, debate, and leadership. The work strengthened my advocacy, public-speaking, and collaboration skills.",
    indentLevel: 1,
  },
  {
    title: "Founder, School Envirothon Program",
    description:
      "Founded my school's Envirothon program and competed in regional and state environmental competitions.",
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
      "Advocated for STEM funding at the state capitol by meeting with representatives to discuss the need for stronger science, technology, engineering, and math programs.",
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
      "Provided health education to underserved populations in India and Nigeria. Maintained a Medicaid-eligible web store for affordable health products over four years.",
    indentLevel: 1,
  },
];

export const awards: Award[] = [
  {
    title: "Division Winner, FIRST Robotics World Championship",
    group: "Robotics",
    category: "World Championship",
    description: "Primary driver in the top-32 bracket of 600 teams. Drove the robot to win the Hopper Division and worked with an alliance of teams from Australia, Canada, and Maine to advance worldwide.",
  },
  {
    title: "Hopper Division Engineering Inspiration Award, FIRST Robotics World Championship",
    group: "Robotics",
    category: "World Championship · 1 of 74 teams",
    description: "Recognized for thousands of hours of sustainable community outreach, including advocacy, demonstrations, and mentoring. The team also won its championship division through competitive robot performance and driving.",
  },
  {
    title: "1st Place, Optics Physics & Lab, Boyceville Invitational Science Olympiad",
    group: "Science Olympiad",
    category: "1 of 215 teams",
    description: "Answered questions on the physics of light and vision, including eye diseases and refraction, and conducted a lab on light propagation through a random arrangement of mirrors.",
  },
  {
    title: "1st Place, Chandrayaan Science Fair",
    group: "Science Fair & Programming",
    category: "Science Fair",
    description: "Researched the Chandrayaan rocket launch, built a functional rover model and scale rocket replica, and presented the project and documentation to win first place among high-school teams statewide.",
  },
  {
    title: "1st Place, GreenCode Hackathon",
    group: "Science Fair & Programming",
    category: "Programming · State level · 1 of 10 teams",
    description: "Co-created FileAtlas, a Google Drive-connected file-management site with project mind maps, similar-file merging, and Drive synchronization.",
  },
  { title: "Verbal Commendation at MUNCH", group: "Club Competitions", category: "Model United Nations" },
  { title: "Delegation Award, Carolinas Conference", group: "Club Competitions", category: "Model United Nations" },
  { title: "1st Place, Optics, Boyceville Invitational", group: "Science Olympiad", category: "National level" },
  { title: "3rd Place, Geological Mapping; 5th Place, Helicopter", group: "Science Olympiad", category: "Regionals" },
  { title: "6th Place, Geological Mapping; 10th Place, Optics and Helicopter", group: "Science Olympiad", category: "States" },
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
