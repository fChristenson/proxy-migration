FROM node

COPY . /app

WORKDIR /app

RUN npm install --only=production

CMD [ "node", "./server.js"]
