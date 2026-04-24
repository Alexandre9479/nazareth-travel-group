"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CalendarDays, Users } from "lucide-react";
import Section from "@/components/shared/Section";
import SectionHeader from "@/components/shared/SectionHeader";
import { DEPARTURES } from "@/lib/data";
import { packageInquiryLink } from "@/lib/whatsapp";

export default function DeparturesCalendar() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <Section className="bg-white">
      <SectionHeader
        eyebrow="Upcoming Departures"
        title="Confirmed group departures"
        subtitle="Join an upcoming group departure or enquire about a private date."
        className="mb-12"
      />
      <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {DEPARTURES.map((dep, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.07 }}
            className="flex items-start gap-4 p-5 rounded-xl border border-stone-200 hover:border-olive-300 bg-stone-50 hover:bg-olive-50 transition-all group"
          >
            <div className="w-10 h-10 rounded-lg bg-olive-100 flex items-center justify-center shrink-0">
              <CalendarDays className="h-5 w-5 text-olive-600" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-body font-semibold text-gold-500 uppercase tracking-wide mb-0.5">
                {dep.month}
              </p>
              <p className="font-body font-medium text-ink-900 text-sm truncate">{dep.tour}</p>
              <p className="text-xs text-ink-500 font-body mt-0.5 flex items-center gap-1">
                <Users className="h-3 w-3" />
                {dep.seatsLeft} seats remaining · {dep.type}
              </p>
            </div>
            <a
              href={packageInquiryLink(dep.tour)}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-body font-semibold text-olive-600 group-hover:text-olive-700 shrink-0 whitespace-nowrap"
            >
              Reserve →
            </a>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
