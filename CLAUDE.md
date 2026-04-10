# CLAUDE.md

This file provides guidance to Claude Code when working with code in this repository.

**Always build in code.** Do not use Pencil or `.pen` files unless explicitly asked.

## Development Commands

- `pnpm dev` - Start development server (port 4321)
- `pnpm build` - Build for production

Before committing, run build to verify no errors.

## Tech Stack

- **Framework**: Astro 6 + React (islands only) + TypeScript + Tailwind v4
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind v4 via `@tailwindcss/vite` — design tokens in `src/styles/global.css`
- **Icons**: `@phosphor-icons/react` — use this, not Lucide
- **Animation**: Scroll reveal via `data-reveal` / `data-stagger` attributes (no JS library needed for most cases). Use `framer-motion` only for complex interactive components.
- **Package Manager**: pnpm

## Directory Structure

```
src/
  pages/        # Astro pages (index.astro is the entry point)
  layouts/      # Layout.astro — base HTML shell with SEO + scroll reveal
  sections/     # Full-width page sections (Hero, Nonnas, Dishes, Locations, CTA)
  components/   # Reusable UI pieces (Header, Footer, React islands)
  styles/       # global.css — Tailwind @theme tokens + animation keyframes
  assets/       # Images, fonts, other static assets
public/         # Served as-is: images, icons, manifest
```

## Architecture Rules

- Sections go in `src/sections/`, reusable pieces go in `src/components/`.
- Use `.astro` components by default. Only use React (`.tsx`) for interactive islands (tabs, carousels, stateful UI).
- No CSS-in-JS. No custom stylesheets beyond `global.css`. Tailwind classes only.
- Use `data-reveal` for scroll-in animations — the IntersectionObserver in Layout.astro handles them automatically.
- Use `data-stagger` on a container to stagger-animate its direct children.

## Design System

Reference `@taste.md` for UI generation rules. Key rules always active:

- Tailwind v4 — do NOT use v3 syntax (no `tailwind.config.js`, no `theme.extend`)
- Design tokens live in `src/styles/global.css` under `@theme { }`
- DaisyUI is NOT installed — use raw Tailwind classes
- Use `min-h-[100dvh]` never `h-screen`
- Max page width: `max-w-[1400px] mx-auto` with `px-6 lg:px-12`
- Fonts: Host Grotesk (sans), Source Serif 4 (serif) — already loaded via Google Fonts
- Color palette: warm cream base (`warm-100` through `warm-500`) + blue primary (`#1765fc`)
- Max 1 accent color, saturation < 80%
- No neon gradients
- Hardware-accelerate only `transform` and `opacity`
- Buttons: tactile feedback with `active:scale-[0.98]`

## Component Patterns

- Functional components with arrow functions
- TypeScript interfaces for all props — no `any`
- `handle<Event>` naming for event handlers
- Early returns to avoid deep nesting
- Always add accessibility: `aria-*`, semantic HTML

## Code Quality

- Functions under 50 lines, files under 800 lines, nesting under 4 levels
- No `console.log` in committed code
