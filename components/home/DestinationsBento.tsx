"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Section from "@/components/shared/Section";
import SectionHeader from "@/components/shared/SectionHeader";
import { DESTINATIONS } from "@/lib/data";

export default function DestinationsBento() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const destinations = DESTINATIONS.slice(0, 6);
  const [hero, ...rest] = destinations;

  return (
    <Section className="bg-stone-100" id="destinations">
      <SectionHeader
        eyebrow="Sacred Ground"
        title="Where will your spirit journey?"
        subtitle="Seven of the world's most sacred destinations — each one waiting to deepen your faith, open your heart, and bring the Scriptures alive."
        className="mb-12"
      />

      <div ref={ref} className="flex flex-col gap-4">
        {/* Hero card — full width on all sizes */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] as [number,number,number,number] }}
        >
          <Link
            href={`/destinations/${hero.slug}`}
            className="group relative block w-full overflow-hidden rounded-2xl h-64 sm:h-80 md:h-96"
            aria-label={`Explore ${hero.name}`}
          >
            <Image
              src={hero.image}
              alt={hero.name}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
              sizes="100vw"
              priority
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/25 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7 flex items-end justify-between">
              <div>
                <p className="text-xs font-body text-stone-300 mb-1">{hero.country}</p>
                <h3 className="font-display text-2xl sm:text-3xl font-light text-white leading-tight">
                  {hero.name}
                </h3>
                <p className="text-sm text-stone-300 font-body mt-1 line-clamp-1 sm:line-clamp-2 max-w-sm">
                  {hero.tagline}
                </p>
              </div>
              <div className="shrink-0 w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                <ArrowRight className="h-4 w-4 text-white" />
              </div>
            </div>
          </Link>
        </motion.div>

        {/* Grid of remaining 5 */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {rest.map((dest, i) => (
            <motion.div
              key={dest.id}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: (i + 1) * 0.07, ease: [0.2, 0.8, 0.2, 1] as [number,number,number,number] }}
              className={i === 4 ? "col-span-2 md:col-span-1" : ""}
            >
              <Link
                href={`/destinations/${dest.slug}`}
                className="group relative block w-full overflow-hidden rounded-2xl h-44 sm:h-48"
                aria-label={`Explore ${dest.name}`}
              >
                <Image
                  src={dest.image}
                  alt={dest.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <p className="text-[10px] font-body text-stone-300 mb-0.5">{dest.country}</p>
                  <h3 className="font-display text-base font-light text-white leading-tight">
                    {dest.name}
                  </h3>
                </div>
                <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowRight className="h-3 w-3 text-white" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="text-center mt-10">
        <Link
          href="/destinations"
          className="inline-flex items-center gap-2 rounded-full border border-olive-600 text-olive-600 hover:bg-olive-600 hover:text-white font-body font-semibold text-sm px-7 py-3.5 transition-all"
        >
          Explore all destinations
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </Section>
  );
}
