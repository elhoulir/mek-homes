"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, Phone, Mail } from "lucide-react";
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
    { name: "About", href: "/about" },
  ];

  const isHome = pathname === "/";
  const solid = scrolled || !isHome;

  return (
    <>
      {/* Top bar — desktop only */}
      <div className="hidden lg:block fixed top-0 left-0 right-0 z-50 bg-[#050505] border-b border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-end gap-6 h-9 text-xs text-white/50">
          <a href="mailto:info@mekhomes.com.au" className="flex items-center gap-1.5 hover:text-white transition-colors">
            <Mail className="h-3 w-3" />
            info@mekhomes.com.au
          </a>
          <a href="tel:0400000000" className="flex items-center gap-1.5 hover:text-white transition-colors">
            <Phone className="h-3 w-3" />
            0400 000 000
          </a>
        </div>
      </div>

      <header
        className={`fixed left-0 right-0 z-50 transition-all duration-300 lg:top-9 top-0 ${
          solid
            ? "bg-[#0A0A0A]/95 backdrop-blur-sm border-b border-white/10 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link href="/" className="group flex items-center">
              <Image
                src="/logo.svg"
                alt="MEK Homes"
                width={160}
                height={44}
                priority
                className="h-10 w-auto transition-transform duration-300 group-hover:scale-[1.02]"
              />
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

              <Link href="/contact" className="btn-primary">
                Get a Quote
              </Link>
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
