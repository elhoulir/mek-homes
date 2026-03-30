"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import Link from "next/link";
import { Search, MapPin } from "lucide-react";
import type { Suburb } from "@/data/suburbs";

interface SuburbSearchProps {
  suburbs: Suburb[];
}

export default function SuburbSearch({ suburbs }: SuburbSearchProps) {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const filtered = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return suburbs.filter((s) => s.name.toLowerCase().includes(q)).slice(0, 6);
  }, [query, suburbs]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Group suburbs by region for the pill display
  const regions = useMemo(() => {
    const map = new Map<string, Suburb[]>();
    for (const s of suburbs) {
      const list = map.get(s.region) || [];
      list.push(s);
      map.set(s.region, list);
    }
    return Array.from(map.entries()).sort(([a], [b]) => a.localeCompare(b));
  }, [suburbs]);

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
            placeholder="Search your suburb..."
            className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-[#E5E5E5] bg-white text-[#111111] placeholder:text-[#999999] focus:border-[#AAAAAA] focus:outline-none transition-colors text-base"
          />
        </div>
        {isOpen && filtered.length > 0 && (
          <div className="absolute z-20 mt-2 w-full rounded-xl border border-[#E5E5E5] bg-white shadow-lg overflow-hidden">
            {filtered.map((suburb) => (
              <Link
                key={suburb.slug}
                href={`/areas/${suburb.slug}`}
                className="flex items-center gap-3 px-4 py-3 hover:bg-[#F7F7F7] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <MapPin className="h-4 w-4 text-[#999999] shrink-0" />
                <div>
                  <span className="text-[#111111] font-medium">{suburb.name}</span>
                  <span className="text-[#999999] text-sm ml-2">{suburb.region}</span>
                </div>
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
                  <MapPin className="h-3.5 w-3.5" />
                  {suburb.name}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
