FROM node:16.14

WORKDIR /app

RUN npm install eslint-config-prettier

RUN npm install -g serve

COPY package.json ./

COPY .env .

COPY .eslintrc.json .

COPY jsconfig.json .

COPY package-lock.json .

RUN npm install

COPY src ./src

COPY public ./public

RUN ls -al

RUN npm run build

ENV PORT=3000

EXPOSE 3000

ENTRYPOINT ["serve", "-s", "build"]
