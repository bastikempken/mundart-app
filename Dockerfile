FROM node:10
WORKDIR /usr/src/app
# ---- express app -----
COPY package*.json ./
RUN npm install
COPY index.js .
COPY src src/
RUN mkdir /usr/src/app/logs/
# ---- config -----
COPY config.js .
# ---- client ------
COPY client/build client/build/
EXPOSE 3001
CMD [ "npm", "start" ]