import type { Lang } from "./types";

// ────────────────────────────────────────────────────────────
// Master translation object — all site content in 3 languages
// ────────────────────────────────────────────────────────────

type Translations = Record<Lang, Record<string, any>>;

export const t: Translations = {
  // ═══════════════════════════════════════════════════════════
  // ENGLISH
  // ═══════════════════════════════════════════════════════════
  en: {
    // ── Site ─────────────────────────────────────────────
    site: {
      title: "Marshal — Premium Lubricants, Central Asian Production",
      description:
        "Marshal manufactures high-quality engine oils, antifreeze, brake fluid, and grease in Surkhandarya, Uzbekistan. 70+ tons/month capacity. 15+ enterprise clients. Since 2022.",
    },
    brand: {
      name: "Marshal",
      tagline: "Premium Lubricants, Central Asian Production",
      location: "Surkhandarya, Sariasia, Uzbekistan",
      founded: 2022,
      email: "mansurao886@gmail.com",
      phone: "+998 90 519 0007",
    },
    nav: {
      products: "Products",
      production: "Production",
      clients: "Clients",
      about: "About",
      trade: "Trade",
      contact: "Contact",
      partnerWithUs: "Partner With Us",
      whatWeDo: "What we do",
      partners: "Partners",
      company: "Company",
    },

    // ── Home ─────────────────────────────────────────────
    home: {
      hero: {
        headline: "MARSHAL GROUP — YOUR RELIABLE PARTNER IN GLOBAL TRADE AND MANUFACTURING",
        subheadline:
          "Expertise in high-quality industrial materials, chemical products, and premium lubricants. 70+ tons/month capacity. Manufacturing in Surkhandarya since 2022.",
        primaryCta: "Partner With Us",
        secondaryCta: "Investment Inquiry",
      },
      trustStats: [
        { value: "15", label: "Organizations Served", suffix: "+" },
        { value: "1,200", label: "Tons Annual Capacity", suffix: "+" },
        { value: "2022", label: "Established" },
        { value: "Surkhandarya", label: "Uzbekistan" },
      ],
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
        body: "From auto parts retailers to fleet operators and industrial manufacturers — Marshall lubricants power businesses across Uzbekistan.",
      },
      stats: [
        { value: "70", label: "Tons Oil Per Month", suffix: "+" },
        { value: "30", label: "Tons Antifreeze Per Month", suffix: "" },
        { value: "10", label: "Land — Sotix", suffix: " соток" },
        { value: "250,000", label: "Equipment Investment", suffix: " USD" },
      ],
      ctaTitle: "Ready to Partner With Marshall?",
      ctaBody: "Explore our full product range and see how we can supply your business.",
      ctaLabel: "View Products",
    },

    // ── Products ─────────────────────────────────────────
    products: {
      hero: {
        headline: "Engineered for Central Asian Conditions",
        subheadline:
          "Every Marshall product is formulated to perform in extreme temperature ranges — from winter cold starts to summer highway heat.",
      },
      sectionEyebrow: "Products",
      sectionTitle: "Complete Lubricant & Fluid Range",
      items: [
        {
          id: "premium-engine-oil",
          name: "Premium Engine Oil",
          tagline: "High-performance protection for modern engines",
          description:
            "Formulated with advanced additives for superior wear protection, thermal stability, and engine cleanliness. Designed for passenger vehicles, SUVs, and light commercial vehicles operating in Central Asian climate extremes.",
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
      ],
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
        body: "Marshall is expanding into automotive air filter manufacturing. Engine air filters, cabin filters, and oil filters — same quality, same reliability. Production line under development.",
      },
      ctaTitle: "Need Custom Formulations?",
      ctaBody: "Contact us to discuss OEM, private label, or custom-blend requirements.",
      ctaLabel: "Request Specifications",
      featuredProduct: "Featured Product",
      specifications: "Specifications",
      applications: "Applications",
    },

    // ── Production ───────────────────────────────────────
    production: {
      hero: {
        headline: "Manufactured in Surkhandarya, Built for Scale",
        subheadline:
          "10 соток production facility with dedicated oil blending, antifreeze production, quality control lab, and packaging lines.",
      },
      facility: {
        eyebrow: "Facility Overview",
        title: "10 соток of Purpose-Built Production Space",
        body: "Our facility in Sariasia, Surkhandarya region combines efficient layout with quality-focused processes. The oil production line represents a $250,000 equipment investment with significant capacity headroom for growth.",
        details: [
          { label: "Total Facility", value: "10 соток" },
          { label: "Oil Production Area", value: "Dedicated blending & packaging" },
          { label: "Antifreeze Production", value: "15 m² dedicated line" },
          { label: "Equipment Investment", value: "$250,000+" },
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
      teamEyebrow: "The Team",
      teamTitle: "Technical Leadership & Industry Expertise",
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
      ctaTitle: "See Our Full Capability",
      ctaBody: "Download product specifications and data sheets.",
      ctaLabel: "View Products",
    },

    // ── Clients ──────────────────────────────────────────
    clients: {
      hero: {
        headline: "15+ Organizations Rely on Marshall",
        subheadline:
          "Multi-year relationships with auto parts retailers, fleet operators, industrial manufacturers, and more. Recurring revenue, proven retention.",
      },
      industriesEyebrow: "Industries Served",
      industriesTitle: "Diverse Client Base Across Multiple Sectors",
      industries: [
        {
          id: "auto-parts-retail",
          name: "Auto Parts Retailers",
          description:
            "Independent auto parts shops and retail chains stocking Marshall products for direct consumer sales. These partners represent our strongest distribution channel with consistent repeat orders.",
          clientCount: 4,
          icon: "Store",
        },
        {
          id: "fleet-operators",
          name: "Fleet Operators",
          description:
            "Transportation and logistics companies maintaining vehicle fleets. They rely on Marshall for bulk oil and antifreeze supply with scheduled delivery and competitive bulk pricing.",
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
      ],
      channels: {
        eyebrow: "Revenue Channels",
        title: "Diversified and Resilient Income Streams",
        items: [
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
        ],
      },
      flywheelEyebrow: "The Marshall Flywheel",
      flywheelTitle: "How the Driving School Creates Lifetime Customers",
      flywheelSteps: [
        {
          step: 1,
          title: "Driving School",
          description: "Students learn to drive using vehicles maintained with Marshall products. Brand exposure from day one of their driving life.",
        },
        {
          step: 2,
          title: "Trust Built",
          description: "Graduates trust the products they trained with. Marshall becomes their default choice for oil, antifreeze, and fluids.",
        },
        {
          step: 3,
          title: "Lifetime Customers",
          description: "Drivers return to Marshall retail partners for every oil change, coolant top-up, and brake fluid replacement — for the life of their vehicle.",
        },
        {
          step: 4,
          title: "Word of Mouth",
          description: "Satisfied customers recommend Marshall to family, friends, and colleagues. Organic growth compounds year after year.",
        },
      ],
      whyTheyStay: {
        eyebrow: "Why They Stay",
        title: "Four Reasons Clients Choose Marshall Year After Year",
        reasons: [
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
        ],
      },
      testimonials: {
        eyebrow: "Client Feedback",
        title: "What Our Partners Say",
        items: [
          {
            quote: "Marshall oil consistently meets our quality requirements. Local production means we never wait on imports — delivery is within days.",
            attribution: "Auto Parts Retail Partner",
            industry: "Retail",
          },
          {
            quote: "We switched from imported oils to Marshall two years ago. Better pricing, same quality, and the technical support is outstanding.",
            attribution: "Fleet Operations Manager",
            industry: "Transportation",
          },
          {
            quote: "Custom formulations for our specific equipment needs. Marshall's chemical engineering team worked directly with our maintenance department.",
            attribution: "Industrial Manufacturing Client",
            industry: "Manufacturing",
          },
        ],
      },
      ctaTitle: "Join 15+ Organizations Already Partnering With Marshall",
      ctaBody: "Reliable supply, competitive pricing, local production. Let's discuss how we can serve your business.",
      ctaLabel: "Become a Partner",
      clientsLabel: "clients",
    },

    // ── About ────────────────────────────────────────────
    about: {
      hero: {
        headline: "Built in Uzbekistan, Built to Last",
        subheadline:
          "From a vision in 2022 to 15+ enterprise clients today — Marshall is Central Asia's emerging lubricant manufacturer.",
      },
      story: {
        eyebrow: "Our Story",
        title: "Founded on Expertise, Growing on Trust",
        paragraphs: [
          "Marshall was founded in 2022 in Sariasia, Surkhandarya, with a clear vision: produce high-quality lubricants and automotive fluids that match international standards — at prices that make sense for Central Asian businesses and consumers.",
          "What began as a focused operation has grown to serve over 15 organizations across multiple industries. Our oils, antifreeze, brake fluid, and grease are trusted by auto parts retailers, fleet operators, and industrial manufacturers throughout the region.",
          "Behind every product is our Chief Chemical Engineer — a senior government chemical official with decades of formulation expertise and international research collaborations, including joint experiments with Iranian chemical experts.",
        ],
      },
      milestonesEyebrow: "Milestones",
      milestonesTitle: "The Marshall Journey",
      timeline: [
        { year: "2022", event: "Marshall founded in Sariasia, Surkhandarya. Initial oil production line established." },
        { year: "2023", event: "Expanded to antifreeze production. Signed first 5 B2B enterprise clients." },
        { year: "2024", event: "Added brake fluid and grease to product line. Client base grew to 10+ organizations." },
        { year: "2025", event: "Reached 15+ recurring B2B clients. OEM/white-label service launched. Iran chemical research collaboration established." },
        { year: "2026+", event: "Scaling production capacity. Air filter manufacturing line in development. Export market exploration." },
      ],
      leadershipEyebrow: "Leadership",
      leadershipTitle: "The People Behind Marshall",
      market: {
        eyebrow: "Market Opportunity",
        title: "Uzbekistan Lubricant Market — 11%+ Annual Growth",
        body: "The Uzbekistan lubricants market is projected to grow at over 11% annually through 2031, driven by expanding automotive ownership, industrial development, and government initiatives promoting domestic manufacturing. Marshall is positioned at the center of this growth wave.",
      },
      ctaTitle: "Interested in Marshall's Story?",
      ctaBody: "Learn more about our production capabilities and client portfolio.",
      ctaLabel: "Explore Production",
    },

    // ── Team ─────────────────────────────────────────────
    team: [
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
    ],

    // ── Trade ────────────────────────────────────────────
    trade: {
      hero: {
        headline: "Streamlined Supply for Trade Partners",
        subheadline:
          "Bulk pricing, scheduled deliveries, dedicated support, and full technical documentation — everything your business needs from a lubricant partner.",
      },
      ctaButton: "Request Trade Access",
      portal: {
        eyebrow: "Trade Portal",
        title: "Online Ordering, Coming Soon",
        body: "We're building a dedicated B2B portal where trade partners can view pricing, place orders, track deliveries, and access technical documentation — all in one place. Register your interest below for early access.",
        features: [
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
            body: "Full access to product specifications, safety data sheets, and application guides for every Marshall product.",
          },
          {
            title: "First Access to New Products",
            body: "Trade partners get early access to new formulations and products — including our upcoming air filter line.",
          },
        ],
      },
      howItWorksEyebrow: "How It Works",
      howItWorksTitle: "Three Steps to Trade Partnership",
      steps: [
        {
          step: "01",
          title: "Register Your Business",
          body: "Complete the trade inquiry form with your company details, industry, and estimated volume requirements. We review and respond within 24 hours.",
        },
        {
          step: "02",
          title: "Agree Terms & Pricing",
          body: "We work with you to establish volume-based pricing tiers, delivery schedules, and payment terms. Custom formulations and packaging available.",
        },
        {
          step: "03",
          title: "Start Ordering",
          body: "Place orders via phone, email, or our upcoming online portal. Receive products within days — no import delays, no intermediaries.",
        },
      ],
      ctaTitle: "Ready to Become a Trade Partner?",
      ctaBody: "Fill out the inquiry form and our team will get back to you within one business day.",
      ctaLabel: "Register for Trade Access",
    },

    // ── Contact ──────────────────────────────────────────
    contact: {
      hero: {
        headline: "Contact",
        subheadline:
          "Partnership inquiries. Bulk supply. Investment opportunities. Direct line to our team.",
      },
      partner: {
        title: "Become a Partner",
        description:
          "Interested in stocking Marshall products or becoming a trade client? Tell us about your business and what you need.",
        fields: ["Company Name", "Industry", "Product Interest", "Estimated Volume"],
      },
      investment: {
        title: "Investment Inquiry",
        description:
          "Qualified buyers and investors: request our Confidential Information Memorandum. All inquiries are treated with strict confidentiality under NDA.",
        fields: ["Your Name", "Organization", "Investment Range", "Timeline"],
        note: "Serious inquiries only. Full financials and operational details shared under NDA after qualification.",
      },
      locationEyebrow: "Our Location",
      email: "Email",
      phone: "Phone",
      address: "Address",
    },

    // ── Common ───────────────────────────────────────────
    common: {
      backToHome: "Back to Home",
      pageNotFound: "Page Not Found",
      pageNotFoundBody: "The page you are looking for does not exist or has been moved.",
      submitInquiry: "Submit Inquiry",
      thankYou: "Thank You",
      thankYouBody: "We will get back to you within 24 hours.",
      credentials: "Credentials",
      clientSingular: "client",
      clientPlural: "clients",
      received: "Request Received",
      receivedBody: "We will respond within 24 hours with the next steps.",
      select: "Select...",
      fullName: "Full Name",
      professionalEmail: "Professional Email",
      investmentRange: "Investment Range (USD)",
      directInquiry: "Direct Inquiry",
      ndaProtected: "NDA Protected",
      featured: "Featured",
      details: "Details →",
      inDevelopment: "In Development",
      mfgAndSales: "Manufacturing & Sales Office",
      response24h: "Response within 24 hours",
      availableHours: "Available 9:00–18:00 UZT",
      surkhandarya: "Surkhandarya region, Uzbekistan",
      processEyebrow: "Process",
      processTitle: "What Happens After You Submit",
      step1Title: "We Review",
      step1Body: "Your inquiry lands directly with our team.",
      step2Title: "We Respond",
      step2Body: "Within 24 hours, you'll receive a direct reply with next steps.",
      step3Title: "We Move Forward",
      step3Body: "Partnership terms, site visits, product samples, or due diligence materials.",
      partnerInvestEyebrow: "Direct Inquiry",
      partnerInvestTitle: "Partner or Invest",
      partnerInvestBody: "Two paths. One team. We respond within 24 hours.",
    },
  },

  ru: {
    site: {
      title: "Marshall — Премиальные смазочные материалы Центральной Азии",
      description: "Marshall производит моторные масла, антифриз, тормозную жидкость и смазки в Сурхандарье, Узбекистан. 70+ тонн/мес. 15+ клиентов. С 2022.",
    },
    brand: {
      name: "Marshall",
      tagline: "Премиальные смазочные материалы Центральной Азии",
      location: "Сурхандарья, Сариасия, Узбекистан",
      founded: 2022,
      email: "mansurao886@gmail.com",
      phone: "+998 90 519 0007",
    },
    nav: {
      products: "Продукция",
      production: "Производство",
      clients: "Клиенты",
      about: "О нас",
      trade: "Сотрудничество",
      contact: "Контакты",
      partnerWithUs: "Стать партнёром",
    },
    home: {
      hero: {
        headline: "MARSHALL GROUP — ВАШ НАДЁЖНЫЙ ПАРТНЁР",
        subheadline: "Промышленные материалы, химическая продукция и премиальные смазочные материалы. 70+ тонн/мес. Производство в Сурхандарье с 2022.",
        primaryCta: "Стать партнёром",
        secondaryCta: "Инвесторам",
      },
      trustStats: [
        { value: "15", label: "Организаций", suffix: "+" },
        { value: "1,200", label: "Тонн в год", suffix: "+" },
        { value: "2022", label: "Основаны" },
        { value: "Сурхандарья", label: "Узбекистан" },
      ],
      whatWeDo: {
        eyebrow: "Наша деятельность",
        title: "Производство моторных масел, антифриза, тормозной жидкости и смазок",
        cards: [
          { title: "Моторные масла", body: "Высококачественные масла для условий Центральной Азии. 70+ тонн в месяц для легкового, коммерческого и промышленного транспорта." },
          { title: "Антифриз и жидкости", body: "Охлаждающие жидкости, тормозная жидкость DOT 4. 30 тонн антифриза в месяц — концентрат и готовый раствор." },
          { title: "OEM / Собственная марка", body: "Индивидуальные рецептуры, упаковка под вашим брендом, контрактное производство. Гибкие минимальные объёмы." },
        ],
      },
      byTheNumbers: { eyebrow: "В цифрах", title: "Производственные мощности" },
      whoTrustsUs: {
        eyebrow: "Нам доверяют",
        title: "15+ организаций из разных отраслей",
        body: "От продавцов автозапчастей до транспортных компаний и промышленных предприятий — продукция Marshall работает по всему Узбекистану.",
      },
      stats: [
        { value: "70", label: "Тонн масла в месяц", suffix: "+" },
        { value: "30", label: "Тонн антифриза в месяц", suffix: "" },
        { value: "10", label: "Территория — Соток", suffix: " соток" },
        { value: "250,000", label: "ИНВЕСТИЦИИ В ОБОРУДОВАНИЕ", suffix: " USD" },
      ],
      ctaTitle: "Готовы стать партнёром?",
      ctaBody: "Посмотрите наш ассортимент и узнайте, как мы можем снабжать ваш бизнес.",
      ctaLabel: "Смотреть продукцию",
    },
    products: {
      hero: { headline: "Создано для условий Центральной Азии", subheadline: "Каждый продукт Marshall разработан для экстремальных температур — от зимних пусков до летней жары." },
      sectionEyebrow: "Продукция",
      sectionTitle: "Полный ассортимент",
      items: [
        { id: "premium-engine-oil", name: "Премиальное моторное масло", tagline: "Защита для современных двигателей", description: "Передовые присадки для защиты от износа, термостабильности и чистоты двигателя. Для легковых авто, SUV и лёгкого коммерческого транспорта.", capacity: "20 тонн/мес", specs: [{ label: "Вязкость", value: "5W-30, 10W-40, 15W-40" }, { label: "API", value: "SN, SM, SL" }, { label: "Основа", value: "Минеральная с синтетическими присадками" }, { label: "Фасовка", value: "1L, 4L, 5L, 20L, 200L" }, { label: "Для", value: "Бензин и лёгкий дизель" }], applications: ["Легковые авто", "SUV", "Лёгкий коммерческий транспорт", "Автопарки"], highlight: true },
        { id: "standard-engine-oil", name: "Стандартное моторное масло", tagline: "Надёжная защита, доступная цена", description: "Минеральное масло для повседневной эксплуатации. Идеально для старых авто, больших пробегов и экономных автопарков.", capacity: "50 тонн/мес", specs: [{ label: "Вязкость", value: "10W-40, 15W-40, 20W-50" }, { label: "API", value: "SL, SJ" }, { label: "Основа", value: "Минеральная" }, { label: "Фасовка", value: "1L, 4L, 5L, 20L, 200L" }, { label: "Для", value: "Старые бензиновые, лёгкий дизель" }], applications: ["Старые авто", "Большие пробеги", "Автопарки", "Сельхозтехника"] },
        { id: "antifreeze", name: "Антифриз", tagline: "Всесезонная защита от замерзания и коррозии", description: "Этиленгликолевый антифриз с пакетом ингибиторов коррозии. Защита от -37°C до +129°C.", capacity: "30 тонн/мес", specs: [{ label: "Тип", value: "Концентрат и готовый раствор" }, { label: "Защита от замерзания", value: "-37°C" }, { label: "Защита от закипания", value: "+129°C" }, { label: "Цвет", value: "Зелёный, красный, синий" }, { label: "Фасовка", value: "1L, 5L, 20L, 200L" }], applications: ["Легковые авто", "Грузовики", "Промышленные двигатели", "Системы HVAC"], highlight: true },
        { id: "brake-fluid", name: "Тормозная жидкость", tagline: "Высокая температура кипения, надёжное торможение", description: "Полигликолевая тормозная жидкость DOT 4. Стабильная работа при интенсивной эксплуатации.", capacity: "Под заказ", specs: [{ label: "Стандарт", value: "DOT 4" }, { label: "Т. кипения (сухая)", value: ">260°C" }, { label: "Т. кипения (влажная)", value: ">165°C" }, { label: "Фасовка", value: "0.5L, 1L, 5L" }], applications: ["Легковые авто", "Мотоциклы", "Лёгкий коммерческий транспорт"] },
        { id: "grease", name: "Универсальная смазка", tagline: "Для подшипников и шасси", description: "Литиевая смазка с отличной механической стабильностью и водостойкостью.", capacity: "Под заказ", specs: [{ label: "Тип", value: "Литиевый комплекс" }, { label: "NLGI", value: "2" }, { label: "Т. каплепадения", value: ">190°C" }, { label: "Фасовка", value: "400г, 1кг, 5кг, 18кг" }], applications: ["Подшипники", "Шасси", "Промышленное оборудование", "Сельхозтехника"] },
      ],
      oem: { eyebrow: "OEM / Собственная марка", title: "Ваш бренд — наши рецептуры", body: "Полный цикл производства под собственной маркой. Выберите готовую рецептуру или разработайте индивидуальную с нашей командой.", capabilities: ["Индивидуальная вязкость и пакеты присадок", "Дизайн и производство упаковки", "Гибкие минимальные партии", "Полная техдокументация и SDS", "Сертификаты качества с каждой партией"] },
      comingSoon: { title: "Скоро: Воздушные фильтры", body: "Marshall расширяет линейку воздушными фильтрами. Фильтры двигателя, салона и масляные фильтры — то же качество. Линия в разработке." },
      ctaTitle: "Нужна индивидуальная рецептура?",
      ctaBody: "Свяжитесь с нами для обсуждения OEM, собственной марки или индивидуальных требований.",
      ctaLabel: "Запросить спецификации",
    },
    production: {
      hero: { headline: "Произведено в Сурхандарье", subheadline: "Производственный комплекс 10 соток с линиями смешивания масел, выпуска антифриза, лабораторией ОТК и упаковочными линиями." },
      facility: { eyebrow: "Обзор производства", title: "Специализированное производственное пространство", body: "Наш комплекс в Сариасии сочетает эффективную планировку с контролем качества. Инвестиции в оборудование — $250,000 со значительным резервом мощности.", details: [{ label: "Общая площадь", value: "10 соток" }, { label: "Производство масел", value: "Линия смешивания и фасовки" }, { label: "Производство антифриза", value: "Отдельная линия" }, { label: "Инвестиции", value: "$250,000+" }, { label: "Загрузка", value: "Масштабируемая — есть резерв" }] },
      process: { eyebrow: "Процесс", title: "От сырья до готовой продукции", steps: [{ step: "01", title: "Закупка сырья", body: "Базовые масла и присадки от проверенных поставщиков. Каждая партия тестируется." }, { step: "02", title: "Точное смешивание", body: "Компьютерное дозирование. Наша команда контролирует каждый производственный цикл." }, { step: "03", title: "Контроль качества", body: "Лабораторные испытания каждой партии — вязкость, температура вспышки, застывания, TBN." }, { step: "04", title: "Фасовка и доставка", body: "Розлив от 1L до 200L. Продукция готова к отправке по Узбекистану и на экспорт." }] },
      teamEyebrow: "Команда",
      teamTitle: "Техническое руководство и экспертиза",
      location: { eyebrow: "Расположение", title: "Сурхандарья — перекрёсток Центральной Азии", body: "Южный регион Узбекистана на границе с Афганистаном, Таджикистаном и Туркменистаном. Низкие затраты, доступ к трансграничным рынкам.", advantages: ["Ниже затраты чем в Ташкенте или Самарканде", "Близость к приграничным рынкам — готовность к экспорту", "Растущая промышленная база региона", "Господдержка регионального производства"] },
      ctaTitle: "Ознакомьтесь с возможностями",
      ctaBody: "Скачайте технические паспорта и спецификации.",
      ctaLabel: "Смотреть продукцию",
    },
    team: [
      {
        id: "chemical-expert",
        name: "Саломов Абдухамид",
        role: "Главный химик-инженер",
        bio: "Ведущий эксперт по химической инженерии в «Узкимесаноат». Руководит специализированной технической командой для обеспечения абсолютной чистоты всех рецептур Marshal. Координирует международное исследовательское сотрудничество, включая эксперименты с иранскими химиками-экспертами для поддержания стандартов качества мирового уровня.",
        credentials: [
          "Старший эксперт в «Узкимесаноат»",
          "Руководит специализированной технической командой",
          "Ирано-узбекское химическое сотрудничество",
          "Специалист по чистым химическим рецептурам",
        ],
      },
      {
        id: "ceo",
        name: "Алиев Отабек",
        role: "Генеральный директор и стратегический руководитель",
        bio: "Ветеран отрасли с более чем 30-летним опытом работы на международном рынке автозапчастей и смазочных материалов. Часто посещает Китай и другие глобальные производственные центры для личной проверки стандартов качества и подбора лучших материалов, определяя глобальную стратегию и рост компании Marshal.",
        credentials: [
          "30+ лет в индустрии автозапчастей",
          "Часто путешествует для контроля качества",
          "Эксперт по стратегическому развитию рынка",
          "Сооснователь Marshal Group",
        ],
      },
      {
        id: "founder",
        name: "Мансур",
        role: "Основатель и управляющий директор",
        bio: "Построил Marshal с нуля, начиная с 2022 года. Руководит развитием бизнеса, отношениями с клиентами и стратегическим направлением. Глубокое понимание рынка смазочных материалов Центральной Азии и траектории его роста.",
        credentials: [
          "Основал Marshal в 2022 году",
          "Построил отношения с 15+ B2B-клиентами",
          "Опыт прямой розничной торговли и каналов сбыта",
          "Развитие рынка в Сурхандарьинском регионе",
        ],
      },
    ],
    clients: {
      hero: { headline: "15+ организаций доверяют Marshall", subheadline: "Многолетние отношения с продавцами автозапчастей, транспортными компаниями, промышленными предприятиями. Стабильная выручка, проверенное удержание." },
      industriesEyebrow: "Отрасли",
      industriesTitle: "Диверсифицированная клиентская база",
      industries: [
        { id: "auto-parts-retail", name: "Продавцы автозапчастей", description: "Независимые магазины и розничные сети. Самый сильный канал сбыта с постоянными повторными заказами.", clientCount: 4, icon: "Store" },
        { id: "fleet-operators", name: "Транспортные компании", description: "Логистические компании с автопарками. Оптовые поставки масла и антифриза с плановой доставкой.", clientCount: 5, icon: "Truck" },
        { id: "driving-school", name: "Автошкола", description: "Собственная автошкола создаёт постоянный приток клиентов — каждый выпускник становится покупателем.", clientCount: 1, icon: "GraduationCap" },
        { id: "industrial-manufacturing", name: "Промышленность", description: "Заводы и мастерские. Ценят стабильное качество, техподдержку и надёжные местные поставки.", clientCount: 5, icon: "Factory" },
      ],
      channels: { eyebrow: "Каналы выручки", title: "Диверсифицированные источники дохода", items: [{ id: "b2b-orgs", name: "B2B организации", description: "15+ корпоративных контрактов. Прогнозируемые оптовые заказы.", percentage: 15 }, { id: "retail-shop", name: "Розничный магазин", description: "Собственная точка продаж. Трафик, видимость бренда, обратная связь.", percentage: 20 }, { id: "driving-school-pipeline", name: "Канал автошколы", description: "Каждый студент → долгосрочный потребитель. Уникальное преимущество.", percentage: 15 }] },
      flywheelEyebrow: "Модель Marshall",
      flywheelTitle: "Как автошкола создаёт пожизненных клиентов",
      flywheelSteps: [{ step: 1, title: "Автошкола", description: "Студенты учатся на авто с продуктами Marshall. Бренд с первого дня." }, { step: 2, title: "Доверие", description: "Выпускники доверяют тому, на чём учились. Marshall — выбор по умолчанию." }, { step: 3, title: "Пожизненные клиенты", description: "Возвращаются за маслом, антифризом, тормозной жидкостью на весь срок службы авто." }, { step: 4, title: "Сарафанное радио", description: "Рекомендации семье, друзьям, коллегам. Органический рост." }],
      whyTheyStay: { eyebrow: "Почему остаются", title: "Четыре причины выбирать Marshall", reasons: [{ title: "Местное производство — быстрая доставка", body: "Без задержек импорта. Клиенты получают продукцию за дни, а не недели." }, { title: "Экспертиза климата ЦА", body: "Продукты для экстремальных температур — от -30°C до +45°C." }, { title: "Конкурентные цены", body: "Местное производство исключает пошлины, доставку, посредников." }, { title: "Индивидуальные решения / OEM", body: "Рецептуры, брендирование, упаковка — под требования клиента." }] },
      testimonials: { eyebrow: "Отзывы", title: "Что говорят партнёры", items: [{ quote: "Масло Marshall стабильно соответствует требованиям. Местное производство — доставка за дни, а не недели.", attribution: "Партнёр по автозапчастям", industry: "Розница" }, { quote: "Перешли с импортных масел на Marshall два года назад. Лучше цена, то же качество, отличная техподдержка.", attribution: "Руководитель автопарка", industry: "Транспорт" }, { quote: "Индивидуальные рецептуры под наше оборудование. Химики Marshall работали напрямую с нашим техотделом.", attribution: "Промышленный клиент", industry: "Производство" }] },
      ctaTitle: "Присоединяйтесь к 15+ организациям с Marshall",
      ctaBody: "Надёжные поставки, конкурентные цены, местное производство. Обсудим сотрудничество.",
      ctaLabel: "Стать партнёром",
      clientsLabel: "клиентов",
    },
    about: {
      hero: { headline: "Создано в Узбекистане", subheadline: "От идеи в 2022 до 15+ клиентов сегодня — Marshall развивающийся производитель смазочных материалов Центральной Азии." },
      story: { eyebrow: "Наша история", title: "Основаны на экспертизе, растём на доверии", paragraphs: ["Marshall основан в 2022 году в Сариасии, Сурхандарьинская область. Цель: высококачественные смазочные материалы по международным стандартам — по ценам, доступным для бизнеса и потребителей Центральной Азии.", "Начавшись как небольшое предприятие, мы выросли до обслуживания 15+ организаций в разных отраслях. Наши масла, антифриз и смазки используют продавцы автозапчастей, транспортные компании и промышленные предприятия по всему региону.", "За каждым продуктом стоит наш главный химик-инженер — государственный эксперт с десятилетиями опыта и международных исследований, включая совместные проекты с иранскими специалистами."] },
      milestonesEyebrow: "Вехи",
      milestonesTitle: "Путь Marshall",
      timeline: [{ year: "2022", event: "Marshall основан в Сариасии. Запущена первая линия масла." }, { year: "2023", event: "Добавлен антифриз. Первые 5 B2B-клиентов." }, { year: "2024", event: "Тормозная жидкость и смазка. Клиентская база — 10+." }, { year: "2025", event: "15+ клиентов. Запущен OEM. Сотрудничество с Ираном." }, { year: "2026+", event: "Масштабирование. Воздушные фильтры в разработке. Выход на экспорт." }],
      leadershipEyebrow: "Руководство",
      leadershipTitle: "Люди Marshall",
      market: { eyebrow: "Рынок", title: "Рынок смазочных материалов Узбекистана — рост 11%+ в год", body: "Рынок растёт более чем на 11% ежегодно до 2031 года благодаря автомобилизации, индустриализации и поддержке отечественного производства. Marshall в центре этого роста." },
      ctaTitle: "Заинтересованы?",
      ctaBody: "Узнайте больше о наших мощностях и клиентах.",
      ctaLabel: "Смотреть производство",
    },
    trade: {
      hero: { headline: "Снабжение для торговых партнёров", subheadline: "Оптовые цены, плановые поставки, персональная поддержка и полная техдокументация — всё для вашего бизнеса." },
      ctaButton: "Запросить доступ",
      portal: { eyebrow: "Торговый портал", title: "Онлайн-заказы — скоро запуск", body: "B2B-портал для просмотра цен, заказов, отслеживания поставок и доступа к документации. Зарегистрируйте интерес для раннего доступа.", features: [{ title: "Эксклюзивные цены", body: "Уровни цен по объёму. Больше заказ — лучше маржа." }, { title: "История заказов", body: "Повтор заказа в один клик. Без бумаг и задержек." }, { title: "Плановые поставки", body: "Регулярный график. Мы управляем логистикой." }, { title: "Персональная поддержка", body: "Прямая связь с командой. Техвопросы, срочные заказы — быстрый ответ." }, { title: "Техническая библиотека", body: "Спецификации, SDS, руководства по применению." }, { title: "Ранний доступ к новинкам", body: "Первыми получайте новые продукты и рецептуры." }] },
      howItWorksEyebrow: "Как это работает",
      howItWorksTitle: "Три шага к партнёрству",
      steps: [{ step: "01", title: "Зарегистрируйте бизнес", body: "Заполните форму с данными компании, отраслью и объёмами. Ответ в течение 24 часов." }, { step: "02", title: "Согласуйте условия", body: "Цены по объёму, график поставок, условия оплаты. Индивидуальные рецептуры доступны." }, { step: "03", title: "Начинайте заказы", body: "По телефону, email или через онлайн-портал. Получайте продукцию за дни — без задержек импорта." }],
      ctaTitle: "Готовы к партнёрству?",
      ctaBody: "Заполните форму, и команда свяжется с вами в течение рабочего дня.",
      ctaLabel: "Зарегистрироваться",
    },
    contact: {
      hero: { headline: "Контакты", subheadline: "Партнёрские запросы. Оптовые поставки. Инвестиционные возможности. Прямая связь с командой." },
      partner: { title: "Стать партнёром", description: "Заинтересованы в продаже продукции Marshall или в партнёрстве? Расскажите о вашем бизнесе.", fields: ["Компания", "Отрасль", "Интересующая продукция", "Предполагаемый объём"] },
      investment: { title: "Инвесторам", description: "Квалифицированные покупатели и инвесторы: запросите конфиденциальный меморандум. Рассмотрение под NDA.", fields: ["Имя", "Организация", "Инвестиционный диапазон", "Сроки"], note: "Только серьёзные запросы. Финансовая и операционная информация — под NDA после квалификации." },
      locationEyebrow: "Наше местоположение",
      email: "Email",
      phone: "Телефон",
      address: "Адрес",
    },
    common: {
      backToHome: "На главную",
      pageNotFound: "Страница не найдена",
      pageNotFoundBody: "Запрашиваемая страница не существует или была перемещена.",
      submitInquiry: "Отправить",
      thankYou: "Спасибо",
      thankYouBody: "Мы свяжемся с вами в течение 24 часов.",
      credentials: "Квалификация",
      clientSingular: "клиент",
      clientPlural: "клиентов",
      received: "Запрос получен",
      receivedBody: "Ответим в течение 24 часов.",
      select: "Выбрать...",
      fullName: "Полное имя",
      professionalEmail: "Рабочий Email",
      investmentRange: "Диапазон инвестиций (USD)",
      directInquiry: "Прямой запрос",
      ndaProtected: "Под защитой NDA",
      featured: "Рекомендуемый",
      details: "Подробнее →",
      inDevelopment: "В разработке",
      mfgAndSales: "Производство и продажи",
      response24h: "Ответ в течение 24 часов",
      availableHours: "Доступны 9:00–18:00 UZT",
      surkhandarya: "Сурхандарьинская область, Узбекистан",
      processEyebrow: "Процесс",
      processTitle: "Что после отправки",
      step1Title: "Мы изучаем",
      step1Body: "Ваш запрос поступает напрямую в нашу команду.",
      step2Title: "Мы отвечаем",
      step2Body: "В течение 24 часов вы получите прямой ответ.",
      step3Title: "Мы действуем",
      step3Body: "Условия, визиты, образцы или due diligence.",
      partnerInvestEyebrow: "Прямой запрос",
      partnerInvestTitle: "Партнёр или инвестор",
      partnerInvestBody: "Два пути. Одна команда. Ответ в течение 24 часов.",
    },
  },

  // UZBEK

uz: {
    site: {
      title: "Marshall — Markaziy Osiyoda ishlab chiqarilgan premium moylash materiallari",
      description: "Marshall kompaniyasi Surxondaryo viloyatida yuqori sifatli motor moylari, antifriz, tormoz suyuqligi va surkov materiallarini ishlab chiqaradi. Oyiga 70+ tonna quvvat. 15+ korporativ mijoz. 2022-yildan buyon bozorda.",
    },
    brand: {
      name: "Marshall",
      tagline: "Markaziy Osiyoda ishlab chiqarilgan premium moylash materiallari",
      location: "Surxondaryo viloyati, Sariosiyo tumani, O'zbekiston",
      founded: 2022,
      email: "mansurao886@gmail.com",
      phone: "+998 90 519 0007",
    },
    nav: {
      products: "Mahsulotlar",
      production: "Ishlab chiqarish",
      clients: "Mijozlar",
      about: "Biz haqimizda",
      trade: "Hamkorlik",
      contact: "Aloqa",
      partnerWithUs: "Hamkor bo'ling",
    },
    home: {
      hero: {
        headline: "MARSHALL GROUP — SIZNING ISHONCHLI HAMKORINGIZ",
        subheadline: "Sanoat materiallari, kimyoviy mahsulotlar va premium moylash materiallari bo'yicha ekspertiza. Oyiga 70+ tonna quvvat. 2022-yildan buyon Surxondaryoda ishlab chiqariladi.",
        primaryCta: "Hamkor bo'ling",
        secondaryCta: "Investorlar uchun",
      },
      trustStats: [
        { value: "15", label: "Tashkilotlarga xizmat", suffix: "+" },
        { value: "1,200", label: "Yillik quvvat (tonna)", suffix: "+" },
        { value: "2022", label: "Tashkil etilgan yil" },
        { value: "Surxondaryo", label: "O'zbekiston" },
      ],
      whatWeDo: {
        eyebrow: "Bizning faoliyat",
        title: "Motor moylari, antifriz, tormoz suyuqligi va surkov materiallari ishlab chiqarish",
        cards: [
          { title: "Premium motor moylari", body: "Markaziy Osiyo iqlim sharoitlariga moslashtirilgan yuqori sifatli motor moylari. Yengil avtomobillar, tijorat transporti va sanoat ehtiyojlari uchun oyiga 70+ tonna ishlab chiqarish quvvati." },
          { title: "Antifriz va suyuqliklar", body: "Etilen glikol asosidagi sovutish suyuqliklari, DOT 4 tormoz suyuqligi va maxsus suyuqliklar. Tayyor eritma va konsentrat ko'rinishida oyiga 30 tonna antifriz." },
          { title: "OEM va xususiy brend", body: "Buyurtma asosida retsepturalar ishlab chiqish, xususiy brend uchun qadoqlash va kontrakt asosida ishlab chiqarish. Sizning brendingiz — bizning sifatimiz. Moslashuvchan minimal buyurtma hajmi." },
        ],
      },
      byTheNumbers: { eyebrow: "Raqamlarda", title: "Kengaytirishga tayyor ishlab chiqarish quvvati" },
      whoTrustsUs: {
        eyebrow: "Bizga kimlar ishonadi",
        title: "Turli sohalardagi 15+ tashkilot",
        body: "Avtomobil ehtiyot qismlari do'konlaridan tortib transport kompaniyalari va sanoat korxonalarigacha — Marshall mahsulotlari butun O'zbekiston bo'ylab bizneslarni quvvatlab kelmoqda.",
      },
      stats: [
        { value: "70", label: "Oyiga motor moyi (tonna)", suffix: "+" },
        { value: "30", label: "Oyiga antifriz (tonna)", suffix: "" },
        { value: "10", label: "Hudud — Sotix", suffix: " sotix" },
        { value: "250,000", label: "USKUNAGA INVESTITSIYA", suffix: " USD" },
      ],
      ctaTitle: "Marshall bilan hamkorlik qilishga tayyormisiz?",
      ctaBody: "Barcha mahsulotlarimiz bilan tanishing va biz sizning biznesingizni qanday ta'minlashimiz mumkinligini bilib oling.",
      ctaLabel: "Mahsulotlarni ko'rish",
    },
    products: {
      hero: { headline: "Markaziy Osiyo sharoitlari uchun yaratilgan", subheadline: "Har bir Marshall mahsuloti ekstremal haroratlarda ishlash uchun maxsus ishlab chiqilgan — sovuq qish ertalablaridan tortib jazirama yoz kunlarigacha." },
      sectionEyebrow: "Mahsulotlar",
      sectionTitle: "To'liq moylash materiallari va suyuqliklar assortimenti",
      items: [
        { id: "premium-engine-oil", name: "Premium motor moyi", tagline: "Zamonaviy dvigatellar uchun yuqori darajadagi himoya", description: "Aşınmaya qarshi ilg'or himoya, termal barqarorlik va dvigatel tozaligini ta'minlovchi zamonaviy qo'shimchalar asosida ishlab chiqilgan. Markaziy Osiyoning keskin iqlim sharoitida ishlovchi yengil avtomobillar, SUV va yengil tijorat transporti uchun mo'ljallangan.", capacity: "20 tonna/oy", specs: [{ label: "Qovushqoqlik sinflari", value: "5W-30, 10W-40, 15W-40" }, { label: "API standartlari", value: "API SN, SM, SL" }, { label: "Asos moyi", value: "Sintetik qo'shimchali yuqori sifatli mineral" }, { label: "Qadoqlash", value: "1L, 4L, 5L, 20L, 200L" }, { label: "Mos keladi", value: "Benzin va yengil dizel dvigatellari" }], applications: ["Yengil avtomobillar", "SUV va krossoverlar", "Yengil tijorat transporti", "Uzaytirilgan almashtirish oralig'idagi avtoparklar"], highlight: true },
        { id: "standard-engine-oil", name: "Standart motor moyi", tagline: "Qulay narxda ishonchli himoya", description: "Kundalik foydalanish uchun mustahkam aşınma himoyasi va cho'kindi nazoratini ta'minlovchi ishonchli mineral asosli motor moyi. Eski avtomobillar, katta bosib o'tilgan dvigatellar va tejamkor avtopark operatorlari uchun eng yaxshi tanlov.", capacity: "50 tonna/oy", specs: [{ label: "Qovushqoqlik sinflari", value: "10W-40, 15W-40, 20W-50" }, { label: "API standartlari", value: "API SL, SJ" }, { label: "Asos moyi", value: "Mineral" }, { label: "Qadoqlash", value: "1L, 4L, 5L, 20L, 200L" }, { label: "Mos keladi", value: "Eski benzin dvigatellari, yengil dizellar" }], applications: ["Eski avtomobil modellari", "Katta bosib o'tilgan dvigatellar", "Avtoparklar", "Qishloq xo'jaligi texnikasi"] },
        { id: "antifreeze", name: "Antifriz / Sovutish suyuqligi", tagline: "Butun mavsum davomida dvigatelni sovutish va korroziyadan himoya", description: "Kuchaytirilgan korroziya ingibitorlari bilan boyitilgan etilen glikol asosidagi sovutish suyuqligi. Dvigatelni qishda muzlashdan (-37°C) va yozda qaynashdan (+129°C) himoya qiladi. Alyuminiy, cho'yan, mis va latun sovutish tizimlari bilan mos keladi.", capacity: "30 tonna/oy", specs: [{ label: "Turi", value: "Etilen glikol konsentrati va tayyor eritma" }, { label: "Muzlashdan himoya", value: "-37°C (konsentrat)" }, { label: "Qaynashdan himoya", value: "+129°C" }, { label: "Rangi", value: "Yashil, qizil, ko'k (talabga ko'ra)" }, { label: "Qadoqlash", value: "1L, 5L, 20L, 200L" }], applications: ["Yengil avtomobillar", "Yuk mashinalari va og'ir texnika", "Sanoat dvigatellari", "Isitish va sovutish tizimlari"], highlight: true },
        { id: "brake-fluid", name: "Tormoz suyuqligi", tagline: "Yuqori qaynash harorati, ishonchli to'xtash kuchi", description: "DOT 4 standartlariga javob beradigan poliglikol asosidagi tormoz suyuqligi. Yuqori quruq va nam qaynash haroratlari og'ir sharoitlarda ham barqaror tormoz tizimi ishlashini ta'minlaydi.", capacity: "Buyurtma asosida", specs: [{ label: "Standart", value: "DOT 4" }, { label: "Quruq qaynash nuqtasi", value: ">260°C" }, { label: "Nam qaynash nuqtasi", value: ">165°C" }, { label: "Qadoqlash", value: "0.5L, 1L, 5L" }], applications: ["Yengil avtomobillar", "Mototsikllar", "Yengil tijorat transporti"] },
        { id: "grease", name: "Universal surkov moyi", tagline: "Podshipniklar va shassi uchun og'ir yuklarga chidamli moylash", description: "Ajoyib mexanik barqarorlik, suvga chidamlilik va korroziyadan himoyalangan litiy asosidagi surkov moyi. Avtomobilsozlik, qishloq xo'jaligi va sanoat uchun mos keladi.", capacity: "Buyurtma asosida", specs: [{ label: "Turi", value: "Litiy kompleks" }, { label: "NLGI klassi", value: "2" }, { label: "Tomchilash harorati", value: ">190°C" }, { label: "Qadoqlash", value: "400g kartridj, 1kg, 5kg, 18kg" }], applications: ["G'ildirak podshipniklari", "Shassi moylash", "Sanoat uskunalari", "Qishloq xo'jaligi texnikasi"] },
      ],
      oem: { eyebrow: "OEM va xususiy brend", title: "Sizning brendingiz — bizning retseptura tajribamiz", body: "Xususiy brend ostida to'liq ishlab chiqarish xizmatlarini taklif qilamiz. Tayyor retsepturalarimizdan tanlang yoki kimyoviy muhandislar jamoamiz bilan birgalikda bozoringiz uchun maxsus aralashmalar ishlab chiqing.", capabilities: ["Buyurtma qovushqoqlik sinflari va qo'shimchalar paketi", "Xususiy brend uchun qadoqlash dizayni va ishlab chiqarish", "Moslashuvchan minimal buyurtma hajmi", "To'liq texnik hujjatlar va SDS taqdim etiladi", "Har bir partiya bilan sifat sertifikatlari"] },
      comingSoon: { title: "Tez orada: Havo filtrlari", body: "Marshall avtomobil havo filtrlari ishlab chiqarishni yo'lga qo'ymoqda. Dvigatel havo filtrlari, salon filtrlari va moy filtrlari — bir xil yuqori sifat va ishonchlilik. Ishlab chiqarish liniyasi tayyorlanmoqda." },
      ctaTitle: "Maxsus retsepturalar kerakmi?",
      ctaBody: "OEM, xususiy brend yoki individual aralashmalar bo'yicha muhokama uchun biz bilan bog'laning.",
      ctaLabel: "Texnik spetsifikatsiyalarni so'rash",
    },
    production: {
      hero: { headline: "Surxondaryoda ishlab chiqarilgan — kengaytirishga tayyor", subheadline: "Motor moylari aralashtirish, antifriz ishlab chiqarish, sifat nazorati laboratoriyasi va qadoqlash liniyalariga ega 10 sotixlik ishlab chiqarish majmuasi." },
      facility: { eyebrow: "Ishlab chiqarish haqida", title: "Maqsadli qurilgan 10 sotix ishlab chiqarish maydoni", body: "Sariosiyo tumanida (Surxondaryo viloyati) joylashgan majmuamiz samarali rejalashtirish va sifatga yo'naltirilgan jarayonlarni birlashtiradi. Moy ishlab chiqarish liniyasiga kiritilgan investitsiya $250,000 ni tashkil etadi va kengaytirish uchun sezilarli quvvat zaxirasi mavjud.", details: [{ label: "Umumiy maydon", value: "10 sotix" }, { label: "Moy ishlab chiqarish zonasi", value: "Alohida aralashtirish va qadoqlash" }, { label: "Antifriz ishlab chiqarish", value: "Alohida liniya" }, { label: "Uskunaga investitsiya", value: "$250,000+" }, { label: "Quvvatdan foydalanish", value: "Kengaytirish imkoniyati mavjud" }] },
      process: { eyebrow: "Jarayon", title: "Xom ashyodan tayyor mahsulotgacha", steps: [{ step: "01", title: "Xom ashyo yetkazib berish", body: "Asos moylari va qo'shimchalar ishonchli yetkazib beruvchilardan olinadi. Har bir xom ashyo partiyasi ishlab chiqarishga kiritishdan oldin sinovdan o'tkaziladi." }, { step: "02", title: "Aniq aralashtirish", body: "Kompyuter yordamida o'lchangan aralashtirish aniq qovushqoqlik va qo'shimcha konsentratsiyasini kafolatlaydi. Kimyoviy muhandislar jamoamiz har bir ishlab chiqarish siklini nazorat qiladi." }, { step: "03", title: "Sifat nazorati sinovlari", body: "Har bir partiyadan namunalar laboratoriya sinovlaridan o'tkaziladi — qovushqoqlik indeksi, chaqnash harorati, quyilish harorati, TBN va ifloslantiruvchi moddalar tekshiruvi." }, { step: "04", title: "Qadoqlash va yetkazib berish", body: "1L dan 200L gacha bo'lgan hajmlarda quyish, markalash va qadoqlash. Mahsulotlar palletlanadi va butun O'zbekiston hamda undan tashqariga yetkazib berishga tayyor." }] },
      teamEyebrow: "Jamoa",
      teamTitle: "Texnik yetakchilik va soha ekspertizasi",
      location: { eyebrow: "Strategik joylashuv", title: "Surxondaryo — Markaziy Osiyoning chorrahasi", body: "O'zbekistonning eng janubiy hududida, Afg'oniston, Tojikiston va Turkmaniston bilan chegaradosh. Pastroq operatsion xarajatlar, o'sib borayotgan transchegaraviy bozorlarga chiqish va xom ashyo yetkazib berish yo'llariga yaqinlik.", advantages: ["Toshkent yoki Samarqandga nisbatan arzonroq ishchi kuchi va bino xarajatlari", "Chegara bozorlariga yaqinlik — eksportga tayyor", "O'sib borayotgan mintaqaviy sanoat bazasi — kengayayotgan mahalliy talab", "Mintaqaviy ishlab chiqarishni rivojlantirish bo'yicha davlat ko'magi"] },
      ctaTitle: "Barcha imkoniyatlarimiz bilan tanishing",
      ctaBody: "Mahsulot spetsifikatsiyalari va texnik ma'lumot varaqlarini yuklab oling.",
      ctaLabel: "Mahsulotlarni ko'rish",
    },
    team: [
      { id: "chemical-expert", name: "Dr. [Ism]", role: "Bosh kimyoviy muhandis", bio: "Retsepturalar ishlab chiqish, sifat nazorati va xalqaro hamkorlik sohasida o'nlab yillik tajribaga ega yuqori martabali davlat kimyoviy mutaxassisi. Barcha mahsulotlarni ishlab chiqish, sinovdan o'tkazish va sertifikatlash ishlariga rahbarlik qiladi. Eron va Markaziy Osiyoning boshqa davlatlari kimyoviy ekspertlari bilan qo'shma tajribalar o'tkazgan.", credentials: ["Milliy kimyoviy tartibga solish sohasida rahbarlik", "Xalqaro hamkorlik tajribasi", "Retsepturalar bo'yicha o'nlab yillik ekspertiza", "Davlat sifat standartlari bo'yicha vakolatli mutaxassis"] },
      { id: "founder", name: "Mansur", role: "Ta'sischi va boshqaruvchi direktor", bio: "2022-yildan boshlab Marshall kompaniyasini noldan boshlab qurgan. Biznesni rivojlantirish, mijozlar bilan munosabatlar va strategik yo'nalishni boshqaradi. Markaziy Osiyo moylash materiallari bozori va uning o'sish istiqbollarini chuqur tushunadi.", credentials: ["2022-yilda Marshall kompaniyasiga asos solgan", "15+ B2B mijozlar bilan munosabatlarni yo'lga qo'ygan", "To'g'ridan-to'g'ri chakana savdo va kanallar bo'yicha tajriba", "Surxondaryo hududida bozorni rivojlantirish"] },
    ],
    clients: {
      hero: { headline: "15+ tashkilot Marshallga ishonadi", subheadline: "Avtomobil ehtiyot qismlari sotuvchilari, transport kompaniyalari, sanoat ishlab chiqaruvchilari va boshqalar bilan ko'p yillik hamkorlik munosabatlari. Barqaror daromad, isbotlangan sodiqlik." },
      industriesEyebrow: "Xizmat ko'rsatilayotgan sohalar",
      industriesTitle: "Turli sektorlarni qamrab olgan diversifikatsiyalangan mijozlar bazasi",
      industries: [
        { id: "auto-parts-retail", name: "Avtomobil ehtiyot qismlari do'konlari", description: "Marshall mahsulotlarini to'g'ridan-to'g'ri iste'molchilarga sotuvchi mustaqil avtomobil ehtiyot qismlari do'konlari va chakana savdo tarmoqlari. Ushbu hamkorlar doimiy takroriy buyurtmalar bilan eng kuchli distributsiya kanalimizni tashkil etadi.", clientCount: 4, icon: "Store" },
        { id: "fleet-operators", name: "Transport kompaniyalari", description: "Avtoparklarga xizmat ko'rsatuvchi transport va logistika kompaniyalari. Ular rejali yetkazib berish va raqobatbardosh ulgurji narxlar asosida moy va antifriz ta'minoti uchun Marshallga ishonadilar.", clientCount: 5, icon: "Truck" },
        { id: "driving-school", name: "Avtomaktab", description: "O'z avtomaktabimiz doimiy mijozlar oqimini yaratadi — har bir o'qitilgan haydovchi kelajakda moy va antifriz xaridoriga aylanadi. Ushbu noyob vertikal integratsiya ham daromad, ham bozor ta'limini ta'minlaydi.", clientCount: 1, icon: "GraduationCap" },
        { id: "industrial-manufacturing", name: "Sanoat korxonalari", description: "Uskunalarga texnik xizmat ko'rsatish uchun moylash materiallaridan foydalanadigan zavod va ustaxonalar. Ushbu mijozlar barqaror sifat, texnik yordam va ishonchli mahalliy ta'minotni qadrlashadi.", clientCount: 5, icon: "Factory" },
      ],
      channels: { eyebrow: "Daromad kanallari", title: "Diversifikatsiyalangan va barqaror daromad manbalari", items: [{ id: "b2b-orgs", name: "B2B tashkilotlar", description: "15+ doimiy korporativ shartnomalar — avtomobil ehtiyot qismlari do'konlari, transport kompaniyalari va sanoat mijozlari. Bashorat qilinadigan rejali ulgurji buyurtmalar.", percentage: 15 }, { id: "retail-shop", name: "Chakana savdo do'koni", description: "To'g'ridan-to'g'ri iste'molchilarga sotuvchi o'z chakana savdo nuqtamiz. Doimiy mijozlar oqimi, brend ko'rinishi va real vaqt rejimidagi bozor fikr-mulohazasi.", percentage: 20 }, { id: "driving-school-pipeline", name: "Avtomaktab kanali", description: "Tabiiy mijoz jalb qilish mexanizmi — har bir talaba uzoq muddatli moy va antifriz iste'molchisiga aylanadi. Noyob raqobat ustunligi.", percentage: 65 }] },
      flywheelEyebrow: "Marshall modeli",
      flywheelTitle: "Avtomaktab qanday qilib umrbod mijozlarni shakllantiradi",
      flywheelSteps: [{ step: 1, title: "Avtomaktab", description: "Talabalar Marshall mahsulotlari bilan xizmat ko'rsatilgan avtomobillarda haydashni o'rganadilar. Brend bilan tanishish haydovchilik hayotining birinchi kunidanoq boshlanadi." }, { step: 2, title: "Ishonch", description: "Bitiruvchilar o'zlari o'rgangan mahsulotlarga ishonadilar. Marshall ular uchun moy, antifriz va suyuqliklar bo'yicha standart tanlovga aylanadi." }, { step: 3, title: "Umrbod mijozlar", description: "Haydovchilar har bir moy almashtirish, antifriz quyish va tormoz suyuqligi almashtirish uchun Marshall chakana hamkorlariga qaytadilar — avtomobilning butun xizmat muddati davomida." }, { step: 4, title: "Og'izdan-og'izga", description: "Mamnun mijozlar Marshallni oila a'zolari, do'stlari va hamkasblariga tavsiya qiladilar. Organik o'sish yildan-yilga kuchayib boradi." }],
      whyTheyStay: { eyebrow: "Nega ular biz bilan qoladilar", title: "Mijozlarning yildan-yilga Marshallni tanlashining to'rtta sababi", reasons: [{ title: "Mahalliy ishlab chiqarish — tezkor yetkazib berish", body: "Surxondaryodagi ishlab chiqarish import kechikishlarining oldini oladi. Mijozlar mahsulotlarni haftalar emas, balki kunlar ichida qabul qiladilar — bu to'xtab qolishga bardosh bera olmaydigan biznes uchun juda muhim." }, { title: "Markaziy Osiyo iqlimi bo'yicha ekspertiza", body: "Mintaqaviy harorat ekstremallari uchun maxsus ishlab chiqilgan mahsulotlar — qishda -30°C dan yozda +45°C gacha. Import analoglar bu sharoitlarni hisobga olmaydi." }, { title: "Raqobatbardosh narxlar", body: "Mahalliy ishlab chiqarish import bojlari, xalqaro yuk tashish va vositachilik ustamalarini bartaraf etadi. Mijozlar mahalliy narxlarda yuqori sifatga ega bo'ladilar." }, { title: "Moslashtirish va OEM", body: "Biz mijoz spetsifikatsiyalari asosida retseptura ishlab chiqamiz, aralashtiramiz va qadoqlaymiz. Qovushqoqlikni sozlash, xususiy brend markalash yoki buyurtma qadoqlash — barchasini yetkazib beramiz." }] },
      testimonials: { eyebrow: "Mijozlarning fikrlari", title: "Hamkorlarimiz nima deydi", items: [{ quote: "Marshall moyi bizning sifat talablarimizga doimiy ravishda javob beradi. Mahalliy ishlab chiqarish import kutishlarni bartaraf etadi — yetkazib berish bir necha kun ichida amalga oshiriladi.", attribution: "Avtomobil ehtiyot qismlari do'koni hamkori", industry: "Chakana savdo" }, { quote: "Ikki yil oldin import moylardan Marshallga o'tdik. Yaxshiroq narx, bir xil sifat va a'lo darajada texnik yordam.", attribution: "Transport kompaniyasi rahbari", industry: "Transport" }, { quote: "Bizning maxsus uskuna ehtiyojlarimiz uchun individual retsepturalar. Marshallning kimyoviy muhandislar jamoasi to'g'ridan-to'g'ri texnik xizmat ko'rsatish bo'limimiz bilan birgalikda ishladi.", attribution: "Sanoat korxonasi mijozi", industry: "Ishlab chiqarish" }] },
      ctaTitle: "Marshall bilan allaqachon ishlayotgan 15+ tashkilotga qo'shiling",
      ctaBody: "Ishonchli ta'minot, raqobatbardosh narxlar, mahalliy ishlab chiqarish. Biz sizning biznesingizga qanday xizmat ko'rsatishimiz mumkinligini muhokama qilaylik.",
      ctaLabel: "Hamkor bo'ling",
      clientsLabel: "mijoz",
    },
    about: {
      hero: { headline: "O'zbekistonda yaratilgan — uzoq muddatga mo'ljallangan", subheadline: "2022-yildagi g'oyadan bugungi kundagi 15+ korporativ mijozgacha — Marshall Markaziy Osiyoning rivojlanayotgan moylash materiallari ishlab chiqaruvchisidir." },
      story: { eyebrow: "Bizning tariximiz", title: "Ekspertiza asosida qurilgan, ishonch asosida o'sgan", paragraphs: ["Marshall 2022-yilda Surxondaryo viloyati Sariosiyo tumanida aniq maqsad bilan tashkil etilgan: Markaziy Osiyo biznesi va iste'molchilari uchun mos narxlarda xalqaro standartlarga javob beradigan yuqori sifatli moylash materiallari va avtomobil suyuqliklarini ishlab chiqarish.", "Kichik ixtisoslashgan korxona sifatida boshlangan biznesimiz turli sohalardagi 15 dan ortiq tashkilotlarga xizmat ko'rsatish darajasigacha o'sdi. Moylarimiz, antifrizimiz, tormoz suyuqligimiz va surkov moylarimiz butun mintaqa bo'ylab avtomobil ehtiyot qismlari sotuvchilari, transport kompaniyalari va sanoat korxonalari tomonidan ishonch bilan qabul qilingan.", "Har bir mahsulotimiz ortida bosh kimyoviy muhandisimiz — retsepturalar ishlab chiqish bo'yicha o'nlab yillik tajribaga va Eronlik kimyoviy ekspertlar bilan qo'shma tadqiqotlarni o'z ichiga olgan xalqaro hamkorlik aloqalariga ega yuqori martabali davlat kimyoviy mutaxassisi turadi."] },
      milestonesEyebrow: "Muhim bosqichlar",
      milestonesTitle: "Marshall yo'li",
      timeline: [{ year: "2022", event: "Sariosiyoda (Surxondaryo) Marshall kompaniyasiga asos solindi. Birinchi moy ishlab chiqarish liniyasi ishga tushirildi." }, { year: "2023", event: "Antifriz ishlab chiqarish yo'lga qo'yildi. Dastlabki 5 ta korporativ B2B mijoz bilan shartnoma imzolandi." }, { year: "2024", event: "Mahsulot qatoriga tormoz suyuqligi va surkov moyi qo'shildi. Mijozlar bazasi 10+ tashkilotgacha kengaydi." }, { year: "2025", event: "15+ doimiy B2B mijozga erishildi. OEM/xususiy brend xizmati yo'lga qo'yildi. Eron bilan kimyoviy tadqiqot hamkorligi o'rnatildi." }, { year: "2026+", event: "Ishlab chiqarish quvvatini kengaytirish. Havo filtrlari ishlab chiqarish liniyasi tayyorlanmoqda. Eksport bozorlari o'rganilmoqda." }],
      leadershipEyebrow: "Rahbariyat",
      leadershipTitle: "Marshall ortida turgan insonlar",
      market: { eyebrow: "Bozor imkoniyatlari", title: "O'zbekiston moylash materiallari bozori — yillik 11%+ o'sish", body: "O'zbekiston moylash materiallari bozori 2031-yilgacha har yili 11% dan ortiq o'sishi prognoz qilinmoqda. Bunga avtomobillashtirishning kengayishi, sanoat rivojlanishi va mahalliy ishlab chiqarishni qo'llab-quvvatlovchi davlat tashabbuslari sabab bo'lmoqda. Marshall ushbu o'sish to'lqinining markazida joylashgan." },
      ctaTitle: "Marshall tarixi sizni qiziqtirdimi?",
      ctaBody: "Ishlab chiqarish imkoniyatlarimiz va mijozlar portfelimiz haqida ko'proq bilib oling.",
      ctaLabel: "Ishlab chiqarishni ko'rish",
    },
    trade: {
      hero: { headline: "Savdo hamkorlari uchun optimallashtirilgan ta'minot", subheadline: "Ulgurji narxlar, rejali yetkazib berish, maxsus qo'llab-quvvatlash va to'liq texnik hujjatlar — moylash materiallari hamkoringizdan biznesingiz uchun zarur bo'lgan barcha narsa." },
      ctaButton: "Hamkorlik so'rovi",
      portal: { eyebrow: "Savdo portali", title: "Onlayn buyurtmalar — tez orada ishga tushadi", body: "Biz savdo hamkorlari narxlarni ko'rishi, buyurtma berishi, yetkazib berishni kuzatishi va texnik hujjatlarga kirishi mumkin bo'lgan maxsus B2B portalini yaratmoqdamiz — barchasi bir joyda. Erta kirish uchun quyida ro'yxatdan o'ting.", features: [{ title: "Eksklyuziv savdo narxlari", body: "Ro'yxatdan o'tgan savdo hamkorlari hajmga qarab narx darajalarini qo'lga kiritadilar. Qancha ko'p buyurtma bersangiz, marjangiz shuncha yuqori bo'ladi." }, { title: "Buyurtmalar tarixi va tezkor qayta buyurtma", body: "To'liq buyurtmalar tarixini ko'ring va oldingi xaridlarni bir marta bosish orqali takrorlang. Hech qanday qog'ozbozlik, hech qanday kechikishlarsiz." }, { title: "Rejali yetkazib berish", body: "Muntazam ta'minot uchun takroriy yetkazib berish jadvalini o'rnating. Zaxirangiz hech qachon tugamasligi uchun logistikani biz boshqaramiz." }, { title: "Shaxsiy hisobingiz orqali qo'llab-quvvatlash", body: "Har bir savdo hamkori jamoamiz bilan to'g'ridan-to'g'ri aloqa liniyasiga ega. Texnik savollar, maxsus buyurtmalar, shoshilinch so'rovlar — tezkor javob beriladi." }, { title: "Texnik ma'lumotlar kutubxonasi", body: "Har bir Marshall mahsuloti bo'yicha to'liq spetsifikatsiyalar, xavfsizlik ma'lumotlari varaqalari va qo'llash qo'llanmalariga to'liq kirish imkoniyati." }, { title: "Yangi mahsulotlarga birinchi bo'lib kirish", body: "Savdo hamkorlari yangi retsepturalar va mahsulotlarga — jumladan kelajakdagi havo filtrlari liniyamizga birinchi bo'lib kirish huquqiga ega." }] },
      howItWorksEyebrow: "Qanday ishlaydi",
      howItWorksTitle: "Savdo hamkorligi sari uch qadam",
      steps: [{ step: "01", title: "Biznesingizni ro'yxatdan o'tkazing", body: "Kompaniya ma'lumotlaringiz, sohangiz va taxminiy hajm talablaringiz bilan savdo so'rovi shaklini to'ldiring. Biz ko'rib chiqamiz va 24 soat ichida javob beramiz." }, { step: "02", title: "Shartlar va narxlarni kelishib oling", body: "Biz siz bilan birgalikda hajmga asoslangan narx darajalari, yetkazib berish jadvallari va to'lov shartlarini ishlab chiqamiz. Maxsus retsepturalar va qadoqlash imkoniyatlari mavjud." }, { step: "03", title: "Buyurtma berishni boshlang", body: "Telefon, elektron pochta yoki yaqin orada ishga tushadigan onlayn portalimiz orqali buyurtma bering. Mahsulotlarni bir necha kun ichida qabul qiling — import kechikishlari va vositachilarsiz." }],
      ctaTitle: "Savdo hamkori bo'lishga tayyormisiz?",
      ctaBody: "So'rov shaklini to'ldiring va jamoamiz bir ish kuni ichida siz bilan bog'lanadi.",
      ctaLabel: "Hamkorlik uchun ro'yxatdan o'tish",
    },
    contact: {
      hero: { headline: "Aloqa", subheadline: "Hamkorlik so'rovlari. Ulgurji ta'minot. Investitsiya imkoniyatlari. Jamoamiz bilan to'g'ridan-to'g'ri bog'laning." },
      partner: { title: "Hamkor bo'ling", description: "Marshall mahsulotlarini sotish yoki savdo hamkori bo'lishga qiziqasizmi? Biznesingiz va ehtiyojlaringiz haqida ma'lumot bering.", fields: ["Kompaniya nomi", "Soha", "Qiziqtirgan mahsulot", "Taxminiy hajm"] },
      investment: { title: "Investorlar uchun", description: "Malakali xaridorlar va investorlar: Maxfiy axborot memorandumimizni so'rang. Barcha so'rovlar NDA asosida qat'iy maxfiylik bilan ko'rib chiqiladi.", fields: ["Ismingiz", "Tashkilot", "Investitsiya diapazoni", "Muddatlar"], note: "Faqat jiddiy so'rovlar qabul qilinadi. To'liq moliyaviy va operatsion ma'lumotlar malakaviy tekshiruvdan so'ng NDA asosida taqdim etiladi." },
      locationEyebrow: "Bizning manzilimiz",
      email: "Elektron pochta",
      phone: "Telefon",
      address: "Manzil",
    },
    common: {
      backToHome: "Bosh sahifaga qaytish",
      pageNotFound: "Sahifa topilmadi",
      pageNotFoundBody: "Siz izlayotgan sahifa mavjud emas yoki boshqa joyga ko'chirilgan.",
      submitInquiry: "So'rov yuborish",
      thankYou: "Rahmat",
      thankYouBody: "Sizning so'rovingiz qabul qilindi. Biz siz bilan 24 soat ichida bog'lanamiz.",
      received: "So'rov qabul qilindi",
      receivedBody: "Keyingi qadamlar haqida 24 soat ichida javob beramiz.",
      select: "Tanlang...",
      fullName: "To'liq ism-sharif",
      professionalEmail: "Ish elektron pochtasi",
      investmentRange: "Investitsiya diapazoni (USD)",
      directInquiry: "To'g'ridan-to'g'ri so'rov",
      ndaProtected: "NDA himoyasi ostida",
      featured: "Tavsiya etiladi",
      details: "Batafsil →",
      inDevelopment: "Ishlab chiqilmoqda",
      mfgAndSales: "Ishlab chiqarish va savdo ofisi",
      response24h: "24 soat ichida javob",
      availableHours: "9:00–18:00 UZT oralig'ida mavjud",
      surkhandarya: "Surxondaryo viloyati, O'zbekiston",
      processEyebrow: "Jarayon",
      processTitle: "So'rov yuborganingizdan keyin nima bo'ladi",
      step1Title: "Biz ko'rib chiqamiz",
      step1Body: "Sizning so'rovingiz to'g'ridan-to'g'ri jamoamizga tushadi. Biz moslik, hajm va muddatlarni baholaymiz.",
      step2Title: "Biz javob beramiz",
      step2Body: "24 soat ichida siz keyingi qadamlar, narx bo'yicha yo'riqnoma yoki investitsiya so'rovlari uchun NDA hujjatlari bilan javob olasiz.",
      step3Title: "Biz harakatga o'tamiz",
      step3Body: "Hamkorlik shartlari, joyiga tashrif, mahsulot namunalari yoki due diligence materiallari — qaysi yo'nalish kerak bo'lsa, biz taqdim etamiz.",
      partnerInvestEyebrow: "To'g'ridan-to'g'ri so'rov",
      partnerInvestTitle: "Hamkor yoki investor",
      partnerInvestBody: "Ikki yo'l. Bitta jamoa. 24 soat ichida javob beramiz.",
    },
  },

};
// ── Helper ─────────────────────────────────────────────────
export function getT(lang: string, path: string): any {
  const keys = path.split(".");
  let result: any = (t as any)[lang];
  for (const key of keys) {
    if (result == null) return undefined;
    result = result[key];
  }
  return result;
}

