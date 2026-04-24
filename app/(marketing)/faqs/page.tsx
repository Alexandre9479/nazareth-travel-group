import type { Metadata } from "next";
import Section from "@/components/shared/Section";
import CTAStrip from "@/components/home/CTAStrip";
import FAQAccordion from "@/components/faqs/FAQAccordion";
import JsonLd, { faqPageSchema } from "@/components/shared/JsonLd";
import { FAQS } from "@/lib/data";

export const metadata: Metadata = {
  title: "FAQs",
  description:
    "Answers to the most common questions about Holy Land pilgrimage planning with Nazareth Travel Group.",
};

export default function FAQsPage() {
  return (
    <>
      <JsonLd data={faqPageSchema(FAQS)} />

      <div className="bg-olive-900 py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-12 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-300 font-body mb-3">
            FAQs
          </p>
          <div className="gold-divider mx-auto mb-5" />
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-light text-white mb-5">
            Questions &amp; answers
          </h1>
          <p className="text-stone-300 font-body text-lg max-w-xl mx-auto">
            Everything you need to know about pilgrimage planning with
            Nazareth Travel Group.
          </p>
        </div>
      </div>

      <Section className="bg-stone-50">
        <FAQAccordion faqs={FAQS} />
        <div className="text-center mt-12">
          <p className="font-body text-ink-500 mb-4">
            Can&apos;t find your answer? We&apos;re happy to help directly.
          </p>
          <a
            href="https://wa.me/254700000000?text=Hello%20Nazareth%20Travel%20Group%2C%20I%20have%20a%20question."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#25D366] hover:bg-[#1ebe5d] text-white font-body font-semibold text-sm px-7 py-3.5 transition-all"
          >
            Ask us on WhatsApp
          </a>
        </div>
      </Section>

      <CTAStrip />
    </>
  );
}
