import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import { getServiceBySlug, getAllServiceSlugs } from "@/data/services";
import { suburbs } from "@/data/suburbs";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQAccordion from "@/components/FAQAccordion";
import ContactFormEmbed from "@/components/ContactFormEmbed";
import ScrollAnimation from "@/components/ScrollAnimation";
import GallerySection from "@/components/GallerySection";

export function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: service.metaTitle,
    description: service.metaDescription,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  return (
    <>
      {/* Hero */}
      <section className="bg-[#111111] section-padding">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: service.title },
            ]}
          />
          <h1 className="mt-4 text-4xl md:text-5xl font-heading font-bold text-white">
            {service.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/50">
            {service.description}
          </p>
          <div className="mt-8">
            <Link href="#contact-form" className="btn-primary inline-flex">
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-[#F7F7F7]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">

            {/* Left Column */}
            <div className="lg:w-2/3">
              {/* Long Description */}
              <p className="text-[#444444] leading-relaxed text-lg">
                {service.longDescription}
              </p>

              {/* Features */}
              <ScrollAnimation className="mt-12">
                <h2 className="text-2xl md:text-3xl font-heading font-bold mb-6 text-[#111111]">
                  What&apos;s Included
                </h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#111111] mt-0.5 shrink-0" />
                      <span className="text-[#444444]">{feature}</span>
                    </li>
                  ))}
                </ul>
              </ScrollAnimation>

              {/* Gallery */}
              <ScrollAnimation className="mt-12">
                <h2 className="text-2xl md:text-3xl font-heading font-bold mb-6 text-[#111111]">
                  Our Work
                </h2>
                <GallerySection
                  images={service.galleryImages}
                  title={service.title}
                />
              </ScrollAnimation>

              {/* FAQ */}
              <ScrollAnimation className="mt-12">
                <h2 className="text-2xl md:text-3xl font-heading font-bold mb-6 text-[#111111]">
                  Frequently Asked Questions
                </h2>
                <FAQAccordion faqs={service.faqs} />
              </ScrollAnimation>
            </div>

            {/* Right Sticky Column */}
            <div className="lg:w-1/3">
              <div className="sticky top-24 bg-white border border-[#E5E5E5] rounded-2xl p-6">
                {/* Service Image */}
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl mb-6">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                </div>

                <p className="font-heading font-semibold text-lg mb-4 text-[#111111]">
                  Ready to transform your space?
                </p>

                <div className="flex flex-col gap-3">
                  <Link href="#contact-form" className="btn-primary text-center">
                    Get a Free Quote
                  </Link>
                  <a href="tel:0400000000" className="btn-outline text-center">
                    Call 0400 000 000
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Where We Offer */}
      {(() => {
        const featuredRegions = ["Inner East", "Bayside", "Inner South", "Inner North"];
        const grouped = featuredRegions.reduce<Record<string, { name: string; slug: string }[]>>(
          (acc, region) => {
            acc[region] = suburbs
              .filter((s) => s.region === region)
              .slice(0, 4)
              .map((s) => ({ name: s.name, slug: s.slug }));
            return acc;
          },
          {}
        );
        return (
          <section className="section-padding bg-[#F7F7F7]">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-[#111111] mb-8">
                Where We Offer {service.title}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {featuredRegions.map((region) => (
                  <div key={region}>
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-[#999999] mb-3">
                      {region}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {grouped[region].map((suburb) => (
                        <Link
                          key={suburb.slug}
                          href={`/areas/${suburb.slug}`}
                          className="inline-block rounded-full border border-[#E5E5E5] bg-white px-4 py-1.5 text-sm text-[#444444] transition-colors hover:border-[#111111] hover:text-[#111111]"
                        >
                          {suburb.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link
                  href="/areas"
                  className="inline-flex items-center text-sm font-medium text-[#444444] hover:text-[#111111] transition-colors"
                >
                  View all areas &rarr;
                </Link>
              </div>
            </div>
          </section>
        );
      })()}

      {/* Contact Form */}
      <section id="contact-form" className="section-padding bg-[#0A0A0A]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-[#141414] rounded-2xl p-8">
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-6 text-white">
              Get a Quote for {service.title}
            </h2>
            <ContactFormEmbed preselectedService={service.contactFormValue} variant="dark" />
          </div>
        </div>
      </section>
    </>
  );
}
