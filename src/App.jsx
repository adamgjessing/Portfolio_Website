// src/App.jsx
// ──────────────────────────────────────────────
// APP — The assembler. Early 2000s Edition.
// ──────────────────────────────────────────────

import { useEffect } from "react";
import T from "./theme/theme";
import useRouter from "./hooks/useRouter";
import Nav from "./components/Nav";
import HomePage from "./pages/HomePage";
import SectionPage from "./pages/SectionPage";
import ProjectPage from "./pages/ProjectPage";
import AboutPage from "./pages/AboutPage";

export default function App() {
  const router = useRouter();
  const { route } = router;

  // Inject early-2000s global CSS
  useEffect(() => {
    const style = document.createElement("style");
    style.id = "theme-2000s";
    style.innerHTML = `
      * { box-sizing: border-box; }

      body {
        margin: 0;
        background: #000000;
        cursor: crosshair;
      }

      ::-webkit-scrollbar { width: 8px; }
      ::-webkit-scrollbar-track { background: #000; border-left: 1px solid #003355; }
      ::-webkit-scrollbar-thumb { background: #00CCFF; }
      ::-webkit-scrollbar-thumb:hover { background: #00FFFF; }

      ::selection { background: #00CCFF; color: #000000; }

      @keyframes blink {
        0%, 100% { opacity: 1; }
        50%       { opacity: 0; }
      }

      @keyframes glow-pulse {
        0%, 100% { text-shadow: 0 0 8px #00CCFF, 0 0 16px #00CCFF; }
        50%       { text-shadow: 0 0 3px #00CCFF; }
      }

      .blink { animation: blink 1s step-end infinite; }
      .glow  { animation: glow-pulse 3s ease-in-out infinite; }

      marquee { white-space: nowrap; }

      hr.pixel-hr {
        border: none;
        height: 2px;
        background: linear-gradient(to right, transparent, #00CCFF, #FF00FF, #00CCFF, transparent);
        margin: 0;
      }
    `;
    document.head.appendChild(style);
    return () => {
      const el = document.getElementById("theme-2000s");
      if (el) el.remove();
    };
  }, []);

  const renderPage = () => {
    switch (route.page) {
      case "home":
        return <HomePage router={router} />;
      case "section":
        return <SectionPage sectionKey={route.params.section} router={router} />;
      case "project":
        return (
          <ProjectPage
            sectionKey={route.params.section}
            projectId={route.params.projectId}
            router={router}
          />
        );
      case "about":
        return <AboutPage router={router} />;
      default:
        return <HomePage router={router} />;
    }
  };

  return (
    <div
      style={{
        fontFamily: T.fonts.body,
        color: T.colors.textPrimary,
        minHeight: "100vh",
        lineHeight: 1.6,
        background: `
          linear-gradient(rgba(0,204,255,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,204,255,0.03) 1px, transparent 1px),
          #000000
        `,
        backgroundSize: "40px 40px",
        position: "relative",
      }}
    >
      <Nav router={router} />
      {renderPage()}
    </div>
  );
}
