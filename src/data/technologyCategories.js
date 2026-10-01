/**
 * Technical Ecosystem / Stack Data Architecture
 * Fully data-driven, easily editable, and structured with category relationships.
 */
export const technologyCategories = [
  {
    id: "frontend",
    name: "FRONTEND",
    accent: "cyan",
    technologies: [
      { id: "react", name: "React", description: "Component-based UI development" },
      { id: "nextjs", name: "Next.js", description: "Production React framework with SSR/SSG" },
      { id: "javascript", name: "JavaScript", description: "Dynamic client & server scripting" },
      { id: "typescript", name: "TypeScript", description: "Static typing for scalable systems" },
      { id: "html", name: "HTML", description: "Semantic web structure & accessibility" },
      { id: "css", name: "CSS", description: "Modern styling & responsive layouts" },
    ],
  },
  {
    id: "backend",
    name: "BACKEND",
    accent: "blue",
    technologies: [
      { id: "nodejs", name: "Node.js", description: "Event-driven asynchronous server runtime" },
      { id: "express", name: "Express", description: "Minimalist web API and server framework" },
      { id: "restapis", name: "REST APIs", description: "Structured HTTP communication endpoints" },
    ],
  },
  {
    id: "database",
    name: "DATABASE",
    accent: "violet",
    technologies: [
      { id: "mongodb", name: "MongoDB", description: "Document-oriented NoSQL storage" },
      { id: "postgresql", name: "PostgreSQL", description: "Reliable relational database system" },
    ],
  },
  {
    id: "tools",
    name: "TOOLS",
    accent: "green",
    technologies: [
      { id: "git", name: "Git", description: "Distributed source code version control" },
      { id: "github", name: "GitHub", description: "Code collaboration & version management" },
      { id: "docker", name: "Docker", description: "Containerized environments for consistent builds" },
      { id: "vscode", name: "VS Code", description: "Primary engineering & development IDE" },
    ],
  },
  {
    id: "design",
    name: "DESIGN",
    accent: "cyan",
    technologies: [
      { id: "figma", name: "Figma", description: "Interface design & design system tokenization" },
    ],
  },
];
