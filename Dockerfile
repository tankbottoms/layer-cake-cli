# FROM node:current-alpine3.12 as common-build-stage
FROM node:latest as common-build-stage
WORKDIR /usr/local/app
ADD . .
RUN yarn set version berry 
RUN yarn install && yarn build
COPY . .
# EXPOSE 3000

FROM common-build-stage as production-build-stage
ENV NODE_ENV production
