// src/hooks/useFadeIn.js
// ──────────────────────────────────────────────
// FADE IN HOOK — Makes elements fade in on load.
//
// Usage: const fadeStyle = useFadeIn(200);
//        <div style={fadeStyle}>...</div>
//
// The number is the delay in milliseconds.
// ──────────────────────────────────────────────

import { useState, useEffect } from "react";

export default function useFadeIn(delay = 0) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100 + delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return {
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(16px)",
    transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
  };
}
