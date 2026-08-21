# Architecture and Design Decisions

## Decision 01

### Decision

The portfolio will be single-page.

### Reason

A personal portfolio is primarily consumed through quick exploration.

A single-page structure provides:

- Fast navigation.
- Strong storytelling.
- Better continuity.
- Lower architectural complexity.

### Consequence

Detailed project content must use:

- Expandable areas.
- Modals.
- Drawers.

Separate project pages should not be created unless explicitly required later.

---

## Decision 02

### Decision

Primary positioning is Full Stack Developer.

### Reason

The target role focuses on MERN and SQL-related development.

### Consequence

The hero, skills, projects, and visual identity must prioritize:

- React
- Node.js
- Express.js
- MongoDB
- MySQL
- APIs
- Authentication
- Databases

---

## Decision 03

### Decision

Shopify appears only as internship experience.

### Reason

Shopify is real professional experience but is not the target career positioning.

### Consequence

Do not place Shopify in:

- Primary title.
- Hero.
- Main branding.
- Primary project category.

---

## Decision 04

### Decision

Projects will be presented as systems, not generic portfolio cards.

### Reason

The goal is to demonstrate Full Stack thinking.

### Consequence

Projects should communicate:

- Purpose.
- Technical architecture.
- Features.
- Technologies.
- Development contribution.

---

## Decision 05

### Decision

The visual concept is:

FROM LOGIC → SYSTEM → IMPACT

### Reason

This connects technical skills, projects, experience, and contact into one narrative.

### Consequence

Sections should visually feel connected through progression rather than appearing as unrelated blocks.

---

## Decision 06

### Decision

No design copying.

### Reason

The portfolio must develop its own identity.

External portfolios may be used for:

- Inspiration.
- Documentation quality.
- Interaction research.

They must not be copied section-for-section or visually recreated.

---

## Decision 07

### Decision

Use lightweight frontend architecture.

### Reason

The portfolio does not require complex infrastructure.

### Consequence

Avoid adding:

- Backend APIs.
- Authentication.
- Databases.
- Redux.

unless a real feature requires them.