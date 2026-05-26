// src/components/ViewAllButton.jsx — Early 2000s Edition

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
        background: hovered ? "rgba(0,204,255,0.1)" : "none",
        border: `1px solid ${hovered ? T.colors.accent : T.colors.border}`,
        color: hovered ? T.colors.accent : T.colors.textSecondary,
        fontFamily: T.fonts.mono,
        fontSize: "10px",
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        cursor: "pointer",
        padding: "6px 16px",
        boxShadow: hovered ? `0 0 8px rgba(0,204,255,0.3)` : "none",
        textShadow: hovered ? `0 0 6px rgba(0,204,255,0.6)` : "none",
      }}
    >
      &gt;&gt; View All
    </button>
  );
}
