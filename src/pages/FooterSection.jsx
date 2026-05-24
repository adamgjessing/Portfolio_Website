// src/pages/FooterSection.jsx
// ──────────────────────────────────────────────
// FOOTER — Bottom bar with copyright + social links.
// ──────────────────────────────────────────────

import T from "../theme/theme";
import SITE_CONFIG from "../data/siteConfig";

export default function FooterSection() {
  return (
    <footer
      style={{
        borderTop: `1px solid ${T.colors.border}`,
        marginTop: "40px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "48px 40px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Copyright */}
        <p
          style={{
            fontFamily: T.fonts.mono,
            fontSize: "11px",
            color: T.colors.textMuted,
            margin: 0,
          }}
        >
          © {new Date().getFullYear()} {SITE_CONFIG.name}
        </p>

        {/* Social links (auto-generated, skips email) */}
        <div style={{ display: "flex", gap: "20px" }}>
          {Object.entries(SITE_CONFIG.contact)
            .filter(([key]) => key !== "email")
            .map(([key, url]) => (
              <a
                key={key}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: T.fonts.body,
                  fontSize: "13px",
                  color: T.colors.textMuted,
                  textDecoration: "none",
                }}
              >
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </a>
            ))}
        </div>
      </div>
    </footer>
  );
}
