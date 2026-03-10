"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, ImageIcon } from "lucide-react";

interface ProjectCardProps {
  slug: string;
  title: string;
  description: string;
  location: string;
  serviceType: string;
  image?: string;
}

export default function ProjectCard({
  slug,
  title,
  description,
  location,
  serviceType,
  image,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="h-full"
    >
      <Link
        href={`/projects/${slug}`}
        className="group relative block aspect-[4/3] rounded-2xl overflow-hidden"
      >
        {/* Image */}
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-warm-100">
            <ImageIcon className="h-12 w-12 text-warm-300" />
          </div>
        )}

        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* Content overlaid at bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <div className="flex items-center gap-1.5 text-xs font-medium text-white/80 mb-2">
            <MapPin className="h-3.5 w-3.5" />
            <span>{location}</span>
            <span className="ml-2 text-white/60">· {serviceType}</span>
          </div>
          <h3 className="font-heading font-semibold text-lg leading-snug">
            {title}
          </h3>
          <p className="mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm text-white/80">
            View Project →
          </p>
        </div>
      </Link>
    </motion.div>
  );
}
