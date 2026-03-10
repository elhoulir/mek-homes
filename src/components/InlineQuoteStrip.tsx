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
                           placeholder:text-gray-500 focus:border-black focus:outline-none transition-colors"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone number"
                required
                className="rounded-xl border border-warm-200 bg-white px-4 py-3 text-sm
                           placeholder:text-gray-500 focus:border-black focus:outline-none transition-colors"
              />
              <select
                name="service"
                className="rounded-xl border border-warm-200 bg-white px-4 py-3 text-sm
                           text-gray-500 focus:border-black focus:outline-none transition-colors"
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
