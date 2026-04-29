/**
 * Seeds: honeymoon package, scripture verses, departures calendar
 * Run: node scripts/seed-extras.mjs
 */
import { createClient } from "@sanity/client";
import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const envContent = readFileSync(join(__dirname, "../.env.local"), "utf8");
envContent.split("\n").forEach((line) => {
  const [key, ...rest] = line.split("=");
  if (key && rest.length) process.env[key.trim()] = rest.join("=").trim();
});

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",
  token: process.env.SANITY_API_TOKEN,
  apiVersion: "2024-01-01",
  useCdn: false,
});

/* ─── Honeymoon package ─── */
const HONEYMOON = {
  _id: "package-sacred-honeymoon",
  _type: "package",
  title: "Sacred Honeymoon Pilgrimage",
  slug: { _type: "slug", current: "sacred-honeymoon" },
  badge: "For Couples",
  tagline: "Begin your marriage where love was perfected",
  duration: "10 Days",
  region: "Israel",
  groupSize: "2 persons (couples only)",
  difficulty: "Easy",
  featured: true,
  displayOrder: 7,
  description: "Begin your life together walking the land where Jesus performed His first miracle — turning water into wine at the Wedding in Cana. This exquisitely designed couples pilgrimage blends the sacred and the romantic: private guided tours, candlelit dinners overlooking the Sea of Galilee, a renewal of vows at the Jordan River, and quiet mornings at the most intimate holy sites. The most meaningful honeymoon on earth.",
  highlights: [
    "Wedding at Cana — site of Jesus' first miracle",
    "Private Jordan River vow renewal ceremony",
    "Sunset boat ride on the Sea of Galilee",
    "Couples prayer at the Church of the Holy Sepulchre",
    "Private candlelit dinner in Jerusalem Old City",
    "Mount of Beatitudes at sunrise — just the two of you",
    "Bethlehem — where the greatest love story began",
    "Boutique hotel accommodation throughout",
  ],
  inclusions: [
    "Return airfare from Nairobi (NBO)",
    "9 nights boutique/4-star hotels",
    "All breakfasts and romantic dinners",
    "Private air-conditioned vehicle (just the two of you)",
    "Personal Christian guide throughout",
    "All entrance fees",
    "Vow renewal ceremony at Jordan River",
    "Welcome bouquet and honeymoon amenities",
    "Dedicated coordinator — 24/7 WhatsApp",
  ],
  exclusions: ["Personal expenses & souvenirs", "Lunches", "Optional spa treatments"],
  itinerary: [
    { _key: "d1", day: 1, title: "Departure from Nairobi", description: "Your sacred journey begins. Overnight flight to Tel Aviv." },
    { _key: "d2", day: 2, title: "Arrival · Tel Aviv · Jerusalem", description: "Welcome arrival, transfer to your boutique hotel in Jerusalem. Evening stroll through the Old City lanes." },
    { _key: "d3", day: 3, title: "Jerusalem — Sacred Morning", description: "Private tour of the Via Dolorosa, Church of the Holy Sepulchre, and Western Wall. Afternoon at leisure. Romantic dinner in the Old City." },
    { _key: "d4", day: 4, title: "Mount of Olives · Bethlehem", description: "Sunrise on the Mount of Olives together. Visit Gethsemane. Afternoon in Bethlehem — the Church of the Nativity and Shepherd's Field." },
    { _key: "d5", day: 5, title: "Nazareth · Cana · Sea of Galilee", description: "Drive north. Visit Cana — site of Jesus' first miracle at the wedding feast. Arrive at the Sea of Galilee. Sunset boat ride on the still water." },
    { _key: "d6", day: 6, title: "Galilee — Day of Renewal", description: "Sunrise at the Mount of Beatitudes. Capernaum ruins. Private Jordan River vow renewal ceremony with your guide. Celebration dinner." },
    { _key: "d7", day: 7, title: "Galilee at leisure", description: "A restful day by the sea. Swim, walk, pray, or simply be still together." },
    { _key: "d8", day: 8, title: "Jericho · Jerusalem", description: "Visit ancient Jericho. Return to Jerusalem for a final Old City evening." },
    { _key: "d9", day: 9, title: "Jerusalem — Farewell Morning", description: "Final prayers at the Holy Sepulchre. Afternoon free. Farewell dinner." },
    { _key: "d10", day: 10, title: "Departure", description: "Transfer to Tel Aviv. Fly home as one — transformed by where you began." },
  ],
};

/* ─── Scripture verses ─── */
const SCRIPTURES = [
  { _id: "scripture-john-3-16", _type: "scripture", usage: "daily", active: true, reference: "John 3:16", verse: "For God so loved the world that He gave His only Son, that whoever believes in Him shall not perish but have eternal life." },
  { _id: "scripture-psalm-118-24", _type: "scripture", usage: "daily", active: true, reference: "Psalm 118:24", verse: "This is the day the Lord has made; let us rejoice and be glad in it." },
  { _id: "scripture-proverbs-3-5", _type: "scripture", usage: "daily", active: true, reference: "Proverbs 3:5", verse: "Trust in the Lord with all your heart and lean not on your own understanding." },
  { _id: "scripture-psalm-121-1-2", _type: "scripture", usage: "daily", active: true, reference: "Psalm 121:1–2", verse: "I lift up my eyes to the hills — where does my help come from? My help comes from the Lord." },
  { _id: "scripture-psalm-122-3-4", _type: "scripture", usage: "daily", active: true, reference: "Psalm 122:3–4", verse: "Jerusalem — built as a city that is closely compacted together. That is where the tribes go up." },
  { _id: "scripture-matt-5-37", _type: "scripture", usage: "general", active: true, reference: "Matthew 5:37", verse: "Let your yes be yes and your no be no." },
  { _id: "scripture-john-8-32", _type: "scripture", usage: "general", active: true, reference: "John 8:32", verse: "And you will know the truth, and the truth will set you free." },
  { _id: "scripture-prov-16-3", _type: "scripture", usage: "general", active: true, reference: "Proverbs 16:3", verse: "Commit to the LORD whatever you do, and He will establish your plans." },
  { _id: "scripture-1cor-10-31", _type: "scripture", usage: "general", active: true, reference: "1 Corinthians 10:31", verse: "Whatever you do, do it all for the glory of God." },
  { _id: "scripture-matt-4-19", _type: "scripture", usage: "daily", active: true, reference: "Matthew 4:19", verse: "Come, follow me, Jesus said, and I will send you out to fish for people." },
  { _id: "scripture-rom-1-16", _type: "scripture", usage: "daily", active: true, reference: "Romans 1:16", verse: "I am not ashamed of the gospel, because it is the power of God that brings salvation to everyone who believes." },
  { _id: "scripture-phil-2-3", _type: "scripture", usage: "daily", active: true, reference: "Philippians 2:3", verse: "Do nothing out of selfish ambition or vain conceit. Rather, in humility value others above yourselves." },
];

/* ─── Departures ─── */
const DEPARTURES = [
  { _id: "dep-feb-2026", _type: "departure", tourTitle: "Classic Holy Land Pilgrimage", departureMonth: "February 2026", departureDate: "2026-02-14", type: "Group", seatsLeft: 8, active: true },
  { _id: "dep-apr-2026-easter", _type: "departure", tourTitle: "Classic Holy Land (Easter)", departureMonth: "April 2026", departureDate: "2026-04-01", type: "Easter Special", seatsLeft: 3, active: true },
  { _id: "dep-jun-2026", _type: "departure", tourTitle: "Holy Land & Jordan Extended", departureMonth: "June 2026", departureDate: "2026-06-07", type: "Group", seatsLeft: 12, active: true },
  { _id: "dep-aug-2026", _type: "departure", tourTitle: "Rome & Italy Pilgrimage", departureMonth: "August 2026", departureDate: "2026-08-02", type: "Group", seatsLeft: 15, active: true },
  { _id: "dep-oct-2026", _type: "departure", tourTitle: "Classic Holy Land Pilgrimage", departureMonth: "October 2026", departureDate: "2026-10-11", type: "Group", seatsLeft: 20, active: true },
  { _id: "dep-dec-2026-xmas", _type: "departure", tourTitle: "Classic Holy Land (Christmas)", departureMonth: "December 2026", departureDate: "2026-12-20", type: "Christmas Special", seatsLeft: 6, active: true },
];

async function seed() {
  console.log("\n🌿 Seeding extras...\n");

  // Wipe old versions
  for (const type of ["departure", "scripture"]) {
    const ids = await client.fetch(`*[_type == $type]._id`, { type });
    if (ids.length) {
      const tx = client.transaction();
      ids.forEach((id) => tx.delete(id));
      await tx.commit();
      console.log(`  Cleared ${ids.length} ${type} docs`);
    }
  }
  // Delete old honeymoon if exists
  await client.delete("package-sacred-honeymoon").catch(() => {});

  const tx = client.transaction();
  [HONEYMOON, ...SCRIPTURES, ...DEPARTURES].forEach((doc) => tx.createOrReplace(doc));
  await tx.commit();

  console.log(`✅ Seeded:`);
  console.log(`   1 honeymoon package`);
  console.log(`   ${SCRIPTURES.length} scripture verses`);
  console.log(`   ${DEPARTURES.length} departures`);
  console.log(`\n✨ Done!\n`);
}

seed().catch((err) => {
  console.error("❌ Failed:", err.message);
  process.exit(1);
});
