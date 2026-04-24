export default function TrustBadges() {
  const badges = [
    { name: "IATA Member", abbr: "IATA" },
    { name: "Kenya Tourism Board", abbr: "KTB" },
    { name: "ATTA Member", abbr: "ATTA" },
    { name: "KATA Member", abbr: "KATA" },
    { name: "Licensed by Kenya Tourism Regulatory Authority", abbr: "KTRA" },
  ];

  return (
    <div className="bg-white border-y border-stone-200 py-6">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <p className="text-center text-xs font-body font-semibold uppercase tracking-widest text-ink-500 mb-5">
          Accredited & trusted by
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
          {badges.map((b) => (
            <div key={b.abbr} className="flex flex-col items-center gap-1 opacity-60 hover:opacity-100 transition-opacity">
              <div className="w-14 h-14 rounded-xl border border-stone-200 flex items-center justify-center bg-stone-50">
                <span className="font-display text-sm font-medium text-olive-600">
                  {b.abbr}
                </span>
              </div>
              <span className="text-xs font-body text-ink-500 text-center max-w-[80px] leading-tight">
                {b.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
