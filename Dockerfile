FROM node:16-alpine

WORKDIR /micode

COPY . .

RUN yarn
