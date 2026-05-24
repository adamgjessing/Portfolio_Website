// src/pages/ProjectPage.jsx
// ──────────────────────────────────────────────
// PROJECT PAGE — Full case study for one project.
// Reached by clicking any project card.
//
// Layout:
//   - Hero banner with title
//   - Two columns: narrative (left) + metadata sidebar (right)
//   - Previous/Next navigation at the bottom
//
// Props:
//   sectionKey — which section this project belongs to
//   projectId  — the project's unique id
//   router     — the useRouter() object
// ──────────────────────────────────────────────

import T from "../theme/theme";
import { SECTION_DATA, SECTION_CONFIG } from "../data/sectionRegistry";
import useFadeIn from "../hooks/useFadeIn";
import BackButton from "../components/BackButton";
import MetaSidebar from "../components/MetaSidebar";
import Tag from "../components/Tag";
import ProjectNavLink from "../components/ProjectNavLink";

// Placeholder gradients (replace with real images later)
const GRADIENTS = {
  analytics: "linear-gradient(135deg, #0f1a2a 0%, #1a0f2a 50%, #0f2a1a 100%)",
  photography: "linear-gradient(135deg, #2a2210 0%, #1a2228 50%, #28221a 100%)",
};

export default function ProjectPage({ sectionKey, projectId, router }) {
  const config = SECTION_CONFIG[sectionKey] || {};
  const projects = SECTION_DATA[sectionKey] || [];
  const project = projects.find((p) => p.id === projectId);
  const fade = useFadeIn(0);
  const accent = config.accent || T.colors.accent;

  // Project not found — show error
  if (!project) {
    return (
      <div style={{ padding: "120px 40px", textAlign: "center", ...fade }}>
        <p style={{ color: T.colors.textMuted }}>Project not found.</p>
        <button
          onClick={router.goHome}
          style={{
            color: T.colors.accent,
            background: "none",
            border: "none",
            cursor: "pointer",
            fontFamily: T.fonts.mono,
            marginTop: "16px",
          }}
        >
          ← Go Home
        </button>
      </div>
    );
  }

  // Find adjacent projects for prev/next navigation
  const currentIdx = projects.findIndex((p) => p.id === projectId);
  const prevProject = currentIdx > 0 ? projects[currentIdx - 1] : null;
  const nextProject = currentIdx < projects.length - 1 ? projects[currentIdx + 1] : null;

  return (
    <div style={fade}>
      {/* ─── HERO BANNER ─── */}
      <div
        style={{
          width: "100%",
          height: "400px",
          background: GRADIENTS[sectionKey] || GRADIENTS.analytics,
          position: "relative",
          display: "flex",
          alignItems: "flex-end",
        }}
      >
        {/* Gradient overlay so text is readable */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to top, rgba(10,10,12,0.95) 0%, transparent 60%)",
          }}
        />

        {/* Title area */}
        <div
          style={{
            position: "relative",
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 40px 48px",
            width: "100%",
          }}
        >
          <BackButton
            onClick={() => router.goSection(sectionKey)}
            label={config.label || sectionKey}
          />

          <div
            style={{
              fontFamily: T.fonts.mono,
              fontSize: "10px",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: accent,
              marginBottom: "12px",
            }}
          >
            {config.label} · {project.year}
          </div>

          <h1
            style={{
              fontFamily: T.fonts.display,
              fontSize: "clamp(32px, 5vw, 48px)",
              fontWeight: 700,
              lineHeight: 1.15,
              margin: 0,
            }}
          >
            {project.title}
          </h1>
        </div>
      </div>

      {/* ─── TWO-COLUMN CONTENT ─── */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "64px 40px 80px",
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
          gap: "80px",
          alignItems: "start",
        }}
      >
        {/* LEFT: Narrative */}
        <div>
          {/* Short description */}
          <p
            style={{
              fontSize: "20px",
              lineHeight: 1.7,
              color: T.colors.textSecondary,
              margin: "0 0 40px",
              fontWeight: 300,
            }}
          >
            {project.description}
          </p>

          {/* Long description — split into paragraphs on \n\n */}
          {project.longDescription &&
            project.longDescription.split("\n\n").map((para, i) => (
              <p
                key={i}
                style={{
                  fontSize: "16px",
                  lineHeight: 1.8,
                  color: T.colors.textPrimary,
                  margin: "0 0 24px",
                  fontWeight: 300,
                }}
              >
                {para}
              </p>
            ))}

          {/* External links */}
          {project.links && (
            <div
              style={{
                display: "flex",
                gap: "16px",
                marginTop: "40px",
                paddingTop: "32px",
                borderTop: `1px solid ${T.colors.borderSubtle}`,
              }}
            >
              {project.links.live && (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: T.fonts.mono,
                    fontSize: "13px",
                    color: accent,
                    textDecoration: "none",
                    padding: "10px 24px",
                    border: `1px solid ${accent}`,
                    borderRadius: T.radii.md,
                  }}
                >
                  View Live ↗
                </a>
              )}
              {project.links.repo && (
                <a
                  href={project.links.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: T.fonts.mono,
                    fontSize: "13px",
                    color: T.colors.textSecondary,
                    textDecoration: "none",
                    padding: "10px 24px",
                    border: `1px solid ${T.colors.border}`,
                    borderRadius: T.radii.md,
                  }}
                >
                  Source Code
                </a>
              )}
            </div>
          )}

          {/* ─── PREV / NEXT ─── */}
          {(prevProject || nextProject) && (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: prevProject && nextProject ? "1fr 1fr" : "1fr",
                gap: "16px",
                marginTop: "64px",
                paddingTop: "32px",
                borderTop: `1px solid ${T.colors.borderSubtle}`,
              }}
            >
              {prevProject && (
                <ProjectNavLink
                  label="Previous"
                  title={prevProject.title}
                  onClick={() => router.goProject(sectionKey, prevProject.id)}
                  align="left"
                  accent={accent}
                />
              )}
              {nextProject && (
                <ProjectNavLink
                  label="Next"
                  title={nextProject.title}
                  onClick={() => router.goProject(sectionKey, nextProject.id)}
                  align="right"
                  accent={accent}
                />
              )}
            </div>
          )}
        </div>

        {/* RIGHT: Sidebar */}
        <MetaSidebar
          items={[
            { label: "Year", value: project.year },
            ...(project.duration ? [{ label: "Duration", value: project.duration }] : []),
            ...(project.role ? [{ label: "Role", value: project.role }] : []),
          ]}
        >
          {/* Highlights card */}
          {project.highlights && (
            <div
              style={{
                background: T.colors.bgCard,
                borderRadius: T.radii.lg,
                padding: "28px",
                border: `1px solid ${T.colors.border}`,
              }}
            >
              <span
                style={{
                  fontFamily: T.fonts.mono,
                  fontSize: "10px",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: accent,
                  display: "block",
                  marginBottom: "16px",
                }}
              >
                Key Results
              </span>
              {project.highlights.map((h, i) => (
                <div
                  key={i}
                  style={{
                    fontSize: "14px",
                    color: T.colors.textPrimary,
                    padding: "10px 0",
                    borderBottom:
                      i < project.highlights.length - 1
                        ? `1px solid ${T.colors.borderSubtle}`
                        : "none",
                    fontWeight: 300,
                  }}
                >
                  {h}
                </div>
              ))}
            </div>
          )}

          {/* Tools / Equipment card */}
          <div
            style={{
              background: T.colors.bgCard,
              borderRadius: T.radii.lg,
              padding: "28px",
              border: `1px solid ${T.colors.border}`,
            }}
          >
            <span
              style={{
                fontFamily: T.fonts.mono,
                fontSize: "10px",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: T.colors.textMuted,
                display: "block",
                marginBottom: "12px",
              }}
            >
              {sectionKey === "photography" ? "Equipment" : "Tools & Stack"}
            </span>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
              {(project.tools || project.equipment || project.tags).map((t) => (
                <Tag key={t} label={t} accent={accent} />
              ))}
            </div>
          </div>
        </MetaSidebar>
      </div>
    </div>
  );
}
