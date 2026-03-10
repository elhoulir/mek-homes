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
    <section className="bg-[#111111] border-y border-white/10">
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
              <p className="font-medium text-white">Thanks! We&apos;ll be in touch shortly.</p>
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
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white
                           placeholder:text-white/40 focus:border-white/30 focus:outline-none transition-colors"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone number"
                required
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white
                           placeholder:text-white/40 focus:border-white/30 focus:outline-none transition-colors"
              />
              <select
                name="service"
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm
                           text-white/50 focus:border-white/30 focus:outline-none transition-colors"
              >
                <option value="">Select a service</option>
                {services.map((s) => (
                  <option key={s.slug} value={s.slug}>{s.title}</option>
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
