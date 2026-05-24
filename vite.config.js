import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Vite is the build tool that compiles your React code into
// something browsers can understand. This config is minimal —
// you almost never need to touch it.

export default defineConfig({
  plugins: [react()],
});
