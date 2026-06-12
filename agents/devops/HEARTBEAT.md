# Heartbeat Checklist - DevOps Agent

En cada latido de ejecución, realiza las siguientes tareas:

- [ ] **1. Auditar Recursos del Servidor:**
    - Ejecutar comandos bash para comprobar la memoria RAM libre (`free -m`), el uso de disco (`df -h`) y el uso de CPU promedio.
- [ ] **2. Chequeo de Contenedores y Servicios (Dokploy/Docker):**
    - Verificar que los contenedores docker de la base de datos de Paperclip, n8n, la landing page y el propio Paperclip estén activos.
    - Capturar estadísticas de uso en caliente (`docker stats --no-stream`).
- [ ] **3. Verificar Estado de Backups:**
    - Validar que los archivos de backup programados en el VPS existan y tengan un tamaño de archivo correcto.
- [ ] **4. Reportar Estado e Hitos:**
    - Escribir un breve resumen del estado del servidor en la tarea de mantenimiento técnico del tablero de Paperclip.
    - Si detectas uso de RAM > 85% o CPU saturada, crear un Issue de alerta de forma inmediata y notificar al Administrador Humano.
