# AGENTS.md

## Commands

```bash
pnpm dev        # Dev server on localhost:3000
pnpm build      # Static export to out/ (output: 'export')
pnpm lint       # ESLint via next lint
```

No test runner is configured. Run `pnpm lint` before considering work done.

## Static export constraints

`next.config.js` sets `output: 'export'` with `trailingSlash: true` and `images: { unoptimized: true }`. This means:

- All pages must be statically exportable — no server-side runtime, no dynamic API routes.
- `next/image` optimization is disabled; use plain `<img>` or `unoptimized` images.
- Build output goes to `out/`, not `.next/` (the `.next/` directory exists only for dev).

## Architecture

- **Next.js 14 App Router** — single-page marketing site in Spanish (Latin America).
- **`app/layout.tsx`** is a server component (metadata + font loading only). All client-side shell lives in **`app/client-layout.tsx`** because `ThemeProvider` needs `'use client'`.
- **Route pages**: `app/page.tsx` is home; every other route (`/whatsapp`, `/pricing`, `/dashboard`, etc.) is a separate directory with its own `page.tsx`.
- **`components/`** is flat — no subdirectories. All shared UI components live at root level.

## Key conventions

- **Language**: All user-facing copy is Spanish (Latin America). Keep new content consistent.
- **Path alias**: Use `@/components/Foo` imports, never relative paths into components.
- **Design tokens**: Custom Tailwind colors live under `theme.extend.colors.wz` in `tailwind.config.ts`. Available tokens: `wz-bg`, `wz-bg2`, `wz-primary`, `wz-primary2`, `wz-accent`, `wz-accent2`, `wz-violet`, `wz-success`, `wz-warning`, `wz-danger`.
- **CSS utility classes**: `.wz-gradient`, `.wz-gradient-dark`, `.wz-text-gradient` (defined in `app/globals.css`).
- **Animation**: `ScrollReveal` (Framer Motion wrapper, fade-in from below, `once: true`) is the standard animation primitive. Accepts `delay` prop in seconds.
- **Theme**: Tailwind `darkMode: 'class'`. `ThemeProvider` reads `localStorage('wz-theme')`, falls back to `prefers-color-scheme`. Hook: `useTheme()` returns `{ theme, toggle }`.

## Page structure pattern

Most pages follow: `PageHero` → content sections → `CtaBand`. Reusable layout components: `PageHero`, `SectionHead`, `Card`, `FeatureRow`, `CtaBand`, `Kicker`.

## When adding a new page

1. Create `app/<route>/page.tsx`.
2. Use the `PageHero` → sections → `CtaBand` pattern.
3. Import components via `@/components/...`.
4. Wrap animated sections with `ScrollReveal`.
5. Use `wz-*` color tokens and gradient classes — avoid hardcoded colors.
6. All copy in Spanish.