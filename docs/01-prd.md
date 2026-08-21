# Product Requirements Document

## 1. Product Overview

### Product Name
Jainil Pidhadiya — Personal Portfolio

### Product Type
Single-page personal developer portfolio website.

### Primary Role Positioning
Full Stack Developer

### Focus Areas
- MERN Stack
- React.js
- Node.js
- Express.js
- MongoDB
- MySQL
- REST API Development
- Authentication
- Database-driven applications

### Important Positioning Rule
The portfolio must position Jainil primarily as a Full Stack Developer.

Shopify must not be presented as the primary professional identity.

The Shopify Developer internship at ActoScript must appear only in the Experience section as professional experience.

---

## 2. Problem Statement

Many developer portfolios follow the same predictable structure:

- Generic hero section
- Profile image
- Skill cards
- Project cards
- Contact form

This portfolio must avoid feeling like a cloned template.

The website must communicate:

1. Who Jainil is.
2. How he thinks as a developer.
3. What technologies he works with.
4. What systems and applications he has built.
5. His real-world development experience.
6. How recruiters or clients can contact him.

---

## 3. Product Goal

Create a distinctive, modern, professional single-page portfolio that presents Jainil Pidhadiya as a Full Stack Developer.

The portfolio must balance:

- Unique visual identity
- Professional credibility
- Technical clarity
- Recruiter-friendly navigation
- Strong project storytelling
- Responsive design
- Accessibility
- Performance

---

## 4. Target Audience

### Primary Audience
- Recruiters
- Hiring managers
- Software development companies
- Startup founders
- Engineering teams

### Secondary Audience
- Potential clients
- Developers
- Technical collaborators

---

## 5. Core Portfolio Concept

The portfolio follows the concept:

# FROM LOGIC → SYSTEM → IMPACT

The website should feel like a journey through the developer's process.

Instead of presenting random sections, each section should answer a different question.

| Stage | Question |
|---|---|
| Origin | Who is the developer? |
| Foundation | What technical skills support his work? |
| Build Log | What systems has he built? |
| Experience | What real-world experience does he have? |
| Toolkit | What technologies does he work with? |
| Connection | How can someone contact him? |

The experience must feel like one continuous story.

---

## 6. Single-Page Requirement

The website must contain only one primary page.

Route:

/
 
Navigation must use anchor-based section navigation.

Example:

- Home → #home
- About → #about
- Projects → #projects
- Experience → #experience
- Skills → #skills
- Contact → #contact

The website must not require separate pages for projects, skills, about, or experience.

Project details should be revealed using expandable sections, overlays, dialogs, or interactive content within the same page when necessary.

---

## 7. Required Sections

### 01. Hero / Origin

Purpose:

Introduce Jainil immediately and clearly.

Must include:

- Name
- Full Stack Developer positioning
- Short professional introduction
- Primary CTA
- Secondary CTA
- Visual element representing the portfolio concept

The hero must avoid:

- Generic typing animations
- "Hello, I am..." template styling
- Random floating technology icons
- Excessive gradients

---

### 02. About / Developer Context

Purpose:

Explain Jainil's development direction.

Content must focus on:

- Full Stack development
- Building web applications
- Backend APIs
- Authentication
- Databases
- Problem-solving

This section should feel concise and personal.

It should not become a long biography.

---

### 03. Systems / Technical Foundation

Purpose:

Show technical capability without using a generic wall of skill cards.

Skills should be grouped by how they are used.

Suggested groups:

#### Interface
- React.js
- HTML5
- CSS3
- Tailwind CSS
- JavaScript

#### Server
- Node.js
- Express.js
- REST APIs
- JWT Authentication

#### Data
- MongoDB
- MySQL
- Mongoose

#### Engineering
- MVC Architecture
- Git
- GitHub
- Postman
- Data Structures & Algorithms

---

### 04. Build Log / Featured Projects

Purpose:

Demonstrate actual development work.

Featured projects:

1. NSDS EXIM
2. Exam Portal
3. Spotify Clone Backend
4. Billing / Invoice Management project if included in final content

Each project must communicate:

- Problem or purpose
- Technologies
- Key features
- Development contribution
- GitHub link when available
- Live link when available

Projects must not all use identical cards.

At least one project should receive a featured, expanded presentation.

---

### 05. Experience

Purpose:

Show real-world development experience.

Only one professional experience must be included:

ActoScript — Shopify Developer Intern

Duration:
December 2023 – August 2024

This section must frame the internship as experience that contributed to:

- Client-facing development
- Responsive web development
- JavaScript
- Shopify Liquid
- Theme customization
- UI improvements

Shopify must not dominate the rest of the portfolio.

---

### 06. Toolkit

Purpose:

Provide a clear, quickly scannable technology overview.

This section should not repeat the Systems section exactly.

Possible presentation:

Technology landscape with categories and confidence/experience context.

Example categories:

- Frontend
- Backend
- Database
- Development Tools
- Concepts

---

### 07. Contact / Next Connection

Purpose:

Provide a strong closing action.

Must include:

- Email
- LinkedIn
- GitHub

The section should use language that feels professional and direct.

Example intent:

Have an opportunity, project, or technical challenge? Let's connect.

---

## 8. Functional Requirements

The website must:

- Be fully responsive.
- Work on desktop, tablet, and mobile.
- Support keyboard navigation.
- Have visible focus states.
- Support reduced motion preferences.
- Use semantic HTML.
- Use smooth scrolling where appropriate.
- Highlight the active section in navigation.
- Provide working external links.
- Handle long project titles and descriptions.
- Handle missing live/demo links gracefully.

---

## 9. Non-Functional Requirements

### Performance
The portfolio should:

- Load quickly.
- Avoid unnecessary large libraries.
- Optimize images.
- Avoid heavy 3D rendering unless it provides meaningful value.
- Avoid unnecessary animation libraries.

### Accessibility
The website must target WCAG 2.2 AA principles.

### Maintainability
Portfolio content should be stored separately from UI components.

### Scalability
Adding a new project should not require rewriting the page structure.

---

## 10. Success Criteria

The portfolio is successful when a recruiter can understand within approximately one minute:

- Who Jainil is.
- What role he is targeting.
- What technologies he works with.
- What projects he has built.
- What real-world experience he has.
- How to contact him.

The portfolio should feel memorable without sacrificing clarity.