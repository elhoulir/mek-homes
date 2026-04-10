"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface Testimonial {
  quote: string;
  author: string;
}

interface ScrollRevealQuoteProps {
  testimonials: Testimonial[];
}

function RevealWord({ word, index, total, scrollYProgress }: {
  word: string;
  index: number;
  total: number;
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const start = index / total;
  const end = (index + 1) / total;

  const color = useTransform(
    scrollYProgress,
    [start, end],
    ["#CCCCCC", "#111111"]
  );

  return (
    <motion.span style={{ color }} className="inline-block mr-[0.3em]">
      {word}
    </motion.span>
  );
}

export default function ScrollRevealQuote({ testimonials }: ScrollRevealQuoteProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [current] = useState(() => Math.floor(Math.random() * testimonials.length));

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "start 0.1"],
  });

  const starOpacity = useTransform(scrollYProgress, [0, 0.1], [0.3, 1]);
  const authorColor = useTransform(scrollYProgress, [0.85, 1], ["#CCCCCC", "#999999"]);

  const t = testimonials[current];
  const words = t.quote.split(" ");

  return (
    <div ref={ref} className="py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div className="flex justify-center gap-1.5 mb-8" style={{ opacity: starOpacity }}>
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="h-6 w-6 text-yellow-500 fill-current" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </motion.div>
        <p className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.15] tracking-tight">
          <span className="inline-block mr-[0.3em]" style={{ color: "#CCCCCC" }}>&ldquo;</span>
          {words.map((word, i) => (
            <RevealWord
              key={i}
              word={i === words.length - 1 ? word + "\u201D" : word}
              index={i}
              total={words.length}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </p>
        <motion.p
          className="mt-8 text-sm font-medium uppercase tracking-[0.15em]"
          style={{ color: authorColor }}
        >
          — {t.author}
        </motion.p>
      </div>
    </div>
  );
}
