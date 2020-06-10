FROM node:12.18.0-alpine3.9

ARG SITEKEY=6LedHgAVAAAAAH_1ED_FVIXzUQ7M4mFOwyfyl8aU

COPY ./back /srv/back 

WORKDIR /srv/back 

RUN npm install -g typescript && yarn install && yarn build && yarn install --production && yarn cache clean && rm *.ts 

RUN cd /srv/back/front && yarn install && REACT_APP_SITEKEY=${SITEKEY} yarn build && yarn install --production && yarn cache clean && rm -rf node_modules/ && rm -rf src/

EXPOSE 9000/tcp

CMD node index.js





