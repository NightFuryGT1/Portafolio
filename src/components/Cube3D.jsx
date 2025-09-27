// src/components/Cube3D.jsx
import { Box } from "@mui/material";
import { keyframes } from "@mui/system";

const spin = keyframes`
  0%   { transform: rotateX(0deg) rotateY(0deg); }
  100% { transform: rotateX(360deg) rotateY(360deg); }
`;

export default function Cube3D({ size = 440 }) {
  const faceStyle = {
    position: "absolute",
    width: "100%",
    height: "100%",
    display: "grid",
    placeItems: "center",
    border: "1px solid rgba(255,255,255,.08)",
    background: "linear-gradient(135deg, rgba(0,0,0,.65), rgba(20,20,20,.65))",
    boxShadow: "inset 0 0 40px rgba(0,0,0,.35)",
    color: "rgba(255,255,255,.6)",
    fontSize: 14,
    letterSpacing: 1,
    userSelect: "none",
  };

  const half = size / 2;

  return (
    <Box
      sx={{
        width: { xs: "100%", md: size },
        aspectRatio: "1 / 1",
        mx: { xs: "auto", md: 0 },
        perspective: 900,
        borderRadius: 4,
        position: "relative",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          transformStyle: "preserve-3d",
          animation: `${spin} 12s linear infinite`,
        }}
      >
        <Box sx={{ ...faceStyle, transform: `translateZ(${half}px)` }}>FRONT</Box>
        <Box sx={{ ...faceStyle, transform: `rotateY(180deg) translateZ(${half}px)` }}>BACK</Box>
        <Box sx={{ ...faceStyle, transform: `rotateY(90deg) translateZ(${half}px)` }}>RIGHT</Box>
        <Box sx={{ ...faceStyle, transform: `rotateY(-90deg) translateZ(${half}px)` }}>LEFT</Box>
        <Box sx={{ ...faceStyle, transform: `rotateX(90deg) translateZ(${half}px)` }}>TOP</Box>
        <Box sx={{ ...faceStyle, transform: `rotateX(-90deg) translateZ(${half}px)` }}>BOTTOM</Box>
      </Box>
    </Box>
  );
}
