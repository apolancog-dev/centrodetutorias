# HEARTBEAT — Chief of Staff Agent

> [!IMPORTANT]
> **CRITICAL FIRST STEP:**
> Before running any other command or tool, you MUST run this command in `bash` to determine why you were woken up and get your current task context:
> ```bash
> printenv | grep PAPERCLIP
> ```
> Identify the wake reason from `$PAPERCLIP_WAKE_REASON`.
> If `$PAPERCLIP_WAKE_REASON` is `issue_assigned`, read the task details using the curl GET command with `$PAPERCLIP_TASK_ID` to understand what manual task has been assigned to you.

Este documento define el ciclo de ejecución diario del Chief of Staff Agent.

## Horario

- **Ejecución:** Lunes a Viernes
- **Hora:** 7:30 AM Guatemala (13:30 UTC)
- **Trigger:** Schedule Trigger en n8n (`chief_of_staff_daily_brief`)

## Protocolo de Ejecución

### Paso 1 — Recolección de Datos (en paralelo)

```
Gmail → Últimas 24h → Filtrar por: IMPORTANT + etiquetas clave + remitentes recurrentes
Calendar → Eventos de hoy + mañana
```

### Paso 2 — Procesamiento con IA

```
GPT-4o → Analizar emails y eventos → Generar brief estructurado en markdown
Prompt: Siguiendo la estructura definida en AGENTS.md, genera el brief ejecutivo del día
```

### Paso 3 — Creación del Issue en Paperclip

```
HTTP POST → Paperclip API → Crear Issue
  title: "🗂️ Brief Ejecutivo — [Fecha]"
  body: [brief generado por GPT]
  labels: ["chief-of-staff", "daily-brief"]
  assignee: ceo_agent
```

### Paso 4 — Confirmación

```
El Issue queda visible en el tablero listo para la revisión matutina de Antonio
```

## Manejo de Errores

- Si Gmail no responde: crear Issue con alerta y datos parciales disponibles
- Si GPT falla: crear Issue con raw data de emails (sin procesamiento)
- Si Paperclip API falla: reintentar 3 veces, luego enviar WhatsApp de alerta

## Métricas de Éxito

- Brief generado antes de las 7:35 AM (5 min de tolerancia)
- Issue creado en Paperclip con labels correctos
- Tasa de éxito objetivo: > 95% días hábiles
