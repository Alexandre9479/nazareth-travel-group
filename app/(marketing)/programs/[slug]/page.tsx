import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Clock, Users, ArrowUpRight, CheckCircle2, XCircle, MapPin, ChevronRight } from "lucide-react";
import { PACKAGES } from "@/lib/data";
import { packageInquiryLink } from "@/lib/whatsapp";
import Badge from "@/components/shared/Badge";
import CTAStrip from "@/components/home/CTAStrip";
import Container from "@/components/shared/Container";
import WhatsAppNudge from "@/components/programs/WhatsAppNudge";
import JsonLd, { touristTripSchema, breadcrumbSchema } from "@/components/shared/JsonLd";

export async function generateStaticParams() {
  return PACKAGES.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const pkg = PACKAGES.find((p) => p.slug === slug);
  if (!pkg) return {};
  return {
    title: pkg.title,
    description: pkg.description.slice(0, 160),
  };
}

export default async function ProgramDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const pkg = PACKAGES.find((p) => p.slug === slug);
  if (!pkg) notFound();

  const related = PACKAGES.filter((p) => p.slug !== slug).slice(0, 3);
  const whatsappLink = packageInquiryLink(pkg.title);

  return (
    <>
      <JsonLd data={touristTripSchema({ title: pkg.title, slug: pkg.slug, description: pkg.description, duration: pkg.duration, region: pkg.region, image: pkg.image })} />
      <JsonLd data={breadcrumbSchema([{ name: "Home", href: "/" }, { name: "Programs", href: "/programs" }, { name: pkg.title, href: `/programs/${pkg.slug}` }])} />

      {/* Hero */}
      <div className="relative h-[55vh] min-h-[380px] flex items-end">
        <Image
          src={pkg.image}
          alt={pkg.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-black/10" />
        <Container className="relative pb-10 md:pb-14">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-xs text-stone-300 font-body mb-4" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <Link href="/programs" className="hover:text-white">Programs</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-white">{pkg.title}</span>
          </nav>

          {pkg.badge && (
            <div className="mb-3">
              <Badge variant={pkg.badgeVariant ?? "default"}>{pkg.badge}</Badge>
            </div>
          )}

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-white mb-4 leading-tight">
            {pkg.title}
          </h1>

          {/* At-a-glance strip */}
          <div className="flex flex-wrap gap-5 text-sm text-stone-200 font-body">
            <span className="flex items-center gap-1.5"><Clock className="h-4 w-4 text-gold-300" />{pkg.duration}</span>
            <span className="flex items-center gap-1.5"><Users className="h-4 w-4 text-gold-300" />{pkg.groupSize}</span>
            <span className="flex items-center gap-1.5"><MapPin className="h-4 w-4 text-gold-300" />{pkg.region}</span>
            <span className="text-stone-400">Difficulty: {pkg.difficulty}</span>
          </div>
        </Container>
      </div>

      {/* Content + sidebar */}
      <Container className="py-16">
        <div className="grid lg:grid-cols-[1fr_340px] gap-12">
          {/* Main content */}
          <div>
            {/* Overview */}
            <section className="mb-12">
              <h2 className="font-display text-2xl font-light text-ink-900 mb-4">Overview</h2>
              <div className="gold-divider mb-6" />
              <p className="font-body text-base leading-[1.8] text-ink-500">{pkg.description}</p>
            </section>

            {/* Highlights */}
            <section className="mb-12">
              <h2 className="font-display text-2xl font-light text-ink-900 mb-4">Tour Highlights</h2>
              <div className="gold-divider mb-6" />
              <ul className="grid sm:grid-cols-2 gap-3">
                {pkg.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2.5 font-body text-sm text-ink-600">
                    <CheckCircle2 className="h-4 w-4 text-olive-600 mt-0.5 shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>
            </section>

            {/* Itinerary */}
            {pkg.itinerary.length > 0 && (
              <section className="mb-12">
                <h2 className="font-display text-2xl font-light text-ink-900 mb-4">Day-by-Day Itinerary</h2>
                <div className="gold-divider mb-6" />
                <div className="space-y-4">
                  {pkg.itinerary.map((day) => (
                    <div
                      key={day.day}
                      className="flex gap-4 p-5 rounded-xl bg-stone-50 border border-stone-200"
                    >
                      <div className="w-10 h-10 rounded-full bg-olive-600 text-white flex items-center justify-center text-sm font-display font-medium shrink-0">
                        {day.day}
                      </div>
                      <div>
                        <h3 className="font-body font-semibold text-ink-900 text-sm mb-1">
                          Day {day.day}: {day.title}
                        </h3>
                        {day.description && (
                          <p className="font-body text-sm text-ink-500 leading-relaxed">
                            {day.description}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Inclusions / Exclusions */}
            <section className="mb-12">
              <div className="grid sm:grid-cols-2 gap-8">
                <div>
                  <h2 className="font-display text-xl font-light text-ink-900 mb-4">What&apos;s Included</h2>
                  <div className="gold-divider mb-5" />
                  <ul className="space-y-2.5">
                    {pkg.inclusions.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 font-body text-sm text-ink-600">
                        <CheckCircle2 className="h-4 w-4 text-olive-600 mt-0.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h2 className="font-display text-xl font-light text-ink-900 mb-4">Not Included</h2>
                  <div className="gold-divider mb-5" />
                  <ul className="space-y-2.5">
                    {pkg.exclusions.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 font-body text-sm text-ink-500">
                        <XCircle className="h-4 w-4 text-stone-400 mt-0.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          </div>

          {/* Sticky sidebar */}
          <aside className="hidden xl:block">
            <div className="sticky top-24">
              <div className="bg-white border border-stone-200 rounded-2xl shadow-lg p-7">
                <p className="font-display text-xl font-light text-ink-900 mb-2">
                  Interested in this pilgrimage?
                </p>
                <p className="font-body text-sm text-ink-500 mb-6 leading-relaxed">
                  Prices are quoted personally after understanding your group size and travel dates.
                </p>

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full rounded-xl bg-[#25D366] hover:bg-[#1ebe5d] text-white font-body font-semibold py-4 transition-all mb-3"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden>
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  Request Price on WhatsApp
                </a>

                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 w-full rounded-xl border border-olive-300 text-olive-600 hover:bg-olive-50 font-body font-semibold py-3.5 transition-all text-sm"
                >
                  Send Email Inquiry
                  <ArrowUpRight className="h-4 w-4" />
                </Link>

                <div className="mt-6 pt-5 border-t border-stone-100 space-y-3 text-sm font-body text-ink-500">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-olive-600 shrink-0" />
                    No hidden fees — full transparency
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-olive-600 shrink-0" />
                    Flexible payment plans available
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-olive-600 shrink-0" />
                    Response within 24 hours
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>

        {/* Mobile + tablet sticky CTA */}
        <div className="xl:hidden fixed bottom-0 inset-x-0 p-3 sm:p-4 bg-white/95 backdrop-blur-sm border-t border-stone-200 flex gap-3 z-30 safe-area-inset-bottom">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-1.5 rounded-full bg-[#25D366] text-white font-body font-semibold text-sm py-3 transition-colors"
          >
            Request Price
          </a>
          <Link
            href="/contact"
            className="flex-1 flex items-center justify-center rounded-full border border-olive-600 text-olive-600 font-body font-semibold text-sm py-3 transition-colors"
          >
            Email Inquiry
          </Link>
        </div>
      </Container>

      {/* Related pilgrimages */}
      {related.length > 0 && (
        <div className="bg-stone-50 py-16">
          <Container>
            <h2 className="font-display text-2xl font-light text-ink-900 mb-8">
              Other Pilgrimages You Might Love
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {related.map((p) => (
                <Link
                  key={p.id}
                  href={`/programs/${p.slug}`}
                  className="group card-lift block rounded-xl overflow-hidden bg-white border border-stone-200"
                >
                  <div className="img-zoom-container relative h-40">
                    <Image src={p.image} alt={p.title} fill className="object-cover" sizes="400px" />
                    <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-display text-base font-light text-ink-900 mb-1">{p.title}</h3>
                    <p className="text-xs text-ink-500 font-body flex items-center gap-1">
                      <Clock className="h-3 w-3" /> {p.duration} · {p.region}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </div>
      )}

      <CTAStrip />
      <WhatsAppNudge packageName={pkg.title} whatsappLink={whatsappLink} />
    </>
  );
}
