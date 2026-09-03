I want you to perform a frontend redesign of the existing GH Estilista landing page.

The objective is NOT to create a new brand.

The objective is to update the current components so the website feels significantly more sophisticated, premium, editorial, polished and visually engaging while preserving the EXISTING GH ESTILISTA BRANDING.

REFERENCE WEBSITE FOR COMPONENT / LAYOUT INSPIRATION:
https://chiclapeluqueria.cl/

CURRENT WEBSITE:
https://ghestilista.com/

IMPORTANT:
Use Chic La Peluquería ONLY as inspiration for:
- section composition
- visual hierarchy
- use of photography
- component proportions
- whitespace
- editorial layouts
- visual rhythm
- premium salon presentation

DO NOT copy:
- their brand
- their colors
- their logo
- their copy
- their exact layouts
- their assets
- their typography system
- their visual identity

==================================================
ABSOLUTE PRIORITY: PRESERVE GH ESTILISTA BRANDING
==================================================

The existing GH Estilista repository is the source of truth for branding.

Before modifying anything, inspect the project and identify:

- existing brand colors
- CSS variables
- Tailwind/theme tokens if present
- fonts
- font weights
- logo assets
- button styles
- icon styles
- border colors
- existing images
- typography configuration
- breakpoints
- reusable components

DO NOT replace the existing color palette with a generic luxury palette.

GH Estilista currently uses a recognizable visual identity based around:

- deep burgundy / wine tones
- pink / bright magenta accents
- warm blush / pale pink backgrounds
- warm off-white / cream surfaces
- gold accent color where currently used
- dark plum typography
- the existing GH / Salón GH logo identity

Keep these colors.

Do not turn the website:
- black and gold
- beige luxury
- monochrome
- neutral fashion editorial

unless those colors already exist in the GH design tokens.

Do not replace the current logo.

Use the real GH logo asset already present in the repository.

The redesign must feel like an elevated version of the CURRENT GH Estilista website, not like a completely different salon.

==================================================
GENERAL VISUAL DIRECTION
==================================================

Target feeling:

- sophisticated
- premium
- feminine
- warm
- elegant
- personal
- beauty-focused
- editorial
- boutique
- professional

Avoid making it feel like:

- SaaS
- corporate software
- dashboard UI
- generic Tailwind template
- generic beauty template
- overly minimal black luxury brand
- ecommerce storefront

The new design should rely primarily on:

PHOTOGRAPHY
+
TYPOGRAPHY
+
WHITESPACE
+
COMPOSITION
+
SUBTLE COLOR CONTRAST

instead of excessive decorative UI.

Avoid excessive:
- cards
- shadows
- gradients
- glass effects
- pills
- badges
- floating elements
- rounded rectangles everywhere

Rounded corners can be used selectively but should not dominate the visual language.

==================================================
PAGE STRUCTURE
==================================================

Maintain the current primary page sections and functionality.

Expected structure:

1. Header / Navbar
2. Hero
3. Services
4. About Gabriela
5. Why GH Estilista
6. Testimonials
7. Booking
8. Final CTA / Contact
9. Footer

Existing anchor navigation should continue working.

Do not remove SEO-relevant copy just to make sections shorter.

If necessary, restructure secondary copy visually rather than deleting it.

==================================================
01 — NAVBAR
==================================================

Keep the existing GH Estilista logo in the top-left.

DO NOT generate a replacement logo.

DO NOT write a fake text logo.

Use the existing actual asset.

Keep navigation approximately:

Servicios
Sobre mí
Por qué GH
Opiniones
Agenda

Keep the main CTA:

Agenda tu hora

Keep Instagram and Facebook if currently available.

DESIGN:

Use the existing pale blush / warm neutral navbar background.

Make the navbar visually lighter and more refined.

Use:
- generous horizontal spacing
- small uppercase or refined navigation typography
- subtle hover underline or color transition
- burgundy/plum CTA
- thin borders when useful
- no heavy shadows

The CTA should remain visually stronger than the other navigation options.

On scroll, a subtle sticky behavior is acceptable if the project currently supports it or can support it without adding unnecessary complexity.

MOBILE:

Create a polished mobile navigation.

Do not squeeze desktop navigation into mobile.

Use an accessible menu button.

==================================================
02 — HERO
==================================================

Redesign the hero into a premium image-led composition.

Preserve the existing message concept:

"Centro integral de belleza y bienestar unisex"

"Un espacio para cuidarte, de pies a cabeza."

Existing explanatory text may remain.

The composition should use:

LEFT SIDE
- eyebrow / category label
- large serif headline
- highlight "cuidarte" with the existing GH accent color
- supporting paragraph
- primary CTA
- secondary CTA

RIGHT SIDE
- large professional beauty / hair photograph

The image should occupy approximately 45–55% of the desktop hero.

The model / hair subject should preferably be positioned toward the RIGHT side of the photo so text never competes with the face.

Use the existing GH dark burgundy / wine background or a variation derived from existing design tokens.

DO NOT introduce black as the primary hero color.

The hero should feel visually richer than the current flat gradient version.

Use typography size approximately:

desktop headline:
clamp(3.5rem, 5vw, 6rem)

but adapt to the existing project and font.

The hero should be approximately:
75–90svh desktop

depending on navbar size.

Keep the existing:
"Agenda tu hora"
and
"Ver servicios"

CTA functionality.

Animations may include:
- subtle image fade
- text reveal
- very light translateY
- restrained stagger

No dramatic effects.

Respect prefers-reduced-motion.

==================================================
03 — SERVICES
==================================================

This section should be heavily inspired by the VISUAL PRESENTATION style found in the reference website.

Do not copy it exactly.

The goal is to stop presenting services primarily as long text lists.

Create an image-led service section.

Header example:

NUESTROS SERVICIOS

"Belleza integral, pensada para ti."

Supporting text should explain that GH combines different beauty and wellness areas.

Primary categories:

01
Peluquería & Color

02
Cuidado facial

03
Mirada

04
Spa & Bienestar

DESKTOP:

Create four visually aligned service components.

Each should include:

- large image
- number
- category title
- very short description
- "Ver servicios →"

The photograph should carry most of the visual weight.

Do not put all individual services inside each card.

Detailed service lists may:
- appear when expanding a category
- appear further down
- use accordion behavior
- or remain in the existing layout below

depending on the existing project architecture.

Do not remove useful service information.

Use the existing GH palette.

Cards / components should use:
- cream / blush surfaces
- plum titles
- pink accents
- thin subtle borders
- minimal or no shadows

The four service images should have consistent aspect ratios.

Recommended:
4:5 or ~3:4 portrait ratio.

MOBILE:
Stack cards vertically.

Images should remain large enough to maintain the premium visual effect.

==================================================
04 — FEATURED TREATMENTS
==================================================

Existing notable treatments such as:

Ritual de reparación capilar
Head Spa japonés

should not get lost inside generic service lists.

If they currently exist in the project, create visually differentiated FEATURED TREATMENTS.

They may use:

image | text

or

text | image

alternating layouts.

Include when existing data provides it:

- treatment name
- description
- duration
- price
- booking CTA

Do not invent prices.

Do not invent claims.

==================================================
05 — ABOUT GABRIELA
==================================================

Create a sophisticated editorial profile component.

Use the real photographs of Gabriela already available in the project whenever possible.

Suggested desktop composition:

LEFT:
large portrait of Gabriela

OPTIONAL:
one smaller secondary portrait overlapping or positioned beside the main image

RIGHT:
small label

"HOLA, SOY GABRIELA"

large heading:

"Estilista y colorista
certificada desde 2013."

Highlight "desde 2013" using the existing GH pink accent.

Preserve the existing biography.

Current meaning should remain:

Gabriela is passionate about beauty and personal care.

GH Estilista creates a space where each person feels:
- comfortable
- heard
- accompanied

Each visit should feel like more than a service.

STATS:

Reuse the real existing stats / credentials.

Examples currently used by the site:

1200+
CLIENTAS ATENDIDAS

2013
COLORISTA CERTIFICADA

TODO
MEDIO DE PAGO

If an experience-year calculation exists, derive it correctly from 2013.

IMPORTANT:
Do not hardcode false statistics.

If the project currently animates counters from zero, make sure the final semantic DOM still contains meaningful values and the animation is progressive enhancement.

Do not build SaaS-looking KPI cards.

Use typography and subtle dividers.

==================================================
06 — WHY GH ESTILISTA
==================================================

This section should be closer in COMPONENT STRUCTURE to the inspiration website.

Create a centered introductory heading.

Example:

¿POR QUÉ ELEGIR GH ESTILISTA?

"Mucho más que servicios,
una experiencia para ti."

Supporting text:

Each detail is designed to make clients feel comfortable, confident and cared for.

Instead of five equal generic cards, create approximately THREE MAIN VALUE BLOCKS as the visual focus.

Suggested main blocks:

EXPERIENCIA Y ESPECIALIZACIÓN

Use an elegant hair / scissors-related line icon.

Use existing content about:
- professional experience
- certification
- continual learning
- current techniques

PRODUCTOS DE CALIDAD

Use a subtle product / hair icon.

Use existing truthful copy regarding quality products.

IMPORTANT:
Do NOT claim sustainability unless there is actual business information supporting that claim.

ATENCIÓN PERSONALIZADA

Make this the visually highlighted block.

Use the strongest existing GH pink/magenta accent.

Text should become white or high-contrast.

This highlighted panel should create the same type of visual rhythm as the reference website without copying its palette.

The section should visually resemble:

[ Benefit 1 ]
[ Benefit 2 ]
[ Highlighted Benefit 3 ]

with generous spacing.

Secondary ideas such as:

Belleza + bienestar
Atención unisex
Un espacio pensado para ti

can be incorporated underneath using:
- a thin horizontal values strip
- small editorial statements
- secondary benefits

rather than creating too many equal cards.

==================================================
07 — TESTIMONIALS
==================================================

Create a stronger testimonial section.

Use the existing GH brand palette:

- blush backgrounds
- cream surfaces
- plum / burgundy text
- pink accents

Do not introduce neutral black luxury styling.

Suggested heading:

LO QUE DICEN MIS CLIENTAS

"Historias reales,
resultados que inspiran."

Use EXISTING testimonials.

Do NOT invent testimonials.

Create a premium carousel or editorial testimonial slider.

Desktop concept:

small previous testimonial preview

CENTRAL FEATURED TESTIMONIAL

small next testimonial preview

The central testimonial may include:

LEFT:
large quotation mark
testimonial
name

RIGHT:
real service-result image

Use a large but restrained testimonial container.

Avoid generic star-rating widgets unless actual ratings exist in the project.

Navigation:
- arrows
- dots

Mobile:
only show the active testimonial clearly.

Ensure carousel controls are keyboard accessible.

==================================================
08 — BOOKING
==================================================

The booking functionality already implemented is critical.

DO NOT break it.

DO NOT remove fields or business logic.

DO NOT replace the booking flow with a fake UI.

Redesign only the presentation.

Create a sophisticated booking section.

Desktop:

LEFT SIDE

small heading:
LISTA PARA TU MOMENTO

large heading:
"Agenda tu hora y
dedícate un momento para ti."

supporting description

optionally show three short benefits:

Reserva fácil
Horarios disponibles
Un momento para ti

RIGHT SIDE

Existing booking functionality inside a clean elevated booking panel.

The panel must remain visually consistent with GH branding.

Use:
- pale blush / cream background
- subtle border
- very subtle shadow if necessary
- plum text
- pink active states
- burgundy primary CTA

The booking experience should still include the real flow currently implemented:

service selection
date
calendar
available time
name
phone / WhatsApp
confirmation

Improve the styling of:

- select states
- calendar selected day
- hover day
- disabled day
- available slots
- selected slot
- text inputs
- validation messages
- focus rings
- confirmation CTA

Keep WhatsApp integration.

Do not create fake availability.

Do not modify scheduling logic unless necessary to support the existing implementation.

==================================================
09 — FINAL CTA
==================================================

After booking, create a visually elegant closing CTA.

Example:

"Tu próximo momento para ti
puede ser el inicio de tu mejor versión."

Agenda tu hora →

Use a soft GH blush background with existing pink/burgundy accents.

Avoid excessive decorative elements.

==================================================
10 — FOOTER
==================================================

Preserve useful current information:

GH Estilista

Gabriela Henríquez

address

WhatsApp

Instagram

Facebook if present

opening hours if present

navigation

copyright

Create a cleaner editorial footer.

Use either:

light blush background

or

the existing deep burgundy GH color

depending on what creates the best contrast with the preceding section.

Do not introduce an unrelated footer color.

==================================================
IMAGE STRATEGY
==================================================

The visual redesign depends heavily on photography.

Do not use random stock imagery in the final implementation unless explicitly provided.

First inspect:

/public
/assets
/images
or equivalent asset directories.

Reuse genuine GH photos whenever possible.

Create a clean image naming system.

Expected paths can be:

/images/hero-gh-estilista.webp
/images/gabriela-portrait-main.webp
/images/gabriela-portrait-secondary.webp
/images/service-hair.webp
/images/service-facial.webp
/images/service-eyes.webp
/images/service-head-spa.webp
/images/result-hair-01.webp
/images/result-hair-02.webp
/images/result-hair-03.webp

If any files do not yet exist:

DO NOT create fake images.

Prepare the component to receive them.

Use a temporary existing GH asset if suitable.

Clearly report missing images at the end.

Use the framework's optimized Image component if available.

Each image should have:

- explicit aspect ratio
- responsive sizes
- meaningful alt text
- optimized loading
- lazy loading below fold

Hero image should be prioritized appropriately for LCP.

==================================================
RESPONSIVE DESIGN
==================================================

The redesign must be intentionally responsive.

Test approximately:

375px
390px
430px
768px
1024px
1280px
1440px+

Do not just shrink desktop layouts.

Mobile should have its own composition decisions.

Hero:

text first
large image after or integrated underneath

Services:

1 column

About:

portrait first
content second

Why GH:

stack panels

Testimonials:

one testimonial

Booking:

intro followed by booking UI

Avoid horizontal overflow.

==================================================
TYPOGRAPHY
==================================================

Do not randomly replace the existing fonts.

Inspect the existing typography first.

If the project already uses a serif + sans-serif combination, preserve it.

Use the serif more strongly for editorial titles.

Use sans-serif for:
- body
- navigation
- controls
- supporting content

Headings should have more breathing room and tighter line lengths.

Use italic serif accent selectively.

Do not make every pink phrase italic.

==================================================
ICONOGRAPHY
==================================================

Use simple thin-line icons.

Prefer the icon library already installed.

Do not install another icon package unless absolutely necessary.

Keep icon stroke weight visually consistent.

Avoid:
- filled cartoon icons
- colorful generic illustrations
- emojis

==================================================
DECORATIVE ELEMENTS
==================================================

Subtle botanical / beauty decorative graphics may be used ONLY if they match the existing GH identity.

Do not make the page depend on large decorative illustrations.

Prefer:
- thin pink lines
- subtle watercolor texture
- extremely light botanical forms
- understated section dividers

Opacity should remain low.

Photography and typography remain primary.

==================================================
MOTION
==================================================

Use subtle motion only.

Good:

fade-in
translateY 10–20px
image reveal
very subtle hover image scale
underline transition
button arrow movement

Bad:

large parallax
bouncing
3D effects
excessive blur
animated background gradients
heavy scroll hijacking

Respect:

prefers-reduced-motion

==================================================
ACCESSIBILITY
==================================================

Preserve or improve:

semantic headings

aria labels

button vs anchor semantics

form labels

keyboard navigation

carousel keyboard accessibility

focus-visible states

color contrast

alt text

reduced-motion support

Do not reduce contrast just to achieve a pastel aesthetic.

==================================================
FUNCTIONALITY THAT MUST NOT BREAK
==================================================

Preserve:

navigation

anchor links

WhatsApp CTAs

booking

calendar

availability logic

form validation

contact information

Instagram links

Facebook links if present

responsive behavior

SEO metadata

structured content

analytics if present

Do not modify business logic unless required.

If you must modify business logic, explain why first.

==================================================
PERFORMANCE
==================================================

The redesign is more image-driven, so performance matters.

Use:

optimized images
WebP / AVIF where supported
responsive image sizing
lazy loading
priority only for LCP image
explicit dimensions / aspect-ratio
minimal JS for animations

Do not install a large animation library just for fades.

Use CSS or an existing dependency whenever possible.

==================================================
IMPLEMENTATION WORKFLOW
==================================================

STEP 1

Audit the repository.

STEP 2

Tell me which existing files/components will be modified.

STEP 3

Identify existing design tokens and confirm they will remain the source of truth.

STEP 4

Identify which required images already exist and which are missing.

STEP 5

Refactor / redesign the components.

STEP 6

Run:

lint
typecheck
tests
build

as available in the project.

STEP 7

Fix any regressions.

STEP 8

Give me a final implementation summary.

==================================================
FINAL REPORT
==================================================

After implementation report:

COMPONENTS UPDATED

COMPONENTS CREATED

BRANDING PRESERVED

IMAGE ASSETS USED

IMAGE ASSETS STILL NEEDED

RESPONSIVE CHANGES

ACCESSIBILITY CHANGES

FUNCTIONALITY PRESERVED

PERFORMANCE CONSIDERATIONS

ANY RECOMMENDED NEXT STEPS

==================================================
FINAL DESIGN PRINCIPLE
==================================================

The site should feel like:

"GH Estilista, elevated."

NOT:

"GH Estilista replaced by a new luxury template."

Keep the personality, colors, logo and visual identity of the current business.

Upgrade the sophistication through:

better composition
better photography
better hierarchy
better spacing
more refined typography
better components

The GH branding must remain immediately recognizable.