import { ContentFR } from './fr';

export const contentEN: ContentFR = {
  header: {
    brandName: "Promotion Crinab",
    tagline: "Cold Storage & Industrial Logistics — Rabat",
    nav: {
      hero: "Home",
      solutions: "Storage Solutions",
      facility: "Our Facilities",
      virtualTour: "Virtual Tour",
      gallery: "Photo Gallery",
      advantages: "Why Choose Us",
      contact: "Quote & Contact"
    },
    ctaButton: "Request a Quote",
    phoneDisplay: "+212 661-536504",
    phoneHref: "tel:+212661536504",
    whatsappHref: "https://wa.me/212661536504",
    addressShort: "Lot 54, TouchMark, Rabat, Morocco",
  },
  hero: {
    titleLine1: "Store with precision.",
    titleLine2: "Grow without limits.",
    subheadline: "Temperature-controlled cold and industrial storage in Rabat tailored for agri-food and distribution professionals.",
    ctaPrimary: "Request a quote",
    ctaSecondary: "Contact Us",
    trustLine: "Exceptional professionalism • 24/7 Security • Rigorous hygiene standards • Modular custom capacity",
    tempReadoutLabel: "Controlled Temperature:",
    targetTempPositive: "+2°C",
    targetTempNegative: "-20°C",
    shutterPrompt: "Swipe up or click to open roller door",
  },
  solutions: {
    sectionTitle: "Tailored Storage Solutions",
    sectionSubtitle: "3 thermal environments designed for strict cold chain requirements and professional storage.",
    acceptedProductsLabel: "Examples of accepted products:",
    tempRangeLabel: "Range:",
    requestQuoteForCategory: "Request a quote for",
    mostPopularLabel: "Most popular",
    activeViewLabel: "Active view",
    categories: [
      {
        id: "positive",
        title: "Positive Cold (+2°C to +8°C)",
        subtitle: "Optimal preservation for fresh goods and perishable products",
        tempRange: "+2°C / +8°C",
        badgeText: "Chilled Storage",
        description: "Humidity-controlled positive cold rooms, ideal for preserving freshness, texture, and nutritional value of fast-moving goods.",
        items: [
          "Dairy products and derivatives",
          "Fresh fruits & vegetables",
          "Prepared meals & catering",
          "Beverages and natural juices",
          "Packaged fresh foods"
        ],
        specs: [
          { label: "Regulation", value: "Automated temperature regulation" },
          { label: "Hygro Control", value: "Humidity-controlled environment" },
          { label: "Traceability", value: "Continuous monitoring and tracking" }
        ],
        imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200"
      },
      {
        id: "negative",
        title: "Negative Cold (-18°C to -25°C)",
        subtitle: "High-performance industrial freezing and deep-freeze storage",
        tempRange: "-18°C / -25°C",
        badgeText: "Deep Freeze",
        description: "High-capacity negative cold storage equipped with state-of-the-art refrigeration machinery. Guaranteed unbroken cold chain.",
        items: [
          "Poultry and cut meats",
          "Seafood and fish",
          "Frozen goods and ice cream",
          "Frozen dough & ingredients",
          "Strategic reserve inventory"
        ],
        specs: [
          { label: "Power", value: "Redundant dual backup groups" },
          { label: "Defrost", value: "Smart automatic cycle" },
          { label: "Insulation", value: "High-performance insulated panels" }
        ],
        imageUrl: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&q=80&w=1200"
      },
      {
        id: "general",
        title: "General & Dry Storage",
        subtitle: "Logistics for consumables, packaging, and raw materials",
        tempRange: "+15°C / +25°C",
        badgeText: "Dry Warehouse",
        description: "Clean, ventilated, and weather-sealed warehouse halls dedicated to professional supplies, packaging, and non-perishables.",
        items: [
          "Industrial packaging and cartons",
          "Food trays and plastic films",
          "Logistics bags and containers",
          "B2B supplies and consumables",
          "Packaged raw materials"
        ],
        specs: [
          { label: "Protection", value: "Pest-controlled & dust-proof" },
          { label: "Clear Height", value: "High-clearance storage capacity" },
          { label: "Flooring", value: "High-load industrial concrete floor" }
        ],
        imageUrl: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80&w=1200"
      }
    ]
  },
  facilityPresentation: {
    badge: "5,000 m² Infrastructure", /* PLACEHOLDER — awaiting client confirmation of actual facility size */
    sectionTitle: "Infrastructure & 11 Operational Zones",
    sectionSubtitle: "Interactive guided tour of our 11 operational zones built for efficiency, cleanliness, and industrial safety.",
    certifiedLabel: "11 Secured Operational Zones",
    allZonesLabel: "All 11 Zones",
    zoneProgressLabel: "Zone",
    ofLabel: "of",
    tourTitle: "Guided Logistics Complex Tour",
    prevZone: "Previous zone",
    nextZone: "Next zone",
    viewDetails: "View full specs & details",
    specsTitle: "Technical Specifications & Equipment:",
    closeLabel: "Close",
    areas: [
      {
        id: "entrance",
        title: "Main Gate & Secure Entry",
        category: "Access & Security",
        shortDesc: "Access control checkpoint with barriers and vehicle screening.",
        fullDesc: "Access to Promotion Crinab is strictly filtered at the gate with security guard monitoring every truck and utility vehicle.",
        specs: ["Guarded Checkpoint", "Access Control", "Heavy Vehicle Entrance"],
        imageUrl: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=1000"
      },
      {
        id: "reception",
        title: "Logistics Reception & Offices",
        category: "Administration",
        shortDesc: "Dedicated office for swift processing of shipping notes and entry formalities.",
        fullDesc: "Modern reception office allowing drivers and logistics managers to validate transport documents efficiently.",
        specs: ["Driver Reception", "Document Processing", "Flow Management"],
        imageUrl: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=1000"
      },
      {
        id: "positive_rooms",
        title: "Chilled Positive Cold Rooms",
        category: "Positive Cold",
        shortDesc: "Spacious compartmentalized rooms maintained between +2°C and +8°C.",
        fullDesc: "Equipped with adjustable industrial racks to ensure even air flow and optimal temperature preservation.",
        specs: ["Temperature Control", "Appropriate Lighting", "High-Load Flooring"],
        imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1000"
      },
      {
        id: "negative_rooms",
        title: "Deep Freeze Negative Rooms",
        category: "Deep Freeze",
        shortDesc: "Large-capacity refrigerated chambers maintained at sub-zero temperatures.",
        fullDesc: "Fast-acting insulated doors to maintain thermal sealing and prevent temperature loss.",
        specs: ["Controlled Sub-Zero Temp", "Insulated Doors", "Safety Devices"],
        imageUrl: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&q=80&w=1000"
      },
      {
        id: "storage_areas",
        title: "General Storage Halls",
        category: "Dry Storage",
        shortDesc: "Spacious halls for pallets of materials, packaging, and supplies.",
        fullDesc: "Wide aisles allowing safe maneuvering of forklifts and pallet jacks with floor markings.",
        specs: ["Arranged Storage Area", "Circulation Aisles", "Pallet Storage"],
        imageUrl: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80&w=1000"
      },
      {
        id: "corridors",
        title: "Insulated Transit Corridors",
        category: "Flow Control",
        shortDesc: "Thermal buffer zones preserving room temperatures during pallet transfers.",
        fullDesc: "Transit corridors prevent thermal shock during handling and protect room target temperatures.",
        specs: ["Thermal Transit Buffer", "Impact Protection", "Fluid Traffic Flow"],
        imageUrl: "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&q=80&w=1000"
      },
      {
        id: "loading",
        title: "Loading & Unloading Docks",
        category: "Logistics",
        shortDesc: "Docks designed for refrigerated semi-trailers and trucks.",
        fullDesc: "Docks featuring seals that hug truck bodies to prevent cold loss during loading.",
        specs: ["Loading Docks", "Hydraulic Levelers", "Dock Seals"],
        imageUrl: "https://images.unsplash.com/photo-1586528116493-a029325540fa?auto=format&fit=crop&q=80&w=1000"
      },
      {
        id: "equipment",
        title: "Refrigeration Plant & Machinery",
        category: "Engineering",
        shortDesc: "Industrial refrigeration plant providing continuous cold supply.",
        fullDesc: "Technical plant regularly serviced with backup power systems to prevent operational downtime.",
        specs: ["Refrigeration Plant", "Backup Power Supply", "Continuous Maintenance"],
        imageUrl: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=1000"
      },
      {
        id: "safety",
        title: "Safety & Fire Protection Systems",
        category: "Protection",
        shortDesc: "Surveillance systems and comprehensive fire safety equipment.",
        fullDesc: "Complete site protection covering the full facility for personnel and goods security.",
        specs: ["Area CCTV Surveillance", "Fire Detection", "Safety Equipment"],
        imageUrl: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=1000"
      },
      {
        id: "access",
        title: "Yard & Heavy Truck Maneuvering",
        category: "Access Yard",
        shortDesc: "Spacious paved yard facilitating truck maneuvering.",
        fullDesc: "Yard layout designed to prevent congestion and streamline daily freight arrival.",
        specs: ["Maneuvering Yard", "Waiting Area", "Zone Lighting"],
        imageUrl: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=1000"
      },
      {
        id: "other_spaces",
        title: "Other Available Spaces & Modular Extension",
        category: "Modular Spaces",
        shortDesc: "Versatile, customizable spaces for order picking, packaging, or temporary buffer storage.",
        fullDesc: "Adaptable extra space suitable for specific operational requirements (batching, repacking, or buffer zones).",
        specs: ["Modular Spaces", "Forklift Access", "Customizable Layout"],
        imageUrl: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1000"
      }
    ]
  },
  facilityVideo: {
    sectionTitle: "Virtual Facility Tour",
    sectionSubtitle: "Explore our entire facility through a guided video tour: from exterior access to cold storage rooms and loading docks.",
    chapterSelectorTitle: "Video tour chapters:",
    chapters: [
      {
        id: "ch-exterior",
        title: "1. Exterior & Building Facade",
        timestamp: "0:00",
        description: "General overview of the site layout and facility exterior access points.",
        posterUrl: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1200"
      },
      {
        id: "ch-entrance",
        title: "2. Entrance & Reception",
        timestamp: "0:45",
        description: "Guarded access checkpoint and logistics office for shipping document processing.",
        posterUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200"
      },
      {
        id: "ch-storage",
        title: "3. General Storage Areas",
        timestamp: "1:30",
        description: "Dry storage halls, pallet racking aisles, and material handling routes.",
        posterUrl: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80&w=1200"
      },
      {
        id: "ch-positive",
        title: "4. Positive Cold Rooms",
        timestamp: "2:15",
        description: "Temperature-controlled refrigerated chambers (+2°C to +8°C) with heavy racking.",
        posterUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200"
      },
      {
        id: "ch-negative",
        title: "5. Deep Freeze Negative Rooms",
        timestamp: "3:00",
        description: "Sub-zero cold rooms for frozen food inventory with fast-acting thermal doors.",
        posterUrl: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&q=80&w=1200"
      },
      {
        id: "ch-equipment",
        title: "6. Refrigeration Plant",
        timestamp: "3:45",
        description: "Industrial refrigeration plant and compressor machinery.",
        posterUrl: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=1200"
      },
      {
        id: "ch-loading",
        title: "7. Loading & Unloading Docks",
        timestamp: "4:30",
        description: "Loading docks featuring hydraulic levelers and dock seals for truck transfers.",
        posterUrl: "https://images.unsplash.com/photo-1586528116493-a029325540fa?auto=format&fit=crop&q=80&w=1200"
      },
      {
        id: "ch-access",
        title: "8. Access & Maneuvering Yard",
        timestamp: "5:15",
        description: "Paved truck yard designed for smooth heavy vehicle maneuvering.",
        posterUrl: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=1200"
      }
    ],
    modalPlayTitle: "Presentation Video — Promotion Crinab",
    modalPlaySubtitle: "Complete guided video walkthrough of cold storage and logistics facilities."
  },
  gallery: {
    sectionTitle: "Discover Our Facilities",
    sectionSubtitle: "High-resolution photo gallery of our cold storage and warehousing site in Rabat.",
    categories: [
      { id: "all", label: "All Photos" },
      { id: "cold_rooms", label: "Cold Rooms" },
      { id: "storage_areas", label: "Storage Halls" },
      { id: "equipment", label: "Refrigeration Equipment" },
      { id: "facility", label: "Building & Exterior" },
      { id: "access", label: "Security & Access" },
      { id: "loading", label: "Loading Docks" }
    ],
    items: [
      {
        id: "g1",
        title: "Positive Cold Room Heavy Racking",
        category: "cold_rooms",
        categoryLabel: "Cold Rooms",
        imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1000",
        caption: "Organized heavy-duty racking with clear aisle labeling.",
        specs: "Temperature: +2°C to +8°C"
      },
      {
        id: "g2",
        title: "Deep Freeze Pallet Storage",
        category: "cold_rooms",
        categoryLabel: "Cold Rooms",
        imageUrl: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&q=80&w=1000",
        caption: "Negative cold chamber for frozen poultry and meat pallets.",
        specs: "Temperature: -18°C to -25°C"
      },
      {
        id: "g3",
        title: "Packaging & Consumables Dry Storage",
        category: "storage_areas",
        categoryLabel: "Storage Halls",
        imageUrl: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80&w=1000",
        caption: "Clean ventilated hall for packaging cartons and food trays.",
        specs: "Dry Controlled Area"
      },
      {
        id: "g4",
        title: "Industrial Refrigeration Plant",
        category: "equipment",
        categoryLabel: "Refrigeration Equipment",
        imageUrl: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=1000",
        caption: "High-performance compressor plant with continuous electronic regulation.",
        specs: "Industrial Compressor Equipment"
      },
      {
        id: "g5",
        title: "Hydraulic Dock Leveler for Refrigerated Trucks",
        category: "loading",
        categoryLabel: "Loading Docks",
        imageUrl: "https://images.unsplash.com/photo-1586528116493-a029325540fa?auto=format&fit=crop&q=80&w=1000",
        caption: "Dock levelers and seals for refrigerated trucks.",
        specs: "Isothermal Dock Seals"
      },
      {
        id: "g6",
        title: "Modern Logistics Complex Facade",
        category: "facility",
        categoryLabel: "Building & Exterior",
        imageUrl: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1000",
        caption: "High-density insulated industrial building at Lot 54, TouchMark, Rabat.",
        specs: "Total Area: 5,000 m²" /* PLACEHOLDER — awaiting client confirmation of actual facility size */
      },
      {
        id: "g7",
        title: "Guarded Gate & Security Checkpoint",
        category: "access",
        categoryLabel: "Security & Access",
        imageUrl: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=1000",
        caption: "24/7 manned security post with site access control.",
        specs: "Guarded Access"
      },
      {
        id: "g8",
        title: "Truck Yard & Turning Courtyard",
        category: "loading",
        categoryLabel: "Loading Docks",
        imageUrl: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=1000",
        caption: "Spacious paved truck yard for simultaneous semi-trailer docking.",
        specs: "Heavy Truck Access Yard"
      }
    ]
  },
  whyChooseUs: {
    sectionTitle: "Why Choose Promotion Crinab",
    sectionSubtitle: "A logistics platform designed for temperature compliance, inventory security, and full operational agility.",
    statsLabel: "Platform Key Indicators",
    stats: [
      { value: "5,000 m²", /* PLACEHOLDER — awaiting client confirmation of actual facility size */ label: "Total Facility Area", sublabel: "Cold rooms & storage halls" },
      { value: "3", label: "Thermal Environments", sublabel: "Chilled, frozen & ambient storage" },
      { value: "11", label: "Operational Zones", sublabel: "Secured logistics workflow" },
      { value: "24/7", label: "Site Security Guarding", sublabel: "Continuous on-site monitoring" }
    ],
    clusters: [
      {
        clusterTitle: "1. Thermal Control, Security & Cleanliness",
        clusterSubtitle: "International standards and constant supervision to protect your assets.",
        items: [
          {
            title: "Exceptional Professionalism & 24/7 Monitoring",
            description: "Dedicated support and continuous management by our experienced cold-chain specialists. Continuous temperature recording and strict monitoring ensuring total traceability for your products.",
            iconName: "ThermometerCheck",
            metric: "Exceptional Professionalism"
          },
          {
            title: "Hygiene & Sanitary Security",
            description: "Strict health control plan, daily cleaning protocols, pest control management, and rigorous hygiene procedures tailored to food industry standards.",
            iconName: "ShieldCheck",
            metric: "Rigorous Sanitary Compliance"
          },
          {
            title: "24/7 Site Security & Electrical Redundancy",
            description: "24/7 site security guards, video surveillance, access control, and backup generator ensuring uninterrupted cooling.",
            iconName: "Zap",
            metric: "24/7 Security & Backup Generator"
          }
        ]
      },
      {
        clusterTitle: "2. Flexibility, Adaptability & Accessibility",
        clusterSubtitle: "Tailored options built to optimize flow and empower growth.",
        items: [
          {
            title: "Modular Custom Capacity",
            description: "From a few pallet spaces up to full chamber reservation. Flexible rental terms adaptable to your business seasonality (short, medium, or long term).",
            iconName: "Layers",
            metric: "Modular Custom Capacity"
          },
          {
            title: "Strategic Rabat Location",
            description: "Located at Lot 54, TouchMark in Rabat with direct access to highways and nationwide distribution routes.",
            iconName: "MapPin",
            metric: "Highway & Capital Access"
          },
          {
            title: "Loading Docks & Fast Rotations",
            description: "Hydraulic dock levelers and seals preserving cold chain and optimizing truck turnaround with dedicated handling personnel.",
            iconName: "Truck",
            metric: "Minimal Dock Wait Time"
          }
        ]
      }
    ]
  },
  contact: {
    sectionTitle: "Quote Request & Contact",
    sectionSubtitle: "Configure your storage needs in real-time and receive a prompt tailored proposal.",
    infoBoxTitle: "Direct Contact Info",
    companyFullName: "Promotion Crinab S.A.R.L.",
    addressLine1: "Lot 54, TouchMark",
    addressLine2: "Rabat, Morocco",
    phonePrimary: "+212 661-536504",
    phoneSecondary: "",
    whatsappNumber: "212661536504",
    emailPrimary: "nisrinecm@gmail.com",
    hoursWeekday: "Opening hours: To be confirmed",
    hoursSaturday: "Access & Reception: By appointment",
    hoursSunday: "Sunday: By appointment",
    whatsappCta: "Direct WhatsApp Chat",
    formTitle: "Storage Quote Estimator",
    formSubtitle: "Enter your storage criteria to update the live summary panel instantly.",
    fields: {
      companyName: "Company Name",
      contactName: "Contact Person Full Name",
      phone: "Phone Number",
      email: "Business Email Address",
      productType: "Product / Goods Description",
      productTypePlaceholder: "e.g., Dairy items, Frozen poultry, Packaging cartons...",
      storageType: "Required Storage Temperature",
      volumeNum: "Estimated Volume / Quantity",
      volumeUnit: "Unit of Measurement",
      durationMonths: "Estimated Storage Duration (Months)",
      startDate: "Desired Start Date",
      additionalNotes: "Special Notes / Requirements"
    },
    options: {
      durationUnit: "Months",
      durationOptions: [
        { value: 1, label: "1 Month (Short term)" },
        { value: 3, label: "3 Months (Seasonal)" },
        { value: 6, label: "6 Months (Medium term)" },
        { value: 12, label: "12 Months (Annual Contract)" }
      ],
      storageTypes: [
        { value: "positive", label: "Positive Cold (+2°C / +8°C)" },
        { value: "negative", label: "Negative Cold (-18°C / -25°C)" },
        { value: "general", label: "General Dry Storage" }
      ],
      volumeUnits: [
        { value: "pallets", label: "Pallet Positions (EUR/VMF)" },
        { value: "m3", label: "Cubic Meters (m³)" },
        { value: "tons", label: "Metric Tons" }
      ]
    },
    summaryPanel: {
      title: "Quote Request Summary",
      subtitle: "Live real-time updating panel",
      selectedTypeLabel: "Thermal regime:",
      estimatedVolumeLabel: "Estimated volume:",
      durationLabel: "Contract length:",
      serviceIncludedLabel: "Offer terms:",
      includedFeatures: [
        "Services, guarantees, and storage conditions to be confirmed directly with our sales team during your quote process."
      ],
      submitButton: "Submit Quote Request",
      submitSuccess: "Your quote request was successfully submitted! Our logistics team will respond within 24 hours.",
      requiredDisclaimer: "*Required fields. Information handled with strict confidentiality."
    },
    mapTitle: "Rabat Facility Location"
  },
  footer: {
    tagline: "Promotion Crinab — Independent provider specializing in temperature-controlled cold storage and industrial warehousing in Rabat.",
    quickLinksTitle: "Quick Navigation",
    legalTitle: "Commitments & Information",
    legalList: [
      "Sanitary & Hygiene Monitoring",
      "Continuous Cold Chain Management",
      "Site Security & Protection",
      "Privacy Policy & Terms"
    ],
    copyright: "© 2026 Promotion Crinab. All rights reserved. Rabat, Morocco."
  }
};
