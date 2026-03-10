"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

interface ServiceCardProps {
  title: string;
  description: string;
  href?: string;
  index?: number;
  image?: string;
}

export default function ServiceCard({
  title,
  description,
  href,
  index = 0,
  image,
}: ServiceCardProps) {
  const content = (
    <>
      {image && (
        <div className="relative w-full aspect-[16/9] overflow-hidden rounded-t-2xl">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
      )}
      <div className="flex flex-col flex-1 p-8">
        <h3 className="font-heading font-semibold text-xl text-white">
          {title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed line-clamp-2 text-white/50">
          {description}
        </p>
        {href && (
          <div className="mt-6">
            <span className="text-sm font-medium text-white inline-flex items-center gap-1 hover:translate-x-1 transition-transform">
              Learn More →
            </span>
          </div>
        )}
      </div>
    </>
  );

  if (href) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="h-full"
      >
        <Link href={href} className="group warm-card flex flex-col h-full overflow-hidden p-0">
          {content}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group warm-card flex flex-col h-full overflow-hidden p-0"
    >
      {content}
    </motion.div>
  );
}
