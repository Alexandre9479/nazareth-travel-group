import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import Section from "@/components/shared/Section";
import SectionHeader from "@/components/shared/SectionHeader";
import CTAStrip from "@/components/home/CTAStrip";

export const metadata: Metadata = {
  title: "Planning Tips",
  description:
    "Practical guidance for Kenyan pilgrims — visas, packing, dress code, money, safety, and spiritual preparation.",
};

const TIPS = [
  {
    category: "Visas & Documents",
    items: [
      "Kenyan passport holders enter Israel visa-free (90 days). Ensure your passport is valid for at least 6 months from travel.",
      "Jordan: we include the Jordan Pass (covers visa + Petra) in our Holy Land & Jordan package.",
      "Italy/Rome: Kenyan citizens need a Schengen visa. Apply at the Italian Embassy Nairobi at least 6–8 weeks ahead.",
      "Egypt: On-arrival visa available for Kenyan citizens at Cairo Airport.",
      "Make 3 photocopies of your passport and keep them in separate bags. Save a digital copy on email.",
    ],
  },
  {
    category: "What to Pack",
    items: [
      "Comfortable walking shoes — you will walk 5–10km per day on cobblestones and uneven terrain.",
      "Modest clothing that covers shoulders and knees for all holy sites (churches, mosques, synagogues).",
      "A light shawl or wrap for women — available at most holy site entrances but bring your own.",
      "Sun hat, high-SPF sunscreen, and sunglasses — the Mediterranean sun is intense.",
      "Small daypack for daily site visits. Leave large luggage at the hotel.",
      "Power adapter (Type C in Israel; Type G in Jordan). Portable USB charger.",
      "Small first-aid kit: blister plasters, paracetamol, stomach tablets, hand sanitiser.",
    ],
  },
  {
    category: "Weather & When to Go",
    items: [
      "Spring (March–May): Ideal. Wildflowers bloom, temperatures 18–24°C, fewer crowds.",
      "Autumn (September–November): Equally ideal — cooling after summer heat.",
      "Summer (June–August): Very hot (30–38°C), crowded, not recommended for elderly or children.",
      "Winter (December–February): Cool (8–15°C) and sometimes rainy, but deeply moving at Christmas. Book 12+ months ahead.",
      "Easter: The most significant time to be in Jerusalem — crowds are large; book 18 months ahead.",
    ],
  },
  {
    category: "Dress Code at Holy Sites",
    items: [
      "Church of the Holy Sepulchre: Covered shoulders and knees. No shorts.",
      "Western Wall (Jewish): Head coverings provided for men. Women enter the women's section.",
      "Dome of the Rock / Al-Aqsa: Non-Muslims may not always have access. Covered clothing required.",
      "Mosques in Jordan: Women require head covering, full-length clothing.",
      "Sea of Galilee boat: Casual dress acceptable.",
    ],
  },
  {
    category: "Money & Payments",
    items: [
      "Israel uses the New Israeli Shekel (NIS). We can advise on exchange rates.",
      "US Dollars and Euros are widely accepted in tourist areas of Israel and Jordan.",
      "Credit cards (Visa/Mastercard) are accepted almost everywhere in Israel.",
      "Jordan uses the Jordanian Dinar. ATMs readily available.",
      "Bring some USD/EUR cash for tips, souvenirs, and personal expenses.",
      "Budget approximately USD 30–50 per day for personal expenses.",
    ],
  },
  {
    category: "Health & Safety",
    items: [
      "No vaccinations are specifically required for Israel or Jordan — but check with your doctor.",
      "Travel insurance is included in our packages. Carry your insurance card.",
      "Israel's medical facilities are excellent. Jordan's are good in Amman and Aqaba.",
      "Drink only bottled water in all countries. Avoid ice in questionable establishments.",
      "The Holy Land has been safely visited by millions of pilgrims annually. Our coordinators monitor security.",
    ],
  },
  {
    category: "Spiritual Preparation",
    items: [
      "Begin a daily reading of the Gospels and Acts 1–4 weeks before departure.",
      "Use a Holy Land Bible study guide or commentary to enrich each site you will visit.",
      "Bring your Bible — you will want to read scripture on-site. A small, lightweight one is ideal.",
      "Consider a personal prayer intention or spiritual goal for the pilgrimage.",
      "If Catholic: arrange a confession before departure. Confession is available at many holy sites.",
      "Keep a pilgrim journal — write down what you pray, see, and feel each day.",
    ],
  },
];

export default function PlanningTipsPage() {
  return (
    <>
      <div className="bg-olive-900 py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-12 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-300 font-body mb-3">
            Pilgrim Preparation
          </p>
          <div className="gold-divider mx-auto mb-5" />
          <h1 className="font-display text-4xl sm:text-5xl font-light text-white mb-5">
            Planning Tips
          </h1>
          <p className="text-stone-300 font-body text-lg max-w-xl mx-auto">
            Everything you need to know to prepare body, mind, and spirit for
            your Holy Land pilgrimage.
          </p>
        </div>
      </div>

      <Section className="bg-stone-50">
        <div className="grid md:grid-cols-2 gap-7">
          {TIPS.map((section) => (
            <div
              key={section.category}
              className="bg-white rounded-2xl border border-stone-200 shadow-sm p-7"
            >
              <h2 className="font-display text-xl font-light text-ink-900 mb-2">
                {section.category}
              </h2>
              <div className="gold-divider mb-5" />
              <ul className="space-y-3">
                {section.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 font-body text-sm text-ink-500 leading-relaxed">
                    <CheckCircle2 className="h-4 w-4 text-olive-500 mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <div className="bg-olive-50 border-y border-olive-200">
        <div className="mx-auto max-w-7xl px-6 md:px-12 py-12">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="font-display text-3xl font-light text-ink-900 mb-4">
                We send every registered pilgrim a full preparation guide
              </h2>
              <p className="font-body text-ink-500 leading-relaxed">
                Once you book with us, you&apos;ll receive our comprehensive Pilgrim
                Preparation Pack — including a packing checklist, daily scripture
                readings, site-by-site guides, and prayer intentions for each day
                of the journey. Nothing is left to chance.
              </p>
            </div>
            <div className="relative h-64 rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1504093376055-b3094b660b3e?w=600&q=80"
                alt="Sea of Galilee at dawn"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>

      <CTAStrip />
    </>
  );
}
