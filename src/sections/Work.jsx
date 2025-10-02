import { Box, Container, Typography, Grid, Card, CardContent, CardActionArea, Chip, Stack } from "@mui/material";

const proyectos = [
  {
    title: "Prácticas Profesionales — TSE (DG Informática)",
    desc:
      "Frontend para sistema de capacitaciones a nivel nacional con React + MUI + GitHub. Soporte en backend con Docker, Vagrant, Azure Pipelines y Spring Boot.",
    link: "#",
    pills: ["React", "MUI", "GitHub", "Docker", "Spring Boot", "CI/CD"]
  },
  
];

export default function Work() {
  return (
    <Box id="trabajo" sx={{ py: 10 }}>
      <Container>
        <Typography variant="h2" sx={{ mb: 3 }}>Experiencia & Proyectos</Typography>
        <Grid container spacing={3}>
          {proyectos.map((p) => (
            <Grid key={p.title} item xs={12} md={6}>
              <Card variant="outlined" sx={{ height: "100%" }}>
                <CardActionArea href={p.link}>
                  <CardContent>
                    <Typography variant="h6">{p.title}</Typography>
                    <Typography color="text.secondary" sx={{ mt: .5 }}>{p.desc}</Typography>
                    <Stack direction="row" spacing={1} sx={{ mt: 1.5 }} flexWrap="wrap" useFlexGap>
                      {p.pills?.map(tag => <Chip key={tag} label={tag} size="small" />)}
                    </Stack>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
