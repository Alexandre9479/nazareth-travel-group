"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Phone, Mail, MapPin, Send, CheckCircle2 } from "lucide-react";
import Section from "@/components/shared/Section";
import { generalInquiryLink } from "@/lib/whatsapp";

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  phone: z.string().min(9, "Phone number required"),
  church: z.string().optional(),
  groupSize: z.string().optional(),
  destination: z.string().optional(),
  message: z.string().min(10, "Please provide a message"),
});

type FormData = z.infer<typeof schema>;

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

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

  return (
    <>
      <div className="bg-olive-900 py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-12 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-300 font-body mb-3">
            Contact Us
          </p>
          <div className="gold-divider mx-auto mb-5" />
          <h1 className="font-display text-4xl sm:text-5xl font-light text-white mb-4">
            We&apos;d love to hear from you
          </h1>
          <p className="text-stone-300 font-body text-lg max-w-xl mx-auto">
            Whether you have a question, want a quote, or are ready to book —
            reach out and we&apos;ll respond within 24 hours.
          </p>
        </div>
      </div>

      <Section className="bg-stone-50">
        <div className="grid lg:grid-cols-[1fr_380px] gap-12">
          {/* Form */}
          <div className="bg-white rounded-2xl border border-stone-200 shadow-sm p-8">
            {submitted ? (
              <div className="text-center py-12">
                <CheckCircle2 className="h-14 w-14 text-olive-600 mx-auto mb-4" />
                <h2 className="font-display text-2xl font-light text-ink-900 mb-3">
                  Thank you! We&apos;ll be in touch soon.
                </h2>
                <p className="font-body text-ink-500 text-sm">
                  We&apos;ve received your inquiry and will respond within 24 hours.
                  For urgent queries, please WhatsApp us directly.
                </p>
                <a
                  href={generalInquiryLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#25D366] text-white font-body font-semibold text-sm px-6 py-3 transition-colors"
                >
                  WhatsApp Us Now
                </a>
              </div>
            ) : (
              <>
                <h2 className="font-display text-2xl font-light text-ink-900 mb-6">
                  Send an Inquiry
                </h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-body font-semibold text-ink-700 mb-1.5 uppercase tracking-wide">
                        Full Name *
                      </label>
                      <input
                        {...register("name")}
                        className="w-full rounded-xl border border-stone-200 px-4 py-3 text-sm font-body text-ink-900 placeholder:text-stone-400 focus:border-olive-400 focus:outline-none focus:ring-2 focus:ring-olive-400/20 transition-all"
                        placeholder="Your full name"
                      />
                      {errors.name && (
                        <p className="mt-1 text-xs text-red-500 font-body">{errors.name.message}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-xs font-body font-semibold text-ink-700 mb-1.5 uppercase tracking-wide">
                        Email *
                      </label>
                      <input
                        {...register("email")}
                        type="email"
                        className="w-full rounded-xl border border-stone-200 px-4 py-3 text-sm font-body text-ink-900 placeholder:text-stone-400 focus:border-olive-400 focus:outline-none focus:ring-2 focus:ring-olive-400/20 transition-all"
                        placeholder="your@email.com"
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-red-500 font-body">{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-body font-semibold text-ink-700 mb-1.5 uppercase tracking-wide">
                        Phone / WhatsApp *
                      </label>
                      <input
                        {...register("phone")}
                        type="tel"
                        className="w-full rounded-xl border border-stone-200 px-4 py-3 text-sm font-body text-ink-900 placeholder:text-stone-400 focus:border-olive-400 focus:outline-none focus:ring-2 focus:ring-olive-400/20 transition-all"
                        placeholder="+254 7XX XXX XXX"
                      />
                      {errors.phone && (
                        <p className="mt-1 text-xs text-red-500 font-body">{errors.phone.message}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-xs font-body font-semibold text-ink-700 mb-1.5 uppercase tracking-wide">
                        Church / Organisation
                      </label>
                      <input
                        {...register("church")}
                        className="w-full rounded-xl border border-stone-200 px-4 py-3 text-sm font-body text-ink-900 placeholder:text-stone-400 focus:border-olive-400 focus:outline-none focus:ring-2 focus:ring-olive-400/20 transition-all"
                        placeholder="Your church name"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-body font-semibold text-ink-700 mb-1.5 uppercase tracking-wide">
                        Group Size
                      </label>
                      <select
                        {...register("groupSize")}
                        className="w-full rounded-xl border border-stone-200 px-4 py-3 text-sm font-body text-ink-900 focus:border-olive-400 focus:outline-none focus:ring-2 focus:ring-olive-400/20 transition-all bg-white"
                      >
                        <option value="">Select group size</option>
                        <option value="individual">Just me (1)</option>
                        <option value="2-5">2–5 people</option>
                        <option value="6-15">6–15 people</option>
                        <option value="16-35">16–35 people</option>
                        <option value="35+">35+ people (church group)</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-body font-semibold text-ink-700 mb-1.5 uppercase tracking-wide">
                        Destination Interest
                      </label>
                      <select
                        {...register("destination")}
                        className="w-full rounded-xl border border-stone-200 px-4 py-3 text-sm font-body text-ink-900 focus:border-olive-400 focus:outline-none focus:ring-2 focus:ring-olive-400/20 transition-all bg-white"
                      >
                        <option value="">Select destination</option>
                        <option value="classic-holy-land">Classic Holy Land (Israel)</option>
                        <option value="holy-land-jordan">Holy Land & Jordan</option>
                        <option value="rome-italy">Rome & Italy</option>
                        <option value="egypt">Egypt (Sinai & Cairo)</option>
                        <option value="footsteps-of-paul">Footsteps of Paul (Greece & Turkey)</option>
                        <option value="bespoke">Custom / Bespoke Pilgrimage</option>
                        <option value="unsure">Not sure yet</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-body font-semibold text-ink-700 mb-1.5 uppercase tracking-wide">
                      Message *
                    </label>
                    <textarea
                      {...register("message")}
                      rows={5}
                      className="w-full rounded-xl border border-stone-200 px-4 py-3 text-sm font-body text-ink-900 placeholder:text-stone-400 focus:border-olive-400 focus:outline-none focus:ring-2 focus:ring-olive-400/20 transition-all resize-none"
                      placeholder="Tell us about your pilgrimage dream — preferred dates, special requests, questions..."
                    />
                    {errors.message && (
                      <p className="mt-1 text-xs text-red-500 font-body">{errors.message.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full flex items-center justify-center gap-2 rounded-full bg-olive-600 hover:bg-olive-700 disabled:opacity-60 text-white font-body font-semibold py-4 transition-all"
                  >
                    <Send className="h-4 w-4" />
                    {submitting ? "Sending..." : "Send Inquiry"}
                  </button>
                </form>
              </>
            )}
          </div>

          {/* Contact info */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl border border-stone-200 shadow-sm p-7">
              <h3 className="font-display text-xl font-light text-ink-900 mb-5">Contact Details</h3>
              <div className="space-y-4">
                <a
                  href="tel:+254700000000"
                  className="flex items-center gap-3 text-sm font-body text-ink-600 hover:text-olive-600 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-olive-50 flex items-center justify-center group-hover:bg-olive-100 transition-colors">
                    <Phone className="h-4 w-4 text-olive-600" />
                  </div>
                  +254 700 000 000
                </a>
                <a
                  href="mailto:info@nazarethtravelgroup.com"
                  className="flex items-center gap-3 text-sm font-body text-ink-600 hover:text-olive-600 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-olive-50 flex items-center justify-center group-hover:bg-olive-100 transition-colors">
                    <Mail className="h-4 w-4 text-olive-600" />
                  </div>
                  info@nazarethtravelgroup.com
                </a>
                <div className="flex items-start gap-3 text-sm font-body text-ink-600">
                  <div className="w-10 h-10 rounded-xl bg-olive-50 flex items-center justify-center shrink-0">
                    <MapPin className="h-4 w-4 text-olive-600" />
                  </div>
                  Nairobi, Kenya
                </div>
              </div>
            </div>

            <div className="bg-[#25D366]/10 rounded-2xl border border-[#25D366]/30 p-7">
              <h3 className="font-body font-semibold text-ink-900 mb-2">Prefer WhatsApp?</h3>
              <p className="text-sm font-body text-ink-500 mb-4">
                Most pilgrims find WhatsApp the fastest way to get answers.
                We typically respond within a few hours.
              </p>
              <a
                href={generalInquiryLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full rounded-xl bg-[#25D366] hover:bg-[#1ebe5d] text-white font-body font-semibold py-3.5 transition-all text-sm"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Open WhatsApp Chat
              </a>
            </div>

            <div className="bg-stone-100 rounded-2xl p-7 border border-stone-200">
              <p className="text-xs font-body font-semibold text-olive-600 uppercase tracking-widest mb-2">
                Response time
              </p>
              <p className="font-display text-2xl font-light text-ink-900">
                Within 24 hours
              </p>
              <p className="text-sm font-body text-ink-500 mt-1">
                Monday–Saturday, 8am–6pm EAT
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
