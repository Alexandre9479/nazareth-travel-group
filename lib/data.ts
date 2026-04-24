export type Package = {
  id: string;
  slug: string;
  title: string;
  duration: string;
  durationDays: number;
  region: string;
  badge?: string;
  badgeVariant?: "popular" | "new" | "extended" | "luxury";
  tagline: string;
  description: string;
  highlights: string[];
  destinations: string[];
  inclusions: string[];
  exclusions: string[];
  image: string;
  gallery: string[];
  groupSize: string;
  difficulty: string;
  featured: boolean;
  itinerary: { day: number; title: string; description: string }[];
};

export type Destination = {
  id: string;
  slug: string;
  name: string;
  country: string;
  tagline: string;
  description: string;
  scripture?: string;
  image: string;
  heroImage: string;
  highlights: string[];
  bestTime: string;
  featured: boolean;
};

export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  role: string;
  church: string;
  location: string;
  avatar: string;
  featured: boolean;
};

export type FAQ = {
  id: string;
  question: string;
  answer: string;
  category: "booking" | "visas" | "ontrip" | "groups" | "payments";
};

export const PACKAGES: Package[] = [
  {
    id: "1",
    slug: "classic-holy-land",
    title: "Classic Holy Land Pilgrimage",
    duration: "8 Days",
    durationDays: 8,
    region: "Israel",
    badge: "Most Popular",
    badgeVariant: "popular",
    tagline: "Walk where Jesus walked",
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
    destinations: ["Jerusalem", "Bethlehem", "Nazareth", "Galilee", "Jericho"],
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
    image:
      "https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?w=800&q=80",
      "https://images.unsplash.com/photo-1601058272524-14e7948e4fba?w=800&q=80",
      "https://images.unsplash.com/photo-1594007693440-b42a9cce1e52?w=800&q=80",
    ],
    groupSize: "15–40 pilgrims",
    difficulty: "Easy",
    featured: true,
    itinerary: [
      {
        day: 1,
        title: "Departure from Nairobi",
        description:
          "Gather at JKIA for your overnight flight to Tel Aviv. Briefing, group prayer, and departure in faith.",
      },
      {
        day: 2,
        title: "Arrival in Tel Aviv · Jerusalem",
        description:
          "Land at Ben Gurion International Airport. Transfer to Jerusalem (1 hr). Check in and evening walk to the Old City walls.",
      },
      {
        day: 3,
        title: "Jerusalem Old City",
        description:
          "Walk the Via Dolorosa, visit the Church of the Holy Sepulchre, the Western Wall, and the Jewish Quarter.",
      },
      {
        day: 4,
        title: "Mount of Olives · Bethlehem",
        description:
          "Morning panorama from the Mount of Olives. Descent to Gethsemane. Afternoon in Bethlehem — Church of the Nativity and Shepherd's Field.",
      },
      {
        day: 5,
        title: "Nazareth · Sea of Galilee",
        description:
          "Drive north through the hills of Judea to Nazareth. Visit the Basilica of the Annunciation. Evening arrival at the Sea of Galilee.",
      },
      {
        day: 6,
        title: "Galilee · Jordan River",
        description:
          "Sunrise over the Sea of Galilee. Boat ride on the lake. Visit Capernaum and the Mount of Beatitudes. Jordan River baptism renewal.",
      },
      {
        day: 7,
        title: "Jericho · Dead Sea",
        description:
          "Visit ancient Jericho, the oldest city in the world. Optional float on the Dead Sea. Return to Jerusalem for farewell dinner.",
      },
      {
        day: 8,
        title: "Departure",
        description:
          "Morning free for final prayers at the Western Wall or Holy Sepulchre. Transfer to Tel Aviv airport. Fly home transformed.",
      },
    ],
  },
  {
    id: "2",
    slug: "holy-land-jordan",
    title: "Holy Land & Jordan Extended",
    duration: "11 Days",
    durationDays: 11,
    region: "Israel + Jordan",
    badge: "Extended",
    badgeVariant: "extended",
    tagline: "Israel, Petra & the rose-red city",
    description:
      "Our most comprehensive Middle East pilgrimage, combining the sacred sites of Israel with the breathtaking ancient wonders of Jordan. Cross the Jordan River into the Hashemite Kingdom to visit Petra, the Dead Sea from the Jordanian shore, the memorial of Moses on Mount Nebo, and the baptism site of Jesus at Bethany-Beyond-the-Jordan.",
    highlights: [
      "All Classic Holy Land sites",
      "Petra — the Rose-Red City",
      "Mount Nebo (Moses' memorial)",
      "Baptism Site at Bethany-Beyond-Jordan",
      "Dead Sea float (both sides)",
      "Madaba Mosaic Map",
      "Wadi Rum (optional)",
    ],
    destinations: ["Jerusalem", "Bethlehem", "Galilee", "Petra", "Jericho"],
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
      "Jordan visa ($56 usually included in package — confirm at booking)",
    ],
    image:
      "https://images.unsplash.com/photo-1578895101408-1a36b834405b?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1578895101408-1a36b834405b?w=800&q=80",
      "https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?w=800&q=80",
    ],
    groupSize: "15–35 pilgrims",
    difficulty: "Moderate",
    featured: true,
    itinerary: [
      {
        day: 1,
        title: "Departure Nairobi",
        description: "Overnight flight to Amman or Tel Aviv.",
      },
      {
        day: 2,
        title: "Arrival · Amman",
        description: "Check in Amman. Evening city orientation.",
      },
      {
        day: 3,
        title: "Madaba · Mount Nebo · Dead Sea",
        description: "Visit the mosaic map, Moses memorial, Dead Sea.",
      },
      {
        day: 4,
        title: "Baptism Site · Petra journey",
        description: "Visit Bethany-Beyond-Jordan, drive south to Petra.",
      },
      {
        day: 5,
        title: "Full day Petra",
        description: "The Siq, Treasury, Monastery, High Place of Sacrifice.",
      },
      {
        day: 6,
        title: "Cross into Israel · Jerusalem",
        description: "Border crossing at Allenby/Sheikh Hussein Bridge.",
      },
      {
        day: 7,
        title: "Jerusalem Old City",
        description: "Via Dolorosa, Holy Sepulchre, Western Wall.",
      },
      {
        day: 8,
        title: "Mount of Olives · Bethlehem",
        description: "Gethsemane, Church of the Nativity, Shepherd's Field.",
      },
      {
        day: 9,
        title: "Galilee",
        description: "Nazareth, Sea of Galilee, Jordan River renewal.",
      },
      {
        day: 10,
        title: "Jericho · Jerusalem",
        description: "Jericho, final Jerusalem evening.",
      },
      {
        day: 11,
        title: "Departure",
        description: "Fly home via Tel Aviv.",
      },
    ],
  },
  {
    id: "3",
    slug: "rome-italy",
    title: "Rome & Italy Pilgrimage",
    duration: "10 Days",
    durationDays: 10,
    region: "Italy",
    badge: "New",
    badgeVariant: "new",
    tagline: "Where Peter and Paul gave their lives",
    description:
      "Walk the cobblestones of the Eternal City on a profound pilgrimage to the heart of Christendom. Visit the four major basilicas, descend into the catacombs, stand in St. Peter's Square, and journey to Assisi — the city of St. Francis. An optional extension to Florence and the hill towns of Tuscany is available.",
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
    destinations: ["Rome", "Assisi"],
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
    image:
      "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&q=80",
      "https://images.unsplash.com/photo-1531572753322-ad063cecc140?w=800&q=80",
    ],
    groupSize: "12–30 pilgrims",
    difficulty: "Easy–Moderate",
    featured: true,
    itinerary: [
      { day: 1, title: "Departure Nairobi", description: "Overnight flight." },
      {
        day: 2,
        title: "Arrival Rome",
        description: "Check in near Vatican. Evening stroll.",
      },
      {
        day: 3,
        title: "Vatican Day",
        description: "Vatican Museums, Sistine Chapel, St. Peter's.",
      },
      {
        day: 4,
        title: "Ancient Rome",
        description: "Colosseum, Forum, Palatine, Catacombs.",
      },
      {
        day: 5,
        title: "Major Basilicas",
        description: "St. John Lateran, Santa Maria Maggiore, St. Paul's.",
      },
      {
        day: 6,
        title: "Assisi Day Trip",
        description: "Basilica of St. Francis, tomb, Portiuncula.",
      },
      {
        day: 7,
        title: "Papal Audience / Free Day",
        description:
          "Wednesday audience if available; optional Florence trip.",
      },
      {
        day: 8,
        title: "Rome at leisure",
        description: "Trastevere, Campo de' Fiori, shopping.",
      },
      {
        day: 9,
        title: "Final liturgies",
        description: "Private Mass, souvenir shopping, farewell dinner.",
      },
      { day: 10, title: "Departure", description: "Fly home via hub." },
    ],
  },
  {
    id: "4",
    slug: "egypt-biblical",
    title: "Egypt Biblical Journey",
    duration: "9 Days",
    durationDays: 9,
    region: "Egypt",
    tagline: "From the Nile to the summit of Sinai",
    description:
      "Follow Moses and the people of God through the ancient land of the Pharaohs. Climb Mount Sinai at dawn to receive the Ten Commandments in your heart, visit the ancient monastery of St. Catherine's, discover Coptic Cairo's hidden churches, and stand before the pyramids that young Jesus may have seen as a refugee child.",
    highlights: [
      "Summit of Mount Sinai at sunrise",
      "St. Catherine's Monastery",
      "Coptic Cairo — Hanging Church, Ben Ezra Synagogue",
      "The Pyramids of Giza",
      "Egyptian Museum",
      "The Nile",
      "Abu Simbel (optional)",
    ],
    destinations: ["Sinai", "Cairo"],
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
    exclusions: [
      "Personal spending",
      "Abu Simbel extension",
      "Camel rides",
      "Single supplement",
      "Tips",
    ],
    image:
      "https://images.unsplash.com/photo-1539768942893-daf53e448371?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1539768942893-daf53e448371?w=800&q=80",
    ],
    groupSize: "10–28 pilgrims",
    difficulty: "Moderate (Sinai ascent is strenuous)",
    featured: false,
    itinerary: [
      { day: 1, title: "Nairobi departure", description: "" },
      {
        day: 2,
        title: "Cairo arrival",
        description: "Hotel, city orientation.",
      },
      {
        day: 3,
        title: "Coptic Cairo",
        description: "Hanging Church, Ben Ezra, Holy Family sites.",
      },
      { day: 4, title: "Pyramids & Museum", description: "Giza, museum." },
      {
        day: 5,
        title: "Drive to Sinai",
        description: "Through the desert to St. Catherine's.",
      },
      {
        day: 6,
        title: "Sinai sunrise",
        description: "Midnight ascent, sunrise at summit, monastery.",
      },
      {
        day: 7,
        title: "Return Cairo",
        description: "Scenic Sinai peninsula drive.",
      },
      { day: 8, title: "Nile cruise / leisure", description: "Free day." },
      { day: 9, title: "Departure", description: "Fly home." },
    ],
  },
  {
    id: "5",
    slug: "footsteps-of-paul",
    title: "Footsteps of Paul",
    duration: "12 Days",
    durationDays: 12,
    region: "Greece + Turkey",
    tagline: "Through the churches of the New Testament",
    description:
      "An intellectually and spiritually thrilling journey retracing St. Paul's missionary journeys through Greece and western Turkey. Visit ancient Corinth, stand on the Areopagus in Athens where Paul preached, walk the ruins of Ephesus, and see the Seven Churches of Revelation. For the theologically curious pilgrim.",
    highlights: [
      "Athens Acropolis & Areopagus",
      "Ancient Corinth",
      "Ephesus (Efes) ruins",
      "Sardis, Pergamon, Smyrna",
      "House of the Virgin Mary",
      "Philippi",
      "Thessaloniki",
    ],
    destinations: ["Athens", "Corinth", "Ephesus"],
    inclusions: [
      "Return airfare NBO–ATH",
      "Internal Athens–Istanbul ferry or flight",
      "11 nights 4-star accommodation",
      "Breakfast and dinner daily",
      "Christian scholar guide",
      "All site entrance fees",
      "Inter-city transfers",
    ],
    exclusions: [
      "Lunches",
      "Personal expenses",
      "Single supplement",
      "Optional Greek Island day trip",
    ],
    image:
      "https://images.unsplash.com/photo-1555993539-1732b0258235?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1555993539-1732b0258235?w=800&q=80",
    ],
    groupSize: "10–25 pilgrims",
    difficulty: "Easy–Moderate",
    featured: false,
    itinerary: [
      { day: 1, title: "Nairobi departure", description: "" },
      { day: 2, title: "Athens arrival", description: "Hotel, Plaka walk." },
      {
        day: 3,
        title: "Acropolis & Areopagus",
        description: "Parthenon, Mars Hill (Acts 17).",
      },
      {
        day: 4,
        title: "Corinth",
        description: "Ancient Corinth, Bema seat, Cenchreae.",
      },
      {
        day: 5,
        title: "Philippi · Kavala",
        description: "Lydia's baptistery, prison.",
      },
      { day: 6, title: "Thessaloniki", description: "City of Acts 17." },
      {
        day: 7,
        title: "Ferry/flight to Turkey",
        description: "Izmir arrival.",
      },
      {
        day: 8,
        title: "Ephesus",
        description: "Full day at Ephesus, Library of Celsus, theatre.",
      },
      {
        day: 9,
        title: "House of Virgin Mary · Sardis",
        description: "Meryemana, Sardis ruins.",
      },
      {
        day: 10,
        title: "Pergamon · Smyrna",
        description: "Acropolis of Pergamon, Izmir waterfront.",
      },
      { day: 11, title: "Istanbul", description: "Hagia Sofia, Bosphorus." },
      { day: 12, title: "Departure", description: "Fly home via hub." },
    ],
  },
  {
    id: "6",
    slug: "bespoke-holy-land",
    title: "Bespoke Holy Land Holiday",
    duration: "Custom",
    durationDays: 0,
    region: "Israel",
    badge: "Private & Luxury",
    badgeVariant: "luxury",
    tagline: "Entirely yours — crafted to your vision",
    description:
      "For pastors, church leaders, or families who desire a private, deeply personal pilgrimage designed around your spiritual goals, preferred dates, and budget. We craft a bespoke itinerary, assign a dedicated guide, and handle every detail — from boutique hotel preferences to private prayer arrangements at sensitive holy sites.",
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
    destinations: ["Jerusalem", "Bethlehem", "Galilee", "Nazareth", "Jericho"],
    inclusions: ["Everything agreed in your bespoke proposal"],
    exclusions: ["Items not in your agreed proposal"],
    image:
      "https://images.unsplash.com/photo-1504093376055-b3094b660b3e?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1504093376055-b3094b660b3e?w=800&q=80",
    ],
    groupSize: "2–15 persons",
    difficulty: "Customisable",
    featured: true,
    itinerary: [],
  },
];

export const DESTINATIONS: Destination[] = [
  {
    id: "1",
    slug: "jerusalem",
    name: "Jerusalem",
    country: "Israel",
    tagline: "The eternal city — holy to three faiths",
    description:
      "Jerusalem is the spiritual epicentre of the Christian faith. Within her ancient walls lie the Via Dolorosa where Jesus carried His cross, the Church of the Holy Sepulchre built over the crucifixion and resurrection sites, the Garden of Gethsemane where He prayed before His arrest, and the Upper Room where the Last Supper took place. To walk Jerusalem is to walk the Gospels.",
    scripture: '"If I forget you, O Jerusalem, let my right hand forget its skill." — Psalm 137:5',
    image:
      "https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?w=800&q=80",
    heroImage:
      "https://images.unsplash.com/photo-1601058272524-14e7948e4fba?w=1600&q=80",
    highlights: [
      "Church of the Holy Sepulchre",
      "Via Dolorosa",
      "Western Wall",
      "Mount of Olives",
      "Garden of Gethsemane",
      "Upper Room (Cenacle)",
      "Yad Vashem",
    ],
    bestTime: "March–May, Sept–Nov",
    featured: true,
  },
  {
    id: "2",
    slug: "bethlehem",
    name: "Bethlehem",
    country: "Palestine",
    tagline: "Where the Word became flesh",
    description:
      "The humble birthplace of Jesus Christ sits just 8 km south of Jerusalem in the Palestinian West Bank. The Church of the Nativity — one of the oldest continuously operating churches in the world — marks the very spot where Mary laid the infant Jesus in a manger. Shepherd's Field nearby still blooms with wildflowers at Christmas.",
    scripture: '"But you, Bethlehem Ephrathah... from you One will go forth for Me to be ruler in Israel." — Micah 5:2',
    image:
      "https://images.unsplash.com/photo-1594007693440-b42a9cce1e52?w=800&q=80",
    heroImage:
      "https://images.unsplash.com/photo-1594007693440-b42a9cce1e52?w=1600&q=80",
    highlights: [
      "Church of the Nativity",
      "Manger Square",
      "Shepherd's Field",
      "Milk Grotto Chapel",
    ],
    bestTime: "Year-round (Christmas season is magical)",
    featured: true,
  },
  {
    id: "3",
    slug: "nazareth",
    name: "Nazareth",
    country: "Israel",
    tagline: "Where Jesus grew up",
    description:
      "The town where Jesus spent most of His earthly life, growing up in the carpenter's household of Joseph and Mary. The Basilica of the Annunciation — the largest church in the Middle East — commemorates the angel Gabriel's visit to Mary. Ancient Nazareth Village recreates 1st-century life with remarkable authenticity.",
    scripture: '"Can anything good come out of Nazareth?" Philip said, "Come and see." — John 1:46',
    image:
      "https://images.unsplash.com/photo-1597696929736-6d13bed8e6a8?w=800&q=80",
    heroImage:
      "https://images.unsplash.com/photo-1597696929736-6d13bed8e6a8?w=1600&q=80",
    highlights: [
      "Basilica of the Annunciation",
      "Ancient Nazareth Village",
      "St. Joseph's Church",
      "Mary's Well",
    ],
    bestTime: "March–May, Sept–Nov",
    featured: false,
  },
  {
    id: "4",
    slug: "galilee",
    name: "Sea of Galilee",
    country: "Israel",
    tagline: "Where Jesus taught, healed, and walked on water",
    description:
      "The freshwater lake in northern Israel was the backdrop for much of Jesus' ministry. It was here He called fishermen to follow Him, calmed the storm, fed the 5,000, and appeared to His disciples after the resurrection. A boat ride on its still waters, with the Golan Heights mirrored in the surface, is a profoundly moving experience.",
    scripture: '"Come, follow me," Jesus said, "and I will send you out to fish for people." — Matthew 4:19',
    image:
      "https://images.unsplash.com/photo-1504093376055-b3094b660b3e?w=800&q=80",
    heroImage:
      "https://images.unsplash.com/photo-1504093376055-b3094b660b3e?w=1600&q=80",
    highlights: [
      "Capernaum ruins",
      "Mount of Beatitudes",
      "Tabgha (loaves & fishes)",
      "Jordan River baptism",
      "Boat ride on the Sea",
    ],
    bestTime: "Year-round",
    featured: true,
  },
  {
    id: "5",
    slug: "jericho",
    name: "Jericho",
    country: "Palestine",
    tagline: "The world's oldest city",
    description:
      "Jericho is one of the oldest continuously inhabited cities on earth, with a history stretching back 10,000 years. In the Gospels, Jericho is where Zacchaeus climbed a sycamore tree to see Jesus, where Bartimaeus received his sight, and where the road to Jerusalem began. The nearby Monastery of the Temptation clings dramatically to the cliff face.",
    scripture: '"Jesus entered Jericho and was passing through." — Luke 19:1',
    image:
      "https://images.unsplash.com/photo-1562564055-71e051d33c19?w=800&q=80",
    heroImage:
      "https://images.unsplash.com/photo-1562564055-71e051d33c19?w=1600&q=80",
    highlights: [
      "Tell es-Sultan (ancient ruins)",
      "Monastery of Temptation",
      "Zacchaeus' Sycamore Tree",
      "Dead Sea proximity",
    ],
    bestTime: "Oct–April (avoid summer heat)",
    featured: false,
  },
  {
    id: "6",
    slug: "petra",
    name: "Petra",
    country: "Jordan",
    tagline: "The rose-red city half as old as time",
    description:
      "The ancient Nabataean capital carved from rose-red sandstone cliffs is one of the world's greatest archaeological treasures and a UNESCO World Heritage Site. Though not a biblical site in the strict sense, Petra sits in the region associated with Edom in the Old Testament and is an awe-inspiring testament to ancient civilisation. The Treasury at the end of the Siq leaves every pilgrim speechless.",
    scripture: '"The LORD will roar from Zion and thunder from Jerusalem; the earth and the heavens will tremble." — Joel 3:16',
    image:
      "https://images.unsplash.com/photo-1578895101408-1a36b834405b?w=800&q=80",
    heroImage:
      "https://images.unsplash.com/photo-1578895101408-1a36b834405b?w=1600&q=80",
    highlights: [
      "The Siq canyon walk",
      "Al-Khazneh (The Treasury)",
      "The Monastery",
      "High Place of Sacrifice",
      "Petra by Night",
    ],
    bestTime: "March–May, Sept–Nov",
    featured: true,
  },
  {
    id: "7",
    slug: "rome",
    name: "Rome",
    country: "Italy",
    tagline: "Where the apostles gave everything",
    description:
      "The Eternal City is the seat of Christendom and a pilgrimage destination of the highest order. Here Peter was crucified upside down and Paul was beheaded. Their tombs are venerated in the great basilicas that bear their names. The Vatican is the spiritual home of the world's 1.3 billion Catholics, and the Colosseum echoes with the witness of early Christian martyrs.",
    scripture: '"I am not ashamed of the gospel, because it is the power of God for salvation." — Romans 1:16',
    image:
      "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&q=80",
    heroImage:
      "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=1600&q=80",
    highlights: [
      "St. Peter's Basilica",
      "Vatican Museums & Sistine Chapel",
      "Colosseum & Catacombs",
      "St. Paul Outside the Walls",
      "Assisi day trip",
    ],
    bestTime: "April–June, Sept–Oct",
    featured: true,
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    quote:
      "Nazareth Travel Group transformed our church group's dream into a reality beyond anything we imagined. Standing at the Jordan River where I renewed my baptismal vows — with 40 of my congregation around me — was the most moving moment of my entire ministry. Every detail was arranged with such care and love. We are already planning our return.",
    name: "Rev. Dr. Samuel Kariuki",
    role: "Senior Pastor",
    church: "PCEA Westlands Church, Nairobi",
    location: "Nairobi, Kenya",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    featured: true,
  },
  {
    id: "2",
    quote:
      "As a Catholic sister who has always longed to walk where Our Lady walked, this pilgrimage exceeded every prayer. The guides were deeply knowledgeable about scripture and history, the accommodations were excellent, and the spiritual programme was beautifully crafted. Nazareth Travel Group treats pilgrims with genuine hospitality. I recommend them unreservedly.",
    name: "Sr. Magdalene Achieng",
    role: "Religious Sister",
    church: "Sisters of the Immaculate Heart, Kisumu",
    location: "Kisumu, Kenya",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
    featured: true,
  },
  {
    id: "3",
    quote:
      "I came back changed. There is no other way to say it. Walking the Via Dolorosa, weeping at the Holy Sepulchre, praying at sunrise on the Mount of Beatitudes — none of it felt rushed or tourist-like. Nazareth Travel Group gave us time to be still. That gift is priceless. Our entire church family is going next year.",
    name: "Bishop Peter Njoroge",
    role: "Diocesan Bishop",
    church: "ACK Diocese of Mt. Kenya South",
    location: "Kirinyaga, Kenya",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80",
    featured: true,
  },
];

export const FAQS: FAQ[] = [
  {
    id: "1",
    question: "Do Kenyan passport holders need a visa to visit Israel?",
    answer:
      "No! Kenya has a visa-free arrangement with Israel. Kenyan passport holders receive a free 90-day entry stamp on arrival at Ben Gurion Airport. You need a valid passport (minimum 6 months from travel date), a return ticket, and proof of accommodation. We handle all documentation guidance. For Jordan, we include the Jordan Pass (which covers the visa fee and Petra entrance) in our Holy Land & Jordan package.",
    category: "visas",
  },
  {
    id: "2",
    question: "How much does a Holy Land pilgrimage cost?",
    answer:
      "We do not publish fixed prices as costs vary based on departure dates, group size, accommodation preferences, and seasonal airline fares. Our packages are structured to be accessible to African pilgrims and we regularly negotiate group rates. WhatsApp us directly and we'll provide a personalised quote within 24 hours. We also offer payment plans for church groups.",
    category: "booking",
  },
  {
    id: "3",
    question: "What is the best time of year to visit the Holy Land?",
    answer:
      "Spring (March–May) and Autumn (September–November) are ideal — pleasant temperatures (18–25°C), smaller crowds, and lush landscapes from winter rains. Christmas and Easter season pilgrimages are deeply moving but require early booking (12–18 months ahead). Summer (June–August) is very hot and crowded. We run multiple departures throughout the year.",
    category: "booking",
  },
  {
    id: "4",
    question: "Can I join as an individual or must I be part of a group?",
    answer:
      "Both options are available. We run scheduled group departures where individuals are welcome to join (you'll travel alongside other Christian pilgrims from Kenya and the wider region). We also offer private bespoke pilgrimages for families, couples, and small groups. Solo pilgrims are warmly welcomed on group departures — most form lasting friendships on the journey.",
    category: "booking",
  },
  {
    id: "5",
    question: "What should I pack for the Holy Land?",
    answer:
      "Modest, comfortable clothing is essential — shoulders and knees must be covered at religious sites (both Christian and Jewish). Bring a light shawl or wrap that you can add/remove. Comfortable walking shoes are critical (cobblestones everywhere!). A hat and sunscreen are must-haves. For overnight Sinai ascents, bring warm layers — it gets very cold at the summit. We send all registered pilgrims a detailed packing list.",
    category: "ontrip",
  },
  {
    id: "6",
    question: "Are there arrangements for Catholic Mass or Protestant worship?",
    answer:
      "Absolutely. We are an inter-denominational company serving all Christian traditions. For Catholic groups, we facilitate daily Mass at appropriate churches (including the Cenacle, Grotto at Bethlehem, and the Church of All Nations in Gethsemane). For Protestant groups, we arrange daily devotions, worship, and Bible readings at relevant sites. Your spiritual director is always welcome to lead your group's worship.",
    category: "ontrip",
  },
  {
    id: "7",
    question: "How do I book a group pilgrimage for my church?",
    answer:
      "The easiest first step is to WhatsApp us or complete the inquiry form — let us know your church, estimated group size, preferred dates, and destination. We'll schedule a free consultation call with your pastor or group leader, provide a detailed proposal and quote, and then guide you through the entire process including promotional materials your church can use to recruit pilgrims.",
    category: "groups",
  },
  {
    id: "8",
    question: "Is it safe to travel to Israel and the Palestinian territories?",
    answer:
      "The safety of our pilgrims is our paramount concern. We monitor the security situation continuously and work with local partners on the ground. The major pilgrimage sites in Israel (Jerusalem, Galilee, Bethlehem) have hosted millions of Christian visitors safely for decades. We always provide updated travel advisories before departure, purchase comprehensive travel insurance, and maintain a 24/7 emergency contact. We will never operate a tour in an unsafe environment.",
    category: "ontrip",
  },
  {
    id: "9",
    question: "What payment plans are available?",
    answer:
      "We offer flexible payment structures — typically a deposit to confirm your booking (usually 25–30%), followed by instalments agreed with your group, with full payment due 6–8 weeks before departure. For church groups organising a fundraiser, we can advise on how to structure the process. We accept M-Pesa, bank transfer (KES and USD accounts), and major credit/debit cards.",
    category: "payments",
  },
  {
    id: "10",
    question: "Are there discounts for large groups?",
    answer:
      "Yes. Group leader discounts, complimentary places for group organisers, and tiered pricing for larger groups (20+, 35+, 50+ pilgrims) are all available. Church groups that return for a second pilgrimage also receive a loyalty discount. The more you bring, the better value for everyone — encourage your entire congregation!",
    category: "groups",
  },
];

export const SCRIPTURES = [
  {
    verse: "For God so loved the world that He gave His only Son, that whoever believes in Him shall not perish but have eternal life.",
    reference: "John 3:16",
  },
  {
    verse: "This is the day the Lord has made; let us rejoice and be glad in it.",
    reference: "Psalm 118:24",
  },
  {
    verse: "Trust in the Lord with all your heart and lean not on your own understanding.",
    reference: "Proverbs 3:5",
  },
  {
    verse: "I lift up my eyes to the hills — where does my help come from? My help comes from the Lord.",
    reference: "Psalm 121:1–2",
  },
  {
    verse: "Jerusalem — built as a city that is closely compacted together. That is where the tribes go up.",
    reference: "Psalm 122:3–4",
  },
];

export const DEPARTURES = [
  { month: "February 2026", tour: "Classic Holy Land", seatsLeft: 8, type: "Group" },
  { month: "April 2026", tour: "Classic Holy Land (Easter)", seatsLeft: 3, type: "Easter Special" },
  { month: "June 2026", tour: "Holy Land & Jordan", seatsLeft: 12, type: "Group" },
  { month: "August 2026", tour: "Rome & Italy", seatsLeft: 15, type: "Group" },
  { month: "October 2026", tour: "Classic Holy Land", seatsLeft: 20, type: "Group" },
  { month: "December 2026", tour: "Classic Holy Land (Christmas)", seatsLeft: 6, type: "Christmas Special" },
];

export const TRUST_BADGES = [
  { name: "IATA Member", logo: "" },
  { name: "Kenya Tourism Board", logo: "" },
  { name: "ATTA Member", logo: "" },
  { name: "KATA Member", logo: "" },
];

export const SOCIAL_PROOF = [
  "Rev. Peter just inquired about the Classic Holy Land tour",
  "Sister Margaret requested info on the Rome Pilgrimage",
  "Bishop Ochieng booked for a group of 45",
  "Mrs. Wanjiku is planning her second pilgrimage",
  "Pastor David requested the Easter 2026 package",
  "Sr. Agnes from Mombasa joined the October group",
];
