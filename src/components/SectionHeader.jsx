// src/components/SectionHeader.jsx
// ──────────────────────────────────────────────
// SECTION HEADER — Title bar for a page section.
// Shows a colored accent bar, title, optional
// project count, optional description, and
// optional back button.
//
// Props:
//   title       — section name
//   count       — number of projects (optional)
//   accent      — bar color (optional, defaults to gold)
//   description — paragraph below the title (optional)
//   onBack      — if provided, shows a back button
//   backLabel   — text for the back button
// ──────────────────────────────────────────────

import T from "../theme/theme";
import BackButton from "./BackButton";

export default function SectionHeader({ title, count, accent, description, onBack, backLabel }) {
  return (
    <div style={{ marginBottom: "48px" }}>
      {/* Back button — only shows if onBack is provided */}
      {onBack && <BackButton onClick={onBack} label={backLabel} />}

      {/* Title row */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: description ? "16px" : "0",
          paddingBottom: "20px",
          borderBottom: `1px solid ${T.colors.borderSubtle}`,
        }}
      >
        {/* Left: accent bar + title */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: "3px",
              height: "28px",
              borderRadius: "2px",
              background: accent || T.colors.accent,
            }}
          />
          <h2
            style={{
              fontFamily: T.fonts.display,
              fontSize: "32px",
              fontWeight: 600,
              letterSpacing: "-0.02em",
              margin: 0,
            }}
          >
            {title}
          </h2>
        </div>

        {/* Right: project count */}
        {count !== undefined && (
          <span
            style={{
              fontFamily: T.fonts.mono,
              fontSize: "12px",
              color: T.colors.textMuted,
            }}
          >
            {count} project{count !== 1 ? "s" : ""}
          </span>
        )}
      </div>

      {/* Description — only shows if provided */}
      {description && (
        <p
          style={{
            fontSize: "16px",
            color: T.colors.textSecondary,
            lineHeight: 1.7,
            margin: 0,
            maxWidth: "640px",
            fontWeight: 300,
          }}
        >
          {description}
        </p>
      )}
    </div>
  );
}
