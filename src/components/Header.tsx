"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded bg-gold-600 text-lg font-bold text-white">
              M
            </div>
            <div>
              <span className="text-xl font-bold text-slate-900">
                MEK Homes
              </span>
              <span className="block text-xs text-slate-500">
                Carpentry & Renovations
              </span>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            <Link
              href="/"
              className="text-sm font-medium text-slate-600 transition-colors hover:text-gold-600"
            >
              Home
            </Link>
            <Link
              href="/services"
              className="text-sm font-medium text-slate-600 transition-colors hover:text-gold-600"
            >
              Services
            </Link>
            <Link
              href="/projects"
              className="text-sm font-medium text-slate-600 transition-colors hover:text-gold-600"
            >
              Projects
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-slate-600 transition-colors hover:text-gold-600"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-slate-600 transition-colors hover:text-gold-600"
            >
              Contact
            </Link>
            <Link
              href="/contact"
              className="rounded-lg bg-gold-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-gold-700"
            >
              Get a Quote
            </Link>
          </nav>

          <button
            className="md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6 text-slate-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-slate-100 bg-white md:hidden">
          <div className="space-y-1 px-4 py-4">
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className="block rounded-lg px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50"
            >
              Home
            </Link>
            <Link
              href="/services"
              onClick={() => setMobileOpen(false)}
              className="block rounded-lg px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50"
            >
              Services
            </Link>
            <Link
              href="/projects"
              onClick={() => setMobileOpen(false)}
              className="block rounded-lg px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50"
            >
              Projects
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileOpen(false)}
              className="block rounded-lg px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50"
            >
              About
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="block rounded-lg px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50"
            >
              Contact
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-2 block rounded-lg bg-gold-600 px-3 py-2.5 text-center text-base font-semibold text-white"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
