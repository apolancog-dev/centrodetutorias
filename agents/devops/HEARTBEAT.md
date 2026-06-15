# Heartbeat Checklist - DevOps Agent

En cada latido de ejecución, realiza las siguientes tareas:

- [ ] **1. Identificar y Obtener Tarea Asignada (API de Paperclip):**
    - Si `$PAPERCLIP_WAKE_REASON` es `issue_assigned`, realiza el checkout de la tarea y lee sus detalles usando comandos curl:
      ```bash
      curl -s -X POST -H "Content-Type: application/json" -d '{"expectedStatuses":["in_progress"]}' "$PAPERCLIP_API_URL/api/issues/$PAPERCLIP_TASK_ID/checkout" -H "Authorization: Bearer $PAPERCLIP_API_KEY"
      curl -s -X GET "$PAPERCLIP_API_URL/api/issues/$PAPERCLIP_TASK_ID" -H "Authorization: Bearer $PAPERCLIP_API_KEY"
      ```
- [ ] **2. Obtener Reporte de Salud del Servidor (n8n Webhook):**
    - Dado que no tienes herramientas locales para monitorear docker o recursos de hardware directo en el sandbox, obtén las métricas en caliente consultando el webhook interno de n8n:
      ```bash
      curl -s http://cedetu-n8nwithpostgres-jwbet1-n8n-1:5678/webhook/vps-status
      ```
    - Este webhook ejecuta el diagnóstico SSH en el host y te devolverá un objeto JSON estructurado con:
      - `memory`: `{ total, used, percent }`
      - `disk`: `{ percent }`
      - `containers`: `{ key: status }`
      - `backups`: `{ key: status }`
      - `alert`: `true/false`
      - `markdownReport`: un reporte listo para publicar en formato Markdown.
- [ ] **3. Reportar en el Issue y Completar:**
    - Redacta un reporte final consolidado **estrictamente en español** basado en la información recibida del JSON.
    - Publica el reporte de salud como comentario en el issue de Paperclip:
      ```bash
      curl -s -X POST -H "Content-Type: application/json" -d "{\"content\": \"$(echo -n "$REPORT" | sed 's/"/\\"/g')\"}" "$PAPERCLIP_API_URL/api/issues/$PAPERCLIP_TASK_ID/comments" -H "Authorization: Bearer $PAPERCLIP_API_KEY"
      ```
    - Transiciona la tarea a finalizada (`done`):
      ```bash
      curl -s -X PATCH -H "Content-Type: application/json" -d '{"status":"done"}' "$PAPERCLIP_API_URL/api/issues/$PAPERCLIP_TASK_ID" -H "Authorization: Bearer $PAPERCLIP_API_KEY"
      ```
