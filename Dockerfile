FROM node:10.12.0-alpine

RUN npm install -g yarn
RUN yarn global add nodemon@1.11.0

WORKDIR /usr/src/app

ADD .yarn_cache /usr/local/share/.cache/yarn/v1/

ADD ./package.json ./yarn.* /tmp/
RUN cd /tmp && yarn && yarn add pg pg-hstore cross-env mysql2 sqlite sqlite3
RUN cd /usr/src/app && ln -s /tmp/node_modules 

ADD . /usr/src/app/

EXPOSE 3000