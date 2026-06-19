# Heartbeat Checklist - CTO Agent

> [!IMPORTANT]
> **CRITICAL FIRST STEP:**
> Before running any other command or tool, you MUST run this command in `bash` to determine why you were woken up and get your current task context:
> ```bash
> printenv | grep PAPERCLIP
> ```
> Identify the wake reason from `$PAPERCLIP_WAKE_REASON`.
> If `$PAPERCLIP_WAKE_REASON` is `issue_assigned`, proceed immediately to step **1. Identificar y Obtener Tarea Asignada (API de Paperclip)** below and read the task details using the curl GET command with `$PAPERCLIP_TASK_ID`.

---

- [ ] **1. Identificar y Obtener Tarea Asignada (API de Paperclip):**
    - Si las variables de entorno `PAPERCLIP_TASK_ID`, `PAPERCLIP_API_URL` y `PAPERCLIP_API_KEY` están definidas, debes consultar la API de Paperclip para obtener y registrar el contexto de la tarea asignada:
      ```bash
      # 1. Hacer checkout de la tarea (transicionarla a in_progress)
      curl -X POST "$PAPERCLIP_API_URL/api/issues/$PAPERCLIP_TASK_ID/checkout" \
        -H "Authorization: Bearer $PAPERCLIP_API_KEY" \
        -H "Content-Type: application/json" \
        -d "{\"agentId\":\"$PAPERCLIP_AGENT_ID\",\"expectedStatuses\":[\"todo\",\"backlog\",\"blocked\"]}"
      
      # 2. Obtener los detalles completos del issue (título y descripción)
      curl -s -X GET "$PAPERCLIP_API_URL/api/issues/$PAPERCLIP_TASK_ID" \
        -H "Authorization: Bearer $PAPERCLIP_API_KEY"
      ```
    - Procesa el JSON de respuesta. Identifica el título y la descripción del problema para saber exactamente qué archivos modificar en `/app/workspace`.
    - Si estas variables de entorno no están disponibles, busca tareas locales o pregunta en el chat.
- [ ] **2. Chequeo de Salud del Repositorio:**
    - Verificar que no haya conflictos de git pendientes en `/app/workspace`.
    - Asegurar que la rama de trabajo local esté actualizada con `main`.
- [ ] **3. Implementar Soluciones:**
    - Realizar los cambios de código especificados en la tarea directamente en `/app/workspace` (ej. crear o modificar archivos de la landing page).
    - **CRÍTICO:** NUNCA utilices rutas absolutas que comiencen desde la raíz del sistema de archivos `/` (como `/css`, `/js`, `/img`). SIEMPRE utiliza rutas relativas (como `css/`, `js/`, `images/`) o rutas absolutas prefijadas con `/app/workspace/` (como `/app/workspace/css/`). Todas tus modificaciones de archivos deben ocurrir estrictamente dentro de `/app/workspace`.
    - Ejecutar comprobaciones básicas de sintaxis o empaquetado para validar los cambios.
- [ ] **4. Actualizar Estado de la Tarea y Reportar:**
    - Sube tus cambios a una rama de desarrollo y abre un Pull Request si aplica.
    - Notifica al administrador o transiciona la tarea en la API de Paperclip a `done` al finalizar exitosamente:
      ```bash
      curl -X PATCH "$PAPERCLIP_API_URL/api/issues/$PAPERCLIP_TASK_ID" \
        -H "Authorization: Bearer $PAPERCLIP_API_KEY" \
        -H "Content-Type: application/json" \
        -d "{\"status\":\"done\"}"
      ```

