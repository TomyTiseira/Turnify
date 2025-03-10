FROM node:21-alpine3.19

WORKDIR /usr/src/app

# Instala dependencias necesarias para compilar bcrypt
RUN apk add --no-cache python3 make g++

# Copia los archivos de configuración de dependencias
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto del código
COPY . .

# Expone el puerto
EXPOSE 3001

CMD ["npm", "run", "start"]