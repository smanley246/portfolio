import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import AppShell from "./components/AppShell";
import AboutPage from "./pages/AboutPage";
import EducationPage from "./pages/EducationPage";
import MainPage from "./pages/MainPage";
import ProjectsPage from "./pages/ProjectsPage";
import ResumePage from "./pages/ResumePage";
import TemplatePage from "./pages/TemplatePage";
import WorkPage from "./pages/WorkPage";
import CourseDetailPage from "./pages/CourseDetailPage";
import ProjectDetailPage from "./sections/projects/ProjectDetailPage";
import WorkDetailPage from "./sections/workSections/WorkDetailPage";

const AppRouter: React.FC = () => {
  const location = useLocation();

  return (
    <Routes location={location}>
      <Route element={<AppShell />}>
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
      </Route>
    </Routes>
  );
};

export default AppRouter;
