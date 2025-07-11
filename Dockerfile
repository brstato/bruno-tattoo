FROM node:20-bullseye

# Instala dependências do sistema (opcional)
RUN apt-get update && apt-get install -y \
    curl \
    && rm -rf /var/lib/apt/lists/*

# Cria diretório de trabalho
WORKDIR /app

# Copia os arquivos do projeto
COPY . .

# Instala dependências
RUN npm install --legacy-peer-deps

# Gera build de produção
RUN npm run build

# Instala um servidor estático para servir a build
RUN npm install -g serve

# Expõe a porta padrão do Vite/serve
EXPOSE 3000

# Comando para rodar o servidor estático
CMD ["serve", "-s", "dist", "-l", "3000"]