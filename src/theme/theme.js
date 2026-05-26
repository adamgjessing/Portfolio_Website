// src/theme/theme.js
// ──────────────────────────────────────────────
// THEME — Early 2000s Edition 🌐
//
// Electric cyan on black. Verdana. No border radius.
// Change a color once and it updates everywhere.
// ──────────────────────────────────────────────

const T = {
  colors: {
    bg:            "#000000",       // Pure black
    bgElevated:    "#020210",       // Very dark navy
    bgCard:        "#060618",       // Dark card surface
    bgCardHover:   "#0B0B28",       // Card on hover
    textPrimary:   "#DDEEFF",       // Cool blue-white
    textSecondary: "#7799BB",       // Steel blue
    textMuted:     "#445566",       // Muted steel
    accent:        "#00CCFF",       // Electric cyan — THE early 2000s color
    accentAlt:     "#FF00FF",       // Neon magenta for variety
    accentMuted:   "rgba(0, 204, 255, 0.1)",
    border:        "#003355",       // Dark cyan border
    borderSubtle:  "#001A33",       // Barely-there border
    borderBright:  "#00CCFF",       // Full-brightness border
  },

  fonts: {
    display: "'Trebuchet MS', 'Arial Black', Arial, sans-serif",  // Headings
    body:    "Verdana, Geneva, Arial, Helvetica, sans-serif",      // Body text
    mono:    "'Courier New', Courier, monospace",                  // Labels, tags
  },

  radii: {
    sm: "0px",
    md: "0px",
    lg: "0px",
    xl: "0px",
  },

  transitions: {
    fast:    "0s",
    default: "0s",
    slow:    "0.1s linear",
  },
};

export default T;
