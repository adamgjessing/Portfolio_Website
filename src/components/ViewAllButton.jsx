// src/components/ViewAllButton.jsx
// ──────────────────────────────────────────────
// VIEW ALL BUTTON — "View All →" link button.
// Used on the homepage next to section headers.
//
// Props:
//   onClick — navigation function
//   accent  — border color on hover
// ──────────────────────────────────────────────

import { useState } from "react";
import T from "../theme/theme";

export default function ViewAllButton({ onClick, accent }) {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "none",
        border: `1px solid ${hovered ? accent || T.colors.accent : T.colors.border}`,
        color: hovered ? T.colors.textPrimary : T.colors.textSecondary,
        fontFamily: T.fonts.mono,
        fontSize: "11px",
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        cursor: "pointer",
        padding: "8px 20px",
        borderRadius: T.radii.md,
        transition: `all ${T.transitions.fast}`,
      }}
    >
      View All →
    </button>
  );
}
