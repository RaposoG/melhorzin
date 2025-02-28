FROM node:20.12.0 AS builder

WORKDIR /app

RUN npm install -g @angular/cli@17.0.0
COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN ng build --configuration production --progress

FROM nginx:alpine3.19

COPY --from=builder /app/dist/portfolio/browser /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 4200
