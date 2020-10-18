### STAGE 1: Build ###
FROM node:12.7-alpine AS build
WORKDIR /usr/src/app
COPY ./angular .
RUN npm install
RUN npm run build
### STAGE 2: Run ###
FROM nginx:1.17.1-alpine
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /usr/src/app/dist/tic-tac-toe-front /usr/share/nginx/html
