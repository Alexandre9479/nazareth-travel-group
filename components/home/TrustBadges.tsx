export default function TrustBadges() {
  const badges = [
    { name: "IATA Member", abbr: "IATA" },
    { name: "Kenya Tourism Board", abbr: "KTB" },
    { name: "ATTA Member", abbr: "ATTA" },
    { name: "KATA Member", abbr: "KATA" },
    { name: "Kenya Tourism Regulatory Authority", abbr: "KTRA" },
  ];

  return (
    <div className="bg-white border-y border-stone-200 py-8">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <p className="text-center text-xs font-body font-semibold uppercase tracking-widest text-ink-500 mb-7">
          Accredited &amp; trusted by
        </p>
        {/* 5 badges: row of 5 on md+, row of 3+2 centered on mobile */}
        <div className="flex flex-wrap justify-center gap-5 md:gap-8">
          {badges.map((b) => (
            <div
              key={b.abbr}
              className="flex flex-col items-center gap-2 w-20 md:w-24 opacity-60 hover:opacity-100 transition-opacity duration-300"
            >
              <div className="w-16 h-16 md:w-18 md:h-18 rounded-2xl border border-stone-200 flex items-center justify-center bg-stone-50 shadow-sm">
                <span className="font-display text-sm font-medium text-olive-600 text-center leading-tight px-1">
                  {b.abbr}
                </span>
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
