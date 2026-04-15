# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev        # Start development server (localhost:3000)
pnpm build      # Production build
pnpm start      # Run production build
pnpm lint       # Run Next.js ESLint
```

There are no tests configured in this project.

## Architecture

This is a **Next.js 14 App Router** marketing site for WizeHub — a Spanish-language omnichannel customer communication platform built by Wize Devs.

### Key structural decisions

- **`app/layout.tsx`** — Server component. Sets metadata and loads Google Fonts (Inter). Delegates all client-interactive shell to `app/client-layout.tsx`.
- **`app/client-layout.tsx`** — Client component wrapping `ThemeProvider`, `Nav`, `Footer`, and `BackToTop`. Exists because `ThemeProvider` uses `localStorage` and requires `'use client'`.
- **`app/page.tsx`** — Home page only. All other routes (`/whatsapp`, `/pricing`, `/dashboard`, etc.) are separate `page.tsx` files under `app/`.
- **`components/`** — Shared UI components consumed by all pages. No sub-directories.

### Theme system

Dark mode uses Tailwind's `class` strategy. `ThemeProvider` (`components/ThemeProvider.tsx`) reads `localStorage('wz-theme')` on mount, falls back to `prefers-color-scheme`, and toggles the `dark` class on `<html>`. The `useTheme()` hook exposes `{ theme, toggle }`.

### Design tokens

Custom Tailwind tokens are defined in `tailwind.config.ts` under `theme.extend.colors.wz`:

| Token | Value | Use |
|---|---|---|
| `wz-primary` | `#4F46E5` | Indigo — primary CTA, links |
| `wz-accent` | `#06B6D4` | Cyan — gradient end, accents |
| `wz-bg` | `#0B1020` | Dark background |
| `wz-bg2` | `#0F172A` | Slightly lighter dark bg (nav) |

CSS utility classes defined in `app/globals.css`:
- `.wz-gradient` — indigo→cyan linear gradient (used on CTA buttons, logo)
- `.wz-text-gradient` — same gradient applied as text color
- `.wz-gradient-dark` — dark variant for hero backgrounds

### Animation

`ScrollReveal` (`components/ScrollReveal.tsx`) is a Framer Motion wrapper that fades content in from below as it enters the viewport (`once: true`). Accepts an optional `delay` prop (seconds). This is the primary animation primitive used throughout the site.

### Page anatomy

Most pages follow the same pattern: `PageHero` → content sections → `CtaBand`. The reusable layout components are:

- `PageHero` — Full-width hero with kicker, h1, description, and optional CTA buttons
- `SectionHead` — Centered section header (kicker + title + description)
- `Card` — Feature card with optional icon, wraps `ScrollReveal`
- `FeatureRow` — Two-column alternating feature section with mock screenshot placeholder
- `CtaBand` — Full-width conversion banner at page bottom
- `Kicker` — Small uppercase label above headings

### Path alias

`@/*` maps to the repo root (configured in `tsconfig.json`). Use `@/components/Foo` for imports rather than relative paths.

### Language

All user-facing content is in **Spanish** (Latin America). Keep any new copy consistent with this.
