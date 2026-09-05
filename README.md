# GH Estilista

Landing page de GH Estilista construida con React y Vite. La página mantiene el branding actual, presenta los servicios de belleza y bienestar y permite preparar solicitudes de agenda para confirmarlas por WhatsApp, sin backend.

## Stack y estructura

- React + React DOM.
- Vite como servidor de desarrollo y compilador.
- JavaScript, JSX y CSS sin router ni librería visual externa.
- `src/assets/`: fuente canónica de las imágenes usadas por React, organizada por sección.
- `public/`: favicon, imagen social, sitemap y robots con URLs públicas estables.
- `deploy/`: salida generada y publicable del build.
- `docs/frontend/`: arquitectura, branding, assets, agenda, historial y pruebas.

La composición de la página está en `src/App.jsx`; los componentes se separan entre layout, secciones, agenda y elementos compartidos.

## Desarrollo y producción local

```bash
npm install
npm run dev
npm test
npm run build
npm run preview
```

`npm run build` limpia y regenera `deploy/` mediante `vite.config.js`. `npm run preview` sirve esa salida compilada, por lo que es el flujo recomendado para revisar una versión equivalente a producción.

Para publicar, se utiliza el contenido de `deploy/` como raíz del sitio. No se deben editar manualmente los archivos con hash dentro de `deploy/assets/`.

## Documentación

- [Índice del frontend](docs/frontend/README.md)
- [Branding y sistema visual](docs/frontend/branding.md)
- [Arquitectura React](docs/frontend/architecture.md)
- [Catálogo de assets](docs/frontend/assets/README.md)
- [Agenda y WhatsApp](docs/frontend/booking.md)
- [Historial de actualizaciones](docs/frontend/updates.md)
- [Guía de actualización visual](docs/frontend/frontend-update/README.md)
- [Pruebas y publicación](docs/frontend/testing.md)

## Límites de mantenimiento

El contenido comercial, los servicios, los precios, la lógica de agenda, los enlaces sociales, los anchors y las variables de branding forman parte del contrato actual. Cualquier cambio visual debe conservar escritorio, móvil, accesibilidad, `prefers-reduced-motion` y la salida `deploy/` salvo que exista una tarea explícita para modificarlos.
