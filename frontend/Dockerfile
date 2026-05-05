# Gunakan Nginx versi alpine yang ringan
FROM nginx:alpine

# Hapus default website bawaan Nginx
RUN rm -rf /usr/share/nginx/html/*

# Copy file frontend (HTML, CSS, JS) ke folder Nginx
COPY . /usr/share/nginx/html

# Expose port 80 untuk web server
EXPOSE 80

# Jalankan Nginx
CMD ["nginx", "-g", "daemon off;"]