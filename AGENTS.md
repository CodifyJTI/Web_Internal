# Web_Internal - Frontend React Application

## What This Is
A React.js + Vite frontend application for a public content website.
Currently this repo contains only the default Vite React scaffold.

This document defines how the real frontend should evolve from this starter.

## Stack
- Framework: React.js
- Build: Vite
- Styling: Tailwind CSS
- Routing: React Router (planned)
- Content Source: Markdown (semi-dynamic) + API (future)
- Deployment: Static hosting (Netlify / Vercel / GH Pages)

## Architecture
Use a feature-based, scalable folder structure:
src/
├─ components/ # reusable UI elements
├─ pages/ # route-level pages
├─ features/ # grouped logic (blog, resources, etc)
├─ layouts/ # page layouts (header/footer)
├─ hooks/ # custom hooks
├─ lib/ # utilities, helpers
├─ content/ # markdown sources
└─ assets/ # static images/fonts

## Routing Strategy
Implement frontend routing for public pages:

- `/` → Home
- `/blog` → Blog index
- `/blog/:slug` → Blog detail
- `/resources` → Resources
- `/resources/:slug` → Resource detail
- `/whitepapers` → Whitepapers
- `/whitepapers/:slug` → Whitepaper detail
- `/about`, `/faq`, `/careers`, `/legal/*`

Public routes do **not** require auth.

## Rendering Strategy
- Use static generation at build time where possible (local Markdown).
- Prepare API adapters for future backend content delivery.

## Key Responsibilities by Role

### Frontend Developer
- Scaffold new pages under `src/pages/`
- Implement routing using React Router
- Build layout primitives (Header, Footer, Container)
- Create content UI (Card lists, Markdown rendering)
- Integrate Markdown content as props (no direct API calls yet)

### Designer / Product
- Define approved page variants
- Provide final Figma for UI details
- Mark deprecated designs

## Design Principles
- Components are **data-agnostic**.
- Tailwind usage must be consistent with design tokens.
- Avoid “one-off” styles without approval.

## Guardrails
- No logic inside UI components (fetching and state lifted upstream).
- Pages must be stateless (props in, markup out).
- No deep nesting of folders without feature justification.
- Keep import paths shallow.

## Non-Goals
- Auth
- CMS UI
- Backend API deep integration
- Complex state management (global state only if necessary)

## Development Notes
- Bootstrap routing and page templates first.
- Ensure Vite works with Markdown imports and SSR if desired.
- Deploy static version early for easy previews.
