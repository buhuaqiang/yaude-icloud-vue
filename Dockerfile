# 使用官方的 Ubuntu 镜像作为基础镜像
FROM ubuntu:latest

# 更新包管理器并安装 Nginx
RUN apt-get update && apt-get install -y nginx

MAINTAINER buhuaqiang@163.com
ENV LANG en_US.UTF-8
RUN echo "server {  \
                      listen       8080; \
                      location ^~ /yaude-boot { \
                      proxy_pass              http://yaude-icloud-java:8080/yaude-boot/; \
                      proxy_set_header        Host yaude-icloud-java; \
                      proxy_set_header        X-Real-IP \$remote_addr; \
                      proxy_set_header        X-Forwarded-For \$proxy_add_x_forwarded_for; \
                  } \
                  #解决Router(mode: 'history')模式下，刷新路由地址不能找到页面的问题 \
                  location / { \
                     root   /var/www/html/; \
                      index  index.html index.htm; \
                      if (!-e \$request_filename) { \
                          rewrite ^(.*)\$ /index.html?s=\$1 last; \
                          break; \
                      } \
                  } \
                  access_log  /var/log/nginx/access.log ; \
              } " > /etc/nginx/conf.d/default.conf \
    &&  mkdir  -p  /var/www \
    &&  mkdir -p /var/www/html

EXPOSE 8080
RUN mkdir -p /var/cache/nginx/client_temp &&   chmod 777 /var/cache/nginx/client_temp
RUN mkdir -p /var/cache/nginx/fastcgi_temp &&   chmod 777 /var/cache/nginx/fastcgi_temp
RUN mkdir -p /var/cache/nginx/proxy_temp &&   chmod 777 /var/cache/nginx/proxy_temp
RUN mkdir -p /var/cache/nginx/scgi_temp &&   chmod 777 /var/cache/nginx/scgi_temp
RUN mkdir -p /var/cache/nginx/uwsgi_temp &&   chmod 777 /var/cache/nginx/uwsgi_temp
RUN mkdir -p /var/run/nginx &&     chmod 777 /var/run/nginx
RUN mkdir -p /var/lib/nginx/body && chmod 777  /var/lib/nginx/body
RUN mkdir -p /var/log/nginx && chmod 777 /var/log/nginx
ENTRYPOINT ["nginx", "-g", "daemon off;"]

