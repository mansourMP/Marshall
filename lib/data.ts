import type {
  Product,
  ClientIndustry,
  RevenueChannel,
  TeamMember,
  Stat,
} from "./types";

// ─── Trust Bar Stats ────────────────────────────────────────
export const TRUST_STATS: Stat[] = [
  { value: "15", label: "Organizations Served", suffix: "+" },
  { value: "1,200", label: "Tons Annual Capacity", suffix: "+" },
  { value: "2022", label: "Established" },
  { value: "Surkhandarya", label: "Uzbekistan" },
];

// ─── Products ───────────────────────────────────────────────
export const PRODUCTS: Product[] = [
  {
    id: "premium-engine-oil",
    name: "Premium Engine Oil",
    tagline: "High-performance protection for modern engines",
    description:
      "Formulated with advanced additives for superior wear protection, thermal stability, and engine cleanliness. Designed for passenger vehicles, SUVs, and light commercial vehicles operating in Central Asian climate extremes — from summer heat to winter cold starts.",
    capacity: "20 tons/month",
    specs: [
      { label: "Viscosity Grades", value: "5W-30, 10W-40, 15W-40" },
      { label: "API Standards", value: "API SN, SM, SL" },
      { label: "Base Oil", value: "High-quality mineral with synthetic additives" },
      { label: "Packaging", value: "1L, 4L, 5L, 20L, 200L" },
      { label: "Suitable For", value: "Petrol & light diesel engines" },
    ],
    applications: [
      "Passenger vehicles",
      "SUVs and crossovers",
      "Light commercial vehicles",
      "Fleet vehicles requiring extended drain intervals",
    ],
    highlight: true,
  },
  {
    id: "standard-engine-oil",
    name: "Standard Engine Oil",
    tagline: "Reliable protection at an economical price",
    description:
      "A dependable mineral-based engine oil providing solid wear protection and deposit control for everyday driving conditions. Ideal for older vehicles, high-mileage engines, and budget-conscious fleet operators.",
    capacity: "50 tons/month",
    specs: [
      { label: "Viscosity Grades", value: "10W-40, 15W-40, 20W-50" },
      { label: "API Standards", value: "API SL, SJ" },
      { label: "Base Oil", value: "Mineral" },
      { label: "Packaging", value: "1L, 4L, 5L, 20L, 200L" },
      { label: "Suitable For", value: "Older petrol engines, light diesel" },
    ],
    applications: [
      "Older vehicle models",
      "High-mileage engines",
      "Fleet vehicles",
      "Agricultural equipment",
    ],
  },
  {
    id: "antifreeze",
    name: "Antifreeze / Coolant",
    tagline: "All-season engine cooling and corrosion protection",
    description:
      "Ethylene glycol-based coolant with advanced corrosion inhibitor package. Protects engines from freezing in winter (-37°C) and boiling in summer (+129°C). Compatible with aluminum, cast iron, copper, and brass cooling systems.",
    capacity: "30 tons/month",
    specs: [
      { label: "Type", value: "Ethylene glycol concentrate & ready-mix" },
      { label: "Freeze Protection", value: "-37°C (concentrate)" },
      { label: "Boil Protection", value: "+129°C" },
      { label: "Color", value: "Green, Red, Blue (per specification)" },
      { label: "Packaging", value: "1L, 5L, 20L, 200L" },
    ],
    applications: [
      "Passenger vehicles",
      "Trucks and heavy equipment",
      "Industrial engines",
      "HVAC systems",
    ],
    highlight: true,
  },
  {
    id: "brake-fluid",
    name: "Brake Fluid",
    tagline: "High boiling point, reliable stopping power",
    description:
      "Polyglycol-based brake fluid meeting DOT 4 specifications. High dry and wet boiling points ensure consistent brake performance under heavy use and in humid conditions.",
    capacity: "Available on demand",
    specs: [
      { label: "Standard", value: "DOT 4" },
      { label: "Dry Boiling Point", value: ">260°C" },
      { label: "Wet Boiling Point", value: ">165°C" },
      { label: "Packaging", value: "0.5L, 1L, 5L" },
    ],
    applications: [
      "Passenger vehicles",
      "Motorcycles",
      "Light commercial vehicles",
    ],
  },
  {
    id: "grease",
    name: "Multipurpose Grease",
    tagline: "Heavy-duty lubrication for bearings and chassis",
    description:
      "Lithium-based grease with excellent mechanical stability, water resistance, and corrosion protection. Suitable for automotive, agricultural, and industrial applications.",
    capacity: "Available on demand",
    specs: [
      { label: "Type", value: "Lithium complex" },
      { label: "NLGI Grade", value: "2" },
      { label: "Drop Point", value: ">190°C" },
      { label: "Packaging", value: "400g cartridge, 1kg, 5kg, 18kg" },
    ],
    applications: [
      "Wheel bearings",
      "Chassis lubrication",
      "Industrial machinery",
      "Agricultural equipment",
    ],
  },
];

// ─── Client Industries ──────────────────────────────────────
export const CLIENT_INDUSTRIES: ClientIndustry[] = [
  {
    id: "auto-parts-retail",
    name: "Auto Parts Retailers",
    description:
      "Independent auto parts shops and retail chains stocking Marshal products for direct consumer sales. These partners represent our strongest distribution channel with consistent repeat orders.",
    clientCount: 4,
    icon: "Store",
  },
  {
    id: "fleet-operators",
    name: "Fleet Operators",
    description:
      "Transportation and logistics companies maintaining vehicle fleets. They rely on Marshal for bulk oil and antifreeze supply with scheduled delivery and competitive bulk pricing.",
    clientCount: 5,
    icon: "Truck",
  },
  {
    id: "driving-school",
    name: "Driving School",
    description:
      "Our own driving school creates a captive customer pipeline — every new driver trained becomes a future oil and antifreeze buyer. This unique vertical integration provides both revenue and market education.",
    clientCount: 1,
    icon: "GraduationCap",
  },
  {
    id: "industrial-manufacturing",
    name: "Industrial & Manufacturing",
    description:
      "Factories and workshops using lubricants and greases for machinery maintenance. These clients value consistent quality, technical support, and reliable local supply.",
    clientCount: 5,
    icon: "Factory",
  },
];

// ─── Revenue Channels ───────────────────────────────────────
export const REVENUE_CHANNELS: RevenueChannel[] = [
  {
    id: "b2b-orgs",
    name: "B2B Organizations",
    description:
      "15+ recurring enterprise contracts — auto parts retailers, fleet operators, and industrial clients. Predictable, scheduled bulk orders.",
    percentage: 65,
  },
  {
    id: "retail-shop",
    name: "Retail Shop",
    description:
      "Our own retail outlet selling directly to consumers. Walk-in traffic, brand visibility, and market feedback in real time.",
    percentage: 20,
  },
  {
    id: "driving-school-pipeline",
    name: "Driving School Pipeline",
    description:
      "Captive customer acquisition — every student becomes a long-term oil and antifreeze consumer. Unique competitive advantage.",
    percentage: 15,
  },
];

// ─── Flywheel Steps ─────────────────────────────────────────
export const FLYWHEEL_STEPS = [
  {
    step: 1,
    title: "Driving School",
    description:
      "Students learn to drive using vehicles maintained with Marshal products. Brand exposure from day one of their driving life.",
  },
  {
    step: 2,
    title: "Trust Built",
    description:
      "Graduates trust the products they trained with. Marshal becomes their default choice for oil, antifreeze, and fluids.",
  },
  {
    step: 3,
    title: "Lifetime Customers",
    description:
      "Drivers return to Marshal retail partners for every oil change, coolant top-up, and brake fluid replacement — for the life of their vehicle.",
  },
  {
    step: 4,
    title: "Word of Mouth",
    description:
      "Satisfied customers recommend Marshal to family, friends, and colleagues. Organic growth compounds year after year.",
  },
];

// ─── Team ────────────────────────────────────────────────────
export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "chemical-expert",
    name: "Salomov Abduhamid",
    role: "Chief Chemical Engineer",
    bio: "Lead chemical engineering expert at Uzkimyosanoat. Leads a dedicated technical team to ensure the absolute purity of all Marshal formulations. Orchestrates international research collaborations, including experiments with Iranian chemical experts, to maintain world-class quality standards.",
    credentials: [
      "Senior Expert at Uzkimyosanoat",
      "Leads dedicated technical team",
      "Iran-Uzbekistan Chemical Research Collaboration",
      "Specialist in pure chemical formulations",
    ],
  },
  {
    id: "ceo",
    name: "Aliev Otabek",
    role: "CEO & Strategic Lead",
    bio: "Industry veteran with over 30 years of experience in the international automotive parts and lubricants market. Frequently travels to China and other global manufacturing hubs to personally verify quality standards and select the finest materials, driving Marshal's global strategy and enterprise growth.",
    credentials: [
      "30+ years in Auto Parts Industry",
      "Global quality assurance traveler",
      "Strategic Market Development Expert",
      "Co-Founder of Marshal Group",
    ],
  },
  {
    id: "founder",
    name: "Mansur",
    role: "Founder & Managing Director",
    bio: "Built Marshal from the ground up starting in 2022. Oversees business development, client relationships, and strategic operations. Deep understanding of the Central Asian lubricant market and its growth trajectory.",
    credentials: [
      "Founded Marshal in 2022",
      "Built 15+ B2B client relationships",
      "Direct retail and channel experience",
      "Market development in Surkhandarya region",
    ],
  },
];

// ─── Production Stats ───────────────────────────────────────
export const PRODUCTION_STATS: Stat[] = [
  { value: "70", label: "Tons Oil Per Month", suffix: "+" },
  { value: "30", label: "Tons Antifreeze Per Month", suffix: "" },
  { value: "300", label: "Facility (m²)", suffix: "" },
  { value: "30,000", label: "Equipment Investment", suffix: " USD" },
];

// ─── Why Clients Stay (reasons) ─────────────────────────────
export const CLIENT_RETENTION_REASONS = [
  {
    title: "Local Production, Faster Delivery",
    body: "Manufacturing in Surkhandarya means no import delays. Clients receive products within days, not weeks — critical for businesses that can't afford downtime.",
  },
  {
    title: "Central Asian Climate Expertise",
    body: "Products formulated specifically for regional temperature extremes — from -30°C winters to +45°C summers. Generic imports don't address these conditions.",
  },
  {
    title: "Competitive Pricing",
    body: "Domestic manufacturing eliminates import duties, international shipping, and intermediary markups. Clients get premium quality at local prices.",
  },
  {
    title: "Customization & OEM",
    body: "We formulate, blend, and package to client specifications. Whether it's viscosity tuning, private-label branding, or custom packaging — we deliver.",
  },
];

// ─── Trade Portal Features ──────────────────────────────────
export const TRADE_FEATURES = [
  {
    title: "Exclusive Trade Pricing",
    body: "Registered trade partners receive volume-based pricing tiers. The more you order, the better your margin.",
  },
  {
    title: "Order History & Quick Reorder",
    body: "View complete order history and reorder previous purchases with one click. No paperwork, no delays.",
  },
  {
    title: "Scheduled Deliveries",
    body: "Set recurring delivery schedules for regular supply. We manage the logistics so you never run out of stock.",
  },
  {
    title: "Dedicated Account Support",
    body: "Every trade partner gets a direct line to our team. Technical questions, custom orders, urgent requests — answered fast.",
  },
  {
    title: "Technical Data Library",
    body: "Full access to product specifications, safety data sheets, and application guides for every Marshal product.",
  },
  {
    title: "First Access to New Products",
    body: "Trade partners get early access to new formulations and products — including our upcoming air filter line.",
  },
];

// ─── Home Page Content ──────────────────────────────────────
export const HOME_CONTENT = {
  hero: {
    headline: "MARSHAL GROUP — YOUR RELIABLE PARTNER IN GLOBAL TRADE AND MANUFACTURING",
    subheadline:
      "Expertise in high-quality industrial materials, chemical products, and premium lubricants. 70+ tons/month capacity. Manufacturing in Surkhandarya since 2022.",
    primaryCta: "Partner With Us",
    secondaryCta: "Investment Inquiry",
  },
  whatWeDo: {
    eyebrow: "What We Do",
    title: "Manufacturing Engine Oils, Antifreeze, Brake Fluid & Grease",
    cards: [
      {
        title: "Premium Engine Oils",
        body: "High-quality and standard motor oils formulated for Central Asian conditions. 70+ tons monthly production capacity for passenger, commercial, and industrial applications.",
      },
      {
        title: "Antifreeze & Fluids",
        body: "Ethylene glycol coolants, DOT 4 brake fluid, and specialty fluids. 30 tons of antifreeze production per month — ready-mix and concentrate.",
      },
      {
        title: "OEM & White Label",
        body: "Custom formulations, private-label packaging, and contract manufacturing. Your brand, our quality — with flexible minimum order quantities.",
      },
    ],
  },
  byTheNumbers: {
    eyebrow: "By The Numbers",
    title: "Production Capacity Built for Scale",
  },
  whoTrustsUs: {
    eyebrow: "Who Trusts Us",
    title: "15+ Organizations Across Multiple Industries",
    body: "From auto parts retailers to fleet operators and industrial manufacturers — Marshal lubricants power businesses across Uzbekistan.",
  },
};

// ─── Products Page Content ──────────────────────────────────
export const PRODUCTS_CONTENT = {
  hero: {
    headline: "Engineered for Central Asian Conditions",
    subheadline:
      "Every Marshal product is formulated to perform in extreme temperature ranges — from winter cold starts to summer highway heat.",
  },
  oem: {
    eyebrow: "OEM & Private Label",
    title: "Your Brand, Our Formulation Expertise",
    body: "We offer complete white-label manufacturing services. Choose from our existing formulations or work with our chemical engineering team to develop custom blends for your specific market.",
    capabilities: [
      "Custom viscosity grades and additive packages",
      "Private-label packaging design and production",
      "Flexible minimum order quantities",
      "Full technical documentation and SDS provided",
      "Quality certificates with every batch",
    ],
  },
  comingSoon: {
    title: "Coming Soon: Air Filters",
    body: "Marshal is expanding into automotive air filter manufacturing. Engine air filters, cabin filters, and oil filters — same quality, same reliability. Production line under development.",
  },
};

// ─── Production Page Content ────────────────────────────────
export const PRODUCTION_CONTENT = {
  hero: {
    headline: "Manufactured in Surkhandarya, Built for Scale",
    subheadline:
      "300 m² production facility with dedicated oil blending, antifreeze production, quality control lab, and packaging lines.",
  },
  facility: {
    eyebrow: "Facility Overview",
    title: "300 m² of Purpose-Built Production Space",
    body: "Our facility in Sariasia, Surkhandarya region combines efficient layout with quality-focused processes. The oil production line represents a $30,000 equipment investment with significant capacity headroom for growth.",
    details: [
      { label: "Total Facility", value: "300 m²" },
      { label: "Oil Production Area", value: "Dedicated blending & packaging" },
      { label: "Antifreeze Production", value: "15 m² dedicated line" },
      { label: "Equipment Investment", value: "$30,000+" },
      { label: "Capacity Utilization", value: "Scalable — significant headroom" },
    ],
  },
  process: {
    eyebrow: "The Process",
    title: "From Raw Materials to Finished Product",
    steps: [
      {
        step: "01",
        title: "Raw Material Sourcing",
        body: "Base oils and additives sourced from qualified suppliers. Every batch of raw material is tested before entering production.",
      },
      {
        step: "02",
        title: "Precision Blending",
        body: "Computer-measured blending ensures exact viscosity and additive concentration. Our chemical engineering team oversees every production run.",
      },
      {
        step: "03",
        title: "Quality Control Testing",
        body: "Samples from every batch undergo laboratory testing — viscosity index, flash point, pour point, TBN, and contaminant screening.",
      },
      {
        step: "04",
        title: "Packaging & Distribution",
        body: "Filling, labeling, and packaging in 1L to 200L formats. Products are palletized and ready for delivery across Uzbekistan and beyond.",
      },
    ],
  },
  location: {
    eyebrow: "Strategic Location",
    title: "Surkhandarya — The Crossroads of Central Asia",
    body: "Located in Uzbekistan's southernmost region, bordering Afghanistan, Tajikistan, and Turkmenistan. Lower operational costs, access to growing cross-border markets, and proximity to raw material supply routes.",
    advantages: [
      "Lower labor and facility costs vs. Tashkent or Samarkand",
      "Proximity to border markets — export ready",
      "Growing regional industrial base — expanding local demand",
      "Government support for regional manufacturing development",
    ],
  },
};

// ─── Clients Page Content ───────────────────────────────────
export const CLIENTS_CONTENT = {
  hero: {
    headline: "15+ Organizations Rely on Marshal",
    subheadline:
      "Multi-year relationships with auto parts retailers, fleet operators, industrial manufacturers, and more. Recurring revenue, proven retention.",
  },
  channels: {
    eyebrow: "Revenue Channels",
    title: "Diversified and Resilient Income Streams",
  },
  whyTheyStay: {
    eyebrow: "Why They Stay",
    title: "Four Reasons Clients Choose Marshal Year After Year",
  },
  testimonials: {
    eyebrow: "Client Feedback",
    title: "What Our Partners Say",
    items: [
      {
        quote:
          "Marshal oil consistently meets our quality requirements. Local production means we never wait on imports — delivery is within days.",
        attribution: "Auto Parts Retail Partner",
        industry: "Retail",
      },
      {
        quote:
          "We switched from imported oils to Marshal two years ago. Better pricing, same quality, and the technical support is outstanding.",
        attribution: "Fleet Operations Manager",
        industry: "Transportation",
      },
      {
        quote:
          "Custom formulations for our specific equipment needs. Marshal's chemical engineering team worked directly with our maintenance department.",
        attribution: "Industrial Manufacturing Client",
        industry: "Manufacturing",
      },
    ],
  },
};

// ─── About Page Content ─────────────────────────────────────
export const ABOUT_CONTENT = {
  hero: {
    headline: "Built in Uzbekistan, Built to Last",
    subheadline:
      "From a vision in 2022 to 15+ enterprise clients today — Marshal is Central Asia's emerging lubricant manufacturer.",
  },
  story: {
    eyebrow: "Our Story",
    title: "Founded on Expertise, Growing on Trust",
    paragraphs: [
      "Marshal was founded in 2022 in Sariasia, Surkhandarya, with a clear vision: produce high-quality lubricants and automotive fluids that match international standards — at prices that make sense for Central Asian businesses and consumers.",
      "What began as a focused operation has grown to serve over 15 organizations across multiple industries. Our oils, antifreeze, brake fluid, and grease are trusted by auto parts retailers, fleet operators, and industrial manufacturers throughout the region.",
      "Behind every product is our Chief Chemical Engineer — a senior government chemical official with decades of formulation expertise and international research collaborations, including joint experiments with Iranian chemical experts.",
    ],
  },
  market: {
    eyebrow: "Market Opportunity",
    title: "Uzbekistan Lubricant Market — 11%+ Annual Growth",
    body: "The Uzbekistan lubricants market is projected to grow at over 11% annually through 2031, driven by expanding automotive ownership, industrial development, and government initiatives promoting domestic manufacturing. Marshal is positioned at the center of this growth wave.",
  },
  timeline: [
    { year: "2022", event: "Marshal founded in Sariasia, Surkhandarya. Initial oil production line established." },
    { year: "2023", event: "Expanded to antifreeze production. Signed first 5 B2B enterprise clients." },
    { year: "2024", event: "Added brake fluid and grease to product line. Client base grew to 10+ organizations." },
    { year: "2025", event: "Reached 15+ recurring B2B clients. OEM/white-label service launched. Iran chemical research collaboration established." },
    { year: "2026+", event: "Scaling production capacity. Air filter manufacturing line in development. Export market exploration." },
  ],
};

// ─── Trade Page Content ─────────────────────────────────────
export const TRADE_CONTENT = {
  hero: {
    headline: "Streamlined Supply for Trade Partners",
    subheadline:
      "Bulk pricing, scheduled deliveries, dedicated support, and full technical documentation — everything your business needs from a lubricant partner.",
  },
  portal: {
    eyebrow: "Trade Portal",
    title: "Online Ordering, Coming Soon",
    body: "We're building a dedicated B2B portal where trade partners can view pricing, place orders, track deliveries, and access technical documentation — all in one place. Register your interest below for early access.",
    features: TRADE_FEATURES,
  },
};

// ─── Contact Page Content ───────────────────────────────────
export const CONTACT_CONTENT = {
  hero: {
    headline: "Let's Talk",
    subheadline:
      "Whether you're a business looking for lubricant supply or an investor exploring acquisition — we're ready to have the conversation.",
  },
  partner: {
    title: "Become a Partner",
    description:
      "Interested in stocking Marshal products or becoming a trade client? Tell us about your business and what you need.",
    fields: ["Company Name", "Industry", "Product Interest", "Estimated Volume"],
  },
  investment: {
    title: "Investment Inquiry",
    description:
      "Qualified buyers and investors: request our Confidential Information Memorandum. All inquiries are treated with strict confidentiality under NDA.",
    fields: ["Your Name", "Organization", "Investment Range", "Timeline"],
    note: "Serious inquiries only. Full financials and operational details shared under NDA after qualification.",
  },
};
