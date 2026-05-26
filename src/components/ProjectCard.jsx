// src/components/ProjectCard.jsx
// Early 2000s Edition — sharp corners, neon glow borders

import { useState } from "react";
import T from "../theme/theme";
import { SECTION_CONFIG } from "../data/sectionRegistry";
import Tag from "./Tag";

const GRADIENTS = {
  analytics:   "linear-gradient(135deg, #000A1A 0%, #001133 50%, #000A1A 100%)",
  photography: "linear-gradient(135deg, #0A0008 0%, #100020 50%, #080010 100%)",
};

export default function ProjectCard({ project, variant, onClick, size = "default" }) {
  const [hovered, setHovered] = useState(false);

  const config = SECTION_CONFIG[variant] || {};
  const accent = config.accent || T.colors.accent;
  const isLarge = size === "large";

  return (
    <article
      style={{
        background: hovered ? T.colors.bgCardHover : T.colors.bgCard,
        overflow: "hidden",
        border: hovered
          ? `1px solid ${T.colors.accent}`
          : `1px solid ${T.colors.border}`,
        borderTop: hovered
          ? `2px solid ${T.colors.accent}`
          : `2px solid ${T.colors.border}`,
        cursor: "pointer",
        boxShadow: hovered
          ? `0 0 16px rgba(0,204,255,0.3), 0 0 2px rgba(0,204,255,0.8), inset 0 0 20px rgba(0,204,255,0.05)`
          : "none",
        gridColumn: isLarge ? "1 / -1" : "auto",
        display: isLarge ? "grid" : "block",
        gridTemplateColumns: isLarge ? "1.2fr 1fr" : "1fr",
        transition: "box-shadow 0.1s linear, border-color 0.1s linear",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
    >
      {/* Image area */}
      <div
        style={{
          width: "100%",
          height: isLarge ? "100%" : "180px",
          minHeight: isLarge ? "280px" : "180px",
          position: "relative",
          background: GRADIENTS[variant] || GRADIENTS.analytics,
          borderBottom: isLarge ? "none" : `1px solid ${T.colors.border}`,
          borderRight: isLarge ? `1px solid ${T.colors.border}` : "none",
          overflow: "hidden",
        }}
      >
        {/* Scanline overlay */}
        <div style={{
          position: "absolute", inset: 0,
          background: "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.15) 3px, rgba(0,0,0,0.15) 4px)",
          pointerEvents: "none",
        }} />

        {/* Year */}
        <span
          style={{
            position: "absolute",
            bottom: "10px",
            right: "10px",
            fontFamily: T.fonts.mono,
            fontSize: "10px",
            color: "rgba(0,204,255,0.4)",
            letterSpacing: "0.1em",
          }}
        >
          {project.year}
        </span>

        {/* Featured badge */}
        {project.featured && (
          <span
            style={{
              position: "absolute",
              top: "10px",
              left: "10px",
              fontFamily: T.fonts.mono,
              fontSize: "9px",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#FF00FF",
              background: "rgba(255,0,255,0.1)",
              padding: "3px 8px",
              border: "1px solid rgba(255,0,255,0.4)",
            }}
          >
            ★ Featured
          </span>
        )}
      </div>

      {/* Text content */}
      <div style={{ padding: isLarge ? "28px" : "18px" }}>
        {/* Section label */}
        <div
          style={{
            fontFamily: T.fonts.mono,
            fontSize: "9px",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: T.colors.accentAlt,
            marginBottom: "8px",
          }}
        >
          ✦ {config.label || variant}
        </div>

        <h3
          style={{
            fontFamily: T.fonts.display,
            fontSize: isLarge ? "22px" : "17px",
            fontWeight: "bold",
            margin: "0 0 10px",
            lineHeight: 1.3,
            textTransform: "uppercase",
            letterSpacing: "0.03em",
            color: hovered ? T.colors.accent : T.colors.textPrimary,
            textShadow: hovered ? `0 0 8px rgba(0,204,255,0.5)` : "none",
          }}
        >
          {project.title}
        </h3>

        <p
          style={{
            fontSize: "12px",
            color: T.colors.textSecondary,
            margin: "0 0 16px",
            lineHeight: 1.7,
            fontFamily: T.fonts.body,
          }}
        >
          {project.description}
        </p>

        {/* Tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "4px" }}>
          {project.tags.map((tag) => (
            <Tag key={tag} label={tag} accent={accent} />
          ))}
        </div>

        {/* View link — large cards only */}
        {isLarge && (
          <div
            style={{
              fontFamily: T.fonts.mono,
              fontSize: "11px",
              color: T.colors.accent,
              marginTop: "20px",
              paddingTop: "12px",
              borderTop: `1px solid ${T.colors.borderSubtle}`,
              letterSpacing: "0.08em",
            }}
          >
            &gt;&gt; View Case Study
          </div>
        )}
      </div>
    </article>
  );
}
