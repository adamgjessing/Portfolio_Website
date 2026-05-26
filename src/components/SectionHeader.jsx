// src/components/SectionHeader.jsx — Early 2000s Edition

import T from "../theme/theme";
import BackButton from "./BackButton";

export default function SectionHeader({ title, count, accent, description, onBack, backLabel }) {
  return (
    <div style={{ marginBottom: "40px" }}>
      {onBack && <BackButton onClick={onBack} label={backLabel} />}

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: description ? "14px" : "0",
          paddingBottom: "12px",
          borderBottom: `1px solid ${accent || T.colors.accent}`,
          boxShadow: `0 1px 0 ${T.colors.borderSubtle}`,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <span style={{ color: T.colors.accentAlt, fontFamily: T.fonts.mono, fontSize: "14px" }}>►</span>
          <h2
            style={{
              fontFamily: T.fonts.display,
              fontSize: "24px",
              fontWeight: "bold",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              margin: 0,
              color: accent || T.colors.accent,
              textShadow: `0 0 12px rgba(0,204,255,0.4)`,
            }}
          >
            {title}
          </h2>
        </div>

        {count !== undefined && (
          <span
            style={{
              fontFamily: T.fonts.mono,
              fontSize: "10px",
              color: T.colors.textMuted,
              letterSpacing: "0.1em",
              border: `1px solid ${T.colors.border}`,
              padding: "3px 10px",
            }}
          >
            {count} project{count !== 1 ? "s" : ""}
          </span>
        )}
      </div>

      {description && (
        <p
          style={{
            fontSize: "13px",
            color: T.colors.textSecondary,
            lineHeight: 1.8,
            margin: 0,
            maxWidth: "640px",
            fontFamily: T.fonts.body,
          }}
        >
          {description}
        </p>
      )}
    </div>
  );
}
