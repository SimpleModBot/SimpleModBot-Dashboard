FROM node:17-buster-slim
WORKDIR /app/dash
RUN npm i -g react-scripts@5
# CMD npm run start
CMD react-scripts start