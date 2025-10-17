// src/sections/About.jsx
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Stack,
  Chip,
  Accordion,
  AccordionSummary,
  AccordionDetails
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function About() {
  return (
    <Box id="sobre-mi" sx={{ py: 10 }}>
      <Container>
        <Typography variant="h2" sx={{ mb: 3 }}>Sobre mí</Typography>

        <Grid container spacing={3}>
          {/* Bloque destacado (pitch + badges) */}
          <Grid item xs={12} md={7}>
            <Paper
              sx={{
                p: 3,
                background:
                  "linear-gradient(145deg, rgba(0,0,0,.35), rgba(20,20,20,.35))",
                border: "1px solid",
                borderColor: "divider"
              }}
            >
              <Typography variant="h5" sx={{ mb: 1 }}>
                ¡Hola! Soy <Typography component="span" color="primary.main" fontWeight={700}>Armando Sierra</Typography>, Desarrollador de Software Jr.
              </Typography>

              <Typography color="text.secondary">
                Estudiante de Ingeniería en Sistemas (10° semestre) con base sólida en
                desarrollo web y backend. Me encanta construir interfaces limpias con
                React + Material UI y crear APIs con Node/NestJS o Java/Spring Boot.
              </Typography>

              <Stack direction="row" spacing={1} sx={{ mt: 2 }} flexWrap="wrap" useFlexGap>
                <Chip label="Trabajo en equipo" size="small" />
                <Chip label="Bajo presión" size="small" />
                <Chip label="Aprendizaje rápido" size="small" />
                <Chip label="Comunicación" size="small" />
              </Stack>

              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={2}
                sx={{ mt: 2 }}
              >
                <Paper sx={{ p: 2, flex: 1 }} variant="outlined">
                  <Typography variant="subtitle2" color="text.secondary">Stack favorito</Typography>
                  <Typography sx={{ mt: .5 }}>React • MUI • Node/NestJS • Spring Boot • Docker</Typography>
                </Paper>
                <Paper sx={{ p: 2, flex: 1 }} variant="outlined">
                  <Typography variant="subtitle2" color="text.secondary">Objetivo</Typography>
                  <Typography sx={{ mt: .5 }}>
                    Crecer como desarrollador full-stack, aportando en rendimiento, UX y buenas prácticas.
                  </Typography>
                </Paper>
              </Stack>
            </Paper>
          </Grid>

          {/* Timeline/Accordion (trayectoria y educación) */}
          <Grid item xs={12} md={5}>
            <Paper sx={{ p: 1.5 }}>
              <Accordion disableGutters defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography fontWeight={600}>Prácticas — TSE (DG Informática)</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography color="text.secondary">
                    Frontend con React + MUI para sistema de capacitaciones a nivel nacional.
                    Soporte en backend y DevOps: Docker, Vagrant, Azure Pipelines y Spring Boot.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion disableGutters>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography fontWeight={600}>Proyectos destacados</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <ul style={{ marginTop: 0 }}>
                    <li>
                      <Typography variant="body2">
                        Gestión de RRHH — React, Node.js, Express, MySQL.
                      </Typography>
                    </li>
                  </ul>
                </AccordionDetails>
              </Accordion>

              <Accordion disableGutters>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography fontWeight={600}>Formación</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography sx={{ mb: 1 }}>
                    <strong>Universidad Mariano Gálvez</strong><br />
                    Ingeniería en Sistemas — 10° semestre
                  </Typography>
                  <Typography>
                    <strong>CTS</strong><br />
                    Bachiller en Computación (2020)
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
