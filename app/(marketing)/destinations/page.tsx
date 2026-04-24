import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import Section from "@/components/shared/Section";
import SectionHeader from "@/components/shared/SectionHeader";
import CTAStrip from "@/components/home/CTAStrip";
import { getDestinations } from "@/lib/sanity/fetch";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Sacred Destinations",
  description:
    "Explore the world's most sacred Christian destinations — Jerusalem, Bethlehem, Rome, Petra, Galilee and more.",
};

export default async function DestinationsPage() {
  const destinations = await getDestinations();
  return (
    <>
      <div className="relative bg-olive-900 py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <Image
            src="https://images.unsplash.com/photo-1601058272524-14e7948e4fba?w=1200&q=70"
            alt=""
            fill
            className="object-cover"
            aria-hidden
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 md:px-12 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-300 font-body mb-3">Sacred Ground</p>
          <div className="gold-divider mx-auto mb-5" />
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-light text-white mb-5">
            The world&apos;s most sacred places
          </h1>
          <p className="text-stone-300 font-body text-lg max-w-2xl mx-auto">
            From Jerusalem&apos;s eternal city walls to the rose-red cliffs of Petra —
            each destination holds centuries of faith, scripture, and encounter.
          </p>
        </div>
      </div>

      <Section className="bg-stone-50">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {destinations.map((dest) => (
            <Link
              key={dest.id}
              href={`/destinations/${dest.slug}`}
              className="card-lift group block rounded-2xl overflow-hidden bg-white border border-stone-200 shadow-sm"
            >
              <div className="img-zoom-container relative h-56">
                <Image
                  src={dest.image}
                  alt={dest.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-xs font-body text-stone-300 flex items-center gap-1 mb-1">
                    <MapPin className="h-3 w-3" /> {dest.country}
                  </p>
                  <h2 className="font-display text-2xl font-light text-white">{dest.name}</h2>
                </div>
              </div>
              <div className="p-5">
                <p className="text-sm text-gold-500 font-body italic mb-2">{dest.tagline}</p>
                <p className="text-sm text-ink-500 font-body line-clamp-3 leading-relaxed mb-4">
                  {dest.description}
                </p>
                {dest.scripture && (
                  <blockquote className="border-l-2 border-gold-400 pl-3 text-xs font-display italic text-ink-500">
                    {dest.scripture}
                  </blockquote>
                )}
                <div className="mt-4 flex items-center gap-1 text-xs font-body font-semibold text-olive-600 group-hover:gap-2 transition-all">
                  Explore {dest.name}
                  <ArrowRight className="h-3.5 w-3.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <CTAStrip />
    </>
  );
}
