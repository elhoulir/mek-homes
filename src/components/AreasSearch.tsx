"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Search, MapPin } from "lucide-react";
import type { Suburb } from "@/data/suburbs";

interface AreasSearchProps {
  suburbs: Suburb[];
}

export default function AreasSearch({ suburbs }: AreasSearchProps) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return suburbs
      .filter(
        (s) =>
          s.name.toLowerCase().includes(q) || s.postcode.includes(q)
      )
      .slice(0, 12);
  }, [query, suburbs]);

  return (
    <div>
      <div className="relative max-w-lg">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-[#999999]" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search your suburb or postcode..."
          className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-[#E5E5E5] bg-white text-[#111111] placeholder:text-[#999999] focus:border-[#AAAAAA] focus:outline-none transition-colors text-base shadow-sm"
        />
      </div>

      {filtered.length > 0 && (
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
          {filtered.map((suburb) => (
            <Link
              key={suburb.slug}
              href={`/areas/${suburb.slug}`}
              className="flex items-center justify-between px-4 py-3 rounded-xl bg-white border border-[#E5E5E5] hover:border-[#AAAAAA] transition-colors"
            >
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-[#999999] shrink-0" />
                <span className="text-[#111111] font-medium">
                  {suburb.name}
                </span>
              </div>
              <span className="text-[#999999] text-sm">{suburb.postcode}</span>
            </Link>
          ))}
        </div>
      )}

      {query.trim() && filtered.length === 0 && (
        <div className="mt-4 p-4 rounded-xl bg-white border border-[#E5E5E5] max-w-lg">
          <p className="text-[#666666] text-sm">
            Don&apos;t see your suburb?
          </p>
          <Link
            href={`/areas/${query.trim().toLowerCase().replace(/\s+/g, "-")}`}
            className="text-sm font-medium text-[#111111] hover:underline mt-1 inline-block"
          >
            Check if we service {query.trim()} →
          </Link>
        </div>
      )}
    </div>
  );
}
