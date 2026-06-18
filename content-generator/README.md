# Generador diario de contenido CEDETU

Sistema local para generar cada mañana una campaña orgánica de Centro de Tutorías. No publica en redes: deja todos los activos listos para revisión humana. El render usa SVG + Sharp y no necesita abrir un navegador.

## Qué genera cada día

En `output/YYYY-MM-DD/`:

- `vertical_1080x1920.png`: Stories, Reels y TikTok.
- `feed_1080x1080.png`: feed cuadrado de Instagram y Facebook.
- `feed_1080x1350.png`: feed vertical.
- `carousel/slide_01_1080x1350.png` a `slide_05_1080x1350.png`: carrusel diario.
- `source.html`: fuente editable con todas las composiciones y el texto incrustado.
- `copy.json`: captions, CTA, enlace de WhatsApp, hashtags y alt text.
- `manifest.json`: inventario, estado de revisión y hashes de los archivos.

## Arquitectura

- `config.json`: marca, colores, WhatsApp, horario y temas activos.
- `content_library.json`: diez ángulos editoriales con copy curado.
- `templates/`: sistema visual reutilizable.
- `assets/backgrounds/`: fotografías verticales sin texto.
- `generate_daily_content.js`: selección, copy, render y persistencia.
- `content_history.json`: historial para evitar repeticiones consecutivas.
- `validate_outputs.js`: dimensiones y campos obligatorios.
- `automation/`: ejemplo de programación diaria en macOS.
- `.github/workflows/`: alternativa programada con GitHub Actions.

## Instalación

Requiere Node.js 22 o superior.

```bash
cd content-generator
npm install
```

Dentro de Codex Desktop, `run_daily.sh` también puede usar el runtime y las librerías empaquetadas de Codex.

## Uso manual

Generar la campaña de hoy:

```bash
./run_daily.sh
```

Generar una fecha específica:

```bash
./run_daily.sh --date 2026-06-20
```

Elegir manualmente un tema:

```bash
./run_daily.sh --date 2026-06-20 --theme exam-prep
```

Regenerar una fecha existente:

```bash
./run_daily.sh --date 2026-06-20 --theme exam-prep --force
```

Sin `--force`, una fecha ya generada no se sobrescribe. Esto evita romper entregables anteriores.

Temas disponibles:

```text
parent-pain
exam-prep
task-overload
university-statistics
college-transition
academic-confidence
academic-diagnosis
personalized-support
emotional-reminder
model-class
```

Validar todas las campañas:

```bash
node validate_outputs.js
```

## Configuración de marca

Edita `config.json` para cambiar:

- Nombre de marca y URL.
- WhatsApp y etiqueta visual.
- Paleta de color.
- Horario y zona horaria.
- Temas activos.
- Número de temas recientes que no deben repetirse.
- Materias prioritarias.

El logo actual es un marcador editable en `assets/logos/logo-placeholder.svg`. Las plantillas usan una marca tipográfica equivalente; cuando exista el logo oficial puede reemplazarse sin modificar el contenido.

## Programación diaria

### macOS con launchd

1. Copia `automation/com.cedetu.daily-content.plist.example`.
2. Sustituye `REPLACE_WITH_ABSOLUTE_PATH` por la ruta absoluta del proyecto.
3. Guarda el archivo como `~/Library/LaunchAgents/com.cedetu.daily-content.plist`.
4. Actívalo con `launchctl load ~/Library/LaunchAgents/com.cedetu.daily-content.plist`.

El ejemplo ejecuta el generador todos los días a las 07:00, hora local del equipo.

### GitHub Actions

El workflow incluido corre a las 13:00 UTC, equivalente a las 07:00 en Guatemala. Genera, valida y sube un artefacto para revisión; no publica ni modifica redes sociales.

## Integración futura con n8n

Flujo recomendado:

1. `Cron` a las 07:05, después del generador.
2. `Read Binary Files` para leer la carpeta de la fecha.
3. `Read/Write Files from Disk` para abrir `copy.json` y `manifest.json`.
4. `IF` para comprobar `manifest.status === "ready_for_human_review"`.
5. Enviar preview y captions a Slack, correo, Telegram o una carpeta de aprobación.
6. Esperar aprobación humana.
7. En una fase posterior, conectar Meta Graph API y el flujo de TikTok.

No se recomienda publicar automáticamente antes de tener aprobación, manejo de errores, permisos de cuenta y registro de publicación.

## Criterios editoriales incorporados

- Copy dirigido principalmente a padres y madres.
- Sin garantías de notas o resultados imposibles.
- Headline, subtítulo y CTA validados por longitud.
- Rotación temática con exclusión de enfoques recientes.
- Carrusel diario de cinco pasos: gancho, problema, orientación, solución y CTA.
- Texto incrustado en todas las imágenes finales y copy completo en JSON.
