import type { Metadata } from "next";
import Hero from "@/components/hero/Hero";
import ScriptureVerse from "@/components/home/ScriptureVerse";
import SocialProofTicker from "@/components/home/SocialProofTicker";
import TrustBadges from "@/components/home/TrustBadges";
import Features from "@/components/home/Features";
import PackagesGrid from "@/components/home/PackagesGrid";
import DestinationsBento from "@/components/home/DestinationsBento";
import OurStory from "@/components/home/OurStory";
import DeparturesCalendar from "@/components/home/DeparturesCalendar";
import Testimonials from "@/components/home/Testimonials";
import CTAStrip from "@/components/home/CTAStrip";
import StatsCounter from "@/components/home/StatsCounter";
import JsonLd, { travelAgencySchema } from "@/components/shared/JsonLd";
import {
  getPackages,
  getDestinations,
  getFeaturedTestimonials,
  getSettings,
  getScriptures,
  getDepartures,
} from "@/lib/sanity/fetch";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Nazareth Travel Group — Holy Land Pilgrimages from Africa",
  description:
    "Walk where Jesus walked. Africa's most trusted Christian pilgrimage company — serving Kenyan churches with Holy Land, Rome, Egypt & Jordan tours since 2013.",
};

export default async function HomePage() {
  const [packages, destinations, testimonials, settings, scriptures, departures] = await Promise.all([
    getPackages(),
    getDestinations(),
    getFeaturedTestimonials(),
    getSettings(),
    getScriptures(),
    getDepartures(),
  ]);

  return (
    <>
      <JsonLd data={travelAgencySchema()} />
      <Hero settings={settings} />
      <ScriptureVerse scriptures={scriptures} />
      <SocialProofTicker items={settings.tickerItems} />
      <StatsCounter stats={settings.heroStats} />
      <TrustBadges badges={settings.trustBadges} />
      <Features
        eyebrow={settings.featuresEyebrow}
        headline={settings.featuresHeadline}
        subheadline={settings.featuresSubheadline}
        items={settings.featureItems}
      />
      <PackagesGrid packages={packages} />
      <DestinationsBento destinations={destinations} />
      <OurStory
        eyebrow={settings.storyEyebrow}
        headline={settings.storyHeadline}
        paragraph1={settings.storyParagraph1}
        paragraph2={settings.storyParagraph2}
        quote={settings.storyQuote}
        quoteAuthor={settings.storyQuoteAuthor}
        statValue={settings.storyStatValue}
        statLabel={settings.storyStatLabel}
      />
      <DeparturesCalendar departures={departures} />
      <Testimonials testimonials={testimonials} />
      <CTAStrip
        eyebrow={settings.ctaEyebrow}
        headline={settings.ctaHeadline}
        headlineAccent={settings.ctaHeadlineAccent}
        subheadline={settings.ctaSubheadline}
        whatsappLabel={settings.ctaWhatsAppLabel}
        emailLabel={settings.ctaEmailLabel}
      />
    </>
  );
}
