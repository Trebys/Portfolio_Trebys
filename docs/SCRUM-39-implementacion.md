# SCRUM-39: implementación y publicación

## Cambios realizados

- Se actualizó la portada para presentar el perfil como desarrollador Full
  Stack Junior con un texto más directo.
- Se corrigieron los metadatos SEO, el logo del header, el enlace de descarga
  del CV y el footer.
- Se eliminó el enlace de navegación a una sección de experiencia inexistente.
- Se hicieron responsive la portada y la sección "Sobre mí".
- Se reemplazaron textos ficticios y botones sin destino en proyectos
  académicos.
- Se agregó Fantasy Land como proyecto destacado con descripción, stack,
  funcionalidades resumidas, captura real del sistema, enlace al repositorio y
  botón a la demo pública.
- Se agregó una mención breve de experiencia laboral en desarrollo,
  consultoría y QA sin nombrar empresa.
- Se ocultaron los proyectos que aún no están completos o no tienen demo/código
  listo para publicación. Queda visible únicamente Fantasy Land.

## Decisión de publicación

La tarjeta de Fantasy Land ya publica el enlace vivo. En
`src/components/Projects.astro`:

```ts
const PUBLISH_FANTASY_LAND_LIVE_LINK = true;
const FANTASY_LAND_LIVE_URL = "https://proyecto-brazaletes-web.vercel.app/";
```

El health check del backend ya fue validado. SCRUM-38 puede enfocarse en una
revisión final de publicación, despliegue del portafolio y monitoreo del cold
start de Render Free.

## Datos publicados / preparados

- Frontend: `https://proyecto-brazaletes-web.vercel.app`
- Backend: `https://fantasy-land-backend.onrender.com`
- Health check: `https://fantasy-land-backend.onrender.com/health/`
- Repositorio: `https://github.com/Trebys/proyecto-brazaletes-web`
- Limitación conocida: Render Free puede presentar cold start después de
  inactividad. Railway Hobby queda como alternativa futura para migrar solo el
  backend.

## Validaciones

- [x] `npm run build`: Astro check y build estático completados con 0 errores,
  0 warnings y 0 hints.
- [x] `git diff --check`: sin errores de whitespace. Git solo informa la
  normalización esperada LF/CRLF del entorno Windows.
- [x] Preview local: `/` responde HTTP 200.
- [x] Descarga local del CV: `/CV/Esteban%20Lopez%20Campos.pdf` responde HTTP
  200 con `content-type=application/pdf`.
- [x] Revisión visual con Edge headless: desktop `1440px` y viewport estrecho
  `500px`. Se revisaron portada, perfil, Fantasy Land y footer.
- [x] Captura real del frontend de Fantasy Land guardada en
  `public/projects/FantasyLand.png`.
- [x] Frontend Fantasy Land: responde HTTP 200.
- [x] Backend Fantasy Land: la raíz responde HTTP 404 porque no expone una
  vista raíz; el health check `/health/` responde HTTP 200 con JSON.
- [x] Repositorio Fantasy Land: responde HTTP 200.

## Scripts disponibles

`package.json` no define scripts separados para lint o tests. La validación
automatizada disponible es `npm run build`, que ejecuta `astro check` antes del
build estático.

## Mantenimiento pendiente

El build informa que `caniuse-lite` está desactualizado. Conviene actualizar
Browserslist en una tarea separada de mantenimiento de dependencias para evitar
mezclar cambios del lockfile con SCRUM-39.

No quedan proyectos académicos visibles hasta que tengan demo, código o una
descripción suficientemente sólida para publicación.
