import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#00e5bf" },        // acento turquesa
    background: {
      default: "#121212",                 // fondo general
      paper: "#1a1a1a",                   // tarjetas/menús
    },
    text: { primary: "#eaeaea", secondary: "#a7a7a7" },
  },
  typography: {
    fontFamily: `"Poppins", system-ui, -apple-system, "Segoe UI", Roboto, Arial`,
    h1: { fontWeight: 700, letterSpacing: -1 },
    h2: { fontWeight: 700 },
    button: { textTransform: "none", fontWeight: 600 },
  },
  shape: { borderRadius: 14 },
});
export default theme;
