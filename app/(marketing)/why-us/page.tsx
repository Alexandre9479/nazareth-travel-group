import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle2, XCircle } from "lucide-react";
import Section from "@/components/shared/Section";
import SectionHeader from "@/components/shared/SectionHeader";
import CTAStrip from "@/components/home/CTAStrip";

export const metadata: Metadata = {
  title: "Why Choose Us",
  description:
    "Why Nazareth Travel Group is the best choice for your Holy Land pilgrimage from Africa.",
};

const COMPARISON = [
  { feature: "Licensed & accredited operator", us: true, generic: false },
  { feature: "Christian guides who pray with you", us: true, generic: false },
  { feature: "Africa-focused itineraries", us: true, generic: false },
  { feature: "M-Pesa & KES payment options", us: true, generic: false },
  { feature: "Flexible payment plans", us: true, generic: false },
  { feature: "Dedicated church group coordinator", us: true, generic: false },
  { feature: "24/7 WhatsApp support on-tour", us: true, generic: false },
  { feature: "Daily devotions included", us: true, generic: false },
  { feature: "Promotional materials for your church", us: true, generic: false },
  { feature: "Transparent, no-surprise pricing", us: true, generic: true },
  { feature: "Competitive group rates", us: true, generic: true },
];

const WHY_REASONS = [
  {
    title: "We are Christians, not just travel agents",
    body: "Our entire team is Christian. We understand pilgrimage as a spiritual journey, not a sightseeing tour. Every detail — from the devotionals we prepare to the sites we prioritise — flows from our own faith and our own experience of walking the Holy Land.",
  },
  {
    title: "12+ years of African pilgrimage expertise",
    body: "Since 2013 we have refined every aspect of the pilgrimage experience for African travellers — from the Nairobi departure logistics to the prayer arrangements at holy sites. You benefit from over a decade of perfection.",
  },
  {
    title: "Your pastor leads — we handle everything else",
    body: "We believe the spiritual leadership of your group belongs to your pastor or spiritual director. Our role is to handle every logistical detail so perfectly that your leader can focus entirely on ministry. No stress. No administration. Just pilgrimage.",
  },
  {
    title: "Genuine transparency on pricing",
    body: "We never quote one price and add surprises later. Your proposal includes a complete breakdown of what is included and what is not. We respect you enough to tell you the truth from day one.",
  },
  {
    title: "We go where your group goes",
    body: "Our staff travel with every group departure. You are not handed off to a local operator and left to figure it out. A Nazareth Travel Group representative is on the ground with you from arrival to departure.",
  },
  {
    title: "Church group specialists",
    body: "Large group pilgrimages are our core business. We know how to handle group check-in at airports, group entry to holy sites, group accommodation and dining. We have done it thousands of times.",
  },
];

export default function WhyUsPage() {
  return (
    <>
      <div className="relative bg-olive-900 py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?w=1200&q=70"
            alt=""
            fill
            className="object-cover"
            aria-hidden
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 md:px-12 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-300 font-body mb-3">
            Why Choose Us
          </p>
          <div className="gold-divider mx-auto mb-5" />
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-light text-white mb-5">
            The Nazareth Travel Group difference
          </h1>
          <p className="text-stone-300 font-body text-lg max-w-2xl mx-auto">
            There are many travel companies. There is only one that was born
            specifically to serve African Christians on sacred pilgrimage.
          </p>
        </div>
      </div>

      {/* Reasons */}
      <Section className="bg-stone-50">
        <SectionHeader
          eyebrow="Six reasons"
          title="Why discerning pilgrims choose us"
          className="mb-14"
        />
        <div className="grid md:grid-cols-2 gap-7">
          {WHY_REASONS.map((r, i) => (
            <div key={i} className="p-7 bg-white rounded-2xl border border-stone-200">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-olive-600 text-white flex items-center justify-center text-sm font-display font-medium shrink-0">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-display text-lg font-light text-ink-900 mb-3">
                    {r.title}
                  </h3>
                  <p className="font-body text-sm text-ink-500 leading-[1.8]">{r.body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Comparison table */}
      <Section className="bg-white">
        <SectionHeader
          eyebrow="Comparison"
          title="How we compare"
          centered
          className="mb-12"
        />
        <div className="overflow-x-auto">
          <table className="w-full max-w-2xl mx-auto">
            <thead>
              <tr>
                <th className="text-left pb-4 font-body font-semibold text-sm text-ink-700 w-1/2">Feature</th>
                <th className="pb-4 font-body font-semibold text-sm text-olive-600 text-center">Nazareth TG</th>
                <th className="pb-4 font-body font-semibold text-sm text-ink-500 text-center">Generic agent</th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON.map((row, i) => (
                <tr key={i} className="border-t border-stone-100">
                  <td className="py-3.5 text-sm font-body text-ink-700">{row.feature}</td>
                  <td className="py-3.5 text-center">
                    {row.us
                      ? <CheckCircle2 className="h-5 w-5 text-olive-600 mx-auto" />
                      : <XCircle className="h-5 w-5 text-stone-300 mx-auto" />}
                  </td>
                  <td className="py-3.5 text-center">
                    {row.generic
                      ? <CheckCircle2 className="h-5 w-5 text-stone-400 mx-auto" />
                      : <XCircle className="h-5 w-5 text-stone-300 mx-auto" />}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <CTAStrip />
    </>
  );
}
