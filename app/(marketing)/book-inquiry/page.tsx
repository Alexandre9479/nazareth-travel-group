import type { Metadata } from "next";
import InquiryWizard from "@/components/inquiry/InquiryWizard";

export const metadata: Metadata = {
  title: "Book a Pilgrimage",
  description:
    "Start your Holy Land pilgrimage journey. Tell us where you'd like to go and we'll craft a personalised quote.",
};

export default async function BookInquiryPage({
  searchParams,
}: {
  searchParams: Promise<{ destination?: string }>;
}) {
  const { destination } = await searchParams;

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Split layout */}
      <div className="grid lg:grid-cols-[1fr_560px] min-h-screen">
        {/* Left — immersive background */}
        <div
          className="relative hidden lg:flex flex-col justify-between p-12 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?w=1200&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-linear-to-br from-olive-900/85 via-ink-900/70 to-ink-900/50" />

          <div className="relative">
            <p className="text-xs font-body font-semibold uppercase tracking-[0.2em] text-gold-300 mb-2">
              Nazareth Travel Group
            </p>
            <div className="w-8 h-[2px] bg-gold-500 mb-6" />
            <h1 className="font-display text-5xl font-light text-white leading-[1.08] mb-5">
              Your sacred journey starts{" "}
              <em className="italic text-gold-300">here.</em>
            </h1>
            <p className="font-body text-stone-300 text-lg leading-relaxed max-w-sm">
              Tell us where you&apos;d like to go. We&apos;ll handle everything
              else — itinerary, flights, hotels, guides, and prayer.
            </p>
          </div>

          {/* Testimonial pull-quote */}
          <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <p className="font-display text-base font-light italic text-stone-100 leading-relaxed mb-4">
              &ldquo;From the first WhatsApp message to landing back in Nairobi,
              Nazareth Travel Group was with us every step. Not just as a
              company — as fellow pilgrims.&rdquo;
            </p>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-gold-500/30 flex items-center justify-center text-gold-300 font-display font-medium">
                R
              </div>
              <div>
                <p className="text-white text-sm font-body font-semibold">Rev. Dr. Samuel Kariuki</p>
                <p className="text-stone-400 text-xs font-body">PCEA Westlands, Nairobi</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right — wizard */}
        <div className="flex flex-col justify-center px-6 py-12 md:px-12 bg-white">
          <div className="max-w-[480px] mx-auto w-full">
            {/* Mobile-only context header */}
            <div className="lg:hidden mb-8 pb-7 border-b border-stone-100">
              <p className="text-xs font-body font-semibold uppercase tracking-[0.2em] text-olive-600 mb-2">
                Nazareth Travel Group
              </p>
              <h1 className="font-display text-2xl sm:text-3xl font-light text-ink-900 leading-tight">
                Plan your sacred journey
              </h1>
              <p className="font-body text-sm text-ink-500 mt-2 leading-relaxed">
                Tell us where you&apos;d like to go — we&apos;ll handle everything else.
              </p>
            </div>

            <p className="hidden lg:block text-xs font-body font-semibold uppercase tracking-[0.2em] text-olive-600 mb-1">
              Pilgrimage Inquiry
            </p>
            <h2 className="hidden lg:block font-display text-3xl font-light text-ink-900 mb-8">
              Let&apos;s plan your pilgrimage
            </h2>
            <InquiryWizard defaultDestination={destination} />
          </div>
        </div>
      </div>
    </div>
  );
}
