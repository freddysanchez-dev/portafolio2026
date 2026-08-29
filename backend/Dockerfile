FROM node:20-alpine

WORKDIR /app

# Instalar dependencias primero (cache eficiente)
COPY package*.json ./
RUN npm install

# Copiar código fuente
COPY . .

EXPOSE 5000

CMD ["npm", "start"]