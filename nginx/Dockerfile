FROM nginx:latest
RUN mkdir -p /etc/nginx/ssl
COPY nginx.conf /etc/nginx/nginx.conf
COPY self-signed.crt /etc/nginx/ssl/self-signed.crt
COPY self-signed.key /etc/nginx/ssl/self-signed.key
COPY index.html /usr/share/nginx/html/index.html
COPY commit.png /usr/share/nginx/html/commit.png
EXPOSE 443
CMD ["nginx", "-g", "daemon off;"]

