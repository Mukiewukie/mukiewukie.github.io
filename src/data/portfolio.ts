export interface Project {
  title: string;
  description: string;
  stack: string[];
  link: string;
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
    link: "https://github.com/Mukiewukie",
  },
  {
    title: "Science Olympiad Build Captain Work",
    description:
      "Led mechanical and systems design efforts for engineering-based Science Olympiad events, managing fabrication, testing, and iteration under time constraints.",
    stack: ["CAD", "Prototyping", "Mechanical Design", "Engineering Design Process"],
    link: "https://github.com/Mukiewukie",
  },
  {
    title: "Student Engineering & Systems Development",
    description:
      "Developed early-stage engineering projects combining hardware and software concepts, including sensor-based systems and control logic experimentation.",
    stack: ["Embedded Systems", "Python", "Microcontrollers", "Systems Thinking"],
    link: "https://github.com/Mukiewukie",
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
  { label: "Email", href: "mailto:mukesh.ramanathan@example.com" },
  { label: "GitHub", href: "https://github.com/Mukiewukie" },
  { label: "LinkedIn", href: "https://www.linkedin.com" },
];