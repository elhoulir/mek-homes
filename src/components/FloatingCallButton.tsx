"use client";

import { Phone, Mail, MessageSquare } from "lucide-react";
import Link from "next/link";

export default function FloatingCallButton() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden">
      <div className="bg-[#0A0A0A]/95 backdrop-blur-sm border-t border-white/10 px-4 py-3 safe-area-pb">
        <div className="flex items-center justify-around gap-2 max-w-md mx-auto">
          <a
            href="tel:0400000000"
            className="flex flex-col items-center gap-1 flex-1 py-1 text-white/70 active:text-white transition-colors"
          >
            <Phone className="h-5 w-5" />
            <span className="text-[10px] font-medium">Call</span>
          </a>
          <a
            href="mailto:info@mekhomes.com.au"
            className="flex flex-col items-center gap-1 flex-1 py-1 text-white/70 active:text-white transition-colors"
          >
            <Mail className="h-5 w-5" />
            <span className="text-[10px] font-medium">Email</span>
          </a>
          <Link
            href="/contact"
            className="flex items-center justify-center gap-2 flex-[2] bg-white text-black rounded-xl py-2.5 px-4 font-medium text-sm active:bg-gray-200 transition-colors"
          >
            <MessageSquare className="h-4 w-4" />
            Get a Quote
          </Link>
        </div>
      </div>
    </div>
  );
}
