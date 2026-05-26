// src/data/photography.js
// ──────────────────────────────────────────────
// PHOTOGRAPHY PROJECTS — Your photo work.
//
// Same structure as analytics, with photo-specific
// fields: "equipment" instead of "tools",
// and "images" / "coverImage" for galleries.
// ──────────────────────────────────────────────

const PHOTOGRAPHY_PROJECTS = [
  {
    id: "photo-001",
    title: "Birds and Nature",
    description:
      "Nature Photography from National Parks.",

    longDescription:
      "Photos of Birds and wild animals from national park travels incuding Yosemite, Red River Gorge.",

    tags: ["Architecture", "B&W", "35mm"],

    // Photo projects use "equipment" instead of "tools"
    equipment: ["Nikon FM2", "Ilford HP5+", "28mm f/2.8"],

    category: "photography",
    year: 2025,
    duration: "6 months",
    featured: true,

    // Array of image paths for a gallery (empty for now)
    images: [],

    // Hero image for the detail page (null = gradient placeholder)
    coverImage: null,

    highlights: [
      "35mm film, pushed to 1600",
      "3 cities over 6 months",
      "Gallery exhibition",
    ],
  },
  {
    id: "photo-002",
    title: "Kheya's Bridal Shower",
    description:
      "Intimate bridal shower coverage capturing candid moments, details, and the joy of celebration.",

    longDescription:
      "A personal portrait and event session documenting Kheya's bridal shower.\n\nThe focus was on candid, warm storytelling — from the decorative details to genuine laughter between loved ones.\n\nNatural light was prioritized throughout to keep the mood soft and authentic.",

    tags: ["Portrait", "Event", "Color"],

    equipment: [],

    category: "photography",
    year: 2025,
    duration: "1 day",
    featured: false,

    images: [],
    coverImage: "public/photos/Kheya-cover.jpg",

    highlights: [
      "Candid event coverage",
      "Natural light portrait work",
      "Detail and lifestyle shots",
    ],
  },
  {
    id: "photo-003",
    title: "MedSpa",
    description:
      "Clean, clinical-yet-warm imagery for a medical spa brand — capturing treatments, spaces, and staff.",

    longDescription:
      "A commercial shoot for a medical spa, balancing the precision of clinical aesthetics with an inviting, aspirational warmth.\n\nImages span treatment rooms, product details, and staff portraits, all styled to reflect the brand's identity.\n\nDelivered for use across web, social, and print marketing.",

    tags: ["Commercial", "Portrait", "Brand"],

    equipment: [],

    category: "photography",
    year: 2025,
    duration: "1 day",
    featured: false,

    images: [],
    coverImage: null,

    highlights: [
      "Brand-aligned commercial imagery",
      "Staff and environment portraits",
      "Delivered for web, social, and print",
    ],
  },
  {
    id: "photo-004",
    title: "Warehouse Headshots",
    description:
      "Professional headshots shot on location in an industrial warehouse setting — bold, modern, character-driven.",

    longDescription:
      "A headshot session conducted in a warehouse space, using the raw texture of exposed brick, steel, and natural industrial light as a backdrop.\n\nThe environment gave each portrait a strong, contemporary edge while keeping the subject front and center.\n\nSuited for professional profiles, press kits, and personal branding.",

    tags: ["Headshots", "Portrait", "Industrial"],

    equipment: [],

    category: "photography",
    year: 2025,
    duration: "Half day",
    featured: false,

    images: [],
    coverImage: null,

    highlights: [
      "On-location industrial setting",
      "Natural and mixed light",
      "Personal branding and press use",
    ],
  },
];

export default PHOTOGRAPHY_PROJECTS;
