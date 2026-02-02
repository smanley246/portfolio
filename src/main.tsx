/*
  * File: src/main.tsx
  * Author: Samuel Manley
  * Last Modified: February 1st, 2026
  *
  * Description: Main entry point for the React application.
*/

import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

import MainPage from "./pages/MainPage";
import ResumePage from "./pages/ResumePage";
import TemplatePage from "./pages/TemplatePage";
import ProjectsPage from "./pages/ProjectsPage";
import ProjectDetailPage from "./sections/projects/ProjectDetailPage";
import WorkPage from "./pages/WorkPage";
import WorkDetailPage from "./sections/workSections/WorkDetailPage";
import AboutPage from "./pages/AboutPage";
import EducationPage from "./pages/EducationPage";
import CourseDetailPage from "./pages/CourseDetailPage";
import ScrollToTop from "./utils/ScrollToTop";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route path="/template" element={<TemplatePage />} />
        <Route path="/education" element={<EducationPage />} />
        <Route path="/education/:slug" element={<CourseDetailPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:slug" element={<ProjectDetailPage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/work/:slug" element={<WorkDetailPage />} />
      </Routes>

      {/* Vercel */}
      <Analytics />
      <SpeedInsights />
    </BrowserRouter>
  </React.StrictMode>
);
