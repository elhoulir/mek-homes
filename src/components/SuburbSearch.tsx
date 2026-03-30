"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import Link from "next/link";
import { Search, MapPin } from "lucide-react";
import type { Suburb } from "@/data/suburbs";

// Featured suburbs to show as quick links (higher demographic areas)
const FEATURED_SLUGS = [
  "toorak", "brighton", "hawthorn", "kew", "camberwell",
  "south-yarra", "malvern", "canterbury", "armadale", "albert-park",
];

interface SuburbSearchProps {
  suburbs: Suburb[];
  variant?: "strip" | "full";
}

export default function SuburbSearch({ suburbs, variant = "full" }: SuburbSearchProps) {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const filtered = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return suburbs
      .filter((s) => s.name.toLowerCase().includes(q) || s.postcode.includes(q))
      .slice(0, 6);
  }, [query, suburbs]);

  const featured = useMemo(
    () => FEATURED_SLUGS.map((slug) => suburbs.find((s) => s.slug === slug)).filter(Boolean) as Suburb[],
    [suburbs]
  );

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Strip variant — compact search bar with featured suburb pills
  if (variant === "strip") {
    return (
      <div className="text-center">
        <h2 className="font-heading font-bold text-2xl md:text-3xl text-[#111111] mb-2">
          Find a Carpenter in Your Area
        </h2>
        <p className="text-[#666666] text-sm mb-6">
          We service 200+ suburbs across Melbourne
        </p>

        {/* Search bar */}
        <div ref={containerRef} className="relative max-w-lg mx-auto mb-6">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-[#999999]" />
            <input
              type="text"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setIsOpen(true);
              }}
              onFocus={() => setIsOpen(true)}
              placeholder="Search suburb or postcode..."
              className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-[#E5E5E5] bg-white text-[#111111] placeholder:text-[#999999] focus:border-[#AAAAAA] focus:outline-none transition-colors text-base shadow-sm"
            />
          </div>
          {isOpen && filtered.length > 0 && (
            <div className="absolute z-20 mt-2 w-full rounded-xl border border-[#E5E5E5] bg-white shadow-lg overflow-hidden">
              {filtered.map((suburb) => (
                <Link
                  key={suburb.slug}
                  href={`/areas/${suburb.slug}`}
                  className="flex items-center justify-between px-4 py-3 hover:bg-[#F7F7F7] transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="flex items-center gap-3">
                    <MapPin className="h-4 w-4 text-[#999999] shrink-0" />
                    <span className="text-[#111111] font-medium">{suburb.name}</span>
                  </div>
                  <span className="text-[#999999] text-sm">{suburb.postcode}</span>
                </Link>
              ))}
            </div>
          )}
          {isOpen && query.trim() && filtered.length === 0 && (
            <div className="absolute z-20 mt-2 w-full rounded-xl border border-[#E5E5E5] bg-white shadow-lg p-4 text-center">
              <p className="text-[#666666] text-sm">No suburb found — but we likely service your area.</p>
              <Link href="/contact" className="text-sm font-medium text-[#111111] hover:underline mt-1 inline-block">
                Contact us to check →
              </Link>
            </div>
          )}
        </div>

        {/* Featured suburb pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-4">
          {featured.map((suburb) => (
            <Link
              key={suburb.slug}
              href={`/areas/${suburb.slug}`}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[#E5E5E5] text-xs text-[#444444] hover:border-[#AAAAAA] hover:text-[#111111] transition-colors"
            >
              {suburb.name}
            </Link>
          ))}
        </div>

        <Link
          href="/areas"
          className="text-sm font-medium text-[#444444] hover:text-[#111111] hover:underline underline-offset-4 transition-colors"
        >
          View All Areas →
        </Link>
      </div>
    );
  }

  // Full variant — search + all suburbs grouped by region
  const regions = (() => {
    const map = new Map<string, Suburb[]>();
    for (const s of suburbs) {
      const list = map.get(s.region) || [];
      list.push(s);
      map.set(s.region, list);
    }
    return Array.from(map.entries()).sort(([a], [b]) => a.localeCompare(b));
  })();

  return (
    <div>
      {/* Search box */}
      <div ref={containerRef} className="relative max-w-md mx-auto mb-10">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-[#999999]" />
          <input
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setIsOpen(true);
            }}
            onFocus={() => setIsOpen(true)}
            placeholder="Search suburb or postcode..."
            className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-[#E5E5E5] bg-white text-[#111111] placeholder:text-[#999999] focus:border-[#AAAAAA] focus:outline-none transition-colors text-base"
          />
        </div>
        {isOpen && filtered.length > 0 && (
          <div className="absolute z-20 mt-2 w-full rounded-xl border border-[#E5E5E5] bg-white shadow-lg overflow-hidden">
            {filtered.map((suburb) => (
              <Link
                key={suburb.slug}
                href={`/areas/${suburb.slug}`}
                className="flex items-center justify-between px-4 py-3 hover:bg-[#F7F7F7] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <div className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-[#999999] shrink-0" />
                  <span className="text-[#111111] font-medium">{suburb.name}</span>
                </div>
                <span className="text-[#999999] text-sm">{suburb.postcode}</span>
              </Link>
            ))}
          </div>
        )}
        {isOpen && query.trim() && filtered.length === 0 && (
          <div className="absolute z-20 mt-2 w-full rounded-xl border border-[#E5E5E5] bg-white shadow-lg p-4 text-center">
            <p className="text-[#666666] text-sm">No suburb found — but we likely service your area.</p>
            <Link href="/contact" className="text-sm font-medium text-[#111111] hover:underline mt-1 inline-block">
              Contact us to check →
            </Link>
          </div>
        )}
      </div>

      {/* Suburb pills grouped by region */}
      <div className="space-y-6">
        {regions.map(([region, regionSuburbs]) => (
          <div key={region}>
            <h3 className="text-sm font-medium text-[#999999] uppercase tracking-wider mb-3">{region}</h3>
            <div className="flex flex-wrap gap-2">
              {regionSuburbs.map((suburb) => (
                <Link
                  key={suburb.slug}
                  href={`/areas/${suburb.slug}`}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-white border border-[#E5E5E5] text-sm text-[#444444] hover:border-[#AAAAAA] hover:text-[#111111] transition-colors"
                >
                  {suburb.name}
                  <span className="text-[#BBBBBB]">{suburb.postcode}</span>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
