// src/sections/Skills.jsx
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Stack,
  Chip,
  Tooltip,
  Divider
} from "@mui/material";

const skills = [
  {
    name: "React",
    logo: "/logos/React.png",
    desc: "SPAs rápidas con hooks, rutas y estado."
  },
  {
    name: "Material UI",
    logo: "/logos/MUI.png",
    desc: "Componentes accesibles y tema consistente."
  },
  {
    name: "JavaScript",
    logo: "/logos/Javascriptpng.png",
    desc: "ES6+, asincronía (promesas/async), DOM."
  },
  {
    name: "Node.js",
    logo: "/logos/Node.png",
    desc: "APIs y tareas backend con NPM/Yarn."
  },
  {
    name: "Express",
    logo: "/logos/Express.png",
    desc: "REST APIs, middlewares y seguridad básica."
  },
  {
    name: "MySQL",
    logo: "/logos/mysql.png",
    desc: "Modelado relacional, consultas y joins."
  },
  {
    name: "Git",
    logo: "/logos/git.png",
    desc: "Flujos con ramas, PRs y tags."
  },
  {
    name: "NestJS",
    logo: "/logos/nestjs.svg",
    desc: "APIs modulares con TypeScript."
  },
];

export default function Skills() {
  return (
    <Box id="habilidades" sx={{ py: 10, bgcolor: "background.paper" }}>
      <Container>
        <Stack direction="row" alignItems="baseline" justifyContent="space-between" sx={{ mb: 3 }}>
          <Typography variant="h2">Mis Skills</Typography>
          <Chip label="Tecnologías" color="primary" variant="outlined" />
        </Stack>

        <Grid container spacing={2}>
          {skills.map((t) => (
            <Grid key={t.name} item xs={12} sm={6} md={4} lg={3}>
              <Card
                variant="outlined"
                sx={{
                  height: "100%",
                  transition: "transform .2s ease, box-shadow .2s ease",
                  "&:hover": { transform: "translateY(-4px)", boxShadow: 6 }
                }}
              >
                <CardContent>
                  <Stack direction="row" spacing={2} alignItems="center">
                    <Box
                      component="img"
                      src={t.logo}
                      alt={t.name}
                      onError={(e) => (e.currentTarget.style.display = "none")}
                      sx={{
                        width: 36,
                        height: 36,
                        objectFit: "contain",
                        filter: "drop-shadow(0 0 6px rgba(0,0,0,.3))"
                      }}
                    />
                    <Typography variant="subtitle1" fontWeight={600}>
                      {t.name}
                    </Typography>
                  </Stack>

                  <Typography color="text.secondary" sx={{ mt: 1 }}>
                    {t.desc}
                  </Typography>

                  <Divider sx={{ my: 1.5, opacity: 0.16 }} />

                  <Tooltip title="Experiencia práctica / proyectos" placement="top" arrow>
                    <Stack direction="row" spacing={1}>
                      <Chip size="small" label="Práctico" variant="outlined" />
                      <Chip size="small" label="En proyectos" variant="outlined" />
                    </Stack>
                  </Tooltip>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
