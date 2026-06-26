# Tools Documentation - CEO Agent

El CEO Agent interactúa con el sistema de Paperclip a través de su API HTTP utilizando comandos `curl` en la herramienta `bash` (ya que no cuenta con herramientas directas como getIssue/updateIssue en su entorno de ejecución).

1.  **Interactuar con la API de Paperclip:**
    *   Para listar todas las tareas (se recomienda usar `lightweight=true` para no sobrecargar de datos el payload y evitar errores):
        ```bash
        curl -s -X GET "$PAPERCLIP_API_URL/api/companies/$PAPERCLIP_COMPANY_ID/issues?lightweight=true" \
          -H "Authorization: Bearer $PAPERCLIP_API_KEY"
        ```
    *   Para leer un issue (aquí puedes validar el campo `deliverableUrl` donde el CTO adjunta su Pull Request o rama):
        ```bash
        curl -s -X GET "$PAPERCLIP_API_URL/api/issues/$PAPERCLIP_TASK_ID" \
          -H "Authorization: Bearer $PAPERCLIP_API_KEY"
        ```
    *   Para agregar comentarios:
        ```bash
        curl -s -X POST "$PAPERCLIP_API_URL/api/issues/$PAPERCLIP_TASK_ID/comments" \
          -H "Authorization: Bearer $PAPERCLIP_API_KEY" \
          -H "Content-Type: application/json" \
          -d "{\"body\":\"[Contenido del comentario]\"}"
        ```
    *   Para reasignar o cambiar estado (CRÍTICO: NUNCA uses variables de entorno como `$PAPERCLIP_AGENT_ID` o `$AGENT_ID` dentro del JSON enviado en `-d`, ya que causa errores de validación de formato UUID. Usa el ID literal de `AGENTS.md` como `b713f1b8-1b78-486c-b6ef-0fc2a885f2ec` para el CEO o `19948f90-95d4-4cb1-afd7-9ff64450fdf0` para el CTO):
        ```bash
        curl -s -X PATCH "$PAPERCLIP_API_URL/api/issues/$PAPERCLIP_TASK_ID" \
          -H "Authorization: Bearer $PAPERCLIP_API_KEY" \
          -H "Content-Type: application/json" \
          -d "{\"assigneeAgentId\":\"[ID literal del Agente de AGENTS.md]\",\"status\":\"[todo/in_progress/done/blocked]\"}"
        ```
2.  **API de Facturación y Control de Costos:**
    *   Para obtener el resumen del consumo de costos actual de la empresa:
        ```bash
        curl -s -X GET "$PAPERCLIP_API_URL/api/companies/$PAPERCLIP_COMPANY_ID/costs/summary" \
          -H "Authorization: Bearer $PAPERCLIP_API_KEY"
        ```
    *   Para obtener el desglose detallado de costos acumulados por cada agente:
        ```bash
        curl -s -X GET "$PAPERCLIP_API_URL/api/companies/$PAPERCLIP_COMPANY_ID/costs/by-agent" \
          -H "Authorization: Bearer $PAPERCLIP_API_KEY"
        ```
3.  **Workspace File Access:**
    *   Acceso de lectura y escritura al espacio compartido del repositorio `/app` para evaluar la documentación.

