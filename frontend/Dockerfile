FROM node:17-alpine

WORKDIR /app

COPY package.json .

RUN npm install --silent

COPY . .

EXPOSE 3000

CMD ["npm", "start"]