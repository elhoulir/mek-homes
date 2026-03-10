# Crafted Warmth Redesign — Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Redesign MEK Homes from a generic zinc/slate look to the "Crafted Warmth" design — warm stone accents, premium micro-interactions, mobile-first conversion UX, and social proof elements.

**Architecture:** Restyle all existing components and pages in-place using new warm color tokens. Add 7 new client components (TestimonialCarousel, InlineQuoteStrip, FloatingCallButton, BottomSheetNav, ProjectFilter, ImageLightbox, AnimatedCounter) and 1 data file (testimonials). Each task produces a buildable state.

**Tech Stack:** Next.js 16, React 19, Tailwind CSS 4, Framer Motion 12, lucide-react, TypeScript

**Spec:** `docs/superpowers/specs/2026-03-10-crafted-warmth-redesign.md`

---

## File Structure

### Files to Modify
| File | Responsibility | Lines |
|------|---------------|-------|
| `src/app/globals.css` | Color tokens, base styles, utilities | 50 |
| `src/app/layout.tsx` | Root layout, body background | 43 |
| `src/app/page.tsx` | Homepage — complete redesign | 350 |
| `src/components/Header.tsx` | Nav — transparent/scrolled, phone, bottom sheet | 132 |
| `src/components/Footer.tsx` | Footer — warm tones restyle | 116 |
| `src/components/PageWrapper.tsx` | Crossfade transitions | 23 |
| `src/components/ServiceCard.tsx` | New warm card design | 77 |
| `src/components/ProjectCard.tsx` | Image-overlay card design | 90 |
| `src/components/ContactFormEmbed.tsx` | Restyle inputs/buttons | 187 |
| `src/components/FAQAccordion.tsx` | Warm-100 open state | 79 |
| `src/components/Breadcrumbs.tsx` | Update colors | 49 |
| `src/app/services/page.tsx` | Masonry grid redesign | 117 |
| `src/app/services/[slug]/page.tsx` | Restyle to design system | 285 |
| `src/app/projects/page.tsx` | Filter bar, new cards | 89 |
| `src/app/projects/[slug]/page.tsx` | Lightbox, restyle | 263 |
| `src/app/about/page.tsx` | Restyle to design system | 229 |
| `src/app/contact/page.tsx` | 2-column redesign | 143 |

### Files to Create
| File | Responsibility |
|------|---------------|
| `src/data/testimonials.ts` | Hardcoded testimonial data |
| `src/components/AnimatedCounter.tsx` | Count-up animation with IntersectionObserver |
| `src/components/FloatingCallButton.tsx` | Mobile sticky FAB for phone calls |
| `src/components/BottomSheetNav.tsx` | Mobile slide-up navigation |
| `src/components/InlineQuoteStrip.tsx` | Compact lead capture form |
| `src/components/TestimonialCarousel.tsx` | Auto-rotating testimonial cards |
| `src/components/ProjectFilter.tsx` | Service type pill filter |
| `src/components/ImageLightbox.tsx` | Full-screen image viewer |

---

## Chunk 1: Design System Foundation

### Task 1: Update Global CSS — Color Tokens & Base Styles

**Files:**
- Modify: `src/app/globals.css`

- [ ] **Step 1: Replace globals.css with new design system**

Replace entire file with new warm color tokens, updated base styles, and refined utilities:

```css
@import "tailwindcss";

@theme inline {
  /* Fonts */
  --font-sans: var(--font-inter), sans-serif;
  --font-heading: var(--font-outfit), sans-serif;

  /* Warm palette */
  --color-warm-50: #FAF8F5;
  --color-warm-100: #F5F0EB;
  --color-warm-200: #E8E0D8;
  --color-warm-300: #D4C8BC;
  --color-black: #0A0A0A;
  --color-gray-500: #6B7280;
  --color-gray-800: #1F2937;
}

@layer base {
  html {
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    @apply bg-warm-50 text-[#0A0A0A] font-sans;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    @apply font-heading tracking-tight;
  }

  h1, h2 {
    letter-spacing: -0.02em;
  }

  ::selection {
    @apply bg-black/10 text-black;
  }
}

@layer utilities {
  .section-padding {
    @apply py-16 lg:py-24;
  }

  .warm-card {
    @apply bg-white rounded-2xl border border-warm-200/50 shadow-sm
           hover:shadow-lg hover:border-warm-200 hover:-translate-y-1
           transition-all duration-300;
  }

  .btn-primary {
    @apply bg-black text-white px-6 py-3 rounded-xl font-medium
           hover:bg-gray-800 hover:scale-[1.02] transition-all duration-200;
  }

  .btn-outline {
    @apply border-2 border-black text-black px-6 py-3 rounded-xl font-medium
           hover:bg-black hover:text-white hover:scale-[1.02] transition-all duration-200;
  }
}
```

- [ ] **Step 2: Verify build passes**

Run: `npx next build 2>&1 | tail -5`
Expected: Build succeeds

- [ ] **Step 3: Commit**

```bash
git add src/app/globals.css
git commit -m "feat: update design system with warm color tokens and utility classes"
```

---

### Task 2: Update Root Layout

**Files:**
- Modify: `src/app/layout.tsx`

- [ ] **Step 1: Update layout body class**

In `src/app/layout.tsx`, change the body className to use new warm background. The current body class includes both font variables and applies them. Update to:

```tsx
<body className={`${inter.variable} ${outfit.variable} font-sans bg-warm-50 text-[#0A0A0A]`}>
```

This replaces whatever Tailwind classes are currently on the body tag.

- [ ] **Step 2: Verify build passes**

Run: `npx next build 2>&1 | tail -5`
Expected: Build succeeds

- [ ] **Step 3: Commit**

```bash
git add src/app/layout.tsx
git commit -m "feat: update root layout with warm background"
```

---

### Task 3: Create Testimonials Data

**Files:**
- Create: `src/data/testimonials.ts`

- [ ] **Step 1: Create testimonials data file**

```typescript
export interface Testimonial {
  quote: string;
  name: string;
  suburb: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    quote: "MEK Homes transformed our dated kitchen into a modern masterpiece. The attention to detail was incredible, and they finished on time and on budget.",
    name: "Sarah & James",
    suburb: "Richmond",
    rating: 5,
  },
  {
    quote: "Professional from start to finish. The team was respectful of our home, cleaned up every day, and the quality of the carpentry is outstanding.",
    name: "Michael T.",
    suburb: "Brighton",
    rating: 5,
  },
  {
    quote: "We couldn't be happier with our new deck and pergola. MEK Homes made the whole process easy and the result exceeded our expectations.",
    name: "Lisa & David",
    suburb: "Hawthorn",
    rating: 5,
  },
  {
    quote: "After getting several quotes, we chose MEK Homes for our bathroom renovation. Best decision we made. Exceptional craftsmanship and genuine care for the result.",
    name: "Robert K.",
    suburb: "Malvern",
    rating: 5,
  },
  {
    quote: "The team rebuilt our heritage home's front veranda and it looks better than the original. True craftsmen who understand old homes.",
    name: "Catherine M.",
    suburb: "South Yarra",
    rating: 5,
  },
];
```

- [ ] **Step 2: Verify build passes**

Run: `npx next build 2>&1 | tail -5`

- [ ] **Step 3: Commit**

```bash
git add src/data/testimonials.ts
git commit -m "feat: add testimonials data"
```

---

## Chunk 2: New Shared Components

### Task 4: Create AnimatedCounter Component

**Files:**
- Create: `src/components/AnimatedCounter.tsx`

- [ ] **Step 1: Create the AnimatedCounter component**

```tsx
"use client";

import { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
  target: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}

export default function AnimatedCounter({
  target,
  suffix = "",
  prefix = "",
  duration = 2000,
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [target, duration, hasAnimated]);

  return (
    <span ref={ref}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}
```

- [ ] **Step 2: Verify build passes**

Run: `npx next build 2>&1 | tail -5`

- [ ] **Step 3: Commit**

```bash
git add src/components/AnimatedCounter.tsx
git commit -m "feat: add AnimatedCounter component with IntersectionObserver"
```

---

### Task 5: Create FloatingCallButton Component

**Files:**
- Create: `src/components/FloatingCallButton.tsx`

- [ ] **Step 1: Create the FloatingCallButton component**

```tsx
"use client";

import { Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function FloatingCallButton() {
  return (
    <motion.a
      href="tel:0400000000"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center
                 rounded-full bg-black text-white shadow-lg lg:hidden
                 hover:bg-gray-800 active:scale-95 transition-colors"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      aria-label="Call MEK Homes"
    >
      <Phone className="h-6 w-6" />
    </motion.a>
  );
}
```

- [ ] **Step 2: Add FloatingCallButton to root layout**

In `src/app/layout.tsx`, import and add `<FloatingCallButton />` after `<Footer />` inside the body tag.

```tsx
import FloatingCallButton from "@/components/FloatingCallButton";
// ... inside body, after Footer:
<FloatingCallButton />
```

- [ ] **Step 3: Verify build passes**

Run: `npx next build 2>&1 | tail -5`

- [ ] **Step 4: Commit**

```bash
git add src/components/FloatingCallButton.tsx src/app/layout.tsx
git commit -m "feat: add floating call button for mobile conversion"
```

---

### Task 6: Create BottomSheetNav Component

**Files:**
- Create: `src/components/BottomSheetNav.tsx`

- [ ] **Step 1: Create the BottomSheetNav component**

```tsx
"use client";

import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

interface BottomSheetNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BottomSheetNav({ isOpen, onClose }: BottomSheetNavProps) {
  const pathname = usePathname();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Sheet */}
          <motion.div
            className="fixed bottom-0 left-0 right-0 z-50 rounded-t-3xl bg-white px-6 pb-10 pt-4 shadow-2xl"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
          >
            {/* Handle bar */}
            <div className="mx-auto mb-6 h-1 w-12 rounded-full bg-warm-200" />

            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute right-6 top-6 rounded-full p-2 hover:bg-warm-100 transition-colors"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Nav links */}
            <nav className="space-y-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href ||
                  (link.href !== "/" && pathname.startsWith(link.href));

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={onClose}
                    className={`flex items-center rounded-xl px-4 py-4 text-lg font-medium transition-colors
                      ${isActive ? "bg-warm-100 text-black" : "text-gray-500 hover:bg-warm-50 hover:text-black"}`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* CTA */}
            <div className="mt-6 space-y-3">
              <Link
                href="/contact"
                onClick={onClose}
                className="btn-primary block w-full text-center"
              >
                Get a Free Quote
              </Link>
              <a
                href="tel:0400000000"
                className="btn-outline block w-full text-center"
              >
                Call 0400 000 000
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
```

- [ ] **Step 2: Verify build passes**

Run: `npx next build 2>&1 | tail -5`

- [ ] **Step 3: Commit**

```bash
git add src/components/BottomSheetNav.tsx
git commit -m "feat: add bottom sheet mobile navigation component"
```

---

### Task 7: Create InlineQuoteStrip Component

**Files:**
- Create: `src/components/InlineQuoteStrip.tsx`

- [ ] **Step 1: Create the InlineQuoteStrip component**

```tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { services } from "@/data/services";

export default function InlineQuoteStrip() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="bg-warm-100 border-y border-warm-200/50">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6">
        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center justify-center gap-3 py-2"
            >
              <CheckCircle2 className="h-5 w-5 text-green-600" />
              <p className="font-medium">Thanks! We&apos;ll be in touch shortly.</p>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              onSubmit={handleSubmit}
              className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4"
            >
              <input
                type="text"
                name="name"
                placeholder="Your name"
                required
                className="rounded-xl border border-warm-200 bg-white px-4 py-3 text-sm
                           placeholder:text-gray-500 focus:border-black focus:outline-none
                           transition-colors"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone number"
                required
                className="rounded-xl border border-warm-200 bg-white px-4 py-3 text-sm
                           placeholder:text-gray-500 focus:border-black focus:outline-none
                           transition-colors"
              />
              <select
                name="service"
                className="rounded-xl border border-warm-200 bg-white px-4 py-3 text-sm
                           text-gray-500 focus:border-black focus:outline-none
                           transition-colors"
              >
                <option value="">Select a service</option>
                {services.map((s) => (
                  <option key={s.slug} value={s.slug}>
                    {s.title}
                  </option>
                ))}
              </select>
              <button type="submit" className="btn-primary whitespace-nowrap">
                Request Quote
              </button>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify build passes**

Run: `npx next build 2>&1 | tail -5`

- [ ] **Step 3: Commit**

```bash
git add src/components/InlineQuoteStrip.tsx
git commit -m "feat: add inline quote strip lead capture form"
```

---

### Task 8: Create TestimonialCarousel Component

**Files:**
- Create: `src/components/TestimonialCarousel.tsx`

- [ ] **Step 1: Create the TestimonialCarousel component**

```tsx
"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import type { Testimonial } from "@/data/testimonials";

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

export default function TestimonialCarousel({ testimonials }: TestimonialCarouselProps) {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % testimonials.length);
  }, [testimonials.length]);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  }, [testimonials.length]);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [isPaused, next]);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Desktop: show 3 cards */}
      <div className="hidden lg:grid lg:grid-cols-3 lg:gap-6">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="rounded-2xl bg-white p-8 shadow-sm border border-warm-200/50"
          >
            <Quote className="h-8 w-8 text-warm-200 mb-4" />
            <p className="text-gray-800 leading-relaxed mb-6">{t.quote}</p>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold font-heading">{t.name}</p>
                <p className="text-sm text-gray-500">{t.suburb}</p>
              </div>
              <div className="flex gap-0.5">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile: single card carousel */}
      <div className="lg:hidden">
        <div className="overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="rounded-2xl bg-white p-6 shadow-sm border border-warm-200/50"
            >
              <Quote className="h-6 w-6 text-warm-200 mb-3" />
              <p className="text-gray-800 leading-relaxed mb-4">
                {testimonials[current].quote}
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold font-heading">{testimonials[current].name}</p>
                  <p className="text-sm text-gray-500">{testimonials[current].suburb}</p>
                </div>
                <div className="flex gap-0.5">
                  {Array.from({ length: testimonials[current].rating }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="mt-6 flex items-center justify-center gap-4">
          <button
            onClick={prev}
            className="rounded-full p-2 hover:bg-warm-100 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all duration-300
                  ${i === current ? "w-6 bg-black" : "w-2 bg-warm-200"}`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="rounded-full p-2 hover:bg-warm-100 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Verify build passes**

Run: `npx next build 2>&1 | tail -5`

- [ ] **Step 3: Commit**

```bash
git add src/components/TestimonialCarousel.tsx
git commit -m "feat: add testimonial carousel with auto-rotation and mobile swipe"
```

---

### Task 9: Create ProjectFilter Component

**Files:**
- Create: `src/components/ProjectFilter.tsx`

- [ ] **Step 1: Create the ProjectFilter component**

```tsx
"use client";

import { motion } from "framer-motion";

interface ProjectFilterProps {
  categories: { slug: string; label: string }[];
  active: string;
  onChange: (slug: string) => void;
}

export default function ProjectFilter({ categories, active, onChange }: ProjectFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((cat) => (
        <button
          key={cat.slug}
          onClick={() => onChange(cat.slug)}
          className="relative rounded-full px-5 py-2 text-sm font-medium transition-colors"
        >
          {active === cat.slug && (
            <motion.div
              layoutId="activeFilter"
              className="absolute inset-0 rounded-full bg-black"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          )}
          <span className={`relative z-10 ${active === cat.slug ? "text-white" : "text-gray-500 hover:text-black"}`}>
            {cat.label}
          </span>
        </button>
      ))}
    </div>
  );
}
```

- [ ] **Step 2: Verify build passes**

Run: `npx next build 2>&1 | tail -5`

- [ ] **Step 3: Commit**

```bash
git add src/components/ProjectFilter.tsx
git commit -m "feat: add animated project filter pills"
```

---

### Task 10: Create ImageLightbox Component

**Files:**
- Create: `src/components/ImageLightbox.tsx`

- [ ] **Step 1: Create the ImageLightbox component**

```tsx
"use client";

import { useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

interface ImageLightboxProps {
  images: string[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export default function ImageLightbox({
  images,
  currentIndex,
  isOpen,
  onClose,
  onNavigate,
}: ImageLightboxProps) {
  const goNext = useCallback(() => {
    onNavigate((currentIndex + 1) % images.length);
  }, [currentIndex, images.length, onNavigate]);

  const goPrev = useCallback(() => {
    onNavigate((currentIndex - 1 + images.length) % images.length);
  }, [currentIndex, images.length, onNavigate]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose, goNext, goPrev]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute right-4 top-4 z-10 rounded-full bg-white/10 p-2 text-white
                       hover:bg-white/20 transition-colors"
            aria-label="Close lightbox"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Previous */}
          <button
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
            className="absolute left-4 z-10 rounded-full bg-white/10 p-3 text-white
                       hover:bg-white/20 transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          {/* Image */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="relative h-[80vh] w-[90vw] max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[currentIndex]}
              alt={`Image ${currentIndex + 1} of ${images.length}`}
              fill
              className="object-contain"
              sizes="90vw"
              quality={90}
            />
          </motion.div>

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); goNext(); }}
            className="absolute right-4 z-10 rounded-full bg-white/10 p-3 text-white
                       hover:bg-white/20 transition-colors"
            aria-label="Next image"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Counter */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-sm text-white/70">
            {currentIndex + 1} / {images.length}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
```

- [ ] **Step 2: Verify build passes**

Run: `npx next build 2>&1 | tail -5`

- [ ] **Step 3: Commit**

```bash
git add src/components/ImageLightbox.tsx
git commit -m "feat: add full-screen image lightbox with keyboard navigation"
```

---

## Chunk 3: Header, Footer & Navigation Redesign

### Task 11: Redesign Header with Transparent/Scrolled States & Bottom Sheet

**Files:**
- Modify: `src/components/Header.tsx`

- [ ] **Step 1: Rewrite Header component**

Complete rewrite of `src/components/Header.tsx`. Key changes from current:
- Replace mobile dropdown menu with BottomSheetNav integration
- Add phone number next to CTA on desktop
- Transparent default state (white text) over hero, white scrolled state
- Use new btn-primary utility class for CTA

The new Header should:
- Import and use `BottomSheetNav` for mobile
- Keep scroll detection logic but update styling classes
- Add `tel:` link for phone number on desktop (right side of nav, before CTA)
- Default state: `bg-transparent text-white` → Scrolled: `bg-white text-black border-b border-warm-200`
- Mobile: hamburger icon opens BottomSheetNav instead of dropdown
- Nav link hover: underline slides in from left (use `after:` pseudo-element with `after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform`)

- [ ] **Step 2: Verify build passes**

Run: `npx next build 2>&1 | tail -5`

- [ ] **Step 3: Commit**

```bash
git add src/components/Header.tsx
git commit -m "feat: redesign header with transparent/scrolled states and bottom sheet nav"
```

---

### Task 12: Restyle Footer

**Files:**
- Modify: `src/components/Footer.tsx`

- [ ] **Step 1: Update Footer styling**

Update the Footer to use the new design system:
- Background: `bg-[#0A0A0A]` (keep dark)
- Update border/divider colors to use `warm-200/20` instead of zinc
- Update text colors: headings `text-white`, body `text-warm-300`
- Update link hover colors to `hover:text-white`
- Make all phone numbers `tel:` links and emails `mailto:` links
- Add trust badges row at bottom before copyright: "Licensed Carpenters · Fully Insured · Melbourne, VIC"
- Update the copyright year logic

- [ ] **Step 2: Verify build passes**

Run: `npx next build 2>&1 | tail -5`

- [ ] **Step 3: Commit**

```bash
git add src/components/Footer.tsx
git commit -m "feat: restyle footer with warm tones and trust badges"
```

---

### Task 13: Update PageWrapper Transitions

**Files:**
- Modify: `src/components/PageWrapper.tsx`

- [ ] **Step 1: Update to crossfade transitions**

Change the current slide + fade transition to a cleaner crossfade:
- `initial`: `{ opacity: 0 }`
- `animate`: `{ opacity: 1 }`
- `exit`: `{ opacity: 0 }`
- `transition`: `{ duration: 0.3 }`

Remove the Y-axis slide (`y: 8` etc.) for a smoother page-to-page feel.

- [ ] **Step 2: Verify build passes**

Run: `npx next build 2>&1 | tail -5`

- [ ] **Step 3: Commit**

```bash
git add src/components/PageWrapper.tsx
git commit -m "feat: update page transitions to smooth crossfade"
```

---

## Chunk 4: Shared Component Restyling

### Task 14: Redesign ServiceCard

**Files:**
- Modify: `src/components/ServiceCard.tsx`

- [ ] **Step 1: Rewrite ServiceCard with new design**

New design:
- `warm-card` utility class as base
- Service image at top (if `image` prop provided) with `rounded-t-2xl`
- Title with Outfit font
- 2-line description clamped
- "Learn More →" link at bottom
- Remove glassmorphism/gradient effects
- Keep staggered animation via Framer Motion
- Update props to accept optional `image: string` alongside existing props

- [ ] **Step 2: Verify build passes**

Run: `npx next build 2>&1 | tail -5`

- [ ] **Step 3: Commit**

```bash
git add src/components/ServiceCard.tsx
git commit -m "feat: redesign service card with warm styling"
```

---

### Task 15: Redesign ProjectCard

**Files:**
- Modify: `src/components/ProjectCard.tsx`

- [ ] **Step 1: Rewrite ProjectCard with image-overlay design**

New design:
- Full image card with `aspect-[4/3]` and `rounded-2xl overflow-hidden`
- Dark gradient overlay at bottom (`bg-gradient-to-t from-black/80 via-black/20 to-transparent`)
- Title, suburb, service type overlaid on bottom of image in white text
- Hover: image zooms to `scale-105`, "View Project →" text fades in
- Remove the separate text area below image — everything lives on the image

- [ ] **Step 2: Verify build passes**

Run: `npx next build 2>&1 | tail -5`

- [ ] **Step 3: Commit**

```bash
git add src/components/ProjectCard.tsx
git commit -m "feat: redesign project card with image overlay style"
```

---

### Task 16: Restyle ContactFormEmbed

**Files:**
- Modify: `src/components/ContactFormEmbed.tsx`

- [ ] **Step 1: Update form styling**

Update all input/select/textarea elements:
- Border: `border-warm-200` → focus: `border-black`
- Background: `bg-white`
- Border radius: `rounded-xl`
- Placeholder: `placeholder:text-gray-500`
- Add `transition-colors` to all inputs
- Submit button: use `btn-primary` utility
- Success state: keep green checkmark, update background to `bg-warm-50`
- Update any remaining zinc/slate color references to warm palette

- [ ] **Step 2: Verify build passes**

Run: `npx next build 2>&1 | tail -5`

- [ ] **Step 3: Commit**

```bash
git add src/components/ContactFormEmbed.tsx
git commit -m "feat: restyle contact form with warm design system"
```

---

### Task 17: Restyle FAQAccordion

**Files:**
- Modify: `src/components/FAQAccordion.tsx`

- [ ] **Step 1: Update accordion styling**

- Open state background: `bg-warm-100` with `border-warm-200`
- Closed state: `bg-white` with `border-warm-200/50`
- Border radius: `rounded-2xl`
- Remove any zinc/slate references
- Keep existing animation logic

- [ ] **Step 2: Verify build passes**

Run: `npx next build 2>&1 | tail -5`

- [ ] **Step 3: Commit**

```bash
git add src/components/FAQAccordion.tsx
git commit -m "feat: restyle FAQ accordion with warm tones"
```

---

### Task 18: Update Breadcrumbs

**Files:**
- Modify: `src/components/Breadcrumbs.tsx`

- [ ] **Step 1: Update breadcrumb colors**

- Text color: `text-gray-500`
- Active/current item: `text-black font-medium`
- Link hover: `hover:text-black`
- Separator color: `text-warm-300`

- [ ] **Step 2: Verify build passes**

Run: `npx next build 2>&1 | tail -5`

- [ ] **Step 3: Commit**

```bash
git add src/components/Breadcrumbs.tsx
git commit -m "feat: update breadcrumbs to warm color palette"
```

---

## Chunk 5: Homepage Redesign

### Task 19: Complete Homepage Redesign

**Files:**
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Rewrite the homepage**

Complete rewrite of `src/app/page.tsx` with these sections in order:

1. **Hero** (100vh): Left content (60%) with headline "Craftsmanship That Transforms Your Home" in Outfit 8xl, animated text rotation for service types ("Kitchens / Bathrooms / Decks / Living Spaces") using Framer Motion AnimatePresence with 3s interval, two CTA buttons (btn-primary "Get a Free Quote" linking to /contact, btn-outline "View Our Work" linking to /projects), right side (40%) with project photo using Next/Image with parallax. Background: warm-50. On mobile: stack vertically, hide parallax image, 4xl heading.

2. **InlineQuoteStrip**: Import and render `<InlineQuoteStrip />` component.

3. **Social Proof Stats Bar**: Horizontal strip with AnimatedCounter components for each stat: "500+" projects, "15+" years, "5.0★" Google rating, "100%" insured. Use `section-padding` but smaller (py-12). Grid layout: 4 columns desktop, 2x2 mobile.

4. **Featured Services**: Section title "What We Do", 3-column grid of ServiceCard components using services data (first 6). On mobile: horizontally scrollable container with `overflow-x-auto flex gap-4 snap-x` and each card as `min-w-[280px] snap-center`. Import services from `@/data/services`.

5. **Why Choose MEK**: Two alternating rows — image left/content right, then image right/content left. Each row has a project photo and content with title + 3 bullet points with check icons. Trust badges row below: 4 badges in a horizontal flex with grayscale styling.

6. **Featured Projects**: Section title "Recent Projects", 3 featured project cards using ProjectCard component. Import `getFeaturedProjects` from `@/data/projects`. "View All Projects →" link below.

7. **Testimonials**: Warm-100 background section, import TestimonialCarousel component, pass testimonials data from `@/data/testimonials`.

8. **CTA Section**: `bg-gray-800` section, "Ready to Start Your Project?" headline in white, two buttons: "Get a Free Quote" (white bg, black text) + "Call Us Today" phone link. Subtle opacity background image.

- [ ] **Step 2: Verify build passes**

Run: `npx next build 2>&1 | tail -5`

- [ ] **Step 3: Verify dev server loads homepage**

Run: `npx next dev --webpack -p 3002` and check `http://localhost:3002` loads without errors.

- [ ] **Step 4: Commit**

```bash
git add src/app/page.tsx
git commit -m "feat: complete homepage redesign with Crafted Warmth design"
```

---

## Chunk 6: Services Pages Redesign

### Task 20: Redesign Services Listing Page

**Files:**
- Modify: `src/app/services/page.tsx`

- [ ] **Step 1: Rewrite services page**

- Hero: 60vh, `bg-warm-100`, headline "Our Services", subtitle, breadcrumbs
- Services grid: 2-column on desktop, 1 on mobile
- Alternate card sizes for masonry feel: even-indexed cards have taller images
- Each card: image, title, short description, 3 feature tags as small pills (`rounded-full bg-warm-100 px-3 py-1 text-xs`), "Learn More →" link
- Cards use `warm-card` base class
- Remove dark hero, use warm-100 background
- Bottom CTA section with warm tones

- [ ] **Step 2: Verify build passes**

Run: `npx next build 2>&1 | tail -5`

- [ ] **Step 3: Commit**

```bash
git add src/app/services/page.tsx
git commit -m "feat: redesign services listing with masonry grid"
```

---

### Task 21: Restyle Individual Service Pages

**Files:**
- Modify: `src/app/services/[slug]/page.tsx`

- [ ] **Step 1: Update service detail page styling**

Key changes:
- Hero: `bg-warm-100` background, no dark full-bleed image. Service title + breadcrumbs + description + CTA button
- Features section: 2-column grid of icon + text items with `CheckCircle2` icons, each in a subtle card style
- Gallery: Keep masonry but update borders/shadows to warm palette, add click handler to open ImageLightbox (requires making this a client component or extracting gallery to a client component)
- FAQ: Already restyled via FAQAccordion changes
- Related projects: Use updated ProjectCard
- Contact form section: `bg-warm-50` background, "Get a Quote for [Service Name]" headline
- Sidebar: `bg-warm-100 rounded-2xl` card, update button styles to btn-primary/btn-outline
- Update all zinc/slate references to warm palette

Note: The gallery with lightbox will require extracting the gallery section into a separate client component (e.g., inline "use client" wrapper or a ServiceGallery component) since the page uses `generateStaticParams` and needs to remain a server component. The simplest approach is to create a small `ServiceGallery` client component inline or import ImageLightbox in a client wrapper.

- [ ] **Step 2: Verify build passes**

Run: `npx next build 2>&1 | tail -5`

- [ ] **Step 3: Commit**

```bash
git add src/app/services/[slug]/page.tsx
git commit -m "feat: restyle service detail pages with warm design system"
```

---

## Chunk 7: Projects Pages Redesign

### Task 22: Redesign Projects Listing Page with Filter

**Files:**
- Modify: `src/app/projects/page.tsx`

- [ ] **Step 1: Rewrite projects page as client component**

Since we need client-side filtering, the page becomes a client component (remove `generateMetadata` if present, or keep metadata via `export const metadata` only if not using hooks — but since we need useState for filtering, it must be "use client").

Key changes:
- Add `"use client"` directive
- Hero: Short, `bg-warm-100`, "Our Projects" headline, breadcrumbs
- Import ProjectFilter component
- Filter categories derived from services data: `[{ slug: "all", label: "All" }, ...services.map(s => ({ slug: s.slug, label: s.title }))]`
- State: `activeFilter` defaults to "all"
- Filter logic: if "all" show all projects, otherwise filter by `serviceType`
- Render filtered projects in 2-column grid using ProjectCard
- Wrap cards in Framer Motion `<LayoutGroup>` for smooth filter animation
- Bottom CTA section

- [ ] **Step 2: Verify build passes**

Run: `npx next build 2>&1 | tail -5`

- [ ] **Step 3: Commit**

```bash
git add src/app/projects/page.tsx
git commit -m "feat: redesign projects page with animated filter bar"
```

---

### Task 23: Restyle Individual Project Pages with Lightbox

**Files:**
- Modify: `src/app/projects/[slug]/page.tsx`

- [ ] **Step 1: Update project detail page styling**

Key changes:
- Hero: Full-width project image with dark gradient overlay, title + location + duration badges overlaid in white
- Extract gallery section into a client component wrapper that manages lightbox state and renders ImageLightbox
- Sidebar: `bg-warm-100 rounded-2xl` card with project details
- Related projects: Updated ProjectCard style
- Update all zinc/slate references to warm palette
- CTA sections: btn-primary/btn-outline utilities

For the gallery + lightbox integration: create a small `ProjectGallery` client component (can be defined in the same file above the server component, or as a separate import). It receives `images: string[]`, manages `lightboxOpen` and `lightboxIndex` state, renders the grid of clickable images + ImageLightbox.

- [ ] **Step 2: Verify build passes**

Run: `npx next build 2>&1 | tail -5`

- [ ] **Step 3: Commit**

```bash
git add src/app/projects/[slug]/page.tsx
git commit -m "feat: restyle project detail pages with lightbox gallery"
```

---

## Chunk 8: About & Contact Pages Redesign

### Task 24: Restyle About Page

**Files:**
- Modify: `src/app/about/page.tsx`

- [ ] **Step 1: Update about page styling**

Key changes:
- Hero: `bg-warm-100` with worksite photo (keep existing Unsplash image), warm overlay
- "Our Story": Alternating image/text layout (image left + text right, then flip), using warm backgrounds
- Values: 4 cards on `bg-warm-100` with icons, `rounded-2xl`
- Service areas: Group suburbs by region, clean card layout
- CTA: `bg-gray-800` dark section with white text and btn-primary (white bg variant)
- Replace all zinc/slate references with warm palette

- [ ] **Step 2: Verify build passes**

Run: `npx next build 2>&1 | tail -5`

- [ ] **Step 3: Commit**

```bash
git add src/app/about/page.tsx
git commit -m "feat: restyle about page with warm design system"
```

---

### Task 25: Redesign Contact Page

**Files:**
- Modify: `src/app/contact/page.tsx`

- [ ] **Step 1: Rewrite contact page**

Key changes:
- Hero: Short, `bg-warm-100`, "Get In Touch" headline
- 2-column layout: Form (60% left) + contact info (40% right)
- Form uses restyled ContactFormEmbed
- Contact info sidebar: `bg-warm-100 rounded-2xl p-8` card
  - Phone: icon + number as `tel:` link
  - Email: icon + address as `mailto:` link
  - Location: icon + address text
  - Hours: icon + business hours table
- Add trust signal below form: "Average response time: under 2 hours" with clock icon
- All phone numbers wrapped in `tel:` links
- Remove dark cinematic hero, use warm-100

- [ ] **Step 2: Verify build passes**

Run: `npx next build 2>&1 | tail -5`

- [ ] **Step 3: Commit**

```bash
git add src/app/contact/page.tsx
git commit -m "feat: redesign contact page with warm 2-column layout"
```

---

## Chunk 9: Final Polish & Verification

### Task 26: Full Build Verification & Visual Review

- [ ] **Step 1: Run full build**

Run: `npx next build 2>&1`
Expected: All pages build successfully, no errors

- [ ] **Step 2: Run dev server and verify all routes**

Start dev server and confirm these pages load without console errors:
- `/` (homepage)
- `/services`
- `/services/home-renovations`
- `/projects`
- `/projects/richmond-kitchen-renovation`
- `/about`
- `/contact`

- [ ] **Step 3: Run linter**

Run: `npm run lint 2>&1`
Fix any lint errors.

- [ ] **Step 4: Final commit if any fixes needed**

```bash
git add -A
git commit -m "fix: resolve lint errors and build issues from redesign"
```
