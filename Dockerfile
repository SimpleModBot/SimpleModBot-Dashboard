FROM node:16-buster-slim
WORKDIR /app
RUN npm install --silent --production --no-progress --no-audit --no-optional --prefer-offline --no-package-lock
CMD npm run start