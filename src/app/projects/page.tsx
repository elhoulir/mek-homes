import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export const metadata: Metadata = {
  title: "Our Projects | MEK Homes - Carpentry & Renovations Melbourne",
  description:
    "Browse our portfolio of completed carpentry and renovation projects across Melbourne. Kitchens, bathrooms, decking, custom carpentry, and more.",
};

export default function ProjectsPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-navy-900 py-12 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-gold-400">
            Our Work
          </p>
          <h1 className="mt-2 text-4xl font-bold text-white sm:text-5xl">
            Featured Projects
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-300">
            Browse our portfolio of completed carpentry and renovation projects
            across Melbourne. Every project showcases our commitment to quality
            craftsmanship and attention to detail.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="bg-white py-12 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-3 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard
                key={project.slug}
                slug={project.slug}
                title={project.title}
                description={project.description}
                location={project.location}
                serviceType={project.serviceType}
                image={project.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-900 py-10 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white">
            Want Results Like These?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-300">
            Get in touch with MEK Homes today. We&apos;ll discuss your project
            and provide a free, no-obligation quote.
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
