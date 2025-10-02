// src/components/TopBar.jsx
import { AppBar, Toolbar, IconButton, Typography, Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export default function TopBar({ onOpenMenu }) {
  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{ bgcolor: "background.paper", borderBottom: "1px solid", borderColor: "divider" }}
    >
      <Toolbar sx={{ gap: 1 }}>
        <IconButton
          color="inherit"
          edge="start"
          onClick={onOpenMenu}
          sx={{ display: { xs: "inline-flex", md: "none" } }}
          aria-label="Abrir menú"
        >
          <MenuIcon />
        </IconButton>

        <Typography variant="subtitle1" sx={{ flexGrow: 1 }}>
          Armando Sierra — Portafolio
        </Typography>

        <Button
          size="small"
          variant="outlined"
          onClick={() => document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" })}
          sx={{ display: { xs: "none", sm: "inline-flex" } }}
        >
          Contactar
        </Button>
      </Toolbar>
    </AppBar>
  );
}
