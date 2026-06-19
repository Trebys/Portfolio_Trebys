# Portafolio bilingüe ES/EN

## Objetivo

Agregar soporte bilingüe español/inglés al portafolio sin rehacer el diseño ni
mezclar esta tarea con SCRUM-39.

## Decisiones técnicas

- Se mantiene español como idioma por defecto.
- Se centralizaron los textos en `src/i18n/content.ts`.
- El selector `ES | EN` vive en `src/components/LanguageToggle.astro` y se
  mantiene visible como control secundario del header. En mobile se integra en un
  dock compacto centrado debajo de la navegacion principal; desde `sm` en adelante
  vuelve a ubicarse en la parte superior derecha.
- El fondo animado del nav al hacer scroll queda limitado al ancho de los enlaces,
  evitando que una banda horizontal cubra el logo o controles secundarios.
- Se usan etiquetas de idioma `ES` y `EN` en lugar de banderas, porque español e
  inglés son idiomas y no representan un único país.
- El cambio de idioma se aplica en cliente desde `src/layouts/Layout.astro`.
- El idioma seleccionado se guarda en `localStorage` con la clave
  `portfolio-language`.
- No se duplicaron páginas ni componentes completos; los componentes actuales
  consumen el contenido centralizado.
- Los metadatos `title`, `description` y el atributo `lang` del documento se
  actualizan según el idioma seleccionado.

## CV por idioma

El botón de descarga de CV cambia según el idioma:

- Español: `public/CV/Esteban Lopez Campos.pdf`
- Inglés: `public/CV/Esteban Lopez Campos English.pdf`

El CV en español no fue reemplazado.

## Textos traducidos

- Navegación principal.
- Selector de idioma.
- Portada.
- Sección "Sobre mí".
- Botón de descarga de CV.
- Sección de proyectos.
- Botones de código y demo.
- Footer.
- Metadatos SEO.

## Validaciones

- [x] `npm run build`: Astro check y build completados con 0 errores, 0
  warnings y 0 hints.
- [x] Se confirmó que existen los CVs en español e inglés dentro de
  `public/CV`.
- [x] Se revisó que los textos principales del portafolio estén centralizados en
  `src/i18n/content.ts`.

## Revisión final

- [x] Revisión visual manual en navegador del selector `ES | EN`.
- [x] Selector de idioma y selector de tema ubicados como controles secundarios:
  en mobile se alinean en un dock compacto bajo el nav, y desde `sm` en adelante
  vuelven a la parte superior derecha.
- [x] Se confirmó que la descarga del CV cambia correctamente entre español e
  inglés.
- [x] Se confirmó que el diseño se mantiene sin rehacer la estructura visual.
