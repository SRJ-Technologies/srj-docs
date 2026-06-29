export interface Chapter {
  number: number;
  title: string;
  href: string;
  available: boolean;
}

export const volume01Chapters: Chapter[] = [
  {
    number: 1,
    title: "Welcome",
    href: "/docs/handbook/volume-01/welcome",
    available: true,
  },
  {
    number: 2,
    title: "Vision & Mission",
    href: "/docs/handbook/volume-01/vision",
    available: true,
  },
  {
    number: 3,
    title: "Platform Overview",
    href: "#",
    available: true,
  },
  {
    number: 4,
    title: "Technology Stack",
    href: "#",
    available: false,
  },
  {
    number: 5,
    title: "Repository Architecture",
    href: "#",
    available: false,
  },
  {
    number: 6,
    title: "Folder Structure",
    href: "#",
    available: false,
  },
  {
    number: 7,
    title: "Coding Standards",
    href: "#",
    available: false,
  },
  {
    number: 8,
    title: "Git Workflow",
    href: "#",
    available: false,
  },
  {
    number: 9,
    title: "Deployment Workflow",
    href: "#",
    available: false,
  },
  {
    number: 10,
    title: "Roadmap",
    href: "#",
    available: false,
  },
];