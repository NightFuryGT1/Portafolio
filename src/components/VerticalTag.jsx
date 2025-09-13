import { Box } from "@mui/material";

/** Etiquetas verticales decorativas (borde derecho/izquierdo) */
export default function VerticalTag({ text = "< work done >", side = "right" }) {
  const common = {
    position: "fixed",
    top: "50%",
    transform: "translateY(-50%)",
    bgcolor: "transparent",
    color: "text.disabled",
    letterSpacing: 2,
    fontSize: 12,
    opacity: 0.6,
    writingMode: "vertical-rl",
    textOrientation: "mixed",
    userSelect: "none",
    pointerEvents: "none",
  };
  return (
    <Box sx={{ ...common, [side]: 8 }}>
      {text}
    </Box>
  );
}
