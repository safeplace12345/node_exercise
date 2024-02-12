FROM node:18-alpine

WORKDIR /clientApp/

COPY ./public /clientApp/public
COPY ./src /clientApp/src
COPY ./package.json /clientApp/
COPY . .

RUN npm install

EXPOSE 4000

CMD ["npm", "start"]