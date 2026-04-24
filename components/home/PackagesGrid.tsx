"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Clock, Users, ArrowRight, MapPin } from "lucide-react";
import Section from "@/components/shared/Section";
import SectionHeader from "@/components/shared/SectionHeader";
import Badge from "@/components/shared/Badge";
import { PACKAGES } from "@/lib/data";
import { packageInquiryLink } from "@/lib/whatsapp";

export default function PackagesGrid() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <Section className="bg-white" id="programs">
      <SectionHeader
        eyebrow="Our Programs"
        title="Sacred journeys for every pilgrim"
        subtitle="From the classic Holy Land to Rome, Egypt, and beyond — each programme is crafted with reverence, expertise, and the African pilgrim in mind."
        className="mb-14"
      />

      <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
        {PACKAGES.map((pkg, i) => (
          <motion.article
            key={pkg.id}
            initial={{ opacity: 0, y: 36 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.6,
              delay: i * 0.08,
              ease: [0.2, 0.8, 0.2, 1],
            }}
            className="card-lift group flex flex-col rounded-2xl overflow-hidden bg-white border border-stone-200 shadow-sm"
          >
            {/* Image */}
            <div className="img-zoom-container relative h-52 shrink-0">
              <Image
                src={pkg.image}
                alt={pkg.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
              {pkg.badge && (
                <div className="absolute top-4 left-4">
                  <Badge variant={pkg.badgeVariant ?? "default"}>
                    {pkg.badge}
                  </Badge>
                </div>
              )}
              <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white">
                <MapPin className="h-3.5 w-3.5" />
                <span className="text-xs font-body font-medium">{pkg.region}</span>
              </div>
            </div>

            {/* Body */}
            <div className="flex flex-col flex-1 p-6">
              <div className="flex items-start justify-between gap-2 mb-2">
                <h3 className="font-display text-lg font-light leading-snug text-ink-900">
                  {pkg.title}
                </h3>
              </div>

              <p className="text-xs italic text-gold-500 font-body mb-3">
                {pkg.tagline}
              </p>

              <div className="flex items-center gap-4 mb-4 text-xs text-ink-500 font-body">
                <span className="flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" />
                  {pkg.duration}
                </span>
                <span className="flex items-center gap-1">
                  <Users className="h-3.5 w-3.5" />
                  {pkg.groupSize}
                </span>
              </div>

              <p className="text-sm text-ink-500 font-body leading-relaxed line-clamp-3 mb-4">
                {pkg.description}
              </p>

              {/* Highlights */}
              <ul className="flex flex-wrap gap-1.5 mb-6">
                {pkg.highlights.slice(0, 4).map((h) => (
                  <li
                    key={h}
                    className="text-xs font-body bg-olive-50 text-olive-700 rounded-full px-2.5 py-0.5 border border-olive-200"
                  >
                    {h}
                  </li>
                ))}
                {pkg.highlights.length > 4 && (
                  <li className="text-xs font-body bg-stone-100 text-ink-500 rounded-full px-2.5 py-0.5">
                    +{pkg.highlights.length - 4} more
                  </li>
                )}
              </ul>

              {/* CTAs */}
              <div className="mt-auto flex gap-3">
                <a
                  href={packageInquiryLink(pkg.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-1.5 rounded-full bg-[#25D366] hover:bg-[#1ebe5d] text-white text-xs font-semibold py-2.5 transition-all font-body"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5" aria-hidden>
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  Request Price
                </a>
                <Link
                  href={`/programs/${pkg.slug}`}
                  className="flex-1 flex items-center justify-center gap-1.5 rounded-full border border-olive-300 text-olive-600 hover:bg-olive-600 hover:text-white text-xs font-semibold py-2.5 transition-all font-body group"
                >
                  View Itinerary
                  <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link
          href="/programs"
          className="inline-flex items-center gap-2 rounded-full border border-olive-600 text-olive-600 hover:bg-olive-600 hover:text-white font-body font-semibold text-sm px-7 py-3.5 transition-all"
        >
          View all pilgrimages
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </Section>
  );
}
