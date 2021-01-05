FROM node:12.18.0
WORKDIR /app
COPY yarn.lock ./
COPY package.json ./
RUN yarn
COPY ./ ./

ARG FRONTEND_ENVIRONMENT
RUN yarn build

EXPOSE 80
CMD [ "yarn", "start", "-p", "80" ]
