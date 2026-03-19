import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/home";
import { ProjectDetailsPage, ProjectsPage } from "../pages/projects";
export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projetos" element={<ProjectsPage />} />
        <Route path="/projetos/:slug" element={<ProjectDetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
}
