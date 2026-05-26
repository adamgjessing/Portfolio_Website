// src/components/Nav.jsx
// Early 2000s nav bar — solid dark, bevel buttons, cyan accents

import { useState } from "react";
import T from "../theme/theme";
import SITE_CONFIG from "../data/siteConfig";
import { SECTION_CONFIG } from "../data/sectionRegistry";

export default function Nav({ router }) {
  const { route, goHome, goSection, goAbout } = router;
  const currentPage = route.page;

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: "linear-gradient(to bottom, #000033, #000011)",
        borderBottom: `2px solid ${T.colors.accent}`,
        boxShadow: `0 2px 12px rgba(0, 204, 255, 0.3)`,
      }}
    >
      {/* Top cyan stripe */}
      <div style={{ height: "2px", background: `linear-gradient(to right, transparent, #00CCFF, #FF00FF, #00CCFF, transparent)` }} />

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 24px",
          height: "52px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <button
          onClick={goHome}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            padding: 0,
          }}
        >
          <span style={{ color: T.colors.accent, fontFamily: T.fonts.mono, fontSize: "14px" }}>
            ★
          </span>
          <span
            className="glow"
            style={{
              fontFamily: T.fonts.display,
              fontSize: "16px",
              fontWeight: "bold",
              color: T.colors.accent,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              textShadow: `0 0 8px ${T.colors.accent}`,
            }}
          >
            {SITE_CONFIG.name.split(" ")[0]}
          </span>
          <span style={{ color: "#FF00FF", fontFamily: T.fonts.mono, fontSize: "14px" }}>
            ★
          </span>
        </button>

        {/* Navigation links */}
        <div style={{ display: "flex", gap: "2px" }}>
          {SITE_CONFIG.sections.map((section) => {
            const config = SECTION_CONFIG[section] || {};
            const isActive =
              (currentPage === "section" && route.params.section === section) ||
              (currentPage === "project" && route.params.section === section);

            return (
              <NavButton
                key={section}
                label={config.label || section}
                isActive={isActive}
                onClick={() => goSection(section)}
              />
            );
          })}
          <NavButton
            label="About"
            isActive={currentPage === "about"}
            onClick={goAbout}
          />
        </div>
      </div>
    </nav>
  );
}

function NavButton({ label, isActive, onClick }) {
  const [hovered, setHovered] = useState(false);
  const active = isActive || hovered;

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: active
          ? "linear-gradient(to bottom, #003366, #001A44)"
          : "linear-gradient(to bottom, #001A33, #000A1A)",
        border: active
          ? `1px solid ${T.colors.accent}`
          : "1px solid #003355",
        color: active ? T.colors.accent : T.colors.textSecondary,
        fontFamily: T.fonts.body,
        fontSize: "11px",
        fontWeight: "bold",
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        cursor: "pointer",
        padding: "6px 14px",
        textShadow: active ? `0 0 6px ${T.colors.accent}` : "none",
        boxShadow: active ? `0 0 8px rgba(0,204,255,0.3), inset 0 1px 0 rgba(0,204,255,0.2)` : "none",
      }}
    >
      {label}
    </button>
  );
}
