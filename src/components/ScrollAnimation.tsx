"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface ScrollAnimationProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: "fadeUp" | "fadeIn" | "stagger";
}

const variants = {
  fadeUp: {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
  },
  fadeIn: {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
  },
  stagger: {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
  },
};

export default function ScrollAnimation({
  children,
  className,
  delay = 0,
  variant = "fadeUp",
}: ScrollAnimationProps) {
  return (
    <motion.div
      {...variants[variant]}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
