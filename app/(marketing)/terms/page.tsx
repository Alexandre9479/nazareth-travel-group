import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/shared/Container";
import CTAStrip from "@/components/home/CTAStrip";
import { sanityFetch } from "@/lib/sanity/client";
import { LEGAL_PAGE_QUERY } from "@/lib/sanity/queries";
import PortableTextContent from "@/components/shared/PortableTextContent";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms and conditions for pilgrimage bookings with Nazareth Travel Group.",
};

const FALLBACK_LAST_UPDATED = "1 April 2026";

const FALLBACK_SECTIONS = [
  {
    heading: "Agreement to These Terms",
    body: "By making an enquiry, submitting a booking, or using the services of Nazareth Travel Group, you agree to be bound by these Terms of Service. Nazareth Travel Group is a licensed travel and pilgrimage company based in Nairobi, Kenya, operating under the relevant provisions of Kenyan tourism law.",
  },
  {
    heading: "1. Bookings & Deposits",
    body: "A booking is confirmed upon receipt of a signed booking form and a non-refundable deposit of 25–30% of the total package cost. Full payment is due no later than 8 weeks before departure. Deposits are non-refundable unless we cancel the tour.",
  },
  {
    heading: "2. Pricing",
    body: "All prices are quoted in United States Dollars (USD) unless otherwise stated. Prices are based on prevailing airfare, accommodation, and exchange rates at the time of quotation. We reserve the right to adjust prices in the event of significant changes in airline fuel surcharges, government taxes, or currency fluctuations greater than 5%, with 30 days' notice.",
  },
  {
    heading: "3. Cancellations by the Client",
    body: "Cancellations must be submitted in writing. Charges: More than 90 days — deposit only. 60–89 days — 30% of total. 30–59 days — 60% of total. 15–29 days — 85% of total. Fewer than 15 days / no-show — 100% of total. We strongly recommend travel insurance.",
  },
  {
    heading: "4. Cancellations by Nazareth Travel Group",
    body: "We reserve the right to cancel a tour due to insufficient bookings, force majeure events, or safety concerns. In such cases, you will receive a full refund of all monies paid within 14 working days, or the option to transfer to an alternative departure date at no charge.",
  },
  {
    heading: "5. Travel Documents & Visas",
    body: "It is your sole responsibility to ensure you hold a valid passport (minimum 6 months' validity) and all required visas before departure. We cannot be held liable for denial of entry due to passport or visa issues.",
  },
  {
    heading: "6. Behaviour & Conduct",
    body: "Pilgrimage is a sacred undertaking. All participants are expected to conduct themselves with dignity, respect, and reverence — particularly at holy sites. We reserve the right to exclude, without refund, any participant whose behaviour is causing harm, offence, or disruption.",
  },
  {
    heading: "7. Governing Law",
    body: "These Terms are governed by the laws of the Republic of Kenya. Any dispute shall be subject to the exclusive jurisdiction of the courts of Kenya.",
  },
  {
    heading: "8. Contact",
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

export default async function TermsPage() {
  const cms = await sanityFetch<LegalPageData>(LEGAL_PAGE_QUERY, { pageType: "terms" });

  const lastUpdated = cms?.lastUpdated ?? FALLBACK_LAST_UPDATED;
  const openingScripture = cms?.openingScripture ?? {
    verse: "Let your yes be yes and your no be no.",
    reference: "Matthew 5:37",
  };
  const closingScripture = cms?.closingScripture ?? {
    verse: "Commit to the LORD whatever you do, and He will establish your plans.",
    reference: "Proverbs 16:3",
  };

  return (
    <>
      <div className="bg-olive-900 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-12 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-300 font-body mb-3">Legal</p>
          <div className="gold-divider mx-auto mb-5" />
          <h1 className="font-display text-4xl sm:text-5xl font-light text-white mb-4">
            {cms?.title ?? "Terms of Service"}
          </h1>
          <p className="text-stone-400 font-body text-sm">Last updated: {lastUpdated}</p>
        </div>
      </div>

      <div className="bg-stone-50 py-16 md:py-24">
        <Container>
          <div className="max-w-3xl mx-auto">
            <blockquote className="mb-12 border-l-2 border-gold-500 pl-6 py-1">
              <p className="font-display text-lg font-light italic text-ink-700 leading-relaxed">
                &ldquo;{openingScripture.verse}&rdquo;
              </p>
              <footer className="mt-2 text-sm font-body text-olive-600 not-italic">
                — {openingScripture.reference}
              </footer>
            </blockquote>

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

            <div className="mt-12 pt-6 border-t border-stone-200 text-center">
              <p className="font-display text-base font-light italic text-ink-500">
                &ldquo;{closingScripture.verse}&rdquo;
              </p>
              <p className="text-xs font-body text-olive-600 mt-1">— {closingScripture.reference}</p>
            </div>

            <div className="flex gap-4 text-sm font-body justify-center pt-6">
              <Link href="/privacy" className="text-olive-600 hover:underline">Privacy Policy</Link>
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
