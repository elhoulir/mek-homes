"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, Phone } from "lucide-react";
import { usePathname } from "next/navigation";
import BottomSheetNav from "./BottomSheetNav";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const isScrolledOrNotHome = scrolled || pathname !== "/";

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolledOrNotHome
            ? "bg-white/95 backdrop-blur-sm border-b border-warm-200 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link href="/" className="group flex items-center gap-3">
              <div
                className={`flex h-11 w-11 items-center justify-center rounded-lg shadow-black/10 transition-all duration-300 group-hover:scale-105 ${
                  isScrolledOrNotHome ? "bg-zinc-950" : "bg-white/20 backdrop-blur-sm"
                }`}
              >
                <span
                  className={`font-heading text-2xl font-bold transition-colors duration-300 ${
                    isScrolledOrNotHome ? "text-white" : "text-white"
                  }`}
                >
                  M
                </span>
              </div>
              <div className="flex flex-col">
                <span
                  className={`font-heading text-xl font-bold tracking-wide transition-colors duration-300 ${
                    isScrolledOrNotHome ? "text-zinc-950" : "text-white"
                  }`}
                >
                  MEK HOMES
                </span>
                <span
                  className={`text-[10px] uppercase tracking-widest transition-colors duration-300 ${
                    isScrolledOrNotHome ? "text-zinc-500" : "text-white/80"
                  }`}
                >
                  Premium Carpentry
                </span>
              </div>
            </Link>

            <nav className="hidden items-center gap-8 lg:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative text-sm font-medium transition-colors duration-300
                    after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-current after:transition-transform hover:after:scale-x-100
                    ${
                      pathname === link.href
                        ? isScrolledOrNotHome
                          ? "text-zinc-950"
                          : "text-white"
                        : isScrolledOrNotHome
                        ? "text-zinc-600 hover:text-zinc-950"
                        : "text-white/80 hover:text-white"
                    }`}
                >
                  {link.name}
                </Link>
              ))}

              <div className="flex items-center gap-4">
                <a
                  href="tel:0400000000"
                  className={`flex items-center gap-1.5 text-sm transition-colors duration-300 ${
                    isScrolledOrNotHome
                      ? "text-zinc-500 hover:text-zinc-950"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  <Phone className="h-3.5 w-3.5" />
                  <span>0400 000 000</span>
                </a>
                <Link href="/contact" className="btn-primary">
                  Get a Quote
                </Link>
              </div>
            </nav>

            <button
              className={`lg:hidden transition-colors duration-300 ${
                isScrolledOrNotHome ? "text-zinc-950" : "text-white"
              }`}
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="h-7 w-7" />
            </button>
          </div>
        </div>
      </header>

      <BottomSheetNav isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
