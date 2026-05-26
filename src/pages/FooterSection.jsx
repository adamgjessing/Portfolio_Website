// src/pages/FooterSection.jsx — Early 2000s Edition

import T from "../theme/theme";
import SITE_CONFIG from "../data/siteConfig";

export default function FooterSection() {
  return (
    <footer style={{ marginTop: "40px" }}>
      {/* Rainbow pixel divider */}
      <hr className="pixel-hr" />

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "32px 40px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "16px",
          textAlign: "center",
        }}
      >
        {/* Star decoration */}
        <div style={{ fontFamily: T.fonts.mono, fontSize: "14px", color: T.colors.accent, letterSpacing: "0.3em" }}>
          ✦ ✦ ✦
        </div>

        {/* Social links */}
        <div style={{ display: "flex", gap: "24px", flexWrap: "wrap", justifyContent: "center" }}>
          {Object.entries(SITE_CONFIG.contact)
            .filter(([key]) => key !== "email")
            .map(([key, url]) => (
              <a
                key={key}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: T.fonts.mono,
                  fontSize: "10px",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: T.colors.accent,
                  textDecoration: "none",
                  border: `1px solid ${T.colors.border}`,
                  padding: "4px 12px",
                }}
              >
                [ {key} ]
              </a>
            ))}
        </div>

        {/* Copyright */}
        <p
          style={{
            fontFamily: T.fonts.mono,
            fontSize: "10px",
            color: T.colors.textMuted,
            margin: 0,
            letterSpacing: "0.08em",
          }}
        >
          © {new Date().getFullYear()} {SITE_CONFIG.name} &nbsp;|&nbsp; Best viewed at 1024×768
        </p>

        <div style={{ fontFamily: T.fonts.mono, fontSize: "11px", color: "#FF00FF", letterSpacing: "0.2em", opacity: 0.6 }}>
          ★ ★ ★
        </div>
      </div>

      <hr className="pixel-hr" />
    </footer>
  );
}
