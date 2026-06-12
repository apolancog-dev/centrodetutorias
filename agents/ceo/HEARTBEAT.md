# Heartbeat Checklist - CEO Agent

En cada ciclo de ejecución (latido), ejecuta los siguientes pasos en orden:

- [ ] **1. Cargar Contexto de la Empresa:** Leer y validar el archivo de contexto global `contexto_agente_antigravity_centro_tutorias.md`.
- [ ] **2. Triage del Tablero (Issues):**
    - Obtener las tareas del tablero de Paperclip.
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
