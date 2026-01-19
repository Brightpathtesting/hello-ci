# Offizielles Playwright Image (Browser + System-Dependencies sind schon drin)
FROM mcr.microsoft.com/playwright:v1.57.0-jammy

# Arbeitsverzeichnis im Container
WORKDIR /app

# Nur package-Dateien kopieren (Docker Cache wird genutzt)
COPY package*.json ./

# Abhängigkeiten sauber installieren (reproduzierbar)
RUN npm ci

# Restlichen Projektcode kopieren (Tests, Config, etc.)
COPY . .

# Standard-Befehl: Playwright Tests ausführen
CMD ["npm", "run", "test:e2e:report"]

