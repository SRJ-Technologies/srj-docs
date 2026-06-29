export interface NavigationItem {
  title: string;
  href: string;
  children?: NavigationItem[];
}

export const documentationNavigation: NavigationItem[] = [
  {
    title: "Developer Handbook",
    href: "/docs/handbook",
    children: [
      {
        title: "Volume 01",
        href: "/docs/handbook/volume-01",
        children: [
          {
            title: "Welcome",
            href: "/docs/handbook/volume-01/welcome",
          },
          {
            title: "Vision & Mission",
            href: "/docs/handbook/volume-01/vision",
          },
          {
            title: "Platform Overview",
            href: "/docs/handbook/volume-01/platform-overview",
          },
          {
            title: "Technology Stack",
            href: "/docs/handbook/volume-01/technology-stack",
          },
          {
            title: "Repository Architecture",
            href: "/docs/handbook/volume-01/repository",
          },
          {
            title: "Folder Structure",
            href: "/docs/handbook/volume-01/folder-structure",
          },
          {
            title: "Coding Standards",
            href: "/docs/handbook/volume-01/coding-standards",
          },
          {
            title: "Git Workflow",
            href: "/docs/handbook/volume-01/git-workflow",
          },
          {
            title: "Deployment Workflow",
            href: "/docs/handbook/volume-01/deployment",
          },
          {
            title: "Roadmap",
            href: "/docs/handbook/volume-01/roadmap",
          },
        ],
      },
    ],
  },
];