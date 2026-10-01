/**
 * Projects / Selected Work Data Architecture
 * 
 * Fully data-driven, easily editable, and structured for editorial case studies.
 * Supports: id, number, name, category, description, image, technologies,
 * problem, solution, result, githubUrl, liveUrl, featured.
 */
export const projectsData = [
  {
    id: "nsds-exim",
    number: "01",
    name: "NSDS EXIM",
    category: "FULL STACK / B2B MANAGEMENT PLATFORM",
    description: "A production B2B export-import management platform designed to streamline client inquiries, quotation tracking, and deal lifecycles.",
    image: "/projects/nsds-exim.png",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Mongoose", "REST APIs"],
    problem: "Export-import operations frequently depend on scattered spreadsheets and disjointed messaging, creating latency in quoting and tracking deals.",
    solution: "Architected a unified full-stack application featuring role-guarded JWT authentication, structured MongoDB schemas for clients and deals, and responsive interfaces for pipeline monitoring.",
    result: "Deployed to live production at nsdsexim.com, serving as the central operational platform for client inquiries.",
    githubUrl: null,
    liveUrl: "https://nsdsexim.com/",
    featured: true,
  },
  {
    id: "exam-portal",
    number: "02",
    name: "Exam Portal",
    category: "FULL STACK / WEB APPLICATION",
    description: "An online examination platform supporting distinct administrator management and student examination assessment workflows.",
    image: "/projects/exam-portal.png",
    technologies: ["Node.js", "Express.js", "MongoDB", "REST APIs", "Authentication"],
    problem: "Administering secure, timed digital examinations requires enforcing role-based boundaries, managing question banks dynamically, and computing results reliably without client-side tampering.",
    solution: "Developed role-based authentication and routing with dedicated administrator and student workflows, dynamic question management APIs, and server-side submission validation.",
    result: "Handles the complete assessment lifecycle from question bank creation to automatic score calculation.",
    githubUrl: "https://github.com/Jainil05/exam-portal-project",
    liveUrl: null,
    featured: false,
  },
  {
    id: "spotify-clone",
    number: "03",
    name: "Spotify Clone Backend",
    category: "BACKEND SYSTEM / REST API",
    description: "A music streaming backend architecture designed for media streaming, playlist curation, secure authentication, and cloud media asset delivery.",
    image: "/projects/spotify-backend.png",
    technologies: ["Node.js", "Express.js", "MongoDB", "JWT", "ImageKit.io"],
    problem: "Audio streaming platforms require efficient multimedia asset delivery, robust playlist state management, and protected user endpoints capable of high concurrency.",
    solution: "Constructed RESTful API endpoints in Express, modeled normalized MongoDB schemas for tracks and playlists, implemented JWT authorization, and integrated ImageKit.io for media processing.",
    result: "Provides a modular backend service capable of streaming audio assets with sub-second response times.",
    githubUrl: "https://github.com/Jainil05/spotify_clone_backend",
    liveUrl: null,
    featured: false,
  },
];
