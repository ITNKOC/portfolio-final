# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website for a Full Stack Developer specializing in AI and SaaS solutions. Built with Next.js 14, React 18, TypeScript, and Tailwind CSS with a cyberpunk/neon aesthetic theme.

## Development Commands

```bash
# Install dependencies
npm install

# Start development server (localhost:3000)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## Architecture & Structure

### App Router Structure (Next.js 14)
- **app/layout.tsx**: Root layout with ThemeProvider (next-themes), metadata/SEO configuration
- **app/page.tsx**: Single-page application containing all sections (About, Experience, Projects, Skills, Contact)
- **app/globals.css**: Global styles with custom Tailwind utilities for cyberpunk effects

### Component Organization
- **components/Navbar.tsx**: Fixed navigation with smooth scroll links, mobile menu, theme toggle, social links
- **components/Hero.tsx**: Landing section with animated background, glowing orbs, glitch effects

### Data Layer
- **lib/data.ts**: Centralized data source containing:
  - `personalInfo`: Contact details, bio, social links
  - `experience`: Work history with descriptions and tech stacks
  - `projects`: Portfolio projects with features and technologies
  - `skills`: Technical skills organized by category with proficiency levels
  - `education`: Academic background
  - `languages`: Spoken languages with proficiency

### Styling System

**Custom Color Palette - Matrix Hacker Theme** (tailwind.config.ts):

**Dark Mode (Cyberpunk):**
- `cyber-black`: #0A0A0A (Deep Black)
- `cyber-darker`: #111111 (Dark Void)
- `cyber-dark`: #1A1A1A (Slightly lighter)
- `cyber-gray`: #2A2A2A (Dark Gray)
- `cyber-primary`: #00FF41 (Matrix Green - neon)
- `cyber-secondary`: #00FFFF (Electric Cyan - neon)
- `cyber-accent`: #FF0080 (Hot Pink - neon)

**Light Mode:**
- `light-primary`: #00C932 (Tech Green)
- `light-secondary`: #0099CC (Ocean Blue)
- `light-accent`: #CC0066 (Crimson)
- `light-bg`: #FFFFFF (Clean White)
- `light-bgAlt`: #F5F5F5 (Soft Gray)

**Custom Utilities** (globals.css):
- `.cyber-grid`: Animated grid background (adapts to light/dark mode)
- `.cyber-card`: Standard card styling with hover effects (adapts to light/dark mode)
- `.neon-border`: Matrix Green glowing border with enhanced glow in dark mode
- `.neon-border-secondary`: Electric Cyan glowing border
- `.neon-border-accent`: Hot Pink glowing border
- `.text-glow`: Text shadow effect
- `.text-glow-sm`: Smaller text shadow effect
- `.glitch`: Skew animation for names/titles

**Custom Animations** (tailwind.config.ts):
- `animate-pulse-slow`: Slow pulsing for backgrounds
- `animate-glow`: Matrix Green growing glow effect
- `animate-glow-cyan`: Electric Cyan growing glow effect
- `animate-glow-pink`: Hot Pink growing glow effect
- `animate-float`: Vertical floating motion

### Key Dependencies
- **framer-motion**: All animations and transitions throughout the site
- **next-themes**: Dark/light theme switching with class-based strategy
- **react-icons**: All UI icons (Feather Icons via `react-icons/fi`)
- **emailjs-com**: Email form integration (currently placeholder implementation in page.tsx:14-23)

## Path Aliases
TypeScript is configured with `@/*` alias mapping to project root (`tsconfig.json:22-24`).

## Theme Configuration
- Default theme: `dark` (layout.tsx:31)
- Theme strategy: `class` attribute on `<html>` element
- Theme toggle available in Navbar (both desktop and mobile)

## Important Implementation Notes

1. **All components use "use client"**: This is a single-page client-side application with animations (Navbar, Hero, page.tsx all marked with "use client")

2. **Single-page layout**: All portfolio sections (About, Experience, Projects, Skills, Contact) are in app/page.tsx with anchor navigation

3. **Animation patterns**:
   - Use `framer-motion` for all animations
   - Use `initial`, `whileInView`, and `viewport={{ once: true }}` for scroll-triggered animations
   - Stagger children animations for lists (see Hero.tsx:8-16)

4. **Contact form**: Currently uses placeholder setTimeout logic (page.tsx:14-23). EmailJS integration pending.

5. **Responsive design**: Mobile-first approach with `md:` and `lg:` breakpoints for desktop layouts

6. **Accessibility**: Include `suppressHydrationWarning` on `<html>` for theme switching (layout.tsx:29)

## Content Updates

To update portfolio content, edit `/lib/data.ts`:
- Modify `personalInfo` for contact details and bio
- Add/edit items in `experience` array for work history
- Add/edit items in `projects` array for portfolio pieces
- Update `skills` object to adjust proficiency levels
- Modify `education` and `languages` arrays as needed

All changes in data.ts will automatically reflect throughout the site.
