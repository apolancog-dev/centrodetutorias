# Heartbeat Checklist - n8n Automation Agent

En cada latido de ejecución, realiza las siguientes tareas:

- [ ] **1. Consultar Errores Recientes en n8n:**
    - Realizar llamadas HTTP a la API de n8n para listar ejecuciones fallidas en las últimas 24 horas.
    - Si se encuentran fallos, descargar el detalle de la ejecución (JSON) para identificar el nodo y el mensaje de error.
- [ ] **2. Diagnóstico de Nodos:**
    - Identificar si la falla fue por credenciales expiradas (error 401/403), caída del servicio externo (error 500) o un error de sintaxis JS/Python en un nodo Code.
    - Escribir un reporte técnico corto describiendo el error.
- [ ] **3. Proponer Parches de Código:**
    - Escribir la solución corregida para el nodo afectado (ej. cambiar una expresión antigua o añadir validación opcional).
- [ ] **4. Crear Issue o Alerta:**
    - Si el fallo es crítico (ej. los leads no están llegando a GoHighLevel), crear un Issue en Paperclip con alta prioridad detallando el parche.
    - Notificar al CTO Agent en el chat para acelerar la aprobación.
