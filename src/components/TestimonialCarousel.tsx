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
    <div className="w-10 h-10 rounded-full bg-[#F0F0F0] flex items-center justify-center text-[#111111] font-heading font-semibold text-sm shrink-0">
      {initial}
    </div>
  );
}

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, j) => (
        <Star key={j} className="h-4 w-4 fill-amber-400 text-amber-400" />
      ))}
    </div>
  );
}

function GoogleBadge() {
  return (
    <span className="text-xs text-[#999999] mt-1 block">via Google Reviews</span>
  );
}

function TestimonialCard({ t, compact = false }: { t: Testimonial; compact?: boolean }) {
  return (
    <div className={`rounded-2xl bg-white shadow-sm border border-[#E5E5E5] ${compact ? "p-6" : "p-8"}`}>
      <StarRating count={t.rating} />
      <Quote className={`text-[#E5E5E5] mt-4 ${compact ? "h-6 w-6 mb-3" : "h-8 w-8 mb-4"}`} />
      <p className="text-[#444444] leading-relaxed mb-6">{t.quote}</p>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <InitialAvatar name={t.name} />
          <div>
            <p className="font-semibold font-heading text-[#111111]">{t.name}</p>
            <p className="text-sm text-[#666666]">{t.suburb}</p>
            <GoogleBadge />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialCarousel({ testimonials }: TestimonialCarouselProps) {
  const [currentPage, setCurrentPage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const desktopPerPage = 3;
  const totalDesktopPages = Math.ceil(testimonials.length / desktopPerPage);
  const totalMobilePages = testimonials.length;

  const nextDesktop = useCallback(() => {
    setCurrentPage((c) => (c + 1) % totalDesktopPages);
  }, [totalDesktopPages]);

  const prevDesktop = useCallback(() => {
    setCurrentPage((c) => (c - 1 + totalDesktopPages) % totalDesktopPages);
  }, [totalDesktopPages]);

  const nextMobile = useCallback(() => {
    setCurrentPage((c) => (c + 1) % totalMobilePages);
  }, [totalMobilePages]);

  const prevMobile = useCallback(() => {
    setCurrentPage((c) => (c - 1 + totalMobilePages) % totalMobilePages);
  }, [totalMobilePages]);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentPage((c) => (c + 1) % Math.max(totalDesktopPages, totalMobilePages));
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused, totalDesktopPages, totalMobilePages]);

  const desktopPage = currentPage % totalDesktopPages;
  const mobilePage = currentPage % totalMobilePages;
  const desktopSlice = testimonials.slice(
    desktopPage * desktopPerPage,
    desktopPage * desktopPerPage + desktopPerPage
  );

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Desktop: 3 cards per page, paginated */}
      <div className="hidden lg:block">
        <AnimatePresence mode="wait">
          <motion.div
            key={desktopPage}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-3 gap-6"
          >
            {desktopSlice.map((t, i) => (
              <TestimonialCard key={`${desktopPage}-${i}`} t={t} />
            ))}
          </motion.div>
        </AnimatePresence>
        <div className="mt-8 flex items-center justify-center gap-4">
          <button onClick={prevDesktop} className="rounded-full p-2 hover:bg-[#E5E5E5] transition-colors" aria-label="Previous reviews">
            <ChevronLeft className="h-5 w-5 text-[#666666]" />
          </button>
          <div className="flex gap-2">
            {Array.from({ length: totalDesktopPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i)}
                className={`h-2 rounded-full transition-all duration-300 ${i === desktopPage ? "w-6 bg-[#111111]" : "w-2 bg-[#CCCCCC]"}`}
                aria-label={`Go to page ${i + 1}`}
              />
            ))}
          </div>
          <button onClick={nextDesktop} className="rounded-full p-2 hover:bg-[#E5E5E5] transition-colors" aria-label="Next reviews">
            <ChevronRight className="h-5 w-5 text-[#666666]" />
          </button>
        </div>
      </div>

      {/* Mobile: single card carousel with limited dots */}
      <div className="lg:hidden">
        <div className="overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={mobilePage}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
            >
              <TestimonialCard t={testimonials[mobilePage]} compact />
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="mt-6 flex items-center justify-center gap-4">
          <button onClick={prevMobile} className="rounded-full p-2 hover:bg-[#E5E5E5] transition-colors" aria-label="Previous testimonial">
            <ChevronLeft className="h-5 w-5 text-[#666666]" />
          </button>
          <span className="text-sm text-[#666666] tabular-nums">
            {mobilePage + 1} / {totalMobilePages}
          </span>
          <button onClick={nextMobile} className="rounded-full p-2 hover:bg-[#E5E5E5] transition-colors" aria-label="Next testimonial">
            <ChevronRight className="h-5 w-5 text-[#666666]" />
          </button>
        </div>
      </div>
    </div>
  );
}
