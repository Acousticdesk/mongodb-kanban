FROM node:16

WORKDIR /server

COPY package*.json ./

RUN npm ci

COPY . .

EXPOSE 3000

RUN npm run build

ENTRYPOINT [ "./start.sh" ]
