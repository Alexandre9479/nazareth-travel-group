"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ShieldCheck, HeartHandshake, Globe, BookOpen } from "lucide-react";
import Section from "@/components/shared/Section";
import SectionHeader from "@/components/shared/SectionHeader";

const FEATURES = [
  {
    number: "01",
    icon: ShieldCheck,
    title: "Trusted & Licensed",
    description:
      "Fully licensed and insured with IATA, Kenya Tourism Board, and ATTA membership. Over a decade of safe, dependable pilgrimage service. Your peace of mind is our foundation.",
  },
  {
    number: "02",
    icon: BookOpen,
    title: "Scripture-Led Journeys",
    description:
      "Every site visit is rooted in the Word. Our expert Christian guides bring the Bible to life in context — not as tourists, but as pilgrims with purpose and prayerfulness.",
  },
  {
    number: "03",
    icon: HeartHandshake,
    title: "Personal, Caring Service",
    description:
      "We are a small, personal company — not a factory. You'll have a dedicated coordinator from first inquiry to your return home. Your pastor can lead as you travel.",
  },
  {
    number: "04",
    icon: Globe,
    title: "Africa-First Expertise",
    description:
      "We understand the African Christian pilgrim — the budget, the prayer style, the community travel. Our packages are crafted specifically for Kenyan and African churches.",
  },
];

export default function Features() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <Section className="bg-stone-50">
      <SectionHeader
        eyebrow="Why Choose Us"
        title="Why pilgrims choose Nazareth Travel Group"
        subtitle="Sacred travel deserves more than a booking portal. It deserves a company that prays with you before the flight and celebrates with you when you return."
        className="mb-14"
      />
      <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {FEATURES.map((feature, i) => {
          const Icon = feature.icon;
          return (
            <motion.div
              key={feature.number}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.2, 0.8, 0.2, 1],
              }}
              className="relative group p-7 rounded-2xl bg-white border border-stone-200 hover:border-olive-300 hover:shadow-lg transition-all duration-300"
            >
              {/* Number */}
              <span className="absolute top-5 right-5 text-4xl font-display font-light text-stone-100 group-hover:text-olive-100 transition-colors select-none">
                {feature.number}
              </span>
              {/* Icon */}
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
