"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Section from "@/components/shared/Section";
import SectionHeader from "@/components/shared/SectionHeader";
import { TESTIMONIALS } from "@/lib/data";

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <Section className="bg-stone-50" id="testimonials">
      <SectionHeader
        eyebrow="Testimonials"
        title="Lives changed on the journey"
        subtitle="Hear from pilgrims who have walked these sacred paths with us."
        centered
        className="mb-14"
      />

      <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {TESTIMONIALS.map((t, i) => (
          <motion.div
            key={t.id}
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: i * 0.12, ease: [0.2, 0.8, 0.2, 1] }}
            className="relative flex flex-col bg-white rounded-2xl p-6 sm:p-7 border border-stone-200 shadow-sm hover:shadow-md transition-shadow"
          >
            {/* Big quote mark */}
            <span
              className="absolute top-4 left-6 text-7xl font-display text-stone-100 leading-none select-none"
              aria-hidden
            >
              &ldquo;
            </span>
            <p className="relative z-10 font-body text-sm leading-[1.8] text-ink-500 flex-1 mb-6">
              {t.quote}
            </p>
            <div className="flex items-center gap-3 pt-5 border-t border-stone-100">
              <div className="relative w-11 h-11 rounded-full overflow-hidden shrink-0 bg-stone-200">
                <Image
                  src={t.avatar}
                  alt={t.name}
                  fill
                  className="object-cover"
                  sizes="44px"
                />
              </div>
              <div>
                <p className="text-sm font-semibold font-body text-ink-900">{t.name}</p>
                <p className="text-xs text-ink-500 font-body">{t.role}</p>
                <p className="text-xs text-olive-600 font-body">{t.church}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
