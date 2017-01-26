FROM node

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/
RUN npm install

COPY . /usr/src/app
RUN npm install -g

CMD ["/usr/local/bin/jgfdot"]
