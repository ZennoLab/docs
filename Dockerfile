FROM nginx:alpine

# Установка musl-locales для локалей
RUN apk add --no-cache musl-locales musl-locales-lang

ENV LANG=ru_RU.UTF-8
ENV LANGUAGE=ru_RU:ru
ENV LC_ALL=ru_RU.UTF-8

COPY build /usr/share/nginx/html