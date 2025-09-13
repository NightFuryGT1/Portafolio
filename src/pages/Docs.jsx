// src/pages/Docs.jsx
import {
  Box, Container, Typography, Accordion, AccordionSummary, AccordionDetails,
  Chip, Stack
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const owasp = [
  { k: "A01: Broken Access Control", d: "Controles de acceso mal implementados permiten a usuarios no autorizados leer/modificar recursos.", tips: ["Usa autorización en servidor (no solo en UI).", "Principio de mínimo privilegio.", "Pruebas: fuerza rutas /admin, cambia IDs (IDOR)."] },
  { k: "A02: Cryptographic Failures", d: "Errores al proteger datos en tránsito o en reposo.", tips: ["TLS 1.2+; HTTPS en todo.", "No guardar contraseñas en texto plano (usa bcrypt/argon2).", "Evita claves en el repo; rota secretos."] },
  { k: "A03: Injection", d: "Entrada no controlada ejecuta comandos/consultas (SQLi, NoSQLi, XSS).", tips: ["Usa consultas preparadas y ORMs.", "Escapa/valida entrada estrictamente.", "Content Security Policy (XSS)."] },
  { k: "A04: Insecure Design", d: "Decisiones de diseño que ignoran amenazas.", tips: ["Threat modeling (STRIDE).", "Requerimientos de seguridad desde el inicio.", "Patrones seguros y revisión de arquitectura."] },
  { k: "A05: Security Misconfiguration", d: "Configuraciones por defecto o incorrectas.", tips: ["Deshabilita listados, paneles por defecto.", "Headers seguros (CSP, HSTS, X-Frame-Options).", "Automatiza hardening por ambiente."] },
  { k: "A06: Vulnerable & Outdated Components", d: "Dependencias con CVEs conocidas.", tips: ["SCA (Snyk, OWASP Dependency-Check).", "Actualiza frecuentemente; usa lockfiles.", "Política de versiones y alerts."] },
  { k: "A07: Identification & Auth Failures", d: "Fallos en autenticación y manejo de sesiones.", tips: ["MFA donde aplique.", "JWT con expiración corta y rotación.", "Bloqueo/retardo ante fuerza bruta."] },
  { k: "A08: Software & Data Integrity Failures", d: "Actualizaciones/artefactos no confiables o alterados.", tips: ["Firmas/verificación de integridad.", "CI/CD con checks (checksums, provenance).", "Restricciones a plugins y deserialización segura."] },
  { k: "A09: Security Logging & Monitoring Failures", d: "Falta de logs útiles o alertas.", tips: ["Log de eventos clave (auth, cambios).", "Correlación y alertas (SIEM).", "Protege logs (PII, integridad)."] },
  { k: "A10: SSRF", d: "Servidor realiza requests a destinos no previstos.", tips: ["Validación de URLs y allowlist.", "Bloquea metadatos cloud (169.254.169.254).", "Segmenta red y limita egress."] },
];

const pruebas = [
  {
    titulo: "Pruebas Funcionales",
    puntos: [
      "Unitarias: validan funciones/módulos aislados (Jest).",
      "Integración: componentes colaborando (React Testing Library, supertest).",
      "Sistema/End-to-End: flujo completo (Playwright/Cypress).",
      "Aceptación (UAT): criterios del usuario (Casos/Gherkin).",
      "Regresión: asegura que cambios no rompan lo existente.",
      "Smoke/Sanity: verificación rápida tras un despliegue."
    ]
  },
  {
    titulo: "Pruebas No Funcionales",
    puntos: [
      "Rendimiento: carga/estrés/pico (JMeter, k6).",
      "Usabilidad/Accesibilidad: WCAG (axe, Lighthouse).",
      "Compatibilidad: navegadores/dispositivos (BrowserStack).",
      "Confiabilidad/Recuperación: fallos, timeouts, reintentos.",
      "Escalabilidad: comportamiento al crecer usuarios/datos.",
    ]
  },
  {
    titulo: "Pruebas de Seguridad",
    puntos: [
      "SAST: análisis estático del código (SonarQube, Semgrep).",
      "SCA: librerías vulnerables (Snyk, Dependency-Check).",
      "DAST: escaneo dinámico de la app en ejecución (OWASP ZAP).",
      "IAST/Fuzzing/Pentest: descubrimiento profundo de fallos.",
      "Threat Modeling y revisiones de diseño.",
      "Hardening, manejo de secretos, y verificación de cabeceras."
    ]
  }
];

export default function Docs() {
  return (
    <Box sx={{ py: 8 }}>
      <Container>
        <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 3 }}>
          <Typography variant="h2">Documentación</Typography>
          <Chip label="Guías" color="primary" variant="outlined" />
        </Stack>

        {/* OWASP */}
        <Typography variant="h4" sx={{ mb: 2 }}>OWASP Top 10 (2021)</Typography>
        {owasp.map((it) => (
          <Accordion key={it.k} disableGutters sx={{ bgcolor: "background.paper", mb: 1 }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography sx={{ fontWeight: 600 }}>{it.k}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography color="text.secondary" sx={{ mb: 1 }}>{it.d}</Typography>
              <Typography variant="subtitle2" sx={{ mb: .5 }}>Buenas prácticas / Qué probar:</Typography>
              <ul style={{ marginTop: 0 }}>
                {it.tips.map((t, i) => (
                  <li key={i}><Typography variant="body2">{t}</Typography></li>
                ))}
              </ul>
            </AccordionDetails>
          </Accordion>
        ))}

        {/* Tipos de prueba */}
        <Typography variant="h4" sx={{ mt: 5, mb: 2 }}>Tipos de prueba en desarrollo de software</Typography>
        {pruebas.map((blk) => (
          <Accordion key={blk.titulo} disableGutters sx={{ bgcolor: "background.paper", mb: 1 }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography sx={{ fontWeight: 600 }}>{blk.titulo}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ul style={{ marginTop: 0 }}>
                {blk.puntos.map((p, i) => (
                  <li key={i}><Typography variant="body2">{p}</Typography></li>
                ))}
              </ul>
            </AccordionDetails>
          </Accordion>
        ))}

        <Box sx={{ mt: 4 }}>
          <Typography variant="caption" color="text.disabled">
            Nota: este contenido es un resumen práctico para estudio y referencia rápida.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
