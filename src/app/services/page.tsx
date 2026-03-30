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
      <section className="bg-[#111111] section-padding">
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <ScrollAnimation key={service.slug} delay={(i % 2) * 0.1}>
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="bg-white border border-[#E5E5E5] rounded-2xl hover:shadow-lg hover:border-[#CCCCCC] hover:-translate-y-1 transition-all duration-300 overflow-hidden block"
              >
                {/* Image */}
                <div
                  className={`relative overflow-hidden rounded-t-2xl ${
                    i % 2 === 0 ? "aspect-[16/9]" : "aspect-[4/3]"
                  }`}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                {/* Card Body */}
                <div className="p-6">
                  <h2 className="text-xl font-heading font-semibold text-[#111111]">
                    {service.title}
                  </h2>
                  <p className="mt-2 text-[#444444] line-clamp-2 mb-4">
                    {service.description}
                  </p>

                  {/* Feature Pills */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.features.slice(0, 3).map((feature) => (
                      <span
                        key={feature}
                        className="rounded-full bg-[#F0F0F0] px-3 py-1 text-xs text-[#666666]"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <span className="text-sm font-medium flex items-center gap-1 text-[#111111]">
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
      <section className="section-padding bg-white text-black text-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-black">
            Ready to Get Started?
          </h2>
          <p className="mt-4 mx-auto max-w-xl text-black/70 text-lg">
            Contact MEK Homes today for a free, no-obligation quote on any of
            our carpentry and renovation services.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-black px-6 py-3 font-medium text-white hover:bg-gray-800 hover:scale-[1.02] transition-all duration-200"
            >
              Request a Free Quote
            </Link>
            <Link
              href="tel:0400000000"
              className="inline-flex items-center justify-center rounded-xl border-2 border-black px-6 py-3 font-medium text-black hover:bg-black hover:text-white hover:scale-[1.02] transition-all duration-200"
            >
              Call 0400 000 000
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
