FROM golang:1.13-alpine
ENV LANG ja_jp.utf8

RUN apk --no-cache update && \
    apk add git 

WORKDIR /go/app
# COPY ./app/src /go/app
# RUN go mod download

EXPOSE 8001
