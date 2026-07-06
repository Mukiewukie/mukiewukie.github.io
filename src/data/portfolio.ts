export interface Project {
  title: string;
  description: string;
  stack: string[];
  link?: string;
  image?: string;
  video?: string;
}

export interface Highlight {
  title: string;
  description: string;
}

export const projects: Project[] = [
  {
    title: "FRC Robotics Electrical & Control Systems",
    description:
      "Designed and integrated electrical systems for a competitive robotics platform, focusing on wiring reliability, subsystem coordination, and rapid debugging during build seasons.",
    stack: ["FRC", "Electrical Design", "Control Systems", "Debugging"],
    link: "https://github.com/FRCElectrical/FRCElectrical.org",
  },
  {
    title: "Science Olympiad Build Captain Work",
    description:
      "Led mechanical and systems design efforts for engineering-based Science Olympiad events, managing fabrication, testing, and iteration under time constraints.",
    stack: ["CAD", "Prototyping", "Mechanical Design", "Engineering Design Process"],
  },
  {
    title: "Software Engineering Internship",
    description:
      "As a Software Engineering Intern at Qualizeal, an AI-powered company that unifies and streamlines software testing through integrated execution, planning, governance, and reporting, I developed and created a full-functioning website that incorporates frontend and backend as well as deep learning algorithms, SMOTE,  and Convolutional Neural Networks to successfully predict the emotions of an individual based on their Electroencephalogram data.",
    stack: ["Embedded Systems", "Python", "CNN", "Deep Learning"],
    link: "https://github.com/Mukiewukie/EEG-Processing-Site-Internship",
    video: "/videos/discord-bot.mov",
  },
  {
    title: "Discord Bot Development",
    description:
      "Designed and implemented a Discord bot with custom commands and integrations, enhancing community engagement and automating routine tasks with Electrical Engineering knowledge.",
    stack: ["Python", "Discord API", "Asyncio"],
    image: "/images/discord-bot-screenshot.png",
  },
];

export const experienceHighlights: Highlight[] = [
  {
    title: "Leadership in Technical Teams",
    description:
      "Founded and helped lead student engineering organizations, coordinating design planning, mentorship, and technical execution across team members.",
  },
  {
    title: "Robotics Systems Integration",
    description:
      "Worked on integrating electrical, mechanical, and software components into cohesive robotics systems under competition constraints.",
  },
  {
    title: "Competitive STEM Experience",
    description:
      "Participated in structured STEM competitions (robotics and science olympiad), focusing on iterative design, testing, and performance optimization.",
  },
  {
    title: "Communication & Advocacy (Model UN)",
    description:
      "Developed structured communication and analytical reasoning skills through Model United Nations, including research-driven debate and leadership roles.",
  },
];

export const contactLinks = [
  { label: "Email", href: "16mukeshr@gmail.com" },
  { label: "GitHub", href: "https://github.com/Mukiewukie" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/mukesh-ramanathan-6b0480280/" },
];