# Historial de actualizaciones del frontend

Este registro resume los cambios estructurales y visuales que definen la versión actual. Los commits conservan el detalle técnico completo en Git.

| Fecha | Commit | Cambio |
| --- | --- | --- |
| 2026-09-03 | `406c413` | Migración de la landing estática a React + Vite, con componentes, datos y agenda local separados. |
| 2026-09-03 | `dd9407a` | Primera actualización visual con imágenes de servicios y composición editorial. |
| 2026-09-03 | `0c808bb` | Ajuste de composición del Hero de escritorio y optimización del asset principal. |
| 2026-09-03 | `219514b` | Variante de imagen y composición del Hero móvil. |
| 2026-09-03 | `874f22f` | Primera composición editorial de “Por qué GH”. |
| 2026-09-03 | `aa240a3` | Sustitución de la imagen compuesta por modelo transparente y panel visual independiente. |
| 2026-09-03 | `1483151` | Ajustes de composición, desborde visual y tipografía de “Por qué GH”. |
| 2026-09-03 | `ceb7ecf` | Logo vectorial recoloreable para navbar/footer y favicon SVG. |

## Estado de la versión actual

- La estructura es React + Vite sin router ni librería visual externa.
- `deploy/` continúa siendo la salida publicable.
- Las imágenes de runtime están organizadas por sección en `src/assets`.
- El logo de interfaz se renderiza como SVG inline; el favicon usa un SVG público.
- La agenda no tiene backend: prepara una URL de WhatsApp y guarda solicitudes locales.

## Regla para futuros cambios

Cada actualización visual debe registrar qué sección cambia, qué assets nuevos incorpora, qué decisiones de branding conserva y qué pruebas responsive se ejecutaron. No se deben introducir servicios, claims, precios o lógica comercial nuevos como parte de un rediseño visual.
