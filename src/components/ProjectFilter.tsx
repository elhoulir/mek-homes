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
