import Link from "next/link";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] text-warm-300 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-16 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-warm-300 shadow-black/10">
                <span className="font-heading text-xl font-bold text-black">M</span>
              </div>
              <span className="font-heading text-2xl font-bold tracking-wide text-white">
                MEK HOMES
              </span>
            </div>
            <p className="mt-6 text-sm leading-relaxed text-warm-300">
              Transforming Melbourne homes with award-winning craftsmanship,
              bespoke carpentry, and unparalleled dedication to quality.
            </p>
          </div>

          <div>
            <h3 className="mb-6 font-heading text-lg font-semibold uppercase tracking-widest text-white">
              Expertise
            </h3>
            <ul className="space-y-4 text-sm font-medium">
              {[
                { name: "Home Renovations", href: "/services/home-renovations" },
                { name: "Custom Carpentry", href: "/services/custom-carpentry" },
                { name: "Decking & Pergolas", href: "/services/decking-pergolas" },
                { name: "Kitchens & Bathrooms", href: "/services/kitchen-renovations" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 transition-colors hover:text-white"
                  >
                    <ArrowRight className="h-4 w-4 text-warm-300 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                    <span className="transition-transform group-hover:translate-x-1">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-6 font-heading text-lg font-semibold uppercase tracking-widest text-white">
              Company
            </h3>
            <ul className="space-y-4 text-sm font-medium">
              {[
                { name: "About Us", href: "/about" },
                { name: "Our Services", href: "/services" },
                { name: "Service Areas", href: "/areas" },
                { name: "Contact Team", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="transition-colors hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="mt-8 mb-4 font-heading text-lg font-semibold uppercase tracking-widest text-white">
              Service Areas
            </h3>
            <ul className="space-y-3 text-sm font-medium">
              {[
                { name: "Bayside", href: "/areas#bayside" },
                { name: "Inner East", href: "/areas#inner-east" },
                { name: "Inner North", href: "/areas#inner-north" },
                { name: "Inner West", href: "/areas#inner-west" },
                { name: "South East", href: "/areas#south-east" },
                { name: "Western Suburbs", href: "/areas#western-suburbs" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="transition-colors hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-6 font-heading text-lg font-semibold uppercase tracking-widest text-white">
              Get in Touch
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-4">
                <div className="rounded-full bg-warm-200/10 p-2 text-warm-300">
                  <MapPin className="h-4 w-4" />
                </div>
                <span className="mt-1">Melbourne, Victoria</span>
              </li>
              <li className="flex items-start gap-4">
                <div className="rounded-full bg-warm-200/10 p-2 text-warm-300">
                  <Mail className="h-4 w-4" />
                </div>
                <a href="mailto:info@mekhomes.com.au" className="mt-1 transition-colors hover:text-white">
                  info@mekhomes.com.au
                </a>
              </li>
              <li className="flex items-start gap-4">
                <div className="rounded-full bg-warm-200/10 p-2 text-warm-300">
                  <Phone className="h-4 w-4" />
                </div>
                <a href="tel:0400000000" className="mt-1 transition-colors hover:text-white">
                  0400 000 000
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-20 border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-medium text-warm-300/60">
          <p>&copy; {new Date().getFullYear()} MEK Homes. All rights reserved.</p>
          <div className="flex gap-4">
            <span>Licensed Carpenters</span>
            <span>&bull;</span>
            <span>Fully Insured</span>
            <span>&bull;</span>
            <span>Melbourne, VIC</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
