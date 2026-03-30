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
    { name: "Areas", href: "/areas" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const isHome = pathname === "/";
  const solid = scrolled || !isHome;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          solid
            ? "bg-[#0A0A0A]/95 backdrop-blur-sm border-b border-white/10 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link href="/" className="group flex items-center gap-3">
              <div
                className={`flex h-11 w-11 items-center justify-center rounded-lg shadow-black/10 transition-all duration-300 group-hover:scale-105 ${
                  solid ? "bg-white" : "bg-white/20 backdrop-blur-sm"
                }`}
              >
                <span
                  className={`font-heading text-2xl font-bold transition-colors duration-300 ${
                    solid ? "text-black" : "text-white"
                  }`}
                >
                  M
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-heading text-xl font-bold tracking-wide text-white transition-colors duration-300">
                  MEK HOMES
                </span>
                <span className="text-[10px] uppercase tracking-widest text-white/60 transition-colors duration-300">
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
                        ? "text-white"
                        : "text-white/60 hover:text-white"
                    }`}
                >
                  {link.name}
                </Link>
              ))}

              <div className="flex items-center gap-4">
                <a
                  href="tel:0400000000"
                  className="flex items-center gap-1.5 text-sm text-white/50 hover:text-white transition-colors duration-300"
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
              className="lg:hidden text-white transition-colors duration-300"
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
