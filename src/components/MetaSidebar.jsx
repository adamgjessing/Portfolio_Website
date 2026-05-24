// src/components/MetaSidebar.jsx
// ──────────────────────────────────────────────
// META SIDEBAR — Sticky column for metadata cards.
// Used on the project detail page and about page.
//
// Props:
//   items    — array of { label, value } pairs
//   children — any additional cards to render below
// ──────────────────────────────────────────────

import T from "../theme/theme";

export default function MetaSidebar({ items, children }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "32px",
        position: "sticky",
        top: "100px", // Stays visible as you scroll
      }}
    >
      {/* Main metadata card */}
      {items && (
        <div
          style={{
            background: T.colors.bgCard,
            borderRadius: T.radii.lg,
            padding: "28px",
            border: `1px solid ${T.colors.border}`,
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          {items.map((item) => (
            <div key={item.label}>
              <span
                style={{
                  fontFamily: T.fonts.mono,
                  fontSize: "10px",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: T.colors.textMuted,
                  display: "block",
                  marginBottom: "4px",
                }}
              >
                {item.label}
              </span>
              <span style={{ fontSize: "14px", fontWeight: 400 }}>
                {item.value}
              </span>
            </div>
          ))}
        </div>
      )}

      {/* Additional cards passed as children */}
      {children}
    </div>
  );
}
