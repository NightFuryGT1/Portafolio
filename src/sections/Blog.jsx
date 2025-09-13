import { Box, Container, Typography, Paper } from "@mui/material";

export default function Blog() {
  return (
    <Box id="blog" sx={{ py: 10, bgcolor: "background.paper" }}>
      <Container>
        <Typography variant="h2" sx={{ mb: 3 }}>Blog</Typography>
        <Paper sx={{ p: 3 }}>
          <Typography color="text.secondary">
            Aquí irán tus artículos técnicos, tutoriales o notas. Puedes enlazar a Dev.to, Medium o tu CMS favorito.
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
}
