import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, ArrowLeft, CalendarDays, Clock } from "lucide-react";
import Container from "@/components/shared/Container";
import CTAStrip from "@/components/home/CTAStrip";

const POSTS: Record<string, {
  title: string;
  excerpt: string;
  cover: string;
  category: string;
  date: string;
  readTime: string;
  body: string;
}> = {
  "what-to-expect-holy-land": {
    title: "What to Expect on Your First Holy Land Pilgrimage",
    excerpt: "Walking into the Old City of Jerusalem for the first time is overwhelming in the best possible way. Here's how to prepare your heart and your suitcase.",
    cover: "https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?w=1200&q=80",
    category: "Pilgrim Stories",
    date: "2026-02-10",
    readTime: "5 min",
    body: `
      <p>Nothing can fully prepare you for the moment you pass through the Jaffa Gate and step into the Old City of Jerusalem for the first time. The narrow cobblestone lanes, the smell of incense and spices, the sound of church bells and the call to prayer, the sight of pilgrims from every nation on earth — it is, in the most profound sense of the word, overwhelming.</p>

      <h2>Prepare your heart, not just your itinerary</h2>
      <p>The most common thing our pilgrims tell us on return is that they wish they had read more scripture before coming. Not as a study exercise, but as spiritual preparation. We recommend beginning a daily reading of the Gospel of Luke — the most geographical of the Gospels — about four weeks before departure. Use a map. Imagine the distances. Feel the terrain.</p>

      <h2>The pace is not what you expect</h2>
      <p>Pilgrimage is not sightseeing. A good pilgrimage moves more slowly than a tourist tour — deliberately so. You will spend time at each site in prayer and reflection, not rushing to the next photo opportunity. This pace can feel unfamiliar to modern travellers, but by day three, every pilgrim finds their rhythm and never wants to hurry again.</p>

      <h2>You will cry</h2>
      <p>Almost every pilgrim cries at least once. Usually at the Western Wall. Often at the Jordan River. Inevitably at the Church of the Holy Sepulchre. Do not be embarrassed. The tears are a grace.</p>

      <h2>Practical tips for first-timers</h2>
      <p>Wear comfortable shoes — you will walk 5–10km per day. Bring a small daypack. Dress modestly at every holy site. Keep your passport and insurance card on your person at all times. Drink water constantly — dehydration is the most common complaint.</p>

      <p>The Holy Land will give you more than you bring. Come with open hands, an open heart, and trust the God who called you there to do the rest.</p>
    `,
  },
};

export async function generateStaticParams() {
  return Object.keys(POSTS).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = POSTS[slug];
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = POSTS[slug] ?? {
    title: "Blog Post",
    excerpt: "",
    cover: "https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?w=1200&q=80",
    category: "Blog",
    date: new Date().toISOString(),
    readTime: "5 min",
    body: "<p>Content coming soon.</p>",
  };

  return (
    <>
      {/* Hero */}
      <div className="relative h-[50vh] min-h-[340px]">
        <Image src={post.cover} alt={post.title} fill className="object-cover" priority sizes="100vw" />
        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent" />
        <Container className="absolute inset-x-0 bottom-0 pb-10">
          <nav className="flex items-center gap-1.5 text-xs text-stone-300 font-body mb-4" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-white truncate max-w-xs">{post.title}</span>
          </nav>
          <span className="text-xs font-body font-semibold text-gold-300 uppercase tracking-widest mb-2 block">
            {post.category}
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-light text-white max-w-3xl leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 mt-4 text-sm text-stone-300 font-body">
            <span className="flex items-center gap-1.5">
              <CalendarDays className="h-4 w-4" />
              {new Date(post.date).toLocaleDateString("en-KE", { month: "long", day: "numeric", year: "numeric" })}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              {post.readTime} read
            </span>
          </div>
        </Container>
      </div>

      <Container className="py-16">
        <div className="max-w-2xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-body text-olive-600 hover:text-olive-700 mb-10 group"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to Blog
          </Link>

          <div
            className="prose-pilgrimage"
            dangerouslySetInnerHTML={{ __html: post.body }}
          />

          <div className="mt-16 pt-10 border-t border-stone-200">
            <p className="font-body text-sm text-ink-500 mb-3">
              Ready to experience the Holy Land yourself?
            </p>
            <Link
              href="/programs"
              className="inline-flex items-center gap-2 rounded-full bg-olive-600 hover:bg-olive-700 text-white font-body font-semibold text-sm px-6 py-3 transition-all"
            >
              View our pilgrimages
            </Link>
          </div>
        </div>
      </Container>

      <CTAStrip />
    </>
  );
}
