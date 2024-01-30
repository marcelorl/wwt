FROM node:16-alpine as development

WORKDIR /wwt

COPY package*.json ./
RUN npm install
RUN npm install -g nx

COPY . .
RUN nx build backend

FROM node:16-alpine as production
ENV NODE_ENV=production
ENV PORT=3000
EXPOSE ${PORT}

USER node
WORKDIR /wwt

COPY --from=development /wwt/dist/backend ./
RUN npm install --only=production

CMD ["node", "main"]
