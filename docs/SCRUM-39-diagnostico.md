# SCRUM-39: diagnóstico del portafolio

## Estructura y stack

El portafolio es un sitio estático de una sola página construido con Astro 4,
TypeScript y Tailwind CSS. La ruta principal es `src/pages/index.astro`, que usa
`src/layouts/Layout.astro` y compone tres bloques:

- Presentación principal mediante `MainInfo.astro`.
- Perfil profesional y tecnologías mediante `AboutMe.astro`.
- Listado de proyectos mediante `Projects.astro`.

El layout agrega el header fijo, el footer, los metadatos básicos, el fondo y
el soporte para tema claro, oscuro o definido por el sistema.

## Estado de Git antes de editar

El repositorio estaba en `master` con cambios locales previos. Se preservaron y
se incorporaron a la rama `feature/actualizar-portafolio-fantasy-land`:

- Reemplazo del PDF anterior del CV por `public/CV/Esteban Lopez Campos.pdf`.
- Actualización inicial de textos en `AboutMe.astro` y `MainInfo.astro`.
- Ajustes iniciales a títulos en `Projects.astro`.
- Nuevos iconos para Blazor, Django, PostgreSQL y React.

No se revirtieron cambios locales existentes.

## Hallazgos priorizados

### Alta prioridad

- Las siete tarjetas de proyectos contenían texto `lorem ipsum`.
- Todos los botones de proyectos apuntaban a `#`, aunque no existía un destino
  real.
- El botón del CV apuntaba a una ruta y nombre de archivo inexistentes.
- El logo del header apuntaba a `dark_sin_fondo.png`, asset que no existe.
- Faltaba una presentación profesional de Fantasy Land.

### Prioridad media

- La navegación incluía una sección `#experiencia` inexistente.
- Los metadatos SEO seguían presentando el perfil como `Entry-Level`.
- La portada y la sección de perfil usaban filas rígidas que podían comprimirse
  en pantallas pequeñas.
- El footer mantenía el año 2024 y un enlace vacío.
- Los textos alternativos de imágenes de proyectos no describían su contenido.

### Fuera de alcance detectado

- No existe una sección detallada de experiencia profesional.
- No hay pruebas automatizadas ni script de lint específico.
- Las capturas actuales de proyectos académicos pueden renovarse más adelante.
- La advertencia de Browserslist indica que `caniuse-lite` puede actualizarse
  en una tarea de mantenimiento de dependencias.

## Fuente profesional

Se tomó como referencia el CV local indicado para la tarea:
`public/CV/Esteban Lopez Campos.pdf`. El entorno no dispone de una utilidad PDF
de extracción de texto y la conversión en modo lectura mediante Word no terminó
correctamente. Por esa razón solo se conservaron datos ya presentes en los
cambios locales y datos suministrados explícitamente en el requerimiento; no se
agregaron afirmaciones profesionales nuevas.
