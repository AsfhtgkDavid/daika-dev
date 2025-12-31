# daika-dev — portfolio

Personal portfolio website built with **Vite + React + TypeScript**.

## Tech stack

- Vite
- React 19
- TypeScript
- Tailwind CSS (via `@tailwindcss/vite`)
- React Router (`react-router`)

## Sections

- **Home**: landing page (see `src/pages/Home.tsx`)
- **About**: a short bio (see `src/pages/About.tsx`)
  - interests: infosec, Rust
  - experience/facts: self-audit resulting in **CVE-2025-69257**, open-source contributions, maintaining a package in **AUR**

Routing is defined in `src/routes/AppRoutes.tsx`.

## Getting started

### Requirements

- Node.js (latest LTS recommended)
- npm

### Install

```bash
npm install
```

### Dev server

```bash
npm run dev
```

### Production build

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

## Project structure

- `public/` — static assets (icons, manifest)
- `src/`
  - `components/` — reusable UI components
  - `components/ui/` — UI primitives (cards, navigation menu, etc.)
  - `pages/` — pages (Home/About)
  - `routes/` — routing configuration
  - `hooks/` — custom hooks
  - `constants/` — constants
  - `lib/` — utilities
  - `styles/` — CSS modules/styles

## License

- **Source code**: MIT (see `LICENSE`).
- **Content** (text, copy, and original media created for this site): [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/).
- **Third-party assets & dependencies** (some icons, fonts, logos, etc.): licensed by their respective owners under their own terms.
