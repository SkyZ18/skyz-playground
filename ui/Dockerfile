# --- STAGE 1: Build-Umgebung ---
FROM node:20-alpine AS build-stage

# Arbeitsverzeichnis im Container festlegen
WORKDIR /app

# Da du zuvor Probleme mit der NPM-Registry hattest, 
# kopieren wir die .npmrc mit, falls sie existiert
COPY package*.json .npmrc* ./

# Projektabhängigkeiten installieren (npm ci ist sauberer für CI/CD)
RUN npm ci

# Den restlichen Quellcode kopieren
COPY . .

# Die Vue-App für die Produktion bauen (erzeugt den 'dist'-Ordner)
RUN npm run build

# --- STAGE 2: Produktions-Umgebung ---
FROM nginx:stable-alpine AS production-stage

# Kopiere die kompilierten Dateien aus der Build-Stage in das Nginx-Standardverzeichnis
COPY --from=build-stage /app/dist /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

# Exponiere Port 80 für den Webserver
EXPOSE 80

# Starte Nginx im Vordergrund
CMD ["nginx", "-g", "daemon off;"]
