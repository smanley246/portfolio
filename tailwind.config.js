/*
  * File: tailwind.config.js
  * Author: Samuel Manley
  * Last Modified: April 6th, 2026
  *
  * Description: Tailwind CSS configuration for the portfolio website.
*/

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "media", // use system dark mode automatically
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: { extend: {} },
  plugins: [],
};
