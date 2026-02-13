import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Our Services | MEK Homes - Carpentry & Renovations Melbourne",
  description:
    "Explore MEK Homes' full range of carpentry and renovation services in Melbourne. Home renovations, custom carpentry, decking, kitchens, bathrooms, and more.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-navy-900 py-12 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-gold-400">
            Our Services
          </p>
          <h1 className="mt-2 text-4xl font-bold text-white sm:text-5xl">
            Carpentry & Renovation Services
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-300">
            MEK Homes offers a comprehensive range of carpentry and renovation
            services across Melbourne. Every project is delivered with quality
            craftsmanship and attention to detail.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="bg-white py-12 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-12 sm:space-y-20">
            {services.map((service, i) => (
              <div
                key={service.slug}
                className="grid items-start gap-6 sm:gap-12 lg:grid-cols-2"
              >
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                    {service.title}
                  </h2>
                  <p className="mt-4 leading-relaxed text-slate-500">
                    {service.description}
                  </p>
                  <div className="mt-6 flex flex-wrap items-center gap-4">
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-gold-600 transition-colors hover:text-navy-900"
                    >
                      Learn more
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </Link>
                    <span className="text-slate-300">|</span>
                    <Link
                      href={`/services/${service.slug}#contact-form`}
                      className="text-sm font-medium text-slate-500 transition-colors hover:text-slate-700"
                    >
                      Get a quote
                    </Link>
                  </div>
                </div>
                <div
                  className={`relative aspect-[3/2] sm:aspect-[4/3] overflow-hidden rounded-xl ${
                    i % 2 === 1 ? "lg:order-1" : ""
                  }`}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-900 py-10 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white">
            Need a Carpenter in Melbourne?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-300">
            Contact MEK Homes today for a free, no-obligation quote on any of
            our carpentry and renovation services.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center justify-center rounded-lg bg-white px-8 py-3.5 text-base font-semibold text-navy-900 transition-colors hover:bg-slate-100"
          >
            Request a Free Quote
          </Link>
        </div>
      </section>
    </>
  );
}
