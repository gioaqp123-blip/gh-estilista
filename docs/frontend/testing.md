# Pruebas y publicación

## Comandos

Ejecutar desde la raíz del repositorio:

```bash
npm install
npm test
npm run build
npm run preview
```

`npm test` ejecuta pruebas nativas de Node sin dependencias adicionales. `npm run build` limpia y regenera `deploy/`; `npm run preview` sirve exactamente esa salida compilada.

## Pruebas automatizadas

Las pruebas cubren:

- conversión de fechas y horas;
- días cerrados domingo y lunes;
- generación de horarios según duración;
- exclusión de horarios previamente solicitados;
- construcción del mensaje y URL de WhatsApp;
- existencia de assets canónicos y rutas reorganizadas.

## Checklist manual de producción

Abrir la URL de `npm run preview` y revisar:

- navbar, footer, favicon y variantes de contraste del logo;
- navegación, anchors y menú móvil;
- Hero de escritorio y móvil;
- cuatro categorías y sus acordeones;
- “Sobre mí”, “Por qué GH” y testimonios;
- selección de servicio, fecha y hora;
- domingo/lunes bloqueados;
- validación de nombre y teléfono;
- URL final de WhatsApp sin enviarla;
- responsive en 375, 390, 430, 768, 1024, 1280 y 1440 px;
- `prefers-reduced-motion`;
- foco por teclado y lectura de botones/acordeones;
- consola sin errores, red sin 404 y ausencia de overflow horizontal.

## Criterio de publicación

Publicar solo cuando `npm test`, `npm run build` y la revisión manual terminen correctamente. Comprobar que `deploy/` contiene el favicon, la imagen Open Graph, sitemap, robots y todos los assets actuales. No editar ni borrar manualmente archivos hash: se regeneran mediante el build.
