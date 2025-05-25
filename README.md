# Huang-Yu Blog

A modern, personal technical blog built with [Docusaurus 3](https://docusaurus.io/) and TypeScript, featuring a beautiful UI, fast search, and a focus on developer experience.

## Features

- **Docusaurus 3**: Static site generator for documentation and blogs
- **TypeScript & React 19**: Modern, type-safe, and component-driven
- **Tailwind CSS**: Utility-first styling for rapid UI development
- **Local Search**: Fast, privacy-friendly search powered by `@easyops-cn/docusaurus-search-local`
- **MDX Support**: Write posts in Markdown or MDX, with React components
- **Custom Components**: Includes custom hero and blog marquee components
- **Multi-language Ready**: i18n support (default: English)
- **SEO & Social**: Social card, tags, and sitemap
- **Beautiful, Responsive UI**: Modern design with dark mode

## Getting Started

### 1. Install dependencies

```bash
pnpm install
```

### 2. Start the development server

```bash
pnpm start
```

Visit [http://localhost:3000/blogs/](http://localhost:3000/blogs/) to view the site.

### 3. Build for production

```bash
pnpm build
```

### 4. Serve the production build locally

```bash
pnpm serve
```

## Writing Posts

- Add Markdown (`.md`/`.mdx`) files to `blogs/` (see `_tutorial-basics/` for examples)
- Use [Front Matter](https://docusaurus.io/docs/markdown-features#front-matter) for metadata (title, date, tags, etc.)
- MDX files can include React components

## Deployment

- Build static files: `pnpm build`
- Deploy the `build/` folder to any static hosting (Vercel, Netlify, GitHub Pages, etc.)
- See [Docusaurus Deployment Guide](https://docusaurus.io/docs/deployment)

## Scripts

- `pnpm start` – Start dev server
- `pnpm build` – Build static site
- `pnpm serve` – Serve production build locally
- `pnpm deploy` – Deploy (customize as needed)
- `pnpm format` – Format code with Biome

## Tech Stack

- [Docusaurus 3](https://docusaurus.io/)
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [MDX](https://mdxjs.com/)

## License

This project is for personal use.