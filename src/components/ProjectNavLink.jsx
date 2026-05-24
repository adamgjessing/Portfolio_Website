// src/components/ProjectNavLink.jsx
// ──────────────────────────────────────────────
// PROJECT NAV LINK — Previous / Next project link.
// Shown at the bottom of project detail pages.
//
// Props:
//   label   — "Previous" or "Next"
//   title   — the project's name
//   onClick — navigation function
//   align   — "left" or "right"
//   accent  — hover color
// ──────────────────────────────────────────────

import { useState } from "react";
import T from "../theme/theme";

export default function ProjectNavLink({ label, title, onClick, align, accent }) {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? T.colors.bgCard : "transparent",
        border: `1px solid ${hovered ? T.colors.border : "transparent"}`,
        borderRadius: T.radii.md,
        padding: "16px 20px",
        cursor: "pointer",
        textAlign: align,
        transition: `all ${T.transitions.fast}`,
      }}
    >
      <span
        style={{
          fontFamily: T.fonts.mono,
          fontSize: "10px",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: T.colors.textMuted,
          display: "block",
          marginBottom: "6px",
        }}
      >
        {label}
      </span>
      <span
        style={{
          fontFamily: T.fonts.display,
          fontSize: "16px",
          fontWeight: 600,
          color: hovered ? accent : T.colors.textPrimary,
          transition: `color ${T.transitions.fast}`,
        }}
      >
        {title}
      </span>
    </button>
  );
}
