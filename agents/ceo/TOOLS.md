# Tools Documentation - CEO Agent

El CEO Agent interactúa con el sistema de Paperclip a través de su API HTTP utilizando comandos `curl` en la herramienta `bash` (ya que no cuenta con herramientas directas como getIssue/updateIssue en su entorno de ejecución).

1.  **Interactuar con la API de Paperclip:**
    *   Para leer un issue:
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
    *   Para reasignar o cambiar estado:
        ```bash
        curl -s -X PATCH "$PAPERCLIP_API_URL/api/issues/$PAPERCLIP_TASK_ID" \
          -H "Authorization: Bearer $PAPERCLIP_API_KEY" \
          -H "Content-Type: application/json" \
          -d "{\"assigneeAgentId\":\"[ID del Agente]\",\"status\":\"[todo/in_progress/done/blocked]\"}"
        ```
2.  **Workspace File Access:**
    *   Acceso de lectura y escritura al espacio compartido del repositorio `/app` para evaluar la documentación.
