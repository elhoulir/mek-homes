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
        {testimonials.slice(0, 3).map((t, i) => (
          <div key={i} className="rounded-2xl bg-white p-8 shadow-sm border border-warm-200/50">
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
              <p className="text-gray-800 leading-relaxed mb-4">{testimonials[current].quote}</p>
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
        <div className="mt-6 flex items-center justify-center gap-4">
          <button onClick={prev} className="rounded-full p-2 hover:bg-warm-100 transition-colors" aria-label="Previous testimonial">
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all duration-300 ${i === current ? "w-6 bg-black" : "w-2 bg-warm-200"}`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
          <button onClick={next} className="rounded-full p-2 hover:bg-warm-100 transition-colors" aria-label="Next testimonial">
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
