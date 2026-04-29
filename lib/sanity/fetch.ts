/**
 * Data fetching layer — Sanity first, static seed fallback.
 * All pages use these functions. When Sanity is configured and has content,
 * it wins. Static data fills any gaps (e.g. images not yet uploaded).
 */
import { sanityFetch } from "./client";
import {
  ALL_PACKAGES_QUERY,
  PACKAGE_BY_SLUG_QUERY,
  ALL_DESTINATIONS_QUERY,
  DESTINATION_BY_SLUG_QUERY,
  FEATURED_TESTIMONIALS_QUERY,
  ALL_FAQS_QUERY,
  ALL_POSTS_QUERY,
  POST_BY_SLUG_QUERY,
  SETTINGS_QUERY,
  SCRIPTURES_QUERY,
  DEPARTURES_QUERY,
} from "./queries";
import {
  PACKAGES as STATIC_PACKAGES,
  DESTINATIONS as STATIC_DESTINATIONS,
  TESTIMONIALS as STATIC_TESTIMONIALS,
  FAQS as STATIC_FAQS,
  type Package,
  type Destination,
  type Testimonial,
  type FAQ,
} from "@/lib/data";

// Merge Sanity record with static fallback for any missing/empty fields
function mergePackage(sanity: Record<string, unknown>, fallback: Package): Package {
  return {
    ...fallback,
    title: (sanity.title as string) || fallback.title,
    slug: (sanity.slug as string) || fallback.slug,
    badge: (sanity.badge as string) || fallback.badge,
    tagline: (sanity.tagline as string) || fallback.tagline,
    duration: (sanity.duration as string) || fallback.duration,
    region: (sanity.region as string) || fallback.region,
    groupSize: (sanity.groupSize as string) || fallback.groupSize,
    difficulty: (sanity.difficulty as string) || fallback.difficulty,
    description: (sanity.description as string) || fallback.description,
    featured: typeof sanity.featured === "boolean" ? sanity.featured : fallback.featured,
    highlights: (sanity.highlights as string[])?.length ? sanity.highlights as string[] : fallback.highlights,
    inclusions: (sanity.inclusions as string[])?.length ? sanity.inclusions as string[] : fallback.inclusions,
    exclusions: (sanity.exclusions as string[])?.length ? sanity.exclusions as string[] : fallback.exclusions,
    itinerary: (sanity.itinerary as Package["itinerary"])?.length ? sanity.itinerary as Package["itinerary"] : fallback.itinerary,
    // Image: use Sanity CDN URL if uploaded, otherwise keep static Unsplash fallback
    image: (sanity.image as string) || fallback.image,
    gallery: (sanity.gallery as string[])?.filter(Boolean).length
      ? (sanity.gallery as string[]).filter(Boolean)
      : fallback.gallery,
    id: fallback.id,
    badgeVariant: fallback.badgeVariant,
    destinations: fallback.destinations,
  };
}

function mergeDestination(sanity: Record<string, unknown>, fallback: Destination): Destination {
  return {
    ...fallback,
    name: (sanity.name as string) || fallback.name,
    slug: (sanity.slug as string) || fallback.slug,
    country: (sanity.country as string) || fallback.country,
    tagline: (sanity.tagline as string) || fallback.tagline,
    description: (sanity.description as string) || fallback.description,
    scripture: (sanity.scripture as string) || fallback.scripture,
    highlights: (sanity.highlights as string[])?.length ? sanity.highlights as string[] : fallback.highlights,
    bestTime: (sanity.bestTime as string) || fallback.bestTime,
    featured: typeof sanity.featured === "boolean" ? sanity.featured : fallback.featured,
    image: (sanity.image as string) || fallback.image,
    heroImage: (sanity.heroImage as string) || fallback.heroImage,
    id: fallback.id,
  };
}

function mergeTestimonial(sanity: Record<string, unknown>, fallback: Testimonial): Testimonial {
  return {
    ...fallback,
    name: (sanity.name as string) || fallback.name,
    role: (sanity.role as string) || fallback.role,
    church: (sanity.church as string) || fallback.church,
    location: (sanity.location as string) || fallback.location,
    quote: (sanity.quote as string) || fallback.quote,
    featured: typeof sanity.featured === "boolean" ? sanity.featured : fallback.featured,
    avatar: (sanity.avatar as string) || fallback.avatar,
  };
}

// ─── Packages ───────────────────────────────────────────────────────────────

export async function getPackages(): Promise<Package[]> {
  const raw = await sanityFetch<Record<string, unknown>[]>(ALL_PACKAGES_QUERY);
  if (!raw?.length) return STATIC_PACKAGES;

  return raw.map((sanityPkg) => {
    const slug = sanityPkg.slug as string;
    const fallback = STATIC_PACKAGES.find((p) => p.slug === slug) ?? STATIC_PACKAGES[0];
    return mergePackage(sanityPkg, fallback);
  });
}

export async function getPackageBySlug(slug: string): Promise<Package | undefined> {
  const raw = await sanityFetch<Record<string, unknown>>(PACKAGE_BY_SLUG_QUERY, { slug });
  const fallback = STATIC_PACKAGES.find((p) => p.slug === slug);
  if (!raw) return fallback;
  if (!fallback) return undefined;
  return mergePackage(raw, fallback);
}

// ─── Destinations ────────────────────────────────────────────────────────────

export async function getDestinations(): Promise<Destination[]> {
  const raw = await sanityFetch<Record<string, unknown>[]>(ALL_DESTINATIONS_QUERY);
  if (!raw?.length) return STATIC_DESTINATIONS;

  return raw.map((sanityDest) => {
    const slug = sanityDest.slug as string;
    const fallback = STATIC_DESTINATIONS.find((d) => d.slug === slug) ?? STATIC_DESTINATIONS[0];
    return mergeDestination(sanityDest, fallback);
  });
}

export async function getDestinationBySlug(slug: string): Promise<Destination | undefined> {
  const raw = await sanityFetch<Record<string, unknown>>(DESTINATION_BY_SLUG_QUERY, { slug });
  const fallback = STATIC_DESTINATIONS.find((d) => d.slug === slug);
  if (!raw) return fallback;
  if (!fallback) return undefined;
  return mergeDestination(raw, fallback);
}

// ─── Testimonials ─────────────────────────────────────────────────────────────

export async function getFeaturedTestimonials(): Promise<Testimonial[]> {
  const raw = await sanityFetch<Record<string, unknown>[]>(FEATURED_TESTIMONIALS_QUERY);
  if (!raw?.length) return STATIC_TESTIMONIALS.filter((t) => t.featured);

  const staticFeatured = STATIC_TESTIMONIALS.filter((t) => t.featured);
  return raw.map((sanityT, i) => {
    const fallback = staticFeatured[i] ?? staticFeatured[0];
    return mergeTestimonial(sanityT, fallback);
  });
}

// ─── FAQs ────────────────────────────────────────────────────────────────────

export async function getFAQs(): Promise<FAQ[]> {
  const raw = await sanityFetch<FAQ[]>(ALL_FAQS_QUERY);
  return raw?.length ? raw : STATIC_FAQS;
}

// ─── Scriptures ──────────────────────────────────────────────────────────────

import { SCRIPTURES as STATIC_SCRIPTURES } from "@/lib/data";

export async function getScriptures() {
  const data = await sanityFetch<{ id: string; verse: string; reference: string }[]>(SCRIPTURES_QUERY);
  return data?.length ? data : STATIC_SCRIPTURES;
}

// ─── Departures ──────────────────────────────────────────────────────────────

import { DEPARTURES as STATIC_DEPARTURES } from "@/lib/data";

export async function getDepartures() {
  const data = await sanityFetch<{
    id: string; tourTitle: string; departureMonth: string; type: string; seatsLeft: number;
  }[]>(DEPARTURES_QUERY);
  if (data?.length) return data.map((d) => ({
    month: d.departureMonth,
    tour: d.tourTitle,
    seatsLeft: d.seatsLeft,
    type: d.type,
  }));
  return STATIC_DEPARTURES;
}

// ─── Settings ────────────────────────────────────────────────────────────────

export type SiteSettings = {
  siteName?: string;
  whatsappNumber?: string;
  phone?: string;
  email?: string;
  address?: string;
  facebookUrl?: string;
  instagramUrl?: string;
  youtubeUrl?: string;
  announcement?: { enabled: boolean; text: string; linkText: string; linkUrl: string };
  heroEyebrow?: string;
  heroHeadline?: string;
  heroHeadlineAccent?: string;
  heroSubheadline?: string;
  heroCTAPrimary?: string;
  heroCTASecondary?: string;
  heroStats?: { value: string; label: string }[];
  featuresEyebrow?: string;
  featuresHeadline?: string;
  featuresSubheadline?: string;
  featureItems?: { number: string; title: string; description: string }[];
  storyEyebrow?: string;
  storyHeadline?: string;
  storyParagraph1?: string;
  storyParagraph2?: string;
  storyQuote?: string;
  storyQuoteAuthor?: string;
  storyStatValue?: string;
  storyStatLabel?: string;
  ctaEyebrow?: string;
  ctaHeadline?: string;
  ctaHeadlineAccent?: string;
  ctaSubheadline?: string;
  ctaWhatsAppLabel?: string;
  ctaEmailLabel?: string;
  tickerItems?: string[];
  trustBadges?: { abbr: string; name: string; logoUrl?: string }[];
};

const SETTINGS_FALLBACK: SiteSettings = {
  siteName: "Nazareth Travel Group",
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "254700000000",
  phone: "+254 700 000 000",
  email: "info@nazarethtravelgroup.com",
  heroEyebrow: "Holy Land Pilgrimages from Africa",
  heroHeadline: "Walk where Jesus walked.",
  heroHeadlineAccent: "Your faith awaits.",
  heroSubheadline: "Africa's most trusted Christian pilgrimage company. We take Kenyan churches, pastors, and individuals to the Holy Land, Rome, Egypt, and beyond — with care, integrity, and deep reverence.",
  heroCTAPrimary: "Plan My Pilgrimage",
  heroCTASecondary: "Chat on WhatsApp",
  heroStats: [
    { value: "12+", label: "Years of service" },
    { value: "5,000+", label: "Pilgrims served" },
    { value: "4.9", label: "Average rating" },
  ],
  featuresEyebrow: "Why Choose Us",
  featuresHeadline: "Why pilgrims choose Nazareth Travel Group",
  featuresSubheadline: "Sacred travel deserves more than a booking portal. It deserves a company that prays with you before the flight and celebrates with you when you return.",
  featureItems: [
    { number: "01", title: "Trusted & Licensed", description: "Fully licensed and insured with IATA, Kenya Tourism Board, and ATTA membership. Over a decade of safe, dependable pilgrimage service. Your peace of mind is our foundation." },
    { number: "02", title: "Scripture-Led Journeys", description: "Every site visit is rooted in the Word. Our expert Christian guides bring the Bible to life in context — not as tourists, but as pilgrims with purpose and prayerfulness." },
    { number: "03", title: "Personal, Caring Service", description: "We are a small, personal company — not a factory. You'll have a dedicated coordinator from first inquiry to your return home. Your pastor can lead as you travel." },
    { number: "04", title: "Africa-First Expertise", description: "We understand the African Christian pilgrim — the budget, the prayer style, the community travel. Our packages are crafted specifically for Kenyan and African churches." },
  ],
  storyEyebrow: "Our Story",
  storyHeadline: "Born from a calling, built on trust",
  storyParagraph1: "Nazareth Travel Group was founded with a single conviction: every African Christian deserves the chance to walk where their Lord walked. We started humbly — one tour, one group of faith-filled pilgrims from a Nairobi church — and grew through the most powerful marketing in the world: transformed lives.",
  storyParagraph2: "Today we are Africa's most trusted Holy Land pilgrimage company, having taken thousands of pilgrims from Kenya and the wider African continent to Israel, Rome, Egypt, Greece, Turkey and Jordan. Every group returns changed. Every church that travels with us comes back on fire.",
  storyQuote: "To stand at the empty tomb and know — truly know — that He is risen. That is what we offer. Not a holiday. A transformation.",
  storyQuoteAuthor: "Founder, Nazareth Travel Group",
  storyStatValue: "12+",
  storyStatLabel: "years serving African pilgrims",
  ctaEyebrow: "Your sacred journey begins here",
  ctaHeadline: "Ready to walk the",
  ctaHeadlineAccent: "Holy Land?",
  ctaSubheadline: "Reach out today and we'll help you plan a pilgrimage that will change your life — and your church — forever.",
  ctaWhatsAppLabel: "Chat on WhatsApp",
  ctaEmailLabel: "Send an Email Inquiry",
  tickerItems: [
    "Rev. Peter just inquired about the Classic Holy Land tour",
    "Sister Margaret requested info on the Rome Pilgrimage",
    "Bishop Ochieng booked for a group of 45",
    "Mrs. Wanjiku is planning her second pilgrimage",
    "Pastor David requested the Easter 2026 package",
    "Sr. Agnes from Mombasa joined the October group",
  ],
  trustBadges: [
    { abbr: "IATA", name: "IATA Member" },
    { abbr: "KTB", name: "Kenya Tourism Board" },
    { abbr: "ATTA", name: "ATTA Member" },
    { abbr: "KATA", name: "KATA Member" },
    { abbr: "KTRA", name: "Kenya Tourism Regulatory Authority" },
  ],
};

export async function getSettings(): Promise<SiteSettings> {
  const data = await sanityFetch<SiteSettings>(SETTINGS_QUERY);
  if (!data) return SETTINGS_FALLBACK;
  // Deep merge: use CMS value if present, otherwise fallback
  return { ...SETTINGS_FALLBACK, ...Object.fromEntries(Object.entries(data).filter(([, v]) => v !== null && v !== undefined && v !== "")) };
}

// ─── Blog ─────────────────────────────────────────────────────────────────────

type Post = {
  _id?: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  publishedAt: string;
  cover?: string;
  body?: unknown;
};

const STATIC_POSTS: Post[] = [
  {
    slug: "what-to-expect-holy-land",
    title: "What to Expect on Your First Holy Land Pilgrimage",
    excerpt: "Walking into the Old City of Jerusalem for the first time is overwhelming in the best possible way.",
    category: "Pilgrim Stories",
    publishedAt: "2026-02-10",
    cover: "https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?w=600&q=80",
  },
];

export async function getPosts(): Promise<Post[]> {
  const data = await sanityFetch<Post[]>(ALL_POSTS_QUERY);
  return data?.length ? data : STATIC_POSTS;
}

export async function getPostBySlug(slug: string): Promise<Post | undefined> {
  const data = await sanityFetch<Post>(POST_BY_SLUG_QUERY, { slug });
  return data ?? STATIC_POSTS.find((p) => p.slug === slug);
}
