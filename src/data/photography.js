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
    title: "Urban Negative Space",
    description:
      "A study of geometry and emptiness in midwestern architecture. Shot over 6 months across three cities.",

    longDescription:
      "This series explores the tension between structure and void in midwestern cities.\n\nShot entirely on 35mm black and white film (Ilford HP5+, pushed to 1600) to emphasize grain and tonal contrast.\n\nThe series was exhibited at a local gallery and selected for a regional anthology.",

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
];

export default PHOTOGRAPHY_PROJECTS;
