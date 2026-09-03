# Arquitectura frontend

## Entrada de la aplicación

La cadena de renderizado es:

1. [`index.html`](../../index.html) contiene metadatos, JSON-LD, `#root` y el módulo de entrada.
2. [`src/main.jsx`](../../src/main.jsx) importa React, `App` y los estilos globales/por sección.
3. [`src/App.jsx`](../../src/App.jsx) compone el layout completo.
4. Vite transforma JSX y genera la salida publicable en `deploy/`.

React debe ejecutarse mediante Vite o mediante un servidor estático. Abrir el HTML con `file://` no es un flujo soportado para módulos ES de Vite.

## Componentes

### Layout

En [`src/components/layout`](../../src/components/layout):

- `Header`: marca, navegación, enlaces sociales y menú móvil.
- `Footer`: navegación secundaria, redes y datos finales.
- `WhatsAppFab`: botón flotante persistente para contacto.

### Secciones

En [`src/components/sections`](../../src/components/sections):

- `Hero`
- `Services`
- `CtaBanner`
- `About`
- `WhyChoose`
- `Testimonials`
- `Contact`

Cada sección conserva el orden, IDs de navegación y clases visuales del sitio original.

### Agenda

En [`src/components/booking`](../../src/components/booking):

- `BookingSection`: estado, selección, validación y confirmación.
- `Calendar`: navegación mensual y selección de fecha.
- `TimeSlots`: horarios disponibles, seleccionados o previamente solicitados.
- `bookingUtils.js`: fechas, slots y persistencia local.

### Compartidos

En [`src/components/shared`](../../src/components/shared):

- `Icons`: iconos SVG reutilizables.
- `Reveal`: entrada progresiva de contenido mediante `IntersectionObserver`.
- `CountUp`: animación de estadísticas.

## Datos

- [`src/data/services.js`](../../src/data/services.js) contiene la fuente única de servicios y sus categorías visuales.
- [`src/data/siteContent.js`](../../src/data/siteContent.js) contiene navegación, testimonios y razones para elegir el salón.
- El contenido repetido no debe copiarse directamente entre componentes si puede vivir en estos módulos.

Los servicios incluyen los campos funcionales `id`, `name`, `category`, `duration`, `price`, `priceLabel`, `description` e `items`, además de etiquetas auxiliares para selector, información y presentación.

## Estilos

[`src/styles/global.css`](../../src/styles/global.css) contiene variables, reset, elementos base, focus visible y layout común. El resto de archivos se organiza por responsabilidad visual:

- `header.css`, `hero.css`, `footer.css`, `whatsapp.css`: layout global.
- `section-head.css`, `responsive.css`, `reveal.css`: patrones compartidos.
- `services.css`, `cta-banner.css`, `about.css`, `why.css`, `testimonials.css`, `booking.css`, `contact.css`: secciones aisladas.

Los estilos se importan desde [`src/main.jsx`](../../src/main.jsx). Las clases existentes son parte del contrato visual; cambiar una clase requiere revisar escritorio, móvil y `prefers-reduced-motion`.

## Assets y publicación

- `src/assets/`: imágenes importadas por React y procesadas por Vite.
- `public/`: archivos que deben conservar su nombre público, como favicon, Open Graph, sitemap y robots.
- `deploy/`: salida generada por `npm run build`; se publica como raíz del sitio.

No editar manualmente los archivos hash dentro de `deploy/assets/`; se regeneran con el build.

## Comandos

```bash
npm run dev
npm run build
npm run preview
```

`npm run build` debe completarse antes de publicar. El build actual usa `vite.config.js` para limpiar y regenerar `deploy/`.
