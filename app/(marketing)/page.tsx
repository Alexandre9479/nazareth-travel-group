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
import JsonLd, { travelAgencySchema } from "@/components/shared/JsonLd";
import StatsCounter from "@/components/home/StatsCounter";

export const metadata: Metadata = {
  title: "Nazareth Travel Group — Holy Land Pilgrimages from Africa",
  description:
    "Walk where Jesus walked. Africa's most trusted Christian pilgrimage company — serving Kenyan churches with Holy Land, Rome, Egypt & Jordan tours since 2013.",
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={travelAgencySchema()} />
      <Hero />
      <ScriptureVerse />
      <SocialProofTicker />
      <StatsCounter />
      <TrustBadges />
      <Features />
      <PackagesGrid />
      <DestinationsBento />
      <OurStory />
      <DeparturesCalendar />
      <Testimonials />
      <CTAStrip />
    </>
  );
}
