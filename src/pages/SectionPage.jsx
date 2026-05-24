// src/pages/SectionPage.jsx
// ──────────────────────────────────────────────
// SECTION PAGE — Shows ALL projects in one category.
// Reached by clicking "View All →" or a nav link.
//
// Props:
//   sectionKey — which section to show (e.g., "analytics")
//   router     — the useRouter() object
// ──────────────────────────────────────────────

import T from "../theme/theme";
import { SECTION_DATA, SECTION_CONFIG } from "../data/sectionRegistry";
import useFadeIn from "../hooks/useFadeIn";
import SectionHeader from "../components/SectionHeader";
import ProjectCard from "../components/ProjectCard";

export default function SectionPage({ sectionKey, router }) {
  const config = SECTION_CONFIG[sectionKey] || {};
  const projects = SECTION_DATA[sectionKey] || [];
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
      <SectionHeader
        title={config.label || sectionKey}
        count={projects.length}
        accent={config.accent}
        description={config.description}
        onBack={router.goHome}
        backLabel="Home"
      />

      {/* Project grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
          gap: "24px",
        }}
      >
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            variant={sectionKey}
            onClick={() => router.goProject(sectionKey, project.id)}
          />
        ))}
      </div>
    </div>
  );
}
