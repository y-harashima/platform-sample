FROM golang:1.13-alpine
ENV LANG ja_jp.utf8

RUN apk --no-cache update && \
    apk add git \
            protobuf

WORKDIR /go/app/src
COPY ./app/ /go/app
# RUN go mod download

EXPOSE 8080 
CMD ["go","run","main.go"]
