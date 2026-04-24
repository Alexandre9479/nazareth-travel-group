import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Section from "@/components/shared/Section";
import SectionHeader from "@/components/shared/SectionHeader";
import CTAStrip from "@/components/home/CTAStrip";
import Container from "@/components/shared/Container";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Our story, mission, and the team behind Nazareth Travel Group — Africa's most trusted Christian pilgrimage company.",
};

const VALUES = [
  {
    title: "Faith-centred",
    description:
      "We are Christians serving Christians. Every tour is a ministry, not just a product.",
  },
  {
    title: "Integrity",
    description:
      "Full transparency in pricing, itineraries, and communication. No surprises.",
  },
  {
    title: "Excellence",
    description:
      "4-star hotels, expert guides, seamless logistics — because sacred travel deserves the best.",
  },
  {
    title: "Accessibility",
    description:
      "Pilgrimages should not be only for the wealthy. We work hard to make them accessible.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Page hero */}
      <div className="relative bg-olive-900 py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1601058272524-14e7948e4fba?w=1200&q=70"
            alt=""
            fill
            className="object-cover"
            aria-hidden
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 md:px-12 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-300 font-body mb-3">Our Story</p>
          <div className="gold-divider mx-auto mb-5" />
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-light text-white mb-5">
            Born from a calling
          </h1>
          <p className="text-stone-300 font-body text-lg max-w-2xl mx-auto">
            We exist to help African Christians walk where their Lord walked.
          </p>
        </div>
      </div>

      {/* Mission section */}
      <Section className="bg-stone-50">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="rounded-2xl overflow-hidden h-[450px]">
              <Image
                src="https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?w=900&q=80"
                alt="Jerusalem Old City"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-5 max-w-[200px]">
              <p className="text-3xl font-display font-light text-olive-700">2013</p>
              <p className="text-xs text-ink-500 font-body mt-0.5">Founded in Nairobi, Kenya</p>
              <div className="mt-2 gold-divider" />
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-olive-600 font-body mb-3">
              Our Mission
            </p>
            <div className="gold-divider mb-5" />
            <h2 className="font-display text-4xl font-light text-ink-900 mb-6 leading-tight">
              Making the Holy Land accessible to every African Christian
            </h2>
            <div className="space-y-4 font-body text-ink-500 text-base leading-relaxed">
              <p>
                Nazareth Travel Group was founded in Nairobi in 2013 with a profound
                conviction: that walking the land where Jesus lived, died, and rose
                again is one of the most transformative experiences a Christian can
                have — and that this experience should not be out of reach for
                African believers.
              </p>
              <p>
                We began by serving a single church group from Nairobi. The
                testimonies they brought back ignited a fire. Today we serve
                thousands of pilgrims annually from churches across Kenya and the
                wider African continent — Catholic, Anglican, Evangelical,
                Pentecostal, and every tradition in between.
              </p>
              <p>
                Our founders are themselves pilgrims who have walked every step of
                the routes they offer. That lived experience is embedded in every
                itinerary, every guide selection, every hotel recommendation.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Values */}
      <Section className="bg-white">
        <SectionHeader
          eyebrow="Our Values"
          title="What we stand for"
          centered
          className="mb-12"
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {VALUES.map((v) => (
            <div key={v.title} className="p-6 rounded-2xl bg-stone-50 border border-stone-200">
              <div className="w-10 h-10 rounded-full bg-olive-100 flex items-center justify-center mb-4">
                <CheckCircle2 className="h-5 w-5 text-olive-600" />
              </div>
              <h3 className="font-display text-lg font-light text-ink-900 mb-2">{v.title}</h3>
              <p className="text-sm font-body text-ink-500 leading-relaxed">{v.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Partnerships */}
      <Section className="bg-olive-900">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-300 font-body mb-3">
            Partnerships & Accreditation
          </p>
          <div className="gold-divider mx-auto mb-5" />
          <h2 className="font-display text-4xl font-light text-white mb-6">
            Trusted at every level
          </h2>
          <p className="text-stone-300 font-body text-lg max-w-2xl mx-auto mb-10">
            We are fully licensed, bonded, and accredited with the relevant tourism
            and travel bodies in Kenya and internationally.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {["IATA", "Kenya Tourism Board", "ATTA", "KATA", "KTRA"].map((org) => (
              <div
                key={org}
                className="px-5 py-3 rounded-full border border-white/20 text-stone-300 font-body text-sm"
              >
                {org}
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-stone-50">
        <div className="text-center">
          <h2 className="font-display text-4xl font-light text-ink-900 mb-5">
            Ready to travel with us?
          </h2>
          <p className="text-ink-500 font-body mb-8 max-w-xl mx-auto">
            Browse our pilgrimages or get in touch — we&apos;d love to help plan
            your church&apos;s journey to the Holy Land.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/programs"
              className="inline-flex items-center gap-2 rounded-full bg-olive-600 hover:bg-olive-700 text-white font-body font-semibold text-sm px-7 py-3.5 transition-all"
            >
              View Programs <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-olive-600 text-olive-600 hover:bg-olive-600 hover:text-white font-body font-semibold text-sm px-7 py-3.5 transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </Section>

      <CTAStrip />
    </>
  );
}
