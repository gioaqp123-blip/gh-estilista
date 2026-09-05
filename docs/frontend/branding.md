# Branding y sistema visual

## Esencia de la marca

GH Estilista se presenta como un centro integral de belleza y bienestar unisex. La experiencia combina cuidado personal, cercanía y especialización profesional, con Gabriela como figura central.

La personalidad visual actual es:

- cálida y femenina sin ser exclusiva;
- elegante y editorial, con mucho espacio en blanco;
- cercana y directa en los textos;
- profesional, pero no fría ni clínica;
- orientada a una conversación simple por WhatsApp.

Estas características describen la interfaz implementada y sirven como referencia para futuras ampliaciones. No deben convertirse en un rediseño automático.

## Voz y tono

- Idioma principal: español de Chile.
- Tratamiento: segunda persona singular, usando “tú”.
- Estilo: frases breves, amables y concretas.
- CTA principal: “Agenda tu hora”.
- Canal de conversión: WhatsApp.
- La comunicación debe transmitir acompañamiento, diagnóstico y cuidado personalizado.

Evitar lenguaje excesivamente técnico, promesas absolutas, urgencia artificial o un tono impersonal. El contenido comercial existente debe conservarse salvo solicitud explícita.

## Paleta

Las variables viven en [`src/styles/global.css`](../../src/styles/global.css) y son la fuente de verdad para los colores.

| Variable | Hex | Uso principal |
| --- | --- | --- |
| `--plum` | `#5C1D3E` | Color principal, títulos, navegación y bloques oscuros |
| `--plum-deep` | `#3D1329` | Fondo profundo del hero y contraste |
| `--rose` | `#E0577F` | Acentos, eyebrow y detalle de marca |
| `--gold` | `#C9A15A` | CTA, énfasis, foco accesible y detalles premium |
| `--cream` | `#F7ECEE` | Texto claro y superficies suaves sobre fondos oscuros |
| `--ink` | `#241419` | Texto principal sobre fondos claros |
| `--paper` | `#FDF6F5` | Fondo general y superficies claras |

Reglas de uso:

- Priorizar variables CSS; no crear colores equivalentes con hex distintos.
- `--gold` debe conservar contraste suficiente y no usarse como texto pequeño sobre fondos claros.
- Los fondos oscuros funcionan como bloques de énfasis, no como fondo general de toda la página.
- Los tonos con alpha existentes se usan para bordes, ruido, hover y superficies sutiles; deben conservarse al ajustar componentes.

## Tipografía

- Títulos y display: **Fraunces**.
- Texto, navegación, formularios y botones: **Work Sans**.
- Las fuentes se cargan desde Google Fonts en [`index.html`](../../index.html).

Tratamiento actual:

- Fraunces usa peso visual medio y un tracking ligeramente negativo.
- Los títulos emplean tamaños fluidos con `clamp()`.
- Los eyebrow son textos en mayúsculas, pequeños y con espaciado amplio.
- El cuerpo utiliza interlineado generoso para mantener una lectura calmada.

No sustituir las fuentes por una fuente del sistema sin una decisión de branding explícita. Si se agrega una variante de peso, debe revisarse la carga en `index.html` y el impacto en el layout.

## Composición y ritmo

- Contenedor principal: `.wrap`, máximo `1120px` y padding lateral de `32px`.
- Secciones de escritorio: aproximadamente `120px` de padding vertical.
- Secciones móviles: aproximadamente `80px` de padding vertical.
- La página alterna superficies claras y bloques de color para crear ritmo.
- El hero es el bloque de mayor impacto y usa un degradado plum con acento dorado.
- Las imágenes de Gabriela son parte del relato de marca; no son decorativas intercambiables.

La composición debe seguir siendo respirada: no agregar tarjetas, bordes, sombras o elementos flotantes que compitan con el contenido existente.

## Elementos de interfaz

### Botón principal

`.btn-primary` usa fondo dorado, texto `--plum-deep`, padding aproximado de `15px 30px`, radio de `2px` y una elevación sutil al hover. Es el CTA de conversión principal.

### Botón secundario

`.btn-ghost` es transparente, con borde claro en el hero. Sirve para acciones de exploración como “Ver servicios” y no debe competir visualmente con el botón principal.

### Eyebrow

`.eyebrow` utiliza la línea corta previa, mayúsculas, `letter-spacing` amplio y el color rosa. Es el patrón de identificación de cada sección.

### Iconografía

Los iconos actuales son SVG inline y se centralizan en [`src/components/shared/Icons.jsx`](../../src/components/shared/Icons.jsx). Mantener trazos finos, geometría simple y el color heredado del contexto.

## Imágenes y assets

El catálogo completo, con dimensiones y componentes consumidores, está en [`assets/README.md`](assets/README.md).

Assets activos de contenido:

- [`src/assets/about/about-main.jpg`](../../src/assets/about/about-main.jpg): imagen principal de “Sobre mí” y fondo del CTA.
- [`src/assets/about/about-accent.jpg`](../../src/assets/about/about-accent.jpg): imagen secundaria de “Sobre mí”.
- [`src/assets/hero/hero-model.png`](../../src/assets/hero/hero-model.png): modelo del Hero de escritorio.
- [`src/assets/hero/hero-model-mobile.png`](../../src/assets/hero/hero-model-mobile.png): variante móvil del Hero.
- [`src/assets/services/`](../../src/assets/services/): cuatro imágenes de categorías de servicios.
- [`src/assets/why/why-model.png`](../../src/assets/why/why-model.png): modelo decorativa de “Por qué GH”.

El logo activo para navbar y footer es el trazado vectorial de [`BrandLogo.jsx`](../../src/components/shared/BrandLogo.jsx). El favicon principal es [`public/favicon.svg`](../../public/favicon.svg); se conservan `favicon.jpg` y `apple-touch-icon.jpg` por compatibilidad.

Las imágenes deben conservar `alt`, dimensiones explícitas y `loading="lazy"` cuando no formen parte del primer viewport. El build genera copias optimizadas con hash en `deploy/assets/`.

Los archivos fuente históricos están en [`assets/source-material/`](assets/source-material/); no deben importarse desde React ni copiarse al flujo de producción.

## Responsive y accesibilidad

El breakpoint estructural actual es `max-width: 860px`:

- el menú se transforma en un panel lateral de aproximadamente `78%` del viewport;
- las grillas de servicios, motivos, testimonios y contacto pasan a una columna;
- el hero ajusta su padding;
- el indicador “Desliza” desaparece;
- la agenda conserva su jerarquía vertical.

El menú mantiene su apariencia original y añade comportamiento accesible: `aria-expanded`, etiquetas “Abrir menú”/“Cerrar menú”, cierre con `Escape` y cierre al elegir una sección.

Las animaciones de hero, reveal y contadores deben respetar `prefers-reduced-motion`. Cuando el usuario reduce el movimiento, el contenido debe permanecer visible y no depender de una animación para aparecer.
