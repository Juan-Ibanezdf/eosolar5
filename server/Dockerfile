# Usar uma imagem base oficial do Node.js
FROM node:18-alpine

# Definir o diretório de trabalho dentro do container
WORKDIR /app

# Copiar os arquivos package.json e package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instalar as dependências do projeto
RUN npm install

# Copiar o restante do código do projeto para o diretório de trabalho
COPY . .

# Executar o build do projeto
RUN npm run build

# Expor a porta que o servidor usará
EXPOSE 3001

# Comando para iniciar a aplicação
CMD ["npm", "start"]
