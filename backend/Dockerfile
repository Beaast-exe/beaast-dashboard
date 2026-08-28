FROM node:alpine

WORKDIR /app

COPY package.json ./

RUN npm i -g corepack
RUN corepack enable yarn
RUN yarn install
COPY . .

EXPOSE 3000

CMD ["yarn", "dev"]