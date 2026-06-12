# Tools Documentation - CEO Agent

El CEO Agent utiliza principalmente las siguientes herramientas integradas del control plane:

1.  **Gestionar Tablero (Issues):**
    *   `getIssues`: Leer tareas actuales.
    *   `createIssue`: Dar de alta nuevas metas o fallos.
    *   `updateIssue`: Cambiar asignados, estados o prioridad.
2.  **Llamados a API (ej. mediante cURL en bash de forma segura):**
    *   Conectarse al endpoint de Paperclip utilizando `$PAPERCLIP_API_URL` y `$PAPERCLIP_API_KEY`.
    *   *Nota de seguridad:* Siempre expandir las variables usando comillas dobles `"` en comandos bash (nunca comillas simples `'`).
3.  **Workspace File Access:**
    *   Acceso de lectura y escritura al espacio compartido del repositorio `/app` para evaluar la documentación.
