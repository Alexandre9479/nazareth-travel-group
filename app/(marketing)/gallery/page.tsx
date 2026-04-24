import type { Metadata } from "next";
import Section from "@/components/shared/Section";
import CTAStrip from "@/components/home/CTAStrip";
import GalleryLightbox from "@/components/gallery/GalleryLightbox";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Photos from our Holy Land, Rome, Egypt and Jordan pilgrimages.",
};

const GALLERY_PHOTOS = [
  { src: "https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?w=800&q=80", alt: "Jerusalem Old City at sunset", dest: "Jerusalem" },
  { src: "https://images.unsplash.com/photo-1601058272524-14e7948e4fba?w=800&q=80", alt: "Dome of the Rock from the Mount of Olives", dest: "Jerusalem" },
  { src: "https://images.unsplash.com/photo-1594007693440-b42a9cce1e52?w=800&q=80", alt: "Church of the Nativity, Bethlehem", dest: "Bethlehem" },
  { src: "https://images.unsplash.com/photo-1578895101408-1a36b834405b?w=800&q=80", alt: "Petra Treasury, Jordan", dest: "Petra" },
  { src: "https://images.unsplash.com/photo-1504093376055-b3094b660b3e?w=800&q=80", alt: "Sea of Galilee at dawn", dest: "Galilee" },
  { src: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&q=80", alt: "St. Peter's Basilica, Rome", dest: "Rome" },
  { src: "https://images.unsplash.com/photo-1539768942893-daf53e448371?w=800&q=80", alt: "Pyramids of Giza, Egypt", dest: "Egypt" },
  { src: "https://images.unsplash.com/photo-1555993539-1732b0258235?w=800&q=80", alt: "Acropolis, Athens", dest: "Greece" },
  { src: "https://images.unsplash.com/photo-1597696929736-6d13bed8e6a8?w=800&q=80", alt: "Nazareth hilltop view", dest: "Nazareth" },
  { src: "https://images.unsplash.com/photo-1562564055-71e051d33c19?w=800&q=80", alt: "Ancient ruins at Jericho", dest: "Jericho" },
  { src: "https://images.unsplash.com/photo-1531572753322-ad063cecc140?w=800&q=80", alt: "Assisi hillside, Italy", dest: "Italy" },
  { src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80", alt: "Pilgrims gathered in prayer", dest: "Jerusalem" },
];

export default function GalleryPage() {
  return (
    <>
      <div className="bg-olive-900 py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-12 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-300 font-body mb-3">Gallery</p>
          <div className="gold-divider mx-auto mb-5" />
          <h1 className="font-display text-4xl sm:text-5xl font-light text-white mb-5">
            Moments from the journey
          </h1>
          <p className="text-stone-300 font-body text-lg max-w-xl mx-auto">
            Click any photo to explore it in full. A glimpse of the sacred
            destinations and precious moments our pilgrims have experienced.
          </p>
        </div>
      </div>

      <Section className="bg-stone-50">
        <GalleryLightbox photos={GALLERY_PHOTOS} />
        <div className="text-center mt-12">
          <p className="font-body text-ink-500 text-sm">
            More photos on our{" "}
            <a href="#" className="text-olive-600 underline underline-offset-2 hover:text-olive-700">
              Instagram
            </a>{" "}
            &amp;{" "}
            <a href="#" className="text-olive-600 underline underline-offset-2 hover:text-olive-700">
              Facebook
            </a>{" "}
            pages.
          </p>
        </div>
      </Section>

      <CTAStrip />
    </>
  );
}
