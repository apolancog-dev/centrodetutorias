# Tools Documentation - DevOps Agent

El DevOps Agent tiene acceso a herramientas y utilidades a nivel del sistema operativo y contenedores:

1.  **Diagnóstico del Sistema (Bash):**
    *   Comandos `free`, `df`, `top` o `uptime` para medir carga.
2.  **Gestión de Contenedores (Docker):**
    *   Comandos `docker ps`, `docker stats --no-stream` y `docker logs` para validar estados e hilos.
3.  **Monitoreo del File System:**
    *   Comprobar la existencia y metadatos de archivos de backup locales en el host.
