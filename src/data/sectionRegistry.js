// src/data/sectionRegistry.js
// ──────────────────────────────────────────────
// SECTION REGISTRY — The wiring diagram.
//
// This file connects section keys (like "analytics")
// to their project data and display settings.
//
// To add a new section:
//   1. Import its data array
//   2. Add an entry to SECTION_DATA
//   3. Add an entry to SECTION_CONFIG
//   4. Add the key to siteConfig.js → sections array
// ──────────────────────────────────────────────

import ANALYTICS_PROJECTS from "./analytics";
import PHOTOGRAPHY_PROJECTS from "./photography";

// Maps section key → project data array
export const SECTION_DATA = {
  analytics: ANALYTICS_PROJECTS,
  photography: PHOTOGRAPHY_PROJECTS,
  // consulting: CONSULTING_PROJECTS,  ← future section example
};

// Maps section key → display configuration
export const SECTION_CONFIG = {
  analytics: {
    label: "Analytics",               // Human-readable name for nav/headers
    accent: "#6C9EC4",                // Section color (steel blue)
    accentMuted: "rgba(108, 158, 196, 0.12)",  // Tinted background
    description: "Data analysis, ML, and visualization projects.",
  },
  photography: {
    label: "Photography",
    accent: "#C4A46C",                // Section color (warm gold)
    accentMuted: "rgba(196, 164, 108, 0.12)",
    description: "Visual stories through architecture and light.",
  },
  // consulting: {
  //   label: "Consulting",
  //   accent: "#9EC46C",
  //   accentMuted: "rgba(158, 196, 108, 0.12)",
  //   description: "Business strategy and financial modeling.",
  // },
};
