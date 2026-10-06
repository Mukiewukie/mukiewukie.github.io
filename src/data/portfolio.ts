export interface Project {
  title: string;
  description: string;
  stack: string[];
  link?: string;
  website?: string;
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
      "Founded and helped build an FRC electrical documentation platform for wiring reliability, subsystem coordination, and rapid debugging. It attracted 450+ viewers and 2.7K+ interested users in its first week.",
    stack: ["FRC", "Electrical Design", "Control Systems", "Debugging"],
    link: "https://github.com/FRCElectrical/FRCElectrical.org",
    website: "https://frcelectrical.org",
    preview: true,
  },
  {
    title: "Science Olympiad Build Captain Work",
    description:
      "Led mechanical and systems design for Science Olympiad build events, from fabrication and testing through final competition. Designed a helicopter that placed at regional and state competitions, refining its weight, balance, and rotor geometry through repeated testing.",
    stack: ["CAD", "Prototyping", "Mechanical Design", "Engineering Design Process"],
    image: "/images/Helicopter-2025-Image.jpg",
  },
  {
    title: "Software Engineering Internship",
    description:
      "During a software engineering internship at Qualizeal, built a full-stack application that used convolutional neural networks and SMOTE to analyze EEG data and classify emotional states. The project combined frontend and backend development with machine-learning experimentation.",
    stack: ["Embedded Systems", "Python", "CNN", "Deep Learning"],
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
      "Completed a software engineering internship at Qualizeal, where I built a web application that used convolutional neural networks and SMOTE to analyze EEG data and classify emotional states. The project involved frontend, backend, and machine-learning work.",
    indentLevel: 1,
  },
  {
    title: "Hackathon Projects",
    description:
      "Built AI applications, file-management tools, and space-data projects in hackathon settings. These projects strengthened my rapid-prototyping, collaboration, and presentation skills.",
    indentLevel: 1,
  },
  {
    title: "Founder, FRCElectrical.org",
    description:
      "Founded and helped build an electrical documentation platform for FRC teams. I manage the FRCElectrical.org server and moderate Jimmy's Electrical Server, helping teams with wiring reliability, subsystem coordination, and rapid debugging. The site attracted 450+ viewers and 2.7K+ interested users in its first week.",
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
    title: "Engineering Captain, FRC Robotics",
    description:
      "Serve as engineering captain, driver, and team member in the FIRST Robotics Competition. Won the Hopper Division at the World Championship and spent more than three months designing, building, and refining a robot that integrated electrical, mechanical, and software systems.",
    indentLevel: 1,
    image: "/images/DSC_3879.jpg",
  },
  {
    title: "Founder and Build Captain, Science Olympiad",
    description:
      "Founded my school's Science Olympiad program and led mechanical and systems design for build events. Managed fabrication, testing, and iteration under competition deadlines, including a helicopter that placed at regional and state competitions.",
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
