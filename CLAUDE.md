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
- **Context-based**: Uses React Context (`contexts/LanguageContext.tsx`) for language state management
- **Supported Languages**: French (default) and English
- **Translation Files**:
  - `lib/translations.ts` - All UI strings and static content (nested structure: `t.section.key`)
  - `lib/translatedData.ts` - Dynamic data (experience, projects, education) with getter functions
- **Usage Pattern**: Components use `const { t, language } = useLanguage()` hook
- **Persistence**: Language preference saved in localStorage on language change
- **Type Safety**: Full TypeScript support with `Language` and `TranslationKeys` types

### Data Management
All portfolio content (experience, projects, education, skills) is centralized in:
- `lib/data.ts` - Skills data
- `lib/translatedData.ts` - All other content with getter functions that return language-specific data

### Animation System
- **Library**: Framer Motion for all animations
- **Centralized Presets**: `lib/animations.ts` exports reusable animation variants
- **Key Patterns**:
  - `fadeInUp`, `fadeInLeft`, `fadeInRight`, `fadeIn`, `scaleIn` - Entrance animations
  - `staggerContainer` + `staggerItem` - For sequential list animations
  - `professionalCard` - Card entrance animations (combines opacity, y, and scale)
  - `cardHover` - Card hover effect with lift and shadow
  - `viewportSettings` and `cardViewportSettings` - Scroll trigger configurations
- **Utility Functions**:
  - `createStagger(delayBetween)` - Generate custom stagger animations
  - `createFadeIn(direction, distance)` - Generate custom directional fades
  - `getViewportSettings(isMobile)` - Get responsive viewport settings
- **Transitions**: Predefined transitions (`smooth`, `snappy`, `elegant`, `spring`, `bouncy`)
- **Performance**: All animations use `once: true` to prevent re-triggering on scroll
- **Easing**: Uses Tailwind's ease-out curve `[0.4, 0, 0.2, 1]` for consistency

### Component Structure
```
components/
├── Hero.tsx           - Full-screen landing section with animated name splits
├── Navbar.tsx         - Navigation with language switcher and theme toggle
├── MatrixRain.tsx     - Background effect for dark mode
├── StarField.tsx      - Animated star background
├── DemoModal.tsx      - Project demo iframe modal
├── ScrollToTop.tsx    - Scroll to top button
├── PageLoader.tsx     - Initial page loading animation
└── LanguageSwitcher*.tsx - Various language switcher implementations

app/
├── page.tsx          - Main portfolio page with all sections
├── layout.tsx        - Root layout with providers (Theme, Language)
└── globals.css       - Global styles and Tailwind directives

contexts/
└── LanguageContext.tsx - Language state management context

lib/
├── animations.ts      - Centralized Framer Motion animation presets
├── translations.ts    - All UI translations (fr/en)
├── translatedData.ts  - Dynamic content with getter functions
└── data.ts           - Skills data
```

### Styling Patterns
- **Card Design**: Uses `professional-card` class with `professional-glow` for premium look
- **Gradients**: Background gradients transition between light/dark modes
- **Responsive**: Mobile-first approach with custom breakpoints:
  - `xs: 375px` - Very small phones
  - `sm: 640px` - Small devices
  - `md: 768px` - Medium devices (tablets)
  - `lg: 1024px` - Large devices
  - `xl: 1280px` - Extra large
  - `2xl: 1536px` - 2X Extra large
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
- Light mode: `/hero/hero morning.svg`
- Dark mode: `/hero/hero night.svg`
These are absolute positioned with `z-index` layering and conditional rendering based on theme

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

### NBC Color Palette
The design system uses a professional banking color palette:
- **Primary Brand**: `nbc-red` (#e41c23), `nbc-redDark` (#c01017), `nbc-redLight` (#ff4d52)
- **Neutrals**: `nbc-charcoal` (#444444), `nbc-gray` (50-900 scale)
- **Backgrounds**: `nbc-polar` (#EEF6FB), `nbc-white`, `nbc-offWhite`
- **Blues**: `nbc-blue-light/soft/medium/dark` for accents
- **Status Colors**: `nbc-success` (green), `nbc-warning` (amber), `nbc-error` (red)
- **Text Hierarchy**: `nbc-text-primary/secondary/tertiary/muted/inverse`

### Common Usage Patterns
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
- Component-level code splitting with Next.js dynamic imports where applicable

## Key Dependencies
- **Next.js 14** - App Router architecture
- **React 18** - With concurrent features
- **TypeScript 5** - Full type safety
- **Framer Motion 12** - All animations
- **next-themes** - Theme switching with system detection
- **react-icons** - Icon library (Feather Icons via `Fi*` components)
- **Tailwind CSS 3.4** - Utility-first styling with custom design tokens

## Development Notes
- The portfolio is a single-page application with smooth scroll navigation
- All sections are in `app/page.tsx` - no separate route pages
- The site supports both light and dark modes with seamless transitions
- Language switching happens client-side without page reload
- Form submission in Contact section is currently simulated (integrate with EmailJS if needed)
