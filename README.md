# ✦ Playful Studio

> **Big ideas. Bright energy.**

A vibrant, production-quality website for an independent creative studio that helps brands stand out through thoughtful branding, distinctive digital experiences, and imaginative campaigns.

![Status](https://img.shields.io/badge/status-production%20ready-B9F3C7?style=flat-square)
![React](https://img.shields.io/badge/react-18-8CD9FF?style=flat-square)
![TypeScript](https://img.shields.io/badge/typescript-5-C7B6FF?style=flat-square)
![Tailwind](https://img.shields.io/badge/tailwind-4-FF6D59?style=flat-square)
![Vite](https://img.shields.io/badge/vite-6-FFF6D9?style=flat-square)

---

## 🎨 About

Playful Studio is a single-page creative studio website built around a coherent **Playful & Colorful** visual identity. Every section, illustration, interaction, card, button, and piece of typography contributes to a warm, expressive, and confidently unconventional brand experience.

The design communicates one central idea: **a small studio for brands that want to make people stop, smile, and remember.**

---

## ✨ Features

### Visual Design
- 🌈 Custom color system with 7 brand colors
- ✒️ Thoughtful typography pairing (DM Sans + Playfair Display Italic + DM Mono)
- 🎭 Custom SVG artwork throughout — no stock images
- 🌀 Organic shapes, starbursts, and playful geometric motifs
- 📐 Creative asymmetry with editorial sensibility

### Sections
1. **Announcement Bar** — Brand introduction with coral accent
2. **Sticky Header** — Accessible navigation with mobile menu
3. **Hero** — "Big ideas. Bright energy." with abstract artwork composition
4. **Animated Ticker** — Seamless marquee with brand phrases
5. **Portfolio** — Three project cards with unique artwork and detail overlays
6. **Philosophy** — Dark editorial section with expressive typography
7. **Feature Band** — Bright CTA invitation
8. **Contact** — Newsletter form with validation and honest demo behavior
9. **Footer** — Dynamic year, navigation, brand identity

### Interactions
- Smooth anchor navigation
- Scroll-triggered section reveals
- Floating hero artwork animations
- Card hover effects
- Accessible mobile menu with keyboard support
- Form validation with live status feedback

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| React | 18.x | UI framework |
| TypeScript | 5.x | Type safety |
| Vite | 6.x | Build tool & dev server |
| Tailwind CSS | 4.x | Utility-first styling |
| Google Fonts | — | DM Sans, Playfair Display, DM Mono |

No heavy animation libraries. All motion is built with CSS keyframes, transitions, and `IntersectionObserver`.

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18+ (LTS recommended)
- **npm** 9+

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd playful-studio

# Install dependencies
npm install
```

### Development

```bash
# Start the dev server (http://localhost:3000)
npm run dev
```

### Build

```bash
# Create production build
npm run build
```

Output is written to `dist/`. The site is fully static and can be deployed to any hosting provider.

### Type Check

```bash
npm run typecheck
```

---

## 📁 Project Structure

```
playful-studio/
├── index.html              # HTML entry point with font preloading
├── package.json            # Dependencies and scripts
├── vite.config.js          # Vite + React + Tailwind config
├── tsconfig.json           # TypeScript configuration
├── src/
│   ├── main.tsx            # React entry point
│   ├── App.tsx             # Root component with scroll reveal
│   ├── index.css           # Design tokens, animations, base styles
│   └── components/
│       ├── AnnouncementBar.tsx
│       ├── Header.tsx       # Sticky nav + mobile menu
│       ├── Hero.tsx         # Hero section + abstract artwork
│       ├── Ticker.tsx       # Animated brand marquee
│       ├── Portfolio.tsx    # Project cards + detail overlay
│       ├── Philosophy.tsx   # Dark editorial statement
│       ├── FeatureBand.tsx  # CTA band
│       ├── Contact.tsx      # Newsletter form
│       └── Footer.tsx       # Site footer
└── dist/                   # Production build output
```

---

## 🎨 Design System

### Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| Butter Yellow | `#FFF6D9` | Primary background, warm canvas |
| Deep Plum Ink | `#292342` | Main text, dark contrast sections |
| Coral Pop | `#FF6D59` | Primary accent, CTAs, highlights |
| Soft Lilac | `#C7B6FF` | Creative cards, decorative artwork |
| Mint Green | `#B9F3C7` | Fresh supporting color |
| Sky Blue | `#8CD9FF` | Energetic accent |
| Warm White | `#FFFEFA` | Light surface, breathing room |

Colors are defined as CSS custom properties via Tailwind v4 `@theme` and can be used as utility classes (e.g., `bg-butter`, `text-coral`, `border-lilac`).

### Typography

| Role | Font | Weight | Usage |
|------|------|--------|-------|
| Primary Sans | DM Sans | 400–700 | Headlines, body, nav, buttons |
| Expressive Serif | Playfair Display Italic | 400–700 | Emphasized editorial words |
| Monospaced Accent | DM Mono | 400–500 | Section numbers, labels, metadata |

Fluid typography uses `clamp()` for responsive sizing without awkward wrapping.

### Graphic Motifs

- Four-point and eight-point starbursts
- Organic flowers and rounded geometric blobs
- Elliptical orbit lines
- Small circular labels and editorial stamps
- Numbered project markers
- Hand-cut paper-like shapes

All artwork is built with inline SVG — lightweight, scalable, and themeable.

---

## ♿ Accessibility

Built with inclusivity from the start:

- ✅ Semantic HTML with logical heading hierarchy
- ✅ Skip-to-content link
- ✅ Full keyboard navigation with visible focus indicators
- ✅ `aria-expanded`, `aria-controls`, `aria-live` where appropriate
- ✅ Form labels, error messages, and status announcements
- ✅ Sufficient color contrast across all combinations
- ✅ `prefers-reduced-motion` support throughout
- ✅ Decorative SVGs marked with `aria-hidden="true"`
- ✅ No keyboard traps or inaccessible modals

---

## 📱 Responsive Design

Mobile-first approach, tested at:

| Breakpoint | Layout |
|------------|--------|
| 320px–430px | Single column, compact nav, stacked hero |
| 768px | Two-column adjustments, tablet-optimized spacing |
| 1024px+ | Full grid layouts, editorial whitespace |
| 1440px+ | Maximum content width with generous margins |

---

## 📝 Notes

### Newsletter Form
The contact form is a **functional demo** with email validation and user feedback. It does not connect to a backend. To enable real subscriptions, integrate with a service like Mailchimp, ConvertKit, or a custom API endpoint.

### Portfolio Projects
Project names (Good Mood Market, Pop! Festival, Happy Habit) are illustrative concept work. No client testimonials, awards, or business results are claimed.

### Fonts
Google Fonts are loaded via `<link>` preconnect for performance. The site degrades gracefully to system fonts if the CDN is unavailable.

---

## 📄 License

This project is provided as-is for demonstration purposes.

---

<p align="center">
  <strong>Playful Studio</strong> — Independent creative studio<br/>
  <em>Big ideas. Bright energy.</em> ✦
</p>
