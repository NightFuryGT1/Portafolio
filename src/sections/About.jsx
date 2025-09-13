import { Box, Container, Typography, Grid, Paper } from "@mui/material";

export default function About() {
  return (
    <Box id="sobre-mi" sx={{ py: 10 }}>
      <Container>
        <Typography variant="h2" sx={{ mb: 3 }}>Sobre mí</Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} md={7}>
            <Paper sx={{ p: 3 }}>
              <Typography color="text.secondary">
                Soy un desarrollador front-end enfocado en interfaces limpias y rendimiento.
                Me encanta trabajar con React, Material UI y animaciones sutiles.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={5}>
            <Paper sx={{ p: 3 }}>
              <Typography variant="subtitle2" color="text.secondary">Resumen</Typography>
              <Typography sx={{ mt: 1 }}>
                +1 año de experiencia desarrollando software 
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
