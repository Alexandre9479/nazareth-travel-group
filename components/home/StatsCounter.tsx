"use client";
import { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";
import { Users, CalendarCheck, Globe, Star } from "lucide-react";

const STATS = [
  {
    icon: Users,
    value: 5000,
    suffix: "+",
    label: "Pilgrims Served",
    description: "Transformed lives across Kenya and Africa",
  },
  {
    icon: CalendarCheck,
    value: 12,
    suffix: "+",
    label: "Years of Service",
    description: "Crafting sacred journeys since 2013",
  },
  {
    icon: Globe,
    value: 7,
    suffix: "",
    label: "Sacred Destinations",
    description: "Israel, Jordan, Rome, Egypt and beyond",
  },
  {
    icon: Star,
    value: 4.9,
    suffix: "/5",
    label: "Average Rating",
    description: "From verified pilgrim reviews",
    decimal: true,
  },
];

function Counter({
  target,
  suffix,
  decimal,
  started,
}: {
  target: number;
  suffix: string;
  decimal?: boolean;
  started: boolean;
}) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!started) return;
    const duration = 1800;
    const steps = 60;
    const increment = target / steps;
    const interval = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const next = Math.min(increment * step, target);
      setCurrent(next);
      if (step >= steps) clearInterval(timer);
    }, interval);

    return () => clearInterval(timer);
  }, [started, target]);

  const display = decimal
    ? current.toFixed(1)
    : current >= 1000
    ? `${(current / 1000).toFixed(current >= 5000 ? 0 : 1)}k`
    : Math.round(current).toString();

  return (
    <span className="font-display text-3xl sm:text-4xl md:text-5xl font-light tabular-nums">
      {display}
      <span className="text-gold-500">{suffix}</span>
    </span>
  );
}

export default function StatsCounter() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="bg-linear-to-r from-olive-900 via-olive-800 to-olive-900 py-16"
      aria-label="Key statistics"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
          {STATS.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="flex flex-col items-center text-center"
                style={{
                  opacity: inView ? 1 : 0,
                  transform: inView ? "none" : "translateY(20px)",
                  transition: `opacity 0.6s ease ${i * 0.1}s, transform 0.6s ease ${i * 0.1}s`,
                }}
              >
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-4">
                  <Icon className="h-5 w-5 text-gold-300" />
                </div>
                <div className="text-white">
                  <Counter
                    target={stat.value}
                    suffix={stat.suffix}
                    decimal={stat.decimal}
                    started={inView}
                  />
                </div>
                <p className="font-body font-semibold text-white text-sm mt-1">
                  {stat.label}
                </p>
                <p className="font-body text-stone-400 text-xs mt-1 max-w-[140px] leading-snug">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
