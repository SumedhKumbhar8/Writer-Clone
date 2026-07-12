# Writer.com Clone

A pixel-perfect clone of [Writer.com](https://writer.com) — the enterprise generative AI platform for agentic work. Built with Next.js 16 App Router, React 19, TypeScript, and Tailwind CSS v4.

## Pages

| Route | Description |
|---|---|
| `/` | Homepage — hero, trusted logos, features, testimonials, resources |
| `/platform` | Platform overview — AI Research, AI Studio, Trust & Security |
| `/pricing` | Pricing plans — Team & Enterprise tiers with feature comparison |
| `/customers` | Customer stories — case studies, testimonials, logos |
| `/resources` | Resource library — blog, webinars, guides |
| `/about` | Company info — mission, leadership, culture, stats |
| `/contact` | Contact page — form, locations, support info |
| `/legal/privacy` | Privacy policy |
| `/legal/terms` | Terms of service |
| `/legal/security` | Security overview |
| `/legal/accessibility` | Accessibility statement |
| `/product/writer-agent` | Writer Agent product page (dark theme) |
| `/product/ai-studio` | AI Studio product page (dark theme) |

## Tech Stack

| Technology | Version |
|---|---|
| Next.js (App Router) | 16.2.9 |
| React | 19.2.4 |
| TypeScript | ^5 |
| Tailwind CSS | ^4 |
| PostCSS + @tailwindcss/postcss | ^4 |
| ESLint (eslint-config-next) | ^9 |
| Font: Poppins (Google Fonts) | — |

## Architecture

```
src/
├── app/           # Next.js App Router pages (13 routes)
├── components/    # React components
│   ├── layout/    # Header, Footer, MobileMenu, AnnouncementBar
│   ├── home/      # Homepage sections (9 components)
│   ├── sections/  # Reusable patterned sections (HeroSection, FAQSection, etc.)
│   ├── cards/     # Reusable cards (FeatureCard, PricingCard, TestimonialCard, etc.)
│   ├── shared/    # Container, Section, SectionHeading, Reveal, VideoPlayer, etc.
│   └── product/   # Writer Agent & AI Studio components
├── data/          # All content in typed data files (13 files)
├── hooks/         # Custom hooks (useScroll, useNavbar, useBreakpoint, etc.)
├── lib/           # Utilities (cn, constants, seo, animation variants)
└── styles/        # CSS files (theme, typography, variables, animations, etc.)
```

### Key conventions

- **No file exceeds 500 lines** — preferred 100–300 lines
- **All content lives in data files** — no hardcoded text in components
- **Pages only compose section components** — no UI logic in page files
- **Every section is reusable** — no one-off sections
- **All images use `next/image`** — no `<img>` tags

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## Design System

Design tokens defined in `src/styles/theme.css` (Tailwind `@theme` block):

- **Colors:** midnight-graphite, canvas-white, slate-gray, cloud-white, fog, ghost-gray, lavender-mist, agent-violet (#a95ef8), action-blue (#5551ff), electric-blue (#007aff)
- **Fonts:** Poppins (body), CanelaDeck (display)
- **Typography scale:** caption (11px) → display (64px) — fluid via `clamp()`
- **Spacing:** 4px base unit → 112px scale
- **Container:** max-width 1136px, centered
- **Border radius:** pills (60px), inputs (72px), images (12px)

All tokens also available as CSS custom properties in `src/styles/variables.css`.

## Component Patterns

- **Server components by default** — interactive components use `"use client"`
- **Mega menu** — Header manages `activeMenu` state, renders `MegaMenuPanel` with Product/Solutions/Resources panels
- **Carousels** — CSS `scroll-snap` for horizontal scrolling, programmatic `scrollTo()` navigation
- **Marquees** — `requestAnimationFrame`-based `translate3d` animation, pauses on hover, respects `prefers-reduced-motion`
- **Scroll-synced sections** — IntersectionObserver + sticky panels (Writer Agent "How It Works", AI Studio "Supervise")
- **Auto-cycling tabs** — `setInterval` + IntersectionObserver start/stop (AI Studio "Build")
- **Reveal animations** — `useMounted` hook for hydration-safe fade-in-up animations
