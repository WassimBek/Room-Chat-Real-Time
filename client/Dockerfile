FROM node:22.6.0-alpine3.19

WORKDIR /var/www/room_chat

COPY package.json .

RUN npm install

COPY . .

EXPOSE 5173

CMD ["npm", "run" , "dev"]