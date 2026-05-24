// src/components/Nav.jsx
// ──────────────────────────────────────────────
// NAV — Fixed navigation bar at the top.
//
// Auto-generates links from SITE_CONFIG.sections.
// Highlights the active section using its accent color.
//
// Props:
//   router — the useRouter() object
// ──────────────────────────────────────────────

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
        background: "rgba(10, 10, 12, 0.88)",
        backdropFilter: "blur(24px)",
        borderBottom: `1px solid ${T.colors.borderSubtle}`,
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 40px",
          height: "64px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo — clicks to home */}
        <button
          onClick={goHome}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "6px",
            padding: 0,
          }}
        >
          <span
            style={{
              fontFamily: T.fonts.display,
              fontSize: "20px",
              fontWeight: 600,
              color: T.colors.textPrimary,
            }}
          >
            {SITE_CONFIG.name.split(" ")[0]}
          </span>
          <span
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              background: T.colors.accent,
            }}
          />
        </button>

        {/* Navigation links — auto-generated from sections */}
        <div style={{ display: "flex", gap: "4px" }}>
          {SITE_CONFIG.sections.map((section) => {
            const config = SECTION_CONFIG[section] || {};

            // Is this section currently active?
            const isActive =
              (currentPage === "section" && route.params.section === section) ||
              (currentPage === "project" && route.params.section === section);

            return (
              <button
                key={section}
                onClick={() => goSection(section)}
                style={{
                  background: isActive ? (config.accentMuted || T.colors.accentMuted) : "none",
                  border: "none",
                  color: isActive ? T.colors.textPrimary : T.colors.textSecondary,
                  fontFamily: T.fonts.body,
                  fontSize: "13px",
                  fontWeight: 500,
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  padding: "8px 16px",
                  borderRadius: T.radii.sm,
                  transition: `all ${T.transitions.fast}`,
                }}
              >
                {config.label || section}
              </button>
            );
          })}

          {/* About link */}
          <button
            onClick={goAbout}
            style={{
              background: currentPage === "about" ? T.colors.accentMuted : "none",
              border: "none",
              color: currentPage === "about" ? T.colors.textPrimary : T.colors.textSecondary,
              fontFamily: T.fonts.body,
              fontSize: "13px",
              fontWeight: 500,
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              cursor: "pointer",
              padding: "8px 16px",
              borderRadius: T.radii.sm,
              transition: `all ${T.transitions.fast}`,
            }}
          >
            About
          </button>
        </div>
      </div>
    </nav>
  );
}
