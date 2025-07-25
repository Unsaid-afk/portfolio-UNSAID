export interface Project {
  id: number;
  name: string;
  category: string;
  tools: string;
  description: string;
  image: string;
  link: string;
}

export const initialProjects: Project[] = [
  {
    id: 1,
    name: "Project Name 1",
    category: "Category",
    tools: "Javascript, TypeScript, React, Threejs",
    description: "Short project description.",
    image: "/images/placeholder.webp",
    link: "https://example.com/project1"
  },
  {
    id: 2,
    name: "Project Name 2",
    category: "Category",
    tools: "Javascript, TypeScript, React, Threejs",
    description: "Short project description.",
    image: "/images/placeholder.webp",
    link: "https://example.com/project2"
  },
  // Add more as needed
];
