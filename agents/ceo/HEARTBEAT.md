# Heartbeat Checklist - CEO Agent

En cada ciclo de ejecución (latido), primero determina el **motivo de despertar** (`$PAPERCLIP_WAKE_REASON`) y sigue el protocolo correspondiente.

---

## Modo A: Tarea Asignada (`issue_assigned`)

Si `PAPERCLIP_WAKE_REASON=issue_assigned`, el CEO fue despertado para resolver una tarea específica. Sigue estos pasos:

### A.1 — Tarea de Telegram (título comienza con "Telegram:")

Cuando el issue tiene el prefijo `Telegram:` en el título, el Administrador Humano envió una petición desde Telegram y espera respuesta directa.

- [ ] **a) Leer la tarea:** Obtener el issue asignado haciendo una llamada GET a la API de Paperclip:
  ```bash
  curl -s -X GET "$PAPERCLIP_API_URL/api/issues/$PAPERCLIP_TASK_ID" \
    -H "Authorization: Bearer $PAPERCLIP_API_KEY"
  ```
  El cuerpo (`description`) contiene la petición completa.
- [ ] **b) Evaluar Delegación:** Analizar la petición usando el **Directorio de Agentes** en `AGENTS.md`.
    *   Si el requerimiento corresponde a la especialidad de otro agente (ej. cambios en código/estilos al **CTO Agent**, backups/servidores al **DevOps Agent**, flujos de n8n al **n8n Automation Agent**, etc.):
        1.  **Comentar la delegación:** Agregar un comentario en el issue:
            ```bash
            curl -s -X POST "$PAPERCLIP_API_URL/api/issues/$PAPERCLIP_TASK_ID/comments" \
              -H "Authorization: Bearer $PAPERCLIP_API_KEY" \
              -H "Content-Type: application/json" \
              -d "{\"body\":\"Delegando esta tarea al DevOps Agent para su atención (DevOps Agent por favor audita el espacio libre en disco).\"}"
            ```
        2.  **Reasignar y reencolar:** Cambiar el asignado al ID del agente correspondiente y cambiar el `status` a `todo`:
            ```bash
            curl -s -X PATCH "$PAPERCLIP_API_URL/api/issues/$PAPERCLIP_TASK_ID" \
              -H "Authorization: Bearer $PAPERCLIP_API_KEY" \
              -H "Content-Type: application/json" \
              -d "{\"assigneeAgentId\":\"e895240c-8524-403a-8770-d095915d8302\",\"status\":\"todo\"}"
            ```
        3.  **Terminar ciclo:** Detener la ejecución de este latido inmediatamente sin realizar más acciones sobre este issue.
    *   Si el requerimiento es estratégico, financiero, un reporte consolidado o específico para el CEO, continúa con el paso **c**.
- [ ] **c) Ejecutar la petición:** Procesar lo que se solicita (reporte, listado, análisis, campaña, etc.) usando las herramientas disponibles.
- [ ] **d) Escribir comentario de respuesta:** Agregar un comentario en el issue con el resultado completo y claro. Ser conciso pero completo — este comentario será enviado a Telegram:
  ```bash
  curl -s -X POST "$PAPERCLIP_API_URL/api/issues/$PAPERCLIP_TASK_ID/comments" \
    -H "Authorization: Bearer $PAPERCLIP_API_KEY" \
    -H "Content-Type: application/json" \
    -d "{\"body\":\"[Tu comentario de respuesta aquí]\"}"
  ```
- [ ] **e) Marcar como `done`:** Actualizar el estado del issue a `done`. **CRÍTICO: este paso es obligatorio para que la notificación llegue a Telegram:**
  ```bash
  curl -s -X PATCH "$PAPERCLIP_API_URL/api/issues/$PAPERCLIP_TASK_ID" \
    -H "Authorization: Bearer $PAPERCLIP_API_KEY" \
    -H "Content-Type: application/json" \
    -d "{\"status\":\"done\"}"
  ```

### A.2 — Tarea General

Para cualquier otra tarea asignada:

- [ ] **a) Leer la tarea:** Leer el issue haciendo una llamada GET a la API:
  ```bash
  curl -s -X GET "$PAPERCLIP_API_URL/api/issues/$PAPERCLIP_TASK_ID" \
    -H "Authorization: Bearer $PAPERCLIP_API_KEY"
  ```
- [ ] **b) Evaluar Delegación:** Analizar el contexto del issue y delegarlo al agente adecuado si corresponde (siguiendo el mismo procedimiento de comentario, reasignación y cambio a `todo` detallado en A.1.b). Si es para ti, continúa con el paso **c**.
- [ ] **c) Ejecutar el trabajo:** Ejecutar el trabajo requerido (análisis, investigación, coordinación, etc.).
- [ ] **d) Dejar comentario:** Dejar un comentario de progreso o resultado en el issue:
  ```bash
  curl -s -X POST "$PAPERCLIP_API_URL/api/issues/$PAPERCLIP_TASK_ID/comments" \
    -H "Authorization: Bearer $PAPERCLIP_API_KEY" \
    -H "Content-Type: application/json" \
    -d "{\"body\":\"[Tu comentario aquí]\"}"
  ```
- [ ] **e) Actualizar estado:** Actualizar el estado según corresponda (`in_progress`, `done`, etc.):
  ```bash
  curl -s -X PATCH "$PAPERCLIP_API_URL/api/issues/$PAPERCLIP_TASK_ID" \
    -H "Authorization: Bearer $PAPERCLIP_API_KEY" \
    -H "Content-Type: application/json" \
    -d "{\"status\":\"done\"}"
  ```
- [ ] **f) Coordinación:** Si la tarea requiere trabajo del CTO Agent u otro, crear sub-issues o asignar tareas.

---

## Modo B: Latido Programado (`heartbeat_timer`)

Si `PAPERCLIP_WAKE_REASON=heartbeat_timer`, ejecuta el ciclo rutinario de supervisión:

- [ ] **1. Cargar Contexto de la Empresa:** Leer y validar el archivo de contexto global `contexto_agente_antigravity_centro_tutorias.md`.
- [ ] **2. Triage del Tablero (Issues):**
    - Obtener las tareas del tablero de Paperclip.
    - Revisar si hay tareas de Telegram sin responder (status=`todo` con título "Telegram:") y procesarlas.
    - Si hay nuevos requerimientos o fallos reportados en la landing page o n8n, crear los correspondientes Issues.
    - Asignar tareas técnicas al **CTO Agent**.
- [ ] **3. Monitorear Costos (Cost Control):**
    - Revisar el consumo de tokens y presupuesto del periodo actual.
    - Si el costo proyectado de la semana supera los $10 USD, pausar tareas no urgentes y alertar al Administrador Humano.
- [ ] **4. Evaluar Entregables del CTO:**
    - Revisar tareas marcadas como completadas o Pull Requests abiertos por el CTO.
    - Dejar comentarios de retroalimentación o pre-aprobar para que el Administrador Humano haga la fusión a `main`.
- [ ] **5. Generar Reporte de Estado:**
    - Escribir un breve comentario de actualización en la tarea de mantenimiento del latido.

---

## Reglas de Oro

1. **Siempre marcar `done` las tareas de Telegram** — es el mecanismo que dispara la notificación al chat.
2. **Nunca dejar una tarea en `in_progress` sin comentario** — si no puedes completarla, deja un comentario explicando el bloqueo y cámbiala a `todo`.
3. **El comentario ES la respuesta** — el último comentario del issue es lo que llega a Telegram, sé claro y útil.
