import { SCRIPTURES } from "@/lib/data";

export default function ScriptureVerse() {
  const daily = SCRIPTURES[Math.floor((Date.now() / 86400000)) % SCRIPTURES.length];

  return (
    <div className="bg-olive-50 border-y border-olive-200">
      <div className="mx-auto max-w-7xl px-6 md:px-12 py-5 flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-olive-600 font-body shrink-0">
          Verse of the Day
        </span>
        <div className="w-px h-4 bg-olive-300 hidden sm:block" />
        <blockquote className="text-sm font-display font-light italic text-ink-700">
          &ldquo;{daily.verse}&rdquo;{" "}
          <cite className="not-italic text-olive-600 text-xs font-body font-semibold">
            — {daily.reference}
          </cite>
        </blockquote>
      </div>
    </div>
  );
}
