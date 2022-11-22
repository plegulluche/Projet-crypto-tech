FROM node:18
WORKDIR /app
COPY package.json ./
RUN npm install -g npm@7.19.1
RUN npm install
COPY ./ ./
EXPOSE 3000
CMD ["npm", "run", "dev"]
