# Tools Documentation - DevOps Agent

El DevOps Agent interactúa con el sistema de Paperclip y monitorea la salud del VPS utilizando las siguientes herramientas autorizadas:

1.  **Consumo de API interna (curl):**
    *   Comando `curl` para obtener detalles de tareas, registrar comentarios de resolución en español y transicionar estados a `done`.
2.  **Monitoreo del VPS (Webhook de n8n):**
    *   Dado que el entorno de ejecución está en un sandbox seguro, la obtención de métricas de hardware y contenedores se realiza mediante el endpoint interno del webhook de n8n:
        `curl -s http://cedetu-n8nwithpostgres-jwbet1-n8n-1:5678/webhook/vps-status`
    *   Este endpoint ejecuta SSH en el host y devuelve métricas de memoria, disco, docker y copias de seguridad de forma segura.
