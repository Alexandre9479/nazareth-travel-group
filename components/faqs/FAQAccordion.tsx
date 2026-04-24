"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import type { FAQ } from "@/lib/data";

type Category = "all" | "booking" | "visas" | "ontrip" | "groups" | "payments";

const CATEGORIES: { id: Category; label: string }[] = [
  { id: "all", label: "All Questions" },
  { id: "booking", label: "Before You Book" },
  { id: "visas", label: "Travel & Visas" },
  { id: "ontrip", label: "On the Trip" },
  { id: "groups", label: "Group Bookings" },
  { id: "payments", label: "Payments" },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-stone-200 last:border-none">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left group"
        aria-expanded={open}
      >
        <span className="font-body font-medium text-ink-900 text-base group-hover:text-olive-700 transition-colors">
          {question}
        </span>
        <ChevronDown
          className={`h-5 w-5 text-olive-600 shrink-0 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <p className="font-body text-sm text-ink-500 leading-[1.8] pb-6">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQAccordion({ faqs }: { faqs: FAQ[] }) {
  const [active, setActive] = useState<Category>("all");
  const filtered =
    active === "all" ? faqs : faqs.filter((f) => f.category === active);

  return (
    <>
      <div className="flex flex-wrap gap-2 mb-10">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActive(cat.id)}
            className={`rounded-full px-4 py-2 text-sm font-body font-medium transition-all ${
              active === cat.id
                ? "bg-olive-600 text-white"
                : "bg-white border border-stone-200 text-ink-700 hover:border-olive-300 hover:text-olive-700"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>
      <div className="bg-white rounded-2xl border border-stone-200 shadow-sm px-7 divide-y divide-stone-100">
        {filtered.map((faq) => (
          <FAQItem key={faq.id} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </>
  );
}
