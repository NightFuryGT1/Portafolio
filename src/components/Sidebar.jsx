import { Drawer, Box, Typography, List, ListItemButton, ListItemText, Divider, Stack, IconButton, Tooltip } from "@mui/material";
import { GitHub, LinkedIn, MailOutline, Article, Description } from "@mui/icons-material";
import { Link, useLocation, useNavigate } from "react-router-dom";

export const DRAWER_WIDTH = 220;

const items = [
  { id: "inicio", label: "Inicio", type: "anchor" },
  { id: "sobre-mi", label: "Sobre mí", type: "anchor" },
  { id: "habilidades", label: "Mis Skills", type: "anchor" },
  { id: "trabajo", label: "Trabajo", type: "anchor" },
  { id: "contacto", label: "Contacto", type: "anchor" },
  { id: "blog", label: "Blog", type: "anchor", icon: <Article fontSize="small" /> },
  { to: "/docs", label: "Documentación", type: "route", icon: <Description fontSize="small" /> },
];

function scrollToId(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Sidebar() {
  const nav = useNavigate();
  const { pathname } = useLocation();

  const go = (item) => {
    if (item.type === "route") {
      nav(item.to);
    } else {
      // si estamos en otra ruta, primero vuelve a home y luego hace scroll
      if (pathname !== "/") {
        nav("/", { replace: false });
        setTimeout(() => scrollToId(item.id), 50);
      } else {
        scrollToId(item.id);
      }
    }
  };

  return (
    <Drawer
      variant="permanent"
      PaperProps={{ sx: { width: DRAWER_WIDTH, bgcolor: "background.paper", borderRight: "1px solid #222" } }}
    >
      <Box sx={{ p: 3, display: "flex", alignItems: "center", gap: 1 }}>
        <Box sx={{ width: 34, height: 34, borderRadius: 2, bgcolor: "primary.main", color: "#111",
          display: "grid", placeItems: "center", fontWeight: 900 }}>
          A
        </Box>
        <Box>
          <Typography fontWeight={700} lineHeight={1}>Armando</Typography>
          <Typography variant="caption" color="text.secondary">Web Developer</Typography>
        </Box>
      </Box>

      <Divider />

      <List sx={{ px: 1 }}>
        {items.map((it) => (
          <ListItemButton key={it.label} onClick={() => go(it)} sx={{ borderRadius: 2, mb: .5 }}
            component={it.type === "route" ? Link : "button"} to={it.to || undefined}>
            <ListItemText primary={it.label} />
            {it.icon ?? null}
          </ListItemButton>
        ))}
      </List>

      <Box sx={{ flexGrow: 1 }} />

      <Stack direction="row" spacing={1.2} sx={{ p: 2 }}>
        <Tooltip title="GitHub">
          <IconButton size="small" color="primary" href="https://github.com/" target="_blank" rel="noreferrer">
            <GitHub fontSize="small" />
          </IconButton>
        </Tooltip>
        <Tooltip title="LinkedIn">
          <IconButton size="small" color="primary" href="https://linkedin.com/" target="_blank" rel="noreferrer">
            <LinkedIn fontSize="small" />
          </IconButton>
        </Tooltip>
        <Tooltip title="Email">
          <IconButton size="small" color="primary" href="mailto:tu.correo@ejemplo.com">
            <MailOutline fontSize="small" />
          </IconButton>
        </Tooltip>
      </Stack>

      <Typography variant="caption" sx={{ px: 2, pb: 2, color: "text.disabled" }}>
        © {new Date().getFullYear()} Armando
      </Typography>
    </Drawer>
  );
}
