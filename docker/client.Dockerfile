FROM node

RUN groupadd -g 459 dockeruser && \
    useradd -r -u 459 -g dockeruser -m dockeruser

USER dockeruser

RUN mkdir /home/dockeruser/project

WORKDIR /home/dockeruser/project

COPY ./package.json /home/dockeruser/project

RUN npm install

COPY . ./home/dockeruser/project

RUN mkdir dist

RUN mkdir dist/js

ENTRYPOINT ["npm", "run", "dev"]
