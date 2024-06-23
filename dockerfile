FROM node:20-alpine3.17

# Définit le répertoire de travail dans le conteneur
WORKDIR /app

# Copie le fichier package.json et package-lock.json dans le répertoire de travail
COPY package.json .

# Installe les dépendances
RUN npm install

# Copie le reste de l'application dans le répertoire de travail
COPY . .

# Expose le port que l'application utilise
EXPOSE 3000

# Commande pour lancer l'application
CMD npm run bstart