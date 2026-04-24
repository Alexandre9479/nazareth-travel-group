import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/shared/Container";
import CTAStrip from "@/components/home/CTAStrip";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms and conditions for pilgrimage bookings with Nazareth Travel Group.",
};

const LAST_UPDATED = "1 April 2026";

export default function TermsPage() {
  return (
    <>
      <div className="bg-olive-900 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-12 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-300 font-body mb-3">
            Legal
          </p>
          <div className="gold-divider mx-auto mb-5" />
          <h1 className="font-display text-4xl sm:text-5xl font-light text-white mb-4">
            Terms of Service
          </h1>
          <p className="text-stone-400 font-body text-sm">Last updated: {LAST_UPDATED}</p>
        </div>
      </div>

      <div className="bg-stone-50 py-16 md:py-24">
        <Container>
          <div className="max-w-3xl mx-auto">

            <blockquote className="mb-12 border-l-2 border-gold-500 pl-6 py-1">
              <p className="font-display text-lg font-light italic text-ink-700 leading-relaxed">
                &ldquo;Let your yes be yes and your no be no.&rdquo;
              </p>
              <footer className="mt-2 text-sm font-body text-olive-600 not-italic">
                — Matthew 5:37
              </footer>
            </blockquote>

            <div className="prose-pilgrimage space-y-10">

              <section>
                <h2 className="font-display text-2xl font-light text-ink-900 mb-3">Agreement to These Terms</h2>
                <div className="gold-divider mb-5" />
                <p>
                  By making an enquiry, submitting a booking, or using the services of Nazareth Travel
                  Group (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;), you (&quot;the pilgrim&quot;, &quot;the client&quot;, &quot;the group leader&quot;)
                  agree to be bound by these Terms of Service. Please read them carefully before
                  proceeding with any booking.
                </p>
                <p className="mt-4">
                  Nazareth Travel Group is a licensed travel and pilgrimage company based in Nairobi,
                  Kenya, operating under the relevant provisions of Kenyan tourism law.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-light text-ink-900 mb-3">1. Bookings &amp; Deposits</h2>
                <div className="gold-divider mb-5" />
                <p>
                  A booking is confirmed upon receipt of a signed booking form and a non-refundable
                  deposit of 25–30% of the total package cost, as specified in your personalised
                  quotation. The deposit secures your place on the departure date.
                </p>
                <ul className="list-disc pl-6 mt-3 space-y-2 text-ink-500 text-sm font-body leading-relaxed">
                  <li>Deposits are non-refundable unless we cancel the tour (see Section 5).</li>
                  <li>Full payment is due no later than 8 weeks before the departure date, unless otherwise agreed in writing.</li>
                  <li>Late payment may result in loss of your booking without refund of the deposit.</li>
                  <li>Group leaders are jointly responsible for ensuring all members of their group complete payment on time.</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-2xl font-light text-ink-900 mb-3">2. Pricing</h2>
                <div className="gold-divider mb-5" />
                <p>
                  All prices are quoted in United States Dollars (USD) unless otherwise stated.
                  Prices are based on prevailing airfare, accommodation, and exchange rates at the
                  time of quotation. We reserve the right to adjust prices in the event of significant
                  changes in airline fuel surcharges, government-imposed taxes, or currency fluctuations
                  greater than 5%, provided we give you at least 30 days&apos; notice.
                </p>
                <p className="mt-4">
                  Prices never include personal expenses, optional activities, tips, or items
                  specifically listed as &quot;excluded&quot; in your booking documentation.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-light text-ink-900 mb-3">3. Cancellations by the Client</h2>
                <div className="gold-divider mb-5" />
                <p>
                  Cancellations must be submitted in writing (email to{" "}
                  <a href="mailto:info@nazarethtravelgroup.com" className="text-olive-600 hover:underline">
                    info@nazarethtravelgroup.com
                  </a>
                  ). The following cancellation charges apply from the date we receive written notice:
                </p>
                <div className="mt-4 overflow-x-auto">
                  <table className="w-full text-sm font-body border-collapse">
                    <thead>
                      <tr className="border-b border-stone-200">
                        <th className="text-left py-2.5 pr-4 font-semibold text-ink-800">Notice period</th>
                        <th className="text-left py-2.5 font-semibold text-ink-800">Cancellation charge</th>
                      </tr>
                    </thead>
                    <tbody className="text-ink-500">
                      <tr className="border-b border-stone-100"><td className="py-2.5 pr-4">More than 90 days before departure</td><td>Deposit only</td></tr>
                      <tr className="border-b border-stone-100"><td className="py-2.5 pr-4">60–89 days before departure</td><td>30% of total cost</td></tr>
                      <tr className="border-b border-stone-100"><td className="py-2.5 pr-4">30–59 days before departure</td><td>60% of total cost</td></tr>
                      <tr className="border-b border-stone-100"><td className="py-2.5 pr-4">15–29 days before departure</td><td>85% of total cost</td></tr>
                      <tr><td className="py-2.5 pr-4">Fewer than 15 days / no-show</td><td>100% of total cost</td></tr>
                    </tbody>
                  </table>
                </div>
                <p className="mt-4 text-sm text-ink-500">
                  We strongly recommend purchasing comprehensive travel insurance at the time of booking
                  to protect against cancellation costs arising from illness, bereavement, or other
                  unforeseen circumstances.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-light text-ink-900 mb-3">4. Amendments by the Client</h2>
                <div className="gold-divider mb-5" />
                <p>
                  If you wish to amend a confirmed booking (e.g. change of departure date, name
                  correction, upgrade request), we will make every reasonable effort to accommodate
                  you. Amendment requests must be submitted in writing and may be subject to
                  administration fees and any additional charges imposed by airlines or hotels.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-light text-ink-900 mb-3">5. Cancellations by Nazareth Travel Group</h2>
                <div className="gold-divider mb-5" />
                <p>
                  We reserve the right to cancel a tour in the following circumstances:
                </p>
                <ul className="list-disc pl-6 mt-3 space-y-2 text-ink-500 text-sm font-body leading-relaxed">
                  <li>Insufficient bookings to make the tour economically viable (minimum group size not reached).</li>
                  <li>Force majeure events including but not limited to natural disasters, war, civil unrest, pandemic, or government travel advisories warning against travel to the destination.</li>
                  <li>Safety concerns assessed by our team or our ground partners.</li>
                </ul>
                <p className="mt-4">
                  In the event of cancellation by us, you will receive a full refund of all monies
                  paid to us within 14 working days, or the option to transfer your booking to an
                  alternative departure date at no additional charge. We accept no further liability
                  beyond this refund.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-light text-ink-900 mb-3">6. Travel Documents &amp; Visas</h2>
                <div className="gold-divider mb-5" />
                <p>
                  It is your sole responsibility to ensure you hold a valid passport (minimum 6 months&apos;
                  validity beyond the return date) and all required visas before departure. We provide
                  guidance and documentation support but cannot be held liable if you are denied entry
                  to any country due to passport or visa issues.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-light text-ink-900 mb-3">7. Travel Insurance</h2>
                <div className="gold-divider mb-5" />
                <p>
                  Group medical and emergency evacuation insurance is included in all standard packages.
                  We strongly recommend that all pilgrims also purchase personal travel insurance
                  covering trip cancellation, personal liability, lost baggage, and medical expenses
                  beyond the group policy limits. We cannot be held liable for losses that adequate
                  personal insurance would have covered.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-light text-ink-900 mb-3">8. Health &amp; Fitness</h2>
                <div className="gold-divider mb-5" />
                <p>
                  By booking, you confirm that you and all members of your party are in reasonable
                  health and physically capable of participating in the activities described in your
                  itinerary. Please disclose any health conditions that may require special assistance
                  or affect others in the group. We reserve the right to exclude a participant from
                  activities or from the tour altogether if their participation poses a risk to themselves
                  or others.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-light text-ink-900 mb-3">9. Our Liability</h2>
                <div className="gold-divider mb-5" />
                <p>
                  We accept responsibility for the proper performance of all travel services we have
                  contracted to provide. However, our liability is limited as follows:
                </p>
                <ul className="list-disc pl-6 mt-3 space-y-2 text-ink-500 text-sm font-body leading-relaxed">
                  <li>We are not liable for any failure or delay caused by circumstances beyond our reasonable control (force majeure).</li>
                  <li>We are not liable for the acts or omissions of third-party service providers (airlines, hotels, local guides) where we have exercised reasonable care in their selection.</li>
                  <li>Any claims must be submitted in writing within 28 days of the return date.</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-2xl font-light text-ink-900 mb-3">10. Behaviour &amp; Conduct</h2>
                <div className="gold-divider mb-5" />
                <p>
                  Pilgrimage is a sacred undertaking. We ask all participants to conduct themselves
                  with dignity, respect, and reverence — particularly at holy sites where dress codes
                  and behavioural standards are strictly observed. We reserve the right to exclude
                  from the tour, without refund, any participant whose behaviour is deemed to be
                  causing harm, offence, or disruption to the group or to the communities we visit.
                </p>
                <p className="mt-4 font-display italic text-ink-600 text-base">
                  &ldquo;Do nothing out of selfish ambition or vain conceit. Rather, in humility value
                  others above yourselves.&rdquo; — Philippians 2:3
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-light text-ink-900 mb-3">11. Photography &amp; Media</h2>
                <div className="gold-divider mb-5" />
                <p>
                  From time to time we photograph and film group pilgrimages for use on our website,
                  social media, and promotional materials. By participating in a tour, you consent to
                  this unless you notify us in writing before departure that you do not wish to appear
                  in such materials.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-light text-ink-900 mb-3">12. Governing Law</h2>
                <div className="gold-divider mb-5" />
                <p>
                  These Terms of Service are governed by and construed in accordance with the laws
                  of the Republic of Kenya. Any dispute arising from or in connection with these
                  Terms shall be subject to the exclusive jurisdiction of the courts of Kenya.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-light text-ink-900 mb-3">13. Contact</h2>
                <div className="gold-divider mb-5" />
                <div className="p-5 rounded-xl bg-olive-50 border border-olive-200 font-body text-sm text-ink-600 space-y-1">
                  <p className="font-semibold text-ink-900">Nazareth Travel Group</p>
                  <p>Nairobi, Kenya</p>
                  <p>
                    Email:{" "}
                    <a href="mailto:info@nazarethtravelgroup.com" className="text-olive-600 hover:underline">
                      info@nazarethtravelgroup.com
                    </a>
                  </p>
                  <p>Phone: +254 700 000 000</p>
                </div>
              </section>

              {/* Closing */}
              <div className="pt-6 border-t border-stone-200 text-center">
                <p className="font-display text-base font-light italic text-ink-500">
                  &ldquo;Commit to the LORD whatever you do, and He will establish your plans.&rdquo;
                </p>
                <p className="text-xs font-body text-olive-600 mt-1">— Proverbs 16:3</p>
              </div>

              <div className="flex gap-4 text-sm font-body justify-center pt-2">
                <Link href="/privacy" className="text-olive-600 hover:underline">Privacy Policy</Link>
                <span className="text-stone-300">|</span>
                <Link href="/" className="text-olive-600 hover:underline">Back to Home</Link>
              </div>

            </div>
          </div>
        </Container>
      </div>

      <CTAStrip />
    </>
  );
}
