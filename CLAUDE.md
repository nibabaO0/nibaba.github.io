# CLAUDE.md

This file provides guidance to Claude Code when working with this codebase.

## Project Overview

TechPortfolio is a personal tech blog built with Nuxt 3. It showcases technical projects, a technology radar (ThoughtWorks-style four-ring model), an interactive terminal easter egg, and real-time visitor tracking via WebSocket.

## Tech Stack

- **Framework**: Nuxt 3 (SSR/SSG) with Vue 3 Composition API
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS with custom components and utilities in `assets/css/tailwind.css`
- **Content**: `@nuxt/content` for Markdown-based blog posts
- **Charts**: ECharts 5 (imported directly, not via vue-echarts)
- **Real-time**: WebSocket via Nitro experimental WebSocket support
- **Icons**: Font Awesome 6 (loaded via CDN in `nuxt.config.ts`)
- **SEO**: `@nuxtjs/seo` module with structured data (JSON-LD)

## Project Structure

```
├── app.vue                  # Root app shell with page transition styles
├── pages/                   # Page components (view/template only)
│   ├── projects.vue         # Project archive page
│   └── radar.vue            # Technology radar page
├── components/              # Reusable components (view/template only)
│   └── Terminal.vue         # Interactive terminal component
├── composables/             # Business logic — separated from views
│   ├── useProjects.ts       # Project data, category filtering
│   ├── useRadar.ts          # Radar chart (ECharts), tech timeline data
│   ├── useTerminal.ts       # Terminal command execution, output handling
│   ├── useLayout.ts         # Navigation, dark mode toggle, keyboard shortcuts
│   └── useWebSocket.ts      # WebSocket connection, visitor tracking
├── layouts/
│   └── default.vue          # Default layout with header, nav, footer, terminal modal
├── content/blog/            # Markdown blog posts (auto-routed by @nuxt/content)
├── server/
│   ├── api/                 # REST API endpoints (Nitro)
│   │   ├── health.ts        # Health check + blog stats
│   │   ├── stats.ts         # Visitor stats, page views, tech stats
│   │   └── projects.ts      # Project list API
│   └── routes/
│       └── websocket.ts     # WebSocket handler for real-time visitor tracking
├── assets/css/tailwind.css  # Tailwind layers: base, components, utilities
├── nuxt.config.ts           # Nuxt modules, SEO, Tailwind, Content, Nitro config
└── tailwind.config.js       # Custom theme (colors, fonts, animations)
```

## Architecture Rule

**Pages and components contain ONLY templates and styles.** All business logic, data, and side effects live in `composables/`. When adding a new feature:

1. Create a `composables/useXxx.ts` file for the logic
2. Import and call it in the page/component
3. The page/component `<script setup>` should only contain composable calls and `useHead`/`useSeoMeta`

## Build Commands

```bash
npm run dev         # Start dev server (http://localhost:3000)
npm run build       # Production build
npm run generate    # Static site generation
npm run preview     # Preview production build
npm run typecheck   # TypeScript type checking
npm run lint        # ESLint
```

## Key Nuxt Modules

- `@nuxtjs/tailwindcss` — Tailwind CSS integration
- `@nuxt/content` — File-based CMS (Markdown blog posts in `content/blog/`)
- `@nuxtjs/seo` — SEO utilities (sitemap, OG tags, structured data)

## Configuration Notes

- WebSocket is enabled via `nitro.experimental.websocket: true` in `nuxt.config.ts`
- OG Image generation is disabled (`ogImage.enabled: false`)
- Default locale is `zh-CN`
- Tailwind config uses `@apply` in `assets/css/tailwind.css` for `.btn-primary`, `.card`, `.gradient-text`, etc.

## Auto-imports

Nuxt 3 auto-imports Vue APIs (`ref`, `computed`, `onMounted`, `onUnmounted`, `nextTick`, etc.) and Nuxt APIs (`useHead`, `useFetch`, `useRoute`, etc.) — no need to import them explicitly in `.vue` or `.ts` files within the project.

## Content Blog Posts

Blog posts are stored as `.md` files in `content/blog/`. They are automatically available at `/blog/<filename>` via `@nuxt/content`. Frontmatter should include `title`, `description`, and `date`.
