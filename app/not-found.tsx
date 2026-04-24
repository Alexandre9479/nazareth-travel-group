import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/nav/Navbar";
import Footer from "@/components/shared/Footer";
import WhatsAppFAB from "@/components/shared/WhatsAppFAB";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center py-24 px-6 text-center bg-stone-50">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-olive-600 font-body mb-4">
          404 — Page not found
        </p>
        <div className="gold-divider mx-auto mb-6" />
        <h1 className="font-display text-6xl md:text-7xl font-light text-ink-900 mb-5">
          Still searching?
        </h1>
        <blockquote className="max-w-md font-display text-xl font-light italic text-ink-500 mb-4 leading-relaxed">
          &ldquo;Ask and it will be given to you; seek and you will find; knock and
          the door will be opened to you.&rdquo;
        </blockquote>
        <p className="text-sm font-body text-olive-600 mb-10">— Matthew 7:7</p>
        <p className="font-body text-ink-500 mb-8 max-w-sm">
          The page you&apos;re looking for doesn&apos;t exist — but your Holy Land
          pilgrimage is waiting.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-olive-600 hover:bg-olive-700 text-white font-body font-semibold text-sm px-6 py-3.5 transition-all group"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to Home
          </Link>
          <Link
            href="/programs"
            className="inline-flex items-center gap-2 rounded-full border border-olive-600 text-olive-600 hover:bg-olive-600 hover:text-white font-body font-semibold text-sm px-6 py-3.5 transition-all"
          >
            View Pilgrimages
          </Link>
        </div>
      </main>
      <Footer />
      <WhatsAppFAB />
    </>
  );
}
