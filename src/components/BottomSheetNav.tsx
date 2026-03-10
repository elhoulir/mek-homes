"use client";

import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

interface BottomSheetNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BottomSheetNav({ isOpen, onClose }: BottomSheetNavProps) {
  const pathname = usePathname();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className="fixed bottom-0 left-0 right-0 z-[60] rounded-t-3xl bg-[#141414] px-6 pb-10 pt-4 shadow-2xl"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
          >
            <div className="mx-auto mb-6 h-1 w-12 rounded-full bg-white/20" />
            <button
              onClick={onClose}
              className="absolute right-6 top-6 rounded-full p-2 hover:bg-white/10 transition-colors"
              aria-label="Close menu"
            >
              <X className="h-5 w-5 text-white" />
            </button>
            <nav className="space-y-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href ||
                  (link.href !== "/" && pathname.startsWith(link.href));
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={onClose}
                    className={`flex items-center rounded-xl px-4 py-4 text-lg font-medium transition-colors
                      ${isActive ? "bg-white/10 text-white" : "text-white/50 hover:bg-white/5 hover:text-white"}`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
            <div className="mt-6 space-y-3">
              <Link href="/contact" onClick={onClose} className="btn-primary block w-full text-center">
                Get a Free Quote
              </Link>
              <a href="tel:0400000000" className="btn-outline block w-full text-center">
                Call 0400 000 000
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
