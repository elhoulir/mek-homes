"use client";

import { useState } from "react";
import type { FormEvent } from "react";

interface ContactFormEmbedProps {
  preselectedService?: string;
}

export default function ContactFormEmbed({
  preselectedService,
}: ContactFormEmbedProps) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-xl border border-green-200 bg-green-50 p-8 text-center">
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
        <h3 className="mt-4 text-lg font-semibold text-green-800">
          Thank You!
        </h3>
        <p className="mt-2 text-green-700">
          We&apos;ve received your enquiry and will get back to you within 24
          hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="firstName"
            className="block text-sm font-medium text-slate-700"
          >
            First Name *
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            required
            className="mt-1 block w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500"
            placeholder="John"
          />
        </div>
        <div>
          <label
            htmlFor="lastName"
            className="block text-sm font-medium text-slate-700"
          >
            Last Name *
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            required
            className="mt-1 block w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500"
            placeholder="Smith"
          />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-slate-700"
          >
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="mt-1 block w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500"
            placeholder="john@example.com"
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-slate-700"
          >
            Phone *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            className="mt-1 block w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500"
            placeholder="0400 000 000"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="service"
          className="block text-sm font-medium text-slate-700"
        >
          Service Required
        </label>
        <select
          id="service"
          name="service"
          defaultValue={preselectedService || ""}
          className="mt-1 block w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500"
        >
          <option value="">Select a service</option>
          <option value="renovation">Home Renovations</option>
          <option value="carpentry">Custom Carpentry</option>
          <option value="decking">Decking & Pergolas</option>
          <option value="kitchen">Kitchen Renovations</option>
          <option value="bathroom">Bathroom Renovations</option>
          <option value="structural">Structural Carpentry</option>
          <option value="doors-windows">Doors & Windows</option>
          <option value="fencing">Fencing & Gates</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="suburb"
          className="block text-sm font-medium text-slate-700"
        >
          Suburb
        </label>
        <input
          type="text"
          id="suburb"
          name="suburb"
          className="mt-1 block w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500"
          placeholder="e.g. Richmond, VIC"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-slate-700"
        >
          Project Details *
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="mt-1 block w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500"
          placeholder="Tell us about your project — what work do you need done, any specific requirements, and your ideal timeline."
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-lg bg-gold-600 px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-gold-700 sm:w-auto"
      >
        Send Enquiry
      </button>
    </form>
  );
}
