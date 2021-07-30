FROM node:alpine

WORKDIR /usr/app

COPY . .

RUN npm install

EXPOSE 4000

CMD ["npm","start"]