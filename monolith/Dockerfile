FROM node

COPY . /app

WORKDIR /app

RUN npm install --only=production

EXPOSE 3000

CMD [ "node", "./server.js"]
