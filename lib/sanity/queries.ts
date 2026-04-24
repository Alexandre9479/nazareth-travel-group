import { groq } from "next-sanity";

export const SETTINGS_QUERY = groq`
  *[_type == "settings"][0] {
    siteName, whatsappNumber, phone, email, address,
    facebookUrl, instagramUrl, youtubeUrl,
    announcement { enabled, text, linkText, linkUrl },
    defaultSeoTitle, defaultSeoDescription
  }
`;

export const ALL_PACKAGES_QUERY = groq`
  *[_type == "package"] | order(displayOrder asc) {
    _id,
    title,
    "slug": slug.current,
    badge,
    tagline,
    duration,
    region,
    groupSize,
    difficulty,
    description,
    featured,
    highlights,
    inclusions,
    exclusions,
    displayOrder,
    "image": coalesce(image.asset->url, ""),
    "imageAlt": coalesce(image.alt, title),
    "gallery": gallery[].asset->url
  }
`;

export const PACKAGE_BY_SLUG_QUERY = groq`
  *[_type == "package" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    badge,
    tagline,
    duration,
    region,
    groupSize,
    difficulty,
    description,
    featured,
    highlights,
    inclusions,
    exclusions,
    "itinerary": itinerary[] { day, title, description, "key": _key },
    "image": coalesce(image.asset->url, ""),
    "imageAlt": coalesce(image.alt, title),
    "gallery": gallery[].asset->url
  }
`;

export const ALL_DESTINATIONS_QUERY = groq`
  *[_type == "destination"] | order(featured desc, name asc) {
    _id,
    name,
    "slug": slug.current,
    country,
    tagline,
    description,
    scripture,
    highlights,
    bestTime,
    featured,
    "image": coalesce(heroImage.asset->url, ""),
    "heroImage": coalesce(heroImage.asset->url, ""),
    "imageAlt": coalesce(heroImage.alt, name)
  }
`;

export const DESTINATION_BY_SLUG_QUERY = groq`
  *[_type == "destination" && slug.current == $slug][0] {
    _id,
    name,
    "slug": slug.current,
    country,
    tagline,
    description,
    scripture,
    highlights,
    bestTime,
    featured,
    "image": coalesce(heroImage.asset->url, ""),
    "heroImage": coalesce(heroImage.asset->url, ""),
    "imageAlt": coalesce(heroImage.alt, name)
  }
`;

export const FEATURED_TESTIMONIALS_QUERY = groq`
  *[_type == "testimonial" && featured == true][0...3] {
    _id,
    name,
    role,
    church,
    location,
    quote,
    featured,
    "avatar": coalesce(avatar.asset->url, "")
  }
`;

export const ALL_FAQS_QUERY = groq`
  *[_type == "faq"] | order(order asc) {
    "id": _id,
    question,
    answer,
    category
  }
`;

export const ALL_POSTS_QUERY = groq`
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    category,
    publishedAt,
    "cover": coalesce(coverImage.asset->url, ""),
    "coverAlt": coalesce(coverImage.alt, title)
  }
`;

export const POST_BY_SLUG_QUERY = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    category,
    publishedAt,
    body,
    "cover": coalesce(coverImage.asset->url, ""),
    "coverAlt": coalesce(coverImage.alt, title)
  }
`;
