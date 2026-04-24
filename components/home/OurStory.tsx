"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function OurStory() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-olive-900 py-20 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div ref={ref} className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] as [number,number,number,number] }}
            className="relative pb-8 lg:pb-0"
          >
            <div className="relative rounded-2xl overflow-hidden h-64 sm:h-80 lg:h-130">
              <Image
                src="https://images.unsplash.com/photo-1601058272524-14e7948e4fba?w=900&q=80"
                alt="Pilgrims praying at the Western Wall in Jerusalem"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-linear-to-tr from-olive-900/40 to-transparent" />
            </div>
            {/* Floating card — contained so it doesn't clip */}
            <div className="absolute bottom-0 right-0 sm:right-4 bg-white rounded-xl shadow-xl p-4 sm:p-5 max-w-42.5 sm:max-w-50">
              <p className="text-2xl sm:text-3xl font-display font-light text-olive-700">12+</p>
              <p className="text-xs text-ink-500 font-body mt-0.5 leading-snug">years serving African pilgrims</p>
              <div className="mt-2 gold-divider" />
            </div>
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.2, 0.8, 0.2, 1] as [number,number,number,number] }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-300 font-body mb-3">
              Our Story
            </p>
            <div className="gold-divider mb-5" />
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-light text-white leading-[1.08] mb-6">
              Born from a{" "}
              <em className="italic font-light">calling</em>,{" "}
              built on{" "}
              <span className="text-gold-300">trust</span>
            </h2>

            <div className="space-y-4 font-body text-stone-300 text-sm sm:text-base leading-relaxed">
              <p>
                Nazareth Travel Group was founded with a single conviction: every
                African Christian deserves the chance to walk where their Lord
                walked. We started humbly — one tour, one group of faith-filled
                pilgrims from a Nairobi church — and grew through the most
                powerful marketing in the world: transformed lives.
              </p>
              <p>
                Today we are Africa&apos;s most trusted Holy Land pilgrimage company,
                having taken thousands of pilgrims from Kenya and the wider
                African continent to Israel, Rome, Egypt, Greece, Turkey and
                Jordan. Every group returns changed. Every church that travels
                with us comes back on fire.
              </p>
            </div>

            <blockquote className="mt-7 border-l-2 border-gold-500 pl-5">
              <p className="font-display text-lg sm:text-xl font-light italic text-stone-200 leading-relaxed">
                &ldquo;To stand at the empty tomb and know — truly know — that He
                is risen. That is what we offer. Not a holiday. A
                transformation.&rdquo;
              </p>
              <footer className="mt-3 text-sm font-body text-stone-400">
                — Founder, Nazareth Travel Group
              </footer>
            </blockquote>

            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-2 group rounded-full border border-white/30 text-white hover:bg-white hover:text-ink-900 font-body font-semibold text-sm px-6 py-3 transition-all"
            >
              Read our full story
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
