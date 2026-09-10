# Paanya Empire — AI Agent Engineering Manual

> **This document is the single operational instruction manual for AI coding agents working on this repository.**
> Read this file completely before making any changes to the codebase.

---

## 1. Project Overview

**Product Name:** Paanya Empire

**Product Purpose:** Premium turnkey construction company website serving as a brand showcase and lead-generation platform for Paanya Empire, a premium construction and real estate firm.

**What the application does:**

- Communicates the Paanya Empire brand identity — trust, engineering excellence, premium quality, transparency, luxury, and precision
- Showcases completed and ongoing construction projects (residential, villas, commercial, interiors)
- Presents the full service offering (turnkey construction, architectural design, interior design, renovation, project management)
- Explains the end-to-end construction process
- Captures leads through an enquiry/contact form
- Establishes credibility through testimonials, project case studies, and company information

**Target Users:**

- High-net-worth individuals and families seeking premium residential construction
- Property investors and commercial developers
- Clients seeking turnkey construction, architectural design, or interior design services
- Anyone evaluating Paanya Empire as their construction partner

**Primary Workflows:**

1. **Brand Discovery** → Visitor lands on homepage → Understands brand → Explores services and projects
2. **Project Exploration** → Browse project listing → Filter by category → View project case study
3. **Service Understanding** → Browse services → View individual service detail → Understand process
4. **Lead Conversion** → Navigate to contact → Submit enquiry form → Receive confirmation
5. **Company Evaluation** → Visit About page → Read company story → Review process → Build trust

---

## 2. Source of Truth

Agents must respect the following hierarchy when making decisions:

```text
1. Existing production architecture and code
2. Stitch UI/UX design (Project ID: 11462908365889578034)
3. This AGENTS.md document
4. Existing project documentation (README.md, CLAUDE.md)
5. Existing implementation patterns
6. Agent assumptions (last resort)
```

**Critical rule:** Agents must NOT invent functionality, screens, APIs, or features when the required behavior can be determined from Stitch, this document, or existing code. When uncertain, mark decisions as `TODO — Needs confirmation` rather than guessing.

---

## 3. Stitch Design Rules

**Stitch Project ID:**

```text
11462908365889578034
```

**Project Title:** Paanya Empire Turnkey Construction Platform

Stitch is the **visual source of truth** for all UI/UX decisions.

### Stitch Screens Inventory

The project contains the following designed screens:

| Screen | Title | Device | Stitch Screen ID |
|--------|-------|--------|------------------|
| Homepage (Mobile) | PAANYA EMPIRE — Turnkey Construction Homepage | Mobile (390px) | `14e8806d1be0489d862abad4ec2a5da1` |
| Homepage (Desktop) | PAANYA EMPIRE — Desktop Flagship Homepage | Desktop (1280px) | `37952b215c114147a36eb4ec27e9bf47` |
| About Us | PAANYA EMPIRE — About Us | Mobile (390px) | `6403daadbc784a99b5261a3e03f5a8ef` |
| Services Listing | PAANYA EMPIRE — Services | Mobile (390px) | `f83545aa0c5c4b67b5c0e84ebe21975d` |
| Service Detail | PAANYA EMPIRE — Turnkey Construction Service | Mobile (390px) | `66ca2c44eead4a30b4761bc0da70c59d` |
| Projects Listing | PAANYA EMPIRE — Projects | Mobile (390px) | `7696f9006bfa484f9fcddebbfd3709fe` |
| Project Detail | PAANYA EMPIRE — Project Detail: The Obsidian Villa | Mobile (390px) | `7bcc3d58399848b997c292036f23333f` |
| Process | PAANYA EMPIRE — Process | Mobile (390px) | `c5373a603bd540f89fccb29e2e7f58db` |
| Contact Us | PAANYA EMPIRE — Contact Us | Mobile (390px) | `d88e90e650ac4a05baf5713b5234977a` |
| FAQ | PAANYA EMPIRE — Frequently Asked Questions | Mobile (390px) | `e6780170de58427e9edb1990a087da98` |

Additionally, three generated architectural images are used as design assets (villa exterior, construction facade, luxury interior).

### Design System (from Stitch)

**Name:** Fidelity Modern

**Color Mode:** Light

**Colors:**

| Token | Value | Usage |
|-------|-------|-------|
| Primary | `#005ab4` | Primary actions, links |
| Primary Container | `#0a73e0` | Primary button backgrounds |
| On Primary | `#ffffff` | Text on primary surfaces |
| Secondary | `#465f88` | Secondary text, supporting UI |
| Tertiary | `#964400` | Accent/warning elements |
| Surface | `#f9f9ff` | Page background |
| On Surface | `#181c22` | Primary text |
| On Surface Variant | `#414753` | Secondary text |
| Outline | `#717785` | Borders |
| Outline Variant | `#c1c6d5` | Subtle borders |
| Error | `#ba1a1a` | Error states |

**Typography:**

| Style | Font | Size | Weight | Line Height |
|-------|------|------|--------|-------------|
| Headline LG | Inter | 32px | 600 | 40px |
| Body MD | Inter | 16px | 400 | 24px |
| Label MD | Inter | 14px | 500 | 20px |

**Shapes:** Rounded (`0.5rem` base radius)

**Spacing Scale:** Factor of 2, with consistent gutters, margins, and padding

### What agents must preserve from Stitch

- Layout structure and visual hierarchy
- Typography scale and font choices
- Color palette and token usage
- Spacing rhythm and whitespace
- Component patterns and card layouts
- Responsive behavior (mobile and desktop variants exist)
- Interaction patterns (hover states, transitions)
- Section ordering within each page
- Navigation structure

### What agents must NOT do with Stitch designs

- Do not redesign screens that already exist in Stitch
- Do not substitute the Stitch color palette with a different one
- Do not change the typography system without explicit instruction
- Do not rearrange page section order unless fixing a clear UX issue
- Do not ignore responsive variants — both mobile and desktop designs exist

---

## 4. Repository Structure

### Current State

The project is in **early foundation stage** (single initial commit). The scaffolding exists but most planned directories are empty.

```text
/
├── public/
│   ├── favicon.ico
│   └── favicon.svg
│
├── src/
│   ├── components/
│   │   ├── layout/          # Empty — Header, Footer, MobileMenu go here
│   │   └── ui/              # Empty — Button, SectionHeading, Container go here
│   │
│   ├── layouts/             # Empty — BaseLayout.astro goes here
│   │
│   ├── pages/
│   │   ├── index.astro      # Placeholder only
│   │   └── ssr-test.astro   # SSR verification page
│   │
│   └── styles/              # Empty — global.css goes here
│
├── .env                     # Local environment variables (git-ignored)
├── .gitignore
├── AGENTS.md                # This file
├── CLAUDE.md                # Legacy agent instructions
├── README.md                # Default Astro readme
├── astro.config.mjs         # SSR + Node adapter configured
├── package.json
├── pnpm-lock.yaml
├── pnpm-workspace.yaml
└── tsconfig.json
```

### Target Structure

As development progresses, the following structure must be maintained:

```text
src/
├── components/
│   ├── layout/
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   └── MobileMenu.astro
│   │
│   ├── home/
│   │   ├── Hero.astro
│   │   ├── Introduction.astro
│   │   ├── Services.astro
│   │   ├── FeaturedProjects.astro
│   │   ├── WhyChooseUs.astro
│   │   ├── Process.astro
│   │   ├── Testimonials.astro
│   │   └── CTA.astro
│   │
│   ├── projects/
│   │   ├── ProjectCard.astro
│   │   ├── ProjectGrid.astro
│   │   ├── ProjectGallery.astro
│   │   └── ProjectFilters.astro
│   │
│   ├── services/
│   │   ├── ServiceCard.astro
│   │   └── ServiceSection.astro
│   │
│   ├── about/               # About page section components
│   ├── process/             # Process page section components
│   ├── contact/             # Contact/enquiry form components
│   ├── faq/                 # FAQ components
│   │
│   └── ui/
│       ├── Button.astro
│       ├── SectionHeading.astro
│       ├── Container.astro
│       └── ImageReveal.astro
│
├── layouts/
│   └── BaseLayout.astro
│
├── pages/
│   ├── index.astro
│   ├── about.astro
│   ├── process.astro
│   ├── contact.astro
│   ├── faq.astro
│   │
│   ├── services/
│   │   ├── index.astro
│   │   └── [slug].astro
│   │
│   ├── projects/
│   │   ├── index.astro
│   │   └── [slug].astro
│   │
│   └── api/
│       └── enquiry.ts
│
├── lib/
│   ├── projects.ts          # Data access functions for projects
│   ├── services.ts          # Data access functions for services
│   ├── testimonials.ts      # Data access functions for testimonials
│   ├── api.ts               # Future API client helpers
│   └── validation.ts        # Shared validation logic
│
├── data/
│   ├── projects.ts          # Mock project data
│   ├── services.ts          # Mock service data
│   ├── testimonials.ts      # Mock testimonial data
│   └── faq.ts               # FAQ data
│
├── types/
│   ├── project.ts
│   ├── service.ts
│   ├── testimonial.ts
│   └── enquiry.ts
│
└── styles/
    └── global.css
```

### Directory Purpose Guide

| Directory | Purpose |
|-----------|---------|
| `src/components/layout/` | Global layout components (header, footer, mobile menu) |
| `src/components/home/` | Homepage section components |
| `src/components/projects/` | Project listing and detail components |
| `src/components/services/` | Service listing and detail components |
| `src/components/ui/` | Reusable UI primitives (buttons, headings, containers) |
| `src/layouts/` | Page layout wrappers |
| `src/pages/` | Route definitions — Astro file-based routing |
| `src/pages/api/` | Server-side API endpoints |
| `src/lib/` | Data access layer and utility functions |
| `src/data/` | Mock data (to be replaced by API calls) |
| `src/types/` | TypeScript type definitions |
| `src/styles/` | Global CSS and Tailwind configuration |
| `public/` | Static assets served as-is |

Do not create directories that are not listed above without justification.

---

## 5. Architecture Principles

### Core Principles

1. **Server-First Rendering** — Use Astro SSR for all page rendering. Minimize client-side JavaScript. Fetch data server-side in component frontmatter.

2. **Separation of Concerns** — Pages compose components. Components render UI. The `lib/` layer handles data access. The `data/` layer holds mock data. Types are centralized in `types/`.

3. **Data Layer Abstraction** — UI components must NEVER import directly from `src/data/`. Always use functions from `src/lib/` which abstract the data source. This enables future replacement with NestJS API calls.

4. **Type Safety** — Use TypeScript strictly. Define interfaces for all data models in `src/types/`. Use typed function signatures throughout `src/lib/`.

5. **Component Reusability** — Extract repeated UI patterns into `src/components/ui/`. Page-specific sections belong in their respective component subdirectory (e.g., `src/components/home/`).

6. **Accessibility** — All pages must support keyboard navigation, proper ARIA labels, semantic HTML, meaningful alt text, visible focus states, and WCAG-compliant contrast.

7. **Performance** — Minimal client-side JavaScript. Optimize images with Astro's built-in image processing. Lazy load below-the-fold content. Avoid unnecessary third-party dependencies.

8. **Security** — Validate all user input server-side. Never expose secrets. Never trust client-side validation alone. Sanitize all external input.

9. **Error Handling** — Handle missing data gracefully. Provide 404 pages for missing routes. Never expose raw errors to users.

10. **Scalability** — Design the data layer for eventual migration to a NestJS + MongoDB backend. Keep the API abstraction clean and consistent.

### Architecture Diagram

```text
Browser
   ↓
Astro SSR (Node.js standalone)
   ↓
Data Access Layer (src/lib/)
   ↓
Mock Data (src/data/)        ← Current
Future NestJS API            ← Planned
   ↓
MongoDB Atlas                ← Planned
```

---

## 6. Frontend Rules

### Framework

- **Astro** is the primary framework
- **SSR mode** is mandatory (`output: 'server'` in `astro.config.mjs`)
- **Node.js adapter** in standalone mode is the deployment target
- **Tailwind CSS v4** is the styling framework (installed via `@tailwindcss/vite`)

### Astro Component Rules

- Use `.astro` components by default
- Do NOT introduce React, Vue, Svelte, or other framework components unless a feature genuinely cannot be built with Astro + vanilla JS
- Keep client-side JavaScript to the absolute minimum
- Do not hydrate components unnecessarily
- Use client-side JS only for: mobile menu, form interactions, scroll animations, sliders

```astro
---
// PREFERRED: Server-side data fetching
import { getProjects } from '../lib/projects';
const projects = await getProjects();
---
```

### Component Organization

- Each page section gets its own component (e.g., `Hero.astro`, `Services.astro`)
- Pages should primarily compose components:

```astro
<Layout title="Home">
  <Hero />
  <Introduction />
  <Services />
  <FeaturedProjects />
  <WhyChooseUs />
  <Process />
  <Testimonials />
  <CTA />
</Layout>
```

- Components should have a single, clear responsibility
- Keep components under ~200 lines; extract sub-components if needed

### Naming Conventions

| Type | Convention | Example |
|------|-----------|---------|
| Components | PascalCase | `ProjectCard.astro` |
| Pages | lowercase/kebab-case | `about.astro`, `index.astro` |
| Dynamic routes | `[param].astro` | `[slug].astro` |
| Types | PascalCase interface | `interface Project {}` |
| Lib functions | camelCase | `getProjectBySlug()` |
| Data files | camelCase | `projects.ts` |
| CSS classes | Tailwind utilities or BEM for custom classes | — |

### Routing

Routes map directly to `src/pages/` via Astro's file-based routing:

| Route | File | Description |
|-------|------|-------------|
| `/` | `pages/index.astro` | Homepage |
| `/about` | `pages/about.astro` | About page |
| `/services` | `pages/services/index.astro` | Services listing |
| `/services/[slug]` | `pages/services/[slug].astro` | Individual service |
| `/projects` | `pages/projects/index.astro` | Projects listing |
| `/projects/[slug]` | `pages/projects/[slug].astro` | Project case study |
| `/process` | `pages/process.astro` | Our process |
| `/contact` | `pages/contact.astro` | Contact/enquiry |
| `/faq` | `pages/faq.astro` | Frequently asked questions |
| `/api/enquiry` | `pages/api/enquiry.ts` | Enquiry form endpoint (POST) |

### Styling Rules

- Use **Tailwind CSS v4** for all styling
- Import Tailwind in `src/styles/global.css`
- Use Tailwind utility classes directly in components
- Define design tokens (colors, spacing, typography) as Tailwind theme extensions when the Stitch design system requires values not in the default palette
- Do NOT scatter raw hex colors throughout components — centralize in the theme
- Respect `prefers-reduced-motion` for all animations

### Responsive Design

The website must function correctly at these breakpoints:

```text
320px+    (small mobile)
375px+    (standard mobile)
390px+    (modern mobile — primary Stitch mobile design target)
430px+    (large mobile)
768px+    (tablet)
1024px+   (laptop)
1280px+   (desktop — primary Stitch desktop design target)
1440px+   (large desktop)
1920px+   (extra large desktop)
```

Design mobile-first. Never allow horizontal overflow.

### Form Handling

- Client-side validation for immediate feedback
- Server-side validation in the API endpoint (never trust client-side alone)
- Implement loading, success, and error states
- Use the enquiry form fields defined in the Stitch Contact Us screen

### Loading, Error, and Empty States

- Dynamic pages must handle missing data (404)
- API calls must handle failures gracefully
- Lists must handle empty results with appropriate messaging
- Forms must show loading spinners during submission
- Never display raw error messages to users

---

## 7. Backend Rules

### Current State

There is no backend yet. The Astro SSR layer handles all server-side logic.

### API Endpoints

Server-side API endpoints live in `src/pages/api/`:

```text
POST /api/enquiry    — Submit contact/enquiry form
```

### API Endpoint Rules

- Use Astro API routes (`.ts` files in `src/pages/api/`)
- Validate all incoming data server-side
- Return structured JSON responses
- Use appropriate HTTP status codes
- Never expose internal errors in responses

### Future Backend (NestJS)

The application is designed for eventual migration to:

```text
Astro SSR → NestJS API → MongoDB Atlas
```

All data access is abstracted through `src/lib/` functions to enable this transition. When the NestJS backend is introduced:

- Replace `src/lib/` function implementations to call the API
- Use `import.meta.env.API_URL` for the API base URL
- Centralize API client logic in `src/lib/api.ts`

---

## 8. Database Rules

### Current State

No database is connected. Mock data in `src/data/` serves as the temporary data source.

### Future Database (MongoDB Atlas)

When MongoDB is introduced:

- Use Mongoose for schema definition and validation
- Follow these naming conventions:
  - Collections: lowercase plural (`projects`, `services`, `enquiries`)
  - Fields: camelCase (`projectType`, `createdAt`)
- Define indexes for frequently queried fields (slugs, categories, status)
- Never modify production data structures without explicit approval
- Always validate data at the schema level
- Use timestamps (`createdAt`, `updatedAt`) on all documents

### Data Models

```typescript
// src/types/project.ts
interface Project {
  id: string;
  slug: string;
  title: string;
  location: string;
  category: string;       // Residential | Villas | Commercial | Interiors
  status: string;         // Ongoing | Completed
  year: number;
  area?: string;
  thumbnail: string;
  heroImage: string;
  description: string;
  gallery?: string[];
}

// src/types/service.ts
interface Service {
  id: string;
  slug: string;
  title: string;
  description: string;
  icon?: string;
  image: string;
  features: string[];
}

// src/types/enquiry.ts
interface Enquiry {
  name: string;
  phone: string;
  email: string;
  projectLocation: string;
  projectType: string;
  budget: string;
  message: string;
}
```

---

## 9. API Rules

### Endpoint Conventions

- Use RESTful conventions
- Prefix all API routes with `/api/`
- Use appropriate HTTP methods (GET for reads, POST for creates)
- Return JSON with consistent structure

### Response Format

```typescript
// Success
{
  success: true,
  data: { ... }
}

// Error
{
  success: false,
  error: {
    message: "Human-readable error message",
    code: "VALIDATION_ERROR"
  }
}
```

### Validation

- Validate all request bodies server-side
- Return 400 for validation errors with specific field messages
- Return 404 for missing resources
- Return 500 for unexpected server errors (without exposing internals)

### Enquiry Endpoint

```text
POST /api/enquiry
```

Request body:

```json
{
  "name": "string (required)",
  "phone": "string (required)",
  "email": "string (required, valid email)",
  "projectLocation": "string (required)",
  "projectType": "string (required)",
  "budget": "string (required, from predefined list)",
  "message": "string (optional)"
}
```

Budget options:

```text
Under ₹25 Lakhs
₹25–50 Lakhs
₹50 Lakhs–1 Crore
₹1–2 Crore
Above ₹2 Crore
```

---

## 10. Security Rules

Agents must:

- Never expose secrets in code, logs, or error messages
- Never hardcode API keys, database credentials, or tokens
- Never commit `.env` files (already in `.gitignore`)
- Validate all user input server-side
- Sanitize any external input before rendering in HTML
- Enforce authorization server-side for protected endpoints
- Never trust client-side validation as the sole validation
- Never log sensitive user information (passwords, tokens, personal data)
- Never put database credentials in frontend-accessible code
- Treat all form input as untrusted

---

## 11. Environment Variables

### Structure

```env
# .env (local development — never committed)
PUBLIC_SITE_URL=http://localhost:4321
API_URL=http://localhost:3001
```

### Rules

| Prefix | Visibility | Usage |
|--------|-----------|-------|
| `PUBLIC_` | Client + Server | Safe for browser exposure (site URL, feature flags) |
| No prefix | Server only | Secrets, API keys, database URLs |

- Use `.env` for local development
- Maintain `.env.example` with placeholder values (no real secrets)
- Never commit `.env` or `.env.production`
- Never hardcode environment-specific values in source code
- Access via `import.meta.env.VARIABLE_NAME`

### Planned Variables

```env
# .env.example
PUBLIC_SITE_URL=http://localhost:4321
API_URL=http://localhost:3001
# Future:
# MONGODB_URI=mongodb+srv://...
# CLOUDINARY_URL=cloudinary://...
# SMTP_HOST=...
# WHATSAPP_API_KEY=...
```

---

## 12. Testing Rules

### Current State

No testing framework is configured yet. This is a `TODO — Needs configuration`.

### Expected Testing Strategy

When testing is configured:

| Test Type | Tool | What to Test |
|-----------|------|-------------|
| Type checking | `astro check` | TypeScript errors across all files |
| Build verification | `pnpm build` | Production build succeeds |
| Unit tests | TODO | Data layer functions, validation logic |
| Component tests | TODO | Individual component rendering |
| E2E tests | TODO | Full user flows (homepage, project detail, enquiry) |

### Mandatory Verification

Before considering any feature complete, agents must run:

```bash
pnpm build
```

If type checking is configured:

```bash
pnpm astro check
```

A feature is not complete if the production build fails.

---

## 13. Code Quality

### TypeScript

- Use `strict` mode (configured via `astro/tsconfigs/strict`)
- Define explicit types for all function parameters and return values
- Define interfaces for all data models in `src/types/`
- Do not use `any` unless absolutely unavoidable (and document why)

### Formatting and Style

- Prefer readable code over clever code
- Use early returns to reduce nesting
- Keep functions small and focused
- Use meaningful variable and function names
- Remove dead code, unused imports, and console.log statements before completion
- Avoid magic numbers — use named constants or design tokens

### Import Organization

```typescript
// 1. Astro/framework imports
import Layout from '../layouts/BaseLayout.astro';

// 2. Component imports
import Hero from '../components/home/Hero.astro';

// 3. Library/utility imports
import { getProjects } from '../lib/projects';

// 4. Type imports
import type { Project } from '../types/project';

// 5. Data imports (only in lib/ files)
import projectData from '../data/projects';
```

### Component Guidelines

- Maximum ~200 lines per component (extract if larger)
- Single responsibility
- Props should be typed
- No duplicate markup across components — extract shared patterns to `src/components/ui/`

---

## 14. Git Rules

### Commit Conventions

Use conventional commits:

```text
feat: add homepage hero section
feat: implement project listing with filters
feat: add contact enquiry form
fix: resolve mobile navigation overflow
fix: correct project slug routing
refactor: extract data access layer
style: adjust hero typography spacing
docs: update AGENTS.md with API rules
chore: update dependencies
```

Do NOT commit messages like:

```text
update
changes
fix stuff
wip
test
asdf
```

### Files That Must Never Be Committed

- `.env` (any variant)
- `node_modules/`
- `dist/`
- `.astro/` (generated types)
- `.DS_Store`
- Any file containing real secrets, API keys, or credentials

### Change Scope

- Keep commits focused on a single logical change
- Do not modify unrelated files in the same commit
- Do not make formatting-only changes to files you are not otherwise editing

---

## 15. Development Workflow

Agents must follow this workflow for every change:

```text
1. Read AGENTS.md completely
2. Inspect relevant existing code
3. Inspect Stitch when UI is involved
4. Understand the existing architecture and patterns
5. Plan the change (identify affected files, components, data)
6. Implement the change
7. Run validation (pnpm build)
8. Fix any TypeScript or build errors
9. Review the diff for unintended changes
10. Report the result with a summary of what changed
```

### Development Commands

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Production build (mandatory before completing any feature)
pnpm build

# Preview production build
pnpm preview

# Type checking (when configured)
pnpm astro check
```

### Development Server

When starting the dev server, use background mode:

```bash
astro dev --background
```

Manage the background server with:

```bash
astro dev stop
astro dev status
astro dev logs
```

---

## 16. UI Implementation Workflow

When implementing any UI feature, agents must follow this sequence:

```text
1. Inspect the Stitch screen for the page/component
   → Use get_screen with the appropriate screen ID from the inventory in Section 3
   
2. Understand the screen structure
   → Identify all sections, components, and visual hierarchy
   
3. Identify existing components that can be reused
   → Check src/components/ui/ for shared primitives
   → Check if similar patterns exist in other page components
   
4. Map to the application architecture
   → Determine which data is needed (lib/ functions)
   → Determine routing requirements
   → Identify TypeScript types needed
   
5. Implement components
   → Create page section components in the appropriate subdirectory
   → Use Tailwind CSS matching the Stitch design tokens
   → Implement responsive behavior matching both mobile and desktop Stitch designs
   
6. Connect real data
   → Wire components to lib/ data access functions
   → Do NOT hardcode content that should come from data
   
7. Test responsive behavior
   → Verify at mobile (390px), tablet (768px), and desktop (1280px)
   → Ensure no horizontal overflow
   
8. Validate visually
   → Compare against the Stitch screenshot
   → Ensure typography, spacing, and colors match
```

Do NOT create static mockups or placeholder UI when the Stitch design and data layer can produce real, functional components.

---

## 17. Production Rules

This is a **production-oriented project**. Every change must be production-quality.

### Agents must prioritize

- Reliability — code that works correctly
- Security — no exposed secrets, validated input
- Performance — minimal JS, optimized images, efficient CSS
- Accessibility — keyboard navigation, screen readers, WCAG contrast
- Maintainability — clean code, clear abstractions, documented decisions
- Scalability — data layer ready for API migration
- Error handling — graceful failures, no raw errors shown to users
- Real data — use the data layer, not hardcoded strings (except for truly static content like brand taglines)

### Agents must avoid

- Temporary hacks or workarounds without documentation
- Fake API endpoints that simulate functionality
- Hardcoded production data in components
- Duplicate components that do the same thing
- Unnecessary npm dependencies
- Overengineering simple features
- Breaking existing working functionality
- Large client-side JavaScript bundles
- Console.log statements in production code

---

## 18. Definition of Done

A change is considered complete **only** when ALL of the following are true:

- [ ] Feature works as intended
- [ ] UI matches the corresponding Stitch screen
- [ ] Responsive behavior works at mobile, tablet, and desktop
- [ ] Real data is connected through the data layer (where applicable)
- [ ] Error states are handled (missing data, API failures)
- [ ] Loading states exist where the user would experience a wait
- [ ] Empty states exist for lists that could have zero items
- [ ] Accessibility is considered (semantic HTML, alt text, keyboard nav, contrast)
- [ ] TypeScript compiles without errors
- [ ] Production build succeeds (`pnpm build`)
- [ ] No unrelated files were modified
- [ ] No secrets or credentials were exposed
- [ ] No unnecessary client-side JavaScript was added

---

## 19. Agent Behavior

### Agents should

- Inspect before modifying — always read existing code first
- Reuse existing components and patterns
- Follow established conventions in the codebase
- Make reasonable assumptions when safe, but document them
- Explain significant architectural decisions
- Keep changes focused and minimal
- Run `pnpm build` after meaningful changes

### Agents should NOT

- Blindly overwrite files without understanding them
- Replace working configuration without justification
- Fabricate APIs, endpoints, or data structures
- Silently remove functionality
- Rewrite the architecture without explicit instruction
- Add unnecessary framework dependencies (React, Vue, etc.)
- Make stylistic changes to unrelated files

### When uncertain

- Check Stitch for UI/UX decisions
- Check existing code for established patterns
- Mark decisions as `TODO — Needs confirmation`
- Ask for clarification only when genuinely blocked

---

## 20. Forbidden Actions

Agents must **NEVER** perform the following:

1. **Do not delete working functionality** without explicit justification
2. **Do not overwrite the existing architecture** (Astro SSR + Node adapter) without instruction
3. **Do not expose secrets** — no API keys, credentials, or tokens in code
4. **Do not commit `.env` files** or any file containing real credentials
5. **Do not create fake backend functionality** — use the data layer abstraction instead
6. **Do not replace data layer calls with hardcoded mock data** in components
7. **Do not redesign Stitch screens** without explicit instruction to do so
8. **Do not install unnecessary packages** — evaluate if Astro, CSS, or native browser APIs can solve the problem first
9. **Do not modify unrelated files** in the same change
10. **Do not ignore TypeScript, lint, or build errors** — fix them before considering the work done
11. **Do not claim a feature is complete without verification** — run `pnpm build` at minimum
12. **Do not introduce React, Vue, or Svelte** unless a feature genuinely cannot be built with Astro + vanilla JS
13. **Do not use `any` type** without documenting the reason
14. **Do not import directly from `src/data/`** in components — use `src/lib/` functions
15. **Do not skip responsive design** — every component must work on mobile and desktop

---

## 21. Page-Specific Implementation Guide

### Homepage (`/`)

**Stitch Screens:** Mobile `14e8806d1be0489d862abad4ec2a5da1` | Desktop `37952b215c114147a36eb4ec27e9bf47`

Section hierarchy:

```text
Header (global)
Hero
Brand Introduction
Services Overview
Featured Projects
Why Paanya Empire
Our Process
Testimonials
Final CTA
Footer (global)
```

### About Page (`/about`)

**Stitch Screen:** `6403daadbc784a99b5261a3e03f5a8ef`

### Services Listing (`/services`)

**Stitch Screen:** `f83545aa0c5c4b67b5c0e84ebe21975d`

### Service Detail (`/services/[slug]`)

**Stitch Screen:** `66ca2c44eead4a30b4761bc0da70c59d`

Structure:

```text
Hero
Overview
What's Included
Process
Why Choose Us
Related Projects
CTA
```

### Projects Listing (`/projects`)

**Stitch Screen:** `7696f9006bfa484f9fcddebbfd3709fe`

Features: Category filtering, project cards with thumbnails

### Project Detail (`/projects/[slug]`)

**Stitch Screen:** `7bcc3d58399848b997c292036f23333f`

Structure:

```text
Project Hero
Project Overview
Project Facts (area, location, year, category)
Design Story
Gallery
Construction Details
Related Projects
CTA
```

### Process Page (`/process`)

**Stitch Screen:** `c5373a603bd540f89fccb29e2e7f58db`

### Contact Page (`/contact`)

**Stitch Screen:** `d88e90e650ac4a05baf5713b5234977a`

Enquiry form with fields: Name, Phone, Email, Project Location, Project Type, Budget, Message

### FAQ Page (`/faq`)

**Stitch Screen:** `e6780170de58427e9edb1990a087da98`

Accordion-style FAQ sections

---

## 22. Design System Implementation

### Visual Direction

- **Architectural, editorial, minimal, sophisticated**
- Generous whitespace
- Large typography with strong hierarchy
- Full-width architectural imagery
- Subtle transitions and hover effects
- No generic construction website aesthetics

### Avoid

- Excessive rounded cards, shadows, or gradients
- Bright random colors or generic icon grids
- Template-like sections or dashboard-style layouts
- Cheap-looking buttons or excessive borders
- Excessive animations or parallax effects

### Images

- Every image must have meaningful alt text (not `alt="image"`)
- Use Astro's built-in image optimization
- Prefer descriptive alt: `alt="Modern luxury villa exterior designed by Paanya Empire"`
- Lazy load images below the fold
- Always specify width and height to prevent layout shift

### Animations

Allowed: fade-up, image reveal, scale on hover, smooth nav transitions, scroll reveal, menu transitions

Forbidden: excessive parallax, bouncing elements, constant motion, long animation delays

Always respect `prefers-reduced-motion`.

---

## 23. SEO

Every page must have:

- Unique `<title>` tag
- Meta description
- Canonical URL
- Open Graph metadata (og:title, og:description, og:image)
- Proper heading hierarchy (single `<h1>` per page)
- Semantic HTML
- Image alt text
- Structured data where appropriate (Organization, LocalBusiness)

Dynamic pages (projects, services) must generate metadata from their data.

---

## 24. Development Phases

Development follows these phases. Do not skip phases.

### Phase 1 — Foundation

- [x] Astro + TypeScript + SSR + Node adapter
- [x] Tailwind CSS v4
- [x] Global styles and design tokens
- [x] Typography system
- [x] BaseLayout.astro
- [x] Header component
- [x] Footer component
- [x] Verify: `pnpm build` succeeds

### Phase 2 — Homepage

- [x] Hero, Introduction, Services, Featured Projects
- [x] Why Choose Us, Process, Testimonials, CTA
- [x] Verify: responsive, accessible, builds

### Phase 3 — Projects

- [x] Types, data layer, project listing, filtering
- [x] Dynamic project detail pages
- [x] Gallery, related projects
- [x] Verify: dynamic routes work

### Phase 4 — Services

- [ ] Services listing, data model, dynamic service pages
- [ ] Verify: dynamic routes work

### Phase 5 — Company Pages

- [ ] About, Process, Contact, FAQ

### Phase 6 — Enquiry System

- [ ] Contact form, validation, API endpoint
- [ ] Loading/success/error states

### Phase 7 — SEO and Optimization

- [ ] Metadata, Open Graph, structured data
- [ ] Image optimization, performance audit

### Phase 8 — Production

- [ ] Full build + SSR test
- [ ] All routes, forms, mobile, desktop verified

---

## 25. Astro Documentation

Consult these guides before working on related tasks:

- [Routing](https://docs.astro.build/en/guides/routing/)
- [Astro Components](https://docs.astro.build/en/basics/astro-components/)
- [Framework Components](https://docs.astro.build/en/guides/framework-components/)
- [Content Collections](https://docs.astro.build/en/guides/content-collections/)
- [Styling / Tailwind](https://docs.astro.build/en/guides/styling/)
- [Internationalization](https://docs.astro.build/en/guides/internationalization/)

Full documentation: https://docs.astro.build

---

## 26. Dependency Rules

Before installing any npm package, evaluate:

1. Is it actually required?
2. Can Astro handle this natively?
3. Can CSS handle this?
4. Can native browser APIs handle this?
5. Will this increase the client-side JavaScript bundle?
6. Does it negatively affect performance?

Prefer fewer dependencies. The current dependency footprint is minimal and should stay that way.

**Current dependencies:**

```json
{
  "dependencies": {
    "@astrojs/node": "^11.1.4",
    "astro": "^7.2.8"
  },
  "devDependencies": {
    "@astrojs/check": "^0.9.10",
    "@tailwindcss/vite": "^4.3.3",
    "tailwindcss": "^4.3.3",
    "typescript": "^5.9.3"
  }
}
```

---

## 27. Contact and Enquiry System

The website is primarily a **lead-generation platform**.

### Contact Form Fields

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| Name | text | Yes | Full name |
| Phone | tel | Yes | Phone number |
| Email | email | Yes | Valid email format |
| Project Location | text | Yes | Where the project is located |
| Project Type | select | Yes | Residential, Commercial, Villa, etc. |
| Budget | select | Yes | Predefined budget ranges |
| Message | textarea | No | Additional details |

### Budget Options

```text
Under ₹25 Lakhs
₹25–50 Lakhs
₹50 Lakhs–1 Crore
₹1–2 Crore
Above ₹2 Crore
```

### Future Integration Path

```text
Enquiry Form → Astro API Route → NestJS API → MongoDB → CRM → Email → WhatsApp
```

---

## 28. Final Product Standard

The Paanya Empire website must feel like:

```text
Premium Architecture Brand + Professional Construction Company + Modern Digital Experience
```

It must NOT feel like a generic contractor website.

Every visitor should immediately understand:

1. Who Paanya Empire is
2. What services they provide
3. Why they are trustworthy
4. What projects they have completed
5. How the turnkey process works
6. How to start a project

The website must prioritize:

```text
Brand → Trust → Projects → Services → Process → Conversion
```

Build for quality, maintainability, performance, and future scalability.