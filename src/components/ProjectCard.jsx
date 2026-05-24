// src/components/ProjectCard.jsx
// ──────────────────────────────────────────────
// PROJECT CARD — Clickable card for one project.
//
// This component is generic — it doesn't know if
// it's showing an analytics project or a photo
// series. It just renders whatever data you pass it.
//
// Props:
//   project — the project data object
//   variant — section key (e.g., "analytics") for color
//   onClick — function called when card is clicked
//   size    — "default" or "large" (large = horizontal layout)
// ──────────────────────────────────────────────

import { useState } from "react";
import T from "../theme/theme";
import { SECTION_CONFIG } from "../data/sectionRegistry";
import Tag from "./Tag";

// Placeholder gradients for the image area (until you add real images)
const GRADIENTS = {
  analytics: "linear-gradient(135deg, #0f1a2a 0%, #1a0f2a 50%, #0f2a1a 100%)",
  photography: "linear-gradient(135deg, #2a2210 0%, #1a2228 50%, #28221a 100%)",
};

export default function ProjectCard({ project, variant, onClick, size = "default" }) {
  const [hovered, setHovered] = useState(false);

  // Look up the section's accent color
  const config = SECTION_CONFIG[variant] || {};
  const accent = config.accent || T.colors.accent;

  const isLarge = size === "large";

  return (
    <article
      style={{
        background: hovered ? T.colors.bgCardHover : T.colors.bgCard,
        borderRadius: T.radii.lg,
        overflow: "hidden",
        border: `1px solid ${hovered ? accent + "60" : T.colors.border}`,
        transition: `all ${T.transitions.default}`,
        cursor: "pointer",
        transform: hovered ? "translateY(-3px)" : "translateY(0)",
        boxShadow: hovered ? `0 12px 40px rgba(0,0,0,0.4)` : "none",

        // Large cards span the full grid width and lay out horizontally
        gridColumn: isLarge ? "1 / -1" : "auto",
        display: isLarge ? "grid" : "block",
        gridTemplateColumns: isLarge ? "1.2fr 1fr" : "1fr",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
    >
      {/* Image area — gradient placeholder */}
      <div
        style={{
          width: "100%",
          height: isLarge ? "100%" : "200px",
          minHeight: isLarge ? "320px" : "200px",
          position: "relative",
          background: GRADIENTS[variant] || GRADIENTS.analytics,
        }}
      >
        {/* Year in corner */}
        <span
          style={{
            position: "absolute",
            bottom: "16px",
            right: "16px",
            fontFamily: T.fonts.mono,
            fontSize: "11px",
            color: "rgba(255,255,255,0.3)",
          }}
        >
          {project.year}
        </span>

        {/* Featured badge */}
        {project.featured && (
          <span
            style={{
              position: "absolute",
              top: "12px",
              left: "12px",
              fontFamily: T.fonts.mono,
              fontSize: "10px",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: accent,
              background: `${accent}18`,
              padding: "4px 10px",
              borderRadius: T.radii.sm,
              border: `1px solid ${accent}30`,
            }}
          >
            Featured
          </span>
        )}
      </div>

      {/* Text content */}
      <div style={{ padding: isLarge ? "36px" : "24px" }}>
        {/* Section label */}
        <div
          style={{
            fontFamily: T.fonts.mono,
            fontSize: "10px",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: accent,
            marginBottom: "12px",
          }}
        >
          {config.label || variant}
        </div>

        <h3
          style={{
            fontFamily: T.fonts.display,
            fontSize: isLarge ? "26px" : "20px",
            fontWeight: 600,
            margin: "0 0 12px",
            lineHeight: 1.3,
          }}
        >
          {project.title}
        </h3>

        <p
          style={{
            fontSize: "14px",
            color: T.colors.textSecondary,
            margin: "0 0 20px",
            lineHeight: 1.7,
          }}
        >
          {project.description}
        </p>

        {/* Tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
          {project.tags.map((tag) => (
            <Tag key={tag} label={tag} accent={accent} />
          ))}
        </div>

        {/* "View Case Study" link — only on large cards */}
        {isLarge && (
          <div
            style={{
              fontFamily: T.fonts.mono,
              fontSize: "12px",
              color: accent,
              marginTop: "24px",
              paddingTop: "16px",
              borderTop: `1px solid ${T.colors.borderSubtle}`,
            }}
          >
            View Case Study →
          </div>
        )}
      </div>
    </article>
  );
}
