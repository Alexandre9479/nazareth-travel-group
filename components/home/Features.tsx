"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ShieldCheck, HeartHandshake, Globe, BookOpen, LucideIcon } from "lucide-react";
import Section from "@/components/shared/Section";
import SectionHeader from "@/components/shared/SectionHeader";

const ICON_MAP: Record<string, LucideIcon> = {
  "01": ShieldCheck,
  "02": BookOpen,
  "03": HeartHandshake,
  "04": Globe,
};

interface FeatureItem {
  number: string;
  title: string;
  description: string;
}

interface FeaturesProps {
  eyebrow?: string;
  headline?: string;
  subheadline?: string;
  items?: FeatureItem[];
}

const DEFAULTS: Required<FeaturesProps> = {
  eyebrow: "Why Choose Us",
  headline: "Why pilgrims choose Nazareth Travel Group",
  subheadline: "Sacred travel deserves more than a booking portal. It deserves a company that prays with you before the flight and celebrates with you when you return.",
  items: [
    { number: "01", title: "Trusted & Licensed", description: "Fully licensed and insured with IATA, Kenya Tourism Board, and ATTA membership. Over a decade of safe, dependable pilgrimage service." },
    { number: "02", title: "Scripture-Led Journeys", description: "Every site visit is rooted in the Word. Our expert Christian guides bring the Bible to life in context — not as tourists, but as pilgrims with purpose." },
    { number: "03", title: "Personal, Caring Service", description: "You'll have a dedicated coordinator from first inquiry to your return home. Your pastor can lead as you travel." },
    { number: "04", title: "Africa-First Expertise", description: "We understand the African Christian pilgrim. Our packages are crafted specifically for Kenyan and African churches." },
  ],
};

export default function Features({ eyebrow, headline, subheadline, items }: FeaturesProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const features = items?.length ? items : DEFAULTS.items;

  return (
    <Section className="bg-stone-50">
      <SectionHeader
        eyebrow={eyebrow ?? DEFAULTS.eyebrow}
        title={headline ?? DEFAULTS.headline}
        subtitle={subheadline ?? DEFAULTS.subheadline}
        className="mb-14"
      />
      <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {features.map((feature, i) => {
          const Icon = ICON_MAP[feature.number] ?? ShieldCheck;
          return (
            <motion.div
              key={feature.number}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.2, 0.8, 0.2, 1] as [number,number,number,number] }}
              className="relative group p-7 rounded-2xl bg-white border border-stone-200 hover:border-olive-300 hover:shadow-lg transition-all duration-300"
            >
              <span className="absolute top-5 right-5 text-4xl font-display font-light text-stone-100 group-hover:text-olive-100 transition-colors select-none">
                {feature.number}
              </span>
              <div className="w-11 h-11 rounded-xl bg-olive-50 flex items-center justify-center mb-5 group-hover:bg-olive-100 transition-colors">
                <Icon className="h-5 w-5 text-olive-600" />
              </div>
              <h3 className="font-display text-lg font-light text-ink-900 mb-3 leading-snug">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-ink-500 font-body">
                {feature.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
