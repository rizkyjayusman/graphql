FROM node:22.5.1 AS build

WORKDIR /app

COPY frontend/package*.json ./frontend/

RUN npm install --prefix frontend

COPY frontend/ ./frontend/

RUN npm run build --prefix frontend

FROM node:22.5.1 AS backend

WORKDIR /app

COPY backend/package*.json ./

RUN npm install

COPY backend/ ./

COPY --from=build /app/frontend/build ./frontend/build

EXPOSE 3000

CMD ["node", "index.js"]