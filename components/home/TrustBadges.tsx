import Image from "next/image";

interface Badge { abbr: string; name: string; logoUrl?: string }

const DEFAULTS: Badge[] = [
  { abbr: "IATA", name: "IATA Member" },
  { abbr: "KTB", name: "Kenya Tourism Board" },
  { abbr: "ATTA", name: "ATTA Member" },
  { abbr: "KATA", name: "KATA Member" },
  { abbr: "KTRA", name: "Kenya Tourism Regulatory Authority" },
];

export default function TrustBadges({ badges }: { badges?: Badge[] }) {
  const items = badges?.length ? badges : DEFAULTS;

  return (
    <div className="bg-white border-y border-stone-200 py-8">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <p className="text-center text-xs font-body font-semibold uppercase tracking-widest text-ink-500 mb-7">
          Accredited &amp; trusted by
        </p>
        <div className="flex flex-wrap justify-center gap-5 md:gap-8">
          {items.map((b) => (
            <div
              key={b.abbr}
              className="flex flex-col items-center gap-2 w-20 md:w-24 opacity-60 hover:opacity-100 transition-opacity duration-300"
            >
              <div className="w-16 h-16 rounded-2xl border border-stone-200 flex items-center justify-center bg-stone-50 shadow-sm overflow-hidden">
                {b.logoUrl ? (
                  <Image src={b.logoUrl} alt={b.name} width={52} height={52} className="object-contain p-1" />
                ) : (
                  <span className="font-display text-sm font-medium text-olive-600 text-center leading-tight px-1">
                    {b.abbr}
                  </span>
                )}
              </div>
              <span className="text-[10px] md:text-xs font-body text-ink-500 text-center leading-tight">
                {b.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
