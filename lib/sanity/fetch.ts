/**
 * Smart fetch helpers — return live Sanity data when configured,
 * fall back to static seed data so the site works without a CMS.
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
  PACKAGES,
  DESTINATIONS,
  TESTIMONIALS,
  FAQS,
  type Package,
  type Destination,
  type Testimonial,
  type FAQ,
} from "@/lib/data";

/* ─── Packages ─── */
export async function getPackages(): Promise<Package[]> {
  const data = await sanityFetch<Package[]>(ALL_PACKAGES_QUERY);
  return data ?? PACKAGES;
}

export async function getPackageBySlug(slug: string): Promise<Package | undefined> {
  const data = await sanityFetch<Package>(PACKAGE_BY_SLUG_QUERY, { slug });
  return data ?? PACKAGES.find((p) => p.slug === slug);
}

/* ─── Destinations ─── */
export async function getDestinations(): Promise<Destination[]> {
  const data = await sanityFetch<Destination[]>(ALL_DESTINATIONS_QUERY);
  return data ?? DESTINATIONS;
}

export async function getDestinationBySlug(slug: string): Promise<Destination | undefined> {
  const data = await sanityFetch<Destination>(DESTINATION_BY_SLUG_QUERY, { slug });
  return data ?? DESTINATIONS.find((d) => d.slug === slug);
}

/* ─── Testimonials ─── */
export async function getFeaturedTestimonials(): Promise<Testimonial[]> {
  const data = await sanityFetch<Testimonial[]>(FEATURED_TESTIMONIALS_QUERY);
  return data ?? TESTIMONIALS.filter((t) => t.featured);
}

/* ─── FAQs ─── */
export async function getFAQs(): Promise<FAQ[]> {
  const data = await sanityFetch<FAQ[]>(ALL_FAQS_QUERY);
  return data ?? FAQS;
}

/* ─── Blog ─── */
type Post = {
  _id?: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  publishedAt: string;
  cover?: { asset?: { url?: string }; alt?: string };
  body?: unknown;
};

const STATIC_POSTS: Post[] = [
  {
    slug: "what-to-expect-holy-land",
    title: "What to Expect on Your First Holy Land Pilgrimage",
    excerpt: "Walking into the Old City of Jerusalem for the first time is overwhelming in the best possible way.",
    category: "Pilgrim Stories",
    publishedAt: "2026-02-10",
    cover: { asset: { url: "https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?w=600&q=80" } },
  },
];

export async function getPosts(): Promise<Post[]> {
  const data = await sanityFetch<Post[]>(ALL_POSTS_QUERY);
  return data ?? STATIC_POSTS;
}

export async function getPostBySlug(slug: string): Promise<Post | undefined> {
  const data = await sanityFetch<Post>(POST_BY_SLUG_QUERY, { slug });
  return data ?? STATIC_POSTS.find((p) => p.slug === slug);
}

/* ─── Settings ─── */
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
