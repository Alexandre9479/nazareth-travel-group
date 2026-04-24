import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MapPin, ChevronRight, CheckCircle2, Calendar, ArrowRight } from "lucide-react";
import { DESTINATIONS, PACKAGES } from "@/lib/data";
import { packageInquiryLink } from "@/lib/whatsapp";
import Container from "@/components/shared/Container";
import CTAStrip from "@/components/home/CTAStrip";

export async function generateStaticParams() {
  return DESTINATIONS.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const dest = DESTINATIONS.find((d) => d.slug === slug);
  if (!dest) return {};
  return {
    title: `${dest.name} — Sacred Destination`,
    description: dest.description.slice(0, 160),
  };
}

export default async function DestinationDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const dest = DESTINATIONS.find((d) => d.slug === slug);
  if (!dest) notFound();

  const relatedPackages = PACKAGES.filter((p) =>
    p.destinations.some((d) => d.toLowerCase() === dest.name.toLowerCase())
  ).slice(0, 3);

  return (
    <>
      {/* Cinematic hero */}
      <div className="relative h-[60vh] min-h-[400px] flex items-end">
        <Image
          src={dest.heroImage}
          alt={dest.name}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />
        <Container className="relative pb-12">
          <nav
            className="flex items-center gap-1.5 text-xs text-stone-300 font-body mb-4"
            aria-label="Breadcrumb"
          >
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <Link href="/destinations" className="hover:text-white">Destinations</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-white">{dest.name}</span>
          </nav>
          <div className="flex items-center gap-2 text-stone-300 text-sm font-body mb-3">
            <MapPin className="h-4 w-4 text-gold-300" />
            {dest.country}
          </div>
          <h1 className="font-display text-5xl md:text-6xl font-light text-white mb-3">
            {dest.name}
          </h1>
          <p className="text-lg text-gold-300 font-display italic">{dest.tagline}</p>
        </Container>
      </div>

      <Container className="py-16">
        <div className="grid lg:grid-cols-[1fr_320px] gap-12">
          {/* Main */}
          <div>
            {/* Scripture */}
            {dest.scripture && (
              <blockquote className="mb-10 border-l-3 border-gold-500 pl-6 py-1">
                <p className="font-display text-xl font-light italic text-ink-700 leading-relaxed">
                  {dest.scripture}
                </p>
              </blockquote>
            )}

            {/* Description */}
            <div className="prose-pilgrimage mb-10">
              <p>{dest.description}</p>
            </div>

            {/* Highlights */}
            <div className="mb-10">
              <h2 className="font-display text-2xl font-light text-ink-900 mb-4">
                Key Sites & Experiences
              </h2>
              <div className="gold-divider mb-6" />
              <ul className="grid sm:grid-cols-2 gap-3">
                {dest.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2.5 font-body text-sm text-ink-600">
                    <CheckCircle2 className="h-4 w-4 text-olive-600 mt-0.5 shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>

            {/* Best time */}
            <div className="p-5 rounded-xl bg-olive-50 border border-olive-200 flex items-start gap-3">
              <Calendar className="h-5 w-5 text-olive-600 mt-0.5 shrink-0" />
              <div>
                <p className="font-body font-semibold text-ink-900 text-sm">Best time to visit</p>
                <p className="font-body text-sm text-ink-500 mt-0.5">{dest.bestTime}</p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-4">
              <div className="bg-white border border-stone-200 rounded-2xl shadow-md p-6">
                <h3 className="font-display text-lg font-light text-ink-900 mb-4">
                  Pilgrimages to {dest.name}
                </h3>
                {relatedPackages.length > 0 ? (
                  <div className="space-y-3">
                    {relatedPackages.map((p) => (
                      <Link
                        key={p.id}
                        href={`/programs/${p.slug}`}
                        className="group flex items-center justify-between p-3 rounded-lg bg-stone-50 hover:bg-olive-50 border border-stone-200 hover:border-olive-300 transition-all"
                      >
                        <div>
                          <p className="font-body font-medium text-ink-900 text-sm">{p.title}</p>
                          <p className="text-xs text-ink-500 font-body">{p.duration}</p>
                        </div>
                        <ArrowRight className="h-4 w-4 text-stone-400 group-hover:text-olive-600 transition-colors" />
                      </Link>
                    ))}
                  </div>
                ) : (
                  <p className="font-body text-sm text-ink-500">
                    Contact us for custom pilgrimages to {dest.name}.
                  </p>
                )}
                <a
                  href={packageInquiryLink(dest.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 flex items-center justify-center gap-2 w-full rounded-xl bg-[#25D366] hover:bg-[#1ebe5d] text-white font-body font-semibold py-3 transition-all text-sm"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden>
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  Ask about {dest.name}
                </a>
              </div>
            </div>
          </aside>
        </div>
      </Container>

      <CTAStrip />
    </>
  );
}
