// src/components/Tag.jsx — Early 2000s Edition

import T from "../theme/theme";

export default function Tag({ label, accent }) {
  return (
    <span
      style={{
        fontFamily: T.fonts.mono,
        fontSize: "9px",
        color: accent || T.colors.accent,
        background: accent ? `${accent}12` : "rgba(0,204,255,0.07)",
        padding: "3px 8px",
        border: `1px solid ${accent ? `${accent}30` : T.colors.border}`,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
      }}
    >
      {label}
    </span>
  );
}
