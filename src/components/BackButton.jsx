// src/components/BackButton.jsx
// ──────────────────────────────────────────────
// BACK BUTTON — "← Back" navigation link.
//
// Props:
//   onClick — function called when clicked
//   label   — text after the arrow (e.g., "Home")
// ──────────────────────────────────────────────

import { useState } from "react";
import T from "../theme/theme";

export default function BackButton({ onClick, label }) {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "none",
        border: "none",
        color: hovered ? T.colors.textPrimary : T.colors.textMuted,
        fontFamily: T.fonts.mono,
        fontSize: "12px",
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        cursor: "pointer",
        padding: 0,
        marginBottom: "32px",
        transition: `color ${T.transitions.fast}`,
      }}
    >
      ← {label || "Back"}
    </button>
  );
}
