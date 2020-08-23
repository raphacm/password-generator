FROM node:8-alpine as builder
ARG environment_profile=dist
RUN apk update && apk add --no-cache git ca-certificates tzdata openssh make

WORKDIR /app
COPY . .
RUN cp .env.${environment_profile} .env
RUN npm install && npm run build

FROM nginx:alpine
COPY --from=builder /etc/ssl/certs/ca-certificates.crt /etc/ssl/certs/
COPY --from=builder /usr/share/zoneinfo /usr/share/zoneinfo
COPY --from=builder /app/build /usr/share/nginx/html
COPY --from=builder /app/nginx/nginx-default.conf /etc/nginx/conf.d/default.conf
CMD ["nginx", "-g", "daemon off;"]
