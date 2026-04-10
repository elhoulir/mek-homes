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

              {/* Our Process */}
              <ScrollAnimation className="mt-12">
                <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4 text-[#111111]">
                  Our Process
                </h2>
                <p className="text-[#444444] leading-relaxed text-lg">
                  {service.processDescription}
                </p>
              </ScrollAnimation>

              {/* Why Choose MEK for this service */}
              <ScrollAnimation className="mt-12">
                <div className="rounded-2xl bg-[#0A0A0A] p-6 sm:p-8">
                  <h2 className="text-xl md:text-2xl font-heading font-bold mb-5 text-white">
                    Why Choose MEK for {service.title}
                  </h2>
                  <ul className="space-y-4">
                    {service.whyChoose.map((point) => (
                      <li key={point} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-white mt-0.5 shrink-0" />
                        <span className="text-white/80">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollAnimation>

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

            {/* Right Sticky Column — Contact Form */}
            <div className="lg:w-1/3">
              <div className="lg:sticky lg:top-24">
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <div className="bg-[#0A0A0A] px-6 py-5">
                    <h3 className="text-lg font-heading font-bold text-white mb-1">
                      Get a Free Quote
                    </h3>
                    <p className="text-white/50 text-sm">
                      Tell us about your {service.title.toLowerCase()} project
                    </p>
                  </div>
                  <div className="bg-white px-6 py-6">
                    <ContactFormEmbed variant="light" preselectedService={service.contactFormValue} />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Where We Offer */}
      {(() => {
        const featuredRegions = ["Inner East", "Bayside", "Inner South", "Inner North"];
        const allSuburbs = featuredRegions.flatMap((region) =>
          suburbs
            .filter((s) => s.region === region)
            .slice(0, 4)
            .map((s) => ({ name: s.name, slug: s.slug }))
        );
        return (
          <section className="py-14 bg-[#F7F7F7]">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex flex-wrap items-end justify-between gap-3 mb-5">
                <h2 className="text-xl md:text-2xl font-heading font-bold text-[#111111]">
                  Where We Offer {service.title}
                </h2>
                <Link
                  href="/areas"
                  className="text-sm font-semibold text-[#111111] underline underline-offset-4 decoration-[#CCCCCC] hover:decoration-[#111111]"
                >
                  View all areas &rarr;
                </Link>
              </div>
              <div className="flex flex-wrap gap-2">
                {allSuburbs.map((suburb) => (
                  <Link
                    key={suburb.slug}
                    href={`/areas/${suburb.slug}`}
                    className="inline-block rounded-full border border-[#E5E5E5] bg-white px-3.5 py-1.5 text-sm text-[#444444] transition-colors hover:border-[#111111] hover:text-[#111111]"
                  >
                    {suburb.name}
                  </Link>
                ))}
              </div>
            </div>
          </section>
        );
      })()}
    </>
  );
}
