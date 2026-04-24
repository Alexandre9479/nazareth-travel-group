"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star, Users, CalendarCheck } from "lucide-react";
import { generalInquiryLink } from "@/lib/whatsapp";

const STATS = [
  { value: "12+", label: "Years of service", icon: CalendarCheck },
  { value: "5,000+", label: "Pilgrims served", icon: Users },
  { value: "4.9", label: "Average rating", icon: Star },
];

const EASE = [0.2, 0.8, 0.2, 1] as [number, number, number, number];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: EASE },
  }),
};

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[92vh] flex items-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background image — parallax */}
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <Image
          src="https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?w=1920&q=85"
          alt="Jerusalem at golden hour — the Old City walls and Dome of the Rock"
          fill
          priority
          className="object-cover object-center scale-110"
          sizes="100vw"
        />
        <div className="absolute inset-0 hero-overlay" />
        {/* Warm gradient at bottom */}
        <div className="absolute inset-x-0 bottom-0 h-48 bg-linear-to-t from-stone-50 to-transparent" />
      </motion.div>

      {/* Content grid — subtle lift on scroll */}
      <motion.div
        style={{ y: contentY, opacity }}
        className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-12 py-14 md:py-20 grid lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-20 items-center"
      >
        {/* Left — headline */}
        <div>
          <motion.p
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="text-xs font-semibold tracking-[0.22em] uppercase text-gold-300 font-body mb-4"
          >
            Holy Land Pilgrimages from Africa
          </motion.p>

          <motion.div
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="show"
          >
            <div className="gold-divider mb-5" />
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-[1.08] text-white">
              Walk where{" "}
              <em className="italic font-light">Jesus</em>{" "}
              walked.{" "}
              <br className="hidden sm:block" />
              <span className="text-gold-300">Your faith awaits.</span>
            </h1>
          </motion.div>

          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-5 text-base md:text-lg text-stone-200 font-body font-light leading-relaxed max-w-lg"
          >
            Africa&apos;s most trusted Christian pilgrimage company. We take
            Kenyan churches, pastors, and individuals to the Holy Land, Rome,
            Egypt, and beyond — with care, integrity, and deep reverence.
          </motion.p>

          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="flex flex-wrap gap-4 mt-9"
          >
            <Link
              href="/book-inquiry"
              className="group inline-flex items-center gap-2 rounded-full bg-olive-600 hover:bg-olive-700 text-white font-body font-semibold text-sm px-6 py-3.5 transition-all hover:-translate-y-0.5 shadow-lg"
            >
              Plan My Pilgrimage
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href={generalInquiryLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur-sm border border-white/30 hover:bg-white/25 text-white font-body font-semibold text-sm px-6 py-3.5 transition-all hover:-translate-y-0.5"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Chat on WhatsApp
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="flex flex-wrap gap-5 mt-10 pt-8 border-t border-white/20"
          >
            {STATS.map(({ value, label, icon: Icon }) => (
              <div key={label} className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center">
                  <Icon className="h-4 w-4 text-gold-300" />
                </div>
                <div>
                  <p className="text-xl font-display font-medium text-white leading-none">
                    {value}
                  </p>
                  <p className="text-xs text-stone-300 font-body mt-0.5">{label}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right — inquiry card */}
        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="relative hidden lg:block"
        >
          <div className="absolute -inset-4 bg-linear-to-br from-olive-600/20 to-gold-500/10 rounded-3xl blur-2xl" />
          <div className="relative bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-white/60">
            <p className="text-xs font-semibold uppercase tracking-widest text-olive-600 mb-1 font-body">
              Plan your pilgrimage
            </p>
            <h2 className="font-display text-2xl font-light text-ink-900 mb-6">
              Where would you like to go?
            </h2>

            <div className="flex flex-col gap-3">
              {[
                { label: "🕊️ Holy Land (Israel)", href: "/programs/classic-holy-land" },
                { label: "🏛️ Rome & Vatican", href: "/programs/rome-italy" },
                { label: "🏔️ Holy Land & Jordan", href: "/programs/holy-land-jordan" },
                { label: "🌙 Egypt (Sinai & Cairo)", href: "/programs/egypt-biblical" },
                { label: "✨ Custom Pilgrimage", href: "/programs/bespoke-holy-land" },
              ].map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  className="flex items-center justify-between p-3.5 rounded-xl bg-stone-50 hover:bg-olive-50 border border-stone-200 hover:border-olive-300 transition-all group"
                >
                  <span className="text-sm font-body font-medium text-ink-700 group-hover:text-olive-700">
                    {label}
                  </span>
                  <ArrowRight className="h-4 w-4 text-stone-400 group-hover:text-olive-600 transition-transform group-hover:translate-x-1" />
                </Link>
              ))}
            </div>

            <div className="mt-6 pt-5 border-t border-stone-100">
              <p className="text-xs text-ink-500 font-body text-center">
                Not sure? Talk to us — we&apos;ll find the perfect pilgrimage for you.
              </p>
              <a
                href={generalInquiryLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 flex items-center justify-center gap-2 w-full rounded-xl bg-[#25D366] hover:bg-[#1ebe5d] text-white text-sm font-semibold py-3 transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Chat with us on WhatsApp
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60"
      >
        <span className="text-xs font-body tracking-widest uppercase">Scroll</span>
        <div className="w-px h-10 bg-white/40 relative overflow-hidden">
          <motion.div
            className="absolute inset-x-0 top-0 h-4 bg-white/80"
            animate={{ y: [0, 40] }}
            transition={{ duration: 1.2, repeat: Infinity, ease: "easeIn" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
