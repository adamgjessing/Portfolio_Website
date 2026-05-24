// src/hooks/useRouter.js
// ──────────────────────────────────────────────
// ROUTER HOOK — Manages which page is showing.
//
// This is a simplified router using React state.
// In production, you'd replace this with React Router
// or Next.js file-based routing for real URLs.
//
// How it works:
//   route.page   → "home", "section", "project", or "about"
//   route.params → extra info like { section: "analytics" }
//
// The convenience methods (goHome, goSection, etc.)
// are shortcuts so pages don't need to know the
// route format.
// ──────────────────────────────────────────────

import { useState, useCallback } from "react";

export default function useRouter() {
  const [route, setRoute] = useState({ page: "home", params: {} });

  // Base navigate — sets the route and scrolls to top
  const navigate = useCallback((page, params = {}) => {
    setRoute({ page, params });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // Shortcut: go to homepage
  const goHome = useCallback(() => navigate("home"), [navigate]);

  // Shortcut: go to a section page (e.g., all analytics projects)
  const goSection = useCallback(
    (section) => navigate("section", { section }),
    [navigate]
  );

  // Shortcut: go to a specific project's detail page
  const goProject = useCallback(
    (section, projectId) => navigate("project", { section, projectId }),
    [navigate]
  );

  // Shortcut: go to the about page
  const goAbout = useCallback(() => navigate("about"), [navigate]);

  return { route, navigate, goHome, goSection, goProject, goAbout };
}
