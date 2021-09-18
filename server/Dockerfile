FROM node:alpine

LABEL version="1.0"
LABEL description="This is the docker image for the express app running in dev"
LABEL maintainer = ["braxtonbrewton@gmail.com"]

ENV APP_DIR /usr/app/src

RUN mkdir -p ${APP_DIR}
WORKDIR ${APP_DIR}

CMD ["npm", "run", "dev"]