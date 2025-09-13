import { Box, Container, Typography, Grid, Card, CardContent, CardActionArea } from "@mui/material";

const proyectos = [
  { title: "Desarrollo de Aplicaciones Web", desc: "UI limpia con MUI y Vite", link: "#" },
  { title: "Desarrollo de Aplicaciones Movil", desc: "React Native", link: "#" },
];

export default function Work() {
  return (
    <Box id="trabajo" sx={{ py: 10 }}>
      <Container>
        <Typography variant="h2" sx={{ mb: 3 }}>Trabajo</Typography>
        <Grid container spacing={3}>
          {proyectos.map((p) => (
            <Grid key={p.title} item xs={12} md={4}>
              <Card variant="outlined" sx={{ height: "100%" }}>
                <CardActionArea href={p.link}>
                  <CardContent>
                    <Typography variant="h6">{p.title}</Typography>
                    <Typography color="text.secondary">{p.desc}</Typography>
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
