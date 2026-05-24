// src/pages/HomePage.jsx
// ──────────────────────────────────────────────
// HOME PAGE — The hub. Shows:
//   1. Hero section (name, tagline)
//   2. Featured projects from each section
//   3. About preview
//   4. Footer
//
// This page auto-generates sections from
// SITE_CONFIG.sections — add a section there
// and it appears here automatically.
// ──────────────────────────────────────────────

import T from "../theme/theme";
import SITE_CONFIG from "../data/siteConfig";
import { SECTION_DATA, SECTION_CONFIG } from "../data/sectionRegistry";
import useFadeIn from "../hooks/useFadeIn";
import ProjectCard from "../components/ProjectCard";
import ViewAllButton from "../components/ViewAllButton";
import FooterSection from "./FooterSection";

export default function HomePage({ router }) {
  const fadeHero = useFadeIn(0);
  const fadeSections = useFadeIn(200);

  return (
    <div>
      {/* ─── HERO ─── */}
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "120px 40px 80px",
          position: "relative",
          ...fadeHero,
        }}
      >
        <div style={{ maxWidth: "700px" }}>
          {/* Small label above name */}
          <p
            style={{
              fontFamily: T.fonts.mono,
              fontSize: "12px",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: T.colors.accent,
              marginBottom: "24px",
            }}
          >
            Portfolio
          </p>

          {/* Name */}
          <h1
            style={{
              fontFamily: T.fonts.display,
              fontSize: "clamp(40px, 6vw, 72px)",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              margin: "0 0 24px",
            }}
          >
            {SITE_CONFIG.name}
          </h1>

          {/* Gold divider */}
          <div
            style={{
              width: "48px",
              height: "1px",
              background: T.colors.accent,
              margin: "0 auto 24px",
            }}
          />

          {/* Tagline */}
          <p
            style={{
              fontFamily: T.fonts.display,
              fontSize: "24px",
              fontStyle: "italic",
              color: T.colors.textSecondary,
              margin: "0 0 12px",
            }}
          >
            {SITE_CONFIG.tagline}
          </p>

          {/* Subtitle */}
          <p
            style={{
              fontSize: "16px",
              color: T.colors.textMuted,
              margin: "0 0 40px",
              fontWeight: 300,
            }}
          >
            {SITE_CONFIG.subtitle}
          </p>

          {/* Section labels ("Analytics · Photography") */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "8px",
            }}
          >
            {SITE_CONFIG.sections.map((section, i) => (
              <span
                key={section}
                style={{
                  fontFamily: T.fonts.mono,
                  fontSize: "12px",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: T.colors.textSecondary,
                }}
              >
                {i > 0 && " · "}
                {(SECTION_CONFIG[section] || {}).label || section}
              </span>
            ))}
          </div>
        </div>

        {/* Scroll hint line */}
        <div style={{ position: "absolute", bottom: "40px" }}>
          <div
            style={{
              width: "1px",
              height: "48px",
              background: `linear-gradient(to bottom, ${T.colors.textMuted}, transparent)`,
            }}
          />
        </div>
      </section>

      {/* ─── FEATURED WORK — one block per section ─── */}
      <div style={fadeSections}>
        {SITE_CONFIG.sections.map((sectionKey) => {
          const config = SECTION_CONFIG[sectionKey] || {};
          const projects = SECTION_DATA[sectionKey] || [];

          // Show featured projects, or first 2 if none are featured
          const featured = projects.filter((p) => p.featured);
          const display = featured.length > 0 ? featured : projects.slice(0, 2);

          return (
            <section
              key={sectionKey}
              style={{ maxWidth: "1200px", margin: "0 auto", padding: "80px 40px" }}
            >
              {/* Section header with "View All" button */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "40px",
                  paddingBottom: "20px",
                  borderBottom: `1px solid ${T.colors.borderSubtle}`,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                  <div
                    style={{
                      width: "3px",
                      height: "28px",
                      borderRadius: "2px",
                      background: config.accent || T.colors.accent,
                    }}
                  />
                  <h2
                    style={{
                      fontFamily: T.fonts.display,
                      fontSize: "32px",
                      fontWeight: 600,
                      margin: 0,
                    }}
                  >
                    {config.label || sectionKey}
                  </h2>
                </div>
                <ViewAllButton
                  onClick={() => router.goSection(sectionKey)}
                  accent={config.accent}
                />
              </div>

              {/* Project cards */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
                  gap: "24px",
                }}
              >
                {display.map((project, i) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    variant={sectionKey}
                    size={i === 0 && display.length > 1 ? "large" : "default"}
                    onClick={() => router.goProject(sectionKey, project.id)}
                  />
                ))}
              </div>
            </section>
          );
        })}
      </div>

      {/* ─── ABOUT PREVIEW ─── */}
      <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "80px 40px" }}>
        <div
          style={{
            background: T.colors.bgCard,
            border: `1px solid ${T.colors.border}`,
            borderRadius: T.radii.xl,
            padding: "48px",
          }}
        >
          <p
            style={{
              fontFamily: T.fonts.mono,
              fontSize: "11px",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: T.colors.accent,
              marginBottom: "16px",
            }}
          >
            About
          </p>
          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.7,
              color: T.colors.textPrimary,
              margin: "0 0 20px",
              fontWeight: 300,
            }}
          >
            {SITE_CONFIG.about.intro}
          </p>
          <button
            onClick={router.goAbout}
            style={{
              background: "none",
              border: "none",
              color: T.colors.accent,
              fontFamily: T.fonts.mono,
              fontSize: "12px",
              cursor: "pointer",
              padding: 0,
            }}
          >
            More about me →
          </button>
        </div>
      </section>

      <FooterSection />
    </div>
  );
}
