import { groq } from "next-sanity";

/* ─── Settings ─── */
export const SETTINGS_QUERY = groq`
  *[_type == "settings"][0] {
    siteName, whatsappNumber, phone, email, address,
    facebookUrl, instagramUrl, youtubeUrl,
    announcement { enabled, text, linkText, linkUrl },
    defaultSeoTitle, defaultSeoDescription
  }
`;

/* ─── Packages ─── */
export const ALL_PACKAGES_QUERY = groq`
  *[_type == "package"] | order(displayOrder asc) {
    _id, title, "slug": slug.current, badge, tagline,
    duration, region, groupSize, difficulty, description,
    featured, highlights, inclusions, exclusions,
    "image": image { asset->{url}, alt },
    "gallery": gallery[] { asset->{url}, alt }
  }
`;

export const PACKAGE_BY_SLUG_QUERY = groq`
  *[_type == "package" && slug.current == $slug][0] {
    _id, title, "slug": slug.current, badge, tagline,
    duration, region, groupSize, difficulty, description,
    featured, highlights, inclusions, exclusions,
    itinerary[] { day, title, description },
    "image": image { asset->{url}, alt },
    "gallery": gallery[] { asset->{url}, alt }
  }
`;

export const FEATURED_PACKAGES_QUERY = groq`
  *[_type == "package" && featured == true] | order(displayOrder asc) [0...6] {
    _id, title, "slug": slug.current, badge, tagline,
    duration, region, groupSize, highlights,
    "image": image { asset->{url}, alt }
  }
`;

/* ─── Destinations ─── */
export const ALL_DESTINATIONS_QUERY = groq`
  *[_type == "destination"] | order(featured desc, name asc) {
    _id, name, "slug": slug.current, country, tagline,
    description, scripture, highlights, bestTime, featured,
    "image": heroImage { asset->{url}, alt },
    "heroImage": heroImage { asset->{url}, alt }
  }
`;

export const DESTINATION_BY_SLUG_QUERY = groq`
  *[_type == "destination" && slug.current == $slug][0] {
    _id, name, "slug": slug.current, country, tagline,
    description, scripture, highlights, bestTime,
    "image": heroImage { asset->{url}, alt },
    "heroImage": heroImage { asset->{url}, alt }
  }
`;

/* ─── Testimonials ─── */
export const FEATURED_TESTIMONIALS_QUERY = groq`
  *[_type == "testimonial" && featured == true] [0...3] {
    _id, name, role, church, location, quote,
    "avatar": avatar { asset->{url} }
  }
`;

/* ─── FAQs ─── */
export const ALL_FAQS_QUERY = groq`
  *[_type == "faq"] | order(order asc) {
    _id, question, answer, category
  }
`;

/* ─── Blog ─── */
export const ALL_POSTS_QUERY = groq`
  *[_type == "post"] | order(publishedAt desc) {
    _id, title, "slug": slug.current, excerpt, category, publishedAt,
    "cover": coverImage { asset->{url}, alt }
  }
`;

export const POST_BY_SLUG_QUERY = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id, title, "slug": slug.current, excerpt, category, publishedAt,
    body, "cover": coverImage { asset->{url}, alt }
  }
`;

/* ─── Departures calendar (from package itinerary or custom schema) ─── */
export const SETTINGS_WHATSAPP_QUERY = groq`
  *[_type == "settings"][0].whatsappNumber
`;
