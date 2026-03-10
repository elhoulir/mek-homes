"use client";

import { useState } from "react";
import Image from "next/image";
import ImageLightbox from "@/components/ImageLightbox";

interface GallerySectionProps {
  images: string[];
  title: string;
}

export default function GallerySection({ images, title }: GallerySectionProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  return (
    <>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => {
              setLightboxIndex(i);
              setLightboxOpen(true);
            }}
            className="group relative aspect-square overflow-hidden rounded-2xl bg-warm-100 focus:outline-none focus:ring-2 focus:ring-black"
          >
            <Image
              src={img}
              alt={`${title} gallery image ${i + 1}`}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20" />
          </button>
        ))}
      </div>
      <ImageLightbox
        images={images}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={setLightboxIndex}
      />
    </>
  );
}
