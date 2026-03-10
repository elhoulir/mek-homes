"use client";

import { useState } from "react";
import { motion, LayoutGroup } from "framer-motion";
import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import ProjectFilter from "@/components/ProjectFilter";
import Breadcrumbs from "@/components/Breadcrumbs";
import { projects } from "@/data/projects";
import { services } from "@/data/services";

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const categories = [
    { slug: "all", label: "All" },
    ...services.map((s) => ({ slug: s.slug, label: s.title })),
  ];

  const filtered =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.serviceType === activeFilter);

  return (
    <>
      {/* Hero */}
      <section className="section-padding bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Breadcrumbs
            items={[{ label: "Home", href: "/" }, { label: "Projects" }]}
          />
          <h1 className="mt-6 text-4xl md:text-5xl font-heading font-bold text-white">
            Our Projects
          </h1>
          <p className="mt-4 text-lg text-white/50">
            Explore our portfolio of completed renovations across Melbourne
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-8">
        <ProjectFilter
          categories={categories}
          active={activeFilter}
          onChange={setActiveFilter}
        />
      </div>

      {/* Projects Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 section-padding">
        <LayoutGroup>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filtered.map((project) => (
              <motion.div key={project.slug} layout>
                <ProjectCard
                  slug={project.slug}
                  title={project.title}
                  description={project.description}
                  location={project.location}
                  serviceType={project.serviceType}
                  image={project.image}
                />
              </motion.div>
            ))}
          </div>
        </LayoutGroup>
      </section>

      {/* Bottom CTA */}
      <section className="bg-white section-padding text-black text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-black">
            Have a Project in Mind?
          </h2>
          <p className="mt-4 text-lg text-black/70">
            Let&apos;s bring your vision to life with expert craftsmanship and
            attention to detail.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-black text-white px-6 py-3 font-medium hover:bg-gray-800 transition-colors w-full sm:w-auto"
            >
              Get a Free Quote
            </Link>
            <a
              href="tel:0400000000"
              className="inline-flex items-center justify-center rounded-xl border-2 border-black text-black px-6 py-3 font-medium hover:bg-black hover:text-white transition-colors w-full sm:w-auto"
            >
              Call 0400 000 000
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
