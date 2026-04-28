FROM node:20-alpine

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .

ENV PORT=3201
EXPOSE 3201

CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0", "--port", "3201"]
