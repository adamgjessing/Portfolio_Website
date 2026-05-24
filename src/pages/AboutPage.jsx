// src/pages/AboutPage.jsx
// ──────────────────────────────────────────────
// ABOUT PAGE — Bio, philosophy, and contact info.
//
// Props:
//   router — the useRouter() object
// ──────────────────────────────────────────────

import T from "../theme/theme";
import SITE_CONFIG from "../data/siteConfig";
import { SECTION_CONFIG } from "../data/sectionRegistry";
import useFadeIn from "../hooks/useFadeIn";
import SectionHeader from "../components/SectionHeader";
import MetaSidebar from "../components/MetaSidebar";

export default function AboutPage({ router }) {
  const fade = useFadeIn(0);

  return (
    <div
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "120px 40px 80px",
        ...fade,
      }}
    >
      <SectionHeader title="About" onBack={router.goHome} backLabel="Home" />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
          gap: "80px",
          alignItems: "start",
        }}
      >
        {/* LEFT: Bio + Contact */}
        <div>
          <p
            style={{
              fontSize: "20px",
              lineHeight: 1.8,
              color: T.colors.textPrimary,
              margin: "0 0 32px",
              fontWeight: 300,
            }}
          >
            {SITE_CONFIG.about.intro}
          </p>

          {/* Philosophy quote */}
          <blockquote
            style={{
              fontSize: "17px",
              lineHeight: 1.7,
              color: T.colors.textSecondary,
              margin: "0 0 48px",
              fontStyle: "italic",
              paddingLeft: "24px",
              borderLeft: `2px solid ${T.colors.accent}`,
            }}
          >
            {SITE_CONFIG.about.philosophy}
          </blockquote>

          {/* Contact section */}
          <div
            style={{
              paddingTop: "40px",
              borderTop: `1px solid ${T.colors.borderSubtle}`,
            }}
          >
            <h3
              style={{
                fontFamily: T.fonts.display,
                fontSize: "24px",
                fontWeight: 600,
                margin: "0 0 16px",
              }}
            >
              Let's Connect
            </h3>
            <p
              style={{
                fontSize: "16px",
                color: T.colors.textSecondary,
                margin: "0 0 24px",
                fontWeight: 300,
              }}
            >
              Have a project in mind, or just want to say hello?
            </p>
            <a
              href={`mailto:${SITE_CONFIG.contact.email}`}
              style={{
                fontFamily: T.fonts.mono,
                fontSize: "16px",
                color: T.colors.accent,
                textDecoration: "none",
                padding: "12px 28px",
                border: `1px solid ${T.colors.accent}`,
                borderRadius: T.radii.md,
              }}
            >
              {SITE_CONFIG.contact.email}
            </a>
          </div>
        </div>

        {/* RIGHT: Sidebar */}
        <MetaSidebar
          items={[
            { label: "Location", value: "Cincinnati, OH" },
            {
              label: "Focus Areas",
              value: SITE_CONFIG.sections
                .map((s) => (SECTION_CONFIG[s] || {}).label || s)
                .join(", "),
            },
            { label: "Currently", value: "Open to opportunities" },
          ]}
        >
          {/* Social links card */}
          <div
            style={{
              background: T.colors.bgCard,
              borderRadius: T.radii.lg,
              padding: "28px",
              border: `1px solid ${T.colors.border}`,
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            <span
              style={{
                fontFamily: T.fonts.mono,
                fontSize: "10px",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: T.colors.textMuted,
                marginBottom: "4px",
              }}
            >
              Links
            </span>
            {Object.entries(SITE_CONFIG.contact).map(([key, url]) => (
              <a
                key={key}
                href={key === "email" ? `mailto:${url}` : url}
                target={key === "email" ? undefined : "_blank"}
                rel={key === "email" ? undefined : "noopener noreferrer"}
                style={{
                  fontSize: "14px",
                  color: T.colors.textSecondary,
                  textDecoration: "none",
                  fontWeight: 500,
                  padding: "6px 0",
                  borderBottom: `1px solid ${T.colors.borderSubtle}`,
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <span>{key.charAt(0).toUpperCase() + key.slice(1)}</span>
                <span style={{ color: T.colors.textMuted }}>↗</span>
              </a>
            ))}
          </div>
        </MetaSidebar>
      </div>
    </div>
  );
}
