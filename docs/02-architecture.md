# Architecture

## 1. Architecture Overview

This project is a single-page portfolio application.

The architecture must remain lightweight.

The project must not include unnecessary:

- Backend services
- Authentication
- Database
- CMS
- API layer
- Multi-page routing

unless a future requirement specifically needs them.

---

## 2. Recommended Stack

### Frontend
- React.js
- JavaScript
- HTML5
- CSS3

### Styling
Choose one consistent approach:

- Tailwind CSS

or

- CSS Modules

Do not mix multiple styling systems without a clear reason.

### Build Tool
- Vite

---

## 3. Application Structure

src/

├── components/
│   ├── ui/
│   │   ├── Button.jsx
│   │   ├── SectionLabel.jsx
│   │   ├── Container.jsx
│   │   └── ExternalLink.jsx
│   │
│   ├── navigation/
│   │   ├── Navbar.jsx
│   │   └── MobileMenu.jsx
│   │
│   └── projects/
│       ├── ProjectCard.jsx
│       ├── FeaturedProject.jsx
│       └── ProjectDetails.jsx
│
├── sections/
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Systems.jsx
│   ├── Projects.jsx
│   ├── Experience.jsx
│   ├── Toolkit.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
│
├── data/
│   ├── projects.js
│   ├── experience.js
│   ├── skills.js
│   └── navigation.js
│
├── hooks/
│   ├── useActiveSection.js
│   └── useReducedMotion.js
│
├── utils/
│   └── constants.js
│
├── styles/
│   ├── tokens.css
│   ├── globals.css
│   └── animations.css
│
├── App.jsx
└── main.jsx

---

## 4. Page Composition

App.jsx must assemble the portfolio as one continuous page.

Structure:

<App>

  <Navbar />

  <main>

    <Hero id="home" />

    <About id="about" />

    <Systems />

    <Projects id="projects" />

    <Experience id="experience" />

    <Toolkit id="skills" />

    <Contact id="contact" />

  </main>

  <Footer />

</App>

---

## 5. Navigation Architecture

Navigation must use section anchors.

Example:

{
  label: "About",
  href: "#about"
}

The application should track the currently visible section.

Recommended approach:

- Intersection Observer
- Custom useActiveSection hook

The implementation must avoid expensive scroll event listeners when possible.

---

## 6. Data Architecture

Content must be separated from presentation.

Example:

projects.js

export const projects = [
  {
    id: "nsds-exim",
    title: "NSDS EXIM",
    category: "Full Stack Application",
    stack: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB"
    ],
    description: "",
    github: "",
    live: ""
  }
];

UI components should consume project data.

Project content should not be hardcoded repeatedly across components.

---

## 7. State Management

The portfolio should not require Redux or another global state library.

Local React state and custom hooks are sufficient.

Possible state:

- Mobile menu open/closed
- Active navigation section
- Expanded project
- Dialog state

---

## 8. Animation Architecture

Animations must support the portfolio story.

Recommended techniques:

- CSS transitions
- CSS keyframes
- Intersection Observer
- Framer Motion only if the interaction requirements justify it

Animations must:

- Have a clear purpose.
- Avoid blocking interaction.
- Respect prefers-reduced-motion.
- Avoid excessive simultaneous movement.

---

## 9. Responsive Architecture

### Desktop
Focus on the complete visual narrative.

### Tablet
Reorganize layouts before they become cramped.

### Mobile
The design must not simply shrink desktop layouts.

Mobile must have intentional:

- Typography
- Navigation
- Spacing
- Project interaction
- Touch targets

---

## 10. Accessibility Architecture

The application must:

- Use semantic landmarks.
- Use one logical H1.
- Maintain heading hierarchy.
- Support keyboard navigation.
- Provide visible focus-visible states.
- Use descriptive labels.
- Respect reduced motion.
- Provide accessible dialog behavior if dialogs are used.

---

## 11. External Links

External links must:

- Clearly communicate destination.
- Use descriptive accessible names.
- Open safely when configured to open in a new tab.

Links may include:

- GitHub
- LinkedIn
- Live projects
- Email

---

## 12. Architecture Constraints

The project must remain:

- Single page.
- Frontend-focused.
- Content-driven.
- Easy to maintain.

Do not add technical complexity simply to make the project appear advanced.