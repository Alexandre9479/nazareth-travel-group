import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/shared/Container";
import CTAStrip from "@/components/home/CTAStrip";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Nazareth Travel Group collects, uses, and protects your personal information.",
};

const LAST_UPDATED = "1 April 2026";

export default function PrivacyPage() {
  return (
    <>
      {/* Hero */}
      <div className="bg-olive-900 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-12 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-300 font-body mb-3">
            Legal
          </p>
          <div className="gold-divider mx-auto mb-5" />
          <h1 className="font-display text-4xl sm:text-5xl font-light text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-stone-400 font-body text-sm">Last updated: {LAST_UPDATED}</p>
        </div>
      </div>

      <div className="bg-stone-50 py-16 md:py-24">
        <Container>
          <div className="max-w-3xl mx-auto">
            {/* Opening scripture */}
            <blockquote className="mb-12 border-l-2 border-gold-500 pl-6 py-1">
              <p className="font-display text-lg font-light italic text-ink-700 leading-relaxed">
                &ldquo;Whatever you do, do it all for the glory of God.&rdquo;
              </p>
              <footer className="mt-2 text-sm font-body text-olive-600 not-italic">
                — 1 Corinthians 10:31
              </footer>
            </blockquote>

            <div className="prose-pilgrimage space-y-10">

              <section>
                <h2 className="font-display text-2xl font-light text-ink-900 mb-3">Our Commitment to You</h2>
                <div className="gold-divider mb-5" />
                <p>
                  At Nazareth Travel Group, we are entrusted with the personal information of pilgrims,
                  pastors, and church leaders who place their sacred journeys in our hands. We treat
                  that trust with the same reverence we bring to every pilgrimage we organise. This
                  Privacy Policy explains — in plain language — what information we collect, why we
                  collect it, and how we protect it.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-light text-ink-900 mb-3">1. Information We Collect</h2>
                <div className="gold-divider mb-5" />
                <p>We collect information you provide directly to us, including:</p>
                <ul className="list-disc pl-6 mt-3 space-y-2 text-ink-500 text-sm font-body leading-relaxed">
                  <li><strong className="text-ink-700">Identity information:</strong> Full name, title (e.g. Pastor, Sister, Bishop), church or organisation name.</li>
                  <li><strong className="text-ink-700">Contact information:</strong> Email address, phone number, WhatsApp number, and physical address.</li>
                  <li><strong className="text-ink-700">Travel information:</strong> Passport details (provided at booking), dietary requirements, health considerations relevant to travel, preferred departure dates.</li>
                  <li><strong className="text-ink-700">Payment information:</strong> Bank transfer references and M-Pesa transaction details. We do not store credit card numbers — payments are processed through secure third-party providers.</li>
                  <li><strong className="text-ink-700">Inquiry data:</strong> Messages submitted through our contact form, WhatsApp chats, and email correspondence.</li>
                </ul>
                <p className="mt-4">
                  We also collect limited technical information automatically when you visit our website,
                  including your IP address, browser type, pages visited, and referring website. This is
                  collected via analytics tools and helps us improve your browsing experience.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-light text-ink-900 mb-3">2. How We Use Your Information</h2>
                <div className="gold-divider mb-5" />
                <p>We use the information we collect to:</p>
                <ul className="list-disc pl-6 mt-3 space-y-2 text-ink-500 text-sm font-body leading-relaxed">
                  <li>Process your pilgrimage booking and manage your travel arrangements.</li>
                  <li>Communicate with you about your booking, including itinerary updates, visa guidance, and pre-departure information.</li>
                  <li>Respond to your inquiries and provide customer support.</li>
                  <li>Send occasional newsletters, upcoming departure notifications, and seasonal offers — only if you have opted in.</li>
                  <li>Comply with legal obligations, including passport and visa documentation requirements.</li>
                  <li>Improve our website, services, and programmes based on aggregated usage data.</li>
                </ul>
                <p className="mt-4">
                  We will never sell, rent, or trade your personal information to third parties for
                  marketing purposes. Your data is used solely to serve you.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-light text-ink-900 mb-3">3. Information Sharing</h2>
                <div className="gold-divider mb-5" />
                <p>
                  We share your information only where necessary to deliver your pilgrimage, and only
                  with trusted partners who are contractually bound to protect it:
                </p>
                <ul className="list-disc pl-6 mt-3 space-y-2 text-ink-500 text-sm font-body leading-relaxed">
                  <li><strong className="text-ink-700">Airlines and transport providers</strong> — to issue tickets and boarding passes.</li>
                  <li><strong className="text-ink-700">Hotels and accommodation partners</strong> — to make reservations in your name.</li>
                  <li><strong className="text-ink-700">Licensed local guides</strong> — to coordinate your on-the-ground experience.</li>
                  <li><strong className="text-ink-700">Travel insurance providers</strong> — to issue group medical coverage.</li>
                  <li><strong className="text-ink-700">Government and visa authorities</strong> — as required by immigration law.</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-2xl font-light text-ink-900 mb-3">4. Data Security</h2>
                <div className="gold-divider mb-5" />
                <p>
                  We implement appropriate technical and organisational measures to protect your personal
                  information against unauthorised access, alteration, disclosure, or destruction.
                  Our website uses HTTPS encryption. Sensitive documents are stored on secure, access-controlled systems.
                </p>
                <p className="mt-4">
                  No method of transmission over the internet or electronic storage is 100% secure.
                  While we strive to protect your information, we cannot guarantee absolute security.
                  In the event of a data breach that affects your rights, we will notify you promptly
                  in accordance with applicable law.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-light text-ink-900 mb-3">5. Cookies</h2>
                <div className="gold-divider mb-5" />
                <p>
                  Our website uses cookies — small text files stored on your device — to improve your
                  browsing experience. We use:
                </p>
                <ul className="list-disc pl-6 mt-3 space-y-2 text-ink-500 text-sm font-body leading-relaxed">
                  <li><strong className="text-ink-700">Essential cookies:</strong> Required for the website to function correctly. These cannot be disabled.</li>
                  <li><strong className="text-ink-700">Analytics cookies:</strong> Help us understand how visitors use our site (e.g. pages visited, time spent). Collected only with your consent.</li>
                </ul>
                <p className="mt-4">
                  You can control cookie preferences through the banner shown on your first visit,
                  or by adjusting your browser settings. Disabling analytics cookies will not affect
                  your ability to use the site.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-light text-ink-900 mb-3">6. Your Rights</h2>
                <div className="gold-divider mb-5" />
                <p>You have the right to:</p>
                <ul className="list-disc pl-6 mt-3 space-y-2 text-ink-500 text-sm font-body leading-relaxed">
                  <li><strong className="text-ink-700">Access:</strong> Request a copy of the personal data we hold about you.</li>
                  <li><strong className="text-ink-700">Correction:</strong> Ask us to correct inaccurate or incomplete information.</li>
                  <li><strong className="text-ink-700">Deletion:</strong> Request that we delete your data, subject to legal obligations (e.g. we may need to retain financial records).</li>
                  <li><strong className="text-ink-700">Objection:</strong> Object to our processing of your data for marketing purposes at any time.</li>
                  <li><strong className="text-ink-700">Portability:</strong> Request your data in a commonly used, machine-readable format.</li>
                </ul>
                <p className="mt-4">
                  To exercise any of these rights, please contact us at{" "}
                  <a href="mailto:info@nazarethtravelgroup.com" className="text-olive-600 hover:underline">
                    info@nazarethtravelgroup.com
                  </a>
                  . We will respond within 30 days.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-light text-ink-900 mb-3">7. Data Retention</h2>
                <div className="gold-divider mb-5" />
                <p>
                  We retain your personal information for as long as necessary to fulfil the purposes
                  for which it was collected, including satisfying legal, accounting, and reporting
                  requirements. Booking records are typically retained for 7 years in compliance with
                  Kenyan tax law. Marketing consent records are retained until you withdraw consent.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-light text-ink-900 mb-3">8. Third-Party Links</h2>
                <div className="gold-divider mb-5" />
                <p>
                  Our website may contain links to third-party websites, including airline booking
                  portals, embassy visa pages, and WhatsApp. We are not responsible for the privacy
                  practices of these external sites and encourage you to review their policies separately.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-light text-ink-900 mb-3">9. Children&apos;s Privacy</h2>
                <div className="gold-divider mb-5" />
                <p>
                  Our services are not directed at children under the age of 18. We do not knowingly
                  collect personal information from children without parental consent. Children travelling
                  as part of a family or church group are covered under the responsible adult&apos;s
                  booking information.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-light text-ink-900 mb-3">10. Changes to This Policy</h2>
                <div className="gold-divider mb-5" />
                <p>
                  We may update this Privacy Policy from time to time to reflect changes in our practices
                  or legal requirements. The &quot;Last updated&quot; date at the top of this page indicates
                  when the most recent changes were made. Continued use of our services after any
                  changes constitutes your acceptance of the updated policy.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-light text-ink-900 mb-3">11. Contact Us</h2>
                <div className="gold-divider mb-5" />
                <p>
                  If you have any questions, concerns, or requests regarding this Privacy Policy or
                  the way we handle your personal information, please reach out to us:
                </p>
                <div className="mt-4 p-5 rounded-xl bg-olive-50 border border-olive-200 font-body text-sm text-ink-600 space-y-1">
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
                  &ldquo;And you will know the truth, and the truth will set you free.&rdquo;
                </p>
                <p className="text-xs font-body text-olive-600 mt-1">— John 8:32</p>
              </div>

              <div className="flex gap-4 text-sm font-body justify-center pt-2">
                <Link href="/terms" className="text-olive-600 hover:underline">Terms of Service</Link>
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
