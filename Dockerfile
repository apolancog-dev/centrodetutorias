FROM nginx:alpine

# Copiar todos los archivos del repositorio a la carpeta publica de Nginx
COPY . /usr/share/nginx/html

# Exponer el puerto 80
EXPOSE 80

# Iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]
