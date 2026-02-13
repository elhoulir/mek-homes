import Link from "next/link";
import Image from "next/image";
import ServiceCard from "@/components/ServiceCard";

const homeServices = [
  {
    slug: "home-renovations",
    title: "Home Renovations",
    description:
      "Complete home renovations from design to completion. We transform outdated spaces into modern, functional homes.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    slug: "custom-carpentry",
    title: "Custom Carpentry",
    description:
      "Bespoke cabinetry, built-in wardrobes, shelving, and custom timber work crafted to your exact specifications.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    ),
  },
  {
    slug: "decking-pergolas",
    title: "Decking & Pergolas",
    description:
      "Beautiful outdoor living spaces with quality timber decking, pergolas, and entertaining areas built to last.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
  {
    slug: "kitchen-renovations",
    title: "Kitchen & Bathroom",
    description:
      "Expert kitchen and bathroom renovations that blend style with functionality. Full project management included.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    slug: "structural-carpentry",
    title: "Structural Work",
    description:
      "Load-bearing walls, framing, roofing, and structural repairs carried out safely by experienced professionals.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
  },
  {
    slug: "doors-windows",
    title: "Doors & Windows",
    description:
      "Professional installation and replacement of doors, windows, and frames. Improve energy efficiency and aesthetics.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
  },
];

const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "500+", label: "Projects Completed" },
  { value: "100%", label: "Fully Insured" },
  { value: "5★", label: "Customer Rating" },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-navy-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDE2djhoLThWOGg4djhoOFYwaC04djhIMHYtOGg4VjBoOHYxNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-50" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-40 lg:px-8">
          <div className="max-w-2xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-gold-400">
              Melbourne&apos;s Trusted Carpenters
            </p>
            <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Quality Carpentry &{" "}
              <span className="text-gold-400">Renovations</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-300">
              MEK Homes delivers expert carpentry and renovation services across
              Melbourne. From custom builds to complete home transformations, we
              bring craftsmanship and reliability to every project.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-gold-600 px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-navy-800"
              >
                Get a Free Quote
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-lg border border-slate-600 px-8 py-3.5 text-base font-semibold text-slate-200 transition-colors hover:border-slate-400 hover:text-white"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 py-10 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-gold-600">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-slate-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-slate-50 py-12 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-gold-600">
              What We Do
            </p>
            <h2 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
              Our Services
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-500">
              We provide a complete range of carpentry and renovation services
              for homes across Melbourne and surrounding areas.
            </p>
          </div>
          <div className="mt-10 sm:mt-14 grid gap-3 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {homeServices.map((service, i) => (
              <div key={service.slug} className={i >= 3 ? "hidden sm:block" : ""}>
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  href={`/services/${service.slug}`}
                />
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-gold-600 transition-colors hover:text-navy-900"
            >
              View All Services
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

      {/* Why Choose Us */}
      <section className="bg-white py-12 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-gold-600">
                Why MEK Homes
              </p>
              <h2 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
                Melbourne&apos;s Trusted Carpentry Professionals
              </h2>
              <p className="mt-4 leading-relaxed text-slate-500">
                With over 15 years of experience in Melbourne&apos;s building
                industry, MEK Homes has built a reputation for delivering
                exceptional carpentry and renovation work on time and on budget.
              </p>
              <ul className="mt-6 sm:mt-8 space-y-3 sm:space-y-4">
                {[
                  "Licensed and fully insured carpenters",
                  "Free quotes and transparent pricing",
                  "Quality materials and workmanship guaranteed",
                  "On-time project delivery",
                  "Full project management from start to finish",
                  "Servicing all suburbs across Melbourne",
                ].map((item, i) => (
                  <li key={item} className={`flex items-start gap-3${i >= 4 ? " hidden sm:flex" : ""}`}>
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
                    <span className="text-slate-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative hidden lg:block">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"
                  alt="Quality home renovation by MEK Homes"
                  fill
                  className="object-cover"
                  sizes="50vw"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 rounded-xl bg-gold-600 p-6 text-white shadow-lg">
                <p className="text-3xl font-bold">15+</p>
                <p className="text-sm">Years of Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-navy-900">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-20 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Ready to Start Your Project?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-slate-300">
              Get in touch with MEK Homes today for a free, no-obligation quote.
              We service all areas across Melbourne and surrounding suburbs.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-3.5 text-base font-semibold text-navy-900 transition-colors hover:bg-slate-100"
              >
                Get Your Free Quote
              </Link>
              <a
                href="tel:0400000000"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-gold-400/30 px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-navy-800"
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
