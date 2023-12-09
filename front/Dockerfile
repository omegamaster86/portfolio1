FROM node:18-alpine AS base
WORKDIR /front

FROM base AS dependencies  
RUN yarn install --production && yarn cache clean