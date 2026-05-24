// src/data/analytics.js
// ──────────────────────────────────────────────
// ANALYTICS PROJECTS — Your data/analytics work.
//
// Each object in this array is one project.
// To add a project: copy an object, change the
// values, and give it a unique id.
// ──────────────────────────────────────────────

const ANALYTICS_PROJECTS = [
  {
    // Unique ID — used for routing. Format: "section-number"
    id: "analytics-001",

    // Card title + detail page heading
    title: "Data Pipeline",

    // Short summary shown on project cards (2-3 sentences)
    description:
      "End-to-End Data Pipeline with visualizations",

    // Full writeup shown on the detail page.
    // Use \n\n to separate paragraphs.
    longDescription:
      "This project connected procurement, warehousing, and distribution data into a single dashboard.\n\nThe forecasting module predicts demand at the SKU level using ARIMA and gradient boosting. The vendor scorecard tracks reliability across 200+ suppliers.\n\nThe result was a 23% reduction in stockouts within the first quarter.",

    // Tags shown as pills on cards
    tags: ["Python", "Tableau", "SQL"],

    // Full tool list for the detail page sidebar
    tools: ["Python", "Pandas", "Tableau", "PostgreSQL"],

    // Must match the section key in siteConfig.js
    category: "analytics",

    year: 2025,
    duration: "3 months",
    role: "Data Insights",

    // true = this project appears on the homepage
    featured: true,

    // External links (use "#" as placeholder)
    links: { live: "#", repo: "#" },

    // Replace null with a path to your screenshot
    image: null,

    // "Key Results" shown in the detail page sidebar
    highlights: [
      "23% reduction in stockouts",
      "200+ vendor scorecards automated",
    ],
  },
];

export default ANALYTICS_PROJECTS;
