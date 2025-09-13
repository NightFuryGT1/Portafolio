import { Box, Container, Typography, TextField, Button, Stack, Paper } from "@mui/material";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ nombre: "", email: "", mensaje: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`¡Gracias ${form.nombre}! Me pondré en contacto contigo.`);
    setForm({ nombre: "", email: "", mensaje: "" });
  };

  return (
    <Box id="contacto" sx={{ py: 10 }}>
      <Container maxWidth="md">
        <Typography variant="h2" sx={{ mb: 3 }}>Contacto</Typography>
        <Paper sx={{ p: 3 }}>
          <form onSubmit={handleSubmit}>
            <Stack spacing={2}>
              <TextField label="Nombre" name="nombre" value={form.nombre} onChange={handleChange} fullWidth />
              <TextField label="Email" name="email" type="email" value={form.email} onChange={handleChange} fullWidth />
              <TextField
                label="Mensaje"
                name="mensaje"
                value={form.mensaje}
                onChange={handleChange}
                fullWidth
                multiline
                rows={4}
              />
              <Button variant="contained" size="large" color="primary" type="submit">
                Enviar mensaje
              </Button>
            </Stack>
          </form>
        </Paper>
      </Container>
    </Box>
  );
}
