import { cn } from "@/lib/utils";

const variants = {
  popular: "bg-gold-500 text-white",
  new: "bg-olive-600 text-white",
  extended: "bg-stone-700 text-white",
  luxury: "bg-ink-900 text-gold-300",
  default: "bg-stone-200 text-ink-700",
};

interface BadgeProps {
  children: React.ReactNode;
  variant?: keyof typeof variants;
  className?: string;
}

export default function Badge({
  children,
  variant = "default",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-0.5 text-xs font-semibold tracking-wide uppercase font-body",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
