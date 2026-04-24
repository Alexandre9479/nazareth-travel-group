"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  MapPin, Users, User, ArrowRight, ArrowLeft,
  CheckCircle2, MessageSquare, Church,
} from "lucide-react";
import { packageInquiryLink } from "@/lib/whatsapp";
import { PACKAGES } from "@/lib/data";

/* ─── Schema ─── */
const schema = z.object({
  destination: z.string().min(1, "Please choose a destination"),
  groupSize: z.string().min(1, "Please select a group size"),
  travelMonth: z.string().optional(),
  name: z.string().min(2, "Full name required"),
  email: z.string().email("Valid email required"),
  phone: z.string().min(9, "Phone number required"),
  church: z.string().optional(),
  message: z.string().optional(),
});
type FormData = z.infer<typeof schema>;

/* ─── Step config ─── */
const STEPS = [
  { id: 1, label: "Destination", icon: MapPin },
  { id: 2, label: "Your Group", icon: Users },
  { id: 3, label: "Contact", icon: User },
];

const DESTINATIONS_LIST = [
  { value: "classic-holy-land", label: "Classic Holy Land", sub: "Israel · 8 days", emoji: "🕊️" },
  { value: "holy-land-jordan", label: "Holy Land & Jordan", sub: "Israel + Jordan · 11 days", emoji: "🏛️" },
  { value: "rome-italy", label: "Rome & Italy", sub: "Vatican · 10 days", emoji: "⛪" },
  { value: "egypt-biblical", label: "Egypt Biblical Journey", sub: "Sinai & Cairo · 9 days", emoji: "🏔️" },
  { value: "footsteps-of-paul", label: "Footsteps of Paul", sub: "Greece & Turkey · 12 days", emoji: "✝️" },
  { value: "bespoke-holy-land", label: "Custom Pilgrimage", sub: "Tailored just for you", emoji: "✨" },
];

const GROUP_SIZES = [
  { value: "individual", label: "Just me", sub: "Solo pilgrim" },
  { value: "2-5", label: "2–5 people", sub: "Family or small group" },
  { value: "6-15", label: "6–15 people", sub: "Small church group" },
  { value: "16-35", label: "16–35 people", sub: "Church group" },
  { value: "35+", label: "35+ people", sub: "Large congregation" },
];

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
  "Flexible / Not sure",
];

const slideVariants = {
  enter: (dir: number) => ({ x: dir > 0 ? 60 : -60, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? -60 : 60, opacity: 0 }),
};

export default function InquiryWizard({ defaultDestination }: { defaultDestination?: string }) {
  const [step, setStep] = useState(1);
  const [dir, setDir] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    trigger,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { destination: defaultDestination ?? "" },
  });

  const destination = watch("destination");
  const groupSize = watch("groupSize");
  const travelMonth = watch("travelMonth");

  const goNext = async () => {
    const fields: (keyof FormData)[][] = [
      ["destination"],
      ["groupSize"],
      ["name", "email", "phone"],
    ];
    const valid = await trigger(fields[step - 1]);
    if (!valid) return;
    setDir(1);
    setStep((s) => s + 1);
  };

  const goPrev = () => {
    setDir(-1);
    setStep((s) => s - 1);
  };

  const onSubmit = async (data: FormData) => {
    setSubmitting(true);
    try {
      await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setSubmitted(true);
    } catch {
      setSubmitting(false);
    }
  };

  const selectedPkg = PACKAGES.find((p) => p.slug === destination);
  const waLink = selectedPkg
    ? packageInquiryLink(selectedPkg.title)
    : packageInquiryLink("a pilgrimage");

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-10"
      >
        <div className="w-16 h-16 rounded-full bg-olive-100 flex items-center justify-center mx-auto mb-5">
          <CheckCircle2 className="h-8 w-8 text-olive-600" />
        </div>
        <h2 className="font-display text-2xl font-light text-ink-900 mb-2">
          We&apos;ve received your inquiry!
        </h2>
        <p className="font-body text-ink-500 text-sm max-w-xs mx-auto mb-8 leading-relaxed">
          We&apos;ll be in touch within 24 hours. For a faster response, chat
          directly on WhatsApp.
        </p>
        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-[#25D366] hover:bg-[#1ebe5d] text-white font-body font-semibold text-sm px-6 py-3.5 transition-colors"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden>
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
          Chat on WhatsApp
        </a>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      {/* Progress stepper */}
      <div className="flex items-center justify-between mb-8">
        {STEPS.map((s, i) => {
          const Icon = s.icon;
          const done = step > s.id;
          const active = step === s.id;
          return (
            <div key={s.id} className="flex items-center flex-1">
              <div className="flex flex-col items-center">
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 ${
                    done
                      ? "bg-olive-600 text-white"
                      : active
                      ? "bg-olive-600 text-white ring-4 ring-olive-200"
                      : "bg-stone-100 text-stone-400"
                  }`}
                >
                  {done ? (
                    <CheckCircle2 className="h-4.5 w-4.5" style={{ width: 18, height: 18 }} />
                  ) : (
                    <Icon className="h-4 w-4" />
                  )}
                </div>
                <span
                  className={`text-xs font-body mt-1 font-medium ${
                    active ? "text-olive-700" : "text-stone-400"
                  }`}
                >
                  {s.label}
                </span>
              </div>
              {i < STEPS.length - 1 && (
                <div
                  className={`flex-1 h-[2px] mx-2 mb-4 rounded transition-all duration-500 ${
                    done ? "bg-olive-600" : "bg-stone-200"
                  }`}
                />
              )}
            </div>
          );
        })}
      </div>

      {/* Step panels */}
      <div className="relative overflow-hidden min-h-[340px]">
        <AnimatePresence custom={dir} mode="wait">
          {/* Step 1 — Destination */}
          {step === 1 && (
            <motion.div
              key="step1"
              custom={dir}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ type: "tween", duration: 0.28, ease: [0.2, 0.8, 0.2, 1] }}
            >
              <h3 className="font-display text-xl font-light text-ink-900 mb-1">
                Where would you like to go?
              </h3>
              <p className="font-body text-sm text-ink-500 mb-5">
                Choose your pilgrimage destination.
              </p>
              <div className="grid sm:grid-cols-2 gap-2.5">
                {DESTINATIONS_LIST.map((d) => (
                  <button
                    key={d.value}
                    type="button"
                    onClick={() => setValue("destination", d.value, { shouldValidate: true })}
                    className={`text-left p-4 rounded-xl border transition-all flex items-center gap-3 ${
                      destination === d.value
                        ? "border-olive-500 bg-olive-50 ring-2 ring-olive-200"
                        : "border-stone-200 hover:border-olive-300 hover:bg-stone-50"
                    }`}
                  >
                    <span className="text-2xl leading-none">{d.emoji}</span>
                    <div>
                      <p className="font-body font-semibold text-ink-900 text-sm">{d.label}</p>
                      <p className="font-body text-xs text-ink-500 mt-0.5">{d.sub}</p>
                    </div>
                    {destination === d.value && (
                      <CheckCircle2 className="h-4 w-4 text-olive-600 ml-auto shrink-0" />
                    )}
                  </button>
                ))}
              </div>
              {errors.destination && (
                <p className="mt-2 text-xs text-red-500 font-body">{errors.destination.message}</p>
              )}
            </motion.div>
          )}

          {/* Step 2 — Group */}
          {step === 2 && (
            <motion.div
              key="step2"
              custom={dir}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ type: "tween", duration: 0.28, ease: [0.2, 0.8, 0.2, 1] }}
            >
              <h3 className="font-display text-xl font-light text-ink-900 mb-1">
                Tell us about your group
              </h3>
              <p className="font-body text-sm text-ink-500 mb-5">
                This helps us give you the most accurate quote.
              </p>

              <p className="font-body text-xs font-semibold text-ink-700 uppercase tracking-wide mb-2">
                Group size
              </p>
              <div className="grid sm:grid-cols-3 gap-2 mb-5">
                {GROUP_SIZES.map((g) => (
                  <button
                    key={g.value}
                    type="button"
                    onClick={() => setValue("groupSize", g.value, { shouldValidate: true })}
                    className={`text-left p-3.5 rounded-xl border transition-all ${
                      groupSize === g.value
                        ? "border-olive-500 bg-olive-50 ring-2 ring-olive-200"
                        : "border-stone-200 hover:border-olive-300 hover:bg-stone-50"
                    }`}
                  >
                    <p className="font-body font-semibold text-ink-900 text-sm">{g.label}</p>
                    <p className="font-body text-xs text-ink-500 mt-0.5">{g.sub}</p>
                  </button>
                ))}
              </div>
              {errors.groupSize && (
                <p className="mb-3 text-xs text-red-500 font-body">{errors.groupSize.message}</p>
              )}

              <p className="font-body text-xs font-semibold text-ink-700 uppercase tracking-wide mb-2">
                Preferred travel month
              </p>
              <div className="flex flex-wrap gap-2">
                {MONTHS.map((m) => (
                  <button
                    key={m}
                    type="button"
                    onClick={() => setValue("travelMonth", m)}
                    className={`px-3 py-1.5 rounded-full text-xs font-body font-medium border transition-all ${
                      travelMonth === m
                        ? "bg-olive-600 text-white border-olive-600"
                        : "border-stone-200 text-ink-700 hover:border-olive-300"
                    }`}
                  >
                    {m}
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* Step 3 — Contact */}
          {step === 3 && (
            <motion.div
              key="step3"
              custom={dir}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ type: "tween", duration: 0.28, ease: [0.2, 0.8, 0.2, 1] }}
            >
              <h3 className="font-display text-xl font-light text-ink-900 mb-1">
                How can we reach you?
              </h3>
              <p className="font-body text-sm text-ink-500 mb-5">
                We&apos;ll respond within 24 hours — usually much sooner.
              </p>

              <div className="space-y-3">
                <div className="grid sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-body font-semibold text-ink-700 mb-1.5 uppercase tracking-wide">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-stone-400" />
                      <input
                        {...register("name")}
                        placeholder="Your full name"
                        className="w-full pl-9 pr-4 py-3 text-sm font-body border border-stone-200 rounded-xl focus:border-olive-400 focus:outline-none focus:ring-2 focus:ring-olive-200 transition-all"
                      />
                    </div>
                    {errors.name && <p className="mt-1 text-xs text-red-500 font-body">{errors.name.message}</p>}
                  </div>
                  <div>
                    <label className="block text-xs font-body font-semibold text-ink-700 mb-1.5 uppercase tracking-wide">
                      Church / Organisation
                    </label>
                    <div className="relative">
                      <Church className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-stone-400" />
                      <input
                        {...register("church")}
                        placeholder="Your church name"
                        className="w-full pl-9 pr-4 py-3 text-sm font-body border border-stone-200 rounded-xl focus:border-olive-400 focus:outline-none focus:ring-2 focus:ring-olive-200 transition-all"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-body font-semibold text-ink-700 mb-1.5 uppercase tracking-wide">
                      Email *
                    </label>
                    <input
                      {...register("email")}
                      type="email"
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 text-sm font-body border border-stone-200 rounded-xl focus:border-olive-400 focus:outline-none focus:ring-2 focus:ring-olive-200 transition-all"
                    />
                    {errors.email && <p className="mt-1 text-xs text-red-500 font-body">{errors.email.message}</p>}
                  </div>
                  <div>
                    <label className="block text-xs font-body font-semibold text-ink-700 mb-1.5 uppercase tracking-wide">
                      Phone / WhatsApp *
                    </label>
                    <input
                      {...register("phone")}
                      type="tel"
                      placeholder="+254 7XX XXX XXX"
                      className="w-full px-4 py-3 text-sm font-body border border-stone-200 rounded-xl focus:border-olive-400 focus:outline-none focus:ring-2 focus:ring-olive-200 transition-all"
                    />
                    {errors.phone && <p className="mt-1 text-xs text-red-500 font-body">{errors.phone.message}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-body font-semibold text-ink-700 mb-1.5 uppercase tracking-wide">
                    Anything else we should know? <span className="normal-case font-normal text-stone-400">(optional)</span>
                  </label>
                  <textarea
                    {...register("message")}
                    rows={3}
                    placeholder="Special requests, questions, spiritual intentions..."
                    className="w-full px-4 py-3 text-sm font-body border border-stone-200 rounded-xl focus:border-olive-400 focus:outline-none focus:ring-2 focus:ring-olive-200 transition-all resize-none"
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between mt-6 pt-5 border-t border-stone-100">
        {step > 1 ? (
          <button
            type="button"
            onClick={goPrev}
            className="flex items-center gap-2 font-body text-sm text-ink-500 hover:text-ink-900 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </button>
        ) : (
          <div />
        )}

        {step < 3 ? (
          <button
            type="button"
            onClick={goNext}
            className="flex items-center gap-2 rounded-full bg-olive-600 hover:bg-olive-700 text-white font-body font-semibold text-sm px-6 py-3 transition-all group"
          >
            Continue
            <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
        ) : (
          <div className="flex gap-3">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 rounded-full bg-[#25D366] hover:bg-[#1ebe5d] text-white font-body font-semibold text-sm px-4 py-3 transition-colors"
            >
              <MessageSquare className="h-4 w-4" />
              WhatsApp
            </a>
            <button
              type="submit"
              disabled={submitting}
              className="flex items-center gap-2 rounded-full bg-olive-600 hover:bg-olive-700 disabled:opacity-60 text-white font-body font-semibold text-sm px-6 py-3 transition-all"
            >
              {submitting ? "Sending…" : "Send Inquiry"}
            </button>
          </div>
        )}
      </div>

      {/* Summary pill at bottom */}
      {(destination || groupSize) && (
        <div className="mt-4 flex flex-wrap gap-2">
          {destination && (
            <span className="inline-flex items-center gap-1.5 bg-olive-50 border border-olive-200 text-olive-700 rounded-full px-3 py-1 text-xs font-body font-medium">
              <MapPin className="h-3 w-3" />
              {DESTINATIONS_LIST.find((d) => d.value === destination)?.label}
            </span>
          )}
          {groupSize && (
            <span className="inline-flex items-center gap-1.5 bg-stone-100 border border-stone-200 text-ink-600 rounded-full px-3 py-1 text-xs font-body font-medium">
              <Users className="h-3 w-3" />
              {GROUP_SIZES.find((g) => g.value === groupSize)?.label}
            </span>
          )}
          {travelMonth && (
            <span className="inline-flex items-center gap-1.5 bg-stone-100 border border-stone-200 text-ink-600 rounded-full px-3 py-1 text-xs font-body font-medium">
              {travelMonth}
            </span>
          )}
        </div>
      )}
    </form>
  );
}
