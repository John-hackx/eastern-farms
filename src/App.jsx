import HomePage from "./Pages/HomePage";
import BlogPage from "./Pages/BlogPage";
import ContactPage from "./Pages/ContactPage";
import ProjectsPage from "./Pages/ProjectsPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageNotFound from "./Pages/PageNotFound";
import AboutPage from "./Pages/AboutPage";
import { useEffect, useState } from "react";
import ScrollTo from "./ScrollTo";

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
      <ScrollTo />
      <Routes>
        <Route path="/" element={<HomePage windowWidth={windowWidth} />} />
        <Route path="blog" element={<BlogPage windowWidth={windowWidth} />} />
        <Route
          path="contact"
          element={<ContactPage windowWidth={windowWidth} />}
        />
        <Route
          path="projects"
          element={<ProjectsPage windowWidth={windowWidth} />}
        />
        <Route path="about" element={<AboutPage windowWidth={windowWidth} />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
