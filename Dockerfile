FROM nginx
MAINTAINER buhuaqiang@163.com
VOLUME /tmp
RUN ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime
ENV LANG en_US.UTF-8
RUN echo "server {  \
                      listen       8080; \
                      location ^~ /jeecg-boot { \
                      proxy_pass              http://yaude-icloud-java:8080/yaude-boot/; \
                      proxy_set_header        Host jeecg-boot-system; \
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

ADD dist/ /var/www/html/

# 创建一个非特权用户
RUN useradd -r -u 1000 mynginxuser

# 将 Nginx 用户切换为新创建的用户
USER mynginxuser

EXPOSE 8080
