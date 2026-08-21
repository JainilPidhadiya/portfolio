# Design System

## 1. Design Intent

Create a distinctive technical portfolio that feels like a developer's evolving system rather than a traditional portfolio template.

Core concept:

# FROM LOGIC → SYSTEM → IMPACT

The visual language should communicate:

- Structure
- Engineering
- Progress
- Systems thinking
- Technical confidence

The design must be unique without becoming difficult to use.

---

## 2. Visual Direction

The website should feel like:

Technical blueprint
+
Modern editorial design
+
Interactive system map

The website must not look like:

- A VS Code clone
- A terminal clone
- A generic SaaS landing page
- A neon cyberpunk portfolio
- A glassmorphism template
- A copy of Brittany Chiang's portfolio

---

## 3. Color Tokens

### Base

--color-background: #080B12;
--color-surface: #101522;
--color-surface-raised: #171D2C;

### Text

--color-text-primary: #F1F5F9;
--color-text-secondary: #94A3B8;
--color-text-muted: #64748B;

### Accent

--color-accent-primary: #7DD3FC;
--color-accent-strong: #38BDF8;
--color-accent-subtle: rgba(56, 189, 248, 0.12);

### System Colors

--color-border: rgba(148, 163, 184, 0.16);
--color-focus: #7DD3FC;
--color-success: #6EE7B7;
--color-error: #FCA5A5;

Raw colors must not be used repeatedly inside components.

Components should use semantic tokens.

---

## 4. Typography

Recommended font combination:

Primary:
Inter

Technical accent:
JetBrains Mono

Usage:

### Display
Large headings.

### Body
Inter.

### Metadata
JetBrains Mono.

Suggested scale:

--font-size-xs: 0.75rem;
--font-size-sm: 0.875rem;
--font-size-base: 1rem;
--font-size-lg: 1.125rem;
--font-size-xl: 1.25rem;
--font-size-2xl: 1.5rem;
--font-size-3xl: 2rem;
--font-size-4xl: 3rem;
--font-size-display: clamp(3.5rem, 8vw, 8rem);

---

## 5. Spacing

Use a consistent spacing system.

--space-1: 4px;
--space-2: 8px;
--space-3: 12px;
--space-4: 16px;
--space-5: 24px;
--space-6: 32px;
--space-7: 48px;
--space-8: 64px;
--space-9: 96px;
--space-10: 128px;

One-off spacing values should be avoided.

---

## 6. Layout System

The portfolio should use a vertical progression.

A subtle system line or progress indicator may connect major sections.

Example:

ORIGIN
   │
   ▼
SYSTEMS
   │
   ▼
BUILD LOG
   │
   ▼
EXPERIENCE
   │
   ▼
TOOLKIT
   │
   ▼
CONNECT

The connecting element must remain subtle.

It must not interfere with readability.

---

## 7. Navigation

Desktop navigation should be minimal.

Suggested items:

[ ABOUT ]
[ PROJECTS ]
[ EXPERIENCE ]
[ SKILLS ]

A distinctive but restrained interaction should indicate the active section.

Mobile navigation must prioritize:

- Large touch targets.
- Clear close action.
- Keyboard accessibility.

---

## 8. Hero Design

The hero is the strongest opportunity for originality.

Avoid a traditional centered layout.

Suggested composition:

Large name or identity anchor.

Supporting technical statement.

Interactive or animated system element.

Possible text structure:

JAINIL
PIDHADIYA

FULL STACK DEVELOPER

I build web systems from interface
to API to database.

The exact copy may change in content.md.

The hero animation should communicate "logic becoming a system."

Possible visual concept:

Small structured nodes gradually connect into a coherent path as the user enters the page.

This must remain subtle and performant.

---

## 9. Section Design

Every section should have:

1. Section identifier.
2. Main statement.
3. Supporting content.
4. Distinct interaction or composition.

Example:

01 / ORIGIN

Not every section should use the same boxed-card structure.

---

## 10. Project Design

Projects are the main proof of capability.

At least one project must be visually featured.

The project area should resemble a build log or system record.

Suggested information hierarchy:

PROJECT_01

NSDS EXIM

Full Stack B2B Management Platform

[React] [Node] [Express] [MongoDB]

Brief explanation.

[ GitHub ] [ Live Demo ]

Projects may expand to reveal:

- Problem
- Architecture
- Features
- Technical decisions

---

## 11. Experience Design

Experience should feel like a recorded development milestone.

Suggested format:

2023.12 ───── 2024.08

ACTOSCRIPT
SHOPIFY DEVELOPER INTERN

Supporting achievements below.

This section should visually acknowledge Shopify experience without making Shopify part of the portfolio's main identity.

---

## 12. Skills Design

Do not use dozens of identical skill cards.

Use grouped technical zones:

INTERFACE
React.js
JavaScript
HTML
CSS
Tailwind

SERVER
Node.js
Express.js
REST APIs
JWT

DATA
MongoDB
MySQL

ENGINEERING
Git
GitHub
Postman
MVC
DSA

---

## 13. Interaction Rules

Every interactive component must define:

- Default
- Hover
- Focus-visible
- Active
- Disabled where applicable
- Loading where applicable
- Error where applicable

Hover effects must not be the only method for communicating interaction.

Touch users must receive equivalent functionality.

---

## 14. Motion

Motion should represent:

- Connection
- Progress
- Expansion
- System assembly

Motion must not be decorative noise.

Suggested durations:

--motion-fast: 150ms;
--motion-base: 250ms;
--motion-slow: 450ms;

The website must support:

prefers-reduced-motion

When reduced motion is enabled:

- Disable continuous movement.
- Reduce entrance animation.
- Preserve essential state changes.

---

## 15. Responsive Rules

### Desktop
Maximum visual storytelling.

### Tablet
Reduce complex compositions.

### Mobile
Prioritize:

- Content
- Readability
- Touch interaction

Mobile must not display tiny technical metadata.

---

## 16. Accessibility

The website must:

- Target WCAG 2.2 AA principles.
- Maintain sufficient contrast.
- Have visible focus indicators.
- Support keyboard navigation.
- Use semantic HTML.
- Respect reduced motion.
- Provide accessible labels.

---

## 17. Prohibited Patterns

Do not use:

- Generic developer hero templates.
- Excessive gradients.
- Random technology logos floating around.
- Constant typing animations.
- Overuse of glass effects.
- Every section inside the same card.
- Tiny unreadable text.
- Hidden focus indicators.
- Animation that prevents reading.
- A design copied from another portfolio.

---

## 18. Quality Goal

The portfolio should feel:

Distinctive enough to remember.

Simple enough to understand immediately.

Technical enough for engineering roles.

Professional enough for recruiters.