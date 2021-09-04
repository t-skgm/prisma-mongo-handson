FROM node:14

ENV NODE_ENV=development

RUN mkdir /workspace
COPY . /workspace

# install mongo client for debug
RUN echo "deb http://repo.mongodb.org/apt/debian stretch/mongodb-org/5.0 main" | tee /etc/apt/sources.list.d/mongodb-org-5.0.list
RUN apt-get update && apt-get install -y --allow-unauthenticated mongodb-org-shell

WORKDIR /workspace/app

RUN yarn install

# EXPOSE 3000
