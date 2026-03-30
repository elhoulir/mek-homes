# MEK Homes Design Refresh — Spec

**Date:** 2026-03-30
**Status:** Approved
**Scope:** Typography, contrast, homepage hero, services page, testimonials, images, trust strip, about page

---

## 1. Typography

Replace DM Serif Display + Inter with Space Grotesk + Outfit (both from Google Fonts).

### Changes

- **Headings (h1–h6):** Space Grotesk, weight 700
- **Body text:** Outfit, weight 400 (regular), weight 500 (medium/emphasis). Tailwind `font-bold` maps to weight 700 (Outfit Bold). Weight 500 is for `font-medium` use cases.
- **Nav links, buttons, labels, footer:** Outfit
- **No serif fonts anywhere**

### Files affected

- `src/app/layout.tsx` — Replace font imports (`DM_Serif_Display` → `Space_Grotesk`, `Inter` → `Outfit`), update CSS variables
- `src/app/globals.css` — Update `--font-sans` and `--font-heading` custom properties
- Remove `DM_Serif_Display` import entirely

### CSS variable mapping

```
--font-sans: var(--font-outfit), sans-serif;
--font-heading: var(--font-space-grotesk), sans-serif;
```

---

## 2. Section Contrast — Dark/Light Alternating

Replace the current all-dark theme with alternating dark and light sections.

### Color tokens

| Context | Value |
|---|---|
| Dark section bg | `#0A0A0A` |
| Light section bg | `#F7F7F7` |
| Card on light bg | `#FFFFFF` with `1px solid #E5E5E5` border |
| Card on dark bg | `#141414` with `1px solid #222222` border |
| Heading on light | `#111111` |
| Body text on light | `#444444` |
| Heading on dark | `#FFFFFF` |
| Body text on dark | `rgba(255,255,255,0.7)` or `#CCCCCC` |

### Section rhythm per page

**Homepage:**
1. Hero — dark (`#0A0A0A`)
2. Trust strip / credentials — light (`#F7F7F7`)
3. Services (What We Do) — light (`#F7F7F7`)
4. Why MEK Homes — dark (`#0A0A0A`)
5. Testimonials — light (`#F7F7F7`)
6. CTA — dark (`#0A0A0A`)

**About page:**
1. Hero — dark
2. Our Story — light
3. How We Work — dark
4. Our Values — light
5. Where We Work — dark
6. Credentials — light
7. Explore Our Work — dark
8. CTA — light (white bg, dark text — already exists)

**Services overview (`/services`):**
1. Hero — dark
2. Services grid — light
3. CTA — dark

**Individual service pages (`/services/[slug]`):**
1. Hero — dark
2. Main content (description, features, gallery, FAQ) — light
3. Contact form section — dark
4. Sidebar card — white card (`#FFFFFF`, `1px solid #E5E5E5`) on light bg, sticky positioning preserved

**Contact page:**
1. Hero — dark
2. Form section — light
3. Map/info — light (keeps same light section as form for cohesion)

### Files affected

All page files (`page.tsx` in `app/`, `app/about/`, `app/services/`, `app/services/[slug]/`, `app/contact/`), plus:
- `src/app/globals.css` — Update `.warm-card` utility, potentially add `.light-section` / `.dark-section` utilities
- `src/components/TestimonialCarousel.tsx` — Restyle for light bg
- `src/components/CredentialBadges.tsx` — Restyle for light bg
- `src/components/FAQAccordion.tsx` — Restyle for light bg
- `src/components/Header.tsx` — May need adjustment if scrolled state bg changes
- `src/components/Footer.tsx` — Stays dark

---

## 3. Homepage Hero — Option B (Split Layout)

Replace the current full-bleed photo hero with a split layout.

### Desktop layout

- **Left side (~55%):** Subtitle label ("Melbourne Carpentry Experts"), bold headline ("We Build Homes Melbourne Trusts"), description paragraph, two CTA buttons (Get a Free Quote + Call), Google stars + social proof line
- **Right side (~45%):** 3-photo collage — 1 large vertical image on the left, 2 stacked smaller images on the right, each with a service label overlay at the bottom (e.g. "Kitchen Renovation", "Decking", "Custom Carpentry")
- **No rotating word animation** — static headline
- **Stats integrated** as inline text ("4.9 on Google · 150+ projects completed") rather than a separate stats bar section

### Mobile layout

- Headline + subtitle + CTAs stacked at top
- 2-up photo row below (two images side by side)
- Google stars + project count at bottom
- Full-width stacked buttons

### Stats bar removal

The separate stats bar section below the hero is removed. The key stats (Google rating, project count) move inline into the hero. The stats section with AnimatedCounter is no longer needed on the homepage.

### Files affected

- `src/app/page.tsx` — Complete hero section rewrite, remove stats bar section
- `src/components/AnimatedCounter.tsx` — May become unused (check if referenced elsewhere)

---

## 4. Services Overview (`/services`) — Icon Tile Grid

Replace large image cards with compact, scannable icon tiles.

### Tile design

- Monochrome SVG line icon (24×24 or 32×32)
- Service title (Space Grotesk 700)
- Subtle arrow/chevron indicating clickable
- No description text, no images, no feature pills
- Equal-sized tiles
- Subtle border (`1px solid #E5E5E5` on light section)
- Generous padding (24px)
- Center-aligned content
- Hover: background shade change + `scale(1.02)` transition

### Grid layout

- Desktop: 3 columns
- Tablet: 2 columns
- Mobile: 2 columns

### SVG icons needed (one per service)

| Service | Icon concept |
|---|---|
| Home Renovations | House outline |
| Custom Carpentry | Chisel or hand plane outline |
| Decking & Pergolas | Horizontal deck boards outline |
| Kitchen Renovations | Kitchen counter/cabinet outline |
| Bathroom Renovations | Shower/bath outline |
| Structural Carpentry | Roof truss / frame outline |
| Doors & Windows | Door with window pane outline |
| Fencing & Gates | Fence pickets outline |
| Lockup & Fix | Hammer and nail outline |

### Files affected

- `src/app/services/page.tsx` — Complete grid rewrite
- New: SVG icons either inline in the page or as a shared component/data mapping
- Homepage services section (`src/app/page.tsx`) is **NOT** changed — keeps image-based cards

---

## 5. Testimonials Redesign

Restyle for light background sections.

### Design

- White cards (`#FFFFFF`) with subtle box shadow (`0 1px 3px rgba(0,0,0,0.08)`)
- Google "G" logo icon on each card
- 5 gold/amber filled stars (`#F59E0B` or similar)
- Quote text in `#444444`
- Name in `#111111` bold, suburb in `#666666`
- Cards in a carousel or grid depending on count

### Files affected

- `src/components/TestimonialCarousel.tsx` — Restyle cards, update colors for light bg
- Potentially `src/app/page.tsx` — Ensure testimonials section uses light bg class

---

## 6. Replace Generic Unsplash Images

Audit and replace duplicate or irrelevant service images.

### Current issues

- `structural-carpentry` and `lockup-and-fix` share the same hero image (`photo-1504307651254-35680f356dfd`)
- `structural-carpentry` and `lockup-and-fix` share identical gallery images
- Some gallery images are generic house exteriors rather than carpentry-specific
- About page uses generic construction/architecture photos

### Replacement strategy

Replace with more specific, carpentry-relevant Unsplash images:
- **Structural Carpentry:** Timber framing, roof trusses, wall frames under construction
- **Lockup & Fix:** Interior fit-out work, skirting boards being installed, door hanging
- **Fencing & Gates:** Timber fence close-ups (current image is somewhat generic)
- **About page:** Tradespeople at work, workshop scenes, timber materials
- **Hero photo grid:** Kitchen interior, deck/outdoor area, carpentry workshop or custom joinery

### Files affected

- `src/data/services.ts` — Update `image` and `galleryImages` URLs
- `src/app/about/page.tsx` — Update image URLs
- `src/app/page.tsx` — Hero photo grid images

---

## 7. Trust Strip Below Hero

Move credential badges to a prominent position immediately below the hero.

### Design

- Sits on the first light section (`#F7F7F7`), directly below the dark hero
- Horizontal row of credential items: Licensed Carpenters, Fully Insured, HIA Member, Master Builders
- Each item: icon/badge + label text
- Subtle, not flashy — small icons, `#666666` text, evenly spaced
- On mobile: 2×2 grid or horizontal scroll

### Homepage placement

Currently credentials appear deep in the "Why MEK Homes" section. Move them to a dedicated strip immediately after the hero — above the services section. Remove or simplify the duplicate in "Why MEK Homes."

### Files affected

- `src/app/page.tsx` — Add trust strip section after hero, adjust "Why MEK Homes" section
- `src/components/CredentialBadges.tsx` — May need a compact variant for the strip vs. the full version

---

## 8. Simplify About Page

Reduce scroll length and tighten the narrative.

### Current structure (2 image+text rows)

1. Row 1: Image left + "Redefining the standard" text right
2. Row 2: "Built on trust" text left + image right

### New structure (1 row)

1. Single row: Image left + combined story text right (condense both text blocks into one cohesive narrative)
2. Flow directly into "How We Work" process steps

### Files affected

- `src/app/about/page.tsx` — Merge two story sections into one, remove second image, condense text

---

## Key implementation decisions

- **Body-level colors:** The current `body` tag has `bg-[#0A0A0A] text-white`. Keep `bg-[#0A0A0A]` on body (dark is the fallback). Each light section overrides text color via section-level classes. Do NOT remove body-level `text-white` — instead apply `text-[#111111]` or `text-[#444444]` on light section containers.
- **SVG icons (Section 4):** Use Lucide React icons where a suitable match exists (e.g., `Home`, `Hammer`, `DoorOpen`). Create simple custom inline SVGs only where Lucide has no match (e.g., deck boards, pergola, fence pickets).
- **Outfit font weights:** Import weights 400, 500, 700 from Google Fonts. Space Grotesk: import weight 700 only.

## Implementation notes

- All changes should be committed separately with descriptive commit messages
- Test each page at desktop (1440px), tablet (768px), and mobile (390px) after changes
- Ensure the floating mobile CTA bar (`FloatingCallButton`) still works correctly on light sections (may need a border-top color update)
- Header transparency on homepage hero should still work with the new split hero layout
- Run `next build` after all changes to verify no build errors
