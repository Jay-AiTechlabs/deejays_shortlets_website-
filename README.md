# Dejays Homes & Shortlets - Luxury Apartment Rental Website

A modern, responsive website for a premium shortlet apartment rental service in Abuja, Nigeria. Built with React 19, Tailwind CSS 4, and TypeScript.

## Features

- **Modern Design**: Refined minimalism aesthetic with warm color palette (cream, gold, charcoal)
- **Responsive Layout**: Mobile-first design that adapts seamlessly across all devices
- **Interactive Property Showcase**: Browse and select from multiple apartment options
- **Premium Amenities Display**: Highlight key features and services
- **Location Integration**: Embedded Google Map showing property location
- **Smooth Animations**: Subtle, purposeful transitions and micro-interactions
- **Professional Typography**: Serif headlines (Playfair Display) paired with clean sans-serif body text (Poppins)

## Tech Stack

- **Frontend**: React 19 with TypeScript
- **Styling**: Tailwind CSS 4 with custom design tokens
- **UI Components**: shadcn/ui component library
- **Routing**: Wouter (lightweight client-side router)
- **Icons**: Lucide React
- **Build Tool**: Vite

## Project Structure

```
client/
  public/           ← Static assets (favicon, robots.txt, etc.)
  src/
    pages/          ← Page components
    components/     ← Reusable UI components
    contexts/       ← React contexts
    hooks/          ← Custom React hooks
    lib/            ← Utility functions
    App.tsx         ← Main app component with routing
    main.tsx        ← React entry point
    index.css       ← Global styles and design tokens
server/             ← Express server (optional)
shared/             ← Shared types and constants
```

## Getting Started

### Prerequisites

- Node.js 18+ (recommended: 20+)
- pnpm (or npm/yarn)

### Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

The development server will start at `http://localhost:3000`.

## Design Philosophy

The website follows a **Refined Minimalism with Warmth** design approach:

- **Clean Layouts**: Generous whitespace and intentional hierarchy guide users naturally
- **Warm Color Palette**: Cream (#F5F1ED), charcoal (#2C2C2C), and gold (#D4A574) create a premium, inviting feel
- **Asymmetric Hero**: Large hero image paired with compelling copy creates visual interest
- **Smooth Interactions**: Hover effects, scroll reveals, and button animations enhance user experience
- **Premium Typography**: Strategic use of serif and sans-serif fonts reinforces luxury positioning

## Color Scheme

| Color | Hex | Usage |
|-------|-----|-------|
| Cream | #F5F1ED | Primary background |
| Charcoal | #2C2C2C | Text and structural elements |
| Gold | #D4A574 | Accents, CTAs, highlights |
| Taupe | #9B8B7E | Secondary text |
| Off-white | #FAFAF8 | Cards and elevated surfaces |

## Key Sections

1. **Navigation**: Sticky header with logo, menu links, and CTA button
2. **Hero Section**: Asymmetric layout with headline, copy, and high-quality imagery
3. **Properties Showcase**: Interactive grid showing three apartment tiers with details
4. **Amenities**: Six key features highlighted with icons and descriptions
5. **Location**: Map integration and contact information
6. **Call-to-Action**: Compelling booking section
7. **Footer**: Comprehensive contact and link information

## Customization

### Updating Colors

Edit the CSS variables in `client/src/index.css`:

```css
:root {
  --primary: #D4A574;
  --background: #F5F1ED;
  --foreground: #2C2C2C;
  /* ... other colors ... */
}
```

### Modifying Content

Edit `client/src/pages/Home.tsx` to update:
- Property listings and pricing
- Amenities list
- Contact information
- Images and media

### Adding Pages

Create new files in `client/src/pages/` and add routes to `client/src/App.tsx`.

## Performance Optimization

- Images use optimized WebP format with fallbacks
- CSS is minified and tree-shaken during build
- Lazy loading for below-the-fold content
- Smooth animations respect `prefers-reduced-motion`

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Scripts

```bash
pnpm dev       # Start development server
pnpm build     # Build for production
pnpm preview   # Preview production build locally
pnpm check     # Run TypeScript type checking
pnpm format    # Format code with Prettier
```

## License

MIT

## Contact

For inquiries about the Dejays Homes & Shortlets service:
- **Phone**: +234 907 138 3160
- **Location**: Banex Junction, Abuja, Nigeria
- **Hours**: 24/7 Support

---

Built with modern web technologies for a premium user experience.
