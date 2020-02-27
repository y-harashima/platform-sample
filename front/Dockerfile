FROM node:10.13-alpine

RUN apk update && \
    apk add --no-cache \
        bash 

WORKDIR /app
COPY app/package.json /app
COPY app/yarn.lock /app
RUN yarn install
COPY app/ /app
CMD ["yarn","start"]
