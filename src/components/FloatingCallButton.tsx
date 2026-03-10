"use client";

import { Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function FloatingCallButton() {
  return (
    <motion.a
      href="tel:0400000000"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center
                 rounded-full bg-black text-white shadow-lg lg:hidden
                 hover:bg-gray-800 active:scale-95 transition-colors"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      aria-label="Call MEK Homes"
    >
      <Phone className="h-6 w-6" />
    </motion.a>
  );
}
