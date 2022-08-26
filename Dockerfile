FROM node:14-alpine

WORKDIR /usr/src/app

COPY package.json ./

COPY . .

RUN yarn

RUN CI=true yarn test

RUN yarn build

COPY . .

EXPOSE 3000

CMD ["yarn", "start", "--host", "0.0.0.0", "--port", "3000"]
