FROM node:16-alpine

WORKDIR /wwt

COPY package*.json ./
RUN npm install
RUN npm install -g nx

CMD ["nx", "serve", "frontend"]
