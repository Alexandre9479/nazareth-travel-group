"use client";
import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

interface Photo {
  src: string;
  alt: string;
  dest?: string;
}

interface GalleryLightboxProps {
  photos: Photo[];
}

export default function GalleryLightbox({ photos }: GalleryLightboxProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = useCallback(() => setActiveIndex(null), []);

  const prev = useCallback(() => {
    setActiveIndex((i) => (i === null ? null : (i - 1 + photos.length) % photos.length));
  }, [photos.length]);

  const next = useCallback(() => {
    setActiveIndex((i) => (i === null ? null : (i + 1) % photos.length));
  }, [photos.length]);

  // Keyboard nav
  useEffect(() => {
    if (activeIndex === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [activeIndex, close, prev, next]);

  // Lock scroll
  useEffect(() => {
    if (activeIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [activeIndex]);

  return (
    <>
      {/* Masonry grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
        {photos.map((photo, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className="break-inside-avoid relative overflow-hidden rounded-xl group cursor-zoom-in block w-full text-left"
            aria-label={`View ${photo.alt}`}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              width={400}
              height={i % 3 === 0 ? 500 : 300}
              className="w-full h-auto block transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-end">
              <div className="p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 w-full">
                {photo.dest && (
                  <p className="text-white text-xs font-body font-semibold uppercase tracking-widest">
                    {photo.dest}
                  </p>
                )}
                <p className="text-stone-200 text-sm font-body mt-0.5">{photo.alt}</p>
              </div>
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn className="h-4 w-4 text-white" />
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center"
            onClick={close}
          >
            {/* Close */}
            <button
              onClick={close}
              className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
              aria-label="Close lightbox"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Counter */}
            <div className="absolute top-5 left-5 text-white/60 font-body text-sm">
              {activeIndex + 1} / {photos.length}
            </div>

            {/* Prev */}
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            {/* Next */}
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
              aria-label="Next image"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Image */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.25 }}
                className="relative max-w-5xl max-h-[85vh] mx-16 flex items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={photos[activeIndex].src}
                  alt={photos[activeIndex].alt}
                  width={1200}
                  height={800}
                  className="max-h-[85vh] w-auto object-contain rounded-xl shadow-2xl"
                  priority
                />
                {/* Caption */}
                <div className="absolute bottom-0 inset-x-0 bg-linear-to-t from-black/70 to-transparent rounded-b-xl px-5 py-4">
                  {photos[activeIndex].dest && (
                    <p className="text-gold-300 text-xs font-body font-semibold uppercase tracking-widest mb-0.5">
                      {photos[activeIndex].dest}
                    </p>
                  )}
                  <p className="text-white text-sm font-body">{photos[activeIndex].alt}</p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Thumbnails strip */}
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 overflow-x-auto max-w-[90vw] px-4 py-2">
              {photos.map((p, i) => (
                <button
                  key={i}
                  onClick={(e) => { e.stopPropagation(); setActiveIndex(i); }}
                  className={`shrink-0 w-12 h-12 rounded-lg overflow-hidden transition-all ${
                    i === activeIndex
                      ? "ring-2 ring-gold-400 opacity-100"
                      : "opacity-40 hover:opacity-70"
                  }`}
                  aria-label={`View photo ${i + 1}`}
                >
                  <Image
                    src={p.src}
                    alt=""
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
