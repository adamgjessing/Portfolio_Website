// src/pages/HomePage.jsx
// Early 2000s Edition — blinking cursors, marquee, neon glow

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
        {/* Decorative top bar */}
        <div style={{ width: "100%", maxWidth: "700px", marginBottom: "32px" }}>
          <hr className="pixel-hr" />
        </div>

        <div style={{ maxWidth: "700px" }}>
          {/* Star decorators + label */}
          <p
            style={{
              fontFamily: T.fonts.mono,
              fontSize: "11px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: T.colors.accentAlt,
              marginBottom: "20px",
            }}
          >
            ✦ ✦ ✦ &nbsp; Portfolio &nbsp; ✦ ✦ ✦
          </p>

          {/* Name with glow */}
          <h1
            className="glow"
            style={{
              fontFamily: T.fonts.display,
              fontSize: "clamp(36px, 6vw, 68px)",
              fontWeight: "bold",
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              lineHeight: 1.15,
              margin: "0 0 8px",
              color: T.colors.accent,
              textShadow: `0 0 20px ${T.colors.accent}, 0 0 40px rgba(0,204,255,0.4)`,
            }}
          >
            {SITE_CONFIG.name}
            {/* Blinking cursor */}
            <span
              className="blink"
              style={{ color: "#FF00FF", marginLeft: "6px", fontWeight: "normal" }}
            >
              _
            </span>
          </h1>

          {/* Pixel-style divider */}
          <div style={{ margin: "20px auto", width: "100%", maxWidth: "400px" }}>
            <hr className="pixel-hr" />
          </div>

          {/* Tagline */}
          <p
            style={{
              fontFamily: T.fonts.display,
              fontSize: "18px",
              fontStyle: "italic",
              color: T.colors.textSecondary,
              margin: "0 0 10px",
            }}
          >
            {SITE_CONFIG.tagline}
          </p>

          {/* Subtitle */}
          <p
            style={{
              fontSize: "13px",
              color: T.colors.textMuted,
              margin: "0 0 32px",
              fontFamily: T.fonts.mono,
              letterSpacing: "0.05em",
            }}
          >
            {SITE_CONFIG.subtitle}
          </p>

          {/* Section chips */}
          <div style={{ display: "flex", justifyContent: "center", gap: "0", flexWrap: "wrap" }}>
            {SITE_CONFIG.sections.map((section, i) => (
              <span key={section}>
                {i > 0 && (
                  <span style={{ color: "#FF00FF", margin: "0 8px", fontFamily: T.fonts.mono }}>
                    ::
                  </span>
                )}
                <span
                  style={{
                    fontFamily: T.fonts.mono,
                    fontSize: "11px",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: T.colors.accent,
                  }}
                >
                  {(SECTION_CONFIG[section] || {}).label || section}
                </span>
              </span>
            ))}
          </div>
        </div>

        {/* Decorative bottom bar */}
        <div style={{ width: "100%", maxWidth: "700px", marginTop: "40px" }}>
          <hr className="pixel-hr" />
        </div>

        {/* Marquee ticker */}
        <div
          style={{
            position: "absolute",
            bottom: "24px",
            left: 0,
            right: 0,
            overflow: "hidden",
            borderTop: `1px solid ${T.colors.borderSubtle}`,
            borderBottom: `1px solid ${T.colors.borderSubtle}`,
            padding: "6px 0",
            background: "rgba(0,0,51,0.5)",
          }}
        >
          <marquee
            scrollamount="3"
            style={{
              fontFamily: T.fonts.mono,
              fontSize: "10px",
              letterSpacing: "0.15em",
              color: T.colors.accent,
              opacity: 0.7,
            }}
          >
            ✦ &nbsp; PHOTOGRAPHY &nbsp; ✦ &nbsp; ANALYTICS &nbsp; ✦ &nbsp; CREATIVE WORK &nbsp; ✦ &nbsp; PHOTOGRAPHY &nbsp; ✦ &nbsp; ANALYTICS &nbsp; ✦ &nbsp; CREATIVE WORK &nbsp; ✦ &nbsp; PHOTOGRAPHY &nbsp; ✦ &nbsp; ANALYTICS &nbsp;
          </marquee>
        </div>
      </section>

      {/* ─── FEATURED WORK ─── */}
      <div style={fadeSections}>
        {SITE_CONFIG.sections.map((sectionKey) => {
          const config = SECTION_CONFIG[sectionKey] || {};
          const projects = SECTION_DATA[sectionKey] || [];

          const featured = projects.filter((p) => p.featured);
          const display = featured.length > 0 ? featured : projects.slice(0, 2);

          return (
            <section
              key={sectionKey}
              style={{ maxWidth: "1200px", margin: "0 auto", padding: "64px 40px" }}
            >
              {/* Section header */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "24px",
                  paddingBottom: "12px",
                  borderBottom: `1px solid ${T.colors.accent}`,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <span style={{ color: T.colors.accentAlt, fontFamily: T.fonts.mono }}>►</span>
                  <h2
                    style={{
                      fontFamily: T.fonts.display,
                      fontSize: "22px",
                      fontWeight: "bold",
                      margin: 0,
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      color: T.colors.accent,
                      textShadow: `0 0 10px rgba(0,204,255,0.5)`,
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
                  gap: "16px",
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
      <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "64px 40px" }}>
        <div
          style={{
            background: T.colors.bgCard,
            border: `1px solid ${T.colors.border}`,
            borderTop: `2px solid ${T.colors.accent}`,
            padding: "32px",
          }}
        >
          <p
            style={{
              fontFamily: T.fonts.mono,
              fontSize: "10px",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: T.colors.accentAlt,
              marginBottom: "12px",
            }}
          >
            ✦ About Me
          </p>
          <p
            style={{
              fontSize: "13px",
              lineHeight: 1.8,
              color: T.colors.textPrimary,
              margin: "0 0 16px",
              fontFamily: T.fonts.body,
            }}
          >
            {SITE_CONFIG.about.intro}
          </p>
          <button
            onClick={router.goAbout}
            style={{
              background: "none",
              border: `1px solid ${T.colors.accent}`,
              color: T.colors.accent,
              fontFamily: T.fonts.mono,
              fontSize: "11px",
              letterSpacing: "0.1em",
              cursor: "pointer",
              padding: "6px 14px",
              textTransform: "uppercase",
            }}
          >
            &gt;&gt; More About Me
          </button>
        </div>
      </section>

      <FooterSection />
    </div>
  );
}
