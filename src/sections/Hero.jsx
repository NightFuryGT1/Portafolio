// src/sections/Hero.jsx
import { Box, Typography, Button, Stack, Container } from "@mui/material";
import Cube3D from "../components/Cube3D";

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

                  {/* DERECHA: Cubo 3D (reemplaza la imagen) */}
        <Box
          sx={{
            flex: { md: "0 0 480px" },
            width: { xs: "100%", md: 480 },
            ml: { md: "auto" },
            display: { xs: "none", md: "block" }
          }}
        >
              <Cube3D size={460} />
          </Box>

        </Stack>
      </Container>
    </Box>
  );
}
