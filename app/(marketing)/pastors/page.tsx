import type { Metadata } from "next";
import { BookOpen, Download, Users, FileText } from "lucide-react";
import Section from "@/components/shared/Section";
import SectionHeader from "@/components/shared/SectionHeader";
import CTAStrip from "@/components/home/CTAStrip";

export const metadata: Metadata = {
  title: "Pastors & Church Leaders Portal",
  description:
    "Resources for pastors and church leaders organising Holy Land pilgrimages with Nazareth Travel Group.",
};

const RESOURCES = [
  {
    icon: FileText,
    title: "Pulpit Announcement Script",
    description: "A ready-to-read announcement to introduce the pilgrimage to your congregation.",
    type: "Download (PDF)",
  },
  {
    icon: BookOpen,
    title: "Bulletin Insert (A5)",
    description: "A beautiful bulletin insert for your weekly church bulletin.",
    type: "Download (PDF)",
  },
  {
    icon: Users,
    title: "Group Recruitment Poster",
    description: "A full-colour A3 poster to display at church.",
    type: "Download (PDF)",
  },
  {
    icon: Download,
    title: "Deposit Schedule Template",
    description: "A spreadsheet template for tracking group deposits and payments.",
    type: "Download (Excel)",
  },
];

export default function PastorsPage() {
  return (
    <>
      <div className="bg-olive-900 py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-12 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-300 font-body mb-3">
            For Church Leaders
          </p>
          <div className="gold-divider mx-auto mb-5" />
          <h1 className="font-display text-4xl sm:text-5xl font-light text-white mb-5">
            Pastors & Leaders Portal
          </h1>
          <p className="text-stone-300 font-body text-lg max-w-xl mx-auto">
            Everything you need to announce, recruit, and manage a successful
            church pilgrimage group.
          </p>
        </div>
      </div>

      <Section className="bg-stone-50">
        <SectionHeader
          eyebrow="Resources"
          title="Download & use freely"
          subtitle="All resources are free for registered church leaders. Contact us to register and unlock downloads."
          className="mb-12"
        />

        <div className="grid sm:grid-cols-2 gap-6 mb-16">
          {RESOURCES.map((r) => {
            const Icon = r.icon;
            return (
              <div
                key={r.title}
                className="flex items-start gap-5 p-7 bg-white rounded-2xl border border-stone-200 shadow-sm"
              >
                <div className="w-11 h-11 rounded-xl bg-olive-100 flex items-center justify-center shrink-0">
                  <Icon className="h-5 w-5 text-olive-600" />
                </div>
                <div>
                  <h3 className="font-body font-semibold text-ink-900 mb-1">{r.title}</h3>
                  <p className="text-sm font-body text-ink-500 mb-2">{r.description}</p>
                  <span className="text-xs font-body font-semibold text-olive-600 bg-olive-50 rounded-full px-3 py-0.5 border border-olive-200">
                    {r.type}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Register form */}
        <div className="max-w-xl mx-auto bg-white rounded-2xl border border-stone-200 shadow-sm p-8">
          <h2 className="font-display text-2xl font-light text-ink-900 mb-2">
            Register as a Church Leader
          </h2>
          <p className="font-body text-sm text-ink-500 mb-6">
            Register to access all downloadable resources and receive our
            quarterly pastors newsletter.
          </p>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your name"
              className="w-full rounded-xl border border-stone-200 px-4 py-3 text-sm font-body focus:border-olive-400 focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email address"
              className="w-full rounded-xl border border-stone-200 px-4 py-3 text-sm font-body focus:border-olive-400 focus:outline-none"
            />
            <input
              type="text"
              placeholder="Church name & denomination"
              className="w-full rounded-xl border border-stone-200 px-4 py-3 text-sm font-body focus:border-olive-400 focus:outline-none"
            />
            <input
              type="text"
              placeholder="City / county"
              className="w-full rounded-xl border border-stone-200 px-4 py-3 text-sm font-body focus:border-olive-400 focus:outline-none"
            />
            <button
              type="submit"
              className="w-full rounded-full bg-olive-600 hover:bg-olive-700 text-white font-body font-semibold py-3.5 transition-all"
            >
              Register & Access Resources
            </button>
          </form>
        </div>
      </Section>

      <CTAStrip />
    </>
  );
}
