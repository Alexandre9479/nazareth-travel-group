/**
 * Sanity seed script — run once to populate the CMS with all initial content.
 * Usage: node scripts/seed-sanity.mjs
 */
import { createClient } from "@sanity/client";
import * as dotenv from "dotenv";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { readFileSync } from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load .env.local
const envPath = join(__dirname, "../.env.local");
const envContent = readFileSync(envPath, "utf8");
envContent.split("\n").forEach((line) => {
  const [key, ...rest] = line.split("=");
  if (key && rest.length) {
    process.env[key.trim()] = rest.join("=").trim();
  }
});

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",
  token: process.env.SANITY_API_TOKEN,
  apiVersion: "2024-01-01",
  useCdn: false,
});

// ─── Helper ───────────────────────────────────────────────────────────────────
function imageRef(url) {
  return { _type: "externalImage", url };
}

function sanityImage(url, alt) {
  return {
    _type: "image",
    asset: { _type: "reference", _ref: `image-placeholder` },
    url,
    alt: alt ?? "",
  };
}

async function wipe(type) {
  const ids = await client.fetch(`*[_type == $type]._id`, { type });
  if (!ids.length) return;
  const tx = client.transaction();
  ids.forEach((id) => tx.delete(id));
  await tx.commit();
  console.log(`  Deleted ${ids.length} existing ${type} documents`);
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const PACKAGES = [
  {
    _id: "package-classic-holy-land",
    _type: "package",
    title: "Classic Holy Land Pilgrimage",
    slug: { _type: "slug", current: "classic-holy-land" },
    badge: "Most Popular",
    tagline: "Walk where Jesus walked",
    duration: "8 Days",
    region: "Israel",
    groupSize: "15–40 pilgrims",
    difficulty: "Easy",
    featured: true,
    displayOrder: 1,
    description:
      "The essential pilgrimage experience covering the most sacred sites in Israel — from the birthplace of Jesus in Bethlehem to the resurrection site at the Church of the Holy Sepulchre. This carefully curated journey follows the footsteps of Christ through Jerusalem's Old City, the shores of the Sea of Galilee, and the desert wilderness of Jericho.",
    highlights: [
      "Church of the Holy Sepulchre",
      "Via Dolorosa — Stations of the Cross",
      "Bethlehem & Church of the Nativity",
      "Sea of Galilee boat ride",
      "Jordan River baptism renewal",
      "Mount of Olives panorama",
      "Yad Vashem Holocaust Memorial",
      "Western Wall (Wailing Wall)",
    ],
    inclusions: [
      "Return airfare from Nairobi (NBO)",
      "All airport/hotel transfers",
      "7 nights accommodation (4-star hotels)",
      "All breakfasts and dinners",
      "Private air-conditioned coach",
      "Licensed Christian guide",
      "All entrance fees to holy sites",
      "Daily devotions & group prayer",
      "Group medical insurance",
      "Luggage handling",
    ],
    exclusions: [
      "Personal expenses & souvenirs",
      "Lunches (except where noted)",
      "Optional activities",
      "Single room supplement",
      "Visa fees (Israeli visa is free for Kenyan passport)",
      "Tips for guide and driver",
    ],
    itinerary: [
      { _key: "d1", day: 1, title: "Departure from Nairobi", description: "Gather at JKIA for your overnight flight to Tel Aviv. Briefing, group prayer, and departure in faith." },
      { _key: "d2", day: 2, title: "Arrival in Tel Aviv · Jerusalem", description: "Land at Ben Gurion International Airport. Transfer to Jerusalem (1 hr). Check in and evening walk to the Old City walls." },
      { _key: "d3", day: 3, title: "Jerusalem Old City", description: "Walk the Via Dolorosa, visit the Church of the Holy Sepulchre, the Western Wall, and the Jewish Quarter." },
      { _key: "d4", day: 4, title: "Mount of Olives · Bethlehem", description: "Morning panorama from the Mount of Olives. Descent to Gethsemane. Afternoon in Bethlehem — Church of the Nativity and Shepherd's Field." },
      { _key: "d5", day: 5, title: "Nazareth · Sea of Galilee", description: "Drive north through the hills of Judea to Nazareth. Visit the Basilica of the Annunciation. Evening arrival at the Sea of Galilee." },
      { _key: "d6", day: 6, title: "Galilee · Jordan River", description: "Sunrise over the Sea of Galilee. Boat ride on the lake. Visit Capernaum and the Mount of Beatitudes. Jordan River baptism renewal." },
      { _key: "d7", day: 7, title: "Jericho · Dead Sea", description: "Visit ancient Jericho, the oldest city in the world. Optional float on the Dead Sea. Return to Jerusalem for farewell dinner." },
      { _key: "d8", day: 8, title: "Departure", description: "Morning free for final prayers. Transfer to Tel Aviv airport. Fly home transformed." },
    ],
  },
  {
    _id: "package-holy-land-jordan",
    _type: "package",
    title: "Holy Land & Jordan Extended",
    slug: { _type: "slug", current: "holy-land-jordan" },
    badge: "Extended",
    tagline: "Israel, Petra & the rose-red city",
    duration: "11 Days",
    region: "Israel + Jordan",
    groupSize: "15–35 pilgrims",
    difficulty: "Moderate",
    featured: true,
    displayOrder: 2,
    description:
      "Our most comprehensive Middle East pilgrimage, combining the sacred sites of Israel with the breathtaking ancient wonders of Jordan. Cross the Jordan River into the Hashemite Kingdom to visit Petra, the Dead Sea, the memorial of Moses on Mount Nebo, and the baptism site of Jesus at Bethany-Beyond-the-Jordan.",
    highlights: [
      "All Classic Holy Land sites",
      "Petra — the Rose-Red City",
      "Mount Nebo (Moses' memorial)",
      "Baptism Site at Bethany-Beyond-Jordan",
      "Dead Sea float (both sides)",
      "Madaba Mosaic Map",
      "Wadi Rum (optional)",
    ],
    inclusions: [
      "Return airfare from Nairobi",
      "All transfers and cross-border logistics",
      "10 nights accommodation (4-star)",
      "All breakfasts and dinners",
      "Private coach in Israel and Jordan",
      "Licensed guides in both countries",
      "All entrance fees including Petra",
      "Daily devotions",
      "Group medical insurance",
    ],
    exclusions: [
      "Personal expenses",
      "Lunches",
      "Optional Wadi Rum excursion",
      "Single supplement",
      "Jordan visa (usually included — confirm at booking)",
    ],
    itinerary: [
      { _key: "d1", day: 1, title: "Nairobi departure", description: "Overnight flight to Amman or Tel Aviv." },
      { _key: "d2", day: 2, title: "Arrival · Amman", description: "Check in Amman. Evening city orientation." },
      { _key: "d3", day: 3, title: "Madaba · Mount Nebo · Dead Sea", description: "Visit the mosaic map, Moses memorial, Dead Sea." },
      { _key: "d4", day: 4, title: "Baptism Site · Petra journey", description: "Visit Bethany-Beyond-Jordan, drive south to Petra." },
      { _key: "d5", day: 5, title: "Full day Petra", description: "The Siq, Treasury, Monastery, High Place of Sacrifice." },
      { _key: "d6", day: 6, title: "Cross into Israel · Jerusalem", description: "Border crossing at Allenby/Sheikh Hussein Bridge." },
      { _key: "d7", day: 7, title: "Jerusalem Old City", description: "Via Dolorosa, Holy Sepulchre, Western Wall." },
      { _key: "d8", day: 8, title: "Mount of Olives · Bethlehem", description: "Gethsemane, Church of the Nativity, Shepherd's Field." },
      { _key: "d9", day: 9, title: "Galilee", description: "Nazareth, Sea of Galilee, Jordan River renewal." },
      { _key: "d10", day: 10, title: "Jericho · Jerusalem", description: "Jericho, final Jerusalem evening." },
      { _key: "d11", day: 11, title: "Departure", description: "Fly home via Tel Aviv." },
    ],
  },
  {
    _id: "package-rome-italy",
    _type: "package",
    title: "Rome & Italy Pilgrimage",
    slug: { _type: "slug", current: "rome-italy" },
    badge: "New",
    tagline: "Where Peter and Paul gave their lives",
    duration: "10 Days",
    region: "Italy",
    groupSize: "12–30 pilgrims",
    difficulty: "Easy–Moderate",
    featured: true,
    displayOrder: 3,
    description:
      "Walk the cobblestones of the Eternal City on a profound pilgrimage to the heart of Christendom. Visit the four major basilicas, descend into the catacombs, stand in St. Peter's Square, and journey to Assisi — the city of St. Francis.",
    highlights: [
      "St. Peter's Basilica & Vatican Museums",
      "Sistine Chapel",
      "Colosseum & Roman Forum",
      "Catacombs of San Callisto",
      "Basilica of St. Paul Outside the Walls",
      "Assisi — home of St. Francis",
      "Papal Audience (when available)",
      "Mass at the Vatican",
    ],
    inclusions: [
      "Return airfare from Nairobi via hub",
      "9 nights 4-star accommodation",
      "Daily breakfasts and most dinners",
      "Private coach",
      "Expert Catholic guide",
      "All entrance fees",
      "Vatican skip-the-line access",
      "Daily Mass facilitation",
    ],
    exclusions: [
      "Personal expenses",
      "Some lunches",
      "Single supplement",
      "Florence extension (optional — priced separately)",
    ],
    itinerary: [
      { _key: "d1", day: 1, title: "Departure Nairobi", description: "Overnight flight." },
      { _key: "d2", day: 2, title: "Arrival Rome", description: "Check in near Vatican. Evening stroll." },
      { _key: "d3", day: 3, title: "Vatican Day", description: "Vatican Museums, Sistine Chapel, St. Peter's." },
      { _key: "d4", day: 4, title: "Ancient Rome", description: "Colosseum, Forum, Palatine, Catacombs." },
      { _key: "d5", day: 5, title: "Major Basilicas", description: "St. John Lateran, Santa Maria Maggiore, St. Paul's." },
      { _key: "d6", day: 6, title: "Assisi Day Trip", description: "Basilica of St. Francis, tomb, Portiuncula." },
      { _key: "d7", day: 7, title: "Papal Audience / Free Day", description: "Wednesday audience if available." },
      { _key: "d8", day: 8, title: "Rome at leisure", description: "Trastevere, Campo de' Fiori, shopping." },
      { _key: "d9", day: 9, title: "Final liturgies", description: "Private Mass, souvenir shopping, farewell dinner." },
      { _key: "d10", day: 10, title: "Departure", description: "Fly home via hub." },
    ],
  },
  {
    _id: "package-egypt-biblical",
    _type: "package",
    title: "Egypt Biblical Journey",
    slug: { _type: "slug", current: "egypt-biblical" },
    badge: null,
    tagline: "From the Nile to the summit of Sinai",
    duration: "9 Days",
    region: "Egypt",
    groupSize: "10–28 pilgrims",
    difficulty: "Moderate (Sinai ascent is strenuous)",
    featured: false,
    displayOrder: 4,
    description:
      "Follow Moses and the people of God through the ancient land of the Pharaohs. Climb Mount Sinai at dawn, visit the ancient monastery of St. Catherine's, discover Coptic Cairo's hidden churches, and stand before the pyramids.",
    highlights: [
      "Summit of Mount Sinai at sunrise",
      "St. Catherine's Monastery",
      "Coptic Cairo — Hanging Church, Ben Ezra Synagogue",
      "The Pyramids of Giza",
      "Egyptian Museum",
      "The Nile",
    ],
    inclusions: [
      "Return airfare NBO–CAI",
      "All internal transfers",
      "8 nights accommodation",
      "Breakfast and dinner daily",
      "Licensed Egyptologist guide",
      "All entrance fees",
      "Sinai night ascent guide",
      "Comprehensive travel insurance",
    ],
    exclusions: ["Personal spending", "Abu Simbel extension", "Camel rides", "Single supplement", "Tips"],
    itinerary: [
      { _key: "d1", day: 1, title: "Nairobi departure", description: "" },
      { _key: "d2", day: 2, title: "Cairo arrival", description: "Hotel, city orientation." },
      { _key: "d3", day: 3, title: "Coptic Cairo", description: "Hanging Church, Ben Ezra, Holy Family sites." },
      { _key: "d4", day: 4, title: "Pyramids & Museum", description: "Giza, museum." },
      { _key: "d5", day: 5, title: "Drive to Sinai", description: "Through the desert to St. Catherine's." },
      { _key: "d6", day: 6, title: "Sinai sunrise", description: "Midnight ascent, sunrise at summit, monastery." },
      { _key: "d7", day: 7, title: "Return Cairo", description: "Scenic Sinai peninsula drive." },
      { _key: "d8", day: 8, title: "Nile cruise / leisure", description: "Free day." },
      { _key: "d9", day: 9, title: "Departure", description: "Fly home." },
    ],
  },
  {
    _id: "package-footsteps-of-paul",
    _type: "package",
    title: "Footsteps of Paul",
    slug: { _type: "slug", current: "footsteps-of-paul" },
    badge: null,
    tagline: "Through the churches of the New Testament",
    duration: "12 Days",
    region: "Greece + Turkey",
    groupSize: "10–25 pilgrims",
    difficulty: "Easy–Moderate",
    featured: false,
    displayOrder: 5,
    description:
      "An intellectually and spiritually thrilling journey retracing St. Paul's missionary journeys through Greece and western Turkey. Visit ancient Corinth, stand on the Areopagus in Athens where Paul preached, walk the ruins of Ephesus, and see the Seven Churches of Revelation.",
    highlights: [
      "Athens Acropolis & Areopagus",
      "Ancient Corinth",
      "Ephesus (Efes) ruins",
      "Sardis, Pergamon, Smyrna",
      "House of the Virgin Mary",
      "Philippi",
      "Thessaloniki",
    ],
    inclusions: [
      "Return airfare NBO–ATH",
      "Internal Athens–Istanbul ferry or flight",
      "11 nights 4-star accommodation",
      "Breakfast and dinner daily",
      "Christian scholar guide",
      "All site entrance fees",
      "Inter-city transfers",
    ],
    exclusions: ["Lunches", "Personal expenses", "Single supplement", "Optional Greek Island day trip"],
    itinerary: [
      { _key: "d1", day: 1, title: "Nairobi departure", description: "" },
      { _key: "d2", day: 2, title: "Athens arrival", description: "Hotel, Plaka walk." },
      { _key: "d3", day: 3, title: "Acropolis & Areopagus", description: "Parthenon, Mars Hill (Acts 17)." },
      { _key: "d4", day: 4, title: "Corinth", description: "Ancient Corinth, Bema seat, Cenchreae." },
      { _key: "d5", day: 5, title: "Philippi · Kavala", description: "Lydia's baptistery, prison." },
      { _key: "d6", day: 6, title: "Thessaloniki", description: "City of Acts 17." },
      { _key: "d7", day: 7, title: "Ferry/flight to Turkey", description: "Izmir arrival." },
      { _key: "d8", day: 8, title: "Ephesus", description: "Full day at Ephesus, Library of Celsus, theatre." },
      { _key: "d9", day: 9, title: "House of Virgin Mary · Sardis", description: "Meryemana, Sardis ruins." },
      { _key: "d10", day: 10, title: "Pergamon · Smyrna", description: "Acropolis of Pergamon, Izmir waterfront." },
      { _key: "d11", day: 11, title: "Istanbul", description: "Hagia Sofia, Bosphorus." },
      { _key: "d12", day: 12, title: "Departure", description: "Fly home via hub." },
    ],
  },
  {
    _id: "package-bespoke-holy-land",
    _type: "package",
    title: "Bespoke Holy Land Holiday",
    slug: { _type: "slug", current: "bespoke-holy-land" },
    badge: "Private & Luxury",
    tagline: "Entirely yours — crafted to your vision",
    duration: "Custom",
    region: "Israel",
    groupSize: "2–15 persons",
    difficulty: "Customisable",
    featured: true,
    displayOrder: 6,
    description:
      "For pastors, church leaders, or families who desire a private, deeply personal pilgrimage designed around your spiritual goals, preferred dates, and budget. We craft a bespoke itinerary, assign a dedicated guide, and handle every detail.",
    highlights: [
      "Fully customised itinerary",
      "Private vehicle and dedicated guide",
      "Boutique or luxury hotel options",
      "Flexible dates — any time of year",
      "Private access arrangements",
      "Personalized devotional materials",
      "Pastor-led group prayer sessions",
      "Direct WhatsApp line to your coordinator",
    ],
    inclusions: ["Everything agreed in your bespoke proposal"],
    exclusions: ["Items not in your agreed proposal"],
    itinerary: [],
  },
];

const DESTINATIONS = [
  {
    _id: "destination-jerusalem",
    _type: "destination",
    name: "Jerusalem",
    slug: { _type: "slug", current: "jerusalem" },
    country: "Israel",
    tagline: "The eternal city — holy to three faiths",
    description: "Jerusalem is the spiritual epicentre of the Christian faith. Within her ancient walls lie the Via Dolorosa where Jesus carried His cross, the Church of the Holy Sepulchre built over the crucifixion and resurrection sites, the Garden of Gethsemane where He prayed before His arrest, and the Upper Room where the Last Supper took place. To walk Jerusalem is to walk the Gospels.",
    scripture: '"If I forget you, O Jerusalem, let my right hand forget its skill." — Psalm 137:5',
    highlights: ["Church of the Holy Sepulchre", "Via Dolorosa", "Western Wall", "Mount of Olives", "Garden of Gethsemane", "Upper Room (Cenacle)", "Yad Vashem"],
    bestTime: "March–May, Sept–Nov",
    featured: true,
  },
  {
    _id: "destination-bethlehem",
    _type: "destination",
    name: "Bethlehem",
    slug: { _type: "slug", current: "bethlehem" },
    country: "Palestine",
    tagline: "Where the Word became flesh",
    description: "The humble birthplace of Jesus Christ sits just 8 km south of Jerusalem in the Palestinian West Bank. The Church of the Nativity — one of the oldest continuously operating churches in the world — marks the very spot where Mary laid the infant Jesus in a manger.",
    scripture: '"But you, Bethlehem Ephrathah... from you One will go forth for Me to be ruler in Israel." — Micah 5:2',
    highlights: ["Church of the Nativity", "Manger Square", "Shepherd's Field", "Milk Grotto Chapel"],
    bestTime: "Year-round (Christmas season is magical)",
    featured: true,
  },
  {
    _id: "destination-nazareth",
    _type: "destination",
    name: "Nazareth",
    slug: { _type: "slug", current: "nazareth" },
    country: "Israel",
    tagline: "Where Jesus grew up",
    description: "The town where Jesus spent most of His earthly life, growing up in the carpenter's household of Joseph and Mary. The Basilica of the Annunciation — the largest church in the Middle East — commemorates the angel Gabriel's visit to Mary.",
    scripture: '"Can anything good come out of Nazareth?" Philip said, "Come and see." — John 1:46',
    highlights: ["Basilica of the Annunciation", "Ancient Nazareth Village", "St. Joseph's Church", "Mary's Well"],
    bestTime: "March–May, Sept–Nov",
    featured: false,
  },
  {
    _id: "destination-galilee",
    _type: "destination",
    name: "Sea of Galilee",
    slug: { _type: "slug", current: "galilee" },
    country: "Israel",
    tagline: "Where Jesus taught, healed, and walked on water",
    description: "The freshwater lake in northern Israel was the backdrop for much of Jesus' ministry. It was here He called fishermen to follow Him, calmed the storm, fed the 5,000, and appeared to His disciples after the resurrection.",
    scripture: '"Come, follow me," Jesus said, "and I will send you out to fish for people." — Matthew 4:19',
    highlights: ["Capernaum ruins", "Mount of Beatitudes", "Tabgha (loaves & fishes)", "Jordan River baptism", "Boat ride on the Sea"],
    bestTime: "Year-round",
    featured: true,
  },
  {
    _id: "destination-jericho",
    _type: "destination",
    name: "Jericho",
    slug: { _type: "slug", current: "jericho" },
    country: "Palestine",
    tagline: "The world's oldest city",
    description: "Jericho is one of the oldest continuously inhabited cities on earth, with a history stretching back 10,000 years. In the Gospels, Jericho is where Zacchaeus climbed a sycamore tree to see Jesus, where Bartimaeus received his sight, and where the road to Jerusalem began.",
    scripture: '"Jesus entered Jericho and was passing through." — Luke 19:1',
    highlights: ["Tell es-Sultan (ancient ruins)", "Monastery of Temptation", "Zacchaeus' Sycamore Tree", "Dead Sea proximity"],
    bestTime: "Oct–April (avoid summer heat)",
    featured: false,
  },
  {
    _id: "destination-petra",
    _type: "destination",
    name: "Petra",
    slug: { _type: "slug", current: "petra" },
    country: "Jordan",
    tagline: "The rose-red city half as old as time",
    description: "The ancient Nabataean capital carved from rose-red sandstone cliffs is one of the world's greatest archaeological treasures and a UNESCO World Heritage Site. The Treasury at the end of the Siq leaves every pilgrim speechless.",
    scripture: '"The LORD will roar from Zion and thunder from Jerusalem." — Joel 3:16',
    highlights: ["The Siq canyon walk", "Al-Khazneh (The Treasury)", "The Monastery", "High Place of Sacrifice", "Petra by Night"],
    bestTime: "March–May, Sept–Nov",
    featured: true,
  },
  {
    _id: "destination-rome",
    _type: "destination",
    name: "Rome",
    slug: { _type: "slug", current: "rome" },
    country: "Italy",
    tagline: "Where the apostles gave everything",
    description: "The Eternal City is the seat of Christendom and a pilgrimage destination of the highest order. Here Peter was crucified upside down and Paul was beheaded. Their tombs are venerated in the great basilicas that bear their names.",
    scripture: '"I am not ashamed of the gospel, because it is the power of God for salvation." — Romans 1:16',
    highlights: ["St. Peter's Basilica", "Vatican Museums & Sistine Chapel", "Colosseum & Catacombs", "St. Paul Outside the Walls", "Assisi day trip"],
    bestTime: "April–June, Sept–Oct",
    featured: true,
  },
];

const TESTIMONIALS = [
  {
    _id: "testimonial-1",
    _type: "testimonial",
    name: "Rev. Dr. Samuel Kariuki",
    role: "Senior Pastor",
    church: "PCEA Westlands Church, Nairobi",
    location: "Nairobi, Kenya",
    quote: "Nazareth Travel Group transformed our church group's dream into a reality beyond anything we imagined. Standing at the Jordan River where I renewed my baptismal vows — with 40 of my congregation around me — was the most moving moment of my entire ministry. Every detail was arranged with such care and love. We are already planning our return.",
    featured: true,
  },
  {
    _id: "testimonial-2",
    _type: "testimonial",
    name: "Sr. Magdalene Achieng",
    role: "Religious Sister",
    church: "Sisters of the Immaculate Heart, Kisumu",
    location: "Kisumu, Kenya",
    quote: "As a Catholic sister who has always longed to walk where Our Lady walked, this pilgrimage exceeded every prayer. The guides were deeply knowledgeable about scripture and history, the accommodations were excellent, and the spiritual programme was beautifully crafted. Nazareth Travel Group treats pilgrims with genuine hospitality. I recommend them unreservedly.",
    featured: true,
  },
  {
    _id: "testimonial-3",
    _type: "testimonial",
    name: "Bishop Peter Njoroge",
    role: "Diocesan Bishop",
    church: "ACK Diocese of Mt. Kenya South",
    location: "Kirinyaga, Kenya",
    quote: "I came back changed. There is no other way to say it. Walking the Via Dolorosa, weeping at the Holy Sepulchre, praying at sunrise on the Mount of Beatitudes — none of it felt rushed or tourist-like. Nazareth Travel Group gave us time to be still. That gift is priceless. Our entire church family is going next year.",
    featured: true,
  },
];

const FAQS = [
  { _id: "faq-1", _type: "faq", order: 1, category: "visas", question: "Do Kenyan passport holders need a visa to visit Israel?", answer: "No! Kenya has a visa-free arrangement with Israel. Kenyan passport holders receive a free 90-day entry stamp on arrival at Ben Gurion Airport. You need a valid passport (minimum 6 months from travel date), a return ticket, and proof of accommodation. We handle all documentation guidance. For Jordan, we include the Jordan Pass (which covers the visa fee and Petra entrance) in our Holy Land & Jordan package." },
  { _id: "faq-2", _type: "faq", order: 2, category: "booking", question: "How much does a Holy Land pilgrimage cost?", answer: "We do not publish fixed prices as costs vary based on departure dates, group size, accommodation preferences, and seasonal airline fares. Our packages are structured to be accessible to African pilgrims and we regularly negotiate group rates. WhatsApp us directly and we'll provide a personalised quote within 24 hours. We also offer payment plans for church groups." },
  { _id: "faq-3", _type: "faq", order: 3, category: "booking", question: "What is the best time of year to visit the Holy Land?", answer: "Spring (March–May) and Autumn (September–November) are ideal — pleasant temperatures (18–25°C), smaller crowds, and lush landscapes from winter rains. Christmas and Easter season pilgrimages are deeply moving but require early booking (12–18 months ahead). Summer (June–August) is very hot and crowded. We run multiple departures throughout the year." },
  { _id: "faq-4", _type: "faq", order: 4, category: "booking", question: "Can I join as an individual or must I be part of a group?", answer: "Both options are available. We run scheduled group departures where individuals are welcome to join (you'll travel alongside other Christian pilgrims from Kenya and the wider region). We also offer private bespoke pilgrimages for families, couples, and small groups. Solo pilgrims are warmly welcomed on group departures — most form lasting friendships on the journey." },
  { _id: "faq-5", _type: "faq", order: 5, category: "ontrip", question: "What should I pack for the Holy Land?", answer: "Modest, comfortable clothing is essential — shoulders and knees must be covered at religious sites. Comfortable walking shoes are critical (cobblestones everywhere!). A hat and sunscreen are must-haves. For overnight Sinai ascents, bring warm layers — it gets very cold at the summit. We send all registered pilgrims a detailed packing list." },
  { _id: "faq-6", _type: "faq", order: 6, category: "ontrip", question: "Are there arrangements for Catholic Mass or Protestant worship?", answer: "Absolutely. We are an inter-denominational company serving all Christian traditions. For Catholic groups, we facilitate daily Mass at appropriate churches. For Protestant groups, we arrange daily devotions, worship, and Bible readings at relevant sites. Your spiritual director is always welcome to lead your group's worship." },
  { _id: "faq-7", _type: "faq", order: 7, category: "groups", question: "How do I book a group pilgrimage for my church?", answer: "The easiest first step is to WhatsApp us or complete the inquiry form — let us know your church, estimated group size, preferred dates, and destination. We'll schedule a free consultation call with your pastor or group leader, provide a detailed proposal and quote, and then guide you through the entire process." },
  { _id: "faq-8", _type: "faq", order: 8, category: "ontrip", question: "Is it safe to travel to Israel and the Palestinian territories?", answer: "The safety of our pilgrims is our paramount concern. We monitor the security situation continuously and work with local partners on the ground. The major pilgrimage sites have hosted millions of Christian visitors safely for decades. We always provide updated travel advisories before departure and maintain a 24/7 emergency contact." },
  { _id: "faq-9", _type: "faq", order: 9, category: "payments", question: "What payment plans are available?", answer: "We offer flexible payment structures — typically a deposit to confirm your booking (usually 25–30%), followed by instalments agreed with your group, with full payment due 6–8 weeks before departure. We accept M-Pesa, bank transfer (KES and USD accounts), and major credit/debit cards." },
  { _id: "faq-10", _type: "faq", order: 10, category: "groups", question: "Are there discounts for large groups?", answer: "Yes. Group leader discounts, complimentary places for group organisers, and tiered pricing for larger groups (20+, 35+, 50+ pilgrims) are all available. Church groups that return for a second pilgrimage also receive a loyalty discount." },
];

const SETTINGS = {
  _id: "settings",
  _type: "settings",
  siteName: "Nazareth Travel Group",
  whatsappNumber: "254700000000",
  phone: "+254 700 000 000",
  email: "info@nazarethtravelgroup.com",
  address: "Nairobi, Kenya",
  defaultSeoTitle: "Nazareth Travel Group — Holy Land Pilgrimages from Africa",
  defaultSeoDescription: "Africa's most trusted Christian pilgrimage company. Walk where Jesus walked — Holy Land, Rome, Egypt & more. Serving Kenyan churches since 2013.",
  announcement: {
    enabled: true,
    text: "🕊️ Easter 2026 Holy Land departures now open — limited seats.",
    linkText: "Reserve your place →",
    linkUrl: "/programs",
  },
};

// ─── Seed ─────────────────────────────────────────────────────────────────────
async function seed() {
  console.log("\n🌿 Seeding Nazareth Travel Group CMS...\n");

  const types = ["package", "destination", "testimonial", "faq", "settings"];
  for (const type of types) {
    await wipe(type);
  }

  const tx = client.transaction();
  [...PACKAGES, ...DESTINATIONS, ...TESTIMONIALS, ...FAQS, SETTINGS].forEach(
    (doc) => tx.createOrReplace(doc)
  );
  await tx.commit();

  console.log(`✅ Seeded:`);
  console.log(`   ${PACKAGES.length} packages`);
  console.log(`   ${DESTINATIONS.length} destinations`);
  console.log(`   ${TESTIMONIALS.length} testimonials`);
  console.log(`   ${FAQS.length} FAQs`);
  console.log(`   1 global settings document`);
  console.log(`\n✨ Done! Open your Studio to see the content.\n`);
}

seed().catch((err) => {
  console.error("❌ Seed failed:", err.message);
  process.exit(1);
});
