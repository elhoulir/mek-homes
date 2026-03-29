"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import type { Testimonial } from "@/data/testimonials";

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

function InitialAvatar({ name }: { name: string }) {
  const initial = name.charAt(0).toUpperCase();
  return (
    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white font-heading font-semibold text-sm shrink-0">
      {initial}
    </div>
  );
}

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, j) => (
        <Star key={j} className="h-4 w-4 fill-white text-white" />
      ))}
    </div>
  );
}

function GoogleBadge() {
  return (
    <span className="text-xs text-white/40 mt-1 block">via Google Reviews</span>
  );
}

function TestimonialCard({ t, compact = false }: { t: Testimonial; compact?: boolean }) {
  return (
    <div className={`rounded-2xl bg-[#141414] shadow-sm border border-white/10 ${compact ? "p-6" : "p-8"}`}>
      <StarRating count={t.rating} />
      <Quote className={`text-white/20 mt-4 ${compact ? "h-6 w-6 mb-3" : "h-8 w-8 mb-4"}`} />
      <p className="text-white/70 leading-relaxed mb-6">{t.quote}</p>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <InitialAvatar name={t.name} />
          <div>
            <p className="font-semibold font-heading text-white">{t.name}</p>
            <p className="text-sm text-white/50">{t.suburb}</p>
            <GoogleBadge />
          </div>
        </div>
      </div>
    </div>
  );
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
        {testimonials.slice(0, 3).map((t, i) => (
          <TestimonialCard key={i} t={t} />
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
            >
              <TestimonialCard t={testimonials[current]} compact />
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="mt-6 flex items-center justify-center gap-4">
          <button onClick={prev} className="rounded-full p-2 hover:bg-white/10 transition-colors" aria-label="Previous testimonial">
            <ChevronLeft className="h-5 w-5 text-white" />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all duration-300 ${i === current ? "w-6 bg-white" : "w-2 bg-white/20"}`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
          <button onClick={next} className="rounded-full p-2 hover:bg-white/10 transition-colors" aria-label="Next testimonial">
            <ChevronRight className="h-5 w-5 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}
