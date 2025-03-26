import HomePage from "./Pages/HomePage";
import BlogPage from "./Pages/BlogPage";
import ContactPage from "./Pages/ContactPage";
import ProjectsPage from "./Pages/ProjectsPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageNotFound from "./Pages/PageNotFound";
import AboutPage from "./Pages/AboutPage";
import { useEffect, useState } from "react";

export default function App() {
  const [windowWidth, setWindowWidth] = useState(() => window.innerWidth);

  useEffect(function () {
    const getWidth = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", getWidth);

    return () => window.removeEventListener("resize", getWidth);
  }, []);
  // console.log(typeof windowWidth);
  // console.log(windowWidth <= 768 && "mobile view");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage windowWidth={windowWidth} />} />
        <Route path="blog" element={<BlogPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
