import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/shared/Container";
import CTAStrip from "@/components/home/CTAStrip";
import { sanityFetch } from "@/lib/sanity/client";
import { LEGAL_PAGE_QUERY } from "@/lib/sanity/queries";
import PortableTextContent from "@/components/shared/PortableTextContent";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Nazareth Travel Group collects, uses, and protects your personal information.",
};

const FALLBACK_LAST_UPDATED = "1 April 2026";

const FALLBACK_SECTIONS = [
  {
    heading: "Our Commitment to You",
    body: "At Nazareth Travel Group, we are entrusted with the personal information of pilgrims, pastors, and church leaders who place their sacred journeys in our hands. We treat that trust with the same reverence we bring to every pilgrimage we organise. This Privacy Policy explains — in plain language — what information we collect, why we collect it, and how we protect it.",
  },
  {
    heading: "1. Information We Collect",
    body: "We collect information you provide directly to us, including: full name and title, email address, phone and WhatsApp number, passport details (at booking), dietary requirements, payment references, and messages sent through our contact form or WhatsApp. We also collect limited technical analytics data automatically when you visit our website.",
  },
  {
    heading: "2. How We Use Your Information",
    body: "We use your information to: process your pilgrimage booking, communicate itinerary updates and pre-departure information, respond to enquiries, send occasional newsletters (only with opt-in consent), comply with legal obligations, and improve our services. We will never sell, rent, or trade your personal information to third parties for marketing purposes.",
  },
  {
    heading: "3. Information Sharing",
    body: "We share your information only where necessary to deliver your pilgrimage with: airlines and transport providers, hotels and accommodation partners, licensed local guides, travel insurance providers, and government and visa authorities as required by law. All partners are contractually bound to protect your data.",
  },
  {
    heading: "4. Data Security",
    body: "We implement appropriate technical and organisational measures to protect your personal information. Our website uses HTTPS encryption. Sensitive documents are stored on secure, access-controlled systems. In the event of a data breach that affects your rights, we will notify you promptly in accordance with applicable law.",
  },
  {
    heading: "5. Cookies",
    body: "Our website uses essential cookies (required for the site to function) and analytics cookies (collected only with your consent). You can control cookie preferences through the banner shown on your first visit. Disabling analytics cookies will not affect your ability to use the site.",
  },
  {
    heading: "6. Your Rights",
    body: "You have the right to access, correct, delete, object to processing of, and receive a portable copy of your personal data. To exercise any of these rights, please contact us at info@nazarethtravelgroup.com. We will respond within 30 days.",
  },
  {
    heading: "7. Data Retention",
    body: "We retain your personal information for as long as necessary, including for legal and accounting requirements. Booking records are typically retained for 7 years in compliance with Kenyan tax law.",
  },
  {
    heading: "8. Contact Us",
    body: "Nazareth Travel Group · Nairobi, Kenya · info@nazarethtravelgroup.com · +254 700 000 000",
  },
];

type LegalPageData = {
  title?: string;
  lastUpdated?: string;
  openingScripture?: { verse: string; reference: string };
  closingScripture?: { verse: string; reference: string };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  body?: any[];
};

export default async function PrivacyPage() {
  const cms = await sanityFetch<LegalPageData>(LEGAL_PAGE_QUERY, { pageType: "privacy" });

  const lastUpdated = cms?.lastUpdated ?? FALLBACK_LAST_UPDATED;
  const openingScripture = cms?.openingScripture ?? {
    verse: "Whatever you do, do it all for the glory of God.",
    reference: "1 Corinthians 10:31",
  };
  const closingScripture = cms?.closingScripture ?? {
    verse: "And you will know the truth, and the truth will set you free.",
    reference: "John 8:32",
  };

  return (
    <>
      <div className="bg-olive-900 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-12 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-300 font-body mb-3">Legal</p>
          <div className="gold-divider mx-auto mb-5" />
          <h1 className="font-display text-4xl sm:text-5xl font-light text-white mb-4">
            {cms?.title ?? "Privacy Policy"}
          </h1>
          <p className="text-stone-400 font-body text-sm">Last updated: {lastUpdated}</p>
        </div>
      </div>

      <div className="bg-stone-50 py-16 md:py-24">
        <Container>
          <div className="max-w-3xl mx-auto">
            {/* Opening scripture */}
            <blockquote className="mb-12 border-l-2 border-gold-500 pl-6 py-1">
              <p className="font-display text-lg font-light italic text-ink-700 leading-relaxed">
                &ldquo;{openingScripture.verse}&rdquo;
              </p>
              <footer className="mt-2 text-sm font-body text-olive-600 not-italic">
                — {openingScripture.reference}
              </footer>
            </blockquote>

            {/* CMS rich text OR static fallback */}
            {cms?.body?.length ? (
              <PortableTextContent value={cms.body} />
            ) : (
              <div className="prose-pilgrimage space-y-10">
                {FALLBACK_SECTIONS.map((s) => (
                  <section key={s.heading}>
                    <h2 className="font-display text-2xl font-light text-ink-900 mb-3">{s.heading}</h2>
                    <div className="gold-divider mb-5" />
                    <p>{s.body}</p>
                  </section>
                ))}
              </div>
            )}

            {/* Closing scripture */}
            <div className="mt-12 pt-6 border-t border-stone-200 text-center">
              <p className="font-display text-base font-light italic text-ink-500">
                &ldquo;{closingScripture.verse}&rdquo;
              </p>
              <p className="text-xs font-body text-olive-600 mt-1">— {closingScripture.reference}</p>
            </div>

            <div className="flex gap-4 text-sm font-body justify-center pt-6">
              <Link href="/terms" className="text-olive-600 hover:underline">Terms of Service</Link>
              <span className="text-stone-300">|</span>
              <Link href="/" className="text-olive-600 hover:underline">Back to Home</Link>
            </div>
          </div>
        </Container>
      </div>

      <CTAStrip />
    </>
  );
}
