export interface Project {
  title: string;
  description: string;
  stack: string[];
  link?: string;
  website?: string;
  image?: string;
}

export interface Highlight {
  title: string;
  description: string;
}

export const projects: Project[] = [
  {
    title: "frcelectrical.org",
    description:
      "Designed and developed an electrical website that acts as a competitive robotics platform, focusing on wiring reliability, subsystem coordination, and rapid debugging during build seasons. This app covers documemntation in FRC Electrical systems and is targeted around helping every team regardless of their price or experience with the program",
    stack: ["FRC", "Electrical Design", "Control Systems", "Debugging"],
    link: "https://github.com/FRCElectrical/FRCElectrical.org",
    website: "https://frcelectrical.org",
  },
  {
    title: "Science Olympiad Build Captain Work",
    description:
      "Led mechanical and systems design efforts for engineering-based Science Olympiad events, managing fabrication, testing, and iteration under time constraints. I created a Helicopter that placed at State and Regional competitions and tuned its flight characteristics including weight, balance, rotor size, and more.",
    stack: ["CAD", "Prototyping", "Mechanical Design", "Engineering Design Process"],
  },
  {
    title: "Software Engineering Internship",
    description:
      "As a Software Engineering Intern at Qualizeal, an AI-powered company that unifies and streamlines software testing through integrated execution, planning, governance, and reporting, I developed and created a full-functioning website that incorporates frontend and backend as well as deep learning algorithms, SMOTE,  and Convolutional Neural Networks to successfully predict the emotions of an individual based on their Electroencephalogram data.",
    stack: ["Embedded Systems", "Python", "CNN", "Deep Learning"],
    link: "https://github.com/Mukiewukie/EEG-Processing-Site-Internship",
  },
  {
    title: "Discord Bot Development",
    description:
      "Designed and implemented a Discord bot with custom commands and integrations, enhancing community engagement and automating routine tasks with Electrical Engineering knowledge.",
    stack: ["Python", "Discord API", "Asyncio"],
    image: "/images/discord-bot-screenshot.png",
  },
  {
    title: "AI Workforce Mobility Navigator",
    description:
      "Built an AI-driven platform to help Charlotte residents discover high-demand careers, find local training, and map transportation access to opportunities.",
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
      "Built an AI-powered file organization system that uses context awareness, file graphs, natural language search, and duplicate detection to modernize document management.",
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
      "Developed an seismic detection app using two layered filters: a bandpass + lowpass system to suppress extreme frequency outliers, and a lowpass average-based detector that compares short-term and long-term trends to flag large disruptions.",
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
      "A conversational web app that guides North Carolina disaster victims through every federal, state, and local aid program they qualify for, featuring AI-powered intake, personalized aid dashboards, document checklists, deadline tracking, and FEMA case explainers to simplify disaster recovery navigation.",
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
    title: "This Portfolio",
    description:
      "Built this portfolio website to show off my projects and skills. It's a Next.js site with a minimalist black and white design, separate pages for different sections, and a typewriter font because it looks cool. No way, my portfolio made my portfolio in my portfolio",
    stack: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "TypeScript",
    ],
    link: "https://github.com/Mukiewukie/mukiewukie.github.io",
    website: "https://mukeshramanathan.github.io",
  },
];

export const experienceHighlights: Highlight[] = [
  {
    title: "Programming & Software Development",
    description:
      "Built projects through hackathons, frcelectrical.org platform, and personal projects. Experienced in full-stack development, AI integration, and creating practical tools for real-world applications.",
  },
  {
    title: "FRC Robotics & Competition",
    description:
      "Competed in FIRST Robotics Competition as a driver and team member. Won the Hopper Division at World Championship. Dedicated 3+ months to designing and building a competitive robot with integrated electrical, mechanical, and software systems.",
  },
  {
    title: "FLL/FTC Mentoring",
    description:
      "Mentored younger students in FIRST Lego League and FIRST Tech Challenge, helping them learn robotics fundamentals, programming, and engineering design principles.",
  },
  {
    title: "Kumon Assistant",
    description:
      "Managed data tracking through KumonConnect system and helped teach students math and reading skills, ensuring accurate progress monitoring and personalized learning support.",
  },
  {
    title: "Co-Accessible Health Lead @ Dipdha Medical",
    description:
      "Led initiative to bring discounted prescription medications to impoverished areas worldwide. Developed a website that provides medication discounts based on socioeconomic status, improving healthcare accessibility for underserved communities.",
  },
];

export const contactLinks = [
  { label: "Email", href: "mailto:16mukeshr@gmail.com" },
  { label: "GitHub", href: "https://github.com/Mukiewukie" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/mukesh-ramanathan-6b0480280/" },
];