// src/components/BackButton.jsx — Early 2000s Edition

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
        color: hovered ? T.colors.accent : T.colors.textMuted,
        fontFamily: T.fonts.mono,
        fontSize: "11px",
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        cursor: "pointer",
        padding: 0,
        marginBottom: "28px",
        textShadow: hovered ? `0 0 6px rgba(0,204,255,0.5)` : "none",
      }}
    >
      &lt;&lt; {label || "Back"}
    </button>
  );
}
