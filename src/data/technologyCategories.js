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
      { id: "react", name: "React", description: "Component-based UI development", icon: "react" },
      { id: "nextjs", name: "Next.js", description: "Production React framework with SSR/SSG", icon: "nextdotjs" },
      { id: "javascript", name: "JavaScript", description: "Dynamic client & server scripting", icon: "javascript" },
      { id: "typescript", name: "TypeScript", description: "Static typing for scalable systems", icon: "typescript" },
      { id: "html", name: "HTML", description: "Semantic web structure & accessibility", icon: "html5" },
      { id: "css", name: "CSS", description: "Modern styling & responsive layouts", svgPath: "M128 96L162.9 491.8L320 544L477.1 491.8L512 96L128 96zM441.1 176L436.3 223.3L321 272.6L320.7 272.7L432.2 272.7L419.4 419.3L321.2 448L222.4 418.8L216 344.9L264.9 344.9L268.1 383.2L320.7 396.5L375.4 381.1L379.1 319.5L212.8 319L212.8 318.9L212.6 319L209 272.7L321.1 226L327.6 223.3L204.7 223.3L198.9 176L441.1 176z", viewBox: "128 96 384 448" },
    ],
  },
  {
    id: "backend",
    name: "BACKEND",
    accent: "blue",
    technologies: [
      { id: "nodejs", name: "Node.js", description: "Event-driven asynchronous server runtime", icon: "nodedotjs" },
      { id: "express", name: "Express", description: "Minimalist web API and server framework", icon: "express" },
      { id: "restapis", name: "REST APIs", description: "Structured HTTP communication endpoints", icon: "postman" },
    ],
  },
  {
    id: "database",
    name: "DATABASE",
    accent: "violet",
    technologies: [
      { id: "mongodb", name: "MongoDB", description: "Document-oriented NoSQL storage", icon: "mongodb" },
      { id: "postgresql", name: "PostgreSQL", description: "Reliable relational database system", icon: "postgresql" },
      { id: "mysql", name: "MySQL", description: "Popular open-source relational database", icon: "mysql" },
    ],
  },
  {
    id: "tools",
    name: "TOOLS",
    accent: "green",
    technologies: [
      { id: "git", name: "Git", description: "Distributed source code version control", icon: "git" },
      { id: "github", name: "GitHub", description: "Code collaboration & version management", icon: "github" },
      { id: "docker", name: "Docker", description: "Containerized environments for consistent builds", icon: "docker" },
      { id: "vscode", name: "VS Code", description: "Primary engineering & development IDE", svgPath: "M381.8 82.7C395 82.7 380.4 80.5 544.6 139.7C545.3 140.1 545.7 140.1 546.4 140.5C564 147.8 576 165 576 184.7L576 451.7C576 471.4 563.9 488.6 546.4 495.9C546 495.9 545.3 496.3 543.5 497L399 548.6C393.5 550.8 387.7 551.9 381.8 551.9C365 551.9 350 543.1 341.6 529.9C341.1 529.4 335.4 519.6 331.4 513.8C330.3 512.3 329.6 510.9 328.5 509.4L156.5 219.5C145.9 201.2 128 189.8 108.2 186.9L200.4 141.9L200.8 141.5C207 138.6 214.3 136.7 221.6 136.7C237.7 136.7 251.9 144.7 260.7 156.8L260.7 157.2L429.7 395.3L429.7 229.3L393.1 280.9L308.2 161.3L340 106.4C340.7 105.7 341.1 105 341.4 104.6C349.8 91.4 364.8 82.7 381.6 82.7zM264.8 473.6L260.8 479.1L260.8 479.4C252 491.5 237.8 499.5 221.7 499.5C214.4 499.5 207.1 497.7 200.9 494.8L200.5 494.4L107.6 449.4C127.7 446.5 145.6 435.5 156.6 416.8L173.8 388.3L194.3 353.9L264.9 473.5zM88.1 223.1C99.8 220.2 115.9 222.4 125 238.1L172.9 318.2L125 398.3C118.1 410.4 107.5 414.8 97.6 414.8C94.3 414.8 91 414.1 88.1 413.3C76.4 410 64 400.1 64 381.5L64 254.9C64 236.3 76.4 226.4 88.1 223.1z", viewBox: "0 0 640 640" },
      { id: "shopify", name: "Shopify", description: "E-commerce platform development", icon: "shopify" },
      { id: "liquid", name: "Liquid", description: "Shopify templating language", icon: "shopify" },
    ],
  },
  {
    id: "design",
    name: "DESIGN",
    accent: "cyan",
    technologies: [
      { id: "figma", name: "Figma", description: "Interface design & design system tokenization", svgPath: "M142 159.8C142 106.9 184.9 64 237.8 64L402.2 64C455.1 64 498 106.9 498 159.8C498 193.3 480.8 222.8 454.8 239.9C480.8 257 498 286.5 498 320C498 372.9 455.1 415.8 402.2 415.8L400.1 415.8C375.3 415.8 352.7 406.4 335.7 390.9L335.7 479.2C335.7 532.8 291.7 576 238.3 576C185.5 576 142 533.2 142 480.2C142 446.7 159.2 417.2 185.2 400.1C159.2 383 142 353.5 142 320C142 286.5 159.2 257 185.2 239.9C159.2 222.8 142 193.3 142 159.8zM304.3 255.6L237.8 255.6C202.2 255.6 173.4 284.4 173.4 320C173.4 355.4 202 384.2 237.4 384.4L304.3 384.4L304.3 255.6zM335.7 320C335.7 355.6 364.5 384.4 400.1 384.4L402.2 384.4C437.8 384.4 466.6 355.6 466.6 320C466.6 284.4 437.8 255.6 402.2 255.6L400.1 255.6C364.5 255.6 335.7 284.4 335.7 320zM237.8 415.8L237.4 415.8C202 416 173.4 444.8 173.4 480.2C173.4 515.6 202.6 544.6 238.3 544.6C274.6 544.6 304.3 515.2 304.3 479.1L304.3 415.7L237.8 415.7zM237.8 95.4C202.2 95.4 173.4 124.2 173.4 159.8C173.4 195.4 202.2 224.2 237.8 224.2L304.3 224.2L304.3 95.4L237.8 95.4zM335.7 224.2L402.2 224.2C437.8 224.2 466.6 195.4 466.6 159.8C466.6 124.2 437.8 95.4 402.2 95.4L335.7 95.4L335.7 224.2z", viewBox: "0 0 640 640" },
    ],
  },
];
