FROM node:16-alpine
COPY . /app
WORKDIR /app
VOLUME /app/public
VOLUME /app/src
EXPOSE 2830
# --registry=https://registry.npm.taobao.org
RUN npm install cnpm -g 
RUN cnpm install

CMD node ./main.js

#  docker build -t docker.io/guitar_preview:v3 .