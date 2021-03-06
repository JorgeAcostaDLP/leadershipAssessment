FROM node:9.11.2
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
CMD ["npm","start"]