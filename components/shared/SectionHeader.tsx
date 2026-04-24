"use client";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  centered = false,
  light = false,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn(centered && "text-center", className)}>
      {eyebrow && (
        <p
          className={cn(
            "mb-3 text-xs font-semibold tracking-[0.18em] uppercase font-body",
            light ? "text-gold-300" : "text-olive-600"
          )}
        >
          {eyebrow}
        </p>
      )}
      {centered && (
        <div className={cn("gold-divider mb-4", centered && "mx-auto")} />
      )}
      <h2
        className={cn(
          "font-display text-3xl font-light leading-tight md:text-4xl lg:text-5xl",
          light ? "text-white" : "text-ink-900"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 max-w-2xl font-body text-base leading-relaxed md:text-lg",
            centered && "mx-auto",
            light ? "text-stone-300" : "text-ink-500"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
