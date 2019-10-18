FROM node:10

#make sure node_modules have correct permissions 
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app 

ENV NODE_ENV=production

#To install global npm dependencies, it is recommended to place those dependencies in the non-root user directory. (@see https://github.com/nodejs/docker-node/blob/master/docs/BestPractices.md#global-npm-dependencies)
ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
ENV PATH=$PATH:/home/node/.npm-global/bin

WORKDIR /home/node/app

COPY package*.json ./

RUN npm install

RUN npm install pm2 -g

COPY . .

COPY --chown=node:node . .

USER node

EXPOSE 4321

CMD [ "npm", "run", "reload" ]