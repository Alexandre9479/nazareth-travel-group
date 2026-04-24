/* Renders JSON-LD structured data as an inline script tag */
export default function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/* ─── Schema builders ─── */

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://nazarethtravelgroup.com";

export function travelAgencySchema() {
  return {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: "Nazareth Travel Group",
    description:
      "Africa's leading Christian pilgrimage company — Holy Land, Rome, Egypt and beyond.",
    url: BASE_URL,
    logo: `${BASE_URL}/brand/logo.svg`,
    image: `${BASE_URL}/brand/logo.svg`,
    telephone: "+254700000000",
    email: "info@nazarethtravelgroup.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Nairobi",
      addressCountry: "KE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -1.2921,
      longitude: 36.8219,
    },
    openingHours: "Mo-Sa 08:00-18:00",
    currenciesAccepted: "KES, USD, EUR",
    sameAs: [
      "https://www.facebook.com/NazarethTravelGroup",
      "https://www.instagram.com/NazarethTravelGroup",
    ],
    areaServed: {
      "@type": "Country",
      name: "Kenya",
    },
  };
}

export function touristTripSchema(pkg: {
  title: string;
  slug: string;
  description: string;
  duration: string;
  region: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: pkg.title,
    description: pkg.description,
    url: `${BASE_URL}/programs/${pkg.slug}`,
    image: pkg.image,
    touristType: "Religious pilgrim",
    itinerary: {
      "@type": "ItemList",
      name: `${pkg.title} destinations`,
    },
    provider: {
      "@type": "TravelAgency",
      name: "Nazareth Travel Group",
      url: BASE_URL,
    },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      url: `${BASE_URL}/programs/${pkg.slug}`,
      seller: {
        "@type": "TravelAgency",
        name: "Nazareth Travel Group",
      },
    },
  };
}

export function faqPageSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };
}

export function breadcrumbSchema(
  items: { name: string; href: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${BASE_URL}${item.href}`,
    })),
  };
}
