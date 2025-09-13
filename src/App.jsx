// src/App.jsx
import { Box } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Sidebar, { DRAWER_WIDTH } from "./components/Sidebar";
import VerticalTag from "./components/VerticalTag";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Work from "./sections/Work";
import Blog from "./sections/Blog";
import Contact from "./sections/Contact";
import Docs from "./pages/Docs";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Work />
      <Contact />
      <Blog />
    </>
  );
}

export default function App() {
  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />

      <Box
        component="main"
        sx={{
          ml: `${DRAWER_WIDTH}px`,
          width: { xs: "100%", md: `calc(100% - ${DRAWER_WIDTH}px)` },
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/docs" element={<Docs />} />
        </Routes>
      </Box>

      <VerticalTag side="left" text="< scroll down >" />
      <VerticalTag side="right" text="< work done >" />
    </Box>
  );
}
