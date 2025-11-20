# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website for Koceila Djaballah, a Full Stack Developer specializing in AI and SaaS solutions. The site is built with Next.js 14, React 18, TypeScript, and Tailwind CSS, featuring a professional NBC (National Bank of Canada) inspired design system with dark mode support and bilingual content (French/English).

## Development Commands

```bash
# Development server (runs on http://localhost:3000)
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## Architecture & Key Concepts

### Design System
The portfolio uses a professional banking-inspired design based on NBC's brand colors:
- **Primary Brand Color**: `nbc-red` (#e41c23) - used for CTAs, accents, and active states
- **Typography**: Inter (body text) and Sora (display/headings) from Google Fonts
- **Dark Mode**: Implemented via `next-themes` with `class` strategy
- All color tokens, animations, and spacing are defined in `tailwind.config.ts`

### Internationalization (i18n)
- **Context-based**: Uses React Context (`LanguageContext`) for language state management
- **Supported Languages**: French (default) and English
- **Translation Files**:
  - `lib/translations.ts` - All UI strings and static content
  - `lib/translatedData.ts` - Dynamic data (experience, projects, education) with language-specific functions
- **Usage Pattern**: Components use `const { t, language } = useLanguage()` hook
- **Persistence**: Language preference saved in localStorage

### Data Management
All portfolio content (experience, projects, education, skills) is centralized in:
- `lib/data.ts` - Skills data
- `lib/translatedData.ts` - All other content with getter functions that return language-specific data

### Animation System
- **Library**: Framer Motion for all animations
- **Centralized Presets**: `lib/animations.ts` exports reusable animation variants
- **Key Patterns**:
  - `fadeInUp`, `fadeInLeft`, `fadeInRight` - Entrance animations
  - `staggerContainer` + `staggerItem` - For sequential list animations
  - `professionalCard` - Card entrance animations
  - `viewportSettings` and `cardViewportSettings` - Scroll trigger configurations
- **Performance**: All animations use `once: true` to prevent re-triggering on scroll

### Component Structure
```
components/
├── Hero.tsx           - Full-screen landing section with animated name splits
├── Navbar.tsx         - Navigation with language switcher and theme toggle
├── MatrixRain.tsx     - Background effect for dark mode
├── StarField.tsx      - Animated star background
├── DemoModal.tsx      - Project demo iframe modal
├── ScrollToTop.tsx    - Scroll to top button
└── LanguageSwitcher*.tsx - Various language switcher implementations

app/
├── page.tsx          - Main portfolio page with all sections
├── layout.tsx        - Root layout with providers (Theme, Language)
└── globals.css       - Global styles and Tailwind directives
```

### Styling Patterns
- **Card Design**: Uses `professional-card` class with `professional-glow` for premium look
- **Gradients**: Background gradients transition between light/dark modes
- **Responsive**: Mobile-first approach with `md:`, `lg:` breakpoints
- **Hero Desktop Layout**: Names are split with offset positioning (`translateX(-60px)` and `translateX(170px)`)

## Important Implementation Details

### Theme Switching
The app uses `next-themes` with these configurations:
- Default theme: `dark`
- Theme attribute: `class` (adds/removes `dark` class on `<html>`)
- System theme detection enabled
- Theme-specific assets: SVG backgrounds change based on theme in Hero component

### Hero Section Name Animation
The desktop layout splits the name "KOCEILA DJABALLAH" into two parts positioned on opposite sides:
- Left side: "KOCEILA" with `transform: translateX(-60px)`
- Right side: "DJABALLAH" with `transform: translateX(170px)`
- Mobile: Stacked centered layout
- Both use fade-in animations with staggered delays

### Custom Animations in Tailwind
Several custom animations are defined in `tailwind.config.ts`:
- `animate-gradient-shift` - For button gradient animations
- `animate-pulse-subtle` - Subtle pulsing effects
- `animate-float` - Floating elements
All have corresponding `@keyframes` definitions

### SVG Background Assets
Hero component uses theme-specific SVG backgrounds:
- Light mode: `/hero/hero desktop no bg.svg`
- Dark mode: `/hero/hero desktop no bg night.svg`
These are absolute positioned with `z-index` layering

## Adding New Content

### Adding a New Project
Update `lib/translatedData.ts` in both `projectsFr` and `projectsEn` arrays with:
```typescript
{
  title: "Project Name",
  subtitle: "Short tagline",
  description: "Full description",
  features: ["Feature 1", "Feature 2", ...],
  tech: ["Tech1", "Tech2", ...],
  github: "https://github.com/...",
  demo: "https://... or #",
  year: "2024",
  featured: true // optional
}
```

### Adding a New Experience
Update `experienceFr` and `experienceEn` arrays in `lib/translatedData.ts`:
```typescript
{
  title: "Job Title",
  company: "Company Name",
  location: "City, Province",
  period: "Start - End",
  duration: "X months/years",
  description: ["Bullet 1", "Bullet 2", ...],
  tech: ["Tech1", "Tech2", ...]
}
```

### Adding UI Translations
Add new keys to both `fr` and `en` objects in `lib/translations.ts`, then access via `t.section.key` in components.

## Color Usage Guidelines
- **CTA Buttons**: Use `from-nbc-red to-red-600` gradient
- **Text Accents**: `text-nbc-red` for primary, `text-nbc-red/70` for muted
- **Borders on Hover**: `border-nbc-red` or `dark:border-nbc-red`
- **Backgrounds**: White/gray for light mode, `gray-900/gray-800` gradients for dark mode
- **Cards**: `bg-white dark:bg-gray-900` with `border-gray-200 dark:border-gray-700`

## Performance Considerations
- All animations use `once: true` in viewport settings to prevent reanimation
- Framer Motion animations use GPU-accelerated properties (transform, opacity)
- SVG backgrounds are optimized and theme-conditional
- Fonts use `display: swap` strategy for better LCP
