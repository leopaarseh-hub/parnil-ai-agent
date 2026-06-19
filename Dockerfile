# Containerized build for portable deployment (Cloud Run-style).
# The live site runs on Vercel; this image makes the agent reproducible anywhere.
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:20-alpine AS runtime
WORKDIR /app
ENV NODE_ENV=production
# Only what the server needs at runtime.
COPY package*.json ./
RUN npm ci --omit=dev
COPY --from=build /app/dist ./dist
COPY --from=build /app/api ./api
# Cloud Run sets PORT; the server reads it (defaults to 8080 here, 3000 locally).
ENV PORT=8080
EXPOSE 8080
CMD ["node", "dist/server.cjs"]
