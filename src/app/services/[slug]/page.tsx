import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  services,
  getServiceBySlug,
  getAllServiceSlugs,
} from "@/data/services";
import { getProjectsByServiceType } from "@/data/projects";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQAccordion from "@/components/FAQAccordion";
import ContactFormEmbed from "@/components/ContactFormEmbed";
import ProjectCard from "@/components/ProjectCard";

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

  const relatedProjects = getProjectsByServiceType(slug).slice(0, 3);

  return (
    <>
      {/* Page Header */}
      <section className="bg-navy-900 py-12 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: service.title },
            ]}
          />
          <h1 className="mt-2 text-4xl font-bold text-white sm:text-5xl">
            {service.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-300">
            {service.description.split(".")[0]}.
          </p>
        </div>
      </section>

      {/* Service Overview */}
      <section className="bg-white py-12 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                About This Service
              </h2>
              <p className="mt-4 leading-relaxed text-slate-500">
                {service.longDescription}
              </p>
              <Link
                href="#contact-form"
                className="mt-6 inline-flex items-center justify-center rounded-lg bg-gold-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-navy-800"
              >
                Get a Free Quote
              </Link>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-slate-50 py-12 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            What&apos;s Included
          </h2>
          <p className="mt-2 text-slate-500">
            Our {service.title.toLowerCase()} service covers the following:
          </p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {service.features.map((feature) => (
              <li key={feature} className="flex items-start gap-3">
                <svg
                  className="mt-0.5 h-5 w-5 shrink-0 text-gold-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-slate-600">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Gallery Placeholders */}
      <section className="bg-white py-12 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            Our Work
          </h2>
          <p className="mt-2 text-slate-500">
            Examples of our {service.title.toLowerCase()} projects across
            Melbourne.
          </p>
          <div className="mt-6 sm:mt-8 grid grid-cols-2 gap-3 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {service.galleryImages.map((img, i) => (
              <div
                key={i}
                className={`relative aspect-[4/3] overflow-hidden rounded-xl${i >= 2 ? " hidden sm:block" : ""}`}
              >
                <Image
                  src={img}
                  alt={`${service.title} project photo ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50 py-12 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-2 text-slate-500">
              Common questions about our {service.title.toLowerCase()} service.
            </p>
            <div className="mt-8">
              <FAQAccordion faqs={service.faqs} />
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="bg-white py-12 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              Related Projects
            </h2>
            <p className="mt-2 text-slate-500">
              See some of our completed {service.title.toLowerCase()} projects.
            </p>
            <div className="mt-6 sm:mt-8 grid gap-3 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {relatedProjects.map((project, i) => (
                <div key={project.slug} className={i >= 2 ? "hidden sm:block" : ""}>
                  <ProjectCard
                    slug={project.slug}
                    title={project.title}
                    description={project.description}
                    location={project.location}
                    serviceType={project.serviceType}
                    image={project.image}
                  />
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-sm font-semibold text-gold-600 transition-colors hover:text-navy-900"
              >
                View All Projects
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
            </div>
          </div>
        </section>
      )}

      {/* Contact Form */}
      <section id="contact-form" className="bg-slate-50 py-12 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                Get a Quote for {service.title}
              </h2>
              <p className="mt-2 text-slate-500">
                Fill out the form below and we&apos;ll get back to you within 24
                hours with a free quote.
              </p>
              <div className="mt-8">
                <ContactFormEmbed
                  preselectedService={service.contactFormValue}
                />
              </div>
            </div>
            <div className="lg:col-span-2">
              <div className="rounded-xl bg-white p-8 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">
                  Quick Contact
                </h3>
                <div className="mt-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <svg
                      className="mt-0.5 h-5 w-5 shrink-0 text-gold-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <div>
                      <p className="text-sm font-medium text-slate-900">
                        Phone
                      </p>
                      <a
                        href="tel:0400000000"
                        className="text-sm text-gold-600 hover:text-navy-900"
                      >
                        0400 000 000
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg
                      className="mt-0.5 h-5 w-5 shrink-0 text-gold-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <div>
                      <p className="text-sm font-medium text-slate-900">
                        Email
                      </p>
                      <a
                        href="mailto:info@mekhomes.com.au"
                        className="text-sm text-gold-600 hover:text-navy-900"
                      >
                        info@mekhomes.com.au
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg
                      className="mt-0.5 h-5 w-5 shrink-0 text-gold-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <div>
                      <p className="text-sm font-medium text-slate-900">
                        Hours
                      </p>
                      <p className="text-sm text-slate-500">
                        Mon-Fri 7am - 5pm
                      </p>
                      <p className="text-sm text-slate-500">Sat 8am - 1pm</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 rounded-lg bg-gold-50 p-4">
                  <p className="text-sm font-medium text-gold-800">
                    Free Quotes
                  </p>
                  <p className="mt-1 text-xs text-navy-900">
                    All quotes are free with no obligation. We&apos;ll visit
                    your property and provide a detailed written quote.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-900 py-10 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white">
            Ready to Get Started?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-300">
            Contact MEK Homes today for a free, no-obligation quote on your{" "}
            {service.title.toLowerCase()} project.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="tel:0400000000"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-8 py-3.5 text-base font-semibold text-navy-900 transition-colors hover:bg-slate-100"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              Call 0400 000 000
            </a>
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-lg border border-gold-400/30 px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-navy-800"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
