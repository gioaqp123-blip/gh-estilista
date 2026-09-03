# Documentación del frontend

Este directorio es la fuente de contexto para mantener y actualizar la landing de GH Estilista. Describe la identidad visual, la arquitectura React, los assets canónicos, la agenda y las decisiones tomadas durante las actualizaciones del frontend.

## Lectura recomendada

1. [Branding y sistema visual](branding.md): colores, tipografías, tono, composición, iconografía y reglas de fidelidad visual.
2. [Arquitectura frontend](architecture.md): entrada, componentes, datos, estilos, assets y publicación.
3. [Catálogo de assets](assets/README.md): imagen, ubicación, función, dimensiones y estado de cada recurso.
4. [Agenda y WhatsApp](booking.md): estado, calendario, horarios, persistencia, validaciones y mensaje.
5. [Historial de actualizaciones](updates.md): decisiones implementadas y cambios visuales por etapa.
6. [Pruebas y publicación](testing.md): comandos, checklist responsive y criterios antes de publicar.
7. [Guía de actualización visual](frontend-update/README.md): cómo usar los mockups sin convertirlos en assets de producción.

El prompt original recibido para la actualización visual se conserva en [reference/frontend-prompt.original.md](frontend-update/reference/frontend-prompt.original.md) únicamente como referencia histórica. La guía adaptada del repositorio es la autoridad para futuras modificaciones.

## Contrato de mantenimiento

- La página conserva sus secciones, anchors, copy comercial, servicios, precios y flujo de agenda.
- `src/assets` contiene las imágenes de runtime; `public` contiene recursos con URL pública estable.
- `deploy` es generado por Vite y se publica como raíz del sitio.
- No se deben cambiar clases, variables, breakpoints o fuentes sin revisar escritorio, móvil, teclado y `prefers-reduced-motion`.
- Los mockups y originales archivados documentan decisiones; no se importan desde React.
