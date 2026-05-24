// src/App.jsx
// ──────────────────────────────────────────────
// APP — The assembler. This is the top-level component.
//
// It does two things:
//   1. Creates the router (which page are we on?)
//   2. Renders the Nav + the correct page
//
// You rarely need to edit this file. To add a new
// section, you only touch the data/ folder.
// ──────────────────────────────────────────────

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

  // Decide which page to show based on current route
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
        background: T.colors.bg,
        color: T.colors.textPrimary,
        minHeight: "100vh",
        lineHeight: 1.6,
        WebkitFontSmoothing: "antialiased",
      }}
    >
      <Nav router={router} />
      {renderPage()}
    </div>
  );
}
