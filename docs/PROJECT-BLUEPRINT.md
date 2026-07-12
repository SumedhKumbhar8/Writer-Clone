# WRITER.COM PIXEL-PERFECT CLONE — MASTER PROJECT BLUEPRINT

## Project Goal

Build a pixel-perfect clone of Writer.com using:

* Next.js 15 App Router
* TypeScript
* Tailwind CSS v4
* Shadcn UI
* Framer Motion
* GSAP (only where necessary)
* Lenis Smooth Scroll
* Responsive Design
* Optimized Performance

The website must:

* Match Writer.com visually as closely as possible
* Be fully responsive
* Be component-driven
* Be scalable
* Use reusable architecture
* Use lazy loading where possible
* Keep all files maintainable

---

# Core Development Rules

## Rule 1

No file should exceed 500 lines.

Preferred:

* 100–300 lines per file

Hard limit:

* 500 lines

---

## Rule 2

No page file should contain UI code directly.

Bad:

```tsx
export default function Home() {
  return (
    <>
      <section />
      <section />
      <section />
    </>
  )
}
```

Good:

```tsx
export default function Home() {
  return (
    <>
      <Hero />
      <LogoCloud />
      <Features />
      <CTA />
    </>
  )
}
```

---

## Rule 3

All content should live inside data files.

Bad:

```tsx
<h2>Enterprise AI Platform</h2>
```

Good:

```tsx
data/homepage.ts
```

Then map content dynamically.

---

## Rule 4

All images must use:

```tsx
next/image
```

---

## Rule 5

Every section should be reusable.

Never build one-off sections.

---

## Rule 6
Critical Requirement

This website must be fully responsive and visually consistent across all screen sizes.

The design should adapt naturally without breaking layouts, overflowing content, overlapping elements, or causing horizontal scrolling.

The website should maintain the same visual quality and user experience on:

Mobile Phones
Tablets
Laptops
Desktop Monitors
Large Desktop Screens
Ultra-Wide Monitors
Supported Screen Widths
Mobile
320px
360px
375px
390px
414px
430px
480px
Tablet
768px
820px
834px
1024px
Laptop
1280px
1366px
1440px
Desktop
1600px
1920px
Ultra Wide
2560px+
Responsive Development Rules
Rule 1

Never use fixed widths.

Bad:

width: 1200px;

Good:

width: 100%;
max-width: 1136px;
Rule 2

Never use fixed heights unless absolutely necessary.

Bad:

height: 800px;

Good:

min-height: 800px;

or

height: auto;
Rule 3

All layouts must use:

flexbox
grid

Avoid absolute positioning unless required for animations.

Rule 4

No horizontal scrolling.

The entire website must be tested to ensure:

overflow-x: hidden

is not being used to hide layout bugs.

Fix the layout instead.

Rule 5

Images must scale automatically.

Use:

<Image
  fill
  sizes="100vw"
/>

or

<Image
  width={0}
  height={0}
  sizes="100vw"
  className="w-full h-auto"
/>
Rule 6

All typography must be fluid.

Use:

clamp()

Example:

font-size: clamp(2rem, 5vw, 4rem);

This ensures smooth scaling across all devices.

Rule 7

Section spacing must scale.

Use:

padding-block: clamp(60px, 8vw, 120px);

instead of fixed values.

Rule 8

Cards must stack correctly.

Desktop:

4 Columns

Tablet:

2 Columns

Mobile:

1 Column
Rule 9

Navigation must adapt.

Desktop:

Full Navigation
Mega Menu

Tablet:

Compact Navigation

Mobile:

Hamburger Menu
Drawer Navigation
Rule 10

Buttons must remain usable on touch devices.

Minimum touch target:

44px × 44px
Rule 11

All forms must be mobile friendly.

Inputs:

width: 100%;

Buttons:

width: 100%;

on smaller screens when necessary.

Rule 12

All animations must degrade gracefully.

Desktop:

Full animations

Mobile:

Reduced complexity

Avoid heavy animations that impact performance.

Rule 13

Use responsive utility classes everywhere.

Example:

grid-cols-1
md:grid-cols-2
lg:grid-cols-4

Never build desktop-only layouts.

Rule 14

Every page must be tested on:

320px
375px
768px
1024px
1280px
1440px
1920px
2560px

before completion.

Rule 15

Pixel-perfect consistency is required.

The website should look like the original Writer.com website on:

Chrome
Edge
Safari
Firefox

without layout shifts or broken sections.

---

# Website Structure

## Pages

### Homepage

```text
Hero
Logo Cloud
Platform Overview
Features Grid
Customer Logos
Testimonials
Resources
CTA
Footer
```

### Platform

```text
Hero
Platform Features
AI Agents
Knowledge Graph
Governance
Security
CTA
Footer
```

### Pricing

```text
Hero
Pricing Cards
Features Comparison
FAQ
CTA
Footer
```

### Customers

```text
Hero
Case Studies
Customer Stories
Testimonials
CTA
Footer
```

### Resources

```text
Hero
Blog Grid
Webinars
Guides
Resources CTA
Footer
```

### About

```text
Hero
Mission
Leadership
Culture
Company Stats
CTA
Footer
```

### Contact

```text
Hero
Contact Form
Locations
Support Information
CTA
Footer
```

### Footer Pages

```text
Privacy Policy
Terms
Security
Accessibility
Legal
```

---

# Folder Structure

```text
src
│
├── app
│
│   ├── page.tsx
│
│   ├── platform
│   │   └── page.tsx
│
│   ├── pricing
│   │   └── page.tsx
│
│   ├── customers
│   │   └── page.tsx
│
│   ├── resources
│   │   └── page.tsx
│
│   ├── about
│   │   └── page.tsx
│
│   ├── contact
│   │   └── page.tsx
│
│   ├── legal
│   │   ├── privacy
│   │   ├── terms
│   │   ├── security
│   │   └── accessibility
│
│   ├── globals.css
│   ├── layout.tsx
│   └── loading.tsx
│
├── components
│
│   ├── layout
│   │
│   │   ├── Header
│   │   ├── Footer
│   │   ├── MegaMenu
│   │   ├── MobileMenu
│   │   └── AnnouncementBar
│
│   ├── sections
│   │
│   │   ├── hero
│   │   ├── logos
│   │   ├── features
│   │   ├── testimonials
│   │   ├── pricing
│   │   ├── integrations
│   │   ├── resources
│   │   ├── faq
│   │   ├── cta
│   │   └── stats
│
│   ├── cards
│   │
│   │   ├── FeatureCard
│   │   ├── PricingCard
│   │   ├── TestimonialCard
│   │   ├── ResourceCard
│   │   └── CustomerCard
│
│   ├── shared
│   │
│   │   ├── Container
│   │   ├── Section
│   │   ├── SectionHeading
│   │   ├── LogoCloud
│   │   ├── Reveal
│   │   ├── GradientOrb
│   │   └── VideoPlayer
│
│   └── ui
│       └── shadcn
│
├── data
│
│   ├── navigation.ts
│   ├── footer.ts
│   ├── homepage.ts
│   ├── platform.ts
│   ├── pricing.ts
│   ├── customers.ts
│   ├── resources.ts
│   └── about.ts
│
├── hooks
│
│   ├── useScroll.ts
│   ├── useNavbar.ts
│   ├── useBreakpoint.ts
│   └── useAnimation.ts
│
├── lib
│
│   ├── constants.ts
│   ├── animations.ts
│   ├── seo.ts
│   └── utils.ts
│
├── styles
│
│   ├── variables.css
│   ├── typography.css
│   ├── animations.css
│   ├── utilities.css
│   └── sections.css
│
└── public
    ├── images
    ├── logos
    ├── videos
    └── icons
```

---

# Reusable Components

## Layout Components

Build once.

```text
Header
Footer
MegaMenu
MobileMenu
AnnouncementBar
```

---

## Foundation Components

Build once.

```text
Container
Section
SectionHeading
Button
Input
Badge
Card
```

---

## Shared Components

Build once.

```text
LogoCloud
CTASection
FAQSection
StatsSection
VideoSection
```

---

## Cards

Build once.

```text
FeatureCard
PricingCard
CustomerCard
ResourceCard
TestimonialCard
```

---

# Global Layout

```tsx
<AnnouncementBar />

<Header />

<main>
  {children}
</main>

<Footer />
```

Header and Footer should never be duplicated.

---

# Global CSS Architecture

globals.css

```css
@import "./styles/variables.css";
@import "./styles/typography.css";
@import "./styles/utilities.css";
@import "./styles/animations.css";
@import "./styles/sections.css";

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: var(--font-poppins);
  background: white;
  color: black;
}

img {
  display: block;
  max-width: 100%;
}

a {
  text-decoration: none;
  color: inherit;
}
```

---

# Responsive Breakpoints

```css
xs: 480px
sm: 640px
md: 768px
lg: 1024px
xl: 1280px
2xl: 1440px
```

---

# Container Rules

All sections must use:

```css
.container {
  width: 100%;
  max-width: 1136px;
  margin-inline: auto;
  padding-inline: 24px;
}
```

Mobile:

```css
@media (max-width: 768px) {
  .container {
    padding-inline: 16px;
  }
}
```

---

# Animation Stack

## Framer Motion

Use for:

```text
Hero Text
Fade In
Reveal
Cards
Buttons
Testimonials
Features
```

---

## GSAP

Use ONLY for:

```text
Pinned Sections
Horizontal Scroll
Complex Hero Effects
Parallax Effects
```

---

## Lenis

Use for:

```text
Smooth Scroll
```

---

# Lazy Loaded Components

Use Next.js Dynamic Import.

```tsx
dynamic(() => import(...))
```

Apply to:

```text
Testimonials
Resources
Footer CTA
Large Video Sections
Heavy Interactive Sections
```

---

# Performance Rules

## Images

```tsx
next/image
```

Always.

---

## Videos

```text
Lazy load
Autoplay only when visible
Pause when hidden
```

---

## Animations

```text
Use transform
Use opacity
Avoid layout thrashing
```

---

# Development Timeline

## Day 1

```text
Setup Project

Install Dependencies

Build:

Header
Footer
Mega Menu
Container
Section
Buttons

Create Global CSS

Create Layout System
```

---

## Day 2

```text
Homepage

Platform

Pricing

Customers

About

Resources

Contact

Responsive Layouts
```

---

## Day 3

```text
Animations

Mobile Fixes

Performance Optimization

Image Optimization

Pixel Perfect Adjustments

Final Testing
```

---

# Final Requirements

The final clone must:

* Match Writer.com visually
* Match spacing exactly
* Match typography exactly
* Match colors exactly
* Match responsive behavior
* Match navigation behavior
* Match animations where practical
* Be fully componentized
* Be optimized for performance
* Be maintainable
* Have no files over 500 lines
* Use reusable architecture throughout
