// src/App.jsx
import { Box, useMediaQuery } from "@mui/material";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import TopBar from "./components/TopBar";
import Sidebar, { DRAWER_WIDTH } from "./components/Sidebar";
import VerticalTag from "./components/VerticalTag";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Work from "./sections/Work";
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
    </>
  );
}

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const mdUp = useMediaQuery("(min-width:900px)");

  return (
    <Box sx={{ display: "flex" }}>
      {/* AppBar SOLO en móvil */}
      {!mdUp && <TopBar onOpenMenu={() => setMobileOpen(true)} />}

      {/* Sidebar responsive (temporal en móvil, permanente en escritorio) */}
      <Sidebar mobileOpen={mobileOpen} onClose={() => setMobileOpen(false)} />

      {/* Contenido principal */}
      <Box
        component="main"
        sx={{
          width: "100%",
          ml: { md: `${DRAWER_WIDTH}px` }, // deja espacio para el drawer en md+
          pt: { xs: "64px", sm: "64px", md: 0 }, // espacio arriba solo cuando hay AppBar (móvil)
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/docs" element={<Docs />} />
        </Routes>
      </Box>

      {/* Etiquetas decorativas: visibles solo en lg+ */}
      <Box sx={{ display: { xs: "none", lg: "block" } }}>
        <VerticalTag side="left" text="< scroll down >" />
        <VerticalTag side="right" text="< work done >" />
      </Box>
    </Box>
  );
}
