FROM node:18-alpine AS base
WORKDIR /front

# FROM base AS dependencies  
# RUN yarn install --production && yarn cache clean

RUN mkdir -p /front
RUN yarn install --frozen-lockfile
# COPY package.json yarn.lock ./
# RUN yarn build