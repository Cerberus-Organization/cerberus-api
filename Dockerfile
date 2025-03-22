# Use uma imagem base do Node.js
FROM node:20

# Defina o diretório de trabalho
WORKDIR /usr/src/app

RUN npm install -g @nestjs/cli

# Copie os arquivos de dependências
COPY package*.json ./

# Instale as dependências, incluindo o Nest CLI globalmente
RUN npm install

# Copie o restante do código
COPY . .

# Exponha a porta (opcional, já que usamos 'expose' no docker-compose)
EXPOSE 3000

# Comando padrão (pode ser sobrescrito pelo docker-compose)
CMD ["npm", "start"]
