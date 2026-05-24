// src/components/Tag.jsx
// ──────────────────────────────────────────────
// TAG — A small pill that displays a label.
// Used for skills ("Python"), gear ("35mm"), etc.
//
// Props:
//   label  — text to display
//   accent — optional color override
// ──────────────────────────────────────────────

import T from "../theme/theme";

export default function Tag({ label, accent }) {
  return (
    <span
      style={{
        fontFamily: T.fonts.mono,
        fontSize: "10px",
        color: accent || T.colors.textMuted,
        background: accent ? `${accent}15` : T.colors.bgElevated,
        padding: "4px 10px",
        borderRadius: T.radii.sm,
        border: `1px solid ${accent ? `${accent}25` : T.colors.borderSubtle}`,
        letterSpacing: "0.04em",
        textTransform: "uppercase",
      }}
    >
      {label}
    </span>
  );
}
