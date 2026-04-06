/*
  * File: vite.config.ts
  * Author: Samuel Manley
  * Last Modified: April 6th, 2026
  *
  * Description: Vite configuration for the portfolio website.
*/

import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
});
