"use client";

import { useState } from "react";
import type { FormEvent } from "react";

interface ContactFormEmbedProps {
  preselectedService?: string;
  prefilledSuburb?: string;
  variant?: "light" | "dark";
}

export default function ContactFormEmbed({
  preselectedService,
  prefilledSuburb,
  variant = "light",
}: ContactFormEmbedProps) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  const isLight = variant === "light";

  if (submitted) {
    return (
      <div className={`rounded-xl border p-8 text-center ${isLight ? "border-green-200 bg-green-50" : "border-green-800 bg-[#141414]"}`}>
        <svg
          className="mx-auto h-12 w-12 text-green-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <h3 className={`mt-4 text-lg font-semibold ${isLight ? "text-green-700" : "text-green-400"}`}>
          Thank You!
        </h3>
        <p className={`mt-2 ${isLight ? "text-green-600" : "text-green-300"}`}>
          We&apos;ve received your enquiry and will get back to you within 24
          hours.
        </p>
      </div>
    );
  }

  const inputClasses = isLight
    ? "mt-1 block w-full rounded-xl border border-[#E5E5E5] bg-white px-4 py-3 text-[#111111] placeholder:text-[#999999] focus:border-[#AAAAAA] focus:outline-none transition-colors"
    : "mt-1 block w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 focus:border-white/30 focus:outline-none transition-colors";

  const labelClasses = isLight
    ? "block text-sm font-medium text-[#444444]"
    : "block text-sm font-medium text-white/70";

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="firstName" className={labelClasses}>
            First Name *
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            required
            className={inputClasses}
            placeholder="John"
          />
        </div>
        <div>
          <label htmlFor="lastName" className={labelClasses}>
            Last Name *
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            required
            className={inputClasses}
            placeholder="Smith"
          />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className={labelClasses}>
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className={inputClasses}
            placeholder="john@example.com"
          />
        </div>
        <div>
          <label htmlFor="phone" className={labelClasses}>
            Phone *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            className={inputClasses}
            placeholder="0400 000 000"
          />
        </div>
      </div>

      <div>
        <label htmlFor="service" className={labelClasses}>
          Service Required
        </label>
        <select
          id="service"
          name="service"
          defaultValue={preselectedService || ""}
          className={inputClasses}
        >
          <option value="">Select a service</option>
          <option value="renovation">Home Renovations</option>
          <option value="carpentry">Custom Carpentry</option>
          <option value="decking">Decking &amp; Pergolas</option>
          <option value="kitchen">Kitchen Renovations</option>
          <option value="bathroom">Bathroom Renovations</option>
          <option value="structural">Structural Carpentry</option>
          <option value="doors-windows">Doors &amp; Windows</option>
          <option value="fencing">Fencing &amp; Gates</option>
          <option value="lockup-fix">Lockup &amp; Fix</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="suburb" className={labelClasses}>
          Suburb
        </label>
        <input
          type="text"
          id="suburb"
          name="suburb"
          defaultValue={prefilledSuburb || ""}
          className={inputClasses}
          placeholder="e.g. Richmond, VIC"
        />
      </div>

      <div>
        <label htmlFor="message" className={labelClasses}>
          Project Details *
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className={inputClasses}
          placeholder="Tell us about your project — what work do you need done, any specific requirements, and your ideal timeline."
        />
      </div>

      <button type="submit" className="btn-primary w-full min-h-[44px]">
        Send Enquiry
      </button>
    </form>
  );
}
