// src/main.jsx
// ──────────────────────────────────────────────
// ENTRY POINT — You don't need to edit this file.
//
// This tells React: "Take my App component and
// render it inside the <div id="root"> in index.html."
// ──────────────────────────────────────────────

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
