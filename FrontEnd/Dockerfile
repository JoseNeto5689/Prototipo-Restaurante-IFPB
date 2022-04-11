FROM node:16.14.2

WORKDIR /app

ENV EXPO_DEVTOOLS_LISTEN_ADDRESS: 0.0.0.0

RUN npm install npm@8.5.5 -g

RUN npm install --global expo-cli

EXPOSE 19000 19001 19002 3000

COPY . . 

RUN npm install 

CMD ["expo", "start"]
