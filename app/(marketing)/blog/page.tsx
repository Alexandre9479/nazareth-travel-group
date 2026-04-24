import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";
import Section from "@/components/shared/Section";
import CTAStrip from "@/components/home/CTAStrip";

export const metadata: Metadata = {
  title: "Blog",
  description: "Pilgrim stories, biblical site guides, and travel tips from Nazareth Travel Group.",
};

const POSTS = [
  {
    slug: "what-to-expect-holy-land",
    title: "What to Expect on Your First Holy Land Pilgrimage",
    excerpt: "Walking into the Old City of Jerusalem for the first time is overwhelming in the best possible way. Here's how to prepare your heart and your suitcase.",
    cover: "https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?w=600&q=80",
    category: "Pilgrim Stories",
    date: "2026-02-10",
    readTime: "5 min",
  },
  {
    slug: "sea-of-galilee-guide",
    title: "A Complete Guide to the Sea of Galilee",
    excerpt: "The lake where Jesus called fishermen, calmed storms, and appeared after His resurrection. Here's everything you need to know before you visit.",
    cover: "https://images.unsplash.com/photo-1504093376055-b3094b660b3e?w=600&q=80",
    category: "Biblical Sites",
    date: "2026-01-22",
    readTime: "7 min",
  },
  {
    slug: "packing-holy-land",
    title: "The Ultimate Holy Land Packing List for Kenyan Pilgrims",
    excerpt: "From comfortable shoes to modest clothing and the right Bible — everything you actually need (and what to leave at home).",
    cover: "https://images.unsplash.com/photo-1594007693440-b42a9cce1e52?w=600&q=80",
    category: "Travel Tips",
    date: "2025-12-05",
    readTime: "4 min",
  },
  {
    slug: "easter-2026-jerusalem",
    title: "Why Easter in Jerusalem is the Experience of a Lifetime",
    excerpt: "Being in Jerusalem for Easter — for the Triduum, the Via Dolorosa, the Easter Vigil — is unlike anything else. Here's why we go every year.",
    cover: "https://images.unsplash.com/photo-1601058272524-14e7948e4fba?w=600&q=80",
    category: "Pilgrim Stories",
    date: "2025-11-14",
    readTime: "6 min",
  },
  {
    slug: "petra-biblical-connection",
    title: "Petra and the Bible: What You Might Not Know",
    excerpt: "Most pilgrims know Petra as a wonder of the ancient world. Fewer know the deep connections it has to the Old Testament narrative.",
    cover: "https://images.unsplash.com/photo-1578895101408-1a36b834405b?w=600&q=80",
    category: "Biblical Sites",
    date: "2025-10-30",
    readTime: "8 min",
  },
  {
    slug: "group-pilgrimage-pastor-guide",
    title: "A Pastor's Guide to Organising a Church Pilgrimage",
    excerpt: "From announcing from the pulpit to managing deposits and keeping the group spiritually engaged — everything a pastor needs to know.",
    cover: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
    category: "Travel Tips",
    date: "2025-09-18",
    readTime: "10 min",
  },
];

export default function BlogPage() {
  const [featured, ...rest] = POSTS;

  return (
    <>
      <div className="bg-olive-900 py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-12 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-300 font-body mb-3">Journal</p>
          <div className="gold-divider mx-auto mb-5" />
          <h1 className="font-display text-4xl sm:text-5xl font-light text-white mb-5">Stories from the road</h1>
          <p className="text-stone-300 font-body text-lg max-w-xl mx-auto">
            Pilgrim testimonies, biblical site deep-dives, and practical travel
            wisdom from our team.
          </p>
        </div>
      </div>

      <Section className="bg-stone-50">
        {/* Featured post */}
        <Link
          href={`/blog/${featured.slug}`}
          className="group block mb-12 grid lg:grid-cols-2 gap-8 bg-white rounded-2xl overflow-hidden border border-stone-200 shadow-sm card-lift"
        >
          <div className="img-zoom-container relative h-64 lg:h-auto">
            <Image
              src={featured.cover}
              alt={featured.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
          <div className="p-8 flex flex-col justify-center">
            <span className="text-xs font-body font-semibold text-olive-600 uppercase tracking-widest mb-3">
              {featured.category}
            </span>
            <h2 className="font-display text-3xl font-light text-ink-900 mb-4 group-hover:text-olive-700 transition-colors leading-tight">
              {featured.title}
            </h2>
            <p className="font-body text-ink-500 text-base leading-relaxed mb-6">
              {featured.excerpt}
            </p>
            <div className="flex items-center gap-4 text-xs font-body text-ink-500">
              <span className="flex items-center gap-1">
                <CalendarDays className="h-3.5 w-3.5" />
                {new Date(featured.date).toLocaleDateString("en-KE", { month: "long", day: "numeric", year: "numeric" })}
              </span>
              <span>{featured.readTime} read</span>
            </div>
          </div>
        </Link>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {rest.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group card-lift block bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm"
            >
              <div className="img-zoom-container relative h-44">
                <Image
                  src={post.cover}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6">
                <span className="text-xs font-body font-semibold text-olive-600 uppercase tracking-widest mb-2 block">
                  {post.category}
                </span>
                <h2 className="font-display text-lg font-light text-ink-900 mb-2 group-hover:text-olive-700 transition-colors leading-snug">
                  {post.title}
                </h2>
                <p className="text-sm font-body text-ink-500 line-clamp-3 leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-xs font-body text-ink-500">
                  <span className="flex items-center gap-1">
                    <CalendarDays className="h-3.5 w-3.5" />
                    {new Date(post.date).toLocaleDateString("en-KE", { month: "short", day: "numeric", year: "numeric" })}
                  </span>
                  <span className="flex items-center gap-1 text-olive-600 font-medium">
                    Read <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <CTAStrip />
    </>
  );
}
