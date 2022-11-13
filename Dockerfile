FROM node:16.15-alpine3.14
# Create app directory
WORKDIR /usr/src/app
COPY package.json ./
RUN npm install
COPY . .

EXPOSE 3003
CMD [ "node", "server.js" ]