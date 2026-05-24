// src/data/siteConfig.js
// ──────────────────────────────────────────────
// SITE CONFIG — Your identity and global settings.
//
// This is the first file you should edit.
// Change your name, bio, links, and which
// sections appear on the site.
// ──────────────────────────────────────────────

const SITE_CONFIG = {
  // Your display name — appears in hero, nav, and footer
  name: "Adam Gjessing",

  // Short phrase on the hero section
  tagline: "Data & Light",

  // One-liner below the tagline
  subtitle: "Exploring stories through analytics and photography",

  // About page content
  about: {
    intro:
      "I'm a multidisciplinary creative who lives at the intersection of data and visual storytelling.",
    philosophy:
      "I believe the best work simplifies complexity into something felt, not just understood.",
  },

  // Contact links — add or remove any key here and
  // the site will automatically show/hide it
  contact: {
    email: "hello@yourname.com",
    github: "https://github.com/yourname",
    linkedin: "https://linkedin.com/in/yourname",
    instagram: "https://instagram.com/yourname",
  },

  // SECTIONS — this array controls everything:
  //   • Which nav links appear
  //   • Which sections show on the homepage
  //   • Which section pages exist
  //
  // To add a section: add a string here, then create
  // its data file and register it in sectionRegistry.js
  sections: ["analytics", "photography"],
};

export default SITE_CONFIG;
