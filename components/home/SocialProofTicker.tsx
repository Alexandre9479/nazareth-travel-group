import { SOCIAL_PROOF } from "@/lib/data";

export default function SocialProofTicker() {
  const items = [...SOCIAL_PROOF, ...SOCIAL_PROOF];

  return (
    <div className="bg-olive-900 overflow-hidden py-2.5 border-y border-olive-700">
      <div className="flex animate-ticker whitespace-nowrap">
        {items.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-3 px-8 text-xs font-body text-stone-300"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-gold-400 shrink-0" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
