# Heartbeat Checklist - Reporting Agent

En cada latido de ejecución, realiza las siguientes tareas:

- [ ] **1. Recopilar Datos de Leads (Supabase/GHL):**
    - Consultar el volumen de registros en la base de datos de leads de Supabase.
    - Contar cuántos leads entraron en las últimas 24 horas y agruparlos por canal.
- [ ] **2. Recopilar Costos de Ejecución (Paperclip):**
    - Consultar la API de Paperclip para extraer los costos de API de las ejecuciones de todos los agentes.
    - Sumar y calcular el costo acumulado semanal del proyecto.
- [ ] **3. Compilar Reporte Ejecutivo:**
    - Crear el documento de reporte diario en formato Markdown incluyendo:
      - Total de Leads y su estado.
      - Conversiones/Citas de diagnóstico agendadas.
      - Costo total de API consumido por los agentes.
- [ ] **4. Enviar Reporte al CEO:**
    - Publicar el reporte Markdown como un comentario en la tarea de reportes del tablero de Paperclip, o notificar directamente en el issue correspondiente para revisión del CEO Agent y el Administrador Humano.
