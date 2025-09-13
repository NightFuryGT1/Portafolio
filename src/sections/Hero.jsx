// src/sections/Hero.jsx
import { Box, Typography, Button, Stack, Container } from "@mui/material";

export default function Hero() {
  return (
    <Box id="inicio" sx={{ minHeight: "100dvh", display: "flex", alignItems: "center" }}>
      <Container sx={{ px: { xs: 3, md: 6 } }}>
        {/* Layout: columna en XS, fila en MD+ */}
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={{ xs: 4, md: 20 }}
          alignItems="center"
        >
          {/* IZQUIERDA: Texto */}
          <Box sx={{ flex: 1, minWidth: 0 }}>
            <Stack spacing={3} maxWidth={900}>
              <Typography variant="overline" sx={{ color: "text.disabled" }}>
                {"</>"} hola mundo
              </Typography>

              <Typography variant="h1" sx={{ fontSize: { xs: 44, md: 72 }, lineHeight: 1.05 }}>
                Hola, <br />
                soy{" "}
                <Typography
                  component="span"
                  variant="inherit"
                  color="primary.main"
                  sx={{ textShadow: "0 0 18px rgba(0,229,191,.25)" }}
                >
                  Armando
                </Typography>
                , <br />
                desarrollador web
              </Typography>

              <Typography variant="body1" color="text.secondary">
                Front End Developer 
              </Typography>

              <Stack direction="row" spacing={2} sx={{ pt: 1 }}>
                <Button
                  variant="outlined"
                  color="primary"
                  size="large"
                  onClick={() =>
                    document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  ¡Contáctame!
                </Button>
              </Stack>

              <Typography variant="caption" sx={{ color: "text.disabled" }}>
                {"</>"} &nbsp; construyendo experiencias web limpias, rápidas y accesibles
              </Typography>
            </Stack>
          </Box>

          {/* DERECHA: Imagen */}
          <Box
            sx={{
              flex: { md: "0 0 480px" },   // ancho fijo agradable en md+
              width: { xs: "100%", md: 440 },
              ml: { md: "auto" },          // empuja hacia la derecha
              display: { xs: "block", md: "block" },
            }}
          >
            <Box
              sx={{
                position: "relative",
                width: "100%",
                aspectRatio: "4 / 6",
                borderRadius: 4,
                overflow: "hidden",
                border: "1px solid",
                borderColor: "divider",
                boxShadow: "0 10px 30px rgba(0,0,0,.35)",
                transition: "transform .3s ease, box-shadow .3s ease",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: "0 16px 40px rgba(0,0,0,.45)",
                },
              }}
            >
              <Box
                component="img"
                src="/img/Armando.jpg"  // ¡ojo al nombre con mayúscula!
                alt="Armando - Desarrollador web"
                sx={{ width: "100%", height: "100%", objectFit: "cover", filter: "grayscale(10%)" }}
              />

              {/* Tarjeta decorativa */}
              <Box
                sx={{
                  position: "absolute",
                  bottom: 12,
                  left: 12,
                  bgcolor: "rgba(0,0,0,.55)",
                  border: "1px solid",
                  borderColor: "rgba(255,255,255,.08)",
                  px: 1.2,
                  py: 0.5,
                  borderRadius: 2,
                  backdropFilter: "blur(6px)",
                  fontSize: 12,
                  letterSpacing: 0.3,
                }}
              >
                &lt;/&gt; React • MUI
              </Box>
            </Box>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
