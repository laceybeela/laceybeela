# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

**Development:**
- `npm run dev` - Start development server with Turbopack (runs on http://localhost:3000)
- `npm run build` - Build production version with Turbopack (skips linting)
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Architecture

This is a Next.js 15 application using the App Router with a personal website/portfolio structure:

**Framework & Tools:**
- Next.js 15 with App Router
- TypeScript
- Tailwind CSS v4 
- Turbopack for fast development builds
- Framer Motion for animations
- React Hook Form + Zod for form handling

**Project Structure:**
- `src/app/` - App Router pages with nested routes:
  - `/about`, `/contact`, `/offerings`, `/writing`, `/radio`, `/here-now-media`
- `src/components/` - Reusable UI components including audio-player, nav, portal-hero
- `src/lib/` - Utility functions (includes substack integration)
- `public/` - Static assets and images

**Design System:**
Uses a custom color palette defined in Tailwind config:
- `cream` (#FFF8F2) - Background
- `plum` (#4A284D) - Primary text
- `blush` (#F6B1B8) - Accent 
- `sand`, `amber`, `ether`, `sage` - Supporting colors
- Custom gradients: `portal` and `dusk`

**Typography:**
- Primary: Syne (variable font)
- Accent: Italianno (decorative font)

**Key Features:**
- Fixed navigation header with backdrop blur
- Portal-themed hero sections
- Audio player component
- Substack feed integration
- Form handling with validation

The site appears to be a personal brand/portfolio for "Lacey Beela" with offerings, writing, radio content, and media services.