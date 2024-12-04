FROM nginx:latest
RUN mkdir -p /etc/nginx/ssl
COPY nginx/nginx.conf /etc/nginx/nginx.conf
COPY nginx/self-signed.crt /etc/nginx/ssl/self-signed.crt
COPY nginx/self-signed.key /etc/nginx/ssl/self-signed.key
COPY nginx/index.html /usr/share/nginx/html/index.html
COPY nginx/commit.png /usr/share/nginx/html/commit.png
EXPOSE 443
CMD ["nginx", "-g", "daemon off;"]

