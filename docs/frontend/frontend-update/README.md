# Guía de actualización visual del frontend

Esta carpeta reúne los mockups de referencia y el prompt original de la actualización visual. La versión implementada debe sentirse más editorial y fotográfica sin dejar de ser GH Estilista.

## Archivos de referencia

- [`mockups/hero.png`](mockups/hero.png): composición propuesta para el Hero.
- [`mockups/services.png`](mockups/services.png): presentación fotográfica de servicios.
- [`mockups/about.png`](mockups/about.png): composición editorial de “Sobre mí”.
- [`mockups/why.png`](mockups/why.png): propuesta para “Por qué GH”.
- [`mockups/testimonials.png`](mockups/testimonials.png): jerarquía editorial de opiniones.
- [`reference/frontend-prompt.original.md`](reference/frontend-prompt.original.md): prompt original conservado sin modificaciones.

## Reglas de implementación

- Mantener las variables `--plum`, `--plum-deep`, `--rose`, `--gold`, `--cream`, `--ink` y `--paper`.
- Mantener Fraunces para títulos y Work Sans para cuerpo, navegación, formularios y botones.
- Mantener el logo SVG existente; no crear una marca alternativa a partir del mockup.
- Mantener el copy, servicios, precios, testimonios, anchors, agenda y WhatsApp.
- Usar los mockups solo para composición, jerarquía, proporción de imágenes, espacio y ritmo.
- No copiar marca, colores, textos, tipografías ni assets de sitios de referencia externos.
- No convertir las capturas completas en imágenes de producción.
- Conservar los breakpoints, el soporte móvil, el foco visible y `prefers-reduced-motion`.

## Estado actual de las decisiones visuales

- El Hero tiene assets de escritorio y móvil separados para controlar el recorte y el espacio vertical.
- Servicios usa cuatro imágenes 4:5 y un acordeón accesible por categoría.
- “Sobre mí” reutiliza dos fotografías reales de Gabriela.
- “Por qué GH” utiliza una modelo decorativa transparente y un panel creado con CSS.
- Opiniones permanece como composición estática sin carrusel ni testimonios nuevos.
- La agenda mantiene selección local, horarios y confirmación por WhatsApp.

## Flujo para una actualización futura

1. Revisar [`docs/frontend/branding.md`](../branding.md) y [`docs/frontend/architecture.md`](../architecture.md).
2. Identificar qué componente y asset existente corresponde a la propuesta.
3. Mantener el copy y la lógica; separar la presentación mediante componentes o estilos aislados.
4. Si se requiere una imagen nueva, guardarla con nombre semántico en `src/assets` y documentarla en [`../assets/README.md`](../assets/README.md).
5. Revisar desktop y móvil antes de reemplazar el asset anterior.
6. Ejecutar las pruebas y el checklist de [`../testing.md`](../testing.md).

La guía de este archivo prevalece sobre instrucciones genéricas del prompt original cuando entren en conflicto con el repositorio actual.
