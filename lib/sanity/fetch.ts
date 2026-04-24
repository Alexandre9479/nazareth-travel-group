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

// ─── Settings ────────────────────────────────────────────────────────────────

type SiteSettings = {
  siteName?: string;
  whatsappNumber?: string;
  phone?: string;
  email?: string;
  address?: string;
  announcement?: { enabled: boolean; text: string; linkText: string; linkUrl: string };
};

export async function getSettings(): Promise<SiteSettings> {
  const data = await sanityFetch<SiteSettings>(SETTINGS_QUERY);
  return data ?? {
    siteName: "Nazareth Travel Group",
    whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "254700000000",
    phone: "+254 700 000 000",
    email: "info@nazarethtravelgroup.com",
  };
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
