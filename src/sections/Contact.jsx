// src/sections/Contact.jsx
import { Box, Container, Typography, TextField, Button, Stack, Paper, Alert, CircularProgress } from "@mui/material";
import { useState } from "react";

const FORMSPREE_URL = "https://formspree.io/f/xkgveval"; // ← tu endpoint real

export default function Contact() {
  const [form, setForm] = useState({ nombre: "", email: "", mensaje: "" });
  const [status, setStatus] = useState({ loading: false, ok: null, msg: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validación mínima
    if (!form.nombre.trim() || !/\S+@\S+\.\S+/.test(form.email) || !form.mensaje.trim()) {
      setStatus({ loading: false, ok: false, msg: "Completa nombre, email válido y mensaje." });
      return;
    }
    setStatus({ loading: true, ok: null, msg: "" });

    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ name: form.nombre, email: form.email, message: form.mensaje }),
      });

      if (res.ok) {
        setStatus({ loading: false, ok: true, msg: "¡Gracias! Tu mensaje fue enviado." });
        setForm({ nombre: "", email: "", mensaje: "" });
      } else {
        const data = await res.json().catch(() => ({}));
        setStatus({ loading: false, ok: false, msg: data?.error || "No se pudo enviar. Intenta más tarde." });
      }
    } catch (err) {
      setStatus({ loading: false, ok: false, msg: "Error de red. Verifica tu conexión." });
    }
  };

  return (
    <Box id="contacto" sx={{ py: 10 }}>
      <Container maxWidth="md">
        <Typography variant="h2" sx={{ mb: 3 }}>Contacto</Typography>
        <Paper sx={{ p: 3 }}>
          <form onSubmit={handleSubmit} noValidate>
            <Stack spacing={2}>
              {status.ok === true && <Alert severity="success">{status.msg}</Alert>}
              {status.ok === false && <Alert severity="error">{status.msg}</Alert>}

              <TextField
                label="Nombre"
                name="nombre"
                value={form.nombre}
                onChange={handleChange}
                fullWidth
                required
              />
              <TextField
                label="Email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                fullWidth
                required
              />
              <TextField
                label="Mensaje"
                name="mensaje"
                value={form.mensaje}
                onChange={handleChange}
                fullWidth
                multiline
                rows={4}
                required
              />

              <Button
                variant="contained"
                size="large"
                color="primary"
                type="submit"
                disabled={status.loading}
                startIcon={status.loading ? <CircularProgress size={18} /> : null}
              >
                {status.loading ? "Enviando..." : "Enviar mensaje"}
              </Button>
            </Stack>
          </form>
        </Paper>
      </Container>
    </Box>
  );
}
