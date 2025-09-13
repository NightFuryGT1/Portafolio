import { Box, Container, Typography, Chip, Stack, Paper } from "@mui/material";

const skills = ["React", "Material UI", "JavaScript", "HTML", "CSS", "Vite", "Git", "Responsive", "API REST"];

export default function Skills() {
  return (
    <Box id="habilidades" sx={{ py: 10, bgcolor: "background.paper" }}>
      <Container>
        <Typography variant="h2" sx={{ mb: 3 }}>Mis Skills</Typography>
        <Paper sx={{ p: 3 }}>
          <Stack direction="row" flexWrap="wrap" gap={1.2}>
            {skills.map((s) => (
              <Chip key={s} label={s} variant="outlined" color="primary" />
            ))}
          </Stack>
        </Paper>
      </Container>
    </Box>
  );
}
