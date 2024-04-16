FROM node:20.10.0

WORKDIR /app

COPY package*.json ./

RUN npm i -g @nestjs/cli

RUN yarn install

COPY . .

# コンテナ起動時
CMD ["yarn", "run", "start"]