# MEK Homes — "Crafted Warmth" Redesign Spec

## Overview

Redesign MEK Homes website with the "Crafted Warmth" design direction: modern and sharp with trustworthy warmth. Black & white brand foundation complemented by warm stone/cream accents. Primary goal: drive contact conversions (form or call) while building trust through social proof, polished micro-interactions, and mobile-first UX.

## Design System

### Color Tokens

| Token | Value | Usage |
|-------|-------|-------|
| `--color-black` | `#0A0A0A` | Primary text, dark backgrounds |
| `--color-white` | `#FFFFFF` | Light text, light backgrounds |
| `--color-warm-50` | `#FAF8F5` | Page background (replaces slate-50) |
| `--color-warm-100` | `#F5F0EB` | Alternate section backgrounds |
| `--color-warm-200` | `#E8E0D8` | Borders, dividers, subtle accents |
| `--color-warm-300` | `#D4C8BC` | Muted text on dark, hover states |
| `--color-gray-500` | `#6B7280` | Secondary text |
| `--color-gray-800` | `#1F2937` | Dark section backgrounds |

### Typography

- **Headings**: Outfit, weights 700-800, letter-spacing `-0.02em` on h1/h2
- **Body**: Inter, weight 400/500
- **Hero h1**: 8xl desktop, 4xl mobile
- **Section h2**: 5xl desktop, 3xl mobile
- **Body**: base (16px), secondary text sm (14px)

### Spacing & Layout

- Max container: `max-w-7xl` (unchanged)
- Section padding: `py-24` desktop, `py-16` mobile (increased from current)
- Card radius: `rounded-2xl`
- Button radius: `rounded-xl`

## Header & Navigation

### Desktop

- **Default (over hero)**: Transparent background, white logo + nav links
- **Scrolled**: White background, warm-200 bottom border, black logo + nav links, 300ms transition
- **Nav items**: Home, Services, Projects, About, Contact
- **CTA button**: "Get a Free Quote" — solid black, white text, rounded-xl
- **Phone number**: Visible next to CTA, small text with phone icon, click-to-call `tel:` link

### Mobile

- **Bottom sheet navigation**: Replaces current top dropdown hamburger. Tapping menu icon slides a panel up from the bottom with large nav links (48px tap targets). Dark overlay behind.
- **Scrolled state**: Same white background as desktop
- **Sticky FAB**: Bottom-right corner, black circle with phone icon, always visible. Tap = call. This is the primary mobile conversion element.

## Home Page

### 1. Hero Section (100vh)

- **Layout**: Left 60% content, right 40% project photo with subtle parallax
- **Headline**: Outfit 8xl — "Craftsmanship That Transforms Your Home"
- **Animated subline**: Text rotation cycling "Kitchens / Bathrooms / Decks / Living Spaces" with fade transition (3s interval)
- **Supporting text**: One line below
- **Buttons**: "Get a Free Quote" (solid black) + "View Our Work" (outlined black)
- **Background**: Warm-50

### 2. Inline Quote Strip

- Compact form bar below hero fold
- Fields: First Name, Phone, Service dropdown, "Request Quote" button
- All in one row on desktop, stacked 2x2 on mobile
- Warm-100 background with subtle shadow
- Purpose: Capture leads before they scroll

### 3. Social Proof Stats Bar

- Horizontal strip on warm-50 background
- "500+ Projects" · "15+ Years" · "5.0 ★ Google Rating" · "Licensed & Insured"
- Numbers animate up (counter) when scrolling into view

### 4. Featured Services

- Title: "What We Do" with subtitle
- 3-column grid desktop, horizontally scrollable on mobile (swipe)
- Cards: Service image (rounded-2xl top), title, 2-line description, "Learn More →"
- Card style: warm-100 background, lift + deeper shadow on hover
- Show all 6 main services

### 5. Why Choose MEK

- Alternating layout: image left / content right, then flip
- Row 1: Project photo + "Quality You Can Trust" + 3 bullet points (Licensed, Insured, Transparent quoting)
- Row 2: "From Vision to Reality" + 3 bullet points (Free consultation, Detailed timeline, Clean worksite) + photo
- Trust badges below: HIA member, Master Builders, Fully Insured, Licensed — small grayscale icons in a row

### 6. Featured Projects

- Title: "Recent Projects" with subtitle
- 3 featured project cards (using `featured: true` data)
- Card style: Large image with dark gradient overlay at bottom, title + suburb + service type overlaid
- Hover: subtle image zoom (scale 1.05), "View Project →" appears
- "View All Projects →" link below grid
- White background

### 7. Testimonials

- Warm-100 background section
- Large decorative quote marks
- Carousel: quote text, customer name, suburb, star rating
- 3 visible on desktop (staggered), 1 on mobile (swipeable)
- Auto-rotates 5s, manual dots/arrows
- Hardcoded testimonial data (3-5 testimonials)

### 8. CTA Section

- Gray-800 background
- "Ready to Start Your Project?" headline
- Two buttons: "Get a Free Quote" + phone number "Call Us Today"
- Subtle project photo overlay at low opacity behind

## Services Page

### Hero

- 60vh height, warm-100 background
- Headline: "Our Services", subtitle about Melbourne coverage
- Breadcrumbs at top

### Services Grid

- 2-column masonry-style grid on desktop, 1 column mobile
- Cards alternate between two sizes (some taller) for visual rhythm
- Each card: Full-width image, title, short description, 3 feature pills/tags, "Learn More →"
- Warm-50 background, cards on white, warm-200 border on hover

### Individual Service Pages

- Hero: Shorter, warm-100 background, service title + breadcrumbs (no full-bleed dark image)
- Features: 2-column grid of icon + text items (not a plain list)
- FAQ: Warm-100 background on open state, smooth animations
- Related projects: Featured project card style
- Contact form: Bottom section, warm-50 background, "Get a Quote for [Service Name]" headline

## Projects Page

### Hero

- Same shorter style as services page

### Filter Bar

- Horizontal pills to filter by service type: All, Kitchens, Bathrooms, Decking, etc.
- Client-side filtering with smooth layout animation (Framer Motion layout)

### Project Cards

- Image-dominant with overlay text (same as homepage featured cards)
- 2-column grid desktop, 1 column mobile

### Individual Project Pages

- Hero: Full-width project image, title + location + duration overlaid
- Gallery: Lightbox viewer — click image to open full-screen overlay with arrow navigation
- Sidebar: Warm-100 card with service type, duration, location, completion date
- Related projects at bottom

## About Page

- Hero with team/worksite photo background
- "Our Story": Alternating image/text layout (same pattern as homepage Why Choose section)
- Values: 4 icon cards on warm-100 backgrounds
- Service areas: Suburb list with geographic grouping
- CTA at bottom

## Contact Page

- 2-column layout: Form (60% left) + contact info (40% right)
- Form: Clean inputs, warm-200 borders, black border on focus, rounded-xl
- Contact info: Phone, email, address, hours — each as icon + text card row
- Trust signal near form: "Average response time: under 2 hours"
- All phone numbers wrapped in `tel:` links

## New Components

### TestimonialCarousel

- Client component
- Props: array of testimonials `{ quote, name, suburb, rating }`
- Auto-rotation (5s), pause on hover
- Dot indicators + arrow navigation
- Responsive: 3 visible desktop, 1 mobile (swipeable)

### InlineQuoteStrip

- Client component
- Compact horizontal form: name, phone, service dropdown, submit
- Stacks on mobile
- Submits same as ContactFormEmbed (local state, success message)

### FloatingCallButton (FAB)

- Client component
- Fixed position bottom-right, black circle, phone icon
- Mobile only (hidden on desktop via `lg:hidden`)
- `tel:` link wrapping

### BottomSheetNav

- Client component
- Slides up from bottom on mobile menu tap
- Dark overlay behind, large nav links
- Close on overlay tap or X button

### ProjectFilter

- Client component
- Horizontal pill buttons for service type filtering
- Framer Motion layout animation on filter change

### ImageLightbox

- Client component
- Full-screen overlay, dark background
- Arrow navigation between images
- Close on overlay click or X button
- Keyboard navigation (left/right arrows, Escape to close)

### AnimatedCounter

- Client component
- Intersection Observer triggers count-up animation
- Props: target number, suffix ("+", "★"), duration

## Micro-Interactions & Animations

### Scroll Animations

- Section reveals: Fade in + slide up 20px, children stagger 100ms
- Counter animation: Numbers count up from 0 when visible
- Image reveals: Clip-reveal from bottom on scroll
- Hero text: Line-by-line reveal on load

### Hover Effects

- Cards: Lift 4px + shadow deepens + warm-200 border appears
- Buttons: Scale 1.02 + background shift
- Nav links: Underline slides in from left
- Project images: Zoom scale 1.05 over 400ms

### Page Transitions

- Crossfade: 200ms out, 300ms in (refine current PageWrapper)

### Loading

- Skeleton screens with warm-100 pulsing for image placeholders

## Mobile-Specific

- Sticky FAB (call button) always visible
- Bottom sheet navigation instead of top dropdown
- Swipeable carousels for services, testimonials, projects
- Inline quote strip becomes "Get Quote" button → scrolls to form or opens modal
- All phone numbers are `tel:` links
- Disable parallax on mobile for performance
- Reduced animations: simple fades only

## Testimonial Data (Hardcoded)

```typescript
const testimonials = [
  {
    quote: "MEK Homes transformed our dated kitchen into a modern masterpiece. The attention to detail was incredible, and they finished on time and on budget.",
    name: "Sarah & James",
    suburb: "Richmond",
    rating: 5
  },
  {
    quote: "Professional from start to finish. The team was respectful of our home, cleaned up every day, and the quality of the carpentry is outstanding.",
    name: "Michael T.",
    suburb: "Brighton",
    rating: 5
  },
  {
    quote: "We couldn't be happier with our new deck and pergola. MEK Homes made the whole process easy and the result exceeded our expectations.",
    name: "Lisa & David",
    suburb: "Hawthorn",
    rating: 5
  },
  {
    quote: "After getting several quotes, we chose MEK Homes for our bathroom renovation. Best decision we made. Exceptional craftsmanship and genuine care for the result.",
    name: "Robert K.",
    suburb: "Malvern",
    rating: 5
  },
  {
    quote: "The team rebuilt our heritage home's front veranda and it looks better than the original. True craftsmen who understand old homes.",
    name: "Catherine M.",
    suburb: "South Yarra",
    rating: 5
  }
]
```

## Files to Modify

- `src/app/globals.css` — New color tokens, updated base styles
- `src/app/layout.tsx` — Updated body background
- `src/app/page.tsx` — Complete homepage redesign
- `src/app/services/page.tsx` — Masonry grid redesign
- `src/app/services/[slug]/page.tsx` — Restyle to new design system
- `src/app/projects/page.tsx` — Add filter bar, new card style
- `src/app/projects/[slug]/page.tsx` — Add lightbox, restyle
- `src/app/about/page.tsx` — Restyle to new design system
- `src/app/contact/page.tsx` — 2-column redesign
- `src/components/Header.tsx` — Transparent/scrolled states, phone number, bottom sheet mobile nav
- `src/components/Footer.tsx` — Restyle with warm tones
- `src/components/ServiceCard.tsx` — New card design
- `src/components/ProjectCard.tsx` — Image-overlay card design
- `src/components/ContactFormEmbed.tsx` — Restyle inputs/buttons
- `src/components/FAQAccordion.tsx` — Warm-100 open state
- `src/components/PageWrapper.tsx` — Crossfade transitions

## New Files

- `src/components/TestimonialCarousel.tsx`
- `src/components/InlineQuoteStrip.tsx`
- `src/components/FloatingCallButton.tsx`
- `src/components/BottomSheetNav.tsx`
- `src/components/ProjectFilter.tsx`
- `src/components/ImageLightbox.tsx`
- `src/components/AnimatedCounter.tsx`
- `src/data/testimonials.ts`
