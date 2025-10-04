// src/pages/Docs.jsx
import {
  Box,
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid,
  Paper,
  Chip,
  Stack,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// ====== Secciones que ya estaban antes ======
const owasp = [
  { k: "A01: Broken Access Control", d: "Controles de acceso mal implementados permiten a usuarios no autorizados leer/modificar recursos.", tips: ["Autorización en servidor.", "Mínimo privilegio.", "Pruebas: rutas /admin, IDOR."] },
  { k: "A02: Cryptographic Failures", d: "Errores al proteger datos en tránsito o reposo.", tips: ["TLS 1.2+; HTTPS total.", "Hash seguro de contraseñas.", "Rotación de secretos."] },
  { k: "A03: Injection", d: "Entrada no controlada ejecuta consultas/comandos.", tips: ["ORM/queries preparadas.", "Validación/escape.", "CSP contra XSS."] },
  { k: "A04: Insecure Design", d: "Diseño que ignora amenazas.", tips: ["Threat modeling.", "Requisitos de seguridad.", "Revisión de arquitectura."] },
  { k: "A05: Security Misconfiguration", d: "Configuraciones por defecto o inseguras.", tips: ["Deshabilitar listados.", "Headers seguros.", "Hardening automatizado."] },
  { k: "A06: Vulnerable & Outdated Components", d: "Dependencias con CVEs.", tips: ["SCA (Snyk/ODC).", "Lockfiles/actualizaciones.", "Alertas de seguridad."] },
  { k: "A07: Identification & Auth Failures", d: "Fallos de autenticación/sesión.", tips: ["MFA.", "JWT con expiración/rotación.", "Rate limit a login."] },
  { k: "A08: Software & Data Integrity Failures", d: "Artefactos/actualizaciones no confiables.", tips: ["Firmas/checksums.", "CI/CD con verificación.", "Plugins controlados."] },
  { k: "A09: Security Logging & Monitoring Failures", d: "Falta de logs útiles/alertas.", tips: ["Eventos clave.", "SIEM/alertas.", "Protección de logs."] },
  { k: "A10: SSRF", d: "Servidor hace requests a destinos no previstos.", tips: ["Allowlist de URLs.", "Bloquear metadatos cloud.", "Limitar egress."] },
];

const pruebasVisionGeneral = [
  {
    titulo: "Pruebas Funcionales",
    puntos: [
      "Unitarias (Jest) — funciones/módulos aislados.",
      "Integración — componentes en conjunto.",
      "E2E (Playwright/Cypress) — flujo completo.",
      "Aceptación (UAT) — criterios del usuario.",
      "Regresión — que nada existente se rompa.",
      "Smoke/Sanity — verificación rápida tras deploy.",
    ],
  },
  {
    titulo: "Pruebas No Funcionales",
    puntos: [
      "Rendimiento: carga/estrés/pico.",
      "Accesibilidad/Usabilidad: WCAG, Lighthouse.",
      "Compatibilidad: navegadores/dispositivos.",
      "Confiabilidad/Recuperación.",
      "Escalabilidad y capacidad.",
    ],
  },
  {
    titulo: "Pruebas de Seguridad",
    puntos: [
      "SAST — análisis estático del código.",
      "SCA — librerías vulnerables.",
      "DAST — escaneo dinámico (app en ejecución).",
      "IAST/Fuzzing/Pentest.",
      "Threat Modeling y hardening.",
    ],
  },
];

// ====== Nueva sección: Tipos + herramientas (más detalle) ======
const herramientasPorTipo = [
  {
    titulo: "Funcionales",
    items: [
      { t: "Selenium (open-source)", s: "UI web, multi-navegador; integra CI/CD." },
      { t: "TestComplete (comercial)", s: "Web/móvil/desktop; scripting y grabación." },
    ],
  },
  {
    titulo: "Rendimiento",
    items: [
      { t: "Apache JMeter (open-source)", s: "Cargas, múltiples protocolos, extensible." },
      { t: "LoadRunner (comercial)", s: "Alta precisión y reporting avanzado." },
    ],
  },
  {
    titulo: "Seguridad",
    items: [
      { t: "OWASP ZAP (open-source)", s: "Escaneo pasivo/activo, CI/CD." },
      { t: "Burp Suite (comercial)", s: "Proxy, escaneo y herramientas avanzadas." },
    ],
  },
];

export default function Docs() {
  return (
    <Box sx={{ py: 8 }}>
      <Container>
        <Typography variant="h2" sx={{ mb: 3 }}>
          Documentación
        </Typography>

        {/* ==================== NUEVO: ISO/IEC 25010 ==================== */}
        <Accordion defaultExpanded disableGutters>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography fontWeight={700}>ISO/IEC 25010 — Modelo de Calidad</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container spacing={2}>
              <Grid item xs={12} md={8}>
                <Typography color="text.secondary" sx={{ mb: 2 }}>
                  Marco para evaluar calidad del producto software mediante ocho características y
                  sus subcaracterísticas: guía para definir requisitos de calidad, evaluar productos y
                  alinear equipos en objetivos de calidad.
                </Typography>
                <List dense>
                  <ListItem><ListItemText primary="Adecuación funcional (completitud, corrección, pertinencia)" /></ListItem>
                  <ListItem><ListItemText primary="Eficiencia de desempeño (tiempos, recursos, capacidad)" /></ListItem>
                  <ListItem><ListItemText primary="Compatibilidad (coexistencia, interoperabilidad)" /></ListItem>
                  <ListItem><ListItemText primary="Usabilidad (reconocibilidad, aprendizabilidad, operabilidad, accesibilidad…)" /></ListItem>
                  <ListItem><ListItemText primary="Fiabilidad (madurez, disponibilidad, tolerancia, recuperación)" /></ListItem>
                  <ListItem><ListItemText primary="Seguridad (confidencialidad, integridad, no repudio, responsabilidad, autenticidad)" /></ListItem>
                  <ListItem><ListItemText primary="Mantenibilidad (modularidad, reusabilidad, analizabilidad, modificabilidad, probabilidad)" /></ListItem>
                  <ListItem><ListItemText primary="Portabilidad (adaptabilidad, instalabilidad, reemplazabilidad)" /></ListItem>
                </List>
              </Grid>
              <Grid item xs={12} md={4}>
                <Paper variant="outlined" sx={{ p: 2 }}>
                  <Typography variant="subtitle2" color="text.secondary">Aplicación</Typography>
                  <Stack spacing={1} sx={{ mt: 1 }}>
                    <Chip size="small" label="Definir requisitos de calidad" />
                    <Chip size="small" label="Criterios de aceptación" />
                    <Chip size="small" label="Evaluación de productos" />
                  </Stack>
                </Paper>
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>

        {/* ==================== NUEVO: ISO/IEC/IEEE 29119 ==================== */}
        <Accordion disableGutters>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography fontWeight={700}>ISO/IEC/IEEE 29119 — Estándares de Pruebas</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography color="text.secondary" sx={{ mb: 2 }}>
              Conjunto de estándares para procesos, documentación y técnicas de pruebas. Útil para
              organizaciones que buscan formalizar QA, alinear prácticas y facilitar auditorías.
            </Typography>
            <List dense>
              <ListItem><ListItemText primary="Parte 1 — Conceptos y definiciones" /></ListItem>
              <ListItem><ListItemText primary="Parte 2 — Proceso de pruebas (organizativo, gestión y ejecución)" /></ListItem>
              <ListItem><ListItemText primary="Parte 3 — Documentación (plan, casos, registros, informes)" /></ListItem>
              <ListItem><ListItemText primary="Parte 4 — Técnicas (estáticas y dinámicas)" /></ListItem>
              <ListItem><ListItemText primary="Parte 5 — Ágil (adaptaciones a contextos ágiles)" /></ListItem>
            </List>
          </AccordionDetails>
        </Accordion>

        {/* ==================== NUEVO: IEEE 730 ==================== */}
        <Accordion disableGutters>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography fontWeight={700}>IEEE 730 — SQAP (Software Quality Assurance Plan)</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container spacing={2}>
              <Grid item xs={12} md={7}>
                <Typography color="text.secondary" sx={{ mb: 1 }}>
                  Define el contenido mínimo de un Plan de Aseguramiento de Calidad: qué, cómo, quién,
                  cuándo y con qué métricas se asegura la calidad de un proyecto.
                </Typography>
                <List dense>
                  <ListItem><ListItemText primary="Propósito/alcance; referencias; definiciones" /></ListItem>
                  <ListItem><ListItemText primary="Requisitos y trazabilidad" /></ListItem>
                  <ListItem><ListItemText primary="Actividades SQA (revisiones, inspecciones, V&V)" /></ListItem>
                  <ListItem><ListItemText primary="Documentación de calidad; auditorías" /></ListItem>
                  <ListItem><ListItemText primary="Control de cambios; métricas; herramientas; roles" /></ListItem>
                </List>
              </Grid>
              <Grid item xs={12} md={5}>
                <Paper variant="outlined" sx={{ p: 2 }}>
                  <Typography variant="subtitle2" color="text.secondary">¿Cuándo aplicarlo?</Typography>
                  <List dense sx={{ mt: 1 }}>
                    <ListItem><ListItemText primary="Proyectos regulados o críticos (finanzas, salud…)" /></ListItem>
                    <ListItem><ListItemText primary="Empresas con ISO 9001/CMMI" /></ListItem>
                    <ListItem><ListItemText primary="Contratos con requisitos de QA explícitos" /></ListItem>
                  </List>
                </Paper>
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>

        {/* ==================== NUEVO: Comparativa ==================== */}
        <Accordion disableGutters>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography fontWeight={700}>Comparativa: ISO 25010 vs McCall vs Boehm</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container spacing={2}>
              <Grid item xs={12} md={4}>
                <Paper variant="outlined" sx={{ p: 2 }}>
                  <Typography fontWeight={700}>ISO/IEC 25010</Typography>
                  <Typography color="text.secondary">
                    Modelo moderno y detallado (interno, externo y en uso). Base para requisitos de
                    calidad actuales (seguridad, usabilidad, mantenibilidad…).
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} md={4}>
                <Paper variant="outlined" sx={{ p: 2 }}>
                  <Typography fontWeight={700}>McCall (1977)</Typography>
                  <Typography color="text.secondary">
                    Pionero: operación, revisión y transición. Bueno para auditorías básicas, menos
                    aplicable a sistemas web/móviles modernos.
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} md={4}>
                <Paper variant="outlined" sx={{ p: 2 }}>
                  <Typography fontWeight={700}>Boehm (1978)</Typography>
                  <Typography color="text.secondary">
                    Jerárquico (utilidad/mantenibilidad/portabilidad). Referencia histórica.
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>

        {/* ==================== NUEVO: Roles & Riesgos ==================== */}
        <Accordion disableGutters>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography fontWeight={700}>Roles en QA & Riesgos de no implementar</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <Paper variant="outlined" sx={{ p: 2, height: "100%" }}>
                  <Typography fontWeight={700}>Roles comunes</Typography>
                  <List dense sx={{ mt: 1 }}>
                    <ListItem><ListItemText primary="Tester / QA Engineer — diseña/ejecuta pruebas, reporta y verifica" /></ListItem>
                    <ListItem><ListItemText primary="QA Analyst — estrategia, métricas, riesgos y mejora de proceso" /></ListItem>
                    <ListItem><ListItemText primary="Automation Engineer — frameworks y CI/CD de pruebas" /></ListItem>
                  </List>
                </Paper>
              </Grid>
              <Grid item xs={12} md={6}>
                <Paper variant="outlined" sx={{ p: 2, height: "100%" }}>
                  <Typography fontWeight={700}>Riesgos de no implementar QA</Typography>
                  <Stack spacing={1} sx={{ mt: 1 }}>
                    <Chip label="Costos post-lanzamiento" />
                    <Chip label="Insatisfacción del cliente" />
                    <Chip label="Riesgos legales/de seguridad" />
                    <Chip label="Retrasos de releases" />
                    <Chip label="Código difícil de mantener" />
                  </Stack>
                </Paper>
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>

        {/* ==================== (ANTES) OWASP Top 10 ==================== */}
        <Accordion disableGutters>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography fontWeight={700}>OWASP Top 10 (visión práctica)</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {owasp.map((it) => (
              <Paper key={it.k} variant="outlined" sx={{ p: 2, mb: 1.5 }}>
                <Typography fontWeight={700}>{it.k}</Typography>
                <Typography color="text.secondary" sx={{ mb: 1 }}>{it.d}</Typography>
                <Typography variant="subtitle2" sx={{ mb: .5 }}>Qué probar / buenas prácticas:</Typography>
                <ul style={{ marginTop: 0 }}>
                  {it.tips.map((t, i) => (
                    <li key={i}><Typography variant="body2">{t}</Typography></li>
                  ))}
                </ul>
              </Paper>
            ))}
          </AccordionDetails>
        </Accordion>

        {/* ==================== (ANTES) Tipos de prueba — visión general ==================== */}
        <Accordion disableGutters>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography fontWeight={700}>Tipos de prueba (visión general)</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {pruebasVisionGeneral.map((blk) => (
              <Paper key={blk.titulo} variant="outlined" sx={{ p: 2, mb: 1.5 }}>
                <Typography fontWeight={700}>{blk.titulo}</Typography>
                <ul style={{ marginTop: 8 }}>
                  {blk.puntos.map((p, i) => (
                    <li key={i}><Typography variant="body2">{p}</Typography></li>
                  ))}
                </ul>
              </Paper>
            ))}
          </AccordionDetails>
        </Accordion>

        {/* ==================== NUEVO: Tipos + herramientas ==================== */}
        <Accordion disableGutters>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography fontWeight={700}>Tipos de prueba y herramientas (detalle)</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container spacing={2}>
              {herramientasPorTipo.map((cat) => (
                <Grid key={cat.titulo} item xs={12} md={4}>
                  <Paper variant="outlined" sx={{ p: 2, height: "100%" }}>
                    <Typography fontWeight={700}>{cat.titulo}</Typography>
                    <List dense>
                      {cat.items.map((it) => (
                        <ListItem key={it.t}>
                          <ListItemText primary={it.t} secondary={it.s} />
                        </ListItem>
                      ))}
                    </List>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </AccordionDetails>
        </Accordion>
      </Container>
    </Box>
  );
}
