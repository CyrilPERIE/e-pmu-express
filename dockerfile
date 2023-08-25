FROM node:20-alpine3.17

WORKDIR /e-pmu-back-express
COPY package.json .
run npm install
COPY . .
run npm run build
cmd npm run start