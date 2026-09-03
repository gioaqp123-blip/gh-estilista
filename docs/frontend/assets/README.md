# Catálogo de assets

`src/assets` es la fuente canónica de las imágenes que carga React. Los archivos de `public` conservan sus nombres porque forman parte de URLs públicas del documento. Los mockups y originales históricos se guardan por separado y nunca se importan desde la aplicación.

## Assets de runtime

| Ruta | Uso | Dimensiones | Carga |
| --- | --- | --- | --- |
| `src/assets/about/about-main.jpg` | Imagen principal de “Sobre mí” y fondo del CTA | 900 × 882 | lazy |
| `src/assets/about/about-accent.jpg` | Imagen secundaria de “Sobre mí” | 560 × 628 | lazy |
| `src/assets/hero/hero-model.png` | Modelo del Hero de escritorio | 896 × 1120 | eager, prioridad alta |
| `src/assets/hero/hero-model-mobile.png` | Modelo del Hero móvil | 720 × 1280 | eager, prioridad alta |
| `src/assets/services/hair-color.jpg` | Categoría Peluquería & Color | 720 × 900 | lazy |
| `src/assets/services/facial-care.jpg` | Categoría Cuidado facial | 720 × 900 | lazy |
| `src/assets/services/eye-lash.jpg` | Categoría Mirada | 720 × 900 | lazy |
| `src/assets/services/head-spa.jpg` | Categoría Spa & Bienestar | 720 × 900 | lazy |
| `src/assets/why/why-model.png` | Fotografía decorativa de “Por qué GH” | 1000 × 1250 | lazy |

Los nombres de las imágenes de servicios deben coincidir con las claves de `categoryImages` en `ServiceCategoryCard.jsx` y con el campo `image` de `serviceCategories`.

## Assets públicos

| Ruta | Uso | Dimensiones |
| --- | --- | --- |
| `public/favicon.svg` | Favicon principal y logo vectorial de la pestaña | viewBox 1774 × 887 |
| `public/favicon.jpg` | Fallback para navegadores antiguos | 240 × 240 |
| `public/apple-touch-icon.jpg` | Icono de dispositivos Apple | 240 × 240 |
| `public/og-image.jpg` | Open Graph, Twitter Card y Schema | 1200 × 630 |
| `public/robots.txt` | Reglas para rastreadores | — |
| `public/sitemap.xml` | Mapa público del sitio | — |

El logo de navbar y footer está implementado como SVG inline en `src/components/shared/BrandLogo.jsx`, porque así puede usar una paleta de contraste distinta en cada fondo sin duplicar un asset de interfaz.

## Referencias y material histórico

- `docs/frontend/frontend-update/mockups/`: capturas de los mockups; sirven para composición y ritmo visual, no para producción.
- `docs/frontend/assets/source-material/`: imágenes originales usadas como fuente para producir algunos assets optimizados.

Antes de reemplazar una imagen, comprobar su consumidor, dimensiones, `alt`, estrategia de carga y resultado en desktop y móvil. No guardar nuevas copias con nombres generados por mensajería o herramientas de diseño dentro de `src/assets`.
