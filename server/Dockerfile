FROM node:22.6.0-alpine3.19

WORKDIR /var/www/room_chat

COPY package.json .

RUN npm install

COPY . .

RUN npx prisma generate

EXPOSE 8080

CMD ["npm", "run" , "dev"]