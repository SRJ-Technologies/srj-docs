export interface NavigationItem {
  title: string;
  href: string;
  available?: boolean;
  status?: "released" | "planned";
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
            status: "released",
          },
          {
            title: "Vision & Mission",
            href: "/docs/handbook/volume-01/vision",
            status: "released",
          },
          {
            title: "Platform Overview",
            href: "/docs/handbook/volume-01/platform-overview",
            status: "released",
          },
          {
            title: "Technology Stack",
            href: "/docs/handbook/volume-01/technology-stack",
            status: "planned",
          },
          {
            title: "Repository Architecture",
            href: "/docs/handbook/volume-01/repository",
            status: "planned",
          },
          {
            title: "Folder Structure",
            href: "/docs/handbook/volume-01/folder-structure",
            status: "planned",
          },
          {
            title: "Coding Standards",
            href: "/docs/handbook/volume-01/coding-standards",
            status: "planned",
          },
          {
            title: "Git Workflow",
            href: "/docs/handbook/volume-01/git-workflow",
            status: "planned",
          },
          {
            title: "Deployment Workflow",
            href: "/docs/handbook/volume-01/deployment",
            status: "planned",
          },
          {
            title: "Roadmap",
            href: "/docs/handbook/volume-01/roadmap",
            status: "planned",
          },
        ],
      },
    ],
  },
];