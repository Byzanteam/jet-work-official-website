FROM node:current-alpine AS builder

RUN apk add git

RUN npm install -g pnpm

WORKDIR /srv

COPY package.json pnpm-lock.yaml .
RUN pnpm install

COPY . .

RUN pnpm run build

FROM nginx:stable-alpine

RUN mkdir /app

ARG APP_VSN
ARG APP_NAME
ARG SOURCE_REPO_URL
ARG SOURCE_SHA

LABEL maintainer=Byzanteam
LABEL jet_app=${APP_NAME}
LABEL jet_app_vsn=${APP_VSN}
LABEL source_repo_url=${SOURCE_REPO_URL}
LABEL source_sha=${SOURCE_SHA}

COPY --from=builder /srv/dist /app/dist

COPY deploy/nginx/start.sh /app/start.sh
RUN chmod +x /app/start.sh
COPY deploy/nginx/nginx.conf /etc/nginx/nginx.conf

ENTRYPOINT ["/app/start.sh"]
