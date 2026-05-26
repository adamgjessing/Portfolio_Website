// src/theme/theme.js
// ──────────────────────────────────────────────
// THEME — Every visual decision lives here.
//
// Change a color once and it updates everywhere.
// This is imported by components that need styling.
// ──────────────────────────────────────────────

const T = {
  colors: {
    bg:            "#0A0A0C",       // Page background (near-black)
    bgElevated:    "#111115",       // Slightly lighter (tag backgrounds)
    bgCard:        "#16161C",       // Card surfaces
    bgCardHover:   "#1E1E26",       // Card on hover
    textPrimary:   "#E8E6E1",       // Main text (warm white)
    textSecondary: "#908E89",       // Supporting text (warm gray)
    textMuted:     "#5A5854",       // Subtle text (labels, years)
    accent:        "#C4A46C",       // Default gold accent
    accentMuted:   "rgba(196, 164, 108, 0.12)",
    border:        "#252530",       // Card borders
    borderSubtle:  "#1C1C24",       // Divider lines
  },

  fonts: {
    display: "'Playfair Display', Georgia, serif",     // Headings
    body:    "'DM Sans', 'Helvetica Neue', sans-serif", // Body text
    mono:    "'JetBrains Mono', 'Fira Code', monospace", // Labels, tags
  },

  radii: {
    sm: "4px",   // Tags
    md: "8px",   // Buttons
    lg: "16px",  // Cards
    xl: "24px",  // Large containers
  },

  transitions: {
    fast:    "0.15s ease",
    default: "0.3s cubic-bezier(0.22, 1, 0.36, 1)",
    slow:    "0.5s cubic-bezier(0.22, 1, 0.36, 1)",
  },
};

export default T;
