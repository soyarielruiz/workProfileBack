FROM node:8

COPY package*.json /app/

WORKDIR /app

RUN npm install

COPY . /app

CMD npm start

EXPOSE 8080

