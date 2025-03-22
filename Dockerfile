# Usando a imagem oficial do Node.js
FROM node:18

# Diretório de trabalho no container
WORKDIR /usr/src/app

# Copiar os arquivos de dependências
COPY package*.json ./

# Instalar as dependências
RUN npm install

# Copiar o restante do código-fonte
COPY . .

# Comando para rodar a aplicação
CMD ["npm", "run", "start:dev"]
