import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { services } from "@/data/services";
import Breadcrumbs from "@/components/Breadcrumbs";
import ScrollAnimation from "@/components/ScrollAnimation";

export const metadata: Metadata = {
  title: "Our Services | MEK Homes - Carpentry & Renovations Melbourne",
  description:
    "Explore MEK Homes' full range of carpentry and renovation services in Melbourne. Home renovations, custom carpentry, decking, kitchens, bathrooms, and more.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0A0A0A] section-padding">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Our Services" },
            ]}
          />
          <h1 className="mt-4 text-4xl md:text-5xl font-heading font-bold text-white">
            Our Services
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/50">
            MEK Homes offers a comprehensive range of carpentry and renovation
            services across Melbourne. Every project is delivered with quality
            craftsmanship and attention to detail.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-[#F7F7F7]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <ScrollAnimation key={service.slug} delay={(i % 3) * 0.1}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group block rounded-2xl bg-white border border-[#E5E5E5] overflow-hidden h-full hover:shadow-lg hover:border-[#CCCCCC] hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="relative w-full aspect-[16/10] overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-5">
                    <h2 className="text-[#111111] font-heading font-semibold text-lg">
                      {service.title}
                    </h2>
                    <p className="mt-2 text-sm text-[#444444] line-clamp-2">
                      {service.description}
                    </p>
                    <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-[#111111] group-hover:translate-x-1 transition-transform">
                      Learn More →
                    </span>
                  </div>
                </Link>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section-padding bg-[#0A0A0A] text-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">
            Ready to Get Started?
          </h2>
          <p className="mt-4 mx-auto max-w-xl text-white/70 text-lg">
            Contact MEK Homes today for a free, no-obligation quote on any of
            our carpentry and renovation services.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 font-medium text-black hover:bg-gray-100 hover:scale-[1.02] transition-all duration-200"
            >
              Request a Free Quote
            </Link>
            <Link
              href="tel:0400000000"
              className="inline-flex items-center justify-center rounded-xl border-2 border-white px-6 py-3 font-medium text-white hover:bg-white hover:text-black hover:scale-[1.02] transition-all duration-200"
            >
              Call 0400 000 000
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
